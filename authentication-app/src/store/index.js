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

    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

const store = configureStore({
  reducer: stateSlice.reducer,
});

export const {login, logout} = stateSlice.actions;
export default store;
