import { useState } from "react"

export default function SearchBar({getStock, getTickerInfo}) {
    const [searchQuery, setSearchQuery] = useState("")

    function handleChange (evt) {
        evt.preventDefault()
        setSearchQuery(evt.target.value)
    }


    function handleSubmit (evt){
        evt.preventDefault()
        let query = searchQuery.toUpperCase()
        getTickerInfo(query)
        getStock(query)
        setSearchQuery("")
  
    }

return(

    <div>
      <div className="form-container">
        <p>Search for a stock ticker</p>
        <form 
        onSubmit={handleSubmit}
        >
          <label>Stock Ticker</label>
          <input 
            type="text" 
            name="ticker" 
            placeholder="search for stock tickers" 
            value={searchQuery}
            onChange={handleChange}
            required />
          <button type="submit">Search</button>
        </form>
      </div>
      
    </div>
)
}