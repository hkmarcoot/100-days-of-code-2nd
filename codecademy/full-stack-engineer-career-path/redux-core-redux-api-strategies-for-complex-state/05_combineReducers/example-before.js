import { createStore } from "redux";

// todosReducer and filterReducer omitted

const rootReducer = (state = {}, action) => {
  const nextState = {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action),
  };
  return nextState;
};

const store = createStore(rootReducer);
