import { Box,Flex,Image,Text,Heading,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {FiEdit} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import axios  from 'axios'
import { useState } from 'react'

const d=[]
let product=JSON.parse(localStorage.getItem("product"))
d.push(product)
const SingleProductPage = () => {
  const [productName,setProductName]=useState("")
  const [type,setType]=useState("")
  const [category,setCategory]=useState("")
  const [listPrice,setListPrice] = useState("")
  const {isOpen,onOpen,onClose}= useDisclosure()
  const [data,setData]=useState(d)
  console.log(data)



// .............................  Edit Product Method .......................

const handlePrice=()=>{
  let newPricec=prompt("Enter New Quantity")
  axios.patch(`http://localhost:8400/Dashproduct/edite/${product._id}`,{salePrice:newPricec},{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }}
  )
  .then((res)=>{
    console.log(res)
   alert("Inventory Updated");
   getData()
  })
  .catch((err)=>{
   console.log(err)
  })
 }

 // .............................  Edit List Price Method .......................
 const handleListPrice=()=>{
  let newListPrice = prompt("Enter New Quantity")
  axios.patch(`http://localhost:8400/Dashproduct/edite/${product._id}`,{listPrice:newListPrice},{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }}
  )
  .then((res)=>{
    console.log(res)
   alert("Inventory Updated");
   getData()
  })
  .catch((err)=>{
   console.log(err)
  })
 }

 const handleStocks=()=>{
  let newStock = prompt("Enter New Quantity")
  axios.patch(`http://localhost:8400/Dashproduct/edite/${product._id}`,{stocks:newStock},{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }}
  )
  .then((res)=>{
    console.log(res)
   alert("Inventory Updated");
   getData()
  })
  .catch((err)=>{
   console.log(err)
  })
 }

// .............................  Geting Updated Data Method .......................

 const getData=()=>{
  axios.get(`http://localhost:8400/product/singleproduct/${product._id}`)
  .then((res)=>{
    const r=[]
    r.push(res.data)
    setData(r)
  })
 }




const handleEdit=()=>{
  const payload={
      productName,
      type,
      category,
      listPrice
  }
axios.patch(`http://localhost:8400/Dashproduct/edite/${product._id}`,payload,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }}
  )
  .then((res)=>{
    console.log(res)
    getData()
   alert("Inventory Updated");
  })
}


  return (
    <>
    <Box id='navbarBox'  p='0px 40px'>
          <Flex justifyContent='space-between' pt={3} mb={3}>
            <Text fontWeight='bold'>PharmBuddy Admin</Text>
            <Button _hover={{bg:"rgb(134, 130, 238)",color:"white"}} mb={2} >Log Out</Button>
          </Flex>
        </Box>
        <Link to="/" >
      <Text>Dashboard > Product Desc</Text>
      </Link>
    <Box w='70%' m="auto" mt={30} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="5px" p={10}>
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Add Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>Product Name</label>
                        <Input type="text" placeholder="Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                        <label>List Price</label>
                        <Input type="text" placeholder="List Price" value={listPrice} onChange={(e)=>setListPrice(e.target.value)}/>
                        <label>Category</label>
                        <Input type="text" placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                        <label>Type</label>
                        <Input type="text" placeholder="Type" value={type} onChange={(e)=>setType(e.target.value)}/>
                        <Button onClick={handleEdit} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Update</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>
            {
              data && data.map((ele)=>{
                return(
                  <>
                 <b>Product Date</b> :{ele.ProductAddeedonDate} {ele.ProductAddeedTime}pm
                  <Heading textAlign="center" pb={5}>Product Details</Heading>
                  <Flex justifyContent='space-around' gap={20}>
                   <Box>
                          <Image src={ele.productImage} w="300px" h={300}/>
                      </Box>
                      <Box fontSize="15px" lineHeight='40px'>
                        <Text> <b> Name </b>: {ele.productName}</Text>
                        <Flex>
                        <Text> <b> Sale Price : </b>${ele.salePrice}</Text><FiEdit onClick={handlePrice}/>
                        </Flex>
                        <Flex>
                        <Text> <b> List Price :</b> ${ele.listPrice}</Text><FiEdit onClick={handleListPrice}/>
                        </Flex>
                        <Flex>
                          <Text> <b>Stock : </b> {ele.stocks} pcs</Text><FiEdit onClick={handleStocks}/>
                        </Flex>
                        <Text onClick={getData}> <b>Type :</b>  {ele.type}</Text>
                        <Flex>
                        <Text> <b>Category :</b>  {ele.category}</Text><FiEdit/>
                        </Flex>
                        <Button mt={10} onClick={onOpen}>Edit All Details</Button>
                     </Box>
                </Flex>
                        <Text mt={5}> <b>Product Description :</b> {ele.description}</Text>
                      </>
                    )
                })
            }
    </Box>
    </>
  )
}


export default SingleProductPage
