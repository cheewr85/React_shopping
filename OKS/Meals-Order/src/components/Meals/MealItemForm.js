/**
 * 공통 UI 적용을 위해서 input 태그를 설정하되, 그 값을 input props로 넘겨줌
 * label도 동일하게 button만 별도 구현
 */
import classes from "./MealItemForm.module.css";

import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
