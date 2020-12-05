import React, { useState } from 'react'
import ModalEx from './ModalEx'
import './modalStyles.sass'

function FreeEx1() {
  const [isModalVisable, setIsModalVisable] = useState(false)

  const flipSwitch = () => {
    // setIsModalVisable(prev => !prev)
    setIsModalVisable(true)
  }


  return (
    <div>

      {isModalVisable ?
        <ModalEx setIsModalVisable={setIsModalVisable}/>
        :
        <div>

          <h1>first page</h1>
          <button onClick={flipSwitch}>switch to modal</button>
        </div>
      }
    </div>
  )
}

export default FreeEx1
