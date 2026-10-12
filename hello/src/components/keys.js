import React from 'react'

function keys() {

    const students=[
        {id:1,name:"niraj"},
        {id:2,name:"ram"},
        {id:3,name:"sham"}
    ]
  return (
    <div>
        <h1>students name</h1>
        {students.map((student)=>(
            <h2 key={student.id}>{student.name}</h2>
        ))}
    </div>
  )
}

export default keys