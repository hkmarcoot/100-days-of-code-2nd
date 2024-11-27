import { createStore } from "redux";

const initialState = "on";
const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle":
      return state === "on" ? "off" : "on";
    default:
      return state;
  }
};

const store = createStore(lightSwitchReducer);

console.log(store.getState()); // Prints 'on'

store.dispatch({ type: "toggle" });
console.log(store.getState()); // Prints 'off'

store.dispatch({ type: "toggle" });
console.log(store.getState()); // Prints 'on'
