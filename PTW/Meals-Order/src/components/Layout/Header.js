import classes from "./Header.module.css";
import img from "../../img/meals.jpg";
import MealsSummary from "./MealsSummary";
import HeaderCartButton from "./HeaderCartButton";
import { memo } from "react";

const Header = () => {
  return (
    <div>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={classes.main_image}>
        <img src={img} />
      </div>
      <MealsSummary />
    </div>
  );
};

export default memo(Header);
