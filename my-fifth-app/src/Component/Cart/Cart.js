import React, {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.reduce((acc, el) => acc + el.amount, 0);

  const cartItem = cartCtx.items.map(el => <ul>
    <li>{el.name}</li>
  </ul>);

  return (
    <Modal isModalClose={props.isModalClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartItems} items = ${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.isModalClose} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;