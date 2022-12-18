import React from 'react'
import { Flex, Hide, Highlight, Image, Show, Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Faq from './Faq';
import { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

function Lab() {

  return (
    <>
    <Hide breakpoint='(max-width: 600px)'>
    <Flex margin='auto' w='80%' justifyContent={'space-evenly'}>
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

<Faq/>
<Carousel show={3.5} slide={3} swiping={true}>
    <Highlight color="#2d66c3">We love Web 🌐</Highlight>
    <Highlight color="#f44336">We love Developers 👩🏻‍</Highlight>
    <a target="_blank" href="https://github.com/trendyol/">
        <Highlight color="#d53f8c">This is our github</Highlight>
    </a>
    <a target="_blank" href="https://trendyol.com/">
        <Highlight color="#f27a1a">This is our website</Highlight>
    </a>
</Carousel>
    </>
  )
}


export default Lab