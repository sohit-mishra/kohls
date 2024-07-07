import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function BlackComponent({ href, children ,backgroundColor}) {
  return (
    <Box bgColor={backgroundColor} borderRadius={5} padding={"20px 60px"} margin={"10px auto"} width={{ base: "100%", sm: "calc(100% / 2 - 16px)", md: "calc(100% / 3 - 16px)", lg: "calc(100% / 4 - 16px)" }}>
      <Link to={href}>
        <Center color="#fff" fontSize={22}>{children}</Center>
      </Link>
    </Box>
  );
}
