var t = require('tcomb')

var Action = require('../action/Action.js')
var Reducer = require('./Reducer.js')
var State = require('./State.js')

var IS_CURRIED = true
var INIT = State.prototype.init

/**
 * Provide a static Reducer create function
 */
var ReducerFactory = t.struct(
  {},
  { name: 'ReducerFactory', strict: true }
)

var Init = State.prototype.Init

var Create = t.func(
  [ Init, Reducer, t.maybe(State), Action ],
  State,
  'Create'
)

/**
 * Create a Reducer factory which will eventually create a Reducer
 * function that won't have to worry about whether State is null
 */
function create (init, reducer, state, action) {
  return state
    ? reducer(state, action)
    : reducer(init(), action)
}

ReducerFactory.prototype.Create = Create
ReducerFactory.prototype.withInit = Create.of(create, IS_CURRIED)
ReducerFactory.prototype.create = ReducerFactory.prototype.withInit(INIT)

module.exports = ReducerFactory
