import { createSlice } from "@reduxjs/toolkit";

const scrollToSlice = createSlice({
  initialState : "",
  name: "Scroll To",
  reducers: {
    setScrollTo: (state, action) => action.payload
  }
});

export default scrollToSlice.reducer;
export const { setScrollTo } = scrollToSlice.actions;
