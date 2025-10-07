import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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

export default App
