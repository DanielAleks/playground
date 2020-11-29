import React, { useEffect, useState } from 'react'
import '../styles/style.sass'


function SimpleCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
  document.title = `you clicked ${count} times`;
    
  }, [count]);
  
  
  return (
    <div className='outerContainer'>
    <div>
    <p>you clicked {count} times.</p>
    <button onClick={() => setCount(count + 1)}>click here</button>
    </div>
  </div>
  );
  
  
  }
export default SimpleCounter

