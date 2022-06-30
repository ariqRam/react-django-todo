import "../static/todo.css";

const Todo = (props) => {
  const { todo, setTodo } = props;

  const onCheckboxChange = (event) => {
    todo.completed = !event.target.checked;
    setTodo(todo);
  };

  const onCheckboxClick = (event) => {
    event.target.checked = todo.completed;
  };

  return (
    <div className="todoContainer">
      <h2
        className="todoTitle"
        style={
          todo.completed
            ? { textDecoration: "line-through", color: "gray" }
            : {}
        }
      >
        {todo.title}
      </h2>
      <input
        type="checkbox"
        value={todo.id}
        checked={todo.completed}
        onChange={onCheckboxChange}
        onClick={onCheckboxClick}
      />
      <p>{todo.description}</p>
      <hr />
    </div>
  );
};

export default Todo;
