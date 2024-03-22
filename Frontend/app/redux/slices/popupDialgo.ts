import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const popupDialog = createSlice({
    initialState: null,
    name: "popup dialog",
    reducers: {
        setPopupDialog: (state, action : PayloadAction<any>) => action.payload
    }
});

export const { setPopupDialog } = popupDialog.actions;
export default popupDialog.reducer;