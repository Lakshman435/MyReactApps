import React from "react";
import { filter } from "lodash";
export const list = ["lakshman", "buttler", "stokes", "root"];
export default class KeyDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      keyCode: 0,
      isOnFocus: false,
      names: list,
      filteredData: []
    };
  }
  handleChange = event => {
    event.preventDefault();
    //event.stopPropagation();

    console.log(event.target.value);
    this.setState({ inputVal: event.target.value });
    const filteredData = filter(list, name =>
      name.includes(event.target.value)
    );

    // .sort((a, b) => (a < b ? -1 : 1));
    console.log("filtereddata", filteredData);
    if (filteredData.length > 0) {
      this.setState(filteredData);
    }
  };
  handleKeyDown = event => {
    this.setState({ keyCode: event.keyCode });
  };
  handleOnFocus = () => {
    //alert("inside onfocus");
    this.setState({ isOnFocus: true });
  };

  render() {
    console.log("names", this.state.names);
    let { filteredData } = this.state;
    if (filteredData.length === 0) {
      filteredData = this.state.names;
    }
    console.log("##", filteredData);
    return (
      <div>
        <label>Enter Value:</label>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleOnFocus}
          onBlur={() => console.log("onblur called")}
        />

        {(this.state.isOnFocus || this.state.keyCode > 0) && (
          <ul
            className="list"
            style={{
              listStyleType: "none",
              backgroundColor: "greens"
            }}
          >
            {filteredData.map(name => (
              <a
                href="name"
                onClick={this.handleChange}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <li>{name}</li>
              </a>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
