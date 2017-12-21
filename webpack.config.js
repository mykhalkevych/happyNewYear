const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: './js/main.bundle.js'
	},
	module: {
		rules: [
			{
			  test: /\.(scss|sass|css)$/,
			  use: ExtractTextPlugin.extract({
			  	fallback: 'style-loader',
          use: ['css-loader','sass-loader'],
			  })
			},
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
            	name: '[name].[ext]',
            	outputPath: '../img/'
            }
          }
        ]
      },
      {
      test: /\.(svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 1,
        name: '[name].[ext]',
        outputPath: '../fonts/'
      }
    }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 9000,
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
		title: 'Site',
		template: './src/index.html'
	}),
		new ExtractTextPlugin(
			{
				filename: './css/style.css',
				disable: false,
				allChunks: true
			}),
	]
}