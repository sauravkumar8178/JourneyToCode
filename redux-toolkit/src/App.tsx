import React from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment, decrement } from './redux/slices/counter';


function App() {
  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
