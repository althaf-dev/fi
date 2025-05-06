/* eslint-disable import/no-extraneous-dependencies, prefer-destructuring, object-curly-newline */
/**
 * development env
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CommonWebpackConfig = require('./webpack.common.config.js');

// use this if you want to run webpack directly from root directory
const clientDirectory = path.resolve(process.cwd(), './client');

// use this if you want to run webpack directly from main server directory
// const clientDirectory = path.resolve(process.cwd(), '../client');

// use this if you want to run webpack directly from client directory
// const clientDirectory = path.resolve(process.cwd());

const plugins = [
    new webpack.HotModuleReplacementPlugin(), // hot reloading
    // new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
        template: path.join(clientDirectory, './index.dev.html'),
        favicon: path.join(clientDirectory, './favicon.ico'),
        templateParameters: {
            htmlWebpackPlugin: {
                options: {
                    buildTime: JSON.stringify(new Date()),
                },
            },
        },
    }),
    new Dotenv({
        path: path.join(clientDirectory, './envs/.env.dev'),
    }),
    // Copy Static Files
    // new CopyWebpackPlugin({
    //     patterns: [
    //         {
    //             // from: path.resolve(clientDirectory, 'static'),
    //             from: path.join(process.cwd(), './static/scripts'),
    //             to: path.join(process.cwd(), './dist/scripts'),
    //         },
    //     ],
    // }),
    // new BundleAnalyzerPlugin({ defaultSizes: 'gzip' }),
];

module.exports = CommonWebpackConfig({
    mode: 'development',

    entry: [path.join(clientDirectory, './src/index.dev.tsx')],

    // entry: {
    //     app: path.join(process.cwd(), './src/index.tsx'),
    //     communityApp: path.join(process.cwd(), './src/containers/communityApp'),
    // },

    // Don't use hashes in dev mode for better performance
    output: {
        filename: '[name].js',
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
                // individualNPMVendor: {
                //     test: /[\\/]node_modules[\\/]/,
                //     name(module) {
                //         // get the name. E.g. node_modules/packageName/not/this/part.js
                //         // or node_modules/packageName
                //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                //         // npm package names are URL-safe, but some servers don't like @ symbols
                //         return `otherVendors.${packageName.replace('@', '')}`;
                //     },
                // },
            },
            chunks: 'all',
            maxInitialRequests: Infinity,
            // minSize: 200000, // 200KB
            // maxSize: 240000, // 240KB
        },
        runtimeChunk: 'single',
        nodeEnv: false,
        usedExports: true, // remove unused function
    },

    watch: true,

    watchOptions: {
        ignored: [
            path.join(clientDirectory, '/server'),
            path.join(clientDirectory, '/node_modules'),
        ],
    },

    // Add development plugins
    plugins,

    // Emit a source map for easier debugging
    devtool: 'eval-source-map',

    performance: {
        hints: 'warning',
    },
});
