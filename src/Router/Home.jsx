import React from 'react';
import RedComponent from '../component/Home/RedComponent';
import BlackComponent from '../component/Home/BlackComponent';
import BabiesComponent from '../component/Home/BabiesComponent';
import Markdown from '../component/Home/Markdown';
import { Box, Flex, Heading, Text, Image} from '@chakra-ui/react';
import TodayBuy from '../component/Home/TodayBuy';
import Card from '../component/Home/Card';
import Paragraph from '../component/Home/Paragraph';
import Sephora from '../component/Home/Sephora';
import Summer from '../assets/summer.svg';

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


  const cards = [
    {
      img: "return.svg",
      heading: "Have a non-Kohl’s return?",
      describe: "We’ll ship it for you.",
      link: "learn-more-1.html"
    },
    {
      img: "amazon.png",
      heading: "Easy Returns.",
      describe: "We'll pack it & ship it for free.",
      link: "learn-more-2.html"
    },
    {
      img: "influencercard.jpeg",
      heading: "The Influencer Shop",
      describe: "Shop their current faves. Your next obsession.",
      link: "learn-more-3.html"
    },
    {
      img: "cares.svg",
      heading: "Help support the well-being of families in our communities.",
      describe: "",
      link: "learn-more-4.html"
    }
  ];

  const SephoraData = [
    {
      "image": "https://media.kohlsimg.com/is/image/kohls/hp-pz-20240705-beauty-04",
      "title": "TOP SKINCARE BRANDS",
      "offer": "25% Off",
      "describe": "A NEW DEAL EVERY DAY!",
      "link": "/catalog"
    },
    {
      "image": "https://media.kohlsimg.com/is/image/kohls/hp-pz-20240705-beauty-03",
      "title": "SELECT SHAMPOO & CONDITIONER",
      "offer": "25% Off",
      "describe": "A NEW DEAL EVERY DAY!",
      "link": "/catalog"
    },
    {
      "image": "https://media.kohlsimg.com/is/image/kohls/hp-pz-20240705-beauty-02",
      "title": "SELECT BEAUTY",
      "offer": "UP TO 50% off",
      "describe": "A NEW DEAL EVERY DAY!",
      "link": "/catalog"
    },
    {
      "image": "https://media.kohlsimg.com/is/image/kohls/hp-pz-20240705-beauty-01",
      "title": "July 4-10",
      "offer": "SEPHORA SUMMER DEAL WEEK",
      "describe": "Select styles.",
      "link": "/catalog"
    }
  ]


  return (
    <div>


      


      <Image src={Summer} width={"50%"} display={"block"} margin={"40px auto"}/>

      <Flex padding={"0 20px"}>
        {menuItems.map((item, index) => (
          <RedComponent key={index} href={item.link} backgroundColor="red">
            {item.label}
          </RedComponent>
        ))}
      </Flex>

      <Box margin={"100px auto"}>
        <Heading textAlign={"center"}>Sephora  + kohl's</Heading>
        <Flex margin={"20px 30px"} justifyContent={"space-around"}>
          {SephoraData.map((item, index) => (
            <Sephora key={index} image={item.image} title={item.title} offer={item.offer} describe={item.describe} link={item.link} />
          ))}
        </Flex>
        <Text textAlign={"center"}>Earn Kohl’s rewards and Sephora Beauty Insider points on Sephora at Kohl’s purchases. Coupons and Kohl’s Cash® do not apply.</Text>
      </Box>


      <BabiesComponent />

      <Flex padding={"0 20px"}>
        {categories.map((item, index) => (
          <RedComponent key={index} href={item.link} backgroundColor="#5e2d91">
            {item.label}
          </RedComponent>
        ))}
      </Flex>


      <TodayBuy />

      <Heading textAlign={'center'} padding={4}>What are you shopping for today?</Heading>
      <Flex padding={"0 20px"} flexWrap={"wrap"}>
        {Catlog.map((item, index) => (
          <BlackComponent key={index} href={item.link} backgroundColor="black">
            {item.label}
          </BlackComponent>
        ))}
      </Flex>

      <Markdown />


      <Flex padding={"0 20px"}>
        {menuItems2.map((item, index) => (
          <RedComponent key={index} href={item.link} backgroundColor="red">
            {item.label}
          </RedComponent>
        ))}
      </Flex>


      <Flex padding={"0 20px"}>
        {cards.map((item, index) => (
          <Card key={index}
            img={item.img}
            heading={item.heading}
            describe={item.describe}
            link={item.link}
            number={index + 1} />
        ))}
      </Flex>


      <Paragraph />
    </div>
  );
}
