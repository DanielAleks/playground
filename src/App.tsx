import React, { useEffect, useState } from 'react';
import './App.css';
import Captia from './components/Captia';
import ConversionTemp from './components/ConversionTemp';
import MatchingGame from './components/MatchingGame/MatchingGame';
import OutputField from './components/OutputField';
import Quiz from './components/Quiz';
import SimpleCounter from './components/SimpleCounter'
import StopWatch from './components/StopWatch';
import TicTacToe from './components/TicTacToe';
import TodoList from './components/TodoList';
import './styles/style.sass'


function App() {

return (
  <div >
    {/* <SimpleCounter/> */}
    {/* <StopWatch/> */}
    {/* <TodoList/> */}
    {/* <OutputField/> */}
    {/* <ConversionTemp /> */}
    {/* <Captia /> */}
    {/* <MatchingGame /> */}
    {/* <TicTacToe /> */}
    <Quiz />
  </div>
);
}


export default App;

