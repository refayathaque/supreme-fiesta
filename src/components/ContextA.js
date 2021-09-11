import { useContext } from "react";
import SampleContext from "../store/sample-context";

const ContextA = () => {
  const ctx = useContext(SampleContext);
  return (
    <div>
      Context A<p>{ctx.nameOfPerson}</p>
    </div>
  );
};

export default ContextA;
