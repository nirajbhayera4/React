import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:"hello"
      }
    }
    clickhandler(){
       console.log(this)
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickhandler}>
            Click me please
        </button>
      </div>
    )
  }
}

export default EventBind