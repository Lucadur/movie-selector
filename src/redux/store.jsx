import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import favoriteReducer from "./FavoriteSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer,
  },
});

export default store;
