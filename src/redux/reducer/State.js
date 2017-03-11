var t = require('tcomb')

/**
 * Redux state
 */
var State = t.struct({}, { name: 'State', strict: true })

var Init = t.func([], State)

/**
 * Return the initial State
 */
function init () {
  return {}
}

State.prototype.init = Init.of(init)

module.exports = State
