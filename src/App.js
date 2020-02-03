import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";

class App extends Component {
  state = {
    inputTodo: "",
    todos: [],
    id: uuid(),
    editTodo: false
  };
  handleChange = (e) => {
    this.setState({
      inputTodo: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: this.state.id,
      title: this.state.inputTodo
    };
    const updatedTodo = [...this.state.todos, newTodo];
    this.setState({
      todos: updatedTodo,
      inputTodo: "",
      id: uuid(),
      editTodo: false
    });
  };

  handleRemove = (id) => {
    const sortTodo = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: sortTodo
    });
  };
  handleEdit = (id) => {
    const filteredTodo = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    const selectedTodo = this.state.todos.find((todo) => {
      return todo.id === id;
    });

    this.setState({
      todos: filteredTodo,
      inputTodo: selectedTodo.title,
      id: id,
      editTodo: true
    });
  };
  clearList = (e) => {
    this.setState({
      todos: []
    });
  };
  re;
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>Todo List</h3>
            <TodoInput
              inputTodo={this.state.inputTodo}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editTodo={this.state.editTodo}
            />
            <TodoList
              todos={this.state.todos}
              handleRemove={this.handleRemove}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
