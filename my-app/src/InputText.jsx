import React from "react";

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
  }
  OnInputChange = event => {
    this.setState({ inputVal: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.OnInputChange}
        />
        <p> {this.state.inputVal}</p>
      </div>
    );
  }
}

export default InputText;
