
const os = require('os');
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const threads = os.cpus().length

module.exports = {
    // 入口
    entry:'./src/main.js',  //相对路径(不是配置文件的路径，而是运行指令npx的目录)
    // 输入
    output:{
        // path:输出路径(js文件的输出目录)
        // path:path.resolve(__dirname,'../dist'),
        path:undefined,  //在开发模式下无输出，可以定义为undefined
        // filename:输出名称/应对未来的多文件打包或更改文件名
        filename:'static/js/[name].js',
        // 给打包输出的其他文件命名
        chunkFilename:'static/js/[name].chunk.js',
        // 图片、字体等通过type:asset处理资源命名方式
        assetModuleFilename:'static/media/[hash:10][ext][query]',
        // 自动清空上次打包的内容：在打包前，将path整个目录整个清空
        clean:true // 在开发模式下没有作用，因为在开发服务器模式下，没有任何的输出
    },
    // 加载器
    module:{
        rules:[
            // loader的规则/配置
           {
            oneOf:[
                {
                    test:/\.css$/i, //监测css文件
                    use:[
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ] //使用xxx-loader进行处理（注意：先执行后面的Loader再执行前面的）
                    // css-laoder:将css资源编译成commonjs的模块到js中
                    // style-loader:将Js中css通过创建style标签添加html文件中生效
                },
                {
                    test:/\.less$/i,
                    // loader关键字只能引入一个loader，而use能引入多个loader
                    // 执行顺序：less-> css -> js -> <style></style>
                    use:[
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader'
                    ]
                },
                {
                    test:/\.s[ac]ss$/i,
                    // loader关键字只能引入一个loader，而use能引入多个loader
                    // 执行顺序：less-> css -> js -> <style></style>
                    use:[
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test:/\.styl$/i,
                    use:[
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'stylus-loader'
                    ]
                },
                {
                    test:/\.(png|jpe?g|svg|webp|gif)$/i,
                    type:'asset',  //这种方式会转换为base64的格式
                    parser:{ 
                        // 小于10kb的图片转换为base64
                        // 优点：减少请求数量； 缺点：体积会更大
                        dataUrlCondition:{
                            maxSize: 10 * 1024 // 10 kb
                        }
                    },
                    // generator:{
                    //     // 输出文件名称
                    //     // hash:哈希值(:10表示只取前十位)
                    //     // ext:文件扩展名，和之前的一样
                    //     // query:携带的其他参数
                    //     filename:'static/images/[hash:10][ext][query]'
                    // }
    
                },
                {
                    test:/\.(ttf|woff2?)$/i,
                    type:'asset/resource', //不会转换为base64的格式
                    // generator:{
                    //     // 输出文件名称
                    //     // hash:哈希值(:10表示只取前十位)
                    //     // ext:文件扩展名，和之前的一样
                    //     // query:携带的其他参数
                    //     filename:'static/media/[hash:10][ext][query]'
                    // }
    
                },
                {
                    test:/\.js$/,
                    // exclude:/node_modules/,
                    include:path.resolve(__dirname,'../src'),
                    use:[
                        {
                            loader:'thread-loader',  //开启多进程
                            options:{
                                workers:threads  //进程数量
                            }
                        },
                        {
                            loader:'babel-loader',
                            options:{
                            // presets:['@babel/preset-env']
                                cacheDirectory:true, // 开启babel缓存
                                cacheCompression:false, // 关闭缓存文件压缩
                                plugins:['@babel/plugin-transform-runtime']
                            }
                        }
                    ]
                }
            ]
           }
        ]
    },
    // 插件
    plugins:[
        // plugins的配置
        new ESLintPlugin({
            // 检测哪些文件
            context:path.resolve(__dirname,'../src'),  //设置代码检测的目录
            exclude:"/node_modules/",
            cache:true, // 开启缓存
            cacheLocation:path.resolve(  //.设置缓存路径
                __dirname,
                '../node_modules/.cache/eslintcache'
            ) ,
            threads // 开启多进程
        }),
        // 模板，以Public/index.html文件创建新的html文件
        // 新的html文件特点：1. 结构和原来一致；2. 自动引入打包输出的资源
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,"../public/index.html")
        }), 
        new MiniCssExtractPlugin()
    ],

    // 开发服务器——不会输出资源，在内存中编译打包                 
    // 注意webpack-dev-server的最新版本无法自动启动，而3.11.3版本可以启动
    devServer:{
        host:"localhost",
        port:"5050",
        open:true,  // 是否自动打开浏览器
        hot:true  //  热模块替换
    },
    // 模式——开发
    mode:'development',
    devtool:'cheap-module-source-map'
    // 启动命令
    // npx webpack serve --config ./config/webpack.dev.js
}