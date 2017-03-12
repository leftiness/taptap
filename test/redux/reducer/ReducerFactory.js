var t = require('tap')
var td = require('testdouble')

var Factory = require('../../../src/redux/reducer/Factory.js')

t.test('reducer/Factory', function (t) {
  t.test('#withInit()', function (t) {
    var reducer = td.function('reducer')
    var state = {}
    var init = td.function('init')
    var action = { type: 'good' }

    t.afterEach(function (done) {
      td.reset()
      done()
    })

    t.test('with state', function (t) {
      var result

      td.when(reducer(state, action)).thenReturn(state)
      td.when(init()).thenThrow('should not use init function')

      result = Factory.prototype.withInit(init, reducer, state, action)

      t.equivalent(result, state)
      t.end()
    })

    t.test('without state', function (t) {
      var result

      td.when(init()).thenReturn(state)
      td.when(reducer(state, action)).thenReturn(state)

      result = Factory.prototype.withInit(
        init,
        reducer,
        undefined,
        action
      )

      t.equivalent(result, state)
      t.end()
    })

    t.end()
  })
  t.end()
})
