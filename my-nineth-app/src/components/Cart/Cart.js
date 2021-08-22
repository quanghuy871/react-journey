import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const Cart = (props) => {
  const cart = useSelector(state => state.updateCart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map(el =>
          <CartItem
            key={el.id}
            item={{
              id: el.id,
              title: el.title,
              quantity: el.quantity,
              total: el.quantity * el.price,
              price: el.price,
            }}/>)}
        {cart.length === 0 && <p>There is no item!</p>}
      </ul>
    </Card>
  );
};

export default Cart;
