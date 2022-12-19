const moment = require('moment')
module.exports = {
    search,
    searchTickerInfo
}

async function search(req,res){
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

async function searchTickerInfo(req,res){
    const baseUrl = 'https://api.polygon.io/v3/reference/tickers'
    const key = process.env.API_KEY
    const tickerInfo = await fetch(`${baseUrl}/${req.body.data}?apiKey=${key}`).then(res => res.json()) 
    res.json(tickerInfo)
}
