import React from "react";

class Show extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const val = this.state.show && <h1>Hello</h1>;
    return (
      <div className="marign-2">
        <button onClick={this.handleClick}>Show</button>, {val}
      </div>
    );
  }
}

export default Show;
