import React from 'react'

function Practice7() {

    const students=[
        {id:1, name:"niraj" , course:"Btech CSE" , marks:85},
        {id:2, name:"ram" , course:"Btech CSE" , marks:90},
        {id:3, name:"sham" , course:"Btech CSE" , marks:85},    
        {id:4, name:"sita" , course:"Btech CSE" , marks:95},
    ];
  return (
    <div>
        <h1>Student List</h1>

        {students.map((student)=>(
            <div key={student.id}>
                
                <h2>Name: {student.name}</h2>
                <p>Course: {student.course}</p>
                <p>Marks: {student.marks}</p>
            </div>
        ))}
    </div>
  )
}

export default Practice7