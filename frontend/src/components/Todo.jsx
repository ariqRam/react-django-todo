// import { useState } from "react";
import "../static/todo.css";

const Todo = (props) => {
  //   const [todo, setTodo] = useState(props.todo);
  const { todo, setTodo } = props;

  console.log(todo.completed);

  const onCheckboxChange = (event) => {
    todo.completed = !event.target.checked;
    setTodo(todo);
    console.log(todo.completed);
  };

  const onCheckboxClick = (event) => {
    event.target.checked = todo.completed;
    console.log("==================", event.target.checked);
  };

  return (
    <div className="todoContainer">
      <h2 className={"todoTitle " + todo.completed ? "strikethrough" : ""}>
        {todo.title}
      </h2>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onCheckboxChange}
        onClick={onCheckboxClick}
      />
      <p>{todo.description}</p>
    </div>
  );
};

export default Todo;
