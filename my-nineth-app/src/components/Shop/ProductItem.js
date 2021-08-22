import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux';
import {updateCart} from '../../store/index';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const {title, price, description} = props;
  const updateCartHandler = () => {
    dispatch(updateCart.updateCart({
      title: title,
      price: price,
      description: description,
      id: props.id,
      quantity: props.quantity,
    }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={updateCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
