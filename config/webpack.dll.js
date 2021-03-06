const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const vendors = [
    'vue/dist/vue.js',
    'vuex',
    'vue-router',
    'rxjs',
    'vant',
    'axios',
    'core-js',
    'html-entities',
];

module.exports = {
    mode: 'production',
    output: {
        path: helpers.root('dist'),
        filename: '[name].[chunkhash].dll.js',
        library: '[name]_[chunkhash]',
    },
    entry: {
        vendor: vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: helpers.root('dist', 'manifest-vendor.json'),
            name: '[name]_[chunkhash]',
            context: __dirname,
        }),
    ]
};
