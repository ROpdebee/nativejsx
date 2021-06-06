module.exports = function setAttributes (element, attributes) {
  const isPlainObject = Object.prototype.toString.call(attributes) === '[object Object]' &&
    typeof attributes.constructor === 'function' &&
    Object.prototype.toString.call(attributes.constructor.prototype) === '[object Object]' &&
    Object.prototype.hasOwnProperty.call(attributes.constructor.prototype, 'isPrototypeOf')

  if (isPlainObject) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key])
    }
  } else {
    throw new DOMException('Failed to execute \'setAttributes\' on \'Element\': ' + Object.prototype.toString.call(attributes) + ' is not a plain object.')
  }
}
