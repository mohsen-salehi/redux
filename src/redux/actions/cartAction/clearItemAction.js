import cartSlice from "../../slices/cartSlice";

const { clearCart } = cartSlice.actions;

const clearCartAction = ()=> (dispatch)=>{
 dispatch(clearCart())
}

export default clearCartAction;