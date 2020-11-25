import React, { useState } from 'react'

function OfficialQuoteGenerator() {
  const [whichQuote, setWhichQuote] = useState(0)

  const quotesArr = [
    'I hate Russian dolls… theyre so full of themselves.',
    'I have a fear of speed bumps. But I am slowly getting over it.',
    'What did one plate say to his friend? Tonight, dinners on me.',
    'What is Forest Gumps password? 1Forest1.',
    'Whats red and moves up and down? A tomato in an elevator.'
  ]

  const nextQuote = () => {
    setWhichQuote(whichQuote + 1)
  }
  if(whichQuote > 4) {
    alert('sorry, no more quotes. Reload Window')
  }
  

  return (
    <div>
      <button onClick={nextQuote}>Next</button>
      <p>
      {quotesArr[whichQuote]}
      </p>
    </div>
  )
}

export default OfficialQuoteGenerator
