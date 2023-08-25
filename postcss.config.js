module.exports = {
	plugins: [
		// require('cssnano')({
		// 	preset: 'default',
		// }),
		require("@hail2u/css-mqpacker"),
		require('cssnano')({
			preset: [
			  'default', {
				discardComments: {
				  removeAll: true
				}
			  }
			]
		  }),
		require('postcss-preset-env')({
			browsers: 'last 5 versions',
		}),
	]
}