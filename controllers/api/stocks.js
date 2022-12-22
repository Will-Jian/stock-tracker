const e = require('express')
const moment = require('moment')
const Stock = require('../../models/stock');
const User = require('../../models/user');
const mongoose = require('mongoose');
module.exports = {
    search,
    searchTickerInfo,
    addFavorite
}

async function search(req, res) {
    // const baseUrl =  'https://api.polygon.io/v1/open-close'
    const baseUrl = 'https://api.polygon.io/v2/aggs/ticker'

    //const date = new Date();
    //const yesterday = date.setDate(date.getDate()-1)
    //let newDate = (moment(yesterday).toISOString()).substring(0,10)
    const key = process.env.API_KEY
    // const stock = await fetch(`${baseUrl}/${req.body.data}/${newDate}?adjusted=true&apiKey=${key}`).then(res => res.json()) 
    const stock = await fetch(`${baseUrl}/${req.body.data}/prev?adjusted=true&apiKey=${key}`).then(res => res.json())
    res.json(stock)

}

async function searchTickerInfo(req, res) {
    const baseUrl = 'https://api.polygon.io/v3/reference/tickers'
    const key = process.env.API_KEY
    const tickerInfo = await fetch(`${baseUrl}/${req.body.data}?apiKey=${key}`).then(res => res.json())
    res.json(tickerInfo)
}

async function addFavorite(req, res) {
    const user = await User.findOne({ _id: req.user._id })

    const stock = await Stock.exists({ ticker: req.body.results.ticker })
    if (stock) {
        if (!user.favorite.includes(stock._id)) {
            user.favorite.push(stock)
            await user.save()
        }
    } else {
        let newItem = {
            ticker: req.body.results.ticker,
            //  name: req.body.results.name,
            description: req.body.results.description,
            //  homepage: req.body.results.homepage_url,
            //  listDate: req.body.results.list_date
        }
        const newStock = await Stock.create(newItem)
        user.favorite.push(newStock._id)
        await user.save()
    }
    const updatedUser = await User.find({ _id: req.user._id }).populate("favorite").exec()
    console.log(updatedUser)
    res.json(updatedUser)
}