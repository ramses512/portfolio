import * as React from "react";
import Background from "./organisms/background";
import About from "./about";
/* import Projects from "./projects";
 */import Contact from "./contact";

import WOW from "wowjs";
/* type MyProps = {
	about: ReactDOM; 
	aboutRef: object;
  }; */
class Navbar extends React.Component {
	about: any;
	projects: any;
	contact: any;
	constructor(props) {
		super(props);
		this.about = React.createRef();
		//this.projects = React.createRef();
		this.contact = React.createRef();

		this.scrolling = this.scrolling.bind(this);
	}

	componentDidMount() {
		new WOW.WOW().init();
	}

	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div>
				<Background
					aboutRef={this.about}
					bounceIn={"wow bounceIn"}
				/>
				<nav
					id="navbar"
					className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<a
							className="home-style navbar-brand"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>
							Back to Home
						</a>
				{/* 		<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button> */}
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<a
									onClick={() => {
										this.scrolling(this.about);
									}}
									className="btn-style nav-item nav-link">
									About
								</a>
							{/* 	<a
									onClick={() => {
										this.scrolling(this.projects);
									}}
									className="btn-style nav-item nav-link">
									Projects
								</a> */}
								<a
									onClick={() => {
										this.scrolling(this.contact);
									}}
									className="btn-style nav-item nav-link">
									Contact
								</a>
							</div>
						</div>
					</div>
				</nav>

				<About
					ref={this.about}
					id="about-container"
					bounceLeft={"wow bounceInLeft"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow fadeIn"}
				/>
				{
				/* 	<Projects
					ref={this.projects}
					id="my-projects"
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
				/> */}
				<Contact
					ref={this.contact}
					id="my-contact"
					fadeInLeft={"wow fadeInLeft"}
					shake={"wow pulse"}
				/>
			</div>
		);
	}
}

export default Navbar;
