import React from 'react';
import { Flex, Image, Heading, Text, Link, Box } from '@chakra-ui/react';

export default function Card({ img, heading, describe, link, number }) {
    return (
        <Flex
            direction="column"
            align="flex-start"
            padding="10px"
            boxShadow="md"
            borderRadius="md"
            width="100%"
            margin="30px auto"
            maxWidth="300px"
            height="520px"
            border="1px solid #cbcbcb"
            position="relative"
            overflow="hidden"
            bgColor={number % 2 === 0 ? "#fff" : number === 3 ? "#c9474b" : "#000"}
        >
            <Box display="flex" alignItems="center" justifyContent="flex-start" height="300px" width="100%">
                <Image
                    src={`../src/assets/${img}`}  
                    alt={heading}

                    width={number === 3 ? "300px" : number === 1 ? "160px" : "100%"}
        
                    height="auto"
                    maxHeight="100%"
                    objectFit="cover" 
                    padding={3}
                />
            </Box>

            <Box position="absolute" bottom="0" width="100%" padding="10px 10px 30px" bgColor={number % 2 === 0 ? "#fff" : ""}   color={number % 2 === 0 ? "#000" : "#fff"} boxShadow="md">
                <Heading size="md" mt="4" fontSize="32px">{heading}</Heading>
                <Text mt="2" mb="4" textAlign="left" fontSize="18px">{describe}</Text>
                <Link
                    href={link}
                    color={number % 2 !== 0 ? "#fff" : "#000"}
                    fontWeight="bold"
                    textDecoration="underline"
                >
                    Learn More
                </Link>
            </Box>
        </Flex>
    );
}
