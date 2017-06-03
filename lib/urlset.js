exports = module.exports = function(www, logger) {
  var URLSet = require('anansi').URLSet;
  
  var urlset = new URLSet();
  return urlset;
}

exports['@implements'] = 'http://schemas.modulate.io/js/i/www/crawler/URLSet';
exports['@require'] = [];
