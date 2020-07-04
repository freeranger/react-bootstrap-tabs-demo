var path = require('path');
var webpack = require('webpack');

require('es6-promise').polyfill();

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/App.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot-loader/webpack', 'babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /(s-alert-default.css|s-alert-css-effects|normalize.css)/,
                loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
            },
            {
                test: /\.css$/,
                include: /(s-alert-default.css|s-alert-css-effects|normalize.css)/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?name=images/[name].[ext]&limit=8192'
            }
        ]
    },
    resolve: {
        modules: [__dirname, '..', 'app', 'node_modules'],
        extensions: ['.js', '.jsx', '.json', '.css']
    }
};
