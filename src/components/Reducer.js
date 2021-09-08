import { useReducer } from "react";

const divStyle = {
  color: "black",
  border: "1px solid red",
  margin: 10,
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
    // `state` is the last state snapshot, onBlur isn't changing the input value so we want to leave in whatever the user input was before, and we also want to check the validity of whatever that user input was
  }
  return { value: "", isValid: false };
};

const Reducer = () => {
  // way of doing things with `useState`
  // const [email, setEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState("");
  // validation is now happening in the `emailReducer` method above
  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setEmailIsValid(email.includes("@"));
  //   }, 500);
  //   return () => {
  //     clearTimeout(identifier);
  //     // clear the last set timer before setting a new one
  //   }; // clean up function runs before every side effect execution
  // }, [email]);

  const emailHandler = (event) => {
    // not using `useState` anymore so commented out
    // setEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  return (
    <div style={divStyle}>
      Reducer
      {/* way it was done with `useState` */}
      {/* <form>
        <input type="text" value={email} onChange={emailHandler}></input>
      </form>
      {!emailIsValid && <p>Email/password is invalid</p>}
      {emailIsValid && <p>Email/password is valid</p>} */}
      <form>
        <input
          type="text"
          value={emailState.value}
          onChange={emailHandler}
          onBlur={validateEmailHandler}
        ></input>
      </form>
      {!emailState.isValid && <p>Email is invalid</p>}
      {emailState.isValid && <p>Email is valid</p>}
    </div>
  );
};

export default Reducer;

// refs:
// official doc - https://reactjs.org/docs/hooks-reference.html#usereducer
// if you have to update a state that depends on another state, or you have a complex state with multiple key-value pairs, or if you want to group similar state data instead of having multiple states -> `useReducer()`
// https://www.w3schools.com/jsref/event_onblur.asp
// this code is built upon what's in Effect.js component
