import { Center, Heading ,Text} from '@chakra-ui/react'
import React from 'react'

export default function Paragraph() {
    return (
        <Center display={"flex"} flexDirection={"column"} margin={2} padding={5} fontSize={"15px"}>
            <Text fontSize={"14px"}>*Here are the details: Earn amount of Kohl’s Cash® is approximate and may vary if additional coupons are applied to the purchase transaction. Details.</Text>

            <Text fontSize={"14px"}>PRICE is approximate and may vary if additional coupons or discounts are applied to the purchase transaction. See Kohls.com/details for a full list of included brands.</Text>

            <Heading fontSize={"14px"} margin={4}>PRICES GOOD FOR A LIMITED TIME UNLESS OTHERWISE INDICATED.</Heading>

            <Text textAlign={"center"} fontSize={"14px"}  padding={"10px 30px"}>Pricing, promotions and merchandise availability may vary by location and at Kohls.com. "Sale" prices and percentage savings offered are discounts from Kohl’s Regular (Reg.) or Original (Orig.) prices, and are valid on selected styles of merchandise unless otherwise indicated. The Reg. or Orig. price of an item is the former or future offered price for the item or a comparable item by Kohl’s or another retailer. Actual sales may not have been made at the Reg. or Orig. prices, and intermediate markdowns may have been taken. Orig. prices may not have been in effect during the past 90 days or in all trade areas. Merchandise could be offered at the same or lower "Sale" prices during future promotional events beginning on or after the last day of this advertised event. The following merchandise are excluded from "Entire Stock" promotions in this advertisement: Clearance, Kohl’s Cares® cause or other charitable items, Licensed Team, Sephora at Kohl’s, emerging brands and Kohl’s Online-Exclusive items. In some events, actual savings may exceed the percent savings shown. Kohl’s® and Kohl’s brand names are trademarks of KIN, Inc. ©2024 Kohl’s, Inc. With respect to certain Price Break merchandise featured in this advertisement, the "previous sale" price represents sale prices recently advertised in Kohl’s print advertising. Clearance and Closeout Deal prices represent savings off original prices. Interim markdowns may have been taken. Selection of sizes, colors and styles may be limited per item. Sorry, no price adjustments.
            </Text>
        </Center>
    )
}
