import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function SmallComponent({ heading, content, actionText, imageLink, bgColor , number}) {
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bgColor} color={number == 1 ? "#000" : "#fff" } width={"100%"} margin={"10px 10px"}>
            <Flex alignItems="center">
                <Image width="70px" height={"50px"} src={imageLink} alt="Description of the image" />
                <Box ml={4}>
                    <Heading size="md" fontSize={"15px"}>{heading}</Heading>
                    <Text mt={2} fontSize={"12px"}>{content}</Text>
                    <Link to="/shop" Size={"10px"}>{actionText}</Link>
                </Box>
            </Flex>
        </Box>
    );
}
