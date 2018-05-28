var http=require('http')
  ,request = require('request')
  ,proxyhandle=function(req, res) { req.pipe(request( 'https://yhgao.cybozu-dev.com'+ req.url.split('=')[1])).pipe(res); };
http.createServer(proxyhandle).listen(process.env.PORT || '3128');