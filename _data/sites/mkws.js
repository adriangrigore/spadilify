module.exports = {
	name: "mkws", // optional, falls back to object key
	description: "A small, no bloat, minimalist static site generator.",
	skip: false,
	options: {
		frequency: 60, // (in minutes), 2 hours
	},
	urls: [
		"https://mkws.sh/",
		"https://mkws.sh/docs.html",
		"https://mkws.sh/pp.html",
		"https://mkws.sh/lts.html",
		"https://mkws.sh/blog.html",
		"https://mkws.sh/p/Welcome.html",
		"https://mkws.sh/p/How%20to%20add%20a%20navigation%20menu.html",
		"https://mkws.sh/p/How%20to%20add%20custom%20titles.html",
		"https://mkws.sh/p/How%20to%20render%20%60Markdown%60.html",
	]
};