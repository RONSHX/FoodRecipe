import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Stores favorite recipes
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.favoriterecipes.findIndex(
        (recipe) => recipe.idFood === action.payload.idFood
      );

      if (existingIndex >= 0) {
        // Recipe exists, remove it
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // Recipe doesn't exist, add it
        state.favoriterecipes.push(action.payload);
      }
    },
  },
});

// Export the action for dispatch
export const { toggleFavorite } = favoritesSlice.actions;

// Export the reducer for store configuration
export default favoritesSlice.reducer;
