import { useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import "./static/App.css";

const todosDb = [
  {
    id: 1,
    title: "Walk the dog",
    description: "Walk the dog to Menlo park for 30 minutes",
    completed: false,
  },
  {
    id: 2,
    title: "Study math",
    description: "Study linear algebra for 2 hours",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState([]);

  const initializeTodos = () => {
    setTodos(todosDb);
  };

  const changeTodos = (todos) => {
    console.log(todos);
    setTodos(todos);
  };

  useEffect(() => {
    initializeTodos();
  }, [todos]);

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={changeTodos} />
    </div>
  );
}

export default App;
