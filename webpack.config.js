const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader,'css-loader']
			},
			{
				test: /\.js$/i,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						}
					}
				]
			},
			{
				test: /\.(woff|eot|ttf|svg)$/i,
				use: 'file-loader',
			},
			{
				test: /\.(jpg|png)$/i,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			title: 'Time Calculator',
			favicon: './src/images/favicon.jpg',
			template: './src/index.html',
		})
	]
}

module.exports = config
