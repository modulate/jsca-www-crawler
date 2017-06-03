exports = module.exports = function(fetcher, frontier, urlset, logger) {
  var Crawler = require('anansi').Crawler;
  
  var crawler = new Crawler(fetcher, frontier, urlset);
  crawler.logger = logger;
  
  return crawler;
}

exports['@require'] = [ 'http://schemas.modulate.io/js/i/www/crawler/Fetcher',
                        'http://schemas.modulate.io/js/i/www/crawler/Frontier',
                        'http://schemas.modulate.io/js/i/www/crawler/URLSet',
                        'http://i.bixbyjs.org/Logger', '$container' ];
