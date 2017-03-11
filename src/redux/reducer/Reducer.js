var t = require('tcomb')

var State = require('./State.js')
var Action = require('../action/Action.js')

var Reducer = t.func([ State, Action ], State)

module.exports = Reducer
