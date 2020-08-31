import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header.js';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import About from './components/pages/About.js';
import {v4 as uuidv4} from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id : uuidv4(),
        title: "Take out the trash",
        completed: true
      },
      {
        id : uuidv4(),
        title: "Milk the cow",
        completed: false
      },
      {
        id : uuidv4(),
        title: "Make pancakes",
        completed: true
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {

      if(todo.id === id){
          todo.completed = !todo.completed;
      }
      return todo;

    })})
}

//Delete Todo
deleteTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

//Add Todo
addTodo = (title) => {

  const newTodo = {
    id: uuidv4,
    title, //es6 format
    completed: false
  }

  this.setState({todos: [...this.state.todos, newTodo]});
}

  render(){
    return (
      <Router>
        <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo = {this.addTodo} />
                  <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} markComplete={this.markComplete}/>
                </React.Fragment>
              )} />

              <Route path="/about" component={About}/>

              
            </div>
        </div>
        </Router>
    );
  }
  
}

export default App;
