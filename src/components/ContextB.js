import { useContext } from "react";
import SampleContext from "../store/sample-context";

const ContextB = () => {
  const ctx = useContext(SampleContext);

  const changeNameOfPersonHandler = () => {
    ctx.changeNameOfPerson("George Russell");
  };

  return (
    <div>
      Context B<p>{ctx.nameOfPerson}</p>
      <button onClick={changeNameOfPersonHandler}>
        Change name of person in ContextB component to see update in ContextA
        component
      </button>
    </div>
  );
};

export default ContextB;
