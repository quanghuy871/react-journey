import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: '',
};

const stateSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },

    logout(state, actions) {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: stateSlice.reducer,
});

export const {login, logout} = stateSlice.actions;
export default store;
