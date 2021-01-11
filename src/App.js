import React, {Component} from 'react';
import Counter from './Counter';

class App extends Component{
  render(){
  return (
    <div className="App">
      <h1>I am a Counter</h1>
      <Counter/>
    </div>
    );
  }
}

export default App;
