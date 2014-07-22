var request = require('request');
var init = function (proxy) {
  if (proxy) {
    request = request.defaults({
      proxy: proxy
    });
    console.log('proxy set: ' + proxy);
    request({url: 'http://bing.com'}, function(err, res, data) {
        if (err) {

        } else {

            console.log('data..');
        }
    });
    module.exports.module = request;
  }
};
// init('http://10.58.32.56:8080');
console.log('init...');

module.exports.init = init;
