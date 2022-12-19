import axios from "axios";
import { BaseUrl } from "../../Utils/APIurl";
import { getlocalsdata } from "../../Utils/utils";
import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCSESS } from "./Cart.types"


export const GetCartData = () => async (dispatch) => {
    dispatch({
      type: GET_CART_LOADING,
    });
   const token=getlocalsdata("token")
    try {
      const response = await axios.get(`${BaseUrl}cart/usercart`,{
        headers: {
          token: token,
        },
      });
      dispatch({
        type: GET_CART_SUCCSESS,
        payload: response.data.products,
      });
    } catch (err) {
      dispatch({
        type: GET_CART_ERROR,
      });
    }
  };

  
export const editCart = (quantity,product_Id) => async (dispatch) => {
    dispatch({
      type: GET_CART_LOADING,
    });
    const token=getlocalsdata("token")
    try {
      const response = await axios.post(`${BaseUrl}cart/addtocart`,{quantity,product_Id},{
        headers: {
          token: token,
        },
      });
      dispatch({
        type: GET_CART_SUCCSESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: GET_CART_ERROR,
      });
    }
  };


  export const RemovecartProduct=(product_Id)=>async(dispatch)=>{
    dispatch({
      type: GET_CART_LOADING,
    })
    const token=getlocalsdata("token")
    try {
      const response = await axios.delete(`${BaseUrl}cart/delproduct/${product_Id}`,{
        headers: {
          token: token,
        },
      });
      dispatch({
        type: GET_CART_SUCCSESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: GET_CART_ERROR,
      });
    }
    
  }

