import './App.css'
import { useState } from 'react'

function App() {
  let [value, setValue] = useState(15)

  const upvalue = () => {
    if(value <20){
      setValue(value+1)
    }
  }

  const downvalue = () => {
    if(value > 0){
      setValue(value-1)
    }
  }

  return (
    <>
    <h1>value: {value}</h1>

    <button onClick = {upvalue}>up(1) value:{value}</button>
    <button onClick = {downvalue}>down(1)</button>
    </>
  )
}

export default App
