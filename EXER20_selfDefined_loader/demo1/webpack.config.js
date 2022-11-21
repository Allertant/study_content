
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TestPlugin = require('./plugins/test-webpack-plugin')
const BannerWebpackPlugin = require('./plugins/banner-webpack-plugin')
const CleanWebpackPlugin = require('./Plugins/clean-webpack-plugin')
const AnalyWebpackPlugin = require('./Plugins/analyze-webpack-plugin')
const InlineChunkWebpackPlugin = require('./Plugins/inline-chunk-webpack-plugin')

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name].js',
        // clean:true
    },
    module:{
        rules:[
            // {
            //     test:/\.js$/,
            //     loader:'./loader/tesxt-loader.js'
            // }
            {
                test:/\.js$/,
                // use:['./loader/demo/test1','./loader/demo/test2']
                // loader:'./loader/demo/test3.js'
                // use:[
                    // './loader/demo/test4.js','./loader/demo/test5.js','./loader/demo/test6.js'
                    // 上面的执行顺序是：先从前往后，执行pitch-loader;后从后往前，执行normal-loader
                // ],
                // loader:'./loader/clean-log-loader.js'
                loader:'./loader/banner-loader',
                options:{
                    author:'shiyixi'
                }
            },
            {
                test:/\.js$/,
                loader:'./loader/babel-loader/',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:['./loader/style-loader','css-loader']
                
            },
            {
                test:/\.(png|jpe?g|gif)/,
                loader:'./loader/file-loader',
                // 禁止webpack使用默认处理图片资源的方式，只使用file-loader的处理方法
                type:'javascript/auto'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./public/index.html')
        }), 
        // new TestPlugin(),
        new BannerWebpackPlugin({
            author:"shiyixi"
        }),
        new CleanWebpackPlugin(),
        new AnalyWebpackPlugin(),
        new InlineChunkWebpackPlugin([
            /runtime(.*)\.js$/g
        ])
    ],
    optimization:{
        splitChunks:{
            chunks:'all'
        },
        runtimeChunk:{
            name:entrypoint => `runtime~${entrypoint.name}.js`
        }
    },
    mode:'production'
}