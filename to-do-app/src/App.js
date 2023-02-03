import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';
import Navbar from "./components/Navbar";

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [edit, setEdit] = useState (false);
  const [todos, setTodos] = useState(() => {
    const savedTasks = localStorage.getItem("todos")
    if (savedTasks) {
        return JSON.parse(savedTasks)
    } else {
        return []
    }
})
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();    
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save
  const saveLocalTodos = () => {
      localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
  };

  return (
       <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<TodoList 
            filteredTodos={filteredTodos} 
            edit={edit}
            setEdit={setEdit}
            setTodos={setTodos} 
            todos={todos} 
          />} />
            <Route path="/create" element={<Form 
            inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
            setStatus={setStatus}
            setInputDesc={setInputDesc}
            setInputDate={setInputDate}
            inputDesc={inputDesc}
            inputDate={inputDate}
            edit={edit}
            setEdit={setEdit}
        />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
