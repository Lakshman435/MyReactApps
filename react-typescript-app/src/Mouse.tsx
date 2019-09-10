import React, { MouseEvent } from "react";

interface Props {}
interface State {
  x: number;
  y: number;
}

export default class Mouse extends React.Component<Props, State> {
  // state: State = {
  //   x: 0,
  //   y: 0
  // };
  constructor(props: Props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  handleMouseMove = (event: any) => {
    console.log("inside handleMousemove");
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };
  render() {
    return (
      <div>
        <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove} />
        <p>
          The current mouse position is ({this.state.x}, {this.state.y})
        </p>
      </div>
    );
  }
}
