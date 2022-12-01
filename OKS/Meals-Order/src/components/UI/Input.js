/**
 * props로 받은 값을 기준으로 label & input 추가해서 둠
 */
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
