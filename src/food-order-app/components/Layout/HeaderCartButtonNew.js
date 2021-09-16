import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButtonNew = (props) => {
  const cartCtx = useContext(CartContext);
  // way to "consume" the context, whenever this context changes this component will be updated/re-evaluated by React

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    console.log(currentNumber, item)
    return currentNumber + item.amount;
  }, 0);

  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </div>
  );
};

export default HeaderCartButtonNew;

// refs:
// JS reduce method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#syntax
