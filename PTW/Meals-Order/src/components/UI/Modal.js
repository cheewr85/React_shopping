import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>{props.children}</div>;
    </div>
  );
};

export default Modal;

// import classes from "./Card.module.css";

// const Card = (props) => {
//     return <div className={classes.card}>{props.children}</div>;
//   };

//   export default Card;
