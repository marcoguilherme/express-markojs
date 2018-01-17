var template = require('../views/home')

module.exports.exibe_index = function(app, req, res) {
  res.marko(template, {titulo : 'MarkoJs'})
}
