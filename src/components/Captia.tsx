import React, { useState } from 'react'

function Captia() {
  const [controlledInputField, setControlledInputField] = useState('')
  const [accessor, setAccessor] = useState<number>()

  const names = ['Joe', 'Quick', 'Man', 'Fire', 'Icecream']

  return (
    <div>
      <div id='Daniel'>{controlledInputField}</div>
      <input type="text" value={controlledInputField} onChange={(event) => {
        setControlledInputField(event.target.value)
      }} />
      <button onClick={() => {
        let random = Math.floor(Math.random() * 5)
        setAccessor(random)
      }}>
      Randomizer</button>
      {names[accessor]} 
      {controlledInputField === names[accessor] ? ' win' : ' your a robot'}
    </div>
  )
}

export default Captia
