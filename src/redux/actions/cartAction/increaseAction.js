import cartSlice from "../../slices/cartSlice";


const { increase } = cartSlice.actions;

const increaseAction = (id)=> (dispatch)=>{
    dispatch(increase(id))
}

export default increaseAction;