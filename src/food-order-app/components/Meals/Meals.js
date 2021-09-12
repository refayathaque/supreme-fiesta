import { Fragment } from "react";
import MealsSummary from "./MealsSummary.js";
import AvailableMeals from "./AvailableMeals.js";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
