import {legacy_createStore,applyMiddleware, combineReducers} from "redux"
import { AuthReducer } from "./Auth/Auth.reducer"
import { CartReducer } from "./Cart/Cart.reducer"
import { DashboardReducer } from "./DashFetures/DashBoard.reducer"
import { ProductReducer } from "./Product/Product.reducer"


const RootReducer=combineReducers({
    Auth:AuthReducer,
    cart:CartReducer,
    product:ProductReducer,
    dashboard:DashboardReducer
})

export const store=legacy_createStore(RootReducer)
