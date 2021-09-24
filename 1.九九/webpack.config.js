const path = require('path');
const  webpack  = require('webpack');

module.exports = {
    mode: 'development', // production
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: {
        // app: ['./client.jsx', WordRelay.jsx]
        app: './client',
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
                    '@babel/preset-react',
                ],
            plugins: [],
            },
        }],
        },
        plugins:[
            new webpack.LoaderOptionsPlugin({debug: true}),
        ],
     output: {
         filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
};
