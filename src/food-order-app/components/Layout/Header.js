import { Fragment } from "react";
import mealsImage from "./meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButtonNew from "./HeaderCartButtonNew";
import Test from "./Test";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButtonNew onClick={props.toggleCart}></HeaderCartButtonNew>
        {/* onClick here is not a button html element event listener, it's a prop being passed down for HeaderCartButtonNew component to be able to access props.toggleCart in THIS component */}
        {/* This is an example of props drilling bc the function comes from App.js to here then to a child component */}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of food!" />
      </div>
    </Fragment>
  );
};

export default Header;
