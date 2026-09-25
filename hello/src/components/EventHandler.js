import React, { Component } from 'react'

 class EventHandler extends Component {
  clickhandler(){
    console.log("clicked the button")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickehandler}> Click me </button>
      </div>
    )
  }
}

export default EventHandler