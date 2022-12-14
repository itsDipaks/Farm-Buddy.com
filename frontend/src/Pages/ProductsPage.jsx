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
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure, RadioGroup, Stack, DrawerBody
} from "@chakra-ui/react";
import Style from "./ProductPage.module.css";

const ProductsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [value, setValue] = React.useState('1')

 
 
  return (<>
    
    <Box border="1px solid black" display="flex" w="70%" m="auto" className={Style.main}>
      <Box  height="500px" w="30%" padding='25px' className={Style.main1}>
        <Box w='90%'>

      <Heading size="sm" fontSize="30px" color='rgb(79,88,104)'>
                Filter
              </Heading>
              <Text mt='20px' mb='15px' fontSize='20px'>Category</Text>
              <Flex>
              <Text>Vicks</Text>
     <Spacer />
              <Radio  value='1'></Radio>
              </Flex>
              <Divider mt='30px' />
              <Text mt='20px' mb='15px' fontSize='20px'>Sub category</Text>
              <Divider mt='30px' />
              <Text mt='20px' mb='15px' fontSize='20px'>Price</Text>

              <Flex mt='20px' mb='20px'>
                <Text>Below 99</Text>
                <Spacer/>
              <Text mr='15px'>(10)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
             
              <Flex mt='20px' mb='20px'>
                <Text>100 199</Text>
                <Spacer/>
              <Text mr='15px'>(8)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
             
              <Flex mt='20px' mb='20px'>
                <Text>200 299</Text>
                <Spacer/>
              <Text mr='15px'>(2)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
             
              <Flex mt='20px' mb='20px'>
                <Text>300 399</Text>
                <Spacer/>
              <Text mr='15px'>(1)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
              <Flex mt='20px' mb='20px'>
                <Text>Above 500</Text>
                <Spacer/>
              <Text mr='15px'>(1)</Text>
              <Checkbox size='md' colorScheme='green' ></Checkbox>
              </Flex>
              </Box>
             
      </Box>
      <Box w="70%" padding='10px' className={Style.data_box} >
     
        <Box h="50px"  mb="30px">
          <Flex mt='15px'>
            <Box>
              <Heading size="sm" fontSize="30px" color='rgb(79,88,104)' className={Style.heading}>
                Vicks
              </Heading>
            </Box>
            <Spacer/>
            <Box>
              <Flex className={Style.select}>
                <Text fontSize='18px' mr='20px' mt='5px' className={Style.sortBy}>Sort By:</Text>
               
                <Select placeholder="Select option" w='250px' >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box  m='auto' className={Style.sort_filter}>
    <Button w='50%' ref={btnRef}  borderColor="gray.600" onClick={onOpen}>
        Sort 
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Sort</DrawerHeader>
             <Divider/>
             <DrawerBody>
             <RadioGroup onChange={setValue} value={value} w='90%' m='auto'>
      <Stack direction='column'>
        <Flex mt='10px' >
          <Text>Popularity</Text>
          <Spacer/>
          <Radio value='1'></Radio>
        </Flex>
       
        <Flex mb='15px'>
          <Text>Price low to high</Text>
          <Spacer/>
          <Radio value='2'></Radio>
        </Flex>
       
        <Flex mb='15px'>
          <Text>Price high to low</Text>
          <Spacer/>
          <Radio value='3'></Radio>
        </Flex>
       
        <Flex mb='15px'>
          <Text>Discount</Text>
          <Spacer/>
          <Radio value='4'></Radio>
        </Flex>
       
       
      </Stack>
    </RadioGroup>
    </DrawerBody>
          <DrawerFooter>
           
            <Button colorScheme='teal' w='100%'>APPLY</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    
    </Box>
  
        <SimpleGrid columns={[1, 2, 3]} spacing="10px">
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
  </>);
};

export default ProductsPage;
