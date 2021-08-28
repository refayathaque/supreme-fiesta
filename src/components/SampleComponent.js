import { useState } from "react";

const divStyle = {
  color: "green",
  border: "1px solid gray",
  margin: 10,
};

const SampleComponent = (props) => {
  return (
    <div style={divStyle}>
      <p>SampleComponent</p>
    </div>
  );
};

export default SampleComponent;
