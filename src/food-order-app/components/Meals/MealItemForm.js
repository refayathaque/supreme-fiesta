import Input from "../UI/Input.js";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    // important to note that ^ is always a string, even though we explicitly set the type to number below...
    const enteredAmountNumber = +enteredAmount;
    // ^ shorthand to convert string to a number
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
      // exiting out of this submitHandler method because our validation fails
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        // since ref isn't a property of props, it becomes a reserved keyword I guess
        label="Amount"
        input={{
          id: `amount${props.id}`,
          // ids should always be unique...
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;

// refs
// good example of using refs and forward refs for 2 way data binding
// Wrap the entire child element (Input in this case) with the forwardRef method - Input component becomes an argument to forwardRef method
