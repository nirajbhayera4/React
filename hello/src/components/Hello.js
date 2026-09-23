import React from 'react';
const Hello=()=>{
    /*
    // this is with JSX syntax
    return (
        <div className="dummyclass">
            <h1>Hello React</h1>
        </div>
    )
    */

    // this is without JSX syntax
   return React.createElement('div',{id:'hello', className:'dummyclass'},React.createElement('h1',null,'Hello React'))
}
export default Hello 