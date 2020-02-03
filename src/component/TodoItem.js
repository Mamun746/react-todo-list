import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { todos, handleRemove, handleEdit } = this.props;

    return (
      <div>
        <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
          <h6>{todos.title}</h6>
          <div className='todo-icon'>
            <span
              className='mx-2 text-success'
              onClick={() => handleEdit(todos.id)}
            >
              <i style={{cursor:'pointer'}} class="fa fa-edit fa-lg"></i>
            </span>
            <span
              className='mx-2 text-danger'
              onClick={() => handleRemove(todos.id)}
            >
              <i style={{cursor:'pointer'}} className='fa fa-trash fa-lg'></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
