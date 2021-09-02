import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Portals.css";

const divStyle = {
  color: "teal",
  border: "1px solid fuchsia",
  margin: 10,
};

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <p>I'm a modal</p>
      <button onClick={props.onConfirm}></button>
    </div>
  );
};

const onConfirm = () => {};

const Portals = (props) => {
  return (
    <div style={divStyle}>
      Portals
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm}>
          <ModalOverlay onConfirm={onConfirm}></ModalOverlay>
        </Backdrop>
      )}
    </div>
  );
};

export default Portals;

// refs:
// A modal is an overlay
