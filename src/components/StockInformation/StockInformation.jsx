import FavoriteStock from "../FavoriteStock/FavoriteStock"
export default function StockInfo({stock, tickerInfo}){
  


return(
  
 
<div className="form-container">
<h1>{tickerInfo.results.name}</h1>
      <p>
        PREVIOUS OPEN: {stock.results[0].c} || 
        PREVIOUS STOCK VOLUME: {stock.results[0].v}
      </p>
      <p>
        {tickerInfo.results.description}
      </p>
  
    <FavoriteStock  />
</div>
      
)
}


