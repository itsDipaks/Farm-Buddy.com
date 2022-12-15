import {legacy_createStore,applyMiddleware, combineReducers, compose} from "redux"
import { AuthReducer } from "./Auth/Auth.reducer"
import { CartReducer } from "./Cart/Cart.reducer"
import { DashboardReducer } from "./DashFetures/DashBoard.reducer"
import { ProductReducer } from "./Product/Product.reducer"

import thunk from "redux-thunk";
const RootReducer=combineReducers({
    Auth:AuthReducer,
    cart:CartReducer,
    product:ProductReducer,
    dashboard:DashboardReducer
})
const createComposer= compose;
export const store=legacy_createStore(RootReducer,createComposer(applyMiddleware(thunk)))


