import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    myData : null ,
    loading : false,
    error : false
}

const fetchSuccess = (state=initialState , action)=>{
    state.myData = action.payload ;
    state.loading = false
}
const fetchLoading = (state = initialState , action)=>{
    state.loading = true
}
const fetchFauild = (state = initialState)=>{
    state.loading = false
}

const getDataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers:{
        fetchSuccess,
        fetchLoading,
        fetchFauild
    }
})

export default getDataSlice;