import input from "../UI/Input.module.css";
import classes from "./MealItemForm.module.css";
import { memo, useContext, useState, useRef } from "react";
import { SetCartStateContext } from "../../App";

const MealItemForm = ({ props }) => {
  const { onCreate } = useContext(SetCartStateContext);
  const [newCartItemAmount, setNewCartItemAmount] = useState(1);
  const amountRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...props, amount: parseInt(newCartItemAmount) });
    onCreate({ ...props, amount: parseInt(newCartItemAmount) });
  };

  const handleChangeAmount = (e) => {
    setNewCartItemAmount(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={input.input}>
        <label>Amount</label>
        <input
          ref={amountRef}
          value={newCartItemAmount}
          onChange={handleChangeAmount}
        />
      </div>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default memo(MealItemForm);
