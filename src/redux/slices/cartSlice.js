import {createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

const clearCart = (state = initialState , action) => {
    state.cartItems = action.payload
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart
    }
})
console.log(cartSlice)

export default cartSlice;