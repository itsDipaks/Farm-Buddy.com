import { Box, Heading, Image, Stack, Text,Flex } from '@chakra-ui/react'
import React from 'react'
import styles from "./daydeals.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

import "swiper/css/bundle"


const DayDealsData=[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I48459/sirona-feminine-cramp-relief-patch-packet-of-5-s-2-1641788205.jpg?dim=1440x0",
        heading:"Sirona Feminine Cramp Relief Patch Packet Of...",
        oldprice:"₹249.00",
        newprice:"₹224.1",
        off:"10% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/105920/himalaya-liv52-tablets-100s-2-1654078567.jpg?dim=1440x0",
        heading:"Himalaya Liv.52 Tablets - 100's",
        oldprice:"₹130.00",
        newprice:"₹104",
        off:"20% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/J51815/liveasy-wellness-apple-cider-vinegar-with-mother-improves-metabolism-500ml-bottle-2-1654165611.jpg?dim=1440x0",
        heading:"Liveasy Wellness Apple Cider Vinegar With...",
        oldprice:"₹649.00",
        newprice:"₹227.15",
        off:"65% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I00596/revital-h-women-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-tablets-1-1654168794.jpg?dim=1440x0",
        heading:"Revital H Women Multivitamin With...",
        oldprice:"₹345.00",
        newprice:"₹293.25",
        off:"15% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-1-1654078754.jpg?dim=1440x0",
        heading:"Volini Pain Relief Gel Tube Of 75 G",
        oldprice:"₹245.00",
        newprice:"₹208.25",
        off:"15% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1440x0",
        heading:"Evion 400mg Strip Of 10 Capsules",
        oldprice:"₹35.90",
        newprice:"₹32.31",
        off:"10% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I32380/livogen-z-captab-15s-2-1656662098.jpg?dim=1440x0",
        heading:"Livogen Z Captab 15's",
        oldprice:"₹79.40",
        newprice:"₹71.46",
        off:"10% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/N15573/pharmeasy-diabetic-orthopedic-men-sandals-fahion-range-3-brown-color-size-10-1-1647418991.jpg?dim=1440x0",
        heading:"Pharmeasy Diabetic & Orthopedic Men...",
        oldprice:"₹1399.00",
        newprice:"₹1049.25",
        off:"25% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/O01875/saffola-fittify-original-peanut-butter-with-omega-3-super-creamy-340g-jar-2-1647515308.jpg?dim=1440x0",
        heading:"Saffola Fittify Original Peanut Butter With...",
        oldprice:"₹220.00",
        newprice:"₹138.6",
        off:"37% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/196208/polybion-czs-tablet-15s-1-1641532585.jpg?dim=1440x0",
        heading:"Polybion Czs Tablet 15's",
        oldprice:"₹92.20",
        newprice:"₹82.98",
        off:"10% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/227623/sevenseas-original-capsule-100s-2-1656662108.jpg?dim=1440x0",
        heading:"Sevenseas Original Capsule 100`s",
        oldprice:"₹319.10",
        newprice:"₹287.19",
        off:"10% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=1440x0",
        heading:"Neurobion Forte Tablet 30's",
        oldprice:"₹34.70",
        newprice:"₹31.23",
        off:"10% OFF"
    }
]

const DayDeals = () => {

    const isBigScreen = useMediaQuery({ query: "(max-width: 100%)" });
    const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 600px)" });


  return (
    
    <Box p={5} >
    <Heading p={5} textAlign={"start"} size='lg' color={"#30363C"} fontFamily={'sans-serif'}>Deals of the Day</Heading>
    <Heading fontSize="14px" bg="#f2923e" color="white" padding="7px 15px" borderRadius="5px">
    13:41 MINS LEFT, HURRY!
 </Heading>
         
   
        
        <Flex justifyContent={"space-between"} p={5}>
        <Swiper 
                    slidesPerView={isBigScreen ? 5 : isTablet ? 3 : isMobile ? 1 : 5}
                    spaceBetween={0}

                    loop={true}
                    loopFillGroupWithBlank={true}

                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
            {DayDealsData.map((el,i) => (
                <SwiperSlide style={{ gap: "10px", color:"black" }}>
                <Box key={i}>
                    <Link to="/productspage">
                    <Box className={styles.img} padding="24px 16px" width="184px" 
                    height="192px" border="1px solid #f5f5f5" borderRadius="10px" 
                    style={{display:"flex", alignItems:"center"}}>
                        <Image style={{borderRadius:"5px",cursor:"pointer"}} src={el.img}/>
                    </Box>
                    </Link>
                    <Heading fontSize="15px" marginTop="12px" fontWeight="600">
                        {el.heading}
                    </Heading>
                    <Stack direction="horizontal" gap="7px" alignItems="center" marginTop="10px">
                        <Heading fontSize="12px" fontWeight="500" color="#6d757c">
                            MRP 
                        </Heading>
                        <Heading fontSize="14px" fontWeight="500" 
                        textDecoration="line-through" color="#6d757c">
                            {el.oldprice}
                        </Heading>
                    </Stack>
                    <Stack direction="horizontal" gap="12px" alignItems="center" marginTop="10px"
                    height="30px">
                        <Heading fontSize="16px" fontWeight="600">
                            {el.newprice} 
                        </Heading>
                        <Heading fontSize="14px" color="#ef7779" fontWeight="800">
                            {el.off}
                        </Heading>
                    </Stack>
                </Box>
                </SwiperSlide>
            ))}
            
            </Swiper>
        </Flex>
    </Box>
  )
}

export default DayDeals