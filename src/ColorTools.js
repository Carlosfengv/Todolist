import React, { Component } from 'react';
import './App.css';
import ColorInput from "./ColorInput";
import ColorContainer from "./ColorContainer";

class ColorTools extends Component {
  render() {
    return (
        <div className="ColorToolsBG">
            <h1>Color Tools</h1>
            <p>颜色调试工具</p>
            <ColorInput />
        </div>
    );
  }
}

export default ColorTools;