import React, {Component} from 'react';

import logo from './logo.svg';

class MyLeftComp extends Component {
   
    render(){

        return(
            <div className ="content">
            <h1>React Js</h1>
            <img src={logo} className="Myimg-logo" alt="logo" />
            </div>
        )
    }
            

}
class MyRightComp extends Component {
   
    render(){

        return(
            <div className="rightcontent">
            <h1>My Details</h1>
               <MyNameComp name = "Lakshman" />
               <MyAddressComp city = "Bangalore"/>

            </div>
        )
    }
            

}
class Details extends Component {

    renderLeftDiv(){

        return <MyLeftComp></MyLeftComp>

    }

    renderRightDiv(){

        return <MyRightComp></MyRightComp>

    }

    

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div >
            {this.renderLeftDiv()}
            {this.renderRightDiv()}
            </div>
        )
    }


}

class MyNameComp extends Component {
   
    render(){

        return(
            <div className="rightcontentname">
          
                <label>Name:</label><input type = "text" name="fname" value ={this.props.name} className="nameComp"/>
            </div>
        );
    }
}

class MyAddressComp extends Component {
   
    render(){

        return(
            <div className="addresscomp">
          
                <label>City:</label><input type = "text" name="cname" value ={this.props.city} className="AddComp"/>
            </div>
        );
    }
}
export default Details;