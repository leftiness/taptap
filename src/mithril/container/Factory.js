var t = require('tcomb')

var Store = require('../../redux/Store.js')
var store = require('../../redux/store.js')

var IS_CURRIED = true

var Dispatch = Store.prototype.Dispatch

/**
 * Factory to create a Container
 */
var Factory = t.struct(
  {
    State: t.Type,
    OwnProps: t.maybe(t.Type),
    StateProps: t.maybe(t.Type),
    DispatchProps: t.maybe(t.Type),
    MergeProps: t.maybe(t.Type),
    Component: t.Type
  },
  { name: 'container/Factory', strict: true }
)

function MapState () {
  return t.func([ this.State, this.OwnProps ], this.StateProps, 'MapState')
}

function MapDispatch () {
  return t.func([ Dispatch, this.OwnProps ], this.DispatchProps, 'MapDispatch')
}

function Merge () {
  return t.func(
    [ this.StateProps, this.DispatchProps, this.MergeProps ],
    Props,
    'Merge'
  )
}

/*
 * TODO
 * Do a better job with this typing. I wish I could use generics... I don't
 * like writing the type checking into the create() function, but putting
 * the types on the struct is the only way I could think to hold on to those
 * types until I needed them.
 */
var Create = t.func(
  [
    t.maybe(t.Function),
    t.maybe(t.Function),
    t.maybe(t.Function),
    t.Any,
    t.maybe(t.Any)
  ],
  t.Any,
  'Create'
)

function create(mapState, mapDispatch, merge, component, ownProps) {
  var stateProps
  var dispatchProps
  var mergeProps
  var props
  var Props = component.prototype.Props
  var state = store.getState()
  var dispatch = store.dispatch

  this.Component(component)

  if (mapState && this.MapState()(mapState))
    stateProps = mapState(state, ownProps)

  if (mapDispatch && this.MapDispatch()(mapDispatch))
    dispatchProps = mapDispatch(dispatch, ownProps)

  if (merge && this.Merge()(merge))
    mergeProps = merge(stateProps, dispatchProps, ownProps)

  props = Object.assign({}, stateProps, dispatchProps, mergeProps)

  return m.component(component, Props(props))
}

Factory.prototype.MapDispatch = MapDispatch
Factory.prototype.MapState = MapState
Factory.prototype.Merge = Merge
Factory.prototype.Create = Create
Factory.prototype.create = Create.of(create, IS_CURRIED)

module.exports = Factory
