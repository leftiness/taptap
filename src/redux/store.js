var redux = require('redux')

var Store = require('./Store.js')
var reducers = require('./reducer/index.js')
var middlewares = require('./middleware/index.js')

var combineReducers = redux.combineReducers
var applyMiddleware = redux.applyMiddleware
var createStore = redux.createStore

var store = createStore(
  combineReducers(reducers),
  applyMiddleware.apply(null, middlewares)
)

module.exports = Store.of(store)
