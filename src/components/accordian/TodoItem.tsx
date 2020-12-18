import React, { useState } from 'react'
import {styles} from './Accordion'

const TodoItem = ({ item, setListOfTodos, removeTodo }) => {
  
  return (
    <div>
      <p>{item.input}</p>
      <div 
        onClick={() => removeTodo(item)}
        style={{background: 'red', height: 30, width: 30}} 
      />
    </div>
  )
}

export default TodoItem

{/* <input
  style={styles.input}
  type="text"
  // placeholder='My Todo...'
  value={todo}
  onChange={(e) => setTodo(e.target.value)}
/> */}