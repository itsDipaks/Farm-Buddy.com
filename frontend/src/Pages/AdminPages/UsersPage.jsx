import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Dashboard.css"
import { DeleteIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { Flex,Button,Text,Table, Th, Thead, Tr,Tbody,Td,Image,Box } from '@chakra-ui/react'

const UsersPage = () => {
  const [users,setUsers]=useState([])
  const [status,setStatus]=useState(false)



  //.................... All Users Fetch Method .....................//

const getData=()=>{
  axios.get('http://localhost:8400/allusers')
  .then((res)=>{
    console.log(res.data.Data)
    setUsers(res.data.Data)
  })
  .catch(function (err){
    console.log(err)
  })
}


useEffect(()=>{
  getData()
},[])

  //....................  User Delete Method .....................//

const handleDelete=(userID)=>{
  axios.delete(`http://localhost:8400/deleteuser/${userID}`)
  .then((res)=>{
    console.log(res.data.msg)
    alert(res.data.msg)
    getData()
  })
  .catch(function (err){
    console.log(err)
  })
}

const handleActive=()=>{
  if(!status){
    setStatus(true)
  }else{
    setStatus(false)
  }
}


  return (
    <Box>
      <Flex mb="30px" justifyContent="space-between" alignItems="center" > 
          <Text fontWeight='bold' pb={5}>All Users</Text>
          <Button bg="white" border="1px solid grey">+ Add User</Button>
          </Flex>
      <Table>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  {/* <th>Inventory</th> */}
                  <Th>Gender</Th>
                  <Th>Status</Th>
                  <Th>Remove</Th>
                </Tr>
              </Thead>
              <Tbody id="product_tbody">

                {/* <!-- items row comes here --> */}

                {users && users.map((ele)=>{
                  return(
                    <>
                    <Tr key={ele._id} className="userRow">
                    <Link to="/userprofile">
                      <Td>
                        <Image src={ele.profileimage} w={20}/>
                      </Td>
                      </Link>
                      {/* <Link to="/userprofile"> */}
                        <Td>
                        <Text fontSize={20}>{ele.name}</Text>
                        </Td>
                        {/* </Link> */}
                        <Td>
                        <Text fontSize={20}>{ele.gender}</Text>
                        </Td>
                        <Td>
                            {status?
                            <Box onClick={handleActive} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(39, 177, 39);" borderRadius="30px" color="white">Active</Box>
                            :<Box onClick={handleActive} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(238, 68, 68);" borderRadius="30px" color="white">InActive</Box>}
                        </Td>
                        <Td>
                            <DeleteIcon onClick={()=>handleDelete(ele._id)} w="25px" h="25px" _hover={{color:"red",cursor:"pointer"}} />
                        </Td>
                    </Tr>
                    </>
                  )
                })
                }
              </Tbody>
            </Table>
    </Box>
  )
}

export default UsersPage
