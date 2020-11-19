import React, { useEffect, useState } from 'react'

function TicTacToe() {
  const [player, setPlayer] = useState('O')
  const [winner, setWinner] = useState('')
  const [gameBoard, setGameBoard] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ])


  const winConditions = () => {
    const myArr = [
      [8, 4, 0],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6]
    ]
    myArr.map((doc, index) => {
      const myPlayer = (plyr) => {
        if (gameBoard[doc[0]] === plyr && gameBoard[doc[1]] === plyr && gameBoard[doc[2]] === plyr) {
          setWinner(`${plyr} wins`)
        }
      }

      myPlayer('X')
      myPlayer('O')
    })

  }


  useEffect(() => {
    winConditions()

  }, [gameBoard])


  const whosTurn = () => {
    if (player === 'O') {
      setPlayer('X')
    } else if (player === 'X')
      setPlayer('O')
  }



  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', width: '310px', flexWrap: 'wrap', justifyContent: 'center' }}>

        {gameBoard.map((prop, i) => {
          return (
            <div onClick={() => {
              if (prop === '' && winner === '') {
                setGameBoard((prev) => prev.map((item, index) => {
                  if (i === index) {
                    return player
                  } else return item
                }))
                winConditions()
                whosTurn()

              }
            }}
              style={{ width: '100px', height: '100px', background: 'pink', margin: '1px' }}>
              {prop}
            </div>
          )
        }
        )}
        {winner}
      </div>
    </div>
  )
}

export default TicTacToe
