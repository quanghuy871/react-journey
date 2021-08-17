import React from 'react';
import classes from './Counter.module.css';
import {increment, decrement, showToggle} from '../store/index';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value); // access to the state object
  const toggle = useSelector(state => state.counter.toggle);

  const toggleCounterHandler = () => {
    dispatch(showToggle(true));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
