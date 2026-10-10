import React from 'react'

function Student({
    name, course, marks
}){
    return (
        <div>
            <h2>Name :{name} </h2>
            <h2>Course :{course} </h2>
            <h2>arks :{marks} </h2>
        </div>
    )
}

function practice2() {
  return (
    <div>
        <h1>Student Details</h1>

      <Student
        name="Niraj"
        course="B.Tech CSE"
        marks={85}
      />

      <Student
        name="Rahul"
        course="BCA"
        marks={78}
      />

      <Student
        name="Aman"
        course="MCA"
        marks={92}
      />
    </div>
  )
}

export default practice2