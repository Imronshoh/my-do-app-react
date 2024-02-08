import React, { useState } from 'react'
import './App.css'

let arr = [];

function App() {
  const [val, setVal] = useState('')
  const [render, setRender] = useState(true)
  function fnAdd() {
    arr.push(val);
    setRender(!render)
  }
  return (
    <div className="App">
      <div class="container">
        <div class="list">
          <label class="input-group__label" for="myInput">My Label</label>
          <input type="text" id="myInput" class="input-group__input" onChange={(e) => setVal(e.target.value)} />
          <button class="button-29" role="button" onClick={fnAdd}>Add</button>


        </div>
      </div>
      {
        arr.map((item, index) => {
          return <p key={index}>{item}</p>
        })
      }
    </div>
  )
}

export default App