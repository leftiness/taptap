var t = require('tcomb')

var Event = require('./Event.js')

var Handler = t.func([ Event ], t.Nil, 'event/Handler')

module.exports = Handler
