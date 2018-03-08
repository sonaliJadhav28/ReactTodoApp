import React from 'react';

import './todoInput.css';

export default class TodoInput extends React.Component{

  constructor(props){
    super(props);

    // this.state = {value: "test"};
    this.state = {value: ''};
    // this.state = {value: this.props.todoText};

    this.handlechange = this.handlechange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handlechange(e){
    //  console.log("Change Here");
    this.setState({value: e.target.value});
  }

  addTodo(todo){
    // console.log("TODO:", todo)
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render(){
    return(
      <div className = "row">
        <input type = "text" value={this.state.value} onChange = {this.handlechange} />
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>  
      </div>
    );
  }
}