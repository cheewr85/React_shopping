/**
 * header 태그 사용 + class 이름은 .header로 사용, header 안에 ReactMeals h태그 활용 및 HeaderCartButton 넣기
 * 추가로 image 삽입하기(이 때 fixed와 스크롤시 잘 처리되는지 확인 필요)
 * MealsSummary도 추가 예정
 * header 태그 안에 header에 대한 텍스트 태그 + 카트 버튼 태그, 그 밑에 그냥 이미지 태그 + MealsSummary 태그를 묶어서 진행예정
 */
import React, { Fragment } from "react";

import mealsImage from "../../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/MealsSummary";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
      <MealsSummary />
    </Fragment>
  );
};

export default Header;
