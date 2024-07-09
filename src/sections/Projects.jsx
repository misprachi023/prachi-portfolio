import React from "react";
import videoairtable from "../airtable.mp4";
import boatlife from "../boatlifestyle.mp4";
import questlab from "../quest-labs.mp4";
import resturant from "../resturant.mp4";
import { Button, Box, Flex, Card, Link, Text, Heading, List, ListItem, Grid } from "@chakra-ui/react";

const projectsData = [
  {
    videoSrc: videoairtable,
    description: "Airtable is a cloud-based collaborative spreadsheet app that allows you to create, organize, and share spreadsheets.",
    gitHubLink: "https://github.com/misprachi023/Airtable",
    liveDemoLink: "https://aritable.vercel.app/",
    techStack: ["HTML", "CSS", "React", "JavaScript"]
  },
  {
    videoSrc: boatlife,
    description: "BoatLifeStyle is an e-commerce web application that allows you to buy and sell a collection of Earbuds, Headphones.",
    gitHubLink: "https://github.com/misprachi023/BoatLifeStyle",
    liveDemoLink: "https://boat-life-style-nine.vercel.app/",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    videoSrc: questlab,
    description: "Transform Your Product with Intelligent In-App Experiences Empower growth & Marketing Teams to Boost Engagement ",
    gitHubLink: "https://github.com/misprachi023/Questlabs",
    liveDemoLink: "https://questlabs-blush.vercel.app/",
    techStack: ["HTML", "CSS", "React", "JavaScript"]
  },
  {
    videoSrc: resturant,
    description: "Restaurant is an e-commerce web application that allows you to buy and sell a collection of food items.",
    gitHubLink: "https://github.com/misprachi023/Restaurant",
    liveDemoLink: "https://restaurant-beta-livid.vercel.app/",
    techStack: ["HTML", "CSS", "React", "JavaScript"]
  }
];

export const Projects = (props) => {
  return (
    <Box id="projects" padding="20px">
      <Heading className="main-text" textAlign="center" id="project" size={["sm", "md", "lg", "lg", "xl", "3xl"]} marginBottom="20px">
        <div className="about-text">
          <h2>
            Latest <span>Project</span>
          </h2>
        </div>
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        gap="30px"
        width={["90%", "90%", "80%", "70%", "60%"]}
        backgroundColor="#081b29"
        margin="auto"
        padding="20px"
        borderRadius="10px"
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            border="5px solid cyan"
            borderRadius="10px"
            padding="10px"
            backgroundColor="#051129"
          >
            <video autoPlay loop muted style={{ width: "100%", height: "auto", borderRadius: "10px" }}>
              <source src={project.videoSrc} type="video/mp4" />
            </video>
            <Box borderRadius="10px" backgroundColor="#051129" padding="10px" marginBottom="10px">
              <Text fontSize="25px" color="white" borderRadius="10px">
                Description
              </Text>
              <Text borderRadius="10px" color="white">
                {project.description}
              </Text>
            </Box>
            <Box textAlign="center" padding="10px" display="flex" justifyContent="space-around" marginBottom="10px">
              <Link isExternal href={project.gitHubLink}>
                <Button backgroundColor="cyan" _hover={{ backgroundColor: "white" }} color="#051129" variant="outline">
                  Git Hub
                </Button>
              </Link>
              <Link isExternal href={project.liveDemoLink}>
                <Button backgroundColor="cyan" _hover={{ backgroundColor: "white" }} color="#051129" variant="outline">
                  Live Demo
                </Button>
              </Link>
            </Box>
            <Box padding="10px" borderRadius="10px">
              <Text textAlign="center" fontSize="25px" color="white">
                Tech Stack
              </Text>
              <List textAlign="center" color="white">
                {project.techStack.map((tech, index) => (
                  <ListItem key={index}>{tech}</ListItem>
                ))}
              </List>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
