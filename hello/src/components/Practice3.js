
import React, { useState } from "react";

function Practice3() {
  // State
  const [count, setCount] = useState(0);

  // Increment
  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  // Decrement
  function decrement() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }

  // Reset
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment +</button>

      <button onClick={decrement}>Decrement -</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Practice3;
