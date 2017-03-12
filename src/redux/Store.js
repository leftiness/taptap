var t = require('tcomb')

var Action = require('./action/Action.js')
var State = require('./reducer/State.js')

var Dispatch = t.func([ Action ], t.Nil, 'Dispatch')
var GetState = t.func([], State, 'GetState')

/**
 * Redux store wrapper
 */
var Store = t.struct(
  {
    dispatch: Dispatch,
    getState: GetState
  },
  { strict: true }
)

Store.prototype.Dispatch = Dispatch
Store.prototype.GetState = GetState

module.exports = Store
