import React ,{Component} from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
        this.handleCountIncrement = this.handleCountIncrement.bind(this);
    }
    handleCountIncrement(){
        this.setState({counter:this.state.counter+1});
    }

    render(){
        return (
            <div>
            <h1>{this.state.counter}</h1>
            <button onClick = {this.handleCountIncrement}>Click to Increment</button>
            </div>
        )
    }
}
export default Counter;