var t = require('tcomb')

var Action = require('./action/Action.js')
var State = require('./reducer/State.js')

/**
 * Redux store wrapper
 */
var Store = t.struct(
  {
    dispatch: t.func([ Action ], t.Nil),
    getState: t.func([], State)
  },
  { strict: true }
)

module.exports = Store
