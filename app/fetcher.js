exports = module.exports = function(www) {
  var Fetcher = require('anansi').Fetcher;
  
  var fetcher = new Fetcher(www);
  return fetcher;
}

exports['@implements'] = 'http://schemas.modulate.io/js/i/www/crawler/Fetcher';
exports['@require'] = [ 'http://i.bixbyjs.org/www/Client' ];
