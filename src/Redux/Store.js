import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
// import counterReducer from "../Pages/Cart"
import cartReducer from "../Pages/CartSlice"

const store = configureStore({
    reducer: {
        products : productReducer, // productReducer is equal to productSlice.reducer in productSlice.js
        // counter: counterReducer,
        cart : cartReducer,
    },
});

export default store;