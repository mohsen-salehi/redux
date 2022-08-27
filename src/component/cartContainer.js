import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import modalAction from "../redux/actions/modalAction";

const CartContainer = () => {
    const {cartItems, total, amount} = useSelector(state => state.cart);
    const dispatch = useDispatch()

    if (amount < 1) {
        return (
            <section className='col-12 row justify-content-center align-items-center p-3'>
                <header className="col-12 row justify-content-center ">
                    <h2 className="text-center my-2">Your bag </h2>
                    <h4 className="text-center col-5 my-4 alert alert-danger">is currently empty</h4>
                </header>
            </section>
        )
    } else {
        return (
            <div className="p-3">
                <header className="col-12 row justify-content-center ">
                    <h2 className="text-center my-2">Your bag </h2>
                    {
                        cartItems.map(item => {
                            return <CartItem key={item.id} {...item}/>
                        })
                    }
                </header>
                <hr/>
                <footer className="row">
                    <h4 className="col-12 text-center">T o t a l s</h4>
                    <span className="col-12 row fw-bold display-6 justify-content-center align-items-center ">${total.toFixed(2)}</span>

                    <div className="col-12 row justify-content-center mt-3">
                        <button className="btn col-2 btn-danger" onClick={e=> dispatch(modalAction(true)) }>Clear Items</button>
                    </div>
                </footer>
            </div>
        );
    }

};

export default CartContainer;
