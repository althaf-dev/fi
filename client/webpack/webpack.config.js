/* eslint-disable import/no-extraneous-dependencies, prefer-destructuring, object-curly-newline */
/**
 * production & non-production envs, not for development
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LoadablePlugin = require('@loadable/webpack-plugin');

const CommonWebpackConfig = require('./webpack.common.config.js');

// const clientDirectory = path.resolve(__dirname, '..');
const outputDirectory = path.resolve(__dirname, '../build');

module.exports = CommonWebpackConfig({
    mode: 'production',

    entry: [path.join(process.cwd(), './src/index.tsx')],

    // utilize long-term caching by adding content
    // hashes (not compilation hashes) to compiled assets
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        path: outputDirectory,
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-router|history|react-is|react-redux|redux|redux-saga|@redux-saga|reselect|immer|shallowequal)[\\/]/,
                    name: 'reactVendor',
                },
                chartJs: {
                    test: /[\\/]node_modules[\\/](chart.js|react-chartjs-2)[\\/]/,
                    name: 'chartJSVendor',
                },
                lottie: {
                    test: /[\\/]node_modules[\\/](lottie-web|react-lottie)[\\/]/,
                    name: 'lottieVendor',
                },
                utility: {
                    test: /[\\/]node_modules[\\/](copy-text-to-clipboard|react-device-detect|react-intersection-observer|react-share|uuid|whatwg-fetch|react-modal|styled-components|style-loader|css-loader)[\\/]/,
                    name: 'utilityVendor',
                },
            },
            chunks: 'all',
            maxInitialRequests: Infinity,
        },
        runtimeChunk: 'single',
        nodeEnv: false,
        usedExports: true, // remove unused function
    },

    plugins: [
        // new BundleAnalyzerPlugin({ defaultSizes: 'gzip' }),
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
            scriptLoading: 'defer',
        }),
        new Dotenv({
            path: path.join(process.cwd(), './envs/.env.prod'),
        }),
        new webpack.HashedModuleIdsPlugin(),
        new LoadablePlugin(),
        // Copy Static Files
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(clientDirectory, 'static'),
        //             to: outputDirectory,
        //         },
        //     ],
        // }),
    ],
});
