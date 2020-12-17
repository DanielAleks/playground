import React, { useState } from 'react'

function FreeEx1() {


  const names = ['Tiffany', 'Jordan', 'Alex', 'Jeffery']
  

  return (
    <div>
      {names.filter(person => person.includes('J')).map(filteredPerson =>
        <li>
          {filteredPerson}
        </li>
        )}
    </div>
  )
}

export default FreeEx1
