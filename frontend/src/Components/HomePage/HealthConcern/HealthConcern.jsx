import { Box, color, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle"


const HealthConcernData = [
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/10dfe8c8aa7-HealthCheckups.jpg?dim=256x0",
        heading:"Healths"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/6c5479c6c0c-Vitamins.jpg?dim=256x0",
        heading:"Vitamins"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0",
        heading:"Diabets"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/c507b2563fd-thyroid.png?dim=256x0",
        heading:"Thyroid"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/eeb3fe3251f-WomenCare.jpg?dim=256x0",
        heading:"Women Care"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/355e9b77fb5-FeverInfection.jpg?dim=256x0",
        heading:"Fever Infection"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/6e78a241e48-CovidCare.jpg?dim=256x0",
        heading:"Covid Care"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/a953829ca96-Heart.jpg?dim=256x0",
        heading:"Heart"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/94616a36a9a-Lifestyle.jpg?dim=256x0",
        heading:"Lifestyle"
    },
    {
        img:"https://cms-contents.pharmeasy.in/homepage_top_categories_images/64444851b5e-BoneHealth.jpg?dim=256x0",
        heading:"BoneHealth"
    }
]

const HealthConcern = () => {

    const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
      const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
      const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    

    <Box p={5} >
       <Heading p={5} textAlign={"start"} size='lg' color={"#30363C"} fontFamily={'sans-serif'}>Lab Test By Health Concern</Heading>
            <Text pl={5} textAlign={"start"} size='md' color={"#30363C"} fontFamily={'sans-serif'}>Powered By Thyrocare</Text>
          
        <Flex justifyContent={"space-between"} p={5}>
         <Swiper 
                    slidesPerView={isBigScreen ? 6 : isTablet ? 3 : isMobile ? 2 : 6}
                    spaceBetween={0}

                    loop={false}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {HealthConcernData.map((el,i) => (
                <SwiperSlide style={{ gap: "10px", color:"black" }}>
                <Box key={i} width="180px" height="212px">
                    <img style={{borderRadius:"5px",width:"180px", height:"172px",cursor:"pointer"}} src={el.img}
                    alt=''/>
                    <Box width="180px">
                        {/* <p style={{fontWeight:"500"}}>{el.heading}</p> */}
                    </Box>
                </Box>
                </SwiperSlide>
            ))}

            </Swiper>
        </Flex>
    </Box>
  )
}

export default HealthConcern