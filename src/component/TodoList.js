import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, handleRemove, handleEdit, clearList } = this.props;

    return (
      <ul className='list-group my-5'>
        <h3 className='text-capitalize text-center'>Makku's Todo List</h3>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
              todos={todo}
            />
          );
        })}
        <button
          onClick={clearList}
          type='button'
          className='btn btn-danger btn-block'
        >
          {" "}
          Clear Todo
        </button>
      </ul>
    );
  }
}

export default TodoList;
