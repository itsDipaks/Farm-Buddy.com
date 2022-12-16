import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE} from './Product.types'
import axios from 'axios'
export const productReuquest=()=>{
    return{
   type:FETCH_PRODUCT_REQUEST
    }
}
export const productSuccess=(payload)=>{
    return{
  type:FETCH_PRODUCT_SUCCESS,
  payload
    }
}
export const productFailure=(error)=>{
    return{
        type:FETCH_PRODUCT_FAILURE,
        error

    }
}

export const GetProducts=(params)=>(dispatch)=>{
    dispatch(productReuquest())
    return axios
    .get('http://localhost:8400/product/getproducts',params)
    .then((res)=>{
        dispatch(productSuccess(res.data))
       //  console.log(res.data)
    })
    .catch((error)=>{
        dispatch(productFailure(error))
    })

}