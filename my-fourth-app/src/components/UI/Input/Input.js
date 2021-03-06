import React, {useRef, useEffect} from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const inputRef = useRef();

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBLur}
      />
    </div>
  );
};

export default Input;