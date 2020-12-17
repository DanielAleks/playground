import React, { useState } from 'react'

function Accordion() {
  const [inputTodo, setInputTodo] = useState('')
  const [todo, setTodo] = useState([])
  const [inputList, setInputList] = useState('')
  const [list, setList] = useState([])
  const [isActive, setIsActive] = useState('title')

  const addTodo = (e) => {
    setTodo(prev => [...prev, { input: inputTodo, id: Math.floor(Math.random() * 10000) }])
  }
  const addList = (e) => {
    setList(prev => [...prev, { input: inputList, id: Math.floor(Math.random() * 10000) }])
  }

  const remove = (index) => {
    // setTodo(todo.filter(todo) => todo !== todo.id) 
      setTodo(todo.filter(item => item !== item.id))
      // this.setState({ items: items });
    }

  return (
    <div>
      <div style={styles.button} onClick={addTodo}>Add Todo</div>
      <div style={styles.button} onClick={addList}>Add List</div>

      <input style={styles.input} type="text" placeholder='My Todo...' value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
      <input style={styles.input} type="text" placeholder='My List...' value={inputList} onChange={(e) => setInputList(e.target.value)} />
      {todo.map((item, index) =>
        <li style={{}} key={index}>{item.input}</li>
      )}
      {list.map((item, index) =>
        <div style={styles.buttonContainer}>

          <li style={{ listStyleType: 'none', marginLeft: 10 }} key={index}><b>{item.input}</b></li>
          <div style={{marginLeft: 20}} onClick={() => remove(index)}>x</div>
        </div>
      )}
    </div>
  )
}
const styles = ({
  buttonContainer: {
    marginTop: 30,
    display: 'flex'
  },
  input: {
    background: 'none',
    borderColor: 'black',
  },
  button: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 80,
    background: '#1d1d1d',
    borderRadius: 10
  }
})

export default Accordion
