
import React from "react";

// Functional component
function Profile(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
      <hr />
    </div>
  );
}

// Main practice component
function Practice1() {
  return (
    <div>
      <h1>Student Profiles</h1>

      <Profile name="Niraj" age={21} city="Haldwani" />
      <Profile name="Rahul" age={22} city="Delhi" />
      <Profile name="Aman" age={20} city="Dehradun" />
    </div>
  );
}

export default Practice1;
