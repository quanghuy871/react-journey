import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  showToggle: false,
};

const openCartSlice = createSlice({
  name: 'Toggle Cart',
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.showToggle = !state.showToggle;
    },
  },
});

const updateCartSlice = createSlice({
  name: 'Update Cart',
  initialState: initialState,
  reducers: {
    updateCart(state, action) {
      state.items.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    updateCart: updateCartSlice.reducer,
    showToggle: openCartSlice.reducer,
  },
});

export const {toggle} = openCartSlice.actions;
export const updateCart = updateCartSlice.actions;
export default store;