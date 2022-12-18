import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./offers.module.css";
import { GoNote } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/bundle"

const OffersData=[
  {
      img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
      heading:"Medicine",
      discount:"UPTO 50% OFF"
  },
  {
      img:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
      heading:"Healthcare",
      discount:"UPTO 60% OFF"
  },
  {
      img:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
      heading:"Lab Tests",
      discount:"UPTO 70% OFF"
  },
  {
      img:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
      heading:"Health Blogs",
      discount:""
  },
  {
      img:"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
      heading:"PLUS",
      discount:"SAVE 5% EXTRA"
  },
  {
      img:"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
      heading:"Offers",
      discount:""
  },
  {
      img:"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
      heading:"Surgeries",
      discount:""
  },
  {
      img:"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
      heading:"Value Store",
      discount:"UPTO 50% OFF"
  },
  {
    img:"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
    heading:"Medicine",
    discount:"UPTO 50% OFF"
},
{
    img:"https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
    heading:"Healthcare",
    discount:"UPTO 60% OFF"
},
{
    img:"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
    heading:"Lab Tests",
    discount:"UPTO 70% OFF"
},
{
    img:"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
    heading:"Health Blogs",
    discount:""
}
]

const Offers = () => {
  const [query] = useState("");
  const [show] = useState(false);
  const [data] = useState([]);


  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });



  const element = document.querySelector("#box");
  console.log(element);

  // if()
  return (
    <Box p={5} >
      <div className={styles.backColor}>
        <Stack
          width={["80%","60%","60%"]}
          margin="auto"
          paddingTop="32px"
          // marginBottom={"40px"}
          gap="15px"
        >
          <Flex justifyContent={"space-between"}>
            <Heading fontSize={"22px"} color={"#30363C"} fontFamily={'sans-serif'}>What are you looking for?</Heading>
            <Flex alignItems={"center"} gap="10px">
              <GoNote fontSize={"24px"} />
              <Text fontSize={"14px"} fontWeight="500" color={"#30363C"} fontFamily={'sans-serif'}>
                Order with prescription.
              </Text>
              <Text fontSize={"14px"} fontWeight="700" color={"#10847E"}>
                UPLOAD NOW
              </Text>
              <MdKeyboardArrowRight fontSize={"20px"} color={"#10847E"} />
            </Flex>
          </Flex>
          <InputGroup size="lg" alignItems={"center"}>
            <InputLeftElement
              children={<BiSearchAlt color="#9B929B" fontSize={"24px"} />}
            />
            <Input
              boxShadow="rgba(149, 157, 165, 0.2) 0px 3px 20px"
              borderRadius={"150px"}
              fontSize="15px"
              fontWeight={"500"}
              placeholder="Search for Medicines"
              // onChange={handleChange}
              focusBorderColor="#EEF4FF"
              border={"1px solid #EEF4FF"}
            />
            <InputRightElement
              width={"100px"}
              children={
                <Button borderRadius={"50px"} colorScheme={"teal"} width="88px">
                  Search
                </Button>
              }
            />
          </InputGroup>
        </Stack>
      </div>
      {show ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            zIndex: "1000",
            backgroundColor: "white",
            // border:"1px solid #EEF4FF"
          }}
        >
          <Box
            position={"absolute"}
            height={"425px"}
            border="1px solid #EEF4FF"
            width={"60%"}
            margin="auto"
            bg={"white"}
            marginLeft="290px"
            overflowY="scroll"
            borderTop={"none"}
            id="#box"
          >
            <VStack>
              <Box
                paddingLeft={"10px"}
                width={"100%"}
                backgroundColor="#EEF4FF"
                textAlign={"left"}
                fontSize="12px"
                height={"40px"}
                display="flex"
                alignItems="center"
                color="#4F585E"
              >
                Showing results for {query}
              </Box>
              {data.map((el) => (
               
                <div
                  key={el._id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    textAlign: "left",
                    paddingLeft: "10px",
                  }}
                >
                  <Link to={`/product/${el._id}`}>
                    <Heading
                      noOfLines={"1"}
                      color="#30363C"
                      fontSize="14px"
                      fontWeight={"500"}
                      height="20px"
                    >
                      {el.name}
                    </Heading>
                    <Text color={"#6E787E"} fontSize={"12px"}>
                      {el.storename}
                    </Text>
                  </Link>
                </div>
                
              ))}
            </VStack>
          </Box>
        </div>
      ) : null}
      <div className={styles.container}>
      <Flex justifyContent={"space-between"} p={5}>
   

   <Swiper 
           slidesPerView={isBigScreen ? 5 : isTablet ? 4 : isMobile ? 3 : 7}
           spaceBetween={0}

           loop={true}
           loopFillGroupWithBlank={true}

          //  navigation={true}
          //  modules={[Navigation]}
           className="mySwiper">
          {OffersData.map((item, i) => (
            <SwiperSlide style={{ gap: "10px", color:"black" }}>
            <Box key={i} className={styles.box}>
              <img src={item.img} alt="" />
              <h5 className={styles.heading}>{item.heading}</h5>
              <h6 className={styles.discount}>{item.discount}</h6>
            </Box>
            </SwiperSlide>
          ))}
          </Swiper>
          </Flex>
    </div>
    </Box>
  
)};

export default Offers;
