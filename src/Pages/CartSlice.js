

import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart")
    return cart ? JSON.parse(cart) : []
}

const initialState = {
    cartItems : loadCartFromLocalStorage()
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state , action) => {
              const exisitingItem = state.cartItems.find(item => item.id === action.payload.id); // action.payload → Contains the product object being added to the cart (this comes from dispatch(addToCart(product)) in your component).
              if(exisitingItem){
                exisitingItem.quantity += 1; // Increase quantity if item exists
              } else {
                state.cartItems.push({ ...action.payload , quantity : 1 }) // Add new item with quantity = 1 , action.payload represents the product object in ProductDetails.jsx , it's added with quantity: 1
              }
              localStorage.setItem("cart" , JSON.stringify(state.cartItems))
        },

        removeFromCart : (state , action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload) // action.payload is what you dispatch from the Remove button dispatch(removeFromCart(item.id)) which is item.id
            localStorage.setItem("cart" , JSON.stringify(state.cartItems)) 
        },
        
       increaseQuantity : (state , action) => {
           const incQ = state.cartItems.find((i) => i.id === action.payload)
           if(incQ){
             incQ.quantity += 1 
             incQ.totalPrice = incQ.price * incQ.quantity
           }
           localStorage.setItem("cart" , JSON.stringify(state.cartItems))
       },

       decreaseQuantity : (state , action) => {
            const decQ = state.cartItems.find((i) => i.id === action.payload) 
            if(decQ){
                decQ.quantity -= 1
            } 
            localStorage.setItem("cart" , JSON.stringify(state.cartItems))
       },



    }
})

export const { addToCart , removeFromCart , resetCart , increaseQuantity , decreaseQuantity , counterForEveryItem } = cartSlice.actions
export default cartSlice.reducer