
import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle"


const PaymentOffersData = [
  {
    img:"https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0",
},
{
    img:"https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0"
},
{
  img:"https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0",
},
{
  img:"https://cdn01.pharmeasy.in/dam/banner/banner/0c5c9ec6841-mobikwik.jpg?dim=1440x0"
},
{
  img:"https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1440x0",
}
]

const PaymentOffers = () => {

  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    

    <Box p={5} >
       <Heading p={5} textAlign={"start"} size='lg' color={"#30363C"} fontFamily={'sans-serif'}>Payment Offers</Heading>
            
          
        <Flex justifyContent={"space-between"} p={5}>
         <Swiper 
                    slidesPerView={isBigScreen ? 3 : isTablet ? 1 : isMobile ? 1 : 3}
                    spaceBetween={20}

                    loop={true}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {PaymentOffersData.map((el, i) => (
              <SwiperSlide style={{ gap: "50px", color:"black" }}>
           <img
             style={{
               borderRadius: "15px",
               width: "527px",
               height: "100px",
               cursor: "pointer",
             }}
             key={i}
             src={el.img}
             alt=""
          />
          </SwiperSlide>
            ))}

            </Swiper>
        </Flex>
    </Box>
  )
}

export default PaymentOffers
