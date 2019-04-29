import React, { Component } from "react";

class ColorInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TotalColor: [],
      AddColor: [],
      Dark_Color: [],
      Color_Color: [],
      stair: "9"
    };
  }
  handleChange = e => {
    const addcolor = e.target.value;
    if (e.target.id === "DarkColorInput") {
      this.setState({ Dark_Color: addcolor });
    } else {
      this.setState({ Color_Color: addcolor });
    }
  };
  AddColor = () => {
    let d = this.state.Dark_Color.split(",");
    let c = this.state.Color_Color.split(",");

    let d_r = parseFloat(d[0]);
    let d_g = parseFloat(d[1]);
    let d_b = parseFloat(d[2]);
    let c_r = parseFloat(c[0]);
    let c_g = parseFloat(c[1]);
    let c_b = parseFloat(c[2]);

    let stair = this.state.stair - 1;

    let price_r = (c_r - d_r) / stair;
    let price_g = (c_g - d_g) / stair;
    let price_b = (c_b - d_b) / stair;

    const TotalColor = [...this.state.TotalColor];
    TotalColor.push([d_r, d_g, d_b], [c_r, c_g, c_b]);
    for (let i = 1; i < stair; i++) {
      TotalColor.splice(i, 0, [
        parseFloat((TotalColor[i - 1][0] + price_r).toFixed(0)),
        parseFloat((TotalColor[i - 1][1] + price_g).toFixed(0)),
        parseFloat((TotalColor[i - 1][2] + price_b).toFixed(0))
      ]);
    }
    this.setState({TotalColor: TotalColor})
    console.log(TotalColor);
    /*     const darkcolor = [...this.state.Dark_Color];
    const colorcolor = [...this.state.Color_Color]; */
    /* const DarkColorItem = ; */
    /* let d_r = darkcolor[0]; */

    /*     let colorcolor = this.state.Color.split(","); */
    /*  this.setState({ AddColor: darkcolor });
    console.log(darkcolor, colorcolor, d_r); */
  };
  render() {
    return (
      <div>
      <div>
        <div className="Dark_Color">
          <label>深色</label>
          <input
            id="DarkColorInput"
            type="text"
            key="Dark"
            placeholder="RGB Color"
            onChange={this.handleChange}
            defaultValue={this.state.Dark_Color}
          />
        </div>
        <div className="Color_Color">
          <label>正常颜色</label>
          <input
            id="ColorColorInput"
            type="text"
            key="Color"
            placeholder="RGB Color"
            onChange={this.handleChange}
            defaultValue={this.state.Color_Color}
          />
        </div>
        <div>
          <label>渐变梯度</label>
          <select>
            <option value="9">9</option>
          </select>
        </div>
        <button onClick={this.AddColor}>添加</button>
      </div>
      <div className="ColorContainer">
        <ul>
          {this.state.TotalColor.map((item,index)=>{
            return <li
                    key={index}
                    className="ColorShowItem"
                    style={{backgroundColor:'rgb('+ item[0] +','+item[1] + ',' + item[2] + ')'}}
                    >{'Color-'+ (index+1) +'    rgb('+ item[0] +','+item[1] + ',' + item[2] + ')'}</li>
          })}
        </ul>
      </div>
      </div>
    );
  }
}

export default ColorInput;
