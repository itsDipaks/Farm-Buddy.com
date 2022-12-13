import { GET_AUTH_ERROR, GET_AUTH_LOADING, GET_AUTH_SUCCSESS } from "./Auth.types"

const initial_state={
    loading:false,
    error:false,
    token:""
}




export const AuthReducer=(state=initial_state,{type,payload})=>{
    switch(type){
        case GET_AUTH_LOADING: {
            return{
                loading:true,
                error:false
            }
        }
        case GET_AUTH_SUCCSESS:{
            return{
                loading:false,
                error:false,
                token:"token"
            }
        }
        case GET_AUTH_ERROR: {
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