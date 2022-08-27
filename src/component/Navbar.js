import React from 'react';
import {useSelector} from "react-redux";

const Navbar = () => {
    const {amount} = useSelector(state => state.cart)
    return (
        <nav className="col-12 d-flex m-auto  bg-warning bg-opacity-10 rounded-pill p-4 justify-content-between align-items-center">
                <h3>ReduxToolkit</h3>
                <div className="bi bi-basket2-fill display-6 p-3 position-relative d-flex">
                    <span className="rounded-circle bg-danger bg-opacity-75 px-1 row  me-5 position-absolute  top-0  ">{amount}</span>
                </div>
        </nav>
    );
};

export default Navbar;
