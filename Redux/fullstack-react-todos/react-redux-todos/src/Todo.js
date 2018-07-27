import React from 'react';


const Todo = ({task, handleDelete, toggleTodo, completed}) => {
	let style = completed ? {textDecoration: "line-through"} : {}
	return <li onClick={toggleTodo} style={style}>{task}<button onClick={handleDelete}>X</button></li>

};


export default Todo;

