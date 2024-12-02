// Import createStore and combineReducers here.
import { createStore, combineReducers } from "redux";

// Import the slice reducers here.
import { cartReducer } from "../features/cart/cartSlice.js";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice.js";
import { inventoryReducer } from "../features/inventory/inventorySlice.js";

// Create and export the store here.
export const store = createStore(
  combineReducers({
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
  })
);
