import React, { useState } from 'react'
import '../App.css'

function Counter() {
      const [count, setCount] = useState(0)
  function addValue() {
    if (count < 20) {
      setCount(count + 1)
    }
  }
  function RemoveValue() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  function zeroValue() {
    setCount(0)
  }
  return (
     <>
    <p>{count}</p>
      <button onClick={addValue}>Addtion</button>
      <button onClick={RemoveValue}>Decress</button>
      <button onClick={zeroValue}>Rest</button>
    </>
  )
}

export default Counter
