import React from "react";
import Count from "./Count";

interface Props {}
interface State {
  count: number;
}

export default class MyComponent extends React.Component<Props, State> {
  // state: State = {
  //   count: 0
  // };
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = (): void => {
    //alert(`inside increment method ${this.state.count}`);
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        <h1>React with TypeScript Example</h1>
        {/* count: {this.state.count} */}
        <Count count={this.state.count} />
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
      </div>
    );
  }
}
