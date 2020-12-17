import React from 'react';
import './App.css';
import './styles/style.sass'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'
import configureStore from './store'
import routes from './staticData/routes'

function App() {
  const store = configureStore()

  const RoutesComps = () => {
    return (
      <>
        {routes.map(route =>
          <Route path={route.path} exact component={route.component} />
        )}
      </>
    )
  }


  return (
    <Provider store={store}>
      <div className='buttons'>

        {routes.map(route =>
          <a href={route.path}><button><h4>{route.title}</h4></button></a>
        )}

        <Router>
          <Switch>
            <RoutesComps />
            {/* <Route path='/simple-counter' component={SimpleCounter} />
          <Route path='/stopwatch' component={StopWatch} />
          <Route path='/todos' component={TodoList} />
          <Route path='/converting-temperatures' component={ConversionTemp} />
          <Route path='/captia' component={Captia} />
          <Route path='/matching-game' component={MatchingGame} />
          <Route path='/tictactoe' component={TicTacToe} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/carousel' component={Carousel} />
          <Route path='/joke-generator' component={JokeGenerator} />
          <Route path='/weight-converter' component={WeightConverter} />
          <Route path='/kahoot-quiz' component={KahootQuiz} />
          <Route path='/quote-generator' component={OfficialQuoteGenerator} />
          <Route path='/redux-example' component={ReduxExper} />
          <Route path='/todo2' component={TodoList2} />
          <Route path='/free-ex1' component={FreeEx1} />
          <Route path='/free-ex2' component={FreeEx2} />
          <Route path='/free-ex3' component={FreeEx3} />
          <Route path='/change-bg' component={ChangeBg} /> */}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}


export default App;

