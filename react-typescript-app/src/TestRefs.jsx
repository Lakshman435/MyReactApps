import React from "react";

export default class TestRefs extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  focusTextInput = () => {
    this.myRef.current.focus();
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <button onClick={this.focusTextInput}>focusTextInput</button>
      </div>
    );
  }
}
