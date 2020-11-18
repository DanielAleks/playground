import React, { useState } from 'react'

function ConversionTemp() {
  const [temp, setTemp] = useState<any>()

  const scaleNames = {
    farenheit: 'F°',
    celsius: 'C°'
  }

  const convertToFarenheit = (event) => {
    //should be event, we are tracking what's typed within input... cant be value, shows for both... cant be scaleNames, string objects unless if there is an && operator or just objects within two arrays, but we dont need an array. HMMMMMM.... 
    return ((event * 9 / 5) + 32)
  }

  const convertToCelsius = (event) => {
    return ((event - 32) * 5 / 9)
  }


  const onClickHandler = () => {
    setTemp('')
  }

  const onChangeHandler = (event) => {
    setTemp(event.target.value)

    if (event) {
      convertToCelsius(scaleNames.farenheit)
    } else convertToFarenheit(scaleNames.celsius)

  }


  return (
    <div>
      <h1>Convert Your Temperature</h1>
      <div>
        <input onChange={onChangeHandler}
          type="text"
          value={temp}
          placeholder='farenheit' />
        <button
          onClick={onClickHandler}>
          Convert
        </button>
      </div>

      <div>
        <input 
        onChange={onChangeHandler}
          type="text"
          value={temp}
          placeholder='celsius' />
        <button
          onClick={onClickHandler}>
          Convert
          </button>
      </div>


    </div>
  )
}

export default ConversionTemp
