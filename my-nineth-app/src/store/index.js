import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
};

const itemSlice = createSlice({
  name: 'amount',
  initialState: initialState,
  reducers: {},
});

const store = configureStore({
  reducer: itemSlice.reducer,
});