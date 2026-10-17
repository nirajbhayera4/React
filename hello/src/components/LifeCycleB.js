import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"niraj"
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycle getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("lifecycle componentDidMount")
    }


  render() {
    console.log("lifecycle render")
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB