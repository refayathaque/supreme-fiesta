import Header from "./components/Layout/Header";

const divStyle = {
  color: "green",
  border: "1px solid gray",
  margin: 10,
};

const App = () => {
  return (
    <div style={divStyle}>
      <h3>
        This is a container/encapsulation of the food order app as part of the
        section 11 practice project
      </h3>
      <Header></Header>
    </div>
  );
};

export default App;
