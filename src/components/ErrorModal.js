import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import CardWrap from "./UI/CardWrap";
import classes from "./ErrorModal.module.css";
import Button from './UI/Button';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {

  return (
    <CardWrap className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={classes.content}>
        <p>{props.text}</p>
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </CardWrap>
  );
};


const ErrorModal = (props) => {

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          titile={props.title}
          text={props.text}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;