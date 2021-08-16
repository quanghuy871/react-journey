import React, {useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const mealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addAmountHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          {props.description}
        </div>
        <div className={classes.price}>
          {props.price}
        </div>
      </div>
      <div>
        <MealItemForm onAddAMount={addAmountHandler}/>
      </div>
    </li>
  );
};

export default mealItem;