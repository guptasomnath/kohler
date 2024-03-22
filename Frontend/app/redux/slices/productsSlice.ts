import { IProducts } from "@/types/products";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface ResponseType {
    products: IProducts[];
    pages: number
}

interface MyDataState {
    response: ResponseType;
    isLoading: boolean;
    error: {
        message : string,
        status : number
    } | null
}


const initialState: MyDataState = {
    response: { products: [], pages: 0 },
    isLoading: true,
    error: null
}

export const fetchProducts = createAsyncThunk("slice/getProducts", async (url: string) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
});

const productsSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ResponseType>) => {
            state.isLoading = false;
            state.error = null;
            state.response = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default productsSlice.reducer;