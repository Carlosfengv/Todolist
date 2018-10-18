import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content"

class App extends Component {
  render() {
    return (
      <section>
        <div className="Nav">
          <ul className="Navgation">
            <li><button type="button">Home</button></li>
            <li><button type="button">TdoList</button></li>
          </ul>
        </div>
        <div className="App">
        <div className="card">
          <Header></Header>
          <Content></Content>
        </div>
      </div>
      </section>
      
    );
  }
}

export default App;
