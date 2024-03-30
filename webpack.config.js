const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { SubresourceIntegrityPlugin } = require("webpack-subresource-integrity");

const babelConfig = require("./babel.config");
const postcssConfig = require("./postcss.config");

const isDev =
	process.argv[process.argv.indexOf("--mode") + 1] === "development";

module.exports = {
	context: path.resolve(__dirname, "./src"),

	entry: {
		app: "./main.js",
	},

	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "static/js/[name].[contenthash].js",
		assetModuleFilename: "static/[path][name].[contenthash][ext]",
		crossOriginLoading: "anonymous"
	},

	optimization: isDev ? {
		realContentHash: true,
		minimize: false
	} : {
		realContentHash: true,
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							["gifsicle", { interlaced: true }],
							["jpegtran", { progressive: true }],
							["optipng", { optimizationLevel: 5 }],
							[
								"svgo",
								{
									plugins: [
										{
											name: "preset-default",
											params: {
												overrides: {
													removeViewBox: false,
													addAttributesToSVGElement: {
														params: {
															attributes: [
																{ xmlns: "http://www.w3.org/2000/svg" },
															]
														}
													}
												}
											}
										}
									]
								}
							]
						]
					}
				}
			})
		]
	},

	cache: false,

	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "./public/index.html"),
			publicPath: "./",
			scriptLoading: "defer",
			minify: false
		}),
		new SubresourceIntegrityPlugin({
			hashFuncNames: ["sha256"],
			enabled: !isDev
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "static/css/[name].[contenthash].css",
			ignoreOrder: false
		})
	],

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { sourceMap: isDev }
					},
					{
						loader: "postcss-loader",
						options: { postcssOptions: postcssConfig }
					},
					{
						loader: "sass-loader",
						options: { sourceMap: isDev }
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: babelConfig
				}
			},
			{
				test: /\.html$/,
				loader: "html-loader",
				options: { minimize: false }
			}
			/*{
				test: /\.(png|jpe?g|gif|svg)$/,
				type: "asset"
			}*/
		],
	},

	devServer: {
		static: { directory: path.resolve(__dirname, "./build") },
		compress: true,
		port: 3000
	}
};
