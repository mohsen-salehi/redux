import cartSlice from "../../slices/cartSlice";

const {removeItem} =cartSlice.actions ;


const removeItemAction = (id)=> (dispatch)=>{
    dispatch(removeItem(id))
}

export default removeItemAction;
