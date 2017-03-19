var Action = require('./Action.js')

var Create = t.func([], Action, 'Create')

function create () {
  return { type: 'INCREMENT' }
}

create.prototype.Create = Create

module.exports = Create.of(create)
