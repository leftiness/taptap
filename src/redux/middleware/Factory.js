var t = require('tcomb')

var Action = require('../action/Action.js')
var Middleware = require('./Middleware.js')
var Store = require('../Store.js')

var IS_CURRIED = true

/**
 * Provide a static Middleware create function
 */
var Factory = t.struct(
  {},
  { name: 'middleware/Factory', strict: true }
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

Factory.prototype.Create = Create
Factory.prototype.create = Create.of(create, IS_CURRIED)

module.exports = Factory
