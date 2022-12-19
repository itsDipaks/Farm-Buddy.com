import { Box, color, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useMediaQuery } from '@chakra-ui/react'
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "swiper/css/navigation";

import "swiper/css/bundle";

const BrandsData = [
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/e642f1b8237-Glucon_D.jpg?dim=1440x0",
    heading: "Glucon-D",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0",
    heading: "Himalaya",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0",
    heading: "Sugerfree",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/1151b7d7c0e-LivEasy-min.png?dim=1440x0",
    heading: "LivEasy",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/201210bc27d-App_Huggies.jpg?dim=1440x0",
    heading: "Huggies",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/d6726e69b22-04.jpg?dim=1440x0",
    heading: "Wellbeing Nutrition",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/c9fc0cd6ef6-Revital-min.png?dim=1440x0",
    heading: "Revital",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/e8a5cabe9f3-Volini-min.png?dim=1440x0",
    heading: "Volini",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/c774461a093-Pentasure_App.jpg?dim=1440x0",
    heading: "Pentasure",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/587eeb1dcb8-App_Sirona.jpg?dim=1440x0",
    heading: "Sirona",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/2318a0e5326-App_Abzorb.jpg?dim=1440x0",
    heading: "Abzorb",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/2f3e832e341-Everherb-min.png?dim=1440x0",
    heading: "EverHerb",
  },
  {
    img: "https://cms-contents.pharmeasy.in/carousel_item/40facc7fa28-Pharmeasy-App.jpg?dim=1440x0",
    heading: "Pharmeasy",
  },
];
// single media query with no options

const Brands = () => {
  
  const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
  const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box p={5}>
      <Heading
        p={5}
        textAlign={"start"}
        size="lg"
        color={"#30363C"}
        fontFamily={"sans-serif"}
      >
        Featured Brands
      </Heading>

      <Text
        pl={5}
        textAlign={"start"}
        size="md"
        color={"#30363C"}
        fontFamily={"sans-serif"}
      >
        Pick From Our Favourite Brands
      </Text>

      <Flex justifyContent={"space-between"} p={5} w={"100%"}>
        <Swiper
          slidesPerView={isBigScreen ? 7 : isTablet ? 3 : isMobile ? 2 : 7}
          spaceBetween={0}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {BrandsData.map((el, i) => (
            <SwiperSlide style={{ gap: "10px", color: "black" }}>
              <Link to='/productspage'>
              <Box key={i} width="180px" height="212px">
                <img
                  style={{
                    borderRadius: "5px",
                    width: "180px",
                    height: "172px",
                    cursor: "pointer",
                  }}
                  src={el.img}
                  alt=""
                />
                <Box width="180px">
                  <p style={{ fontWeight: "500" }}>{el.heading}</p>
                </Box>
              </Box>
                </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Box>
  );
};

export default Brands;
