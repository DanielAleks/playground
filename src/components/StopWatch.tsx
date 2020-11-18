import React, { useRef, useState } from 'react'

function StopWatch() {
const [timer, setTimer] = useState(0)
const [isActive, setIsActive] = useState(false)
const countRef = useRef(null)


const handleToggle = () => {
  setIsActive(prev => !prev)

  if (typeof countRef.current === 'number') {
    clearInterval(countRef.current)
    countRef.current = null
  } else startTimer()
}

const startTimer = () => {
  countRef.current = setInterval(() => {
    setTimer((timer) => timer + 1)
  }, 1000)
}


const handleReset = () => {
  setTimer(0)
}


  return (
    <div>
      <div>
        <h1 className='title'>Stopwatch Timer</h1>
      </div>
      <div className='display'>
        {timer}
      </div>
      <div className='buttons'>
      <button onClick={handleToggle}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )


  }


export default StopWatch