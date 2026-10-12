import React from 'react'

function List() {

    const names=["niraj","ram","sham"]
  return (
    <div>
        <h1>student names</h1>
        {names.map((names)=>(
            <h2 key={names}>{names}</h2>
        ))}
    </div>
  )
}

export default List