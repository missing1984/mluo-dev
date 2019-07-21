const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: DEBUG ? 'development' : 'production',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
                            limit: 100000,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Michael Luo',
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
    },
};
