import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

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
    console.log('lifecycleA render')
    return (
        <div>
              <div>LifeCycleA</div>
              <LifeCycleB/>

        </div>
        
    
    )
  }
}

export default LifeCycleA