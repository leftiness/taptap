var t = require('tcomb')

var Action = require('../action/Action.js')
var Reducer = require('./Reducer.js')
var State = require('./State.js')

var IS_CURRIED = true

/**
 * Provide a static Reducer create function
 */
var ReducerFactory = t.struct(
  {},
  { name: 'ReducerFactory', strict: true }
)

var Create = t.func([ Reducer, t.maybe(State), Action ], State)

/**
 * Create a Reducer factory which will eventually create a Reducer
 * function that won't have to worry about whether State is null
 */
function create (reducer, state, action) {
  if (!state) {
    state = State.prototype.init()
  }
  return reducer(state, action)
}

ReducerFactory.prototype.create = Create.of(create, IS_CURRIED)

module.exports = ReducerFactory
