/* craco.config.js */
/* eslint-env node */
const CracoLessPlugin = require('craco-less');

require('dotenv').config({
	path: '/environments/.env',
});

module.exports = {
	module: {
		rules: [
			{
				test: /\.less$/i,
				use: [
					// compiles Less to CSS
					'style-loader',
					'css-loader',
					'less-loader',
				],
			},
		],
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						// modifyVars: { "@primary-color": "#1DA57A" },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
