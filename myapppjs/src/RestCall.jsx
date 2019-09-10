import React,{Component} from 'react';
import axios from 'axios';

class PersonList extends Component {

    constructor(){
        super();
        this.state = {
            persons:[],
            id: '',
        }
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
      componentWillMount = () => {console.log("willmount")}

    componentDidMount = () =>
    {console.log("inside didmount"),
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            this.setState({persons});
        })
    }

    render(){
        return(
     <div className ="persons">
            <h1>Create Person</h1>
            <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>

     <h1>Pesrons List</h1>
    <ul className="personsist">
     { this.state.persons.map(person => <li className="p">{person.name}  -  {person.address.city}</li> )}
     </ul>
     </div>
        )
    }
}
export default PersonList;
