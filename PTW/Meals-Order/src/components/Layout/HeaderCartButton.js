import classes from "./HeaderCartButton.module.css";
import { useCallback, useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import { CartStateContext, SetCartStateContext } from "../../App";

const HeaderCartButton = () => {
  const CalcCount = useCallback((cartState) => {
    let count = 0;
    cartState.map((it) => count++);
    return count;
  }, []);
  const { cartState, cartTrigger } = useContext(CartStateContext);
  const { setCartTrigger } = useContext(SetCartStateContext);

  useEffect(() => {
    if (!cartState) console.log(cartState);
    else setCartCount(CalcCount(cartState));
  }, [cartState]);
  const [cartCount, setCartCount] = useState(0);
  // console.log(cartState);
  console.log(cartTrigger);

  return (
    <button className={classes.button} onClick={() => setCartTrigger(true)}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={classes.badge}>{cartCount}</div>
    </button>
  );
};

export default HeaderCartButton;
