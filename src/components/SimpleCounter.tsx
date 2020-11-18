import React, { useEffect, useState } from 'react'


function SimpleCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
  document.title = `you clicked ${count} times`;
    
  }, [count]);
  
  
  return (
    <div >
    <p>you clicked {count} times.</p>
    <button onClick={() => setCount(count + 1)}>click here</button>
  </div>
  );
  
  
  }
export default SimpleCounter

