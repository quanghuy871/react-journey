import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import Button from '../UI/Button';

const HeaderCartButton = (props) => {
  return (
    <Button>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>7</span>
    </Button>
  );
};

export default HeaderCartButton;