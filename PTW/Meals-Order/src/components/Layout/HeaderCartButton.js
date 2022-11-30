import classes from "./HeaderCartButton.module.css";
import { useState } from "react";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  const [cartState, setCartState] = useState(0);
  return (
    <div className={classes.button}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={classes.badge}>{cartState}</div>
    </div>
  );
};

export default HeaderCartButton;
