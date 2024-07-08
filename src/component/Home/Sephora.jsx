import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sephora({ image, title, offer, describe, link }) {
    return (
        <Box
            bgImage={`url(${image})`}
            bgSize="cover"
            bgPosition="center"
            width="320px"
            height="520px"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            padding="20px"
            boxShadow="lg"
            color="#000"
            textAlign="center"
        >
            <Heading size="md" mb="2" fontSize={"2.5vw"}>
                {offer}
            </Heading>
            <Heading size="sm" mb="2">
                {title}
            </Heading>
            <Text mb="4">{describe}</Text>
            <Link to={link} style={{ color: '#000', textDecoration: 'underline' }}>
                Shop Now
            </Link>
        </Box>
    );
}
