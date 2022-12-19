import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { PromiseProvider } from 'mongoose'

export default function FavoriteStock({props}){
   
 
function handleSubmit(){
    
}

    return(
        <div>
            <button onSubmit={handleSubmit}>Add to Favorite</button>
        </div>

    )
}