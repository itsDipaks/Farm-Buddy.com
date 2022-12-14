import { Box,Text,Flex,Button,Image, useDisclosure,Modal,ModalOverlay,ModalHeader,ModalContent,ModalCloseButton,ModalBody,Input } from '@chakra-ui/react'
import React from 'react'
import "./Dashboard.css"
import {BsTagsFill} from 'react-icons/bs'
import {FaRupeeSign,FaUserAlt} from 'react-icons/fa'
import {CiDiscount1} from 'react-icons/ci'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import UsersPage from './UsersPage'
import ProductPage from './ProductPage'
import OrdersPage from './OrdersPage'


const Dashboard = () => {
  const {isOpen,onOpen,onClose}=useDisclosure()
  const [adminProfile,setAdminProfile]=useState("")
  const [firstname,setFirstName]=useState("")
  const [lastname,setLastName]=useState("")
  const [role,setRole]=useState("")
  const [avtar,setAvtar]=useState("")
  const [show,setShow]=useState("")

// Fetching Admin Profile data from here

  const getProfile=()=>{
    axios.get("http://localhost:8400/adminDetails",{
      headers:{
        authorization:`Bearer ${localStorage.getItem("admintoken")}`
      }
    })
    .then((res)=>{
      console.log(res.data.Data)
        setAdminProfile(res.data.Data)
    })
    .catch(function (err){
      console.log(err)
    })
  }

  useEffect(()=>{
   getProfile()
  },[])


  // Update Admin Profile Data Method

const handleUpdate=()=>{
  const payload={
    firstname,
    lastname,
    role,
    avtar
  }
  axios.patch("http://localhost:8400/adminUpdate",payload,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("admintoken")}`
    }
  })
  .then((res)=>{
    console.log(res)
    getProfile()
  })
  .catch(function (err){
    console.log(err)
  })
}


  return (
    <Flex w='100%'>

                       {/*  Profile Section */}

      <Box id='lhsBox' w='16%' h='100vh' p='20px'>
          {
            adminProfile && adminProfile.map((data)=>{
              return(
                <Flex id='titleBox' p='0px 10px' mb='40px' onClick={onOpen} key={data._id}>
                <Image src={data.avtar} w='45px' borderRadius='50%'/>
                <Box>
                <Text pl={5} fontWeight='bold'>{data.firstname}</Text>
                <Text pl={5} >{data.role}</Text>
                </Box>
                </Flex>
              )
            })
          }
              <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Update Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>First-Name</label>
                        <Input type="text" placeholder="New First Name" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                        <label>Last-Name</label>
                        <Input type="text" placeholder="New Last Name" value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
                        <label>Role</label>
                        <Input type="text" placeholder="New Role" value={role} onChange={(e)=>setRole(e.target.value)}/>
                        <label>Profile Photo</label>
                        <Input type="text" placeholder="Enter New Name" value={avtar} onChange={(e)=>setAvtar(e.target.value)}/>
                        <Button onClick={handleUpdate} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Update</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>

                               {/* Side Bar */}

        <Box id='linkBox'>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(1)}>
          <FaUserAlt/>
          <Text pl='15px'>Users</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(2)}>
          <BsTagsFill />  
          <Text pl='15px'>Products</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(3)}>
          <FaRupeeSign/>  
          <Text pl='15px'>Orders</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(4)}>
          <CiDiscount1/>
          <Text pl='15px'>Discounts</Text>
          </Flex>
        </Box>
      </Box>


          {/*     Right hand Side From Here    */}

      <Box id='rhsBox' w='84%' ml='16%' h='auto'> 
        <Box id='navbarBox'  p='0px 40px'>
          <Flex justifyContent='space-between' pt={3} mb={3}>
            <Text fontWeight='bold'>PharmBuddy Admin</Text>
            <Button _hover={{bg:"rgb(134, 130, 238)",color:"white"}} mb={2} >Log Out</Button>
          </Flex>
        </Box>
      <Box id='rhsBody' m='30px' p='30px'>

        {
          show===1?<UsersPage/>:show==2?<ProductPage/>:show==3?<OrdersPage/>:<h1>Discounts Page</h1>
        }
          
        
      </Box>
      </Box>
    </Flex>
  )
}

export default Dashboard
