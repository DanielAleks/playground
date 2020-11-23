import React, { useState } from 'react'

function QuoteGenerator() {
  const [accessor, setAccessor] = useState<any>([])

  const jokesArr = [
    'I hate Russian dolls… theyre so full of themselves!',
    'I have a fear of speed bumps. But I am slowly getting over it.',
    'What did one plate say to his friend? Tonight, dinners on me!',
    'What is Forest Gumps password? 1Forest1.',
    'Whats red and moves up and down? A tomato in an elevator!'
  ]


  function handleNext() {
    let random = Math.floor(Math.random() * 5)
    setAccessor(random)
  }

  return (
    <div>
      <h1>Joke Generator</h1>
      <p>
        {jokesArr[accessor]}
      </p>
      <button onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default QuoteGenerator
