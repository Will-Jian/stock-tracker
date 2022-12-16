const moment = require('moment')
module.exports = {
    search
}

async function search(req,res){
    const baseUrl =  'https://api.polygon.io/v1/open-close'
    const date = new Date();
    const yesterday = date.setDate(date.getDate()-1)
    let newDate = (moment(yesterday).toISOString()).substring(0,10)
    const key = process.env.API_KEY

    const stock = await fetch(`${baseUrl}/${req.body.data}/${newDate}?adjusted=true&apiKey=${key}`).then(res => res.json()) 
    res.json(stock)
}