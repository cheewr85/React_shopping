/**
 * AvailableMeals에서 props로 받은 값을 css를 체크하여서 스타일 + 값을 받음
 * space-between이므로 MealItemForm이 이 부분에 들어옴
 */
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className={classes.meal}>
      <li>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </li>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </div>
  );
};

export default MealItem;
