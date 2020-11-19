import { access } from 'fs'
import React, { useEffect, useState } from 'react'

function Quiz() {
  const [accessor, setAccessor] = useState<number>(0)
  const [winner, setWinner] = useState('')


  const arrOfQuestions = [
    { question: 'whats 9 + 10?', answer: '21' },
    { question: 'what color is an apple?', answer: 'red' },
    { question: 'what country are we in?', answer: 'america' },
    { question: 'what flavor vanilla?', answer: 'vanilla' },

  ]




  const onChangeHandler = (event) => {
    if (event.target.value === arrOfQuestions[accessor].answer) {
      setWinner('you won')
    }
  }


  return (
    <div>
      {arrOfQuestions[accessor].question}
      <div>
        <input type="text" onChange={onChangeHandler} />
        <button onClick={() => { setAccessor(Math.floor(Math.random() * 4)) }
        }>
          Randomizer
        </button>
        {winner}
      </div>
    </div>
  )
}

export default Quiz
