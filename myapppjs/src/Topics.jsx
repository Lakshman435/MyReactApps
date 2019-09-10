import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Topics = ({ match }) => (
  console.log(match.url),
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering1`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components1`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state1`}>Props v. State</Link>
      </li>
    </ul>

    <Route exact path={`${match.url}/:topicId`} component={Topic} />
    
  </div>
);

const Topic = ({ match }) => (
  console.log(match.params),
  console.log(match.url),
  
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
  
);

export default Topics;
