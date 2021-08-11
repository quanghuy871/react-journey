import classes from './Checkout.module.css';
import React, {useRef} from 'react';

const Checkout = (props) => {
  const inputName = useRef();
  const inputStreet = useRef();
  const inputPostal = useRef();
  const inputCity = useRef();

  const fieldCheck = input => input.trim() === '';

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = !fieldCheck(inputName.current.value);
    const street = !fieldCheck(inputStreet.current.value);
    const postal = !fieldCheck(inputPostal.current.value);
    const city = !fieldCheck(inputCity.current.value);

    if (!name && !street) {
      return;
    }

    props.onConfirm({
      name: inputName.current.value,
      street: inputStreet.current.value,
      postal: inputPostal.current.value,
      city: inputCity.current.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputName} type='text' id='name'/>
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input ref={inputStreet} type='text' id='street'/>
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={inputPostal} type='text' id='postal'/>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input ref={inputCity} type='text' id='city'/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;