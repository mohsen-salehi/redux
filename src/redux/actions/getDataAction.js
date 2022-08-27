




const GetDataAction =  async () => {

    try {
        const data =  await  fetch('https://course-api.com/react-useReducer-cart-project')
        console.log(data)
    }catch (err){

    }

}


export default GetDataAction;