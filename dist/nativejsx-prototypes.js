/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 825:
/***/ ((module) => {

module.exports = function appendChildren (element, children) {
  children = Array.isArray(children) ? children : [children]
  children.forEach(function (child) {
    if (child instanceof HTMLElement) {
      element.appendChild(child)
    } else if (child || typeof child === 'string') {
      element.appendChild(document.createTextNode(child.toString()))
    }
  })
}


/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(function () {
  if (typeof HTMLElement.prototype.appendChildren !== 'function') {
    HTMLElement.prototype.appendChildren = function (children) {
      return __webpack_require__(825)(this, children)
    }
  }
})()


/***/ }),

/***/ 645:
/***/ ((module) => {

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


/***/ }),

/***/ 149:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(function () {
  if (typeof HTMLElement.prototype.setAttributes !== 'function') {
    HTMLElement.prototype.setAttributes = function (attributes) {
      return __webpack_require__(645)(this, attributes)
    }
  }
})()


/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = function setStyles (element, styles) {
  for (const style in styles) element.style[style] = styles[style]
}


/***/ }),

/***/ 544:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(function () {
  if (typeof HTMLElement.prototype.setStyles !== 'function') {
    HTMLElement.prototype.setStyles = function (styles) {
      return __webpack_require__(730)(this, styles)
    }
  }
})()


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__(149)
__webpack_require__(544)
__webpack_require__(178)

})();

/******/ })()
;