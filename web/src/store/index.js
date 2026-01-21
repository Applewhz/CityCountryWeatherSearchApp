import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
   reducer: {
      weather: weatherReducer,
      search: searchReducer,
   },
});
