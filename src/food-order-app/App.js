import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import { useState } from "react";
import { CartContextProvider } from "./store/cart-context.js";

const divStyle = {
  color: "green",
  border: "1px solid gray",
  margin: 10,
};

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <div style={divStyle}>
      <h3>
        This is a container/encapsulation of the food order app as part of the
        section 11 practice project
      </h3>
      <CartContextProvider>
        {cartIsShown && <Cart toggleCart={toggleCartHandler}></Cart>}
        <Header toggleCart={toggleCartHandler}></Header>
        <main>
          <Meals></Meals>
        </main>
      </CartContextProvider>
    </div>
  );
};

export default App;
