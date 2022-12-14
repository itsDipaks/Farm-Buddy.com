import React from 'react'
import { Flex,Box,Text,Button } from '@chakra-ui/react'

const OrdersPage = () => {
  return (
    <Box>
      <Flex mb="30px" justifyContent="space-between" alignItems="center" > 
          <Text fontWeight='bold' pb={5}>All Orders</Text>
          <Button bg="white" border="1px solid grey">+ Add Order</Button>
          </Flex>
    </Box>
  )
}

export default OrdersPage
