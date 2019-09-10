import React from "react";
import EmpList from "./EmpList";

interface Props {}
interface State {
  show: boolean;
}

export default class ToogleComponent extends React.Component<Props, State> {
  state: State = {
    show: false
  };
  handleToggle = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };
  render() {
    return (
      <div>
        <h3>Toogle Text:</h3>

        <button onClick={this.handleToggle}>Toggle</button>
        <br />
        {this.state.show ? "hello" : ""}
      </div>
    );
  }
}
