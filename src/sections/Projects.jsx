import React from "react";

import { Button, Image } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { Card, Link, Badge, Heading } from "@chakra-ui/react";
import HoverVideoPlayer from "react-hover-video-player";
// import { Player } from "video-react";
import videoairtable from "../airtable.mp4";
import boatlife from "../boatlifestyle.mp4";
import { List, ListItem, Text } from "@chakra-ui/react";

/**
 * @author
 * @function Projects
 **/

export const Projects = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    pauseOnHover: false,
  };
  return (
    <Box id="projects">
      <Heading
        className="main-text"
        textAlign={"center"}
        id="project"
        size={["sm", "md", "lg", "lg", "xl", "3xl"]}
      >
        <div className="about-text">
          <h2>
            Latest <span>Project</span>
          </h2>
        </div>
      </Heading>
      <Card
        width={["90%", "90%", "80%", "70%", "60%"]}
        backgroundColor={"#081b29"}
        margin={"auto"}
        size={"lg"}
        display="flex"
        gap={"30px"}
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <div style={{ flex: "1", marginRight: "10px", border:'5px solid cyan', borderRadius:'10px'}}>
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          >
            <source src={videoairtable} type="video/mp4" />
          </video>
          <Box
            borderRadius={"30px"}
            backgroundColor={"#051129"}
            padding={"10px"}
            marginBottom="10px"
          >
            <Text
              fontSize={"25px"}
              backgroundColor={"#051129"}
              color={"white"}
              borderRadius={"10px"}
            >
              Description
            </Text>
            <Text
              backgroundColor={"#051129"}
              borderRadius={"10px"}
              color={"white"}
            >
              Airtable is a cloud-based collaborative spreadsheet app that
              allows you to create, organize, and share spreadsheets.
            </Text>
          </Box>
          <Box
            textAlign={"center"}
            padding={"10px"}
            display={"flex"}
            justifyContent={"space-around"}
            marginBottom="10px"
          >
            <Link
              isExternal={true}
              href="https://github.com/misprachi023/Airtable"
            >
              <Button
                backgroundColor={"cyan"}
                _hover={{ backgroundColor: "white" }}
                color={"#051129"}
                variant="outline"
              >
                Git Hub
              </Button>
            </Link>
            <Link isExternal={true} href="https://aritable.vercel.app/">
              <Button
                backgroundColor={"cyan"}
                _hover={{ backgroundColor: "white" }}
                color={"#051129"}
                variant="outline"
              >
                Live Demo
              </Button>
            </Link>
          </Box>
          <Box
            backgroundColor={"#051129"}
            padding={"10px"}
            borderRadius={"30px"}
          >
            <Text textAlign={"center"} fontSize={"25px"} color={"white"}>
              Tech Stack
            </Text>
            <List textAlign={"center"} color={"white"}>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>React</ListItem>
              <ListItem>JavaScript</ListItem>
            </List>
          </Box>
        </div>
        <div style={{ flex: "1", border:'5px solid cyan', borderRadius:'10px'  }}>
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          >
            <source src={boatlife} type="video/mp4" />
          </video>
          <Box
            borderRadius={"30px"}
            backgroundColor={"#051129"}
            padding={"10px"}
            marginBottom="10px"
          >
            <Text
              fontSize={"25px"}
              backgroundColor={"#051129"}
              color={"white"}
              borderRadius={"10px"}
            >
              Description
            </Text>
            <Text
              backgroundColor={"#051129"}
              borderRadius={"10px"}
              color={"white"}
            >
              BoatLifeStyle is an e-commerce web application that allows you to
              buy and sell collection of Earbuds, Headphones.
            </Text>
          </Box>
          <Box
            textAlign={"center"}
            padding={"10px"}
            display={"flex"}
            justifyContent={"space-around"}
            marginBottom="10px"
          >
            <Link
              isExternal={true}
              href="https://github.com/misprachi023/BoatLifeStyle"
            >
              <Button
                backgroundColor={"cyan"}
                _hover={{ backgroundColor: "white" }}
                color={"#051129"}
                variant="outline"
              >
                Git Hub
              </Button>
            </Link>
            <Link
              isExternal={true}
              href="https://boat-life-style-nine.vercel.app/"
            >
              <Button
                backgroundColor={"cyan"}
                _hover={{ backgroundColor: "white" }}
                color={"#051129"}
                variant="outline"
              >
                Live Demo
              </Button>
            </Link>
          </Box>
          <Box
            backgroundColor={"#051129"}
            padding={"10px"}
            borderRadius={"30px"}
          >
            <Text textAlign={"center"} fontSize={"25px"} color={"white"}>
              Tech Stack
            </Text>
            <List textAlign={"center"} color={"white"}>
              <ListItem>React</ListItem>
              <ListItem>Node js</ListItem>
              <ListItem>Express js</ListItem>
              <ListItem>MongoDB</ListItem>
            </List>
          </Box>
        </div>
      </Card>
    </Box>
  );
};
