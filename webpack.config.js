const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: __dirname + "/build/",
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
	],
	devServer: {
		historyApiFallback: true,
		hot: true,
		open: true,
	},
};
