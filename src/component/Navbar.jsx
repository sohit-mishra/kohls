import { Box, Center, Text, Link as ChakraLink, Image, InputGroup, InputLeftElement, Input, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, QuestionOutlineIcon, SearchIcon, StarIcon } from '@chakra-ui/icons';

import ImageLogo from '../assets/logo.svg';
import Cart from '../assets/cart.svg';
import Account from '../assets/account.jpg';
import { CiDollar } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";


export default function Navbar() {
    return (
        <Box as="header" >
            <Center bg="#ebebeb">
                <Text padding={2} fontSize="1vw" color="red">
                    <b>Free shipping</b> with <b>$49</b> purchase.{' '}
                    <ChakraLink as={Link} to="/" textDecoration="underline">
                        Details
                    </ChakraLink>{' '}
                    <b>Fast & free</b> store pickup!{' '}
                    <ChakraLink href="" textDecoration="underline">
                        Details
                    </ChakraLink>{' '}
                    <b>Earn $10 Kohl’s Cash®</b> for every $50 spent.{' '}
                    <ChakraLink as={Link} to="/" textDecoration="underline">
                        Details
                    </ChakraLink>
                </Text>
            </Center>


            <Flex justifyContent="space-between" alignItems="center">
                <Flex>
                    <Image src={ImageLogo} alt="Logo" padding={2}/>
                    <InputGroup width="500px" ml={4}>
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input type='search' placeholder="What are you looking for today?" borderColor={'black'} />
                    </InputGroup></Flex>
                <Flex alignItems="center">
                    <Box padding={2}><Image src={Account} alt="Account" /><Text>Sign-In</Text></Box>
                    <Box paddingLeft={2} paddingRight={2}><Image src={Cart} alt="Cart" /><Text>$0.00</Text></Box>
                </Flex>
            </Flex>


            <Flex justifyContent="space-between" alignItems="center" borderTop={"1px solid #a8a8a8"} borderBottom={"1px solid #a8a8a8"}>
                <Flex alignItems="center" padding={2}>
                    <HamburgerIcon fontSize={22}/>
                    <Text padding={2}>Shop By Category</Text>
                    <StarIcon fontSize={22}/>
                    <Text padding={2}>MyStore: Select Store</Text>
                </Flex>
                <Flex alignItems="center">
                    <CiCreditCard2 fontSize={26}/>
                    <Text padding={2}>Kohl's Card</Text>
                    <CiDollar fontSize={26}/>
                    <Text padding={2}>Kohl's Coupons</Text>
                    <QuestionOutlineIcon fontSize={26}/>
                    <Text padding={2}>Help</Text>
                </Flex>
            </Flex>
        </Box>
    );
}
