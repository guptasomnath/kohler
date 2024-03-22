import { createSlice } from "@reduxjs/toolkit";

const contactUsSlice = createSlice({
    initialState : false,
    name : "contact us slice",
    reducers : {
        setContactUsSlideVisibility : (state, action) => action.payload 
    }
});

export const { setContactUsSlideVisibility } = contactUsSlice.actions;
export default contactUsSlice.reducer;