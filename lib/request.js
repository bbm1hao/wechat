var requestModule = require('request');

var init = function (proxy) {
  if (proxy) {
    requestModule = requestModule.defaults({
      proxy: proxy
    });
  }
};

module.exports = {
  module: requestModule,
  init: init
};