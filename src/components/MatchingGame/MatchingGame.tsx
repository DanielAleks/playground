import React, { useEffect, useState } from 'react'
import { gameLogic, mapMyCubes } from './matchingGameLogic'


function MatchingGame() {
  const [memory, setMemory] = useState<{ color, index }[]>([])

  const [cubesArray, setCubesArray] = useState<{ color: string, found: boolean }[]>([])
  // { color: 'blue', found: false }, 

  useEffect(() => {
    mapMyCubes({ setCubesArray })
  }, [])

  useEffect(() => {
    gameLogic({ memory, setCubesArray, setMemory })
  }, [memory])

  return (
    <div>
      <h1>Matching Game</h1>
      <div style={{ display: 'flex' }}>
        {cubesArray.map(({ color, found }, index) => {
          return <div onClick={() => {
            setMemory(prev => [...prev, { index: index, color: color }])
          }} style={{ width: '100px', height: '100px', background: color, opacity: found ? '10%' : '100%' }}></div>
        })}
        {cubesArray.filter(cubeObj => !cubeObj.found)[0] ? 'play game' : 'winner!'}
      </div>
    </div>
  )
}

export default MatchingGame
