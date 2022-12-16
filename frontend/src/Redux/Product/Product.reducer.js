
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