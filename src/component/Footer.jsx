import React from 'react';
import { Flex, Box, Text, Image, Button } from '@chakra-ui/react';
import { FaFacebook, FaPinterestP, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

import "../Footer.css";

export default function Footer() {
  return (
    <Flex justify="space-around" bg="#e1d4c3" p="20px" color="black" flexDirection={'column'} width={"100%"} padding={"20px 60px"} alignItems={"center"}>
      <Box>
        <IoIosArrowUp
          style={{
            textAlign: 'center',
            display: 'block',
            margin: '4px auto'
          }}
        />
        <Text cursor="pointer" textAlign={"center"}>Back To TOP</Text>
      </Box>

      <Flex width={"80%"} padding={" 0 20px"}>
        <Flex mb="20px" width={"50%"} alignItems={"center"}>
          <Text fontWeight="bold" fontSize={"18px"} width={"100px"} padding={"10px 0"}>Connect with us</Text>
          <FaFacebook fontSize={"28px"} style={{ margin: "10px" }} />
          <FaPinterestP fontSize={"28px"} style={{ margin: "10px" }} />
          <FaYoutube fontSize={"28px"} style={{ margin: "10px" }} />
          <FaInstagram fontSize={"28px"} style={{ margin: "10px" }} />
        </Flex>

        <Flex width={"50%"
        } alignItems={"center"} justifyContent={"space-around"} borderLeft={"1px solid #c1c1c1"}>
          <Text>Get Our App</Text>
          <Image src="https://media.kohlsimg.com/is/image/kohls/AppStore-qr_code2020?scl=1&fmt=png8&icid=ft-connect-learn-more" alt="Kohl's App" width="100px" height=
            "100px" />
          <Text width={"200px"}>Scan the code to download the Kohl's App today<br /><Button bgColor="#000" color={"white"}>Learn More</Button></Text>

        </Flex>
      </Flex>

      <hr style={{ width: '80%', display: 'block', margin: '20px auto' }} />
      <Box display="flex" alignItems={"flex-start"}>
        <ul>
          <Text fontWeight="bold">CUSTOMER SERVICE </Text>
          <li>Contact Us</li>
          <li>Order Status</li>
          <li>Coupon Eligibility</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Rebates</li>
          <li>Recalls</li>
          <li>Product Guides</li>
          <li>Kohl’s Cash</li>
        </ul>

        <ul>
          <Text fontWeight="bold">SHOP KOHL’S</Text>
          <li>Today’s Ad</li>
          <li>Get 15% off when you sign up for our emails</li>
          <li>Site Map</li>
          <li>Store Locator</li>
          <li>Gift Cards</li>
          <li>Kohl’s Coupons</li>
          <li>Kohl’s Blog</li>
        </ul>

        <ul>
          <Text fontWeight="bold">MY ACCOUNT</Text>
          <li>Sign In</li>
          <li>My Account</li>
          <li>Update Password</li>
          <li>Order Status</li>
          <li>Rewards Account</li>
          <li>Gift Card Balance & Kohl’s Cash Balance</li>
        </ul>

        <ul>
          <Text fontWeight="bold">KOHL’S CARD & REWARDS</Text>
          <li>Kohl's Card</li>
          <li>Kohl's Rewards</li>
          <li>Pay & Manage My Kohl's Card</li>
          <li>Pay & Manage My Kohl's Rewards® Visa</li>
          <li>Apply for a Kohl’s Card</li>
          <li>See if you prequalify</li>
        </ul>

        <ul>
          <Text fontWeight="bold">ABOUT KOHL’S</Text>
          <li>Community</li>
          <li>Diversity & Inclusion</li>
          <li>Sustainability</li>
          <li>Careers</li>
          <li>Apply for Seasonal Jobs</li>
          <li>Associate Services</li>
          <li>Investor Relations</li>
          <li>Affiliate Program</li>
          <li>Advertise with Us</li>
        </ul>
      </Box>

      <hr width={"80%"} display={"block"} />
      <Box textAlign={"center"} margin={3}>
        <Text fontSize={"12px"}>© 2024 Kohl’s, Inc.</Text>

        <Text fontSize={"12px"}>KOHL’S® and Kohl’s brand names are trademarks owned by KIN, Inc.</Text>
        <Text fontSize={"12px"}>All rights reserved.</Text>
        <Text fontSize={"14px"} padding={4}>Android, Google Play and the Google Play logo are trademarks of Google Inc. App Store is a service mark of Apple Inc.</Text>
        <Text fontSize={"12px"}>LEGAL NOTICES, PRIVACY POLICY, CALIFORNIA PRIVACY POLICY, CONSUMER HEALTH DATA PRIVACY POLICY, DO NOT SELL OR SHARE MY PERSONAL INFORMATION, CALIFORNIA TRANSPARENCY IN SUPPLY CHAINS ACT.</Text>

      </Box>









    </Flex>
  );
}
