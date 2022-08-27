import React, {useEffect} from "react";
import Navbar from "./component/Navbar";
import CartContainer from "./component/cartContainer";

import cartSlice from "./redux/slices/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import Modal from "./component/modal";
import GetDataAction from "./redux/actions/getDataAction";


function App() {

    const {cartItems} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const { calculateTotals  } = cartSlice.actions
    useEffect(()=>{
        dispatch(calculateTotals())
        dispatch(GetDataAction)
    },[calculateTotals, cartItems, dispatch])
    return (
        <main className="container-fluid container-xxl">
            <Modal />
            <Navbar/>
            <CartContainer/>
        </main>
    );
}

export default App;
