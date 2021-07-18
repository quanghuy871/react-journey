import React, {useReducer} from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    return {
      items: state.items.concat(action.item),
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
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