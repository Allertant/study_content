// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')



module.exports = {
    // 入口文件，相对路径即可
    entry:"./src/index.ts",
    // 打包文件所在的目录
    output:{
        // 需要指定绝对路径
        path:path.resolve(__dirname,'dist'),


        // 打包后的文件
        filename:'bundle.js',


        // 告诉webpack不使用箭头（ie不能使用箭头函数）
        environment:{
            arrowFunction:false,
            const:false
        },
    },
    // 指定webpack打包时要使用的模块
    module:{
        // 指定要加载的规则
        rules:[
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use:[
                    // 配置babel
                    {
                        // 指定加载器
                        loader:"babel-loader",
                        // 设置babel
                        options:{
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的浏览器
                                        targets:{
                                            // 代码需要兼容到chrome88
                                            "chrome":"88",
                                            "ie":"11"
                                        },
                                        // 使用3版本的corejs(一些类babel解析不了，需要引用corejs)
                                        "corejs":"3",
                                        // 使用corejs的方式——按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude:/node-modules/
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    // 引入postcss
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
                    "less-loader"
                ]
            },
        ]
    },
    // 配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:'这是一个自定义title'
            template:"./src/index.html"
        })
        
    ],
    devServer:{
        host:"localhost",
        port:"8080",
        open:true  // 是否自动打开浏览器
    },
    // 用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}
