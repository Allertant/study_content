const {createProxyMiddleware:proxy} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{ // 遇到/api1前缀的请求，就会触发该代理配置
            target:'http://localhost:5000',
            changeOrigin:true, // 控制服务器收到的响应头中host字段的值，让后端服务器任务请求来自于自己5000端口（可不写）
            pathRewrite:{'^/api1':''} // 重写请求路径（必须写）
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}
