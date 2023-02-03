import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

const Todo = ({text, todo, todos, setTodos, desc, date, edit, setEdit }) =>{
    //events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    const [editing, setEditing] = useState(false);
    useEffect (() =>{
        const edit = JSON.stringify(editing)
        localStorage.setItem("edit", edit)
        if(localStorage.getItem('edit') === 'true'){
            nav("/create")
        }
    },[editing]);
    // const editHandler = () => {
    //     setEdit(true)
    //         nav("/create")
    // }
    const nav = useNavigate();

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{desc}</li>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{date}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            <button onClick={()=>{setEditing(true)}}>Edit</button>
        </div>
    );
};

export default Todo;

