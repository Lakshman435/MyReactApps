import React from "react";
import axios from "axios";
import EmpTable from './emptable'
export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3004/posts").then(res => {
      const employees = res.data;
      // console.log(employees)
      this.setState({ employees });
    });
  }

  render() {
    return (
      <div className="emplist">
          <EmpTable list = {this.state.employees} />
      
      </div>
    );
  }
}
