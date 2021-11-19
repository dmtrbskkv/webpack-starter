const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/app.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/pug/pages/home.pug',
            filename: 'index.html',
            favicon: "./favicon.ico",
            minify: true
        }),
        new HtmlWebpackPugPlugin(),
        // Copy .php files from /src-backend folder
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src-backend", to: "backend" },
        //     ],
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [{ loader : "pug-loader", options: { pretty: true } }]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
