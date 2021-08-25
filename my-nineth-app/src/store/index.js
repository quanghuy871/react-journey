import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  showToggle: false,
};

const updateCartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    updateCart(state, action) {
      const index = state.items.findIndex(el => action.payload.id === el.id);
      const existItem = state.items[index];
      state.totalAmount++;

      if (existItem) {
        existItem.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },

    increment(state, action) {
      const existItem = state.items.find(el => action.payload === el.id);
      existItem.quantity++;
      state.totalAmount++;
    },

    decrement(state, action) {
      const existItem = state.items.find(el => action.payload === el.id);
      state.totalAmount--;
      if (existItem.quantity === 1) {
        state.items.splice(state.items.findIndex(el => action.payload === el.id), 1);
      } else {
        existItem.quantity--;
      }
    },

    toggle(state) {
      state.showToggle = !state.showToggle;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

// export const sendCartData = (data) => {
//   return async (dispatch) => {
//
//   };
// };

const store = configureStore({
  reducer: updateCartSlice.reducer,
});

export const {toggle} = updateCartSlice.actions;
export const updateCart = updateCartSlice.actions;
export default store;