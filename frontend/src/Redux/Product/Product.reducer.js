import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCSESS } from "./Product.types"

const initial_state={
    loading:false,
    error:false,
    data:[]
}




export const ProductReducer=(state=initial_state,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_LOADING: {
            return{
                loading:true,
                error:false
            }
        }
        case GET_PRODUCT_SUCCSESS:{
            return{
                loading:false,
                error:false,
                data:payload
            }
        }
        case GET_PRODUCT_ERROR: {
            return{
                loading:false,
                error:true
            }
        }
        default: {
            return state
        }
    }
}