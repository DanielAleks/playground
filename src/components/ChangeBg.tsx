import React, { useState } from 'react'

function ChangeBg() {
  const [isRed, setIsRed] = useState(false)

  const colorObj = [
    {label: 'red', value: 'color1'},
    {label: 'green', value: 'color2'},
    {label: 'purple', value: 'color3'},
  ]

  return (
    <div>
      <div style={{background: isRed ? 'red' : 'green',   height: 300, width: 400, margin: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
      onClick={() => setIsRed(prev => !prev)}>
        <h1>{isRed ? 'Change me to Greeny' : 'Change me to Redd'}</h1>
      </div>
      
        {colorObj.map((item) => 
          <li style={{color: 'white', backgroundColor: item.label}}>{item.value}</li>
        )}
    </div>
  )
}

export default ChangeBg
