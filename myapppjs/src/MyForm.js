import React, {Component} from 'react';
import {Button} from 'reactstrap';
import ReactDOM from 'react-dom';

class MyForm extends Component{

    constructor() {
        super();
        this.state = {
          name: '',
          city:'',
          isChecked: true,
          checked:[{
              option1:true,
              option2:false,
              option3:false
          }
          ],
          value:'Angualr Js'
          
        };
        this.clearInput = this.clearInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
      }

      handleNameChange = (event) => {
          this.setState({name:event.target.value});
         // console.log(this.state.name);
      };
      handleCityNameChange = (event) => {
        this.setState({city:event.target.value});
       // console.log(this.state.name);
    };
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
      }

      clearInput() {
        this.setState({city: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
     }

      toogleChange = () => {

        this.setState({
            isChecked:!this.state.isChecked
        });
      }

      render(){
        const courses = ['Node js','React Js','Java','Angualr Js']
        return(
            
      
            <div className = "myform">
            <form onSubmit={this.handleSubmit}>
            Name is : <input type ="text" value = {this.state.name} onChange = {this.handleNameChange} className="myinputform"/><br></br>
            <input type="submit" value="Submit" />
            <h1> {this.state.name} </h1><br></br>
            </form>
            City : <input type ="text" value = {this.state.city} onChange = {this.handleCityNameChange}  ref = "myInput"/>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4> {this.state.city} </h4><br></br>
            Gender: 
            Male:<input type="checkbox"  checked={this.state.isChecked}    onChange={this.toggleChange} name ="male"/>
            Female:<input type="checkbox"     onChange={this.toggleChange}/><br></br>
           <form>
          <label> <input type ="radio" value ="option1" checked={this.state.checked}/>optin1 </label> <br></br>
          <label> <input type ="radio" value ="option2" />optin2</label><br></br>
          <label> <input type ="radio" value ="option3" />optin3</label><br></br>
          </form>
            <br></br>
           { courses.map((course)=>
           <div>
            <label> <input type ="radio" checked={course===this.state.value}  value={course}/>{course}</label> <br></br>
            </div>
           
             )}
        
            </div>
        )
      }
    
}

export default MyForm;
