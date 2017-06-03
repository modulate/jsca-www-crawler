exports = module.exports = function() {
  var Frontier = require('anansi').Frontier;
  
  var frontier = new Frontier();
  return frontier;
}

exports['@implements'] = 'http://schemas.modulate.io/js/i/www/crawler/Frontier';
exports['@require'] = [];
