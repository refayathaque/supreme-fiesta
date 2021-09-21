import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButtonNew = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  // way to "consume" the context, whenever this context changes this component will be updated/re-evaluated by React

  const { items: cartItems } = cartCtx;

  const numberOfCartItems = cartItems.reduce((currentNumber, item) => {
    console.log(currentNumber, item);
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
      // no CSS animation required if there is nothing in the cart
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300); // 300ms because that's the duration of the CSS animation (check CSS module)
    return () => {
      clearTimeout(timer);
    }; // this is the useEffect built-in "clean up" method, and you need this is you are adding new items to the cart rapidly, you need to make sure that the old timer is reset for the CSS animation to work every time
  }, [cartItems]);

  return (
    <div>
      <button className={btnClasses} onClick={props.onClick}>
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
