import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyApp from './MyApp';
import MyRoute from './MyRoute';
//import EmployeeForm from './form';
import {BrowserRouter}   from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><BrowserRouter><MyRoute/></BrowserRouter></div>, document.getElementById('root'));
//ReactDOM.render(<EmployeeForm />, document.getElementById('root'));

registerServiceWorker();
