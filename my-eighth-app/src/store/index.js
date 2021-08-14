import {createStore} from 'redux';

const initialState = {counter: 0, toggle: true};

const reducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      counter: state.counter + action.amount,
      toggle: state.toggle,
    };
  }

  if (action.type === 'DEC') {
    return {
      counter: state.counter - action.amount,
      toggle: state.toggle,

    };
  }

  if (action.type === 'TOG') {
    return {
      counter: state.counter,
      toggle: !state.toggle,
    };
  }


  return state;
};

const store = createStore(reducer);

export default store;
