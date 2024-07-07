import React from 'react';
import RedComponent from '../component/Home/RedComponent';
import BlackComponent from '../component/Home/BlackComponent';
import BabiesComponent from '../component/Home/BabiesComponent';
import Markdown from '../component/Home/Markdown';
import { Box, Flex, Heading } from '@chakra-ui/react';
import TodayBuy from '../component/Home/TodayBuy';

export default function Home() {
  var menuItems = [
    { "label": "Under $10", "link": "/under-10" },
    { "label": "Under $20", "link": "/under-20" },
    { "label": "Home", "link": "/" },
    { "label": "Women", "link": "/women" },
    { "label": "Men", "link": "/men" },
    { "label": "Kids", "link": "/kids" }
  ];

  const categories = [
    { label: "Strollers", link: "/strollers" },
    { label: "Car Seats", link: "/car-seats" },
    { label: "Nursery Furniture", link: "/nursery-furniture" },
    { label: "Activity", link: "/activity" },
    { label: "Nursing & Feeding", link: "/nursing-feeding" },
    { label: "Baby Gifts", link: "/baby-gifts" }
  ];

  const menuItems2 = [
    { label: "$10 & Under", link: "/under-10" },
    { label: "Home", link: "/" },
    { label: "Women", link: "/women" },
    { label: "Men", link: "/men" },
    { label: "Boys", link: "/boys" },
    { label: "Girls", link: "/girls" }
  ];

  const Catlog = [
    { label: "Baby", link: "/catalog/baby" },
    { label: "Kids' Shoes", link: "/catalog/kids-shoes" },
    { label: "Active", link: "/catalog/active" },
    { label: "Women", link: "/catalog/women" },
    { label: "Men", link: "/catalog/men" },
    { label: "Home", link: "/catalog/home" },
    { label: "Electronics", link: "/catalog/electronics" },
    { label: "Shoes & Sandals", link: "/catalog/shoes-sandals" }
  ];

  return (
    <div>

      <Flex padding={"0 20px"}>
        {menuItems.map((item, index) => (
          <RedComponent key={index} href={item.link} backgroundColor="red">
            {item.label}
          </RedComponent>
        ))}
      </Flex>



      <BabiesComponent />



      <Flex padding={"0 20px"}>
        {categories.map((item, index) => (
          <RedComponent key={index} href={item.link} backgroundColor="#5e2d91">
            {item.label}
          </RedComponent>
        ))}
      </Flex>


      <TodayBuy/>

      <Heading textAlign={'center'} padding={4}>What are you shopping for today?</Heading>
      <Flex padding={"0 20px"} flexWrap={"wrap"}>
        {Catlog.map((item, index) => (
          <BlackComponent key={index} href={item.link} backgroundColor="black">
            {item.label}
          </BlackComponent>
        ))}
      </Flex>

      <Markdown/>


      <Flex padding={"0 20px"}>
        {menuItems2.map((item, index) => (
          <RedComponent key={index} href={item.link} backgroundColor="red">
            {item.label}
          </RedComponent>
        ))}
      </Flex>

    </div>
  );
}
