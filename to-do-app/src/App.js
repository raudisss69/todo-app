import React, { useState } from "react";
import './App.css';

import Form from './components/Form';
import todoList from "./components/todoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form  setInputText={setInputText} />
      <todoList />
    </div>
  );
}

export default App;
