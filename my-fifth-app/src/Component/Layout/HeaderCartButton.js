import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.reduce((acc, el) => acc + el.amount, 0);
  // console.log(cartItems);

  return (
    <button onClick={props.isModalShow} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCartButton;