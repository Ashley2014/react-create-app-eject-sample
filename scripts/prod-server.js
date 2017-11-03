
function getRandomIntInclusive(min, max,arr) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var num=Math.floor(Math.random() * (max - min + 1)) + min;
    arr.forEach(n=>{
        if(n==num){
            return getRandomIntInclusive(min, max,arr)
        }
    })

    return num
}
let randomPort=getRandomIntInclusive(1,65535,[21,22,80,443,8080,8360,3000,3012])


var config = {
  port:randomPort,
  autoOpenBrowser:true,
};
// console.log('tryrt')

var express = require('express');
var ip = require('ip');
var opn = require('opn'); // 浏览器打开页面
var proxy = require('http-proxy-middleware');
var path = require('path')
var app = express();
const proxySetting = require('../package.json').proxy;

//反向代理
Object.keys(proxySetting).forEach(n=>{
  app.use(n, proxy(proxySetting[n]));
})


// app.use('/api', proxy({
//   target: 'http://mall.weddingee.com',
//   changeOrigin: true,
//   pathRewrite: {'^/api' : ''},
//   onProxyRes:function(proxyReq, req, res) {
//
//   },
//   onProxyReQ:function(proxyReq, req, res) {
//     // add custom header to request
//     // or log the req
//   },
// }));
const IP = ip.address(); // IP 地址
var uri = `http://${IP}:${config.port}/`;
app.use('/', express.static(path.join(__dirname, '../build')));

// var https = require('https');
//
// https.createServer({}, app).listen(config.port+1);

app.listen(config.port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  opn(uri);

});

