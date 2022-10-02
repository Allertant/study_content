const os = require('os');
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin");

const threads = os.cpus().length

// 用来处理样式的Loader
function getStyleLoader(pre){
    return [
        // 'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader:'postcss-loader',
            options:{
                postcssOptions:{
                    plugins:[
                        'postcss-preset-env'
                    ]
                }
            }
        },
        pre
    ].filter(Boolean)
}

module.exports = {
    // 入口
    entry:'./src/main.js',  //相对路径(不是配置文件的路径，而是运行指令npx的目录)
    // 输入
    output:{
        // path:输出路径(js文件的输出目录)
        path:path.resolve(__dirname,'../dist'),
        
        // filename:输出名称/应对未来的多文件打包或更改文件名
        filename:'static/js/[name].[contenthash:8].js',
        // 给打包输出的其他文件命名
        chunkFilename:'static/js/[name].chunk.[contenthash:8].js',
        // 图片、字体等通过type:asset处理资源命名方式
        assetModuleFilename:'static/media/[hash:10][ext][query]',
        // 自动清空上次打包的内容：在打包前，将path整个目录整个清空
        clean:true
    },
    // 加载器
    module:{
        rules:[
            // loader的规则/配置cv
            {
                oneOf:[
                    {
                        test:/\.css$/i, //监测css文件
                        use:getStyleLoader()
                        //使用xxx-loader进行处理（注意：先执行后面的Loader再执行前面的）
                        // css-laoder:将css资源编译成commonjs的模块到js中
                        // style-loader:将Js中css通过创建style标签添加html文件中生效
                    },
                    {
                        test:/\.less$/i,
                        // loader关键字只能引入一个loader，而use能引入多个loader
                        // 执行顺序：less-> css -> js -> <style></style>
                        use:getStyleLoader("less-loader")
                    },
                    {
                        test:/\.s[ac]ss$/i,
                        // loader关键字只能引入一个loader，而use能引入多个loader
                        // 执行顺序：less-> css -> js -> <style></style>
                        use:getStyleLoader("sass-loader")
                    },
                    {
                        test:/\.styl$/i,
                        use:getStyleLoader("stylus-loader")
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
                        generator:{
                            // 输出文件名称
                            // hash:哈希值(:10表示只取前十位)
                            // ext:文件扩展名，和之前的一样
                            // query:携带的其他参数
                            // filename:'static/images/[hash:10][ext][query]'
                        }
        
                    },
                    {
                        test:/\.(ttf|woff2?)$/i,
                        type:'asset/resource', //不会转换为base64的格式
                        generator:{
                            // 输出文件名称
                            // hash:哈希值(:10表示只取前十位)
                            // ext:文件扩展名，和之前的一样
                            // query:携带的其他参数
                            // filename:'static/media/[hash:10][ext][query]'
                        }
        
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
            context:path.resolve(__dirname,"../src"),  //设置代码检测的目录
            exclude:"/node_modules/",
            cache:true, // 开启缓存
            cacheLocation:path.resolve(
                __dirname,
                "../node_modules/.cache/eslintcache"
            ) ,
            threads // 开启多进程
        }),
        // 模板，以Public/index.html文件创建新的html文件
        // 新的html文件特点：1. 结构和原来一致；2. 自动引入打包输出的资源(如js\css等文件等)
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,"../public/index.html")
        }),
        // 提取css到一个单独文件中，这里设置路径为main.css
        new MiniCssExtractPlugin({
            filename:'static/css/[name].[contenthash:8].css',
            chunkFilename:'static/css/[name].chunk.[contenthash:8].css'
        }), 
        
        // new cssMinimizerPlugin(),
        // new TerserWebpackPlugin({
        //     paraller:threads
        // })
        new PreloadWebpackPlugin({
            // rel: "preload", // preload兼容性更好
            // as: "script",
            rel: 'prefetch' // prefetch兼容性更差
          }),
        new WorkboxPlugin.GenerateSW({
        // 这些选项帮助快速启用 ServiceWorkers
        // 不允许遗留任何“旧的” ServiceWorkers
        clientsClaim: true,
        skipWaiting: true,
        }),

    ],
    // 开发服务器——不会输出资源，在内存中编译打包                 
    // 注意webpack-dev-server的最新版本无法自动启动，而3.11.3版本可以启动
    devServer:{
        host:"localhost",
        port:"5050",
        open:true  // 是否自动打开浏览器
    },
    // 
    optimization:{
        // 放置压缩的插件
        minimizer:[
            new cssMinimizerPlugin(),
            new TerserWebpackPlugin({
                parallel:threads // 开启多进程和设置进程数量
            }),
            // 压缩图片
            new ImageMinimizerPlugin({
                minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    [
                        "svgo",
                        {
                        plugins: [
                            "preset-default",
                            "prefixIds",
                            {
                            name: "sortAttrs",
                            params: {
                                xmlnsOrder: "alphabetical",
                            },
                            },
                        ],
                        },
                    ],
                    ],
                },
                },
            }),
            
        ],
        // 代码分割配置(由于是单文件，因此无法完成多入口提取公共模块)
        splitChunks: {
            chunks: "all", // 对所有模块都进行分割
        // 其他内容用默认配置即可
        },
        // 生成runtime文件，构建索引关系，当引入文件发生改变时，仅改变时索引，无需对整个文件进行重新编译
        runtimeChunk:{
            name:(entrypoint) => `runtime~${entrypoint.name}.js`
        }
    },
    
    // 模式——生产(开启生产模式后，js和html资源默认会被压缩)
    mode:'production',
    devtool:'source-map'
    // 启动命令
    // npx webpack --config ./config/webpack.prod.js
}