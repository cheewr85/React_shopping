import Modal from "../UI/Modal";
import Card from "../UI/Card.module.css";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartStateContext, SetCartStateContext } from "../../App";
// import {  } from "../../App";

const Cart = () => {
  const { cartState } = useContext(CartStateContext);
  const [state, setState] = useState(cartState);
  const { onDelete, setCartTrigger } = useContext(SetCartStateContext);
  let totalAmount = 0;
  useEffect(() => {
    setState(cartState);
    state.map((it) => {
      if (it.amount < 1) onDelete(it.id);
    });
  }, [cartState]);

  return (
    <Modal>
      <div className={classes["cart-items"]}>
        {state.map((it) => {
          totalAmount += it.amount * it.price;
          return <CartItem {...it} />;
        })}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => setCartTrigger(false)}
        >
          Close
        </button>
        <button className={classes["button--alt"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
