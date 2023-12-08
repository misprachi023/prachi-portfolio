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
				marginTop={"10%"}
				marginBottom={"5%"}
				size={["sm", "md", "lg", "lg", "xl", "3xl"]}
			>
				Latest <span style={{color:'#0ef'}}>Projects</span>
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
				<Box padding={"10%"}>
					<Heading>
						Airtable (clone)
						<Badge ml="1" fontSize="0.5em" variant="solid" colorScheme="blue">
							New
						</Badge>
					</Heading>
					<List size={["sm", "md", "lg", "lg", "xl", "3xl"]} spacing={3}>
						<ListItem>
							This is an Airtable clone, a cloud-based collaboration platform
							that combines the simplicity of a spreadsheet with the complexity
							of a relational database. It allows users to create customizable
							databases, or "bases," to organize and store information.
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Login/Logout functionality
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Tow different pages that are free or with pass
						</ListItem>
						{/* You can also use custom icons from react-icons */}
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Responsive Website design
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />
							Click on Demo live button to see the website live
						</ListItem>
						<ListItem>
							<ListIcon as="MdCheckCircle" color="green.500" />Teck Stack
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
								color={"white"}
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
								color={"white"}
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
