import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function RedComponent({ href, children ,backgroundColor}) {
  return (
    <Box bgColor={backgroundColor} borderRadius={5} padding={3} margin={2} width={"100%"}>
      <Link to={href}>
        <Center color="#fff" fontSize={22}>{children}</Center>
      </Link>
    </Box>
  );
}
