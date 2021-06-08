const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //使用file-loader打包的文件需要添加dist路径才能找到文件
        //将index打包到dist的时候可能就不需要 publicPath 需要删掉
        // publicPath: 'dist/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                //style-loader负责将样式添加到DOM中
                //css-loader负责将css文件进行加载
                //执行顺序是从右往左，先进行css-loader再进行style-loader
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //小于于limit的时候会编译成base64格式
                        //大于limit的时候会用file-loader进行打包
                        //使用file-loader打包的文件需要添加publicPath才能找到文件
                        limit: 8192,
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }

        ]
    },
    resolve: {
        alias: {
            //让vue可以使用template
            'vue$': 'vue/dist/vue.esm.js'
        },
        //在引入文件时，不添加后缀的配置
        extensions: ['.js', '.css', '.vue']
    },
    plugins: [
        new webpack.BannerPlugin('最终解释权归tby所有'),


        new HtmlWebpackPlugin({
            template: 'index.html'
        }),


        //丑化代码，压缩文件大小
        new UglifyJsPlugin()
    ],
    devServer: {
        contentBase: './dist',
        inline: true,
    },
}