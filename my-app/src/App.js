import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Show from "./Show";
import TestRef from "./TestRef";
import InputText from "./InputText";
import PlayersList from "./PlayersList";
import ShowTable from "./ShowTable";
import KeyDown from "./KeyDown";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div>
        {/* <Show />
        <TestRef />
        <InputText />
        <PlayersList />
        <ShowTable/> */}
        <KeyDown />
      </div>
    </div>
  );
}

export default App;
