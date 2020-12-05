import React from 'react'
import './modalStyles.sass'

function ModalEx({setIsModalVisable}) {



  return (
    <div>
      <h1>your in the modal</h1>
      
      <button onClick={() => setIsModalVisable(false)}>switch to home</button>
    </div>
  )
}

export default ModalEx
