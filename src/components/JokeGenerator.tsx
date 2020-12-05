import React, { useState } from 'react'

function JokeGenerator() {
  
  interface todoObjT {
    value: string
  }
  const [todos, setTodos] = useState<todoObjT[]>([])
  const [value, setValue] = useState<any>('')

  const addTodo = () => {
    setTodos(prev => [...prev, {value: value}])
    setValue('')
  }
  


  return (
    <div >
      <input type="text" placeholder='type in group name' style={{ backgroundColor: 'white' }} onChange={(e) => setValue(e.target.value)} value={value} />
      {value}
      {todos.map((item) =>
  <div>
    <h3>{item.value} Group</h3>
  </div>
)}
      <div onClick={addTodo} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 100, height: 100, background: 'red', borderRadius: 180, margin: 20}}>
        <h5 style={{ color: 'white' }}>+</h5>
      </div>
    </div>
  )
}

export default JokeGenerator
