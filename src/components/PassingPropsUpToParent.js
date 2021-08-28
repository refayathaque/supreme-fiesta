import { useState } from "react";

const divStyle = {
  color: "teal",
  border: "1px solid fuchsia",
  margin: 10,
};

const PassingPropsUpToParent = (props) => {
  const [userThought, setUserThought] = useState("");

  const userThoughChangeHandler = (event) => {
    setUserThought(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userThought);
    props.onSaveSomething(userThought);
  };

  return (
    <div style={divStyle}>
      <form onSubmit={formSubmitHandler}>
        <label>Thought</label>
        <input
          type="text"
          value={userThought}
          onChange={userThoughChangeHandler}
        ></input>
        <button>Add a thought</button>
      </form>
    </div>
  );
};

export default PassingPropsUpToParent;
