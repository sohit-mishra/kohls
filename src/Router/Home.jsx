import React from 'react';
import RedComponent from '../component/Home/RedComponent';
import BlackComponent from '../component/Home/BlackComponent';
import BabiesComponent from '../component/Home/BabiesComponent';
import Markdown from '../component/Home/Markdown';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import TodayBuy from '../component/Home/TodayBuy';
import Card from '../component/Home/Card';
import Paragraph from '../component/Home/Paragraph';
import Sephora from '../component/Home/Sephora';
import Summer from '../assets/summer.svg';
import SmallComponent from '../component/Home/SmallComponent';
import Banner from '../component/Home/Banner';

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


  const smallComponent = [
    {
      "heading": "Earn $10 Kohl’s Cash®",
      "content": "For every $50 spent through July 11. Not valid on Sephora at Kohl’s.",
      "actionText": "details",
      "imageLink": "https://media.kohlsimg.com/is/image/kohls/2023619-digital-wallet-kcash?fmt=png8-alpha&scl=1",
      "bgColor": "#eef4d8"
    },
    {
      "heading": "Have a Kohl’s return?",
      "content": "It’s quick & hassle free!",
      "actionText": "Learn More",
      "imageLink": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28 32\"><path id=\"ic-shopping-bag\" d=\"M10,8v3.5a1,1,0,0,0,2,0V8h8v3.5a1,1,0,0,0,2,0V8h5a1,1,0,0,1,1,1V27a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V9A1,1,0,0,1,5,8ZM22,6h5a3,3,0,0,1,3,3V27a5,5,0,0,1-5,5H7a5,5,0,0,1-5-5V9A3,3,0,0,1,5,6h5a5.9,5.9,0,0,1,6-6A5.9,5.9,0,0,1,22,6ZM20,6a3.9,3.9,0,0,0-4-4,3.9,3.9,0,0,0-4,4Z\" transform=\"translate(-2)\" fill=\"%23fff\" fill-rule=\"evenodd\"/></svg>",
      "bgColor": "#820033"
    },
    {
      "heading": "SEPHORA + KOHL’S",
      "content": "Shop the best in beauty from the brands you know and love.",
      "actionText": "Shop Now",
      "imageLink": "https://media.kohlsimg.com/is/image/kohls/hp-sp-231027-sephora-stripes-bkgd?fmt=png8-alpha&scl=1",
      "bgColor": "#000000"
    }
  ]


  return (
    <div>

      <Flex padding={"0 20px"} justifyContent={"space-around"} margin={"60px 30px"}>
        {smallComponent.map((item, index) => (
          <SmallComponent key={index} imageLink={item.imageLink} bgColor={item.bgColor} heading={item.heading} content={item.content} actionText={item.actionText} number={index+1}/>
        ))}
      </Flex>


      <Banner/>


      <Image src={Summer} width={"50%"} display={"block"} margin={"40px auto"} />

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
