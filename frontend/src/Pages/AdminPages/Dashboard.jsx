import { Box,Text,Flex,Button,Image} from '@chakra-ui/react'
import React from 'react'
import "./Dashboard.css"
import {BsTagsFill} from 'react-icons/bs'
import {FaRupeeSign,FaUserAlt} from 'react-icons/fa'
import {CiDiscount1} from 'react-icons/ci'
import {FcSalesPerformance} from "react-icons/fc"
import {SiSimpleanalytics} from "react-icons/si"
import { useEffect } from 'react'
import {IoBarChartSharp} from "react-icons/io5"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineTeam} from 'react-icons/ai'
import axios from "axios"
import {RiAdminFill} from "react-icons/ri"
import UsersPage from './UsersPage'
import ProductPage from './ProductPage'
import OrdersPage from './OrdersPage'
import AllAdminPage from './AllAdminPage'
import SalesTeam from './SalesTeam'
import Discounts from './Discounts'
import { BaseUrl } from '../../Utils/APIurl'


const Dashboard = () => {
  const [adminProfile,setAdminProfile]=useState("")
  const [show,setShow]=useState("Users")
  const navigate = useNavigate()


  
// Fetching Admin Profile data from here

  const getProfile=()=>{
    axios.get(`${BaseUrl}adminDetails`,{
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

  const handleLogout=()=>{
    localStorage.setItem("admintoken","")
    navigate("/adminlogin")
  }



  return (
    <Flex w='100%'>

                       {/*  Profile Section */}
      <Box id='lhsBox' w={["5%","10%","16%"]} h='100vh' p={["0px","0px",'20px']}>
        <Link to="/adminprofile">
          {
            adminProfile && adminProfile.map((data)=>{
              return(
                <Flex id='titleBox' p='0px 10px' mb='40px' key={data._id}>
                <Image src={data.avtar} w='45px' borderRadius='50%' className='productRow2'/>
                <Box ml={["0px","-12px","0px"]}>
                <Text pl={[0,0,5]} fontWeight='bold'>{data.firstname}</Text>
                <Text pl={[0,0,5]} >{data.role}</Text>
                </Box>
                </Flex>
              )
            })
          }
          </Link>
                               {/* Side Bar */}

        <Box id='linkBox'>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow("AllAdmin")}>
          <RiAdminFill/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Admins</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow("Users")}>
          <FaUserAlt/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Users</Text>
          </Flex>
          <hr />
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(2)}>
          <BsTagsFill />  
          <Text pl={["0px","5px",'15px']} className="lhsName">Products</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(3)}>
          <FaRupeeSign/>  
          <Text pl={["0px","5px",'15px']} className="lhsName">Orders</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow('Discounts')}>
          <CiDiscount1/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Discounts</Text>
          </Flex>
          <hr />
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow("SalesTeams")}>
          <AiOutlineTeam/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Sales Teams</Text>
          </Flex>
          {/* <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(4)}>
          <FcSalesPerformance/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Highest Sales</Text>
          </Flex> */}
          {/* <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(4)}>
          <IoBarChartSharp/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Sales Charts</Text>
          </Flex> */}
          {/* <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(4)}>
          <SiSimpleanalytics/>
          <Text pl={["0px","5px",'15px']} className="lhsName">Month Report</Text>
          </Flex> */}
        </Box>
      </Box>


          {/*     Right hand Side From Here    */}

      <Box id='rhsBox' w='84%' ml='16%' h='auto'> 
        <Box id='navbarBox'  p='0px 40px'>
          <Flex justifyContent='space-between' pt={3} mb={3}>
            <Text fontWeight='bold'>PharmBuddy Admin</Text>
            <Button onClick={handleLogout} _hover={{bg:"rgb(134, 130, 238)",color:"white"}} mb={2} >Log Out</Button>
          </Flex>
        </Box>
      <Box id='rhsBody' m='30px' p='30px'>

        {
          show==="Users"?<UsersPage/>:show==2?<ProductPage/>:show==3?<OrdersPage/>:show=="AllAdmin"?<AllAdminPage/>:show=="SalesTeams"?<SalesTeam/>:show=="Discounts"?<Discounts/>:<h1>r</h1>
        }
        
      </Box>
      </Box>
    </Flex>
  )
}

export default Dashboard
