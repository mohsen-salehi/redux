import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import clearCartAction from "../redux/actions/cartAction/clearItemAction";
import modalAction from "../redux/actions/modalAction";

function Modal() {
    const { isOpen } =useSelector(state => state.modal)
    const dispatch = useDispatch()
    const handelStatus = ()=>{
        dispatch(clearCartAction())
        dispatch(modalAction(false))
    }
    return (
        <div className={ isOpen === true ? 'd-flex' : 'd-none col-12 d-flex position-relative'}>
            <div className="col-3 bg-light bg-opacity-100 p-5 shadow rounded-pill flex-wrap d-flex justify-content-between align-content-between position-fixed top-50 start-50  translate-middle m-auto">
                <h1 className="col-12 text-center mb-4">Are You Sure ?</h1>
                <button className="btn col-5 btn-success rounded" onClick={handelStatus}>Yes</button>
                <button className="btn col-5 btn-danger rounded" onClick={e=> {dispatch(modalAction(false))}}>No</button>
            </div>
        </div>
    );
}

export default Modal;