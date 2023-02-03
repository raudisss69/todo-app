import React, { useState } from "react";
//importing components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, edit, setEdit }) => {
    const [search, setSearch] = useState("");

    return (
        <div className="search-container">
            <label type="text">Search</label>  
            <input type="text" onChange={e => setSearch(e.target.value)} />
            {
                todos.filter(todo => {
                    if(search === "") {
                        return todo;
                    }else if(todo.text.toLowerCase().includes(search.toLowerCase())){
                        return todo;
                    }
                }).map((todo) =>{
                    return(
                        <div className="todo-container">
                        <ul className="todo-list">
                <Todo 
                    setTodos={setTodos} 
                    todos={todos}
                    key={todo.id}
                    todo={todo} 
                    text={todo.text} 
                    id={todo.id} 
                    desc={todo.desc}
                    date={todo.date}
                    edit={edit}
                    setEdit={setEdit}
                />  
            </ul>
            </div>
                    )
                })}
        </div>
    );
};

export default TodoList;