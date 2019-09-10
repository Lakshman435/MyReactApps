import React from "react";

interface Props {
  count?: number;
}

// const Count: React.FunctionComponent<Props> = props => {
//   return <h2>{props.count}</h2>;
// };
class Count extends React.Component<Props> {
  componentDidUpdate = (prevProps: Props, prevstate: Props) => {
    if (this.props.count !== prevProps.count) {
      console.log("inside iff");
      console.log("prevProps", prevProps);
    }
  };
  render() {
    return <h2>{this.props.count}</h2>;
  }
  static defaultProps: Props = {
    count: 10
  };
}
export default Count;
