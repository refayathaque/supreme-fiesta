const divStyle = {
  color: "red",
  border: "1px solid blue",
  margin: 10,
};

const ChildComponent = (props) => {
  // ^ above can be destructured to be `ChildComponent({aPropStringSample, aPropObjectSample})` too because `props` is an object with k-v pairs for each prop coming in
  const { aPropString, aPropObject } = props;
  const { aString: aStringFromAPropObject, anArray, aBoolean } = aPropObject;
  // ^ further destructuring (and renaming) the destructured props k-v pair `aPropObject`

  const today = Date(Date.now());

  return (
    <div style={divStyle}>
      <p>I'm a child component, today's date is {today}</p>
      <p>{aPropString}</p>
      <p>{aStringFromAPropObject}</p>
      <p>{anArray[1]}</p>
    </div>
  );
};

export default ChildComponent;

// refs:
// Date.now: https://www.geeksforgeeks.org/javascript-date-now-method/
// Object destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
