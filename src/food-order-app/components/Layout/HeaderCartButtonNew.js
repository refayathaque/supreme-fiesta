import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButtonNew = (props) => {
  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </div>
  );
};

export default HeaderCartButtonNew;
