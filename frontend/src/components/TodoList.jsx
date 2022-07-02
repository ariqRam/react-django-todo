import { useState } from "react";
import Axios from 'axios';

import Todo from "./Todo";
import "../static/todoList.css"

const TodoList = (props) => {
  const { todos, setTodos } = props;
  const [selectedTodos, setSelectedTodos] = useState([]);

  // change one entry of todo
  const setTodo = (id, todo) => {
    for (let i in todos) {
      if (todos[i].id === id) {
        todos[i] = todo;
        setTodos(todos);
      }
    }
  };

  const handleTodoSelect = (event) => {
    let newSelectedTodos;
    if (!event.target.checked) {
      newSelectedTodos = [...selectedTodos, event.target.value];
    } else {
      newSelectedTodos = selectedTodos.filter((id) => { return id !== event.target.value });
    }
    console.log(newSelectedTodos);
    setSelectedTodos(newSelectedTodos);
  }

  const deleteSelectedTodos = (e) => {
    e.preventDefault();
    console.log('todos', todos);
    const newTodos = todos.filter(entry => {
      return !selectedTodos.includes(entry.id.toString());
    });
    setTodos(newTodos);
    console.log('newTodos', newTodos);
    Axios.post('http://localhost:8000/mockup/', newTodos)
      .then(res => {
        console.log(res);
      });
  }
  return (
    <>
      <form className="todoList" onSubmit={deleteSelectedTodos}>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              setTodo={(newTodo) => setTodo(todo.id, newTodo)}
              key={todo.id}
              handleTodoSelect={handleTodoSelect}
            />
          );
        })}
        <button type="submit">Delete</button>
      </form>
    </>
  );
};

export default TodoList;
