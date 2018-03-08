import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/header';
import ToDoInput from './components/todoInput';
import TodoItem from './components/todoItem';

import './App.css';


class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            todos: [
              {id: 0, text: "Dummy Text 1"},
              {id: 1, text: "Dummy Text 2"},
              {id: 2, text: "Dummy Text 3"}
            ],
            nextId: 3
          };

        this.addTodo =this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

    }

    addTodo(todoText){
    //   console.log("To Do Added:", todoText);
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
    }

    removeTodo(id){
        // console.log("To Dos Removed:", id);
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
          });
    }

    render() {
        return ( 
        <div className = "App container">
            <div className = "todo-wrapper">
               <Header/>
               <ToDoInput todoText="" addTodo={this.addTodo}/> 
                    <ul>
                        {
                            this.state.todos.map((todo) => {
                                 return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                            })
                        }
                    </ul>              
            </div>
        </div>

        );
        }
    }

 
    export default App;
  