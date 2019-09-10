import React, {Component} from 'react'
import {connect} from 'react-redux'
import Item from './Item'

class AllItems extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className ="allitems">
             <h3 className="title">Items</h3>
                {/* <li>{item.item}</li> */}<div className="content">
        {this.props.items.map((item) =>  <Item key={item.id} item={item} />)}
        </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state is',state)
    return {
        items :state
    }
}
export default connect(mapStateToProps)(AllItems)