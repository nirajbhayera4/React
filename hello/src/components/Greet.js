import React from 'react'

/*
// this is a normal function without es6
function Greet(){
    return <h1>Hello Niraj</h1>
}
    */
// this is with es6 syntax

const Greet=props=>{
    const {name, heroname}=props
    console.log(name)
    return <div>
        <h1>Hello {name} a.k.a {heroname}</h1>
        
    </div>
}
export default Greet
