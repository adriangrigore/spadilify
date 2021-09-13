module.exports = {
	name: "mkws", // optional, falls back to object key
	description: "mkws - A simple static site generator",
	skip: false,
	options: {
		frequency: 60, // (in minutes), 2 hours
	},
	urls: [
		"https://mkws.sh/",
		"https://mkws.sh/docs.html",
		"https://mkws.sh/pp.html",
		"https://mkws.sh/lts.html",
	]
};