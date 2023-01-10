module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				"bg": "#15202B",
				"card": "#192834",
				"primary": '#1EA1F1',
				"input": "#253441",
				"shy": '#8899A6',
				"stroke": '#37454D',
			},
			fontSize: {
				"heading": "16px",
				"body": "14px",
				"caption": "10px"
			},
			fontFamily: {
				"header": ['Montserrat', 'sans-serif']
			},
			screens: {
				"xs": "300px"
			}
		},
	},
	plugins: [],
};
