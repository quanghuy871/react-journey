import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {
  return (
    <div className={classes.backdrop}/>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

const parentElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop/>, parentElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, parentElement)}
    </Fragment>
  );
};

export default Modal;