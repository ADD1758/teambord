import React, { useMemo, useState } from 'react'

import { Task } from '../data/Task'

export default function Termine({tasks,supprimertache,precedant1}) {

  const [status, setStatus]=useState("done")

  const Tfaire=useMemo(()=>{
    console.log("calcule")
    return tasks.filter((t)=>{
      return t.status=== status.trim()
    })
  },[tasks,status])

  const Ttermine = tasks.filter((task) => {
    return task.status === "done"
  })
  return (
    
    <div>
      <h2>Termine</h2>
      
      {Tfaire.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
         
          {/* {task.status} */}



          <button  onClick={()=>{precedant1(task.id)}}>precedant</button> 
          
           {/* <button id="suivant" onClick={()=>{suivant(task.id)}}>suivant</button> */}

          <button id="supprimer" onClick={()=>{supprimertache(task.id)}}> supprimer</button>
        </div>))}
    </div>
  )
}
