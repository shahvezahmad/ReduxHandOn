import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterState';
import './App.css';

function App() {

  const { count } = useSelector(state => state.counter);
  const Dispatch = useDispatch();
  return (
    <div className= "App">
      <div> Count: { count } </div>
      <button onClick={() => Dispatch(increment())}> + </button>
      <button onClick={() => Dispatch(decrement())}> - </button>
    </div>
  );
}

export default App;
