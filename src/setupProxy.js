const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
  app.use([
    createProxyMiddleware('/mock',{
      target: "https://660d2bd96ddfa2943b33731c.mockapi.io",
      changeOrigin: true,
      ws:true,
      pathRewrite: {"^/mock": ""},
    })
  ])
}