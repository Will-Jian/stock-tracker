
export default function StockInfo({ stock, tickerInfo, addFavorite, setStock }) {


  if (!stock || !tickerInfo) return null

  function handleClick(evt) {

    addFavorite(tickerInfo)
    setStock(null)
  }

  return (


    <div className="form-container">
      <h1>{tickerInfo.results.name}</h1>
      <p>
        PREVIOUS OPEN: {stock.results[0].c} ||
        PREVIOUS STOCK VOLUME: {stock.results[0].v}
      </p>
      <p>
        {tickerInfo.results.description}
      </p>

      <div>
        <button onClick={handleClick}>Add to Favorite</button>
      </div>

    </div>

  )
}


