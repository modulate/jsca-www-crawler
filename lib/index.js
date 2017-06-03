/**
 * Expose component suite.
 */
exports = module.exports = function oauth2(id) {
  var map = {
    'crawler': './crawler',
    'fetcher': './fetcher',
    'frontier': './frontier',
    'urlset': './urlset'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  // Register specs so objects can be auto-wired by interface.
  container.register('fetcher');
  container.register('frontier');
  container.register('urlset');
}
