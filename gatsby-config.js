module.exports = {
	siteMetadata: {
		siteUrl: "https://kyledavidcrosby.com",
		title: "Kyle David Crosby",
	},
	plugins: [
		"gatsby-plugin-netlify-cms",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Lato\:300,400,800,900`],
				display: "swap",
			},
		},
	],
};
