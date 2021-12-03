const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;


module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'App2',
            filename: 'remoteEntry.js',
            exposes: {
                './Entry': './src/App',
            },
            shared: [
                {
                    'react': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    'react-dom': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps['react-dom'],
                    }
                }
            ]
        })
    ]
}