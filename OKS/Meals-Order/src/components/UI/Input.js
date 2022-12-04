/**
 * props로 받은 값을 기준으로 label & input 추가해서 둠
 */
import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
