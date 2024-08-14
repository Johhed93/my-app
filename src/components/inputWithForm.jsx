import React, { useState } from "react";
import Toaster from "./succes";
export default function InputForm() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState({ task: "", date: "" });
  const [finishedTasks, setFinishedTask] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedTasks = [...task, newTask];
    const sortedList = updatedTasks.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    setTask(sortedList);
    setNewTask({ task: "", date: "" });
  }
  function removeTask(index) {
    const uppdatedTasks = task.filter((_, i) => i !== index);
    setTask(uppdatedTasks);
    Toaster(true)
  }
  const getTaskStyle = (task) => {
    const today = new Date();
    const taskDate = new Date(task.date);
    const timeDifference = taskDate - today;
    const daysLeft = timeDifference / (1000 * 3600 * 24);

    if (daysLeft < 2) {
      return "task-urgent";
    } else if (daysLeft < 7) {
      return "task-soon";
    } else {
      return "task-normal";
    }
  };
  function addFinishedTask(index) {
    setFinishedTask(prevState=>[...prevState,task[index]])
    removeTask(index);
  }
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const today = new Date();
  const nextYear = new Date();
  nextYear.setFullYear(today.getFullYear() + 1);
  function ShowFinishedTasks(){
  if(finishedTasks.length===0){
    return;
  }
  return(
    <div>
      <button className="tasksDone">{finishedTasks.length}</button>
    </div>
  )
  }
  
  return (
    <div className="form">
      {ShowFinishedTasks()}
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="headers">Todo-app</h1>
        <div className="taskContainer">
          <label htmlFor="task">Vad ska du göra?</label>
          <input
            type="text"
            name="task"
            placeholder="Laga mat"
            className="inputForm"
            id="taskInput"
            value={newTask.task}
            onChange={handleChange}
          />
          <div className="Importance">
            <label htmlFor="importance">När ska den vara klar? </label>
            <input
              type="date"
              name="date"
              id="dateLog"
              className="dateLog"
              value={newTask.date}
              onChange={handleChange}
              min={formatDate(today)}
              max={formatDate(nextYear)}
            />
          </div>
          <button type="submit" className="submitBtn">
            Skicka
          </button>
        </div>
      </form>
      <ul className="list">
        {task.map((element, index) => (
          <li className={`listItem ${getTaskStyle(element)}`} key={index}>
            {capitalizeFirstLetter(element.task)}
            <div className="btnContainer">
            <button className="doneBtn" onClick={() => addFinishedTask(index)}>
                Klar
              </button>
              <button className="removeBtn" onClick={() => removeTask(index)}>
                Ta bort
              </button>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
