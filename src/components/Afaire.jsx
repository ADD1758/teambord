import React, { useMemo, useState } from 'react'
// import { Task } from '../data/Task'

export default function Afaire({tasks,supprimertache, suivant, precedant}) {

  const [status, setStatus] = useState("todo")

//   const Tfaire = useMemo(() => {

//     console.log("filtrage recalculé")
//     // return Task.filter((t)=>{
//     //   return t.status === status.trim()}) d'ou import Task
// return tasks.filter((t) => {
//   return t.status === status.trim()
// })

//   }, [tasks,status])

  const Tfaire = tasks.filter((task) => {
    return task.status === "todo"
  })

  return (
    <div>
      <h2>À faire</h2>

      {Tfaire.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
         
          {/* <span>{task.status}</span> */}

          <button id="suivant" onClick={()=>{suivant(task.id)}}>suivant</button>

          <button id="supprimer" onClick={()=> supprimertache(task.id)}> supprimer</button>
        </div>
      ))}

    </div>
  )
}