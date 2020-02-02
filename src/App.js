import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";

class App extends Component {
  state = {
    inputTodo: "",
    todos: [
      { id: 1, title: "wake up in the morning" },
      { id: 2, title: "prayer" }
    ],
    id: uuid,
    editTodo: false
  };
  handleChange = (e) => {
    console.log("handle Change");
  };
  handleSubmit = (e) => {
    console.log("handle Submit");
  };
  clearList = (e) => {
    console.log("clear list");
  };
  handleRemove = (e) => {
    console.log("handle remove");
  };
  handleEdit = (e) => {
    console.log("handle edit");
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
