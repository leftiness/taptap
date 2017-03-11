var t = require('tcomb')

var Action = require('../action/Action.js')

/**
 * Receive a redux action and perform some task
 */
var Middleware = t.func([ Action ], t.Nil)

module.exports = Middleware
