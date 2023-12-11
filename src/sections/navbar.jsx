import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	Image,
	Box,
	Flex,
	Heading,
	Button,
	Link,
	useBreakpointValue,
} from "@chakra-ui/react";
import HamburgerMenu from "./HamburgerMenu";
import resume from "./PrachiMishra-FullStackWebDeveloper-V3Hj.pdf"

export default function Navbar() {





	function showResume() {
		window.open(
			"https://drive.google.com/file/d/1HH2VZMpM666Q2qvL1FaiJvKHWWsye2iy/view?usp=sharing",
			"_blank"
		);
	}
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
				<a
						href={resume}
						
						target="_blank"
						download={"Prachi-Mishra-Resume.pdf"}
						onClick={showResume}
					>
					
					
					
					<Button >Resume</Button></a>

			
			

			{isMobile ? <HamburgerMenu /> : null}
		</Flex>
	);
		}
