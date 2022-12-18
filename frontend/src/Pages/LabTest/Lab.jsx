import React from 'react'
import { Flex, Hide, Highlight, Image, Show, Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Faq from './Faq';
import { useState } from 'react';
import Footer from '../../Components/HomePage/Footer/Footer';
// import { Carousel } from '@trendyol-js/react-carousel';
import { Grid, GridItem } from '@chakra-ui/react'
import Texttt from './Texttt';
// import { Carousel } from '@trendyol-js/react-carousel';
import Navbar from './../Navbar/Navbar';
import Carousel from './Carousel';

function Lab() {

  return (
    <>
    <Navbar/>
    <Hide breakpoint='(max-width: 600px)'>
    <Flex pt={'10'} margin='auto' w='96%' justifyContent={'space-evenly'}>
        <Flex pt={'6'} pl='10' pr='12'  textAlign='center' height={'20'}   borderRadius={'50px'} border={'1px solid #10847e'}>
            <Image h='8' src='https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg'></Image>
            <Text ml='4' as='b' color='grey' >
             All Tests
            </Text>
            </Flex>
        <Flex pt={'4'} pl='12' pr='14'  textAlign='center' height={'20'}   borderRadius={'50px'} border={'1px solid #10847e'}>
            <Image h='8' src='https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg'></Image>
            <Text ml='4' as='b' color='grey' >
            Health <br /> Packages
            </Text>
            </Flex>
        <Flex pt={'4'} pl='12' pr='14' textAlign='center' height={'20'}  borderRadius={'50px'} border={'1px solid #10847e'}>
            <Image h='8' src='https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg'></Image>
            <Text ml='0' as='b' color='grey' >
            Upload <br /> Prescription
            </Text>
            </Flex>
        <Flex pt={'6'}  pl='12' pr='14'  textAlign='center' height={'20'}  borderRadius={'50px'} border={'1px solid #10847e'}>
            <Image h='8' src='https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg'></Image>
            <Text ml='4' as='b' color='grey' >
             Book On Call
            </Text>
            </Flex>
    </Flex>

</Hide>

<Show breakpoint='(max-width: 600px)'>
<Box justifyContent={'space-evenly'}>
        <Flex pt={'6'} pl='12'  textAlign='center' height={'20'} borderRadius={'50px'} border={'1px solid #10847e'}>
            <Image h='8' src='https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg'></Image>
            <Text ml='4' as='b' color='grey' >
             All Tests
            </Text>
            </Flex>
        <Flex pt={'4'} pl='12'  textAlign='center' height={'20'}   borderRadius={'50px'} border={'1px solid #10847e'}>
            <Image h='8' src='https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg'></Image>
            <Text ml='4' as='b' color='grey' >
            Health <br /> Packages
            </Text>
            </Flex>
        <Flex pt={'4'} pl='12'  textAlign='center' height={'20'}   borderRadius={'50px'} border={'1px solid #10847e'}>
            <Image h='8' src='https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg'></Image>
            <Text ml='0' as='b' color='grey' >
            Upload Prescription
            </Text>
            </Flex>
        <Flex pt={'6'} pl='10'  textAlign='center' height={'20'}  borderRadius={'50px'} border={'1px solid #10847e'}>
            <Image h='8' src='https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg'></Image>
            <Text ml='4' as='b' color='grey' >
             Book On Call
            </Text>
            </Flex>
    </Box>
</Show>

<Flex borderRadius={'5px'} pt='12px' pl='10px' pb='10px' bg='#8573e1' mt='10'  ml='20' mr='20' >
<Image pl='10' src='https://assets.pharmeasy.in/web-assets/dist/3864b471.svg' ></Image>
<Text pl='40px' color='white' >Save 5% on allopathic medicined, 50% on lab texts & get FREE delivery with PLUS membership</Text>
</Flex>

<Texttt/>
<Faq/>

<Carousel/>

<Box p='20'>
<Grid templateColumns='repeat(4, 1fr)' gap={6}>
  <GridItem p='5'  w='100%'>
    <Image src='https://assets.pharmeasy.in/web-assets/dist/9407515b.svg?dim=0x72&dpr=1.5&q=100'></Image>
    <Text lineHeight='80px' as='b' >Trusted Labs</Text>
    <Text color='#939ba7' >Every test booked via PharmEasy is conducted by certified labs that are 100% verified and trustworthy.</Text>
  </GridItem>
  <GridItem p='5'  w='100%'>
    <Image src='https://assets.pharmeasy.in/web-assets/dist/0105ddc1.svg?dim=0x72&dpr=1.5&q=100'></Image>
    <Text lineHeight='80px' as='b' >Home Visit</Text>
    <Text color='#939ba7' >With PharmEasy, you get a FREE sample pick-up* by professional phlebotomists from your home or preferred location.</Text>
  </GridItem>
  <GridItem p='5'  w='100%'>
    <Image src='https://assets.pharmeasy.in/web-assets/dist/fc71c500.svg?dim=0x72&dpr=1.5&q=100'></Image>
    <Text lineHeight='80px' as='b' >Accurate Report</Text>
    <Text color='#939ba7' >Once collected, samples will be sent to labs for processing. Detailed reports will be shared within a stipulated timeline.
</Text>
  </GridItem>
  <GridItem p='5'  w='100%'>
    <Image src='https://assets.pharmeasy.in/web-assets/dist/4a11ac5a.svg?dim=0x72&dpr=1.5&q=100'></Image>
    <Text lineHeight='80px' as='b' >Up to 70% OFF</Text>
    <Text color='#939ba7' >At PharmEasy, you save at every step! On diagnostic tests, get up to 70% OFF on various tests and test packages.
</Text>
  </GridItem>
</Grid>
</Box>

{/* <Carousel show={3.5} slide={3} swiping={true}>
    <Highlight color="#2d66c3">We love Web 🌐</Highlight>
    <Highlight color="#f44336">We love Developers 👩🏻‍</Highlight>
    <a target="_blank" href="https://github.com/trendyol/">
        <Highlight color="#d53f8c">This is our github</Highlight>
    </a>
    <a target="_blank" href="https://trendyol.com/">
        <Highlight color="#f27a1a">This is our website</Highlight>
    </a>
</Carousel> */}
<Footer/>
    </>
  )
}


export default Lab