module.exports = {
	name: "adi", // optional, falls back to object key
	description: "Personal Web Site",
	skip: false,
	options: {
		frequency: 60, // (in minutes), 2 hours
	},
	urls: [
		"https://adi.onl/",
		"https://adi.onl/projects.html",
		"https://adi.onl/.*.html"
	]
}
