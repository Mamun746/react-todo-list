import React, { Component } from "react";

export class TodoInput extends Component {
  render() {
    const { inputTodo, handleChange, handleSubmit, editTodo } = this.props;
    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <i className="fas fa-book"/>
              </div>
            </div>
            <input
              type='text'
              className='form-control text-capitalize'
              placeholder='Add Todo'
              value={inputTodo}
              onChange={handleChange}
            />
          </div>
          <button disabled={inputTodo?false:true} type="submit" className={editTodo?'btn btn-block btn-success mt-3':'btn btn-block btn-primary mt-3'}>{editTodo?'Edit Todo':'Add Todo'}</button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
