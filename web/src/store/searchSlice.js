import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: "search",
   initialState: {
      history: [],
   },
   reducers: {
      addSearchHistory: (state, action) => {
         state.history.unshift(action.payload);
      },
   },
});

export const { addSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;
