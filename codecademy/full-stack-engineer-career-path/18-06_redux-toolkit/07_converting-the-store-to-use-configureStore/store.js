import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import favoriteRecipesReducer from "../features/favoriteRecipes/favoriteRecipesSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice.js";

export const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
  },
});
