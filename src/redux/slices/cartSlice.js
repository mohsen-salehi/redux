import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true
}


const clearCart = (state = initialState) => {
    state.cartItems = []
    state.amount = 0
}
const removeItem = (state = initialState, action) => {
    const cartId = action.payload;
    state.cartItems = state.cartItems.filter(item => item.id !== cartId)
}
const increase = (state = initialState, {payload}) => {
    const cartItem = state.cartItems.find(item => item.id === payload)
    cartItem.amount = cartItem.amount + 1;
}
const decrease = (state = initialState, {payload}) => {
    const cartItem = state.cartItems.find(item => item.id === payload)
    cartItem.amount = cartItem.amount - 1;
}



const calculateTotals = (state = initialState) => {
    let amount = 0;
    let total = 0;
    state.cartItems.forEach(item => {
        amount += item.amount
        total += item.amount * item.price
    })
    state.amount = amount;
    state.total = total
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart,
        removeItem,
        increase,
        decrease,
        calculateTotals
    }


})


export default cartSlice;