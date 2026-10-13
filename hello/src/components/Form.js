import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        username:''
      }
    }
    handleUsernameChange=(e)=>{
        this.setState({
            username:e.target.value
        })

    }
  render() {
    return (
      <form>
        <div>
          <label>username: </label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </div>

      </form>
    )
  }
}

export default Form