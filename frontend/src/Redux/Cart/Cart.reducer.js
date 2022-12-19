import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCSESS } from "./Cart.types"

const initial_state={
    loading:false,
    error:false,
    data:[],
    total:0
    
}
export const CartReducer=(state=initial_state,{type,payload})=>{
   
    switch(type){
        case GET_CART_LOADING:{
            return{
                loading:true,
                error:false
            }
        }
        case GET_CART_SUCCSESS:{
         
            let amount = payload.reduce((acc, el) => 
         acc + (el.quantity*el.salePrice)
            , 0
            )
          
            console.log(payload)
            return{
                ...state,
                loading:false,
                error:false,
                data:payload,
                total:amount
            }
        }
        case GET_CART_ERROR:{
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
