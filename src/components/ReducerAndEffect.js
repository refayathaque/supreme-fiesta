import { useReducer, useEffect, useState } from "react";

const divStyle = {
  color: "red",
  border: "1px solid purple",
  margin: 10,
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const ReducerAndEffect = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const emailHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const passwordHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const { isValid: emailIsValid } = emailState;
  // ^ example of an alias assignment

  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  // since this effect only cares about validity, it doesn't make sense for it to be dependent on the entire state object, we just need to track changes to the validity properties
  // "Because now (if you have the entire state object, instead of a property) the effect function would re-run whenever ANY property of someObject changes - not just the one property (someProperty in the above example) our effect might depend on."
  // this is a way of optimization - you can do similar things with incoming props as well, if you want to have an effect that has only specific props as dependenceis

  return (
    <div style={divStyle}>
      ReducerAndEffect
      <form>
        <label>Email</label>
        <input
          type="text"
          value={emailState.value}
          onChange={emailHandler}
          onBlur={validateEmailHandler}
        ></input>
        <label>Password</label>
        <input
          type="text"
          value={passwordState.value}
          onChange={passwordHandler}
          onBlur={validatePasswordHandler}
        ></input>
      </form>
      {!formIsValid && (
        <p>Email/password (must be more than 6 chars) is invalid</p>
      )}
      {formIsValid && <p>Email/password is valid</p>}
    </div>
  );
};

export default ReducerAndEffect;

// refs:
// https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/26043040#overview
