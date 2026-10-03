import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIN: false

        }
    }
    render() {
        return this.state.isLoggedIN && <div>welcome niraj !</div>
        /*
        return (
            this.state.isLoggedIN ?
            <div>welcome niraj !</div>
            :
            <div>welcome nicks !</div>
        )
            */

        /*
        let Message
        if(this.state.isLoggedIN){
            Message= <div>welcome niraj !</div>
        }
        else{
            Message= <div>welcome nicks !</div>
        }
        return <div>{Message}</div>
        */

        /*
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
        */

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