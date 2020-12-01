import React from 'react';
import './App.css';
import Captia from './components/Captia';
import Carousel from './components/Carousel';
import ConversionTemp from './components/ConversionTemp';
import MatchingGame from './components/MatchingGame/MatchingGame';
import TodoList from './components/TodoList';
import Quiz from './components/Quiz';
import SimpleCounter from './components/SimpleCounter'
import StopWatch from './components/StopWatch';
import TicTacToe from './components/TicTacToe';
import QuoteGenerator from './components/QuoteGenerator';
import WeightConverter from './components/WeightConverter';
import KahootQuiz from './components/KahootQuiz';
import ReduxExper from './components/ReduxExper'
import OfficialQuoteGenerator from './components/OfficialQuoteGenerator';
import Home from './components/Home';
import './styles/style.sass'
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import configureStore from './store'
import TodoList2 from './components/TodoList2';


function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
    <div className='buttons'>

      <button><a href="/"> <h4>Home</h4> </a></button>
      <button><a href="/simple-counter"><h4>Simple Counter</h4></a></button>
      <button><a href="/stopwatch"><h4>Stopwatch</h4></a></button>
      <button><a href="/todos"><h4>Todos</h4></a></button>
      <button><a href="/converting-temperatures"><h4>Converting Temperatures</h4></a></button>
      <button><a href="/captia"><h4>Captia</h4></a></button>
      <button><a href="/matching-game"><h4>Matching Game</h4></a></button>
      <button><a href="/tictactoe"><h4>TicTacToe</h4></a></button>
      <button><a href="/quiz"><h4>Quiz</h4></a></button>
      <button><a href="/carousel"><h4>Carousel</h4></a></button>
      <button><a href="/joke-generator"><h4>Joke Generator</h4></a></button>
      <button><a href="/weight-converter"><h4>Weight Converter</h4></a></button>
      <button><a href="/kahoot-quiz"> <h4>Kahoot Quiz</h4> </a></button>
      <button><a href="/quote-generator"> <h4>Quote Generator</h4> </a></button>
      <button><a href="/redux-example"> <h4>Redux examp</h4> </a></button>
      <button><a href="/todo2"> <h4>Todo2</h4> </a></button>

      <Router>
          <Route path='/' exact component={Home}/>
          <Route path='/simple-counter' component={SimpleCounter} />
          <Route path='/stopwatch' component={StopWatch} />
          <Route path='/todos' component={TodoList} />
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
          <Route path='/redux-example' component={ReduxExper} />
          <Route path='/todo2' component={TodoList2} />
      </Router>
    </div>
    </Provider>
  );
}


export default App;

