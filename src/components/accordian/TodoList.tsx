import React, { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList({
  itemList,
  styles,
  listOpenById,
  editMode,
  setListOpenById,
  removeList,
  setInputList
}) {
  const [listOfTodos, setListOfTodos] = useState([])
  const [controlledInput, setControlledInput] = useState('')

  const removeTodo = (item) => {
    setListOfTodos(prev => prev.filter(itemTodoDel =>
      itemTodoDel === item ? null : itemTodoDel
    ))

  }

  const addTodo = () => {
    setListOfTodos(prev => [...prev, { input: controlledInput, id: Math.floor(Math.random() * 10000) }])
  }

  return (
    <div style={styles.buttonContainer}>
      <div style={{ ...styles.button, display: editMode ? 'flex' : 'none' }} onClick={() => removeList(itemList)}>Delete</div>

      <li style={{ listStyleType: 'none', marginLeft: 10 }}
        onClick={() => listOpenById === itemList.id ? setListOpenById(null) : setListOpenById(itemList.id)}
        key={itemList.id}><b>{itemList.input}</b></li>


      <div style={{ display: listOpenById === itemList.id ? 'flex' : 'none', flexDirection: 'column' }}>
        {listOfTodos.map((item) =>

          <TodoItem
            removeTodo={removeTodo}
            key={item.id}
            item={item} setListOfTodos={setListOfTodos} />
        )}

        <input
          style={styles.input}
          type="text"
          // placeholder='My Todo...'
          value={controlledInput}
          onChange={(e) =>setControlledInput(e.target.value)}
        />
        <div style={styles.button} onClick={addTodo}> Add Todo</div>
      </div>
    </div>
  )
}
export default TodoList



// const [myStuff, setMyStuff] = useState(
//   [
//     {id: 12, person:'Daniel', action: 'eat', object: 'fork'},
//     {id: 21, person: 'Dennis', action: 'drinks', object: 'juice',},
//   ]
// )


// const updateMyStuff = ({id, updatedValue, pao}) => {
//   setMyStuff(prev => prev.map(item => item.id === id ? {...item, [pao]: updatedValue} : item))
// }

// updateMyStuff({id:21, updatedValue: 'cookies', pao: 'object'})
// updateMyStuff({id:21, updatedValue: 'Jackson', pao:'person'})




// const [myStuff, setMyStuff] = useState(
//   [
//     {id: 12, person: {character: 'shy', eyes: 'blue'}, action: 'eat', object: 'fork'},
//     {id: 21, person: {character: 'extraverted', eyes: 'green'}, action: 'drinks', object: 'juice',},
//   ]
// )


// const updateMyStuff = ({id, updatedValue}) => {
//   // setMyStuff(prev => prev.map(item => item.id === id ? {...item, [pao]: updatedValue} : item))
//   setMyStuff(prev => prev.map(item => item.id === id ? 
//     {...item,
//       person: {
//         ...item.person,
//         character: 'confident',
//       } 
//     }
//      : item)
//      )


// }