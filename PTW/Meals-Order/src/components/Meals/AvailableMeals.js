import { useState, memo } from "react";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.module.css";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  // dummy_meals 쓸 곳에 직접 추가하면 됨

  const [mealState, setMealState] = useState(DUMMY_MEALS);

  // console.log(mealState);

  return (
    <div className={classes.meals}>
      <div className={Card.card}>
        <ul>
          {mealState.map((it) => (
            <MealItem key={it.id} props={it} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(AvailableMeals);
