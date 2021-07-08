import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import Button from './Button/Button';

const modalOverlay = props => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>

      <div>
        <p>{props.message}</p>
      </div>

      <footer>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <modalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
        document.getElementById('overlay-root'))}
    </Fragment>
  );
};

export default ErrorModal;