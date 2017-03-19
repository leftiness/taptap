var m = require('mithril')
var t = require('tcomb')

var Component = require('./Component.js')
var Handler = require('../event/Handler.js')

var Button = t.func([ Props ], Component, 'Button')

var Props = t.struct(
  {
    onclick: t.maybe(Handler),
    text: t.maybe(t.String)
  },
  { name: 'Button', strict: true }
)

/**
 * Button component implementation
 */
function button (props) {
  return m(
    'button',
    { onclick: props.onclick },
    props.text
  )
}

button.prototype.Props = Props
button.prototype.Button = Button

module.exports = Button.of(button)
