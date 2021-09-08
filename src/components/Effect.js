import { useState, useEffect } from "react";

const divStyle = {
  color: "magenta",
  border: "1px solid gray",
  margin: 10,
};

const Effect = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState("");

  // useEffect(() => {
  //   setValid(email.includes("@") && password.trim().length > 6);
  // }, [email, password]);
  // below is a more efficient way (called "debouncing") of doing the same thing, we don't need to check on every key stroke, same concept can be used when making HTTP calls to throttle and not send requests incessantly
  useEffect(() => {
    const identifier = setTimeout(() => {
      setValid(email.includes("@") && password.trim().length > 6);
    }, 500);
    return () => {
      clearTimeout(identifier);
      // clear the last set timer before setting a new one
    }; // clean up function runs before every side effect execution
  }, [email, password]);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div style={divStyle}>
      Effect
      <form>
        <label>Email</label>
        <input type="text" value={email} onChange={emailHandler}></input>
        <label>Password</label>
        <input type="text" value={password} onChange={passwordHandler}></input>
      </form>
      {!valid && <p>Email/password (must be more than 6 chars) is invalid</p>}
      {valid && <p>Email/password is valid</p>}
      {/* conditional rendering */}
    </div>
  );
};

export default Effect;

// refs:
// `useEffect` hook called with 2 arguments, first is a function that should be executed after every component evaluation if the specific dependencies (2nd argument) changed, second is an array of dependencies, or the dependencies of the effect, and the function (1st argument) only runs if the dependencies changed
