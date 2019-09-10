import React, { Component } from 'react';
import './App.css';
import { Switch,Route, Link,NavLink } from "react-router-dom";
import Home from './Home'
import About from './About'
import AddItemForm from './AddItemForm'



class App extends Component {
  render() {
    console.log('hello')
    return (
    
       <div className="App">
         {/* <a href ="https://reactjs.org/tutorial/tutorial.html">React Js</a> */}
        <div className="nav">
          <ul className="list">
            
           <li className="homelink"> <NavLink to ="/home" className="home"  activeStyle={{fontWeight: 'normal',color:'blue'}}>Home</NavLink></li>
           <li  className="aboutlink"> <NavLink to ="/about" className="about" activeStyle = {{fontWeight: 'normal' ,color: 'blue'}}>About</NavLink></li>
            
            </ul>
            </div>
           <Switch>
                <Route exact path ="/home" component = {Home} />
                <Route path ="/about" component = {About} />
           </Switch> 
       

    {/* <div className ="additem">
        <AddItemForm />
        <AllItems/>
        </div> */}
      </div>
      
    );
  }
}

export default App;
