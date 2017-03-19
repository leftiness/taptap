var m = require('mithril')

var store = require('./redux/store.js')
var incrementor = require('./mithril/container/incrementor.js')

var view = {
  view: function () {
    return m('div', [
      m('div', JSON.stringify(store.getState())),
      incrementor({ text: 'click me' }),
    ])
  }
}

m.mount(document.body, view)
