const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        port: 8083
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'Utils',
            filename: 'remoteEntry.js',
            exposes: {
                './Math': './src/index',
            }
        })
    ]
}