import { useContext } from "react";
import SampleContext from "../store/sample-context";

const divStyle = {
  color: "gray",
  border: "1px solid maroon",
  margin: 10,
};

const ContextA = () => {
  const ctx = useContext(SampleContext);
  return (
    <div style={divStyle}>
      Context A<p>{ctx.nameOfPerson}</p>
    </div>
  );
};

export default ContextA;
