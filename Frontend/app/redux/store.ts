import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./slices/mobileMenu";
import mobileFilterReducer from "./slices/mobileFilter";
import popupDialgo from "./slices/popupDialgo";

export const store = configureStore({
    reducer: {
        mobileMenu: mobileMenuReducer,
        mobileFilter: mobileFilterReducer,
        popupDialog: popupDialgo,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;