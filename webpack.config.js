const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';  //boolean para cargar o no el plugin CSSloader dependiendo la instancia del projecto.

module.exports = {
    
    entry: './frontend/app.cjs',
    output: {
        path: path.join(__dirname, '/backend/public'),
        filename: 'bundle.js'
    },
    mode: 'development',

    module: { //modelador de cada tipo de archivos
        rules: [
            {   
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader, //esto carga el CSS en nuestro archivo de back/public // dependiendo en el estadio de desarollo que estemos.
                    'css-loader'


                ]
            
            }
            
        ]
    },

    plugins: [ 
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDoctype: true,

            }
        
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]

};