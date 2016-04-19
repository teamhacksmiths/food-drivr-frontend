const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: './scripts/main.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				cacheDirectory: true,
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.css$/,
			loader: ['style', 'css'],
			exclude: /node_modules/,
		}]
	},
	plugins: [
		/*
		    new webpack.optimize.UglifyJsPlugin({
		      sourceMap: false,
		      mangle: false
		    }),*/
		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		})
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		colors: true,
		stats: 'errors-only'
	}
};