import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        };
    }

    count = () => {
        this.setState({
         count: this.state.count + 1
        })
    };
    
    
    decrement = () => {
        this.setState({
         count: this.state.count - 1
        })
    };

    clear = () => {
        this.setState({
            count: this.state.count* 0
        })
    }


    render(){
        return(
            <div>
            <p>This is the current click count {this.state.count}</p>
            <button onClick = {this.count}>+</button>
            <button onClick= {this.decrement}>-</button>
            <button onClick= {this.clear}> Clear </button>
            </div>

        )
    }
}

export default Counter;