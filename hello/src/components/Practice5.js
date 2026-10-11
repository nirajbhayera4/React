import React, { Component } from 'react'

 class Practice5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
        count:0
      };

      // event handlers
      this.increment=this.increment.bind(this)
      this.decrement=this.decrement.bind(this)
      this.reset=this.reset.bind(this)

    }
    increment(){
        this.setState((prevState)=>({
            count:prevState.count + 1
        }));
    }
    decrement(){
        this.setState((prevState)=>({
            count:prevState.count - 1
        }));
    }
    reset(){
        this.setState((prevState)=>({
            count:0
        }));
    }


  render() {
    return (
      <div>
        <h1>class component counter </h1>

        <h2>count:{this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default Practice5