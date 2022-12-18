import axios from "axios";
import { BaseUrl } from "../../Utils/APIurl";
import { GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCSESS } from "./Cart.types"


export const GetCartData = () => async (dispatch) => {
    dispatch({
      type: GET_CART_LOADING,
    });
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5ZjA3ZDkxYzVlODE5NDY2NDg2OGQ4IiwiaWF0IjoxNjcxMzY2NjMyfQ.6e7cglDz0qqS6mC3wDMUCRmUzvhv7t2nR5-VXdGBWw4";
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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5ZjA3ZDkxYzVlODE5NDY2NDg2OGQ4IiwiaWF0IjoxNjcxMzY2NjMyfQ.6e7cglDz0qqS6mC3wDMUCRmUzvhv7t2nR5-VXdGBWw4";
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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5ZjA3ZDkxYzVlODE5NDY2NDg2OGQ4IiwiaWF0IjoxNjcxMzY2NjMyfQ.6e7cglDz0qqS6mC3wDMUCRmUzvhv7t2nR5-VXdGBWw4";
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

