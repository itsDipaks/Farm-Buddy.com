import { Box, Heading, Stack,Text,Flex } from '@chakra-ui/react'
import React from 'react'
import styles from "../DayDeals/daydeals.module.css"
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle"

const HealthArticlesData=[
  {
      img:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06124619/10-2.jpg?dim=1440x0",
      heading:"Benefits of Shalabhasana (Locus Post) and How to Do it By Dr. Himani Bist"
  },
  {
      img:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/12104633/1-8.jpg?dim=1440x0",
      heading:"How Excercise Can hlep You To Deal With Breast Cancer"
  },
  {
      img:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/12/06111050/11-1.jpg?dim=1440x0",
      heading:"Benefits of Bhastrika Pranayama and How to Do it By Dr. Ankit Sankhe"
  },
  {
      img:"https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/11/06122433/28.jpg?dim=1440x0",
      heading:"Goji Berry: Use, Effects and How to Do it By Dr. Ankit Sankhe"
  },
  {
      img:"https://blog-images.pharmeasy.in/2022/09/29115156/20.jpg?dim=1440x0",
      heading:"Benefits of Gomukhasana (Cow Face Pose) and How to Do it By Dr. Himani"
  },
  {
      img:"https://blog-images.pharmeasy.in/2022/09/28202427/10.jpg?dim=1440x0",
      heading:"Benefits of Bhramari Pranayama and How to Do it By Dr. Himani Bisht"
  },
  {
      img:"https://blog-images.pharmeasy.in/2022/09/29124727/19.jpg?dim=1440x0",
      heading:"Benefits of Sudarshan Kriya and How to Do it By Dr. Ankit Sankhe"
  },
  {
      img:"https://blog-images.pharmeasy.in/2022/09/29122712/12.jpg?dim=1440x0",
      heading:"Benefits of Sukhasana (Easy Pose) and How to Do it By Dr. Himani Bisht"
  },
  {
      img:"https://blog-images.pharmeasy.in/2022/09/29121435/11.jpg?dim=1440x0",
      heading:"Benefits of Bhastrika Pranayama and How to Do it By Dr. Ankit Sankhe"
  },
  {
      img:"https://blog-images.pharmeasy.in/2022/09/29120043/9.jpg?dim=1440x0",
      heading:"Benefits of Ustrasana (Camel Pose) and How to Do it By Dr. Ankit Sankhe"
  }
]


const HealthArticles = () => {
  
      const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
      const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
      const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (


    <Box p={5} >
   <Heading fontSize="26px" textAlign="left" marginTop="50px" color={"#30363C"} fontFamily={'sans-serif'}>
Health Articles
</Heading>
<p style={{fontWeight:"500",color:"#6d757c",textAlign:"left",marginTop:"5px"}}>
Get up-to-date on our latest health updates
</p>
       
     <Flex justifyContent={"space-between"} p={5}>
   

            <Swiper 
                    slidesPerView={isBigScreen ? 5 : isTablet ? 2 : isMobile ? 1 : 5}
                    spaceBetween={0}

                    loop={true}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {HealthArticlesData.map((el,i) => (
                <SwiperSlide style={{ gap: "10px", color:"black" }}>
                <Box width="230px" height="280px" key={i} cursor="pointer"
                border="1px solid #e8e6e6" borderRadius="7px" 
                className={styles.img}>
                    <img style={{width:"230px", height:"173.75px",borderTopLeftRadius:"5px",
                    borderTopRightRadius:"5px"}} src={el.img} alt=''/>
                    <Box width="230px" padding="16px">
                        <p style={{fontWeight:"500",textAlign:"left",color:"#4f4d4a"}}>{el.heading}</p>
                    </Box>
                </Box>
                </SwiperSlide>
            ))}
            </Swiper>
            </Flex>
    </Box>
  )
}

export default HealthArticles