import React,{Component} from 'react';
import { Switch,Route, Link } from "react-router-dom";
import Home from './Home.js';
import Topics from './Topics.jsx';
import PersonList from './RestCall.jsx';
import MyForm from './MyForm';
import CreateButton from './Button.js';
import PropTypes from 'prop-types';

class MyRoute extends Component {

   

render(){
    return (
        <div className ="myroute">
        <ul>
        <li><Link to ="/home" className="home">Home</Link><br></br> </li>
        <li><Link to ="/topics" className="topics">Topics</Link></li>
       
        </ul>
        <Switch>
            <Route path ="/home" component = {Home} />
            <Route path ="/topics" component = {Topics} />
        </Switch>
        <PersonList/>
        <MyForm/>
        <CreateButton/>
        <h1>{this.props.product}</h1>
        <h1>{this.props.mobiles}</h1>
       
        </div>
    );
}

}
MyRoute.propTypes = {
    product: PropTypes.string.isRequired,
    mobiles: PropTypes.string
};
MyRoute.defaultProps = {

    product :"broadband",
    mobiles : "Iphonex"
}

export default MyRoute;


