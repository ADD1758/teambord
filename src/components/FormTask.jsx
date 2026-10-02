import { useState } from "react"
import React from 'react'

export default function FormTask({ajouterTache}) {
    const [tittle, setTittle]=useState("")

    function handlesubmit(e){
        e.preventDefault()

        if(tittle.trim()===""){
            // return e.tittle= tittle.trim()
            return
        }
        ajouterTache(tittle)
        setTittle("")
    }
  return (
    <div>
        <h2>FormTask</h2>
        <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder="ajouter une nouvelle tache"  value={tittle}
            onChange={(e) => setTittle(e.target.value)}/>

             <button type="submit">
        Ajouter
      </button>

    
        </form>
    </div>
  )
}
