/* .to-do-list {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 100px;
}
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #110f0f;
  color: #333;
}

h1 {
  font-size: 3.5em;
  color: #333;
}

button {
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.5s ease;
}

input[type="text"] {
  padding: 4px;
  font-size: 1.3em;
  border: 1px solid #d3bfbf;
  border-radius: 5px;
  width: 50%;
}
.add-button {
  background-color: green;
}

.add-button:hover {
  background-color: darkgreen;
}

.delete-button {
  background-color: red;
}

.delete-button:hover {
  background-color: darkred;
}

.move-up-button {
  background-color: blue;
}

.move-up-button:hover {
  background-color: darkblue;
}

.move-down-button {
  background-color: orange;
}

.move-down-button:hover {
  background-color: darkorange;
}

ol {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d3bfbf;
}

.text {
  font-size: 1.3em;
  flex: 1;
}

.delete-button, .move-up-button, .move-down-button {
  padding: 12px;
    font-size: 1.3em;
    margin-left: 5px;
} */
import Reacr,  {useState} from 'react';
function ToDoList()
{
    const [tasks, setTask] = useState(["Eat breakfast", "Take a Shower", "Walk the dog"]); // task is the state variable and setTask is the function to update the state variable
    const [newTask, setNewTask] = useState(""); // newTask is the state variable and setNewTask is the function to update the state variable

    function handleInputChange(event)
    {
        setNewTask(event.target.value);
    }

    function addTask()
    {
        if(newTask !== "")
        {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index)
    {
        setTask(t => t.filter((_, i) => i !== index));
    }

    function moveTaskUp(index)
    {
        if (index > 0)
        {
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index - 1];
            newTasks[index - 1] = temp;
            setTask(newTasks);
        }


    }

    function moveTaskDown(index)
    {
        if (index < tasks.length - 1)
        {
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index + 1];
            newTasks[index + 1] = temp;
            setTask(newTasks);
        }
    }
    return (
     <div className='to-do-list'>
        <h1>To Do List</h1>
        <div className='add-task'>
            <input type='text' value={newTask} onChange={handleInputChange} placeholder='Enter a new task'/>
            <button onClick={addTask} className='add-button'>Add Task</button>
        </div>
       <ol>
              {tasks.map((task, index) => (
                  <li key={index}>
                     <span className='text'>
                            {task} 
                     </span>
                        <button onClick={() => deleteTask(index)} className='delete-button'>Delete</button>
                        <button onClick={() => moveTaskUp(index)} className='move-up-button'>👆</button>
                        <button onClick={() => moveTaskDown(index)} className='move-down-button'>👇</button>
                  </li>
              ))}
       </ol>
     </div>
    );
}


export default ToDoList;