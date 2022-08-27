import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isOpen : false
}

const status = (state = initialState , action)=>{
    state.isOpen = action.payload
}

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        status
    }
})
export default modalSlice;