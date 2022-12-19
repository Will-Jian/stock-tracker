import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import * as stocksApi from "../../utilities/stocks-api"
import StockInfo from "../../components/StockInformation/StockInformation";

export default function LandingPage() {
  const [stock,setStock] = useState({})
  const [tickerInfo, setTickerInfo] = useState({})

  async function getStock(data){
    const stock = await stocksApi.getStocks(data)
    setStock(stock)
  }
  async function getTickerInfo(data){
    const tickerInfo = await stocksApi.getTickerInfo(data)
    setTickerInfo(tickerInfo)
  }

  

  return (
    <div>
    <h1>Home Page</h1>
    <SearchBar getStock = {getStock} getTickerInfo={getTickerInfo} />
    {console.log(stock,tickerInfo)}
    
    {/*stock.length !== undefined && <div>hi</div>*/}
    {Object.keys(stock).length > 0 && 

    <StockInfo stock={stock} tickerInfo={tickerInfo}/> }
    
    
    </div>
  );
}