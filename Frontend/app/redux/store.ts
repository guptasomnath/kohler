import { configureStore } from "@reduxjs/toolkit";
import contactUsSliderReducer from "./slices/contactUsSlider";
import mobileMenuReducer from "./slices/mobileMenu";
import mobileFilterReducer from "./slices/mobileFilter";
import popupDialgo from "./slices/popupDialgo";
import products from "./slices/productsSlice";
import paginationReducer from "./slices/paginationSlice";

export const store = configureStore({
    reducer: {
        contactUsSlider: contactUsSliderReducer,
        mobileMenu: mobileMenuReducer,
        mobileFilter: mobileFilterReducer,
        popupDialog: popupDialgo,
        products : products,
        pageination : paginationReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;