import React, {useReducer} from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const index = state.items.findIndex(el => el.id === action.item.id);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existCartItem = state.items[index];
    let updatedItems;

    if (existCartItem) {
      const updatedItem = {
        ...existCartItem,
        amount: existCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;

    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const item = state.items.find(el => el.id === action.id);
    const index = state.items.findIndex(el => el.id === action.id);
    const newItem = {
      ...item,
      amount: item.amount - 1,
    };
    const updatedItems = [...state.items];
    updatedItems[index] = newItem;
    const updatedTotalAmount = state.totalAmount - updatedItems[index].price;

    if (updatedItems[index].amount === 0) {
      updatedItems.splice(index, 1);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeITem: (id) => {},

});

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatch({
      type: 'ADD',
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatch({
      type: 'REMOVE',
      id: id,
    });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemHandler,
    removeITem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;