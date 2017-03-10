var mithril = require('mithril')
var words = require('random-words')

mithril.render(document.body, 'hello ' + words(1))
