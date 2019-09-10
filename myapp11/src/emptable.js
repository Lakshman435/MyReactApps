import React from 'react';
import { Table } from 'reactstrap';

export default class EmpTable extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>City</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map(emplist =>
            <tr>
            <th scope="row">{emplist.id}</th>
            <td>{emplist.emp.firstname}</td>
            <td>{emplist.emp.city}</td>
            <td>{emplist.emp.contact}</td>
          </tr>
          )}
        </tbody>
      </Table>
    );
  }
}