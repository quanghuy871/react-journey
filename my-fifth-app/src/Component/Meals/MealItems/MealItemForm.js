import React, {Fragment, useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [validAmount, setValidAmount] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const inputAmount = inputRef.current.value;
    const inputAmountNumber = +inputAmount;

    if (inputAmount.trim().length === 0 || inputAmountNumber > 5 || inputAmountNumber < 1) {
      setValidAmount(false);
      return;
    }

    props.onAddAMount(inputAmountNumber);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={inputRef}
          label="Amount"
          input={{
            id: 'amount_' + props.id, // this changed!
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}/>
        <button>+ Add</button>
        {!validAmount && <p>Please enter the valid amount</p>}
      </form>
    </Fragment>
  );
};

export default MealItemForm;