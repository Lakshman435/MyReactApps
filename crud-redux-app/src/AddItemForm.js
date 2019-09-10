import React, {Component} from 'react'
import {connect} from 'react-redux'
import { addItem } from './actions/AddItem-action'

const AddItemForm = ({ dispatch }) => {
  let input
//  this.getItem.value = '';
    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   const title = this.getTitle.value;
    // }
     
    //   const data = {
    //     id: new Date(),
    //     title
      
    //   }
    //   console.log(data)
    //   this.props.dispatch({
    //     type:'ADD_ITEM',
    //     data
    // });
    //   this.getTitle.value = '';
    // }
    
 
  return (
  <div className="additemform">
   <h3 className ="title">Add Items</h3>
   <div className="content">
    <form onSubmit={e => {
        e.preventDefault();
       // const item = this.getItem.value;
        dispatch(addItem(input.value))
        input.value=''
      }}>
    
      <p>Using this form to add items</p>
      
    <input ref={node => input = node} placeholder="Add items.." className="textbox" />
     <br /><br />
     <button className="button">Add Item</button>
     
    </form>
    </div>
  </div>
  );
  }
  
  export default connect() (AddItemForm);