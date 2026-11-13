import React ,{useState} from 'react'

function Ps8() {
    const [text,setText]=useState('Hello React!');
    function changeText(){
        setText('Welcome to react!');
    }
    function revertText(){
        setText('Hello React!');    
    }
    
  return (
    <div>
        <div>
            
            <h1>{text}</h1>
            <button onClick={changeText}>change the text</button>
            <button onClick={revertText}>revert the text</button>
        </div>
    </div>
  )
}

export default Ps8