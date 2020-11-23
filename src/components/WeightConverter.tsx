import React, { useState } from 'react'

function WeightConverter() {
  const [isPounds, setIsPounds] = useState(false)
  const [value, setValue] = useState<any>()
  const [calculated, setCalculated] = useState<number>()

  
  const convertHandler = () => {
    let pounds = value * 0.453592
    let kilograms = value / 0.453592
    
    if (isPounds) {
      setCalculated(pounds)
    } else if (!isPounds) {
      setCalculated(kilograms)
    }
  }
  
  const toggleHandler = () => {
    if (isPounds) {
      setIsPounds(false)
    } else if (!isPounds)
      setIsPounds(true)
  }

  return (
    <div>
      <h1>Pounds to Kilograms Converter</h1>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)}/>
      <button onClick={toggleHandler}>
        {isPounds ? 'Ibs' : 'Kgs'}
      </button>
      <button onClick={convertHandler}>Convert</button>
      <p>
        {calculated}
      </p>
    </div>
  )
}

export default WeightConverter
