import { Fragment } from "react";

import Header from "../src/components/Layout/Header.js";
import AvaliableMeals from "./components/Meals/AvailableMeals.js";

function App() {
  return (
    <Fragment>
      <Header />
      <AvaliableMeals />
    </Fragment>
  );
}

export default App;
