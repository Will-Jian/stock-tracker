import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { PromiseProvider } from 'mongoose'

export default function FavoriteStock({props}){
   
 useEffect(() =>{
    const variable = {
        userFrom: props.userFrom ,
        tickerId: props.tickerId,
    }

 })

function handleSubmit(){
    
}

    return(
        <div>
            <button onSubmit={handleSubmit}>Add to Favorite</button>
        </div>

    )
}