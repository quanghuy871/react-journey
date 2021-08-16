// import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {counter: 0, toggle: true};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    showToggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

// const reducer = (state = initialState, action) => {
//   if (action.type === 'INC') {
//     return {
//       counter: state.counter + action.amount,
//       toggle: state.toggle,
//     };
//   }
//
//   if (action.type === 'DEC') {
//     return {
//       counter: state.counter - action.amount,
//       toggle: state.toggle,
//     };
//   }
//
//   if (action.type === 'TOG') {
//     return {
//       counter: state.counter,
//       toggle: !state.toggle,
//     };
//   }
//
//   return state;
// };

// const store = createStore(reducer);
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const {increment, decrement, showToggle} = counterSlice.actions;

export default store;
