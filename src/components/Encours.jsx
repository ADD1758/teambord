import React from 'react'
// import { Task } from '../data/Task'
import { useState,useMemo } from 'react'

export default function Encours({tasks,supprimertache,suivant1,precedant}) {


    const [status, setStatus] = useState("in-progress")
  
    const Tfaire = useMemo(() => {
  
      console.log("filtrage recalculé")
  // return Task.filter((t) => {
  //   return t.status === status.trim()
  // })
  // le tableau change apres suppression donc on utilise tasks
  
  return tasks.filter((t)=>{
    return t.status=== status.trim()
  })
    }, [tasks,status])
    //donc on doit l'ajouter a status

    //  inutile const [tasks, setTasks] = useState(Task)

  
  const Tencours = tasks.filter((task) => {
    return task.status === "in-progress"
  })
  
  return (
    <div>

       <h2>Encours</h2>

      {Tfaire.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
         
          {/* {task.status} */}
           <button onClick={()=>{precedant(task.id)}}>precedant</button>

           <button id="suivant" onClick={()=>{suivant1(task.id)}}>suivant</button>

          <button id="supprimer" onClick={()=>{supprimertache(task.id)}}> supprimer</button>
        </div>))}
    </div>
  )
}
