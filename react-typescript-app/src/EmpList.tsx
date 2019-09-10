import React from "react";
export const empList = ["john", "lakshman", "ben", "david"];
interface Props {}
interface State {
  showList: boolean;
}
export default class EmpList extends React.Component<Props, State> {
  state: State = {
    showList: false
  };
  render() {
    return (
      !this.state.showList && (
        <div>
          <ul>
            {empList.map(emp => (
              <li>{emp}</li>
            ))}
          </ul>
        </div>
      )
    );
  }
}
