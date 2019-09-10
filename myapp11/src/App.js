import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route,Link,Switch,NavLink} from 'react-router-dom'
import Home from './Home'
import RegistrationForm  from './RegistrationForm'
import EmployeeList from './FetchData'

class App extends Component {
 
  
  render(){
    return(
      
      <div className="App">
     
        <div className="navbar">
          <ul className="list">
            <li className="homelist"><NavLink to ="/home" className="home">Home</NavLink></li>
            <li className="registrationlist"><NavLink to ="/registration" className="reg">Registration</NavLink></li>
            <li className="fetchlist"><NavLink to ="/fetch" className="fetch">Fetch Data</NavLink></li>
            <li className="contactslist"><NavLink to ="/contactlist" className="contacts">Contacts</NavLink></li>

          </ul>
          <Switch >
            <Route exact path ="/home" component = {Home} />
            <Route exact path ="/registration" component = {RegistrationForm} />
            <Route exact path ="/fetch" component = {EmployeeList} />
          </Switch>
        </div>
        
        
     <div className="footer">
     
     <span className="text">@Copyright Text 2018</span> 
      </div>
      </div>

    );
  }
}


export default App
