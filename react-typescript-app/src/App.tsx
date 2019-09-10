import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import ToogleComponent from "./Toggle";
import EmpList from "./EmpList";
import TestRefs from "./TestRefs";
import MouseTracker from "./MouseTracker";
import HooksComp from "./HooksComponent";
import HooksTs from "./HooksTs";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MyComponent />
      <ToogleComponent />
      <EmpList />
      <TestRefs />
      <MouseTracker />
      <HooksComp />
      <HooksTs />
    </div>
  );
};

export default App;
