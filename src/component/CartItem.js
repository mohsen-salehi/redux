import React from 'react';
import {useDispatch} from "react-redux";
import removeItemAction from "../redux/actions/cartAction/removeItemAction";
import increaseAction from "../redux/actions/cartAction/increaseAction";
import decreaseAction from "../redux/actions/cartAction/decreaseAction";


const CartItem = ({ id ,img , title , price , amount}) => {

    const dispatch = useDispatch()

    return (
            <article className="col-3 m-2 row justify-content-center align-items-center shadow rounded p-2">
                <figure className='col-12 shadow-sm rounded p-3 '>
                    <img src={img} alt={title} className="img-fluid rounded "/>
                </figure>
               <div className="col-12 shadow-sm rounded p-2">
                   <p className="col-12 fw-bold text-capitalize text-center p-2">{title}</p>
                   <span className="col-12 fw-bold  d-flex px-1 text-secondary">${price}</span>
                 <div className="col-12 d-flex justify-content-between align-items-center" >
                     <button className="btn text-light bg-danger bg-opacity-75 mt-2" onClick={()=>dispatch(removeItemAction(id))}>Remove</button>
                     <div>
                         <button className="btn rounded bg-secondary bg-opacity-10 bi bi-plus border-0" onClick={()=>dispatch(increaseAction(id))}></button>
                         <span className="alert">{amount}</span>
                         <button className="btn rounded bg-secondary bg-opacity-10 bi border-0" onClick={()=> {
                             amount === 1 ? dispatch(removeItemAction(id)) : dispatch(decreaseAction(id))
                         }}>-</button>
                     </div>
                 </div>
               </div>
            </article>
    );
};

export default CartItem;
