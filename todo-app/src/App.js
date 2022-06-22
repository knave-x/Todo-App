import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header>
        <h1>Batu's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setInputText={setInputText} />
      <TodoList />
    </div>
  );
};

export default App;
