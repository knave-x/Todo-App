import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {todos.map((todo, i) => (
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
