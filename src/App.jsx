import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Typed from "typed.js";
import viteLogo from "/vite.svg";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "./sections/navbar";
import myimage from './assets/WhatsApp Image 2023-11-29 at 20.13.44_e7e714b4.jpg'
import React from "react";	
import screenshot from './assets/Screenshot 2023-11-17 165121.png'		
import GithubCalender from "./sections/GithubCalender";
import HamburgerMenu from "./sections/HamburgerMenu";
import PrachiMishraFullStackWebDeveloper from "../src/assets/PrachiMishraFullStackWebDeveloper.pdf";
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
			strings: ["Frontend Developer", "Web Developer"],
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 1000,
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
			"https://drive.google.com/file/d/1EvCaXJn6I-uoyWnMvhLC5OC1_9YVweWK/view?usp=sharing",
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
						href={PrachiMishraFullStackWebDeveloper}
						className="btn-box"
						target="_blank"
						download={PrachiMishraFullStackWebDeveloper}
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

			<section>
				<h1 className="heading1">Technical Skills</h1>
				<div className="double">
					<div className="container1" id="skills">
						<div className="Technical-bars">
							<div className="bar">
								<i style={{ color: "#c95d2e" }} className="bx bxl-html5"></i>
								<div className="info">
									<span>HTML</span>
								</div>
								<div className="progress-line html">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<i style={{ color: "#147bbc" }} className="bx bxl-css3"></i>
								<div className="info">
									<span>CSS</span>
								</div>
								<div className="progress-line css">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<i
									style={{ color: "#b0bc1e" }}
									className="bx bxl-javascript"
								></i>
								<div className="info">
									<span>Javascript</span>
								</div>
								<div className="progress-line javascript">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<i style={{ color: "#69bcbc" }} className="bx bxl-react"></i>
								<div className="info">
									<span>React</span>
								</div>
								<div className="progress-line react">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<i style={{ color: "#c32ec9" }} className="bx bxl-python"></i>
								<div className="info">
									<span>Python</span>
								</div>
								<div className="progress-line python">
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h1 className="heading1">Professional Skills</h1>
				<div className="container1">
					<div className="radial-bars">
						<svg x="0px" y="0px" viewBox="0 0 200 200">
							<circle className="progess-bar" cx="100" cy="100" r="80"></circle>
							<circle className="path path-1" cx="100" cy="100" r="80"></circle>
						</svg>
						<div className="percentage">90%</div>
						<div className="text">creativity</div>
					</div>
					<div className="radial-bars">
						<svg x="0px" y="0px" viewBox="0 0 200 200">
							<circle className="progess-bar" cx="100" cy="100" r="80"></circle>
							<circle className="path path-1" cx="100" cy="100" r="80"></circle>
						</svg>
						<div className="percentage">65%</div>
						<div className="text">Communication</div>
					</div>
					<div className="radial-bars">
						<svg x="0px" y="0px" viewBox="0 0 200 200">
							<circle className="progess-bar" cx="100" cy="100" r="80"></circle>
							<circle className="path path-1" cx="100" cy="100" r="80"></circle>
						</svg>
						<div className="percentage">75%</div>
						<div className="text">Problem Solving</div>
					</div>
					<div className="radial-bars">
						<svg x="0px" y="0px" viewBox="0 0 200 200">
							<circle className="progess-bar" cx="100" cy="100" r="80"></circle>
							<circle className="path path-1" cx="100" cy="100" r="80"></circle>
						</svg>
						<div className="percentage">85%</div>
						<div className="text">TeamWork</div>
					</div>
				</div>
			</section>

			<section>
				<div id="project">
					<div className="main-text" id="project">
						<h2>
							Latest <span>Project</span>
						</h2>
						<div className="Portfolio-content">
							<br />
							<div className="row">
								<img src={screenshot} alt="" />
								<div className="layer">
									<h5>Airtable Website</h5>
									<p>
										This is an Airtable clone, a cloud-based collaboration
										platform that combines the simplicity of a spreadsheet with
										the complexity of a relational database. It allows users to
										create customizable databases, or "bases," to organize and
										store information.
									</p>
									<p>Teck Stack: HTML, CSS, Javascript, React, Chakra UI</p>
									<div className="ico">
										<a
											href="https://aritable-icgd9nfub-prachi-mishra.vercel.app/"
											target="_blank"
										>
											<i
												className="bx bx-link-external"
												style={{ color: "#00eeff" }}
											></i>
										</a>
										<a
											href="https://github.com/misprachi023/Airtable"
											target="_blank"
										>
											<i
												className="bx bxl-github"
												style={{ color: "#00eeff" }}
											></i>
										</a>
									</div>
								</div>
							</div>
							<br />
							{/* Add other project details here */}
						</div>
					</div>
				</div>
			</section>

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
