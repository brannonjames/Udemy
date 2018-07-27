import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';
import { Link, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <p>
        	<Link to="/todos">See my todos!</Link>
        </p>
        <p>
        	<Link to="/todos/new">New</Link>
        </p>
        <Route path="/todos" component={TodoList} />		
        <Route exact path="/" render={() => <Redirect to="/todos" />} 
        />	
        	
      </div>
    );
  }
}

export default App;
