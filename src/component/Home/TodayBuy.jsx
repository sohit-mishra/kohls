import { Center, Flex, Box, Text, position } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TodayBuy() {
  return (
    <Center margin={"100px auto"} display={"flex"} flexDirection={"column"} >
    <Flex alignItems="center" justifyContent="center" color={"#fff"} position="relative" width="100%">
      <Box bgColor={"#bd0f1b"} width={"250px"} padding={3}>
        <Text fontSize={"3.5vw"} textAlign={"center"} fontWeight="bold">RED</Text>
      </Box>
      <Box bgColor={"#8e1537"} width={"250px"} padding={3} position="relative">
        <Text
          as="span"
          bgColor="#eb0845"
          color="#fff"
          padding="5px 18px"
          position="absolute"
          top="0"
          left="50%"
          transform="translate(-50%, -50%) rotate(354deg)"
          textTransform="uppercase"
          fontSize="26px"
        >
          Today's
        </Text>
        <Text fontSize={"3.5vw"} textAlign={"center"} position="relative">
          HOT
        </Text>
      </Box>
      <Box bgColor={"#eb0845"} width={"250px"} padding={3}>
        <Text fontSize={"3.5vw"} textAlign={"center"} fontWeight="bold">BUYS</Text>
      </Box>
    </Flex>

    <Link to="/ShopNow" style={{ margin: 20, textDecoration: 'underline', textAlign: 'center', color: '#333' }}>Shop Now</Link>
  </Center>
  )
}
