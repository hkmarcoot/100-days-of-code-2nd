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
