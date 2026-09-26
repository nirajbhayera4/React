import React, { Component } from 'react'

 class EventBind extends Component {
    //3. approach---> binding inside constructor method
    constructor(props) {
      super(props)
    
      this.state = {
        message:"hello"
      }
      //this.clickhandler=this.clickhandler.bind(this)
    }
    /*clickhandler(){
        this.setState({
            message:'Goodbye!'
        })
       console.log(this)
    }
       */

    //this is 4th appraoch 
      clickhandler= ()=>{
        this.setState({
            message:'Goodbye!'
        })
      }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/*1. approach -->binding inside render*/}
        {/*<button onClick={this.clickhandler.bind(this)}>
            Click me please
        </button>*/}
        <button onClick={this.clickhandler}>Click me</button>


      </div>
    )
  }
}

export default EventBind