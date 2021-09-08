import { useState } from "react";

const divStyle = {
  color: "green",
  border: "1px solid gray",
  margin: 10,
};

const EventsAndState = () => {
  const [title, setTitle] = useState("helloWorld"); // "helloWorld" is the initial value, can also be an empty string, empty object, props value, etc.
  // FYI, `event.target.value`, even if it's is a number/boolean, will always be a string, so you might have to do type conversion in your handler functions before calling the setter function of `useState`

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAge: "",
    enteredDoB: "",
  });
  // ^ alternate way (instead of multiple states) of maintaining state when you want to have grouped data - can also `useReducer`, check the Reducer.js component

  const clickHandler = () => {
    setTitle("goodbyeWorld");
  };

  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredName: event.target.value,
      };
    });
  };
  // for updating state that depends on previous state, use anonymous method with `prevState` as parameter syntax
  // ^ guarantees that you are working with the latest state snapshot (has to do with how React schedules)
  const ageChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAge: event.target.value,
      };
    });
  };
  const dobChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDoB: event.target.value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: userInput.enteredName,
      age: parseInt(userInput.enteredAge),
      dob: new Date(userInput.enteredDoB),
    };
    console.log(userData);
    setUserInput({
      enteredName: "",
      enteredAge: "",
      enteredDoB: "",
    });
    // clearing the form with the help of two-way binding
    // date in Firefox developer edition browser doesn't get cleared for some reason even after successful state reset
  };

  return (
    <div style={divStyle}>
      <p>Events and State</p>
      <p>Title: {title}</p>
      <button onClick={clickHandler}>
        Change the title up top by changing state
      </button>
      <form onSubmit={formSubmitHandler}>
        <label>Name</label>
        <input
          type="text"
          value={userInput.enteredName}
          onChange={nameChangeHandler}
        ></input>
        <label>Age</label>
        <input
          type="number"
          value={userInput.enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <label>DoB</label>
        <input
          type="date"
          value={userInput.enteredDob}
          onChange={dobChangeHandler}
        ></input>
        <button>Add personal information</button>
      </form>
    </div>
  );
};

export default EventsAndState;
