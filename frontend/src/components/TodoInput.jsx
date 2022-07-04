import { useState } from "react";
import Axios from "axios";

import "../static/todoInput.css";
import mockupDb from "../static/mockupDb.json";

const TodoInput = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleChange = (event) => {
    // handle the change in todo title
    setNewTitle(event.target.value);
    // const lastTodo = mockupDb[mockupDb.length - 1];
    // setNewTodo({ id: mockupDb ? lastTodo.id + 1 : 1, title: event.target.value, description: 'Please do it', completed: false });
  };

  const handleDescChange = (event) => {
    setNewDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const lastTodo = mockupDb[mockupDb.length - 1];
    const newTodo = {
      id: mockupDb[0] ? lastTodo.id + 1 : 1,
      title: newTitle,
      description: newDesc,
      completed: false,
    };
    console.log(newTodo);
    const newMockupDb = [...mockupDb, newTodo];
    console.log("submit!!");
    Axios.post("http://localhost:8000/mockup/", newMockupDb).then((res) => {
      console.log(res);
    });

    setNewTitle("");
    setNewDesc("");
    props.initializeTodos();
  };

  return (
    <>
      <form className="inputGroup">
        <h1>Add a Todo</h1>
        <input
          type="text"
          placeholder="Enter a new todo title . . ."
          onChange={handleChange}
          value={newTitle}
        />
        <input
          type="text"
          placeholder="Enter a description . . ."
          onChange={handleDescChange}
          value={newDesc}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default TodoInput;
