import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  console.log(filteredTodos);
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {filteredTodos.map((todo, i) => (
        <Todo
          setTodos={setTodos}
          todo={todo}
          todos={todos}
          text={todo.text}
          key={i}
        />
      ))}
    </div>
  );
};

export default TodoList;
