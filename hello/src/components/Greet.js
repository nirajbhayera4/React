import React from 'react'

/*
// this is a normal function without es6
function Greet(){
    return <h1>Hello Niraj</h1>
}
    */
// this is with es6 syntax

const Greet=(props)=>{
    console.log(props.name)
    return <div>
        <h1>Hello {props.name} a.k.a {props.hero}</h1>
        {props.children}
    </div>
}
export default Greet
