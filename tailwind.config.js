/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	purge: [
		'./src/**/*.html',
		'./src/**/*.jsx',
		'./src/**/*.js',
		'./src/**/*.tsx',
		'./src/**/*.tsx',
	],
	theme: {
		extend: {
			flexGrow: {
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				6: 6,
				7: 7,
				8: 8,
				9: 9,
				10: 10,
				11: 11,
				12: 12,
			},
		},
	},
	plugins: [],
};
