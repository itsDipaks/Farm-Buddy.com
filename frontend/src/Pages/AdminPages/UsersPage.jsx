import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Dashboard.css"
import { DeleteIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { Flex,Button,Text,Table, Th, Thead, Tr,Tbody,Td,Image,Box,Spinner,Alert,AlertDescription,AlertDialog,AlertDialogContent,AlertDialogOverlay,AlertDialogHeader,AlertDialogBody,AlertDialogFooter, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { BaseUrl } from '../../Utils/APIurl'

const UsersPage = () => {
  const [users,setUsers]=useState([])
  const [status,setStatus]=useState(false)
  const [loading,setLoading]= useState(false)
  const {isOpen,onOpen,onClose}=useDisclosure()
  const cancelRef=useRef()



  //.................... All Users Fetch Method .....................//

const getData=()=>{
  setLoading(true)
  axios.get(`${BaseUrl}allusers`)
  .then((res)=>{
    console.log(res.data.Data)
    setUsers(res.data.Data)
    setLoading(false)
  })
  .catch(function (err){
    console.log(err)
    setLoading(false)
  })
}


useEffect(()=>{
  getData()
},[])

  //....................  User Delete Method .....................//

const handleDelete=(userID)=>{
  axios.delete(`${BaseUrl}deleteuser/${userID}`)
  .then((res)=>{
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
      <Flex mb="30px" direction={['column','column','row']}  justifyContent="space-between" alignItems="center" > 
          <Text fontWeight='bold' pb={5}>All Users : {users.length}</Text>
          <Button bg="white" border="1px solid grey">+ Add User</Button>
          </Flex>
      <Table>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  {/* <th>Inventory</th> */}
                  <Th className='productRow'>Gender</Th>
                  <Th className='productRow'>Status</Th>
                  <Th>Remove</Th>
                </Tr>
              </Thead>
              <Tbody id="product_tbody">

{/* .........................  Loading Bar ..................... */}

{loading&&<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    ml={200}
                    mt={50}
                  />}
                {/* <!-- items row comes here --> */}

                {users && users.map((ele)=>{
                  return(
                    <>
                    <Tr key={ele._id} className="userRow">
                      <Td>
                        <Image src={ele.profileimage} w={20}/>
                      </Td>
                        <Td>
                        <Text fontSize={20}>{ele.name}</Text>
                        </Td>
                        <Td>
                        <Text className='productRow' fontSize={20}>{ele.gender}</Text>
                        </Td>
                        <Td className='productRow'>
                            {status?
                            <Box onClick={handleActive} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(39, 177, 39);" borderRadius="30px" color="white">Block</Box>
                            :<Box onClick={handleActive} _hover={{cursor:"pointer"}} ml="10px" textAlign="center" p="1px" w="75px" bg="rgb(238, 68, 68);" borderRadius="30px" color="white">Unblock</Box>}
                        </Td>
                        <Td>
                            <DeleteIcon onClick={onOpen} w="25px" h="25px" _hover={{color:"red",cursor:"pointer"}} />
                        </Td>
                    </Tr>
<AlertDialog 
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        >
        <AlertDialogOverlay>
        <AlertDialogContent>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete User
        </AlertDialogHeader>
        <AlertDialogBody>
            Are you sure you want to Delete this User.
        </AlertDialogBody>

        <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
            <Button colorScheme='red' onClick={()=>handleDelete(ele._id)} ml={3}> Yes</Button>
        </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialogOverlay>
</AlertDialog>
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
