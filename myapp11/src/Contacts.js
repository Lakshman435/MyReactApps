import React , {Component} from 'react'
import {BrowserRouter as Router ,Route,Link,Switch,NavLink} from 'react-router-dom'
import MyContacts from './MyContacts'


class Contacts extends  Component {

    render(){
        return(
            <div className="contacts">
                <ul>
                    <li>
                        <Link to ="/" >My Contacts</Link>
                    </li>
                </ul>
                <Switch>
                    <Route extact path ="/" component ={MyContacts}/>
                </Switch>
            </div>
        )
    }
}
export default Contacts