import React,  {lazy,Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
//import Amount from './Amount'
const Amount = lazy(() => import( './Amount'))

function App() {
  return (
    <div className=" container App">
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
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
      <Amount/>
      </Suspense>
    </div>
  );
}

export default App;
