import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import {addTodo, removeTodo, getTodos, toggleTodo} from './actionCreators';
import {Route} from "react-router-dom";
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
	constructor(props){
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}
	componentDidMount(){
		this.props.getTodos()
	}

	handleAdd(todo){
		this.props.addTodo(todo);
	}

	handleDelete(id){
		this.props.removeTodo(id);
	}

	toggleTodo(id){
		this.props.toggleTodo(id);
	}

	render(){
		let todos = this.props.todos.map((t, i) => (
			<Todo 
				key={t._id} 
				{...t} 
				toggleTodo={this.toggleTodo.bind(this, t._id)}
				handleDelete={this.handleDelete.bind(this, t._id)}
			/>
		));
		return (
			<div>
				<Route path="/todos/new" render={props => (
					<NewTodoForm {...props} handleSubmit={this.handleAdd} />
				)} />
				<Route exact path="/todos" render={() => <div><ul>{todos}</ul></div>} />
			</div>
		)
	}
}

function mapStateToProps(reduxState){
	return {
		todos: reduxState.todos
	}
}




export default connect(mapStateToProps, {
	addTodo,
	removeTodo, 
	getTodos, 
	toggleTodo
})(TodoList);