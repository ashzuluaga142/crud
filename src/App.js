import { isEmpty } from 'lodash'
import React, { useState }from 'react' /* importar  el primer estado hut */
import shortid from 'shortid'

function App() {
  const [task, setTask]= useState("") /* cuando el  usuairo ingrese algo  */
  const [tasks, setTasks] = useState([])


  const addTask =(e) => {
    e.preventDefault() /*para evitar ue nos recargue la pagina por el sudmit  */
    /*para validar  si un campo este vacido o no esta vacido varias  
    formas  podemos utilizar una librerias lodash  desde la terminar  cargamos el loash. yarn add lodash*/
    if(isEmpty(task)){
      console.log("Task empty")
      return
    } 
     const newTask = {
       id: shortid.generate(),
       name: task
     }
     setTasks([...tasks, newTask ])

     setTask("") /* despues de decir si  la tarea esta correcta lo vamos   a dejar nulo */
  }

  return (
    <div className ="container mt-5">
      <h1>TAREAS</h1>
      <hr/>
         <div className="row">
            <div className="col-8">
              <h4 className="tex-center">Lista de Tareas</h4>
              <ul className="list-group">
             {
               tasks.map((task) => ( 
                <li className="list-group-item"key={task.id} >
                  <span className="lead">{task.name}</span>
                  <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button> 
                  <button className="btn btn-warning btn-sm float-right">Editar</button>
                  </li>
               ))
                
              }
              </ul>
            </div>
            <div className="col-4">
            <h4 className= "tex-center">Formulario</h4>
            
            <form onSubmit={addTask}> 
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese la Tarea"
                /* el metodo onchange nos hace una funcion tipo flecha  */
                onChange={(text)=> setTask(text.target.value)}/* cuando   ingrese  algo en  tarea  
                vamos  asginarle a la variale task */
                value={task}/* limpiar la tarea  */
              />     
            
            <button className="btn btn-dark btn-block"
              /* como colocamos un  boton tipo submit "va a disparar la accion del  formulario y se modifica e
              el metodo <form onSubmit={addTask}>"cuando el metodo requiere parametros  tenemos qye  hacer la funciona  flecha
              pero en este caso  no necesitamos parametros */
             type="submit"
            >Agregar
            </button>
            </form>
            </div>
         </div>
    </div>
  )
}

export default App
