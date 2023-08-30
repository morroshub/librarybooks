const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 


const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    

    entry: './front/app.js',
    output: {
        path: path.join(__dirname, '/back/public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {   
                test: /\.css$/ 
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'


                ]
            
            }
            
        ]
    },

    plugins: [ 
        new HtmlWebpackPlugin({
            template: './front/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDoctype: true,

            }
        
        })
    ]

};