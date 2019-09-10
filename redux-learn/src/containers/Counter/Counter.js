import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { asyncIncrement } from "../../actions/action";

class Counter extends Component {
  //   state = {
  //     counter: 0
  //   };

  //   counterChangedHandler = (action, value) => {
  //     switch (action) {
  //       case "inc":
  //         this.setState(prevState => {
  //           return { counter: prevState.counter + 1 };
  //         });
  //         break;
  //       case "dec":
  //         this.setState(prevState => {
  //           return { counter: prevState.counter - 1 };
  //         });
  //         break;
  //       case "add":
  //         this.setState(prevState => {
  //           return { counter: prevState.counter + value };
  //         });
  //         break;
  //       case "sub":
  //         this.setState(prevState => {
  //           return { counter: prevState.counter - value };
  //         });
  //         break;
  //     }
  //   };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubCounter(5)}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //onIncrementCounter: () => dispatch(asyncIncrement()),
    onIncrementCounter: () => dispatch({type:'INC_COUNTER'}),
    onDecrementCounter: () =>
      dispatch({
        type: "DEC_COUNTER"
      }),
    onAddCounter: val =>
      dispatch({
        type: "ADD_COUNTER",
        value: val
      }),
    onSubCounter: val =>
      dispatch({
        type: "SUB_COUNTER",
        value: val
      })
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Counter);
