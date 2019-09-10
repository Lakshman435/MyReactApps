import React from "react";
class ShowTable extends React.Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      showHeader: true,
      students: [
        { id: 1, name: "", age: 21, email: "wasif@email.com" },
        { id: 2, name: "Lakshman", age: 19, email: "ali@email.com" }
        // { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
        // { id: 4, name: "Asad", age: 25, email: "asad@email.com" }
      ]
    };
  }
  renderTableHeader = () => {
    const filterHeaders = this.state.students.filter(student => {
      return student["name"] !== "" ? student["name"] : delete student.name;
    });
    console.log("filterHeaders", filterHeaders);
    let header = Object.keys(filterHeaders[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  //   renderTableHeader() {
  //     let header = Object.keys(this.state.students[0])
  //     return header.map((key, index) => {
  //        return <th key={index}>{key.toUpperCase()}</th>
  //     })
  //  }

  renderTableData = () => {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ShowTable;
