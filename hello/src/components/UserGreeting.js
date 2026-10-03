import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIN: true
        }
    }
    render() {
        if (this.state.isLoggedIN) {
            return (
                <div>Welcome niraj !</div>
            )
        }
        else {
            return (
                <div>Welcome nicks !</div>
            )
        }
        /*return (
          <div>
            <div>Welcome niraj !</div>
            <div>Welcome nicks !</div>
          </div>
        )
          */
    }
}

export default UserGreeting