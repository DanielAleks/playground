import React, { useState } from 'react'
import '../styles/style.sass'

const initialList = [
  'Learn React',
  'Learn Firebase',
  'Learn GraphQL',
];

function TodoList({ }) {
  const [input, setInput] = useState('');
  const [list, setList] = useState(initialList)




  const completeHandler = () => {

  };
  const deleteHandler = () => {

  };



  const handleChange = (event) => {
    setInput(event.target.input)
  }


  const handleSubmit = (event) => {
    if (input) {
      setList(list.concat(input))
    }
    setInput('')
    event.preventDefault();
  };



  return (
    <div>
      <div className='container'>
        <h1>Todo List</h1>

        <form onSubmit={handleSubmit}>
          <input id='input' type="text" value={input} onChange={handleChange} />
          
          <button type='submit'>submit</button>
        </form>

      </div>

      <div className='tasklist'>
        <button onClick={completeHandler}>#</button>
        
        <p>{input}</p>
       
        <ul>
          <li>{list}</li>
          <li>{list}</li>
        </ul>

        <button onClick={deleteHandler}>X</button>
      </div>
    </div>
  )
}



export default TodoList
