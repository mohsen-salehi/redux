import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./redux/slices/cartSlice";

const store = configureStore({
    reducer:{
        cart : cartSlice.reducer
    },
    devTools : true
})

export default store;