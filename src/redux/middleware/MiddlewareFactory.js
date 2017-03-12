var t = require('tcomb')

var Action = require('../action/Action.js')
var Middleware = require('./Middleware.js')
var Store = require('../Store.js')

var IS_CURRIED = true

/**
 * Provide a static Middleware create function
 */
var MiddlewareFactory = t.struct(
  {},
  { name: 'MiddlewareFactory', strict: true }
)

var Create = t.func([ Middleware, Store, Middleware, Action ], t.Nil, 'Create')

/**
 * Create a Middleware factory which will eventually create a Middleware
 * function to call the next middleware before performing his assigned task.
 */
function create (task, store, next, action) {
  next(action)
  task(action)
}

MiddlewareFactory.prototype.Create = Create
MiddlewareFactory.prototype.create = Create.of(create, IS_CURRIED)

module.exports = MiddlewareFactory
