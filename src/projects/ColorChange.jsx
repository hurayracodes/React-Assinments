import { useState } from "react"
import '../App.css'

function ColorChange() {
    const [color, setColor] = useState('')
  return (
    <div className="bg" style={{backgroundColor: color}}>
      <div className="btn-container">
        <button onClick={()=>setColor('white')} className="btn-white">White</button>
        <button onClick={()=>setColor('green')} className="btn-green">Green</button>
        <button onClick={()=>setColor('red')} className="btn-red">Red</button>
        <button onClick={() =>setColor('blue')} className="btn-blue">Blue</button>
        <button onClick={() =>setColor('yellow')} className="btn-yellow">Yellow</button>
      </div>
    </div>
  )
}

export default ColorChange
