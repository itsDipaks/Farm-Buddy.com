import React from 'react'
import { Box,Flex,Text,Button,Table,Thead,Tbody,Tr,Td,Image,Th } from '@chakra-ui/react'
import { useState } from 'react'

const AllAdminPage = () => {
    const [users,setUsers]=useState([])
    // const [status,setStatus]=useState('')



  return (
    <Box>
      <Flex mb="30px" justifyContent="space-between" alignItems="center" > 
          <Text fontWeight='bold' pb={5}>All Admins: {users.length}</Text>
          <Button bg="white" border="1px solid grey">+ Add Admin</Button>
          </Flex>
      <Table>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
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
                      <Td>
                        <Image src={ele.profileimage} w={20}/>
                      </Td>
                        <Td>
                        <Text fontSize={20}>{ele.name}</Text>
                        </Td>
                        <Td>
                        <Text fontSize={20}>{ele.gender}</Text>
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

export default AllAdminPage
