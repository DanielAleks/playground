import React, { useState } from 'react'

function TodoList2() {
  const [value, setValue] = useState('')

  interface todoObjT {
    id: number
    input: string
  }
  const [todos, setTodos] = useState<todoObjT[]>([])

  const add = () => {
    setTodos(prev => [...prev, {input: value, id: Math.floor(Math.random() * 10000), value: value}])
    setValue('')
  }


  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={add}>addTodo</button>
      {value}
      {todos.map((todo, index) =>
        <li onClick={() => {
          setTodos(prev => prev.filter(newTodo => newTodo === todo))
        }} key={index}>{todo.input}</li>
      )}
    </div>
  )
}

export default TodoList2
