import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE} from './Product.types'
import axios from 'axios'
import { BaseUrl } from '../../Utils/APIurl'



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

export const GetProducts=()=>(dispatch)=>{
    dispatch(productReuquest())
    return axios
    .get(`${BaseUrl}product/getproducts`)
    .then((res)=>{
        dispatch(productSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(productFailure(error))
    })

}

// ............ Get Face care Category data ...............
export const GetFacecareCategory=(value)=>(dispatch)=>{
    dispatch(productReuquest())
    return axios
    .get(`${BaseUrl}product/getproducts?type=facecare&price=${value}`)
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
    .get(`${BaseUrl}product/getproducts?type=babyhelth`)
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
    .get(`${BaseUrl}product/getproducts?type=healthyFoodsAndDrinks&sortbyprice:asc`)
    .then((res)=>{
        dispatch(productSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(productFailure(error))
    })

}