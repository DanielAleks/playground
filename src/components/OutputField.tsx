import React, { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { MdDeleteForever, MdRadioButtonUnchecked } from 'react-icons/md'

function OutputField() {
  const [value, setValue] = useState('')
  interface todoObjT {
    todo: string
    checked: boolean
  }
  const [todos, setTodos] = useState<todoObjT[]>([])

  const handleChange = (event) => {
    setValue(event.target.value)

  }

  const handleSubmit = (event) => {
    setTodos(prev => [...prev, { todo: value, checked: false }])
    setValue('')
    event.preventDefault()
  }

  const handleCheck = (todoObj) => {
    setTodos((prev) => prev.map((item) => {
      if (todoObj === item) {
        return { ...item, checked: !item.checked }
      } else return item

    }))
  }

  const handleDelete = todoObj => {
    setTodos(prev => prev.filter((todoObj2) =>
      todoObj === todoObj2 ? null : todoObj2

    ))

  }


  const ListItem = () => {
    return (
      <>
        {todos.map((todoObj, index) =>
          <div className='tasklist'>

            <button onClick={() => handleCheck(todoObj)} >
              {todoObj.checked ? < FiCheckCircle /> : <MdRadioButtonUnchecked />}
            </button>

            <li key={index}>
              {todoObj.todo}
            </li>
            <button onClick={() => handleDelete(todoObj)}>
              <MdDeleteForever />
            </button>
          </div>
        )}
      </>
    )
  }



  return (
    <div>
      <form action="submit" onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" placeholder='enter your todos' value={value} />

        <input type="submit" value='submit' />
      </form>
      <ListItem />

    </div>
  )
}

export default OutputField
