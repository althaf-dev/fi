/* eslint-disable import/no-extraneous-dependencies, object-curly-newline */
/**

 * @file common client dev webpack configuration for local testing

 */

const { mergeWithRules, CustomizeRule } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CommonWebpackConfig = require('./webpack.common.config');

module.exports = (options) => {
    const commonWebpackResult = CommonWebpackConfig(options);
    const customRules = { module:
    { rules: [
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
                        // Set to dot (.) as we want to allow fonts to load from local source.
                        additionalData: "$var1: '.';",
                    },
                },
            ],
        },
    ] } };
    // Known issue https://github.com/survivejs/webpack-merge/issues/167 , hence refactored mergeRules
    const mergeRules = {
        module: {
            rules: {
                test: CustomizeRule.Match,
                use: {
                    loader: CustomizeRule.Match,
                    options: CustomizeRule.Merge,
                },
            },
        },
    };
    const mergedRules = mergeWithRules(mergeRules)(commonWebpackResult, customRules);

    return mergedRules;
};
