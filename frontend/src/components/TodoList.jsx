import Todo from "./Todo";
import "../static/todoList.css"

const TodoList = (props) => {
  const { todos, setTodos } = props;

  // change one entry of todo
  const setTodo = (id, todo) => {
    for (let i in todos) {
      if (todos[i].id === id) {
        todos[i] = todo;
        setTodos(todos);
      }
    }
  };

  return (
    <>
      <div className="todoList">
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              setTodo={(newTodo) => setTodo(todo.id, newTodo)}
              key={todo.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
