const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require("path");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "./src/index.tsx"),
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".ts", ".tsx", ".js", ".json"],
				},
				use: "ts-loader",
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new MiniCssExtractPlugin(),
		new webpack.DefinePlugin({
			"process.env": JSON.stringify(dotenv.config().parsed),
		}),
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		open: true,
	},
};
