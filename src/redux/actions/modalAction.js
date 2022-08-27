import modalSlice from "../slices/modalSlice";

const { status } = modalSlice.actions ;

const modalAction = (userStatus) => dispatch =>{
    dispatch(status(userStatus))
}

export default modalAction;