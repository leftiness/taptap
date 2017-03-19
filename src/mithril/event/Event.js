var t = require('tcomb')

/**
 * JavaScript event type
 */
var Event = t.struct(
  { isTrusted: t.Boolean },
  { name: 'Event', strict: true }
)

module.exports = Event
