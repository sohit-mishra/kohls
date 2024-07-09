import { Flex, Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import Summer from '../../assets/Summmer.svg';

export default function Banner() {
    return (
        <>
            <Flex margin={"40px 60px"} padding={"10px"} flexWrap="wrap">
                <Box width={{ base: "100%", md: "calc(50% - 20px)" }} padding={"10px"}>
                    <Text textAlign={"center"} fontSize={"1.5vw"} fontWeight={"bold"}>4 Days Only!</Text>
                    <Image src={Summer} />
                    <Box mt={4}>
                        <Text fontWeight={"bold"} textAlign={"center"}>In store & online.</Text>
                        <Text fontSize={"12px"} textAlign={"center"}>Select styles on sale now through July 11.</Text>
                        <Text color={"green"} fontWeight={"bold"} textAlign={"center"}>And earn Kohl’s Cash while you’re at it!</Text>
                    </Box>
                    <Box mt={4}>
                        <ul style={{ display: "flex", justifyContent: "space-between" ,width:"100%" , textDecoration:"underline"}}>
                            <li>Home</li>
                            <li>Beauty</li>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Kids</li>
                            <li>$10 & Under</li>
                        </ul>
                    </Box>
                </Box>
                <Box width={{ base: "100%", md: "calc(50% - 20px)" }} padding={"10px"} mt={{ base: 4, md: 0 }}>
                    <Box position="relative">
                        <Image src='https://media.kohlsimg.com/is/image/kohls/hp-240708-hero-kitchen-xl-v2' />
                        
                        <Box position="absolute" top="62px" left="24px" bg="red" color="#fff" padding="10px" borderRadius="50%" width="150px" height="150px" display="flex" alignItems="center" justifyContent="center" fontSize={"30px"}>
                            30% off
                        </Box>
                        <Box position="absolute" top="80px" left="12px" transform="rotate(354deg)" bg="#c1d82f" color="#000" padding="0 20px">
                            Summer Cyber Deal
                        </Box>
                        <Box position="absolute" top="214px" left="40px" color="#fff"  borderRadius="10px" width={"140px"}>
                            Kitchen appliances Select Styles
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    );
}
