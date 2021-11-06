import { configureStore } from "@reduxjs/toolkit";

// The Global Store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
