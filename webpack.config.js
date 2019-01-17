var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js"
	},
	devtool: "source-map",
	output: {
		filename: "[name]-[chunkhash:5].js",
		path: __dirname + "/dist"
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/env", "@babel/react"],
							plugins: [
								[	
									"@babel/plugin-proposal-decorators",
							        {
							          "legacy": true
							        }
						        ],
						      	[
						        	"@babel/plugin-proposal-class-properties",
							        {
							          "loose": true
							        }
						      	]
						    ]
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['./dist']),
		new webpack.BannerPlugin('mosby'),
		new htmlWebpackPlugin({
			template: './index.html',
			title: 'mobx-react-base'
		})
	]
}