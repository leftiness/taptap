var mithril = require('mithril')

var MiddlewareFactory = require('./MiddlewareFactory.js')

/**
 * Redraw the mithril application whenever a redux action is dispatched
 */
function redraw (action) {
  mithril.redraw()
}

var middleware = MiddlewareFactory.prototype.create(redraw)

module.exports = middleware
