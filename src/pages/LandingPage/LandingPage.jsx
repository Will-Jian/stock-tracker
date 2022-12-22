import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import * as stocksApi from "../../utilities/stocks-api"
import StockInfo from "../../components/StockInformation/StockInformation";

export default function LandingPage({setUser}) {
  const [stock, setStock] = useState(null)
  const [tickerInfo, setTickerInfo] = useState(null)
  const [favorite, setFavorite] = useState(null)


  async function getStock(data) {
    const stock = await stocksApi.getStocks(data)
    setStock(stock)
  }
  async function getTickerInfo(data) {
    const tickerInfo = await stocksApi.getTickerInfo(data)
    setTickerInfo(tickerInfo)
  }

  async function addFavorite(stock) {
    const updatedUser = await stocksApi.addFavorite(stock)
    console.log("u[dated",updatedUser)
    setUser(updatedUser)
  }


  return (
    <div>
      <h1>Welcome to Stock Tracker</h1>
      <SearchBar getStock={getStock} getTickerInfo={getTickerInfo} />


      


      <StockInfo setStock={setStock} stock={stock} tickerInfo={tickerInfo} addFavorite={addFavorite} />

      {console.log(stock, tickerInfo, favorite)}
    </div>
  );
}