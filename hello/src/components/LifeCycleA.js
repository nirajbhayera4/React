import React, { Component } from 'react'

 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"niraj"
      }
      console.log("lifecycle constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycle getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("lifecycle componentDidMount")
    }
  render() {
    console.log('lifecycle render')
    return (
      <div>LifeCycleA</div>
    )
  }
}

export default LifeCycleA