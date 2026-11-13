// using state here 
import React, {useState} from 'react'

function Ps6() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Ps6