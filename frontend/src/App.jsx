import { useEffect, useState } from "react";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput"

import "./static/App.css";
import mockupDb from './static/mockupDb.json';

function App() {
  const [todos, setTodos] = useState([]);

  const initializeTodos = () => {
    setTodos(mockupDb);
  };

  useEffect(() => {
    initializeTodos();
  }, [todos]);

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={(todos) => setTodos([...todos])} />
      <TodoInput initializeTodos={initializeTodos} />
    </div>
  );
}

export default App;
