// import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {value: 0, toggle: true};
const authenticationState = {authentication: false};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    showToggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

const authSlice = createSlice({
  name: 'authenticator',
  initialState: authenticationState,
  reducers: {
    login(state) {
      state.authentication = true;
    },
    logout(state) {

      state.authentication = false;
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
  reducer: {
    counter: counterSlice.reducer, // this line will be the state object above
    auth: authSlice.reducer,
  },
});

export const {increment, decrement, showToggle} = counterSlice.actions;
export const {login, logout} = authSlice.actions;

export default store;

////*note: when we put the value into the dispatch(fn(value)); --> value will be created as the payload
