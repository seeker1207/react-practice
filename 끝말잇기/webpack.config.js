const path = require('path');

module.exports = {
    name: 'word-relay-setting', // 이 세팅이 어떤 세팅인지
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
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },

    output: {
        path: path.join(__dirname, 'dist'), // 현재폴더(__dirname)에 dist 폴더 추가
        filename: 'app.js',
    }, // 출력

};