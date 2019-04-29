import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todo from "./todo";
import ColorTools from './ColorTools'

const BasicExample = () => (
  <Router>
    <div>
        <div className="Nav">
          <ul className="Navgation">
            <li><Link to="/"><button type="button">Home</button></Link></li>
            <li><Link to="/todo"><button type="button">TdoList</button></Link></li>
          </ul>
        </div>
      <Route exact path="/" component={ColorTools} />
      <Route  path="/todo" component={Todo} />
    </div>
  </Router>
);


export default BasicExample;