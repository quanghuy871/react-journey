import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeITem: (id) => {},
});

export const CartContextProvider = (props) => {
  const addItemHandler = (item) => {

  };

  const removeItemHandler = (id) => {

  };

  const cartContext = {
    items: [],
    totalAmount: 0,
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