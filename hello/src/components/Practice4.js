import React , {useState} from 'react'

//child component

function CounterButton({onIncrement}){
    return (
        <button onClick={onIncrement}>Increment Parent count</button>

    );
}
// parent component 


function Practice4() {

    const [count, setCount]=useState(0);
    function incrementCount(){
        setCount(prevCount=>prevCount + 1)
    }
  return (
    <div>
        <div>
            methods as props
        </div>
        <h2>
            Parent Count :{count}
        </h2>
        <CounterButton onIncrement={incrementCount}/>

        
    </div>
  )
}

export default Practice4;