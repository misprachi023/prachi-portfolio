import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	Image,
	Box,
	Flex,
	Heading,
	Link,
	useBreakpointValue,
} from "@chakra-ui/react";
import HamburgerMenu from "./HamburgerMenu";


export default function Navbar() {
	const isMobile = useBreakpointValue({
		base: true,
		md: true,
		sm: true,
		xs: true,
		lg: false,
	});

	return (
		<Flex
		color={"white"}
		// backgroundColor={'#3b3c36'}
		backgroundColor={'#051129'}
			zIndex={"23"}
			position={"fixed"}	
			width={"100%"}
			top={"0"} 
			height={"4rem"}
			boxShadow={
				 "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
			}
			alignItems={"center"}
			justifyContent={"space-around"}
		>
			<Box >
				<Heading size={['md','sm','md','xl','2xl']}>Portfolio</Heading></Box>		

			{!isMobile ? <nav className="navbar">
					<a href="#home" style={{ "--i": 1 }} className="big-nav active">
						Home
					</a>
					<a href="#about" style={{ "--i": 2 }} className="big-nav">
						About
					</a>
					<a href="#education" style={{ "--i": 3 }} className="big-nav">
						Education
					</a>
					<a href="#skills" style={{ "--i": 4 }} className="big-nav">
						Skills
					</a>
					<a href="#project" style={{ "--i": 5 }} className="big-nav">
						Project
					</a>
					<a href="#contact" style={{ "--i": 6 }} className="big-nav">
						Contact
					</a>
				</nav> : null}

			
			

			{isMobile ? <HamburgerMenu /> : null}
		</Flex>
	);
		}