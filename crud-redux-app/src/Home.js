import React,{Component} from 'react';
import AddItemForm from './AddItemForm'
import AllItems from './AllItems'

class Home extends Component{

    render(){
        return (
            <div className ="additem">
            <AddItemForm />
            <AllItems/>
          </div>
        )
    }
}
export default Home;