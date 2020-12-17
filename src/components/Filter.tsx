import React, { useState } from 'react'


//Todo   Grocery List

function Filter() {
  const [active, setActive] = useState(false)
  const [fancy, setFancy] = useState(false)

  const groceries = ['knife', 'flower', 'forks', 'tomato', 'watermelons', 'lighters', 'baby food', 'toys', 'string', 'ice cream']

  const fancyGroceries = [
    { title: 'knife', cost: 8 },
    { title: 'watermelons', cost: 5 },
    { title: 'tomato', cost: 13 },
    { title: 'string', cost: 11 },
    { title: 'lighter', cost: 2 },
    { title: 'toys', cost: 9 },
  ]


  return (
    <div>
      <h1>Grocery List</h1>
      <button onClick={() => setActive(prev => !prev)}>
        Filter Through Groceries
      </button>
      <button onClick={() => setFancy(prev => !prev)}>
        FancyGroceries
      </button>

      <div style={{ display: fancy ? 'flex' : 'none' }}>
        {fancyGroceries.filter(item => item.cost < 10).map(fancyItem =>
          <li>{fancyItem.title}{fancyItem.cost}</li>
        )}
      </div>

      <div style={{ display: active ? 'flex' : 'none' }}>
        {groceries.filter(item => item.includes('f')).map(NewItem =>
          <li>{NewItem}</li>
        )}
      </div>


    </div >
  )
}

export default Filter
