import React from 'react';
import Babies from '../../assets/babies.svg';
import BabiesBg from '../../assets/babiesbg.png';
import { Box, Image, Flex, Text, Link} from '@chakra-ui/react';

export default function BabiesComponent() {
  return (
    <Flex margin={"60px 30px"} bgImage={BabiesBg} height={"400px"}>
       <Box width="50%">
          <Image src={Babies} alt="Babies" maxW="100%" height="auto" padding={"60px 80px"}/>
          <Text textAlign={"center"} fontSize={"2vw"} padding={"0px 120px"} fontWeight={"bold"}>Your new destination for everything baby is here!</Text>
          <Text fontSize={"1.5vw"} textAlign={"center"} padding={"0px 120px"}>Online now. Coming to select stores soon.</Text>
          <Link to="/shopnow" textAlign={"center"} display={"block"} textDecoration={"underline"}>Shop Now</Link>
        </Box> 
        <Box>
        
       </Box>
    </Flex>
  );
}
