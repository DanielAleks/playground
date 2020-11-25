import React from 'react';
import './App.css';
import Captia from './components/Captia';
import Carousel from './components/Carousel';
import ConversionTemp from './components/ConversionTemp';
import MatchingGame from './components/MatchingGame/MatchingGame';
import OutputField from './components/OutputField';
import Quiz from './components/Quiz';
import SimpleCounter from './components/SimpleCounter'
import StopWatch from './components/StopWatch';
import TicTacToe from './components/TicTacToe';
import './styles/style.sass'
import Home from './components/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import QuoteGenerator from './components/QuoteGenerator';
import WeightConverter from './components/WeightConverter';
import KahootQuiz from './components/KahootQuiz';
import OfficialQuoteGenerator from './components/OfficialQuoteGenerator';



function App() {

  return (
    <div className='buttons' style={{background: 'black'}}>

      <button><a href="/">Home</a></button>
      <button><a href="/simple-counter">Simple Counter</a></button>
      <button><a href="/stopwatch">Stopwatch</a></button>
      <button><a href="/todos">Todos</a></button>
      <button><a href="/converting-temperatures">Converting Temperatures</a></button>
      <button><a href="/captia">Captia</a></button>
      <button><a href="/matching-game">Matching Game</a></button>
      <button><a href="/tictactoe">TicTacToe</a></button>
      <button><a href="/quiz">Quiz</a></button>
      <button><a href="/carousel">Carousel</a></button>
      <button><a href="/joke-generator">Joke Generator</a></button>
      <button><a href="/weight-converter">Weight Converter</a></button>
      <button><a href="/kahoot-quiz">Kahoot Quiz</a></button>
      <button><a href="/quote-generator">Quote Generator</a></button>


      <Router>
          <Route path='/' exact component={Home}/>
          <Route path='/simple-counter' component={SimpleCounter} />
          <Route path='/stopwatch' component={StopWatch} />
          <Route path='/todos' component={OutputField} />
          <Route path='/converting-temperatures' component={ConversionTemp} />
          <Route path='/captia' component={Captia} />
          <Route path='/matching-game' component={MatchingGame} />
          <Route path='/tictactoe' component={TicTacToe} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/carousel' component={Carousel} />
          <Route path='/joke-generator' component={QuoteGenerator} />
          <Route path='/weight-converter' component={WeightConverter} />
          <Route path='/kahoot-quiz' component={KahootQuiz} />
          <Route path='/quote-generator' component={OfficialQuoteGenerator} />

      </Router>
    </div>
  );
}


export default App;

