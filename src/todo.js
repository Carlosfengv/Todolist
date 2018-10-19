import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";

class Todo extends Component {
  render() {
    return (
        <div className="App">
            <div className="card">
              <Header></Header>
              <Content></Content>
            </div>
        </div>
    );
  }
}

export default Todo;