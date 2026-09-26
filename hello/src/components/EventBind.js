import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:"hello"
      }
      this.clickhandler=this.clickhandler.bind(this)
    }
    clickhandler(){
        this.setState({
            message:'Goodbye!'
        })
       console.log(this)
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*<button onClick={this.clickhandler.bind(this)}>
            Click me please
        </button>*/}
        <button onClick={this.clickhandler}>Click me</button>


      </div>
    )
  }
}

export default EventBind