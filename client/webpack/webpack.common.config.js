/* eslint-disable import/no-extraneous-dependencies, object-curly-newline */
/**
 * common webpack configuration for all envs
 */
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonPlugins = [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'styles.css',
    }),
];

module.exports = (options) => ({
    mode: options.mode,
    entry: options.entry,
    output: {
        publicPath: '/',
        ...options.output,
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    // Extracts CSS into separate files
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            // set it as 'https://dza2kd7rioahk.cloudfront.net' as we are loading fonts from CDN. Previous it was set as '.' as we were loading fonts from local assets
                            additionalData: "$var1: 'https://dza2kd7rioahk.cloudfront.net';",
                        },
                    },
                ],
            },
            {
                test: /\.(woff2|woff|ttf|eot)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts',
                    },
                },
            },
            {
                test: /\.(mp3|ogg|wav|mp4|webm|mov)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/media',
                    },
                },
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/images',
                        },
                    },
                    'img-loader',
                ],
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
            },
        ],
    },
    optimization: options.optimization,
    plugins: [
        ...commonPlugins,
        ...options.plugins,
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.mjs', '.json', '.scss', '.tsx', '.ts'],
    },
    devtool: options.devtool,
    target: 'web', // make web variables accessible to webpack, e.g. window
    performance: options.performance || {},
    watch: options.watch,
    watchOptions: options.watchOptions,
    devServer: options.devServer || {},
});
