var m = require('mithril')

var State = require('../../redux/reducer/State.js')
var Handler = require('../event/Handler.js')
var Factory = require('./Factory.js')
var button = require('../component/button.js')
var increment = require('../../redux/action/increment.js')

var Button = button.prototype.Button

var OwnProps = t.struct(
  { text: t.String },
  { name: 'incrementor/OwnProps', strict: true }
)

var DispatchProps = t.struct(
  { onclick: Handler },
  { name: 'incrementor/DispatchProps', strict: true }
)

var MergeProps = t.struct(
  { text: t.String },
  { name: 'incrementor/MergeProps', strict: true }
)

function mapDispatch (dispatch, ownProps) {
  return { onclick: increment }
}

function merge (stateProps, dispatchProps, ownProps) {
  return { text: ownProps.text }
}

var factory = {
  State: State,
  OwnProps: OwnProps,
  DispatchProps: DispatchProps,
  MergeProps: MergeProps,
  Component: Button
}

var incrementor = Factory.of(factory).create(null, mapDispatch, merge)(button)

component.prototype.State = State
component.prototype.OwnProps = OwnProps
component.prototype.DispatchProps = DispatchProps
component.prototype.MergeProps = MergeProps
component.prototype.Component = Button
component.prototype.mapDispatch = mapDispatch
component.prototype.merge = merge

module.exports = incrementor
