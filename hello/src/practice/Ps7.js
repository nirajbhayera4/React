//event handling 
import React from 'react'

function Ps7() {
    function greet(name){
        alert(`Hello ${name}`);
    }
  return (
    <div>
        <button onClick={()=>greet('niraj')}>Greet</button>
    </div>
  )
}

export default Ps7