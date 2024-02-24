import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Typed from "typed.js";
import viteLogo from "/vite.svg";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "./sections/navbar";
import myimage from './assets/1706251972213__480.png'
import React from "react";
import resume from "./PrachiResume.pdf"
import GithubCalender from "./sections/GithubCalender";
import HamburgerMenu from "./sections/HamburgerMenu";
import { Card,Box, Container } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Projects } from "./sections/Projects";
import Skills from "./sections/Skills"

const App = () => {
	// var Typed = new Typed(".text",{
	// 	strings:["Frontend Developer" , "Web Developer"],
	// 	typeSpeed: 100,
	// 	backSpeed: 100,
	// 	backDelay: 1000,
	// 	loop:true
	// });

	React.useEffect(() => {
		// Typed.js initialization
		var options = {
			strings: ["Frontend Developer", "MERN Developer", "Full Stack Web Developer"],
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 100,
			loop: true,
		};

		var typed = new Typed(".text", options);

		// Clean up on component unmount
		return () => {
			typed.destroy();
		};
	}, []);

	function showResume() {
		window.open(
			"https://drive.google.com/file/d/19gbzPlqgHJP4yjZ_GjNeN1d9PQcXRb-u/view?usp=sharing",
			"_blank"
		);
	}
	function toggleMenu() {
		const menu = document.querySelector(".menu");
		menu.classList.toggle("active");
	}

	return (
		<>
			<Navbar />

			<section style={{ backgroundImage: "" }} className="home" id="home">
				<div className="home-content">
					<h3>Hello, It's Me</h3>
					<br />
					<h1 style={{ color: "white" }}>Prachi Mishra</h1>
					<br />
					<h3>
						And I'm a <span className="text">Full Stack Web Developer</span>
					</h3>
					<br />
					<p>
						I am a passionate Full Stack Web Developer with expertise in both
						frontend and backend technologies. My goal is to create seamless and
						responsive web applications that deliver exceptional user
						experiences.
					</p>

					<div className="home-sci">
						<a
							href="http://www.linkedin.com/in/prachi-mishra-45b80b279"
							target="_blank"
							style={{ "--i": 6 }}
						>
							<i className="bx bxl-linkedin"></i>
						</a>
						<a
							href="https://github.com/misprachi023"
							target="_blank"
							style={{ "--i": 7 }}
						>
							<i class="bx bxl-github"></i>
						</a>

						<a
							href="https://www.snapchat.com/add/prachimis_23?share_id=9ztOO5t9_lM&locale=en-GB"
							target="_blank"
							style={{ "--i": 8 }}
						>
							<i className="bx bxl-snapchat"></i>
						</a>
					</div>
					<a
						href={resume}
						className="btn-box"
						target="_blank"
						download={"PrachiResume.pdf"}
						onClick={showResume}
					>
						Resume
					</a>	
				</div>

				<span className="home-imgHover"></span>
			</section>

			<section className="about" id="about">
				<div className="about-img">
					<img
						src={myimage}
						alt=""
					/>
				</div>
				<div className="about-text">
					<h2>
						About <span>Me</span>
					</h2>
					<h4>Full Stack Developer!</h4>
					<p>
						   I am a passionate and skilled Full Stack Developer with a strong
						foundation in both front-end and back-end technologies. My goal is
						to create seamless and responsive web applications that deliver
						exceptional user experiences. With a commitment to staying updated
						on the latest industry trends, I thrive in dynamic and collaborative
						environments.
					</p>
					<a href="#" className="btn-box">
						More About Me
					</a>
				</div>
			</section>
			<GithubCalender />

			<section>
				<div className="services" id="education">
					<div className="container">
						<h1 className="sub-title">
							My <span>Education</span>
						</h1>
						<div className="services-list">
							<div className="edu">
								<i
									className="bx bxs-graduation"
									style={{ color: "#00eeff" }}
								></i>
								<h2>Higher School</h2>
								<h3>2018</h3>
								<h3>Rose Mary Hr.Sec. School, Bhopal</h3>
								<h4>10th MP Board</h4>
								<h4>Percentage: 90.6%</h4>
							</div>

							<div className="edu">
								<i
									className="bx bxs-graduation"
									style={{ color: "#00eeff" }}
								></i>
								<h2>Senior Secondary</h2>
								<h3>2020</h3>
								<h3>Rose Mary Hr.Src. School, Bhopal</h3>
								<h4>Subject: Science</h4>
								<h4>10th MP Board</h4>
								<h4>Percentage: 75.6%</h4>
							</div>

							<div className="edu">
								<i
									className="bx bxs-graduation"
									style={{ color: "#00eeff" }}
								></i>
								<h2>Engineering</h2>
								<h3>2020-Present</h3>
								<h3>SIRT, Bhopal</h3>
								<h4>B.Tech, Computer Science Engineering</h4>
								<h4>CGPA: 8.62</h4>
							</div>

							<div className="edu">
								<i
									className="bx bxs-graduation"
									style={{ color: "#00eeff" }}
								></i>
								<h2>Course</h2>
								<h3>2023-Present</h3>
								<h3>Masai School, Bangalore</h3>
								<h4>Full Stack Web Developer</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			<h1 className="sub-title">
				My <span>Skills</span>
			</h1>
                 
             <Skills/>



             <Projects/>
		
			<section className="contact" id="contact">
				<div className="contact-text">
					<h2>
						Contact <span>Me</span>
					</h2>
					<h3>Let's work Together</h3>
					<div className="contact-icons">
						<a
							href="https://www.snapchat.com/add/prachimis_23?share_id=9ztOO5t9_lM&locale=en-GB"
							target="_blank"
						>
							<i className="bx bxl-snapchat"></i>
						</a>
						<a href="tel:7697271872" target="_blank">
							<i className="bx bx-phone"></i>
						</a>
						<a href="mailto:prachimishra23123@gmail.com" target="_blank">
							<i className="bx bx-envelope"></i>
						</a>
						<a
							href="http://www.linkedin.com/in/prachi-mishra-45b80b279"
							target="_blank"
						>
							<i className="bx bxl-linkedin"></i>
						</a>
					</div>
				</div>
				<div className="contact-form">
					<form action="">
						<input type="text" placeholder="Enter Your Name" required />
						<input type="email" placeholder="Enter Your Email" required />
						<textarea
							name="message"
							id="message"
							placeholder="Enter Your Message"
						></textarea>
						<input type="submit" value="submit" className="send" />
					</form>
				</div>
			</section>

			<div className="last-text">
				<p>Developed with ❤️ by Prachi Mishra @ 2023</p>	
			</div>

			<a href="#" className="top">
				<i className="bx bx-up-arrow-alt"></i>
			</a>
		</>
	);
};

export default App;
