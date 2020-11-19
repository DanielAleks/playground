import React, { useState } from 'react'

function ConversionTemp() {
  const [controllableInputField, setControlledInputField] = useState<any>('')
  const [isFarenheit, setIsFarenheit] = useState(false)
  const [calculated, setCalculated] = useState<any>()


  const convert = () => {
    let farenheitCalculated = controllableInputField * 9 / 5 + 32
    let celsiusCalculated = controllableInputField - 32 * 5 / 9
    if (isFarenheit) {
      setCalculated(farenheitCalculated)

    } else setCalculated(celsiusCalculated)

  }


  return (
    <div>
      <h1>Convert Your Temperature</h1>
      <div>
        <input onChange={(event) => setControlledInputField(event.target.value)}
          type="text"
          value={controllableInputField}
          placeholder='farenheit' />
        <button onClick={() => setIsFarenheit((prev) => !prev)}>
          {isFarenheit ? 'F°' : 'C°'}
        </button>
        <button
          onClick={convert}>
          Convert
        </button>
        {calculated}
      </div>
    </div>
  )
}

export default ConversionTemp
