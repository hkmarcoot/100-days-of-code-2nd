import { createStore, combineReducers } from "redux";

// todosReducer and filterReducer omitted.

const reducers = {
  todos: todosReducer,
  filter: filterReducer,
};
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
