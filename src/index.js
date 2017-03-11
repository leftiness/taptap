var m = require('mithril')
var redux = require('redux')

var reducers = require('./redux/reducer/index.js')
var middlewares = require('./redux/middleware/index.js')

var reducer = redux.combineReducers(reducers)
var middleware = redux.applyMiddleware.apply(null, middlewares)
var store = redux.createStore(reducer, middleware)

m.render(document.body, 'hello')
