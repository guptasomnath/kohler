import { createSlice } from "@reduxjs/toolkit";

const mobileFilter = createSlice({
    initialState: false,
    name: "mobile filter",
    reducers: {
        setMobileFilterVisibility: (state, action) => action.payload
    }
});

export const { setMobileFilterVisibility } = mobileFilter.actions;
export default mobileFilter.reducer;