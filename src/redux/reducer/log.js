var ReducerFactory = require('./ReducerFactory.js')

/*
 * TODO Redux requires some reducer in order to build. Remove before merging
 * into master.
 *
 * Log the previous state. Return the previous state unchanged.
 */
function log (previous, action) {
  console.log(previous)
  return previous
}

module.exports = ReducerFactory.prototype.create(log)
