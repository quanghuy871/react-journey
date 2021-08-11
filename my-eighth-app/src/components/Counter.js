import React from 'react';
import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggle = useSelector(state => state.toggle);

  const toggleCounterHandler = () => {
    dispatch({type: 'TOG'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch({type: 'INC', amount: 1})}>+</button>
        <button onClick={() => dispatch({type: 'DEC', amount: 1})}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
