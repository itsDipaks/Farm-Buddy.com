import React from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Heading,
  Flex,
  Select,
  Spacer,
  Radio,
  Divider,
  Checkbox,
} from "@chakra-ui/react";
import Style from "./ProductPage.module.css";

const ProductsPage = () => {
 
  return (
    <Box border="1px solid black" display="flex" w="70%" m="auto">
      <Box border="1px solid red" height="500px" w="30%" padding='20px'>

      <Heading size="sm" fontSize="30px" color='rgb(79,88,104)'>
                Filter
              </Heading>
              <Text mt='20px' mb='15px' fontSize='20px'>Category</Text>
              <Flex>
              <Text>Vicks</Text>
     <Spacer/>
              <Radio mr='40px' value='1'></Radio>
              </Flex>
              <Divider mt='30px' />
              <Text mt='20px' mb='15px' fontSize='20px'>Sub category</Text>
              <Divider mt='30px' />
              <Text mt='20px' mb='15px' fontSize='20px'>Price</Text>

              <Flex>
                <Text>Below 99</Text>
                <Spacer/>
              <Text>(10)</Text>
              <Checkbox size='md' colorScheme='green' defaultChecked></Checkbox>
              </Flex>
             
              <Flex>
                <Text>Below 99</Text>
                <Spacer/>
              <Text>(10)</Text>
              <Checkbox size='md' colorScheme='green' defaultChecked></Checkbox>
              </Flex>
             
              <Flex>
                <Text>Below 99</Text>
                <Spacer/>
              <Text>(10)</Text>
              <Checkbox size='md' colorScheme='green' defaultChecked></Checkbox>
              </Flex>
             
              <Flex>
                <Text>Below 99</Text>
                <Spacer/>
              <Text>(10)</Text>
              <Checkbox size='md' colorScheme='green' defaultChecked></Checkbox>
              </Flex>
             
             
      </Box>
      <Box w="70%">
     
        <Box h="50px"  mb="30px">
          <Flex mt='15px'>
            <Box>
              <Heading size="sm" fontSize="30px" color='rgb(79,88,104)'>
                Vicks
              </Heading>
            </Box>
            <Spacer/>
            <Box>
              <Flex >
                <Text fontSize='18px' mr='20px' mt='5px'>Sort By:</Text>
                <Select placeholder="Select option" w='250px' >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <SimpleGrid columns={[2, null, 3]} spacing="10px">
          <Box
            border="1px"
            borderColor="gray.300"
            height="340px"
            padding="8px"
            borderRadius="6px"
            mt="10px"
            className={Style.main2}
          >
            <Image
              m="auto"
              mt="5px"
              height="200px"
              src="https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1669635048.jpg"
              alt="Vicks"
            />
            <Heading size="sm" fontSize="17px" fontWeight="bold" mt="6px" color='rgb(79,88,104)'>
              Vick Vaporub 110ml Relief from cold and cough
            </Heading>
            <Flex mt="10px">
              <Text color='gray.500'>MRP ₹{`123`}</Text>
              <Text
                ml="10px"
                bg="rgb(249,140,142)"
                pl="5px"
                pr="5px"
                color="white"
              >
                4% OFF
              </Text>
            </Flex>

            <Heading size="sm">₹{`254.40`}</Heading>
          </Box>
          
          <Box
            border="1px"
            borderColor="gray.300"
            height="340px"
            padding="8px"
            borderRadius="6px"
            mt="10px"
            className={Style.main2}
          >
            <Image
              m="auto"
              mt="5px"
              height="200px"
              src="https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1669635048.jpg"
              alt="Vicks"
            />
            <Heading size="sm" fontSize="17px" fontWeight="bold" mt="6px" color='rgb(79,88,104)'>
              Vick Vaporub 110ml Relief from cold and cough
            </Heading>
            <Flex mt="10px">
              <Text color='gray.500'>MRP ₹{`123`}</Text>
              <Text
                ml="10px"
                bg="rgb(249,140,142)"
                pl="5px"
                pr="5px"
                color="white"
              >
                4% OFF
              </Text>
            </Flex>

            <Heading size="sm">₹{`254.40`}</Heading>
          </Box>
          
          <Box
            border="1px"
            borderColor="gray.300"
            height="340px"
            padding="8px"
            borderRadius="6px"
            mt="10px"
            className={Style.main2}
          >
            <Image
              m="auto"
              mt="5px"
              height="200px"
              src="https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1669635048.jpg"
              alt="Vicks"
            />
            <Heading size="sm" fontSize="17px" fontWeight="bold" mt="6px" color='rgb(79,88,104)'>
              Vick Vaporub 110ml Relief from cold and cough
            </Heading>
            <Flex mt="10px">
              <Text color='gray.500'>MRP ₹{`123`}</Text>
              <Text
                ml="10px"
                bg="rgb(249,140,142)"
                pl="5px"
                pr="5px"
                color="white"
              >
                4% OFF
              </Text>
            </Flex>

            <Heading size="sm">₹{`254.40`}</Heading>
          </Box>
          
          <Box
            border="1px"
            borderColor="gray.300"
            height="340px"
            padding="8px"
            borderRadius="6px"
            mt="10px"
            className={Style.main2}
          >
            <Image
              m="auto"
              mt="5px"
              height="200px"
              src="https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1669635048.jpg"
              alt="Vicks"
            />
            <Heading size="sm" fontSize="17px" fontWeight="bold" mt="6px" color='rgb(79,88,104)'>
              Vick Vaporub 110ml Relief from cold and cough
            </Heading>
            <Flex mt="10px">
              <Text color='gray.500'>MRP ₹{`123`}</Text>
              <Text
                ml="10px"
                bg="rgb(249,140,142)"
                pl="5px"
                pr="5px"
                color="white"
              >
                4% OFF
              </Text>
            </Flex>

            <Heading size="sm">₹{`254.40`}</Heading>
          </Box>
          
          <Box
            border="1px"
            borderColor="gray.300"
            height="340px"
            padding="8px"
            borderRadius="6px"
            mt="10px"
            className={Style.main2}
          >
            <Image
              m="auto"
              mt="5px"
              height="200px"
              src="https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1669635048.jpg"
              alt="Vicks"
            />
            <Heading size="sm" fontSize="17px" fontWeight="bold" mt="6px" color='rgb(79,88,104)'>
              Vick Vaporub 110ml Relief from cold and cough
            </Heading>
            <Flex mt="10px">
              <Text color='gray.500'>MRP ₹{`123`}</Text>
              <Text
                ml="10px"
                bg="rgb(249,140,142)"
                pl="5px"
                pr="5px"
                color="white"
              >
                4% OFF
              </Text>
            </Flex>

            <Heading size="sm">₹{`254.40`}</Heading>
          </Box>
          
          <Box
            border="1px"
            borderColor="gray.300"
            height="340px"
            padding="8px"
            borderRadius="6px"
            mt="10px"
            className={Style.main2}
          >
            <Image
              m="auto"
              mt="5px"
              height="200px"
              src="https://cdn01.pharmeasy.in/dam/products_otc/I07006/vicks-vaporub-110ml-relief-from-cold-cough-headache-and-body-pain-2-1669635048.jpg"
              alt="Vicks"
            />
            <Heading size="sm" fontSize="17px" fontWeight="bold" mt="6px" color='rgb(79,88,104)'>
              Vick Vaporub 110ml Relief from cold and cough
            </Heading>
            <Flex mt="10px">
              <Text color='gray.500'>MRP ₹{`123`}</Text>
              <Text
                ml="10px"
                bg="rgb(249,140,142)"
                pl="5px"
                pr="5px"
                color="white"
              >
                4% OFF
              </Text>
            </Flex>

            <Heading size="sm">₹{`254.40`}</Heading>
          </Box>
          
          
          
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductsPage;
