// display a javascript variable inside JSX
import React from 'react'

function Ps4() {
    const name="niraj";
    const age=21;
    const branch="computer science";

  return (
    <div>
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{branch}</h3>
        </div>  
    </div>
  )
}

export default Ps4