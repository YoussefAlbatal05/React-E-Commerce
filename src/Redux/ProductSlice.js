import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from an API
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products"); 
    const data = await response.json()
    localStorage.setItem( "products" , JSON.stringify(data)) // // Save fetched products in localStorage
    return data 

});


const initialState = {
    items : JSON.parse(localStorage.getItem("products")) || [],
    status : "idle",            
} 


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}, // You can add filtering reducers if needed
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
