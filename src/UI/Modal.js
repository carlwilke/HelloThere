import React from "react";
import Card from "./Card";
import Button from "./Button";
import DataLoad from "./DataLoad";
import Loader from "react-loader-spinner";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      {props.binary && <DataLoad />}
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>

        {props.visible && (
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        )}
      </Card>
    </div>
  );
};

export default Modal;
