import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './form.js';
import MyForm from './MyForm.js';
import MyRoute from './MyRoute.js';
import Courses from './Courses.js';
import PropTypes from 'prop-types';
import Counter from './Counter';


class App extends Component {
 
  
  constructor(props) {
    super(props);

    this.demoMethod(2);
 //   this.bar();
    this.demoAdd(1,2);
  // this.setData = this.setData.bind(this);
  this.state = {
    msg:'hello React Js',
    time: new Date(),
    

  }
  }

  componentWillMount() {
    console.log('Component WILL MOUNT!')
 }
 componentDidMount() {
    console.log('Component DID MOUNT!')
 }
 componentWillReceiveProps(newProps) {    
    console.log('Component WILL RECIEVE PROPS!')
 }
 shouldComponentUpdate(newProps, newState) {
    return true;
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }
 
  demoAdd  = (x,y) => console.log(x+y);
 
 
  demoMethod(x=1,y=2) {
    let firstName ='lakshman';
    //const productName = "Mobile";
    console.log(firstName);
    console.log(x,y);
  
    let firstArray = ['React jS','Angular Js','node Js','html'];
    let secondArray = ['Visual Studio','Git'];
    let thirdArray = [...firstArray, ...secondArray];
    console.log('first and second array ',thirdArray.length);
    let[last] = [...firstArray].reverse();
    console.log(last);
    console.log(firstArray.join(','));


    // showProducts  = (x) =>  console.log(x) ;
    
   let recieps =  [
      {
        title: "Mac and Cheese",
        ingredients: ["Noodles", "Cheese", "Milk"]
      }, 
     {
        title: "Tofu Stir Fry",
        ingredients: ["Veggies", "Soy Sauce", "Tofu"]
      } ]

      
      console.log(...recieps[0].ingredients);
     
    }
      
  
  render() {
   
     return (
       
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    <Counter/>
    <h1>{Date()}</h1>
   
      </div>
     );
  
  
    }

}
App.PropTypes = {
  title : PropTypes.string.isRequired
}
App.defaultProps = {
  title : "React JS"

}


export default App;
