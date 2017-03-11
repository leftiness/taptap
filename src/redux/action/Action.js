var t = require('tcomb')

/**
 * Redux action
 */
var Action = t.struct(
  { type: t.String },
  { name: 'Action', strict: true }
)

module.exports = Action
