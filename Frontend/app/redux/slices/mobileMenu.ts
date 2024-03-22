import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
    initialState : false,
    name : "mobile menu slice",
    reducers : {
        setMobileMenuVisibility : (state, action) => action.payload 
    }
});

export const { setMobileMenuVisibility } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;