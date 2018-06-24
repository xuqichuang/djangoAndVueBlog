module.exports = {
  proxyList: {
        '/apis': {
            target: 'http://127.0.0.1:8000',  // 接口域名  测试环境
            // target: 'http://172.20.10.5:8000',  // 接口域名  本地打包
            // target: 'http://47.106.142.140:8000',  // 接口域名  生产环境
            changeOrigin: true,  //是否跨域
            secure: false,
            pathRewrite: {
                '^/apis': ''   //需要rewrite重写的,
            }              
        }
  }
}