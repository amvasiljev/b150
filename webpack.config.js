const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages`
const PAGES = fs
	.readdirSync(PAGES_DIR)
	.filter(fileName => fileName.endsWith('.pug'))

const plugins = [
	// new CopyWebpackPlugin({
	// 	patterns: [
	// 		{ from: `${PATHS.src}/static`, to: '' }
	// 	]
	// }),
	new CopyWebpackPlugin({
		patterns: [
		  {
			from: `${PATHS.src}/${PATHS.assets}themes/default/img`,
			to: `${PATHS.assets}themes/default/img`,
			noErrorOnMissing: true,
		  },
		  {
			from: `${PATHS.src}/${PATHS.assets}themes/default/fonts`,
			to: `${PATHS.assets}themes/default/fonts`,
			noErrorOnMissing: true,
		  },
		  {
			from: `${PATHS.src}/static`,
			to: ''
		  },
		],
	  }),
	...PAGES.map(
		page =>
			new HtmlWebpackPlugin({
				template: `${PAGES_DIR}/${page}`,
				filename: `./${page.replace(/\.pug/, '.html')}`,
				minify: {
					collapseWhitespace: isProd
				},
				title: 'Webpack + Pug template',
				inject: 'body'
			})
	),
	new CleanWebpackPlugin()
]

if (isProd) {
	plugins.push(
		new MiniCssExtractPlugin(
			{
				// filename: `${PATHS.assets}css/${filename('css')}`,
				filename: `${PATHS.assets}themes/default/css/[name].css`,
			}
		),
		// new ImageMinimizerPlugin({
		// 	severityError: 'warning',
		// 	minimizerOptions: {
		// 		plugins: [
		// 			['gifsicle', { interlaced: true }],
		// 			['jpegtran', { progressive: true }],
		// 			['optipng', { optimizationLevel: 5 }],
		// 			[
		// 				'svgo',
		// 				{
		// 					plugins: [
		// 						{
		// 							removeViewBox: false,
		// 						},
		// 					],
		// 				},
		// 			],
		// 		],
		// 	},
		// })
	)
}

module.exports = {
	mode: 'development',
	target: isDev ? 'web' : 'browserslist',
	devtool: isDev ? 'source-map' : false,
	devServer: {
		contentBase: PATHS.dist,
		port: 8081,
		host: '192.168.31.178',
		open: 'Chrome',
		compress: true,
		overlay: {
			warnings: false,
			errors: true
		}
	},
	entry: {
		app: PATHS.src
	},
	output: {
		// filename: `${PATHS.assets}js/${filename('js')}`,
		filename: `${PATHS.assets}themes/default/js/[name].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /.pug$/i,
				loader: 'simple-pug-loader'
			},
			{
				test: /\.m?js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require("sass")
						}
					}
				]
				
				
			},
			
			{
				test: /\.(png|jpg|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: `${PATHS.assets}img/[name][ext]`
				}
			},
			// {
			// 	test: /\.(png|jpg|gif|svg)$/,
			// 	loader: 'file-loader',
			// 	options: {
			// 		name: '[name].[ext]'
			// 	}
			// },
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: `${PATHS.assets}themes/default/fonts/[name][ext]`
				}
			}
			// {
			// 	test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			// 	loader: 'file-loader',
			// 	options: {
			// 	  name: '[name].[ext]'
			// 	}
			//   }
		]
	},
	resolve: {
		alias: {
			'~': PATHS.src, // Пример: background-image: url("~/assets/img/image.jpg");
			// '@styles': `${PATHS.src}/pug/styles`,
			// '@blocks': `${PATHS.src}/pug/blocks`,
			// '@layout': `${PATHS.src}/pug/layout`,
			// '@pages': `${PATHS.src}/pug/pages`,
			// '@utils': `${PATHS.src}/pug/styles/utils`,
		}
	},
	plugins
}
