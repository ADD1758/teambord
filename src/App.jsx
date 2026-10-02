import React, { useState } from 'react'
import Afaire from'./components/Afaire'
import Encours from './components/Encours'
import Termine from './components/Termine'
import { Task } from './data/Task'
import FormTask from './components/FormTask'
import './App.css'

export default function App() {
  const[tasks,setTasks]=useState(Task)
  const [filtre,setFiltre]=useState("all")
 
  const total= tasks.length
  function supprimertache(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function suivant(id){
    setTasks(tasks.map((task)=>{
      if(task.id===id){
      return { ...task,
        status:"in-progress"}
       
        // task.status="in-progress"
      }
      return task

    }))
  }
   function suivant1(id){
    setTasks(tasks.map((task)=>{
      if(task.id===id){
      return { ...task,
        status:"done"}
       
      }
      return task

    }))
  }

  function precedant(id){
    setTasks((tasks.map((task)=>{
      if(task.id===id){
        return {
          ...task,
          status:"todo"
        }
      } return task
    }))
    )
  }

  function precedant1(id){
    setTasks((tasks.map((task)=>{
      if(task.id === id){
       return{ ...task,
        status:"in-progress"}
      }return task
    })))
  }

  function ajouterTache(title) {

    const nouvelleTache = {

      id: total+1,
//  id: Date.now(),
      title: title,

      status: "todo"

    }

    setTasks([
      ...tasks,
      nouvelleTache
    ])

  }



  const tasksFiltrees = tasks.filter((task) => {

    if (filtre === "all") {
      return true
    }

    return task.status === filtre

  })


  
  return (
    <div>

      <h2>{total} taches</h2>


        <FormTask ajouterTache={ajouterTache} />
{/* 
        <div>

        <Afaire
          tasks={tasksFiltrees}
          supprimertache={supprimertache}
          suivant={suivant}
        />


        <Encours
          tasks={tasksFiltrees}
          supprimertache={supprimertache}
          suivant1={suivant1}
        />


        <Termine
          tasks={tasksFiltrees}
          supprimertache={supprimertache}
        />

      </div> */}

         <div>

        <button
          onClick={() => setFiltre("all")}
          className={filtre === "all" ? "active" : ""}
        >
          Toutes
        </button>


        <button 
          onClick={() => setFiltre("todo")}
          className={filtre === "todo" ? "active" : ""}
        >À faire
        </button>


        <button
          onClick={() => setFiltre("in-progress")}
          className={filtre === "in-progress" ? "active" : ""}
        >En cours
        </button>

        <button
          onClick={() => setFiltre("done")}
          className={filtre === "done" ? "active" : ""}
        >Terminé
        </button>

      </div>


        <div className='container'>
       <Afaire
       tasks={tasksFiltrees}
        supprimertache={supprimertache}
        suivant={suivant}/>
   
     
     
      <Encours
      tasks={tasksFiltrees}
      supprimertache={supprimertache}
      suivant1={suivant1}
      precedant={precedant}/>
     

      
     <Termine
     tasks={tasksFiltrees}
     supprimertache={supprimertache}
     suivant={suivant}
     precedant1={precedant1}/>
     </div>
    </div>
  
  )
}
