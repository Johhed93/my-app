import React, { useState} from 'react';
export default function InputWithoutForm (){
    const [task, setTask]=useState([]);
    const [newTask, setNewTask]=useState("");
    
    
    function addTask(){
    setTask(prev=>[...prev,newTask])
    setNewTask("")
    }
    function handleInputs(event){
        event.preventDefault();
        setNewTask(event.target.value)
    }
   
    return (
        <div className='form'> 
         <h1 className="headers">Todo-app</h1>
         <div className="taskContainer">
         <label htmlFor="task">Vad ska du göra?</label>
         <input type="text" name="task" placeholder="Laga mat" className="inputForm" id="taskInput" value={newTask} onChange={handleInputs} />
         <button type="submit" className="submitBtn" onClick={addTask}>Skicka</button>
         </div>
         <ul>{task.map((element, index)=>
          <li key={index}>{element}</li>  
        )}</ul>
         </div>
         
    )
}