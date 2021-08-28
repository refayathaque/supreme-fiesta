import { useState } from "react";
import "./DynamicStyling.css";

const divStyle = {
  color: "gray",
  border: "1px solid blue",
  margin: 10,
};

const DynamicStyling = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("yellow");
  const [textIsGreen, setTextToGreen] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);

  const backgroundColorHandler = () => {
    setBackgroundColor("red");
  };

  const textColorToGreenHandler = () => {
    setTextToGreen(true);
  };

  const textSizeToggleHandler = () => {
    setIsLargeText(!isLargeText);
  };

  return (
    <div style={divStyle}>
      <button onClick={backgroundColorHandler}>
        Change background color of text below to red
      </button>
      {/* <p style={{ backgroundColor: backgroundColor }}>My background color will change</p> */}
      <p style={{ backgroundColor }}>My background color will change</p>
      {/* can also use ternary */}
      <button onClick={textColorToGreenHandler}>
        Change font color of text below to green and background to blue
      </button>
      <p
        style={{
          color: textIsGreen ? "green" : "black",
          background: textIsGreen ? "salmon" : "white",
        }}
      >
        helloWorld
      </p>
      {/* example of setting css classes dynamically */}
      <button onClick={textSizeToggleHandler}>
        Toggle between large and small text below
      </button>
      <p
        className={`purple-text ${isLargeText ? "big-text" : "small-text"} ${
          isLargeText ? "bold-text" : ""
        }`}
      >
        I might be large and bolded or small
      </p>
      {/* in this case we need to have the syntax in which we keep the original
        css class name with the dash (-) because we are operating inside
        template literals I can be large or small text */}
    </div>
  );
};

export default DynamicStyling;
