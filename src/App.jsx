import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>My todo list</h1>
      <input
        className="input"
        placeholder="What do you need to do?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (value === ""){
            null
          } else if  (e.key === "Enter") {
            setTodos(todos.concat(value));
            setValue("");
          }
        }}
      />
      <ul>
        {todos.length===0 ? <li className="noTask"><i class="fa-solid fa-arrow-up"></i> no tasks, add a task <i class="fa-solid fa-arrow-up"></i></li> : 
          todos.map((task, index) => (
            <li 
            className="task"
            key={index}>
              {task}
              <i 
                className="x fa-solid fa-x"
                onClick={()=> setTodos((todos.filter((task, currentIndex) => index != currentIndex)))
                }>
              </i>
            </li>
          ))
        }
      </ul>
      <h3>tasks: <span className="totalTasks">{todos.length}</span></h3>
    </div>
  );
}

export default App;

