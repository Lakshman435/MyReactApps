import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { deleteItem } from './actions/AddItem-action'

class Item extends Component {

    render(){
        return(
         
           
            
            <div className ="items">
           
              <div className="item">
                <div className="showitem">{this.props.item.item}    </div>
                <button onClick = {() => this.props.dispatch(deleteItem(this.props.item.id)) } className="close" >
                X</button>   
              </div>
            </div>
             
    
        )
    }
}
export default connect() (Item);