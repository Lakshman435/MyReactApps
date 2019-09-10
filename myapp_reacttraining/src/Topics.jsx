import React from "react";
import axios from "axios";

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      show: false
    };
  }
  // fetch(API + DEFAULT_QUERY)
  //     .then(response => response.json())
  //     .then(data => this.setState({ hits: data.hits }));
  // }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const topics = response.data;
      this.setState({ topics: topics });
    });
  }
  handleClick = () => {
    this.setState({ show: true });
  };
  render() {
    //{
    /* <table id="topics">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>{this.state.topics.id}</td>
            <td>{this.state.topics.name}</td>
            <td>{this.state.topics.description}</td>
          </tr>
        </table> */
    //}

    // const topic = this.state.topics.map(topic => topic);
    // console.log(
    //   this.state.topics.map(topic => (
    //     <div>
    //       <table>
    //         <tr>
    //           <th>ID</th>
    //           <th>Name</th>
    //           <th>Email</th>
    //         </tr>
    //         <tr>
    //           <td>{topic.id}</td>
    //           <td>{topic.name}</td>
    //           <td>{topic.email}</td>
    //         </tr>
    //       </table>
    //     </div>
    //   ))
    // );

    return (
      <div>
        <h1>Topics table</h1>
        {this.state.show && (
          <div>
            <table
              style={{ border: "1px solid black", borderCollapse: "collapse" }}
            >
              <thead style={{ border: "1px solid black" }}>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.topics.map(topic => (
                  <tr>
                    <td>{topic.id}</td>
                    <td>{topic.name}</td>
                    <td>{topic.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button onClick={this.handleClick}>Show Persons</button>
      </div>
    );
  }
}

export default Topics;
