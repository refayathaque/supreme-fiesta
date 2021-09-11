import { Fragment } from "react";
import mealsImage from "./meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButtonNew from "./HeaderCartButtonNew";
import Test from "./Test";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButtonNew></HeaderCartButtonNew>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
