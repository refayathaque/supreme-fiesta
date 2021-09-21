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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
      // if the item findIndex is looking at in the array has the same id as the item we are adding with the action
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
      // important here to use concat instead of push because we don't want to mutate the existing array, we want to create a new one, we want to update state in an "immutable" way, we don't want to edit the old state snapshot because of the reference value thing in JS (meaning eixsting data in memory gets edited w/o React knowing about it), you want to generate a brand new state object which you return
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    // returning the new state
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
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
