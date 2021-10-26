import * as React from "react";

import "./index.css";
import HeroImage from "../components/heroImage";
import kdcPic from "../images/kdc.jpeg";

// styles
const pageStyles = {
	color: "#232129",
	fontFamily: "Lato, sans-serif",
	color: "rgb(118, 60, 57)",
	backgroundColor: "rgb(255, 253, 238)",
};
const headingStyles = {
	margin: "50px",
	textAlign: "center",
	fontWeight: 900,
	textShadow: "1px 1px 3px rgb(118 60 57)",
};
const headingAccentStyles = {
	color: "#663399",
};
const linkStyles = {
	color: "rgb(175, 72, 96)",
};
const paragraphStyles = {
	fontSize: "30px",
	textAlign: "center",
};
const iframeWrapper = {
	display: "block",
	width: "70%",
	margin: "50px 15%",
};
const codeStyles = {
	color: "#8A6534",
	padding: 4,
	backgroundColor: "#FFF4DB",
	fontSize: "1.25rem",
	borderRadius: 4,
};
const listStyles = {
	marginBottom: 96,
	paddingLeft: 0,
};
const listItemStyles = {
	fontWeight: 300,
	fontSize: 24,
	maxWidth: 560,
	marginBottom: 30,
};

const linkStyle = {
	color: "#8954A8",
	fontWeight: "bold",
	fontSize: 16,
	verticalAlign: "5%",
};

const docLinkStyle = {
	...linkStyle,
	listStyleType: "none",
	marginBottom: 24,
};

const descriptionStyle = {
	color: "#232129",
	fontSize: 14,
	marginTop: 10,
	marginBottom: 0,
	lineHeight: 1.25,
};

const docLink = {
	text: "Documentation",
	url: "https://www.gatsbyjs.com/docs/",
	color: "#8954A8",
};

const badgeStyle = {
	color: "#fff",
	backgroundColor: "#088413",
	border: "1px solid #088413",
	fontSize: 11,
	fontWeight: "bold",
	letterSpacing: 1,
	borderRadius: 4,
	padding: "4px 6px",
	display: "inline-block",
	position: "relative",
	top: -2,
	marginLeft: 10,
	lineHeight: 1,
};

// data
const links = [
	{
		text: "Tutorial",
		url: "https://www.gatsbyjs.com/docs/tutorial/",
		description:
			"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
		color: "#E95800",
	},
	{
		text: "How to Guides",
		url: "https://www.gatsbyjs.com/docs/how-to/",
		description:
			"Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
		color: "#1099A8",
	},
	{
		text: "Reference Guides",
		url: "https://www.gatsbyjs.com/docs/reference/",
		description:
			"Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
		color: "#BC027F",
	},
	{
		text: "Conceptual Guides",
		url: "https://www.gatsbyjs.com/docs/conceptual/",
		description:
			"Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
		color: "#0D96F2",
	},
	{
		text: "Plugin Library",
		url: "https://www.gatsbyjs.com/plugins",
		description:
			"Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
		color: "#8EB814",
	},
	{
		text: "Build and Host",
		url: "https://www.gatsbyjs.com/cloud",
		badge: true,
		description:
			"Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
		color: "#663399",
	},
];

// markup
const IndexPage = () => {
	return (
		<main style={pageStyles}>
			<title>Home Page</title>
			<h1 style={headingStyles}>Kyle David Crosby</h1>
			<HeroImage src={kdcPic} />
			<container style={iframeWrapper}>
				<iframe
					width="100%"
					height="166"
					scrolling="no"
					frameborder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1148496361&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
				/>
			</container>
			<p style={paragraphStyles}>
				Playing @ DC9 Thursday, October 28th.
				<br />
				<a
					style={linkStyles}
					href="https://www.eventbrite.com/e/emily-wolfe-tickets-156968457883"
					target="_blank"
				>
					Tickets available now!
				</a>
			</p>
		</main>
	);
};

export default IndexPage;
