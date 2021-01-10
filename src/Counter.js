import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        };
    }

    increment = () => {
        this.setState({
         count: this.state.count + 1
        })
    };
    
    decrement = () => {
        this.setState({
         count: this.state.count - 1
        })
    };

    multiply = () => {
        this.setState({
            count: this.state.count*2
        })
    }


    render(){
        return(
            <div>
            <p>This is the current count {this.state.count}</p>
            <button onClick = {this.increment}> Increment</button>
            <button onClick= {this.decrement}> Decrement</button>
            <button onClick= {this.multiply}> Multiply </button>
            </div>

        )
    }
}

export default Counter;