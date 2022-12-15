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
import React from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import styles from "./cartpage.module.css";
const Cartpage = () => {
  return (
    <>
      <Box className={styles.mainbox}>
        <Box className={styles.leftbox}>
          <VStack className={styles.cartcount}>
            <h1>Your Cart is Empty <span></span></h1>
          </VStack>
          {/* ............Product box........... */}
          <VStack>
            <Box className={styles.prodbox}>
              <Box>
                <img
                  src="https://avatars.githubusercontent.com/u/96649241?s=48&v=4"
                  alt=""
                />
              </Box>
              <Box className={styles.contentdiv}>
                <h3>Prohance Mom Chocolate Nutrition Drink Jar Of 400 G</h3>
                <h3>babyhelth</h3>
                <h2>
                  <span>MRP ₹610.00*</span> <span>₹1216.00*</span>{" "}
                  <span>25%Off</span>
                </h2>
                <p>Category :babyandwomenhelth</p>
              </Box>
              <Box className={styles.buttonbox}>
                <RiDeleteBin6Line />

                <Select placeholder="Qty ">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </Box>
            </Box>
            <Box className={styles.prodbox}>
              <Box>
                <img
                  src="https://avatars.githubusercontent.com/u/96649241?s=48&v=4"
                  alt=""
                />
              </Box>
              <Box className={styles.contentdiv}>
                <h3>Prohance Mom Chocolate Nutrition Drink Jar Of 400 G</h3>
                <h5>babyhelth</h5>
                <h2>
                  <span>MRP ₹610.00*</span> <span>₹1216.00*</span>{" "}
                  <span>25%Off</span>
                </h2>
                <p>Category :babyandwomenhelth</p>
              </Box>
              <Box className={styles.buttonbox}>
                <RiDeleteBin6Line />

                <Select placeholder="Qty ">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </Box>
            </Box>
            <Box className={styles.prodbox}>
              <Box>
                <img
                  src="https://avatars.githubusercontent.com/u/96649241?s=48&v=4"
                  alt=""
                />
              </Box>
              <Box className={styles.contentdiv}>
                <h3>Prohance Mom Chocolate Nutrition Drink Jar Of 400 G</h3>
                <h5>babyhelth</h5>
                <h2>
                  <span>MRP ₹610.00*</span> <span>₹1216.00*</span>{" "}
                  <span>25%Off</span>
                </h2>
                <p>Category :babyandwomenhelth</p>
              </Box>
              <Box className={styles.buttonbox}>
                <RiDeleteBin6Line />

                <Select placeholder="Qty ">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </Box>
            </Box>
          </VStack>
        </Box>













        <Box className={styles.rightbox}>
          <Box className={styles.buybtnbox}>
            <VStack className={styles.cartcount}>
              <h1>Cart Total <span>1245</span></h1>
            </VStack>
            <VStack>
              <button className={styles.proceedbuy}>Proceed To Buy</button>
            </VStack>
          </Box>

          <Box className={styles.billingbox}>
            <h1>Bill Summary</h1>
            <Box className={styles.cartprice}>
              <p>
                <span>Cart Value</span> <span>1452</span>
              </p>
              <p>
                <span>Delivery charges</span> <span>FREE</span>
              </p>
            </Box>
            <Divider />

            <h1 className={styles.amountpaid}>
              <span>Amount to be paid</span>
              <span>124855pay</span>
            </h1>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cartpage;
