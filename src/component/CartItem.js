import React from 'react';

const CartItem = ({id,img , title , price , amount}) => {
    return (
            <article className="col-3 m-2 row justify-content-center align-items-center shadow rounded p-2">
                <figure className='col-12 shadow-sm rounded p-3 '>
                    <img src={img} alt={title} className="img-fluid rounded "/>
                </figure>
               <div className="col-12 shadow-sm rounded p-2">
                   <p className="col-12 fw-bold text-capitalize text-center p-2">{title}</p>
                   <span className="col-12 fw-bold  d-flex px-1 text-secondary">${price}</span>
                 <div className="col-12 d-flex justify-content-between align-items-center" >
                     <button className="btn text-light bg-danger bg-opacity-75 mt-2">Remove</button>
                     <div>
                         <button className="btn rounded bg-secondary bg-opacity-10 bi bi-plus border-0"></button>
                         <span className="alert">{amount}</span>
                         <button className="btn rounded bg-secondary bg-opacity-10 bi bi-file-minus border-0"></button>
                     </div>
                 </div>
               </div>
            </article>
    );
};

export default CartItem;
