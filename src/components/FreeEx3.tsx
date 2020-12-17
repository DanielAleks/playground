import React, { useState } from 'react'

function FreeEx3() {
  const [value, setValue] = useState<any>()

  return (
    <div>
      <h5>username:</h5>
      <h5>password:</h5>
      <button><h5>submit</h5></button>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      {value}
    </div>
  )
}

export default FreeEx3
