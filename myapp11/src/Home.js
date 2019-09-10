import React, { Component } from "react";
import Image from "./Image";
import RegistrationForm from "./RegistrationForm";

class Home extends Component {
  render() {
    return (
      <div>
        <Image />
        <div className="regform" />
      </div>
    );
  }
}
export default Home;
