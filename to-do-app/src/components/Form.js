import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ setInputText, todos, setTodos, inputText, inputDesc, inputDate, setInputDate, setInputDesc, edit, setEdit }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const inputDescHandler = (e) => {
        setInputDesc(e.target.value);
    };
    const inputDateHandler = (e) => {
        setInputDate(e.target.value);
    };
    const [editing, setEditing] = useState(() =>{
        const edit = localStorage.getItem('edit')
        if(edit){
            return(edit)
        }else{
            return(edit)
        }
    });
    
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
            text: inputText, 
            completed: false, 
            id: Math.random() * 1000,
            desc: inputDesc, 
            date: inputDate}
        ]);
        setInputText("");
        setInputDesc("");
        nav("/");
    };
    const nav = useNavigate();
    if(editing === 'true'){
        return(
            <div className="createtask">
            <form>
                <label>Edit Tasks Name</label>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                <label>Edit Tasks Description</label>
                <input value={inputDesc} onChange={inputDescHandler} className="todo-input"/>
                <label value={inputDate}>Edit Date</label>
                <input type="date" onChange={inputDateHandler} />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus square"></i>    
                </button>
                <button onClick={() => nav("/")}>Cancel</button>
            </form>
            </div>
        );
    }else{
        return(
            <div className="createtask">
            <form>
                <label>Tasks Name</label>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                <label>Tasks Description</label>
                <input value={inputDesc} onChange={inputDescHandler} className="todo-input"/>
                <label value={inputDate}>Date</label>
                <input type="date" onChange={inputDateHandler} />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus square"></i>    
                </button>
                <button onClick={() => nav("/")}>Cancel</button>
            </form>
            </div>
        );
    }
    // return(
    //     <div className="createtask">
    //     <form>
    //         <label>Tasks Name</label>
    //         <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
    //         <label>Tasks Description</label>
    //         <input value={inputDesc} onChange={inputDescHandler} className="todo-input"/>
    //         <label value={inputDate}>Date</label>
    //         <input type="date" onChange={inputDateHandler} />
    //         <button onClick={submitTodoHandler} className="todo-button" type="submit">
    //             <i className="fas fa-plus square"></i>    
    //         </button>
    //         <button onClick={() => nav("/")}>Cancel</button>
    //     </form>
    //     </div>
    // );
}

export default Form;