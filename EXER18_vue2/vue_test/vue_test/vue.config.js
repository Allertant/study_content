// 自定义配置
module.exports = {
  pages:{
    index:{
      entry:'src/main.js'
    },
  },
  lintOnSave:false , //关闭语法检查
  // 开启代理服务器方式1（优先匹配8080资源）
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }
  // 开启代理服务器方式2（可以开启多个代理）
  devServer:{
    proxy:{
      '/api':{  // 请求前缀（根据请求前缀判断其请求目的地址）
        target:'http://localhost:5000', 
        pathRewrite:{'^/api':''}   ,                                               
        ws:true,  //用于支持websocket
        changeOrigin:true //用于控制请求头中的host值
      },
      '/foo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/foo':''}
      }
    }
  }
}