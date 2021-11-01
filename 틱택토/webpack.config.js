const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'reaction-check-setting', // 이 세팅이 어떤 세팅인지
    mode: 'development', // 실서비스에서는 production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    },  //임력

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', {
                        targets: 'ie 11',
                    }], '@babel/preset-react'],
                    plugins: [
                        'react-refresh/babel'
                    ]
                }
            }
        ]
    },
    plugins: [
        new RefreshWebpackPlugin()
    ]
    ,
    output: {
        path: path.join(__dirname, 'dist'), // 현재폴더(__dirname)에 dist 폴더 추가
        filename: 'app.js',
        publicPath: '/dist'
    }, // 출력

    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    },

    target: ['web', 'es5'],

};