import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  FormLabel,
  Checkbox,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paymentnavbar from "../../Components/Paymentpage/Paymentnavbar";
import { GetCartData } from "../../Redux/Cart/Cart.action";
import styles from "./payment.module.css";
const Paymentpage = () => {

  const {data,total,loading,error}=useSelector((store)=>store.cart)
  const dispatch=useDispatch()
  const grandtotal = total && total.toFixed(2);
useEffect(()=>{
  dispatch(GetCartData())
},[])

  const {isOpen, onOpen, onClose} = useDisclosure();
  // const btnRef = React.useRef()

  const [values,setValues] = useState({
    cartnumber:"",
    name:"",
    valid:"",
    cvv:"",
    gender:"",
})
  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
}


const handeldsubmit=()=>{
alert("Payment Sucess ")

}

const handlePay=()=>{
  alert("Order Successfull")
  onClose()
}
  return (

    <>


<Paymentnavbar/>

    <div className={styles.outerdiv}>
      <Box>
        <h1 className={styles.title}>Offers</h1>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem className={styles.linkbox}>
            <h2>
              <AccordionButton>
                <Box
                  display="flex"
                  alignItems="center"
                  className={styles.butontitle}
                >
                  <img
                    src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png"
                    alt="1"
                  />
                  <h1>Paytm Wallet</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.accordinfobox}>
                <Text>
                  Up to 3000 cashback points on a minimum transaction of Rs.599.
                  Valid once per user.
                </Text>
                <Button colorScheme='teal' className={styles.linkbtn}>Pay ₹{grandtotal} With Paytm</Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className={styles.linkbox}>
            <h2>
              <AccordionButton>
                <Box
                  display="flex"
                  alignItems="center"
                  className={styles.butontitle}
                >
                  <img
                    src="https://cdn.pharmeasy.in/payments/amazonpay_new.png"
                    alt="1"
                  />
                  <h1>Amazon Pay</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.accordinfobox}>
                <Text>
                  Up to Rs.600 cashback on a minimum transaction of Rs.399.
                  Valid once per user.
                </Text>
                <Button colorScheme='teal' className={styles.linkbtn}>Pay with ₹{grandtotal} AmazonPay</Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className={styles.linkbox}>
            <h2>
              <AccordionButton>
                <Box
                  display="flex"
                  alignItems="center"
                  className={styles.butontitle}
                >
                  <img
                    src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png"
                    alt="1"
                  />
                  <h1>MobiKwik | ZIP (Pay Later)</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.accordinfobox}>
                <Text>
                  Up to Rs.650 cashback on Mobikwik. Code: MBK650. Valid only
                  once & on orders above Rs.800.
                </Text>
                <Button colorScheme='teal' className={styles.linkbtn}>Pay witth ₹{grandtotal} MobiKwik </Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <h1 className={styles.title}>Other Options</h1>

        <Accordion defaultIndex={[0]}>
          <AccordionItem className={styles.linkbox}>
            <h2>
              <AccordionButton>
                <Box
                  display="flex"
                  alignItems="center"
                  className={styles.butontitle}
                >
                  <img
                    src="https://cdn.pharmeasy.in/payments/upi.png"
                    alt="1"
                  />
                  <h1>UPI</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.upi_iconbox}>
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png"
                  alt="1"
                />
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png"
                  alt="1"
                />
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png"
                  alt="1"
                />
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png"
                  alt="1"
                />
                <img
                  src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png"
                  alt="1"
                />
              </Box>
              <Box className={styles.upi_form}>
                <Input placeholder="eg.**0000@paytm" size="md" />
                <Button colorScheme='teal'>Place Order</Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box className={styles.cardbox} onClick={onOpen}>
          <Box className={styles.imagbox}>
            <img src="https://cdn.pharmeasy.in/payments/card.png" alt="1" />
          </Box>
          <Box className={styles.infobox}>
            <h1>Credit/Debit Card</h1>

            <p>
              Up to Rs.150 off on HSBC Cashback Credit Card. Valid once per user
              & on orders above Rs.1000.
            </p>
            <p>
              Up to Rs.300 off on RuPay Cards, Min. transaction of Rs.1500.
              Applicable once per user
            </p>

            <Box className={styles.card_icon}>
              <img
                src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png"
                alt="1"
              />
              <img
                src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png"
                alt="1"
              />
              <img
                src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png"
                alt="1"
              />
              <img
                src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png"
                alt="1"
              />
            </Box>
          </Box>
        </Box>

        {/* 
      <Button ref={btnRef} colorScheme='teal' >
        Open
      </Button> */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size="sm"
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader className={styles.drawerheader}>Enter New Card</DrawerHeader>

            <DrawerBody>
              <FormControl onSubmit={handeldsubmit}>
              <FormLabel className={styles.lable}>Card Number</FormLabel>
              <Input  className={styles.inputfeild}   onChange={handleChange} type="cartnumber" placeholder="1234-5678-9568-5564" />
              <FormLabel className={styles.lable}>Name on Card</FormLabel>
              <Input  className={styles.inputfeild}  onChange={handleChange}  name="name"  placeholder="eg.Dipak Pawar" />

              <Box className={styles.validbox}>
                <div>
                  {" "}
                  <FormLabel className={styles.lable}>Valid Through</FormLabel>
                  <Input  className={styles.inputfeild} name="valid" onChange={handleChange} placeholder="MM/YY" />
                </div>
                <div>
                  <FormLabel className={styles.lable}>CVV</FormLabel>
                  <Input  className={styles.inputfeild} name="cvv" placeholder="123" />
                </div>
              </Box>

              <Checkbox className={styles.checkbox} defaultChecked>Save this card for future payments</Checkbox>
            <br />
              <Button onClick={handlePay} type="submit" className={styles.proceedbtn} colorScheme='teal' variant='outline'>Pay {grandtotal}</Button>
              </FormControl>
            </DrawerBody>

          </DrawerContent>
        </Drawer>




        <Accordion defaultIndex={[0]}>
          <AccordionItem className={styles.linkbox}>
            <h2>
              <AccordionButton>
                <Box
                  display="flex"
                  alignItems="center"
                  className={styles.butontitle}
                >
                  <img
                    src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png"
                    alt="1"
                  />
                  <h1>Cash On Delivery</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.accordinfobox}>
                <Text>
                  ₹25 will be charged for Cash on Delivery. Switch to online
                  payments to save on ₹25.
                </Text>
                <Button colorScheme='teal' className={styles.linkbtn}>Place Order</Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>




















<Box className={styles.pricebox}>
<h1 className={styles.title1}>Price Breakdown</h1>
<h2><span>Cart Value</span> <span>{grandtotal}</span></h2>
<h2><span>Delivery charges</span> <span>free</span></h2>
<h2><span>Amount to be paid</span> <span>{grandtotal}</span></h2>
</Box>
    </div>
    </>
  );
};

export default Paymentpage;
