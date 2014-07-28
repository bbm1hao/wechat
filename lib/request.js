var request = require('request');
var init = function (proxy) {
  if (proxy) {
    request = request.defaults({
      proxy: proxy
    });
    console.log('proxy set: ' + proxy);
    module.exports.module = request;
  }
};
console.log('init...');

module.exports.init = init;
module.exports.module = request;
