import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {toggle} from '../../store/index';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.totalAmount);

  return (
    <button onClick={() => dispatch(toggle())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
