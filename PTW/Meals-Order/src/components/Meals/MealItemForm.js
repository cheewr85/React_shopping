import Input from "../UI/Input.module.css";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <div className={Input.input}>
        <label>Amount</label>
        <input />
      </div>
      <button onClick="">+ Add</button>
    </form>
  );
};

export default MealItemForm;
