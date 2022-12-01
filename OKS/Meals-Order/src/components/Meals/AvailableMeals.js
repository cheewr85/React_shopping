/**
 * dummy_meals가 필요한 곳, 여기서 받아서 처리함
 * MealItem은 ul 태그로 처리할 것인데 dummy_meals를 props로 연결하기 위한 작업
 * 필요, 별도의 변수로 선언해서 dummy_meals를 map을 하여 MealItem 생성
 */

import Card from "../UI/Card";
import MealItem from "./MealItem";

import classes from "./AvailableMeals.module.css";

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

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
