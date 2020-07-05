var config = require('./webpack.config.js');
var webpack = require('webpack');
var DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

config.entry = ['./app/App.js'];
config.optimization = {
    minimize:true
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new DuplicatePackageCheckerPlugin()
];

module.exports = config;