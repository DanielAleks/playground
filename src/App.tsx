import React, { useEffect, useState } from 'react';
import './App.css';
import ConversionTemp from './components/ConversionTemp';
import OutputField from './components/OutputField';
import SimpleCounter from './components/SimpleCounter'
import StopWatch from './components/StopWatch';
import TodoList from './components/TodoList';
import './styles/style.sass'


function App() {

return (
  <div >
    {/* <SimpleCounter/> */}
    {/* <StopWatch/> */}
    {/* <TodoList/> */}
    {/* <OutputField/> */}
    <ConversionTemp />
  </div>
);
}


export default App;

