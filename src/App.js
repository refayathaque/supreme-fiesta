import ChildComponent from "./components/ChildComponent";
import EventsAndState from "./components/EventsAndState";

const divStyle = {
  color: "blue",
  border: "1px solid red",
};

const aPropStringSample = "I'm a prop coming in from the parent component";
const aPropObjectSample = {
  aString: "I like cars",
  anArray: ["Corolla", "Camry", "4Runner"],
};

const App = () => {
  return (
    <div style={divStyle}>
      <p>helloWorld</p>
      <code>hello</code>
      <ChildComponent
        aPropString={aPropStringSample}
        aPropObject={aPropObjectSample}
      ></ChildComponent>
      <EventsAndState></EventsAndState>
    </div>
  );
};

export default App;

// refs:
// React inline style: https://reactjs.org/docs/dom-elements.html#style
