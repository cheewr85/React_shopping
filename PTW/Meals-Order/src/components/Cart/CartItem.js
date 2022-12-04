import { useContext, memo } from "react";
import classes from "./CartItem.module.css";
import { SetCartStateContext } from "../../App";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const { onRemove, onAdd } = useContext(SetCartStateContext);

  const handleRemoveButtonCLick = () => {
    onRemove(props.id);
  };
  const handleAddButtonCLick = () => {
    onAdd(props.id);
  };
  console.log(`amout : ${props.amount}`);
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={handleRemoveButtonCLick}>-</button>
        <button onClick={handleAddButtonCLick}>+</button>
      </div>
    </li>
  );
};

export default memo(CartItem);
