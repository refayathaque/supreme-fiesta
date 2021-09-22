import { useState } from "react";
import ChildComponent from "./components/ChildComponent";
import EventsAndState from "./components/EventsAndState";
import ListsAndConditionalContent from "./components/ListsAndConditionalContent";
import PassingPropsUpToParent from "./components/PassingPropsUpToParent";
import DynamicStyling from "./components/DynamicStyling";
import Portals from "./components/Portals";
import Effect from "./components/Effect";
import Reducer from "./components/Reducer";
import ReducerAndEffect from "./components/ReducerAndEffect";
import ContextA from "./components/ContextA";
import ContextB from "./components/ContextB";
import { SampleContextProvider } from "./store/sample-context";
import FoodOrderAppContainer from "./food-order-app/App";
import HTTPRequest from "./components/HTTPRequests/HTTPRequests";

const divStyle = {
  color: "blue",
  border: "1px solid red",
};

const aPropStringSample = "I'm a prop going out from the parent component";

const aPropObjectSample = {
  aString: "I like cars",
  anArray: ["Corolla", "Camry", "4Runner"],
};

const App = () => {
  const [aPropComingUpFromChild, setPropComingUpFromChild] = useState("");

  const getSomePropFromChild = (propFromChild) => {
    setPropComingUpFromChild(propFromChild);
  };

  return (
    <div style={divStyle}>
      <p>helloWorld</p>
      <code>hello</code>
      <p>User thought from child component below: {aPropComingUpFromChild}</p>
      <HTTPRequest></HTTPRequest>
      <PassingPropsUpToParent
        onSaveSomething={getSomePropFromChild}
      ></PassingPropsUpToParent>
      <ChildComponent
        aPropString={aPropStringSample}
        aPropObject={aPropObjectSample}
      ></ChildComponent>
      <Portals></Portals>
      <Effect></Effect>
      <Reducer></Reducer>
      <ReducerAndEffect></ReducerAndEffect>
      <SampleContextProvider>
        <ContextA></ContextA>
        <ContextB></ContextB>
      </SampleContextProvider>
      <EventsAndState></EventsAndState>
      <ListsAndConditionalContent></ListsAndConditionalContent>
      <DynamicStyling></DynamicStyling>
      <FoodOrderAppContainer></FoodOrderAppContainer>
    </div>
  );
};

export default App;

// refs:
// React inline style: https://reactjs.org/docs/dom-elements.html#style
