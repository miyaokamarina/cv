const { join } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    target: 'web',
    context: __dirname,
    externals: {},
    devtool: 'source-map',
    resolve: {
        alias: {
            '~': join(__dirname, './src'),
        },
    },
    output: {
        publicPath: '/cv/',
    },
    devServer: {
        port: 1488,
        host: '0.0.0.0',
        historyApiFallback: true,
        publicPath: '/cv/',
    },
    module: {
        rules: [
            {
                test: /\.(?:png|jpe?g|gif|svg|ttf|woff|woff2|eot)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { cacheDirectory: true },
                    },
                    // {
                    //   loader: 'eslint-loader',
                    //   options: { emitError: true },
                    // },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: './src/index.html',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            defaultSizes: 'parsed',
            generateStatsFile: true,
            openAnalyzer: false,
        }),
    ],
};
