/* eslint-disable import/no-extraneous-dependencies, prefer-destructuring, object-curly-newline */
/**
 * UAT
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const clientDirectory = path.resolve(__dirname, '..');
const outputDirectory = path.resolve(__dirname, '../uat-build');

module.exports = require('./webpack.common.config')({
    mode: 'production',

    entry: [path.join(process.cwd(), './src/index.tsx')],

    // utilize long-term caching by adding content
    // hashes (not compilation hashes) to compiled assets
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        path: path.resolve(__dirname, '../uat-build'),
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
            chunks: 'all',
        },
        runtimeChunk: 'single',
        nodeEnv: false,
        usedExports: true, // remove unused function
    },

    plugins: [
        // minify and optimize the index.html
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
            favicon: 'favicon.ico',
            templateParameters: {
                htmlWebpackPlugin: {
                    options: {
                        buildTime: JSON.stringify(new Date()),
                    },
                },
            },
        }),
        new Dotenv({
            path: path.join(process.cwd(), './envs/.env.uat'),
        }),
        // Copy Static Files
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(clientDirectory, 'static/scripts'),
                    to: path.resolve(outputDirectory, 'scripts'),
                },
            ],
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],
});
