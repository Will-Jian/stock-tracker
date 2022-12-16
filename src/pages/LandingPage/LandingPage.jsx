import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import * as stocksApi from "../../utilities/stocks-api"

export default function LandingPage() {
  const [stock,setStock] = useState({})

  async function getStock(data){
    const stock = await stocksApi.getStocks(data)
    setStock(stock)
  }
  return (
    <div>
    <h1>Home Page</h1>
    <SearchBar getStock = {getStock} />
    {stock &&
    <p>{stock.open}</p>
    }
    </div>
  );
}