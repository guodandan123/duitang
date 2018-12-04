const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/napi', { 
  	target: 'https://www.duitang.com',
  	host:"www.duitang.com",
  	changeOrigin:true

  }));
};




