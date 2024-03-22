import { createSlice } from "@reduxjs/toolkit";

const contactUsDialog = createSlice({
    initialState : false,
    name : "contact us dialog",
    reducers : {
        setContactUsDialog : (state, action) => action.payload 
    }
});

export const { setContactUsDialog } = contactUsDialog.actions;
export default contactUsDialog.reducer;