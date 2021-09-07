import { useState, useEffect, useReducer } from "react";

const divStyle = {
  color: "black",
  border: "1px solid red",
  margin: 10,
};

const Reducer = () => {
  return <div style={divStyle}>Reducer</div>;
};

export default Reducer;

// refs:
// official doc - https://reactjs.org/docs/hooks-reference.html#usereducer
// if you have to update a state that depends on another state -> `useReducer()`