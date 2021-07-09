import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick} />
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
      {ReactDom.createPortal(<BackDrop onClick={props.isModalClose} />, parentElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, parentElement)}
    </Fragment>
  );
};

export default Modal;