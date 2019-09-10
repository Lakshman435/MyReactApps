import React from 'react';

export default class Amount extends  React.Component {
  constructor(props){
    super(props);
    this.state={
      inputAmount:'',
      notes:[]
    }
  }
  handlechange = (event) => {
    this.setState({inputAmount:event.target.value})
    if(this.state.notes.length){
      this.setState({notes:[]})
    }
  }
  handleClick = () => {
    const {inputAmount, notes} = this.state;
    if(inputAmount !== 0){
      let amount2000 = inputAmount%2000;
      let notes2000 = parseInt(inputAmount/2000);
      let amount500 = amount2000%500;
      let  notes500 = parseInt(amount2000/500);

      let amount200 = amount500%200;
      let notes200 = parseInt(amount500/200);

      let amount100 = amount200%100;
      let notes100 = parseInt(amount200/100);

      let amount50 = amount100%50;
      let notes50 = parseInt(amount100/50);

      let amount20 = amount50%20;
      let notes20 = parseInt(amount50/20);

      let amount10 = amount20%10;
      let notes10 = parseInt(amount20/10);

      let amount5 = amount10%5;
      let notes5 = parseInt(amount10/5);

      let amount2 = amount5%2;
      let notes2 = parseInt(amount5/2);

      let amount1 = amount2%1;
      let notes1 = parseInt(amount2/1);

      notes.push(notes2000, notes500, notes200, notes100, notes50, notes20, 
        notes10, notes5, notes2, notes1);
      this.setState({notes:notes})
    }
    
   
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render(){
    //console.log(this.state.notes)
    return(
    <div className="amount "> 
     <div className="amountform">
      
       <form onSubmit={this.handleSubmit}>
       <h3 className="welcome">Welcome to ATM</h3>        
           <label>Enter the Amount</label>
           <input type="number" value={this.state.inputAmount} onChange={this.handlechange} required/><br/>
           <button className="button" onClick={this.handleClick}>Get Money</button>
         
       </form>
       <div className="notes">
         <p ><b>You will get following amount</b></p>
         <table style={{width:"100%",textAlign:"left"}}>
         <tr>
          <td>{this.state.notes[0]} notes of 2000
          <span>{this.state.notes[1]} notes of 500</span></td>
          </tr>
          <tr>
          <td>{this.state.notes[2]} notes of 200
          <span>{this.state.notes[3]} notes of 100</span></td>
          </tr>
          <tr>
          <td>{this.state.notes[4]} notes of 50
          <span>{this.state.notes[5]} notes of 20</span></td>
          </tr>
          <tr>
          <td>{this.state.notes[6]} notes of 10
          <span>{this.state.notes[7]} notes of 5</span></td>
          </tr>
          <tr>
          <td>{this.state.notes[8]} notes of 2
          <span>{this.state.notes[9]} notes of 1</span></td>
          </tr>

          </table>
          <p>Total notes dispensed:{this.state.notes.reduce((a, b) => a + b, 0)}</p>
       </div>
     </div>
    </div>)
  }
}