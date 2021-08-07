import React, {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.reduce((acc, el) => acc + el.amount, 0);

  const removeHandler = (id) => {
    cartCtx.removeITem(id);
  };

  const addHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const cartItem = cartCtx.items.map(el =>
    <CartItem
      key={el.id}
      name={el.name}
      amount={el.amount}
      price={el.price}
      onAdd={addHandler.bind(null, el)}
      onRemove={removeHandler.bind(null, el.id)}
    />,
  );

  return (
    <Modal isModalClose={props.isModalClose}>
      <ul className={classes['cart-items']}>
        {cartItem}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartItems} item{cartItems >= 2 ? 's' : ''} = ${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.isModalClose} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;