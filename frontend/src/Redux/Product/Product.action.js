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

// ........... Get All Poducts ..................

export const GetProducts=(params)=>(dispatch)=>{
    dispatch(productReuquest())
    return axios
    .get('http://localhost:8400/product/getproducts',params)
    .then((res)=>{
        dispatch(productSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(productFailure(error))
    })

}

// ............ Get Face care Category data ...............
export const GetFacecareCategory=()=>(dispatch)=>{
    dispatch(productReuquest())
    return axios
    .get(`http://localhost:8400/product/getproducts?type=facecare`)
    .then((res)=>{
        dispatch(productSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(productFailure(error))
    })

}

//.............GEt Baby Health Category data .........

export const GetBabyHelthCategory=()=>(dispatch)=>{
    dispatch(productReuquest())
    return axios
    .get(`http://localhost:8400/product/getproducts?type=babyhelth`)
    .then((res)=>{
        dispatch(productSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(productFailure(error))
    })

}


//.............. Get Health Food And Drinks data ...........

export const GetHealthyFoodDrinksCategory=()=>(dispatch)=>{
    dispatch(productReuquest())
    return axios
    .get(`http://localhost:8400/product/getproducts?type=healthyFoodsAndDrinks`)
    .then((res)=>{
        dispatch(productSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(productFailure(error))
    })

}