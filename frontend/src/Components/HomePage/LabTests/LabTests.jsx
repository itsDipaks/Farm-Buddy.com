import { Box, color, Flex, Heading, Text,Stack,Image } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./labtests.module.css";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/bundle";

const data = [
  {
    off: "60% OFF",
    offBG: "#ef7779",
    offColor: "white",
    heading: "Post Prandial Blood Sugar (PPBS)",
    desc: "Measures your blood sugar levels after last meal",
    oldPrice: "₹500",
    newPrice: "₹199",
    bg: "#f1fafe",
    image:
      "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/37ebeeb109543b779c568444f7ce84be.png?dim=96x0",
  },
  {
    off: "64% OFF",
    offBG: "#ef7779",
    offColor: "white",
    heading: "Comprehensive Full Body Checkup with Vitamin D & B12",
    desc: "Measures Vitamin D & B12 levels and other essential parametersl",
    oldPrice: "₹4199",
    newPrice: "₹1499",
    bg: "#fdf7e8",
    image:
      "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/01abb07c5b233f90b2cd0b64a7ebccee.png?dim=96x0",
  },
  {
    off: "33% OFF",
    offBG: "#ef7779",
    offColor: "white",
    heading: "HbA1c (Glycosylated Hemoglobin)",
    desc: "Gives avg. sugar levels of 3 months to monitor diabetes",
    oldPrice: "₹600",
    newPrice: "₹399",
    bg: "#f1fafe",
    image:
      "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/7e6ed82a2c373d1db2ea81a09e2fbb4c.png?dim=96x0",
  },
  {
    off: "59% OFF",
    offBG: "#ef7779",
    offColor: "white",
    heading: "Women's Master Checkup with Cancer & Arthritis Screening",
    desc: "Measures Vitamins, Arthritis & Cancer screening and other essential parameters",
    oldPrice: "₹4990",
    newPrice: "₹1999",
    bg: "#fdf7e8",
    image:
      "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/37ebeeb109543b779c568444f7ce84be.png?dim=96x0",
  }
];

const LabTests = () => {

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
      Frequently Booked Lab Tests
    </Heading>

  

    <Flex justifyContent={"space-between"} p={5} w={"100%"}>
      <Swiper
        slidesPerView={isBigScreen ? 4 : isTablet ? 2 : isMobile ? 2 : 4}
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        // navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((el, i) => (
          <SwiperSlide style={{ gap: "10px", color: "black" }}>
          <Box
            className={styles.testBox}
            key={i}
            width="322px"
            height="294px"
            bg={el.bg}
            padding="15px"
            borderRadius="7px"
            position="relative"
          >
            <Stack textAlign="left" gap="10px">
              <Heading
                fontSize="15px"
                bg={el.offBG}
                padding="5px"
                color={el.offColor}
                borderRadius="5px"
                width="80px"
              >
                {el.off}
              </Heading>
              <Heading fontSize="18px">{el.heading}</Heading>
              <p style={{ color: "#6d757c", fontSize: "14px" }}>{el.desc}</p>
              <Heading
                fontSize="18px"
                color="#6d757c"
                textDecoration="line-through"
                position="absolute"
                bottom="60px"
              >
                {el.oldPrice}
              </Heading>
              <Stack direction="horizontal" justify="space-between">
                <Heading fontSize="22px" position="absolute" bottom="20px">
                  {el.newPrice}
                </Heading>
                <Image
                  width="96px"
                  height="96px"
                  src={el.image}
                  marginLeft="211px"
                  position="absolute"
                  bottom="0px"
                />
              </Stack>
            </Stack>
          </Box>
          </SwiperSlide>
        ))}
        </Swiper>
      </Flex>
    </Box>
  );
};

export default LabTests;
