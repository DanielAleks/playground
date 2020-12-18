import React, { useState } from 'react'
import TodoList from './TodoList'

function Accordion() {
  const [inputList, setInputList] = useState('')
  const [list, setList] = useState([])
  const [listOpenById, setListOpenById] = useState<number>(null)
  const [editMode, setEditMode] = useState(false)


  const addList = () => {
    setList(prev => [...prev, { input: inputList, id: Math.floor(Math.random() * 10000) }])
  }

  const removeList = (itemList) => {
    setList(prev => prev.filter((itemListDel) =>
      itemList === itemListDel ? null : itemListDel
    ))
  }



  return (
    <div>
      <div onClick={() => setEditMode(prev => !prev)}>Edit mode</div>
      <div style={styles.button} onClick={addList}>Add List</div>
      <input style={styles.input} type="text" placeholder='My List...' value={inputList} onChange={(e) => setInputList(e.target.value)} />


      {list.map((itemList) =>
        <TodoList
          itemList={itemList}
          setInputList={setInputList}
          styles={styles}
          listOpenById={listOpenById}
          editMode={editMode}
          setListOpenById={setListOpenById}
          removeList={removeList}

        // setListOfTodos={setListOfTodos}
        // listOfTodos={listOfTodos} 
        />
      )}
    </div>
  )
}

export const styles = ({
  buttonContainer: {
    marginTop: 30,
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
