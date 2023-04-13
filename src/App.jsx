import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [showX, setShowX] = useState(false)



  return (
    <div>
      <h1>My todo list</h1>
      <input
        type="text"
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
        {todos.map((task, index) => (
          <li 
            onMouseEnter={() => setShowX(true)}
            onMouseLeave={() => setShowX(false)}
          key={index}>
            {task}
            {showX ? <i 
              className="borrar fa-solid fa-x"
              onClick={()=> setTodos((todos.filter((task, currentIndex) => index != currentIndex)))
              }>
              </i> : null}
          </li>
        ))}
      </ul>
      <h3>tasks: {todos.length}</h3>
    </div>
  );
}

export default App;

