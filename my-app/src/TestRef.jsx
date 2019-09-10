import React from "react";
class TestRef extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  focusTextInput = () => {
    this.myRef.current.focus();
    console.log(this.myRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />

        <input
          type="text"
          value="Focus the text"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
export default TestRef;
