import React from "react";

import { Button, Image } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { Card, Link, Badge, Heading } from "@chakra-ui/react";

import screenshot from "../assets/Screenshot 2023-11-17 165121.png";
import {
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
} from "@chakra-ui/react";

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
				// marginTop={"10%"}
				// marginBottom={"5%"}
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
				boxShadow={
					"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
				}
				margin={"auto"}
				size={"lg"}
			>
				<Image src={screenshot} />
				<Box padding={"5%"}>
					<Heading>
						Airtable (clone)
						<Badge ml="1" fontSize="0.5em" variant="solid" colorScheme="blue">
							New
						</Badge>
					</Heading>
					<List size={["sm", "md", "lg", "lg", "xl", "3xl"]} spacing={3}>
						<ListItem>
							Teck Stack
							<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
							Html
						</Badge>
						<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
							javascript
						</Badge>
						<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
							React
						</Badge>
						<Badge ml="1" fontSize="0.8em" variant="solid" colorScheme="blue">
							Chakra UI
						</Badge>
							
						</ListItem>

					</List>
					<Box marginTop={"5%"} textAlign={"center"}>
						<Link isExternal="true" href="https://github.com/misprachi023/Airtable">
							<Button
								backgroundColor={"black"}
								color={"cyan"}
								variant="outline"
							>
								Git Hub
							</Button>
						</Link>
						<Link
							isExternal="true"
							href="https://aritable.vercel.app/"
						>
							<Button
								backgroundColor={"black"}
								color={"cyan"}
								variant="outline"
							>
								Live Demo
							</Button>
						</Link>
					</Box>
				</Box>
			</Card>
		</Box>
	);
};
