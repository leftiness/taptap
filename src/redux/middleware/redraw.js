var mithril = require('mithril')

var Factory = require('./Factory.js')

/**
 * Redraw the mithril application whenever a redux action is dispatched
 */
function redraw (action) {
  mithril.redraw()
}

var middleware = Factory.prototype.create(redraw)

module.exports = middleware
