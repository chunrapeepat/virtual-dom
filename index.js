const CREATE = 'CREATE'
const REMOVE = 'REMOVE'
const REPLACE = 'REPLACE'
const UPDATE = 'UPDATE'
const SET_PROP = 'SET_PROP'
const REMOVE_PROP = 'REMOVE PROP'

//// DIFF

function changed(node1, node2) {

}

function diffProps(newNode, oldNode) {

}

function diffChildren(newNode, oldNode) {

}

function diff(newNode, oldNode) {  //@

}

//// PATCH

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }
  return document.createElement(node.type)
}

function setProp(target, name, value) { //@

}

function setProps(target, props) {

}

function removeProp(target, name, value) { //@

}

function patchProps(parent, patches) {

}

function patch(parent, patches, index = 0) {

}

function flatten(arr) {
  return [].concat.apply([], arr)
}

function h(type, props, ...children) {
  props = props || {}
  return { type, props, children: flatten(children) }
}

function view(count) {
  return (
    <ul id="cool" className="foo">
      <li>Text 1</li>
      <li>Text 2</li>
    </ul>
  )
}

function tick(el, count) {

}

function render(el) {
  // create real-dom from virtual-dom and append to element
  el.appendChild(createElement(view(0)))
}
