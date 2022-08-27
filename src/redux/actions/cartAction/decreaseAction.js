import cartSlice from "../../slices/cartSlice";
const { decrease } = cartSlice.actions;

const decreaseAction = (id) => dispatch => {
    dispatch(decrease(id))

}

export default decreaseAction;