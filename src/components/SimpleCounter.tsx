import React from 'react'
import '../styles/style.sass'
import { useSelector, useDispatch } from 'react-redux'
import { rootStoreT } from '../store'
import { DECREMENT, INCREMENT } from '../reducers/types'


function SimpleCounter() {
  const isCounted = useSelector((state: rootStoreT) => state.isCounted)
  const dispatch = useDispatch()
  
  const increment = () => dispatch({type: INCREMENT})
  const decrement = () => dispatch({type: DECREMENT})

  return (
    <div>
      <div>
        <p>you clicked {isCounted} times.</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );


}
export default SimpleCounter

