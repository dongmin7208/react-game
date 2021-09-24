const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: {
        // app: ['./client.jsx', WordRelay.jsx]
        app: ['./client'],
    },
    //엔트리 > 모듈적용 > 아웃풋
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets: {
                            browsers:['> 5% in JP'], 
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    plugins: [],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
};
