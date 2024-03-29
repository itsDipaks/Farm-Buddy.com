import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
  editCart,
  GetCartData,
  RemovecartProduct,
} from "../../Redux/Cart/Cart.action";
import Navbar from "../Navbar/Navbar";
import styles from "./cartpage.module.css";
const Cartpage = () => {
  const dispatch = useDispatch();

  const {data, total, loading, error} = useSelector((store) => store.cart);

  const cartproducts = data && data;

  const grandtotal = total && total.toFixed(2);
  const navigate = useNavigate();

  const GetCartVal = () => {
    dispatch(GetCartData());
  

  };


  const RemoveProduct = (product_Id) => {
    dispatch(RemovecartProduct(product_Id));
    GetCartData();
    window.location.reload()
  };

  useEffect(() => {
    GetCartVal();
  }, []);

  const proceedtopayment = () => {
    navigate("/payment");
  };

  const selectqty = (e, id) => {
    const quantity = e.target.value;
    const product_Id = id;
    dispatch(editCart(quantity, product_Id));
    GetCartData();
    window.location.reload()
  };

  const convertdecimal = (p1, p2) => {
    const ans = ((p1 - p2) / p1) * 100;
    return ans.toFixed();
  };

  return (
    <>
      <Navbar />
      {loading ? "loading" : ""}
      <Box className={styles.mainbox}>
        <Box className={styles.leftbox}>
          <VStack className={styles.cartcount}>
            {cartproducts && cartproducts.length < 1 ? (
              <h1>
                Your Cart is Empty <span></span>
              </h1>
            ) : (
              <h1>
                {cartproducts && cartproducts.length}Items in your cart{" "}
                <span></span>
              </h1>
            )}
          </VStack>
          {/* ............Product box........... */}
          {cartproducts &&
            cartproducts.map((el) => (
              <VStack>
                <Box className={styles.prodbox}>
                  <Box>
                    <img src={el.productImage} alt={el.productImage} />
                  </Box>
                  <Box className={styles.contentdiv}>
                    <h3>{el.productName}</h3>
                    <h3>{el.type}</h3>
                    <h2>
                      <span>MRP ₹{el.listPrice}</span>{" "}
                      <span>₹{el.salePrice}*</span>{" "}
                      <span>
                        {convertdecimal(el.listPrice, el.salePrice)}% OFF
                      </span>
                    </h2>
                    <p>Category :{el.category}</p>
                  </Box>
                  <Box className={styles.buttonbox}>
                    <RiDeleteBin6Line
                      onClick={() => RemoveProduct(el.product_Id)}
                    />
                    <Select
                      placeholder="Qty "
                      onChange={(e) => selectqty(e, el.product_Id)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Select>
                    <p>{el.quantity}</p>
                  </Box>
                </Box>
              </VStack>
            ))}
        </Box>

        <Box className={styles.rightbox}>
          <Box className={styles.buybtnbox}>
            <VStack className={styles.cartcount}>
              <h1>
                Cart Total <span> ₹{grandtotal}</span>
              </h1>
            </VStack>
            <VStack>
              <button className={styles.proceedbuy} onClick={proceedtopayment}>
                Proceed To Pay
              </button>
            </VStack>
          </Box>

          <Box className={styles.billingbox}>
            <h1>Bill Summary</h1>
            <Box className={styles.cartprice}>
              <p>
                <span className={styles.subtitle}>Cart Value</span>{" "}
                <span>₹{grandtotal}</span>
              </p>
              <p>
                <span className={styles.subtitle}>Delivery charges</span>{" "}
                {grandtotal > 400 ? <span>FREE</span> : <span>₹40</span>}
              </p>

              {grandtotal > 400 ? (
                ""
              ) : (
                <p>To get free Delivery Add ₹{400 - grandtotal} </p>
              )}
            </Box>
            <Divider />

            <h1 className={styles.amountpaid}>
              <span className={styles.subtitle}>Amount to be paid</span>
              <span> ₹{grandtotal}</span>
            </h1>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cartpage;
