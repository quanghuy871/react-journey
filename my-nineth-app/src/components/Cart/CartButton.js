import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux';
import {toggle} from '../../store/index';

const CartButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggle())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
