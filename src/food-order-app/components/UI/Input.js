import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;

// refs:
// you can use the object spread operator in html elements to unpack key-value pairs in the object and set them as html element properties
// e.g., if props.input = { type: "text", id: "hello123" }, then doing ^ in the input element would result in: <input id="hello123" type="text" />
