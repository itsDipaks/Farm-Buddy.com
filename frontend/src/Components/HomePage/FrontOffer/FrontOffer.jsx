import { Box, color, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";


 const FrontOfferData=[
  {
      img:"https://cdn01.pharmeasy.in/dam/banner/banner/760565c68b5-VIBES27.jpg",
  },
  {
      img:"https://cdn01.pharmeasy.in/dam/banner/banner/cb2f371c006-yayy550_bau.jpg"
  }
 
]

const FrontOffer = () => {
  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box p={2}>
    
     <Flex justifyContent={"space-arround"} p={2}>
       <Swiper 
           slidesPerView={isBigScreen ? 2 : isTablet ? 2 : isMobile ? 2 : 2}
           spaceBetween={20}
           width={"100%"}

           loop={true}
           loopFillGroupWithBlank={true}

           navigation={false}
           modules={[Navigation]}
           className="mySwiper">
        {FrontOfferData.map((el, i) => (
          <SwiperSlide style={{ gap: "10px", color: "black" }}>
          <img
            style={{
              borderRadius: "15px",
              width: "527px",
              height: "227px",
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
  );
};

export default FrontOffer;
