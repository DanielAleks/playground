import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { rootStoreT } from '../store'
import {TOGGLE_RED} from '../reducers/types'
// import superPowerRxAction from '../actions/superPowerRxAction'

function ReduxExper() {
const isRedElement = useSelector((state: rootStoreT) => state.isRedElement)
const dispatch = useDispatch()

const dontDoThisStyles = {
  backgroundColor: isRedElement ? 'red' : 'blue',
  height: 50,
  width: 120,
  borderRadius: 5,
  color: 'white',
}

const onClickHandler = () => dispatch({type: TOGGLE_RED, payload: 'what up home boi'})
// const onClickHandler2 = () => dispatch(superPowerRxAction)

  return (
    <div className='container'>
    <button style={dontDoThisStyles} onClick={onClickHandler}>
      {isRedElement ? 'redux made me red' : 'redux made me blue'}
    </button>
    </div>
  )
}

export default ReduxExper
