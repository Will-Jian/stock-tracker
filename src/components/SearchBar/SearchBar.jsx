import { useState } from "react"

export default function SearchBar({getStock}) {
    const [searchQuery, setSearchQuery] = useState("")

    function handleChange (evt) {
        evt.preventDefault()
        setSearchQuery(evt.target.value)
    }

   

    function handleSubmit (evt){
        evt.preventDefault()
        let query = searchQuery.toUpperCase()
        getStock(query)
    }

return(

    <div>
      <div className="form-container">
        <form 
        onSubmit={handleSubmit}
        >
          <label>Stock Ticker</label>
          <input 
            type="text" 
            name="ticker" 
            placeholder="search for stocks" 
            value={searchQuery}
            onChange={handleChange}
            required />
          <button type="submit">Search</button>
        </form>
      </div>
      
    </div>
)
}