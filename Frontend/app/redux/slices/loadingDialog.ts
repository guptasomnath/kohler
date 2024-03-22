import { createSlice } from "@reduxjs/toolkit";

const loadingDialog = createSlice({
    initialState: true,
    name: "mobile filter",
    reducers: {
        setLoadingDialog: (state, action) => action.payload
    }
});

export const { setLoadingDialog } = loadingDialog.actions;
export default loadingDialog.reducer;