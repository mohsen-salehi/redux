import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./redux/slices/cartSlice";
import modalSlice from "./redux/slices/modalSlice";
import getDataSlice from "./redux/slices/getDataSlice";

const store = configureStore({
    reducer:{
        cart : cartSlice.reducer,
        modal : modalSlice.reducer,
        data : getDataSlice.reducer
    },
    devTools : true
})

export default store;