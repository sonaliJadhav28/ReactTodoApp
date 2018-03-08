
import React from 'react';

import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper removeWrapper">
        <button className="btn btn-danger btn-sm removeTodo btn-" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>{this.props.todo.text}
      </div>
    );
  }
}