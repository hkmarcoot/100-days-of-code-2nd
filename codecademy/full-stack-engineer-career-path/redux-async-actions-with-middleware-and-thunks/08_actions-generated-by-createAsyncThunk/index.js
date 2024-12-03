import { fetchRecipes } from "../../app/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loadRecipes = createAsyncThunk(
  "allRecipes/loadRecipes",
  async (arg, thunkAPI) => {
    const response = await fetchRecipes();
    return response.data;
  }
);

// The above call to createAsyncThunk will generate what three action types?
// 1. allRecipes/loadRecipes/pending
// 2. allRecipes/loadRecipes/fulfilled
// 3. allRecipes/loadRecipes/rejected
