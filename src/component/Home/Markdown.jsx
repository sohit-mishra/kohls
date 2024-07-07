import { Box, Flex, Text, Button, Image } from '@chakra-ui/react'
import React from 'react'
import MarkdownImage from '../../assets/markdown.svg'

export default function Markdown() {
    return (
        <Flex margin={"60px auto"} bgColor={"#bd0f1b"} width={"calc(100% - 60px)"}>
            <Box width={"50%"}>
                <Image src={MarkdownImage} />
                <Text textAlign={"center"} padding={"10px 0 20px"} fontSize={"1.5vw"} color={"#fff"} fontWeight={"bold"}>Don’t miss these clearance & closeout deals!</Text>
            </Box>


            <Box width="50%" textAlign="center" display={"flex"} flexDirection={"column"}>
                <Text fontWeight={"bold"} fontSize={"19px"} margin={2}>
                    SAVE UP TO</Text>
                <Text fontSize="7vw" padding={0} margin={0} >
                    70%
                </Text>
                <Button bgColor="#000" color="#fff" borderRadius="20px">
                    Shop Now
                </Button>
                <Text>
                    Limited quantities available. More sizes and styles available in store.
                </Text>
            </Box>


        </Flex>
    )
}
