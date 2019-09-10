import React , {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

class RegistrationForm extends Component {

    constructor(){
        super()
        this.firstnameRef = React.createRef()
        this.lastnameRef = React.createRef()
        this.cityRef = React.createRef()
        this.contactRef = React.createRef()


    }

    handleSubmit = event => {
    event.preventDefault();
    // alert('inside handlesubmit')
   

    const emp = {
        firstname: this.firstnameRef.current.value,
        lastname:this.lastnameRef.current.value,
        city:this.cityRef.current.value,
        contact:this.contactRef.current.value
      }

    axios.post("http://localhost:3004/posts", { emp })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    alert('Registration  successfully')
    this.firstnameRef.current.value=''
    this.lastnameRef.current.value= ''
    this.cityRef.current.value = ''
    this.contactRef.current.value = ''
    console.log('name : '+this.firstnameRef.current.value)

      }

    render(){
        return(
           
            <div className="myregform">
                
          <form  onSubmit={this.handleSubmit}>
             <h1>Registration Form</h1>
            First name:<br></br>
            <input type="text" name="firstname"  ref ={this.firstnameRef}  className="textbox"/>
            <br></br>
            Last name:<br></br>
            <input type="text" name="lastname"  ref = { this.lastnameRef } className="textbox"/>
            <br></br>
            City:<br></br>
            <input type="text" name="city"  ref = {this.cityRef} className="textbox"/>
            <br></br>
            Contact:<br></br>
            <input type="text" name="contact"  ref = {this.contactRef} className="textbox"/>
            <br></br>
            <input type="submit" value="Submit"  className="button"/>
        </form>       
            </div>
        )
    }
}

RegistrationForm.propTypes ={
    firstname: PropTypes.string.isRequired,
    lastname:PropTypes.string.isRequired
}



export default RegistrationForm