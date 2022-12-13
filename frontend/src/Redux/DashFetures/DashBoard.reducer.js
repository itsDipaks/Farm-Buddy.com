import { GET_DASHBOARD_ERROR, GET_DASHBOARD_LOADING, GET_DASHBOARD_SUCCSESS } from "./DashBoard.types"

const initial_state={
    loading:false,
    error:false,
    data:[]
}




export const DashboardReducer=(state=initial_state,{type,payload})=>{
    switch(type){
        case GET_DASHBOARD_LOADING: {
            return{
                loading:true,
                error:false
            }
        }
        case GET_DASHBOARD_SUCCSESS:{
            return{
                loading:false,
                error:false,
                data:payload
            }
        }
        case GET_DASHBOARD_ERROR: {
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