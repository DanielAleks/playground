import React, { useState } from 'react'

function KahootQuiz() {
  const [accessor, setAccessor] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const allData = [
    {
      question: 'how many blue stripes are on the American flag?',
      options: [
        { answer: '11', isCorrect: false },
        { answer: '17', isCorrect: false },
        { answer: '13', isCorrect: true },
        { answer: '9', isCorrect: false }
      ]
    },

    {
      question: 'a ____ of bear cubs',
      options: [
        { answer: 'herd', isCorrect: false },
        { answer: 'club', isCorrect: false },
        { answer: 'pack', isCorrect: false },
        { answer: 'litter', isCorrect: true }
      ]
    },

    {
      question: 'what year was obama elected the first time?',
      options: [
        { answer: '2006', isCorrect: false },
        { answer: '2007', isCorrect: false },
        { answer: '2008', isCorrect: true },
        { answer: '2009', isCorrect: false }
      ]
    },
    {
      question: 'whats the fastest animal in the world?',
      options: [
        { answer: 'lion', isCorrect: false },
        { answer: 'cheetah', isCorrect: true },
        { answer: 'leopard', isCorrect: false },
        { answer: 'kangaroo', isCorrect: false }
      ]
    }
  ]

  const onClickHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    setAccessor(accessor + 1)
    if (accessor >= allData.length - 1)
      setShowScore(true)
  }

  return (
    <div className='background'>
      <h1>Kahoot Quiz</h1>

      {!showScore ?
        <p>Question {accessor + 1}/4</p>
        : ''
      }

      { showScore ?
        <div>
          <p>You got {score} out of {allData.length}</p>
        </div>
        :
        <div>
          <p>{allData[accessor].question}</p>
          <div>{allData[accessor].options.map((props) =>
            <button onClick={() => onClickHandler(props.isCorrect)}>{props.answer}</button>
          )}
          </div>
        </div>
      }

    </div>
  )
}

export default KahootQuiz
