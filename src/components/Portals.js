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
      <div className="card">
        <header className="header">
          <p>I'm a modal</p>
        </header>
        <main className="content">
          <p>Hello!</p>
        </main>
        <footer className="actions">
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

const onConfirm = () => {};

const Portals = (props) => {
  return (
    <div style={divStyle}>
      Portals
      <button>Open up a modal</button>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm}></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Portals;

// refs:
// A modal is an overlay
