import { useState, Fragment } from "react";
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
          <button onClick={props.onConfirm}>Close me!</button>
        </footer>
      </div>
    </div>
  );
};

const Combined = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm}></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

const Portals = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    // code here will close the modal
    setModal(!modal);
  };

  return (
    <div style={divStyle}>
      Portals
      <button onClick={toggleModal}>Open up a modal</button>
      {modal && <Combined onConfirm={toggleModal}></Combined>}
      {/* ^ conditionally rendering the modal */}
    </div>
  );
};

export default Portals;

// refs:
// Check the index.html file in public folder to see where backdrop-root and overlay-root html ids are
// You can use `ReactDOM.createPortal` to move a component's html content some where else in index.html, i.e., the actual DOM that's being rendered
