// import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCSESS } from "./Product.types"

// const initial_state={
//     loading:false,
//     error:false,
//     data:[]
// }




// export const ProductReducer=(state=initial_state,{type,payload})=>{
//     switch(type){
//         case GET_PRODUCT_LOADING: {
//             return{
//                 loading:true,
//                 error:false
//             }
//         }
//         case GET_PRODUCT_SUCCSESS:{
//             return{
//                 loading:false,
//                 error:false,
//                 data:payload
//             }
//         }
//         case GET_PRODUCT_ERROR: {
//             return{
//                 loading:false,
//                 error:true
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }






import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE} from "./Product.types"

const initialState={
    isLoading:true,
    isError:false,
    data:[],
}

export const ProductReducer=(state=initialState,{type,payload})=>{
  switch(type){
    case FETCH_PRODUCT_REQUEST:
    return{
        ...state,
        isLoading:true

    }
    case FETCH_PRODUCT_SUCCESS:
    return{
        ...state,
        data:payload,
        isLoading:false

    }
    case FETCH_PRODUCT_FAILURE:
    return{
        ...state,
        isError:true

    }
    default:
        return state;
  }
}