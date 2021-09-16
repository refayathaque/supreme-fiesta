import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (items) => {},
  removeItem: (id) => {},
  // think of this as a blueprint for the context
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // state argument above corresponds to existing state, what you return will be a new state snapshot
  // action argument above corresponds to what is coming in from the dispatch method
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    // important here to use concat instead of push because we don't want to mutate the existing array, we want to create a new one, we want to update state in an "immutable" way, we don't want to edit the old state snapshot because of the reference value thing in JS (meaning eixisting data in memory gets edited w/o React knowing about it), you want to generate a brand new state object which you return
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    // returning the new state
  }
  return defaultCartState;
};

export const CartContextProvider = (props) => {
  // named export for this provider component

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // useReducer: An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)
  // const [state, dispatch] = useReducer(reducer, initialArg, init);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

// refs:
// Max went with useReducer instead of useState because in his mind this is a more complex piece of state to manage
// Max also split this up to have a context file and a provider file, I'm just going to keep everything in one file
