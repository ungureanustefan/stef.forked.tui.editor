/**
 * @toast-ui/editor : viewer
 * @version 3.2.2 | Tue Nov 05 2024
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */

import { Renderer, ToastMark } from '@toast-ui/toastmark';
import { Plugin, PluginKey, Selection, TextSelection } from 'prosemirror-state';
import { InputRule, inputRules, undoInputRule } from 'prosemirror-inputrules';
import { Decoration, DecorationSet } from 'prosemirror-view';
import { keymap } from 'prosemirror-keymap';
import { Fragment } from 'prosemirror-model';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * // ES6
 * import forEachOwnProperties from 'tui-code-snippet/collection/forEachOwnProperties';
 * 
 * // CommonJS
 * const forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); 
 *
 * let sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *   sum += value;
 * });
 * alert(sum); // 6
 */
function forEachOwnProperties$1(obj, iteratee, context) {
  var key;

  context = context || null;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (iteratee.call(context, obj[key], key, obj) === false) {
        break;
      }
    }
  }
}

var forEachOwnProperties_1 = forEachOwnProperties$1;

/**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * @module object
 */

/**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */
function extend(target, objects) { // eslint-disable-line no-unused-vars
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var source, prop, i, len;

  for (i = 1, len = arguments.length; i < len; i += 1) {
    source = arguments[i];
    for (prop in source) {
      if (hasOwnProp.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}

var extend_1 = extend;

/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */
function isString$3(obj) {
  return typeof obj === 'string' || obj instanceof String;
}

var isString_1 = isString$3;

/**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */
function isArray$3(obj) {
  return obj instanceof Array;
}

var isArray_1 = isArray$3;

/**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * // ES6
 * import forEachArray from 'tui-code-snippet/collection/forEachArray';
 * 
 * // CommonJS
 * const forEachArray = require('tui-code-snippet/collection/forEachArray'); 
 *
 * let sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *   sum += value;
 * });
 * alert(sum); // 6
 */
function forEachArray$3(arr, iteratee, context) {
  var index = 0;
  var len = arr.length;

  context = context || null;

  for (; index < len; index += 1) {
    if (iteratee.call(context, arr[index], index, arr) === false) {
      break;
    }
  }
}

var forEachArray_1 = forEachArray$3;

/**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isArray$2 = isArray_1;
var forEachArray$2 = forEachArray_1;
var forEachOwnProperties = forEachOwnProperties_1;

/**
 * @module collection
 */

/**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * // ES6
 * import forEach from 'tui-code-snippet/collection/forEach'; 
 * 
 * // CommonJS
 * const forEach = require('tui-code-snippet/collection/forEach'); 
 *
 * let sum = 0;
 *
 * forEach([1,2,3], function(value){
 *   sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * const array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *   sum += value;
 * });
 */
function forEach$4(obj, iteratee, context) {
  if (isArray$2(obj)) {
    forEachArray$2(obj, iteratee, context);
  } else {
    forEachOwnProperties(obj, iteratee, context);
  }
}

var forEach_1 = forEach$4;

/**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var EVENT_KEY = '_feEventKey';

/**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */
function safeEvent$2(element, type) {
  var events = element[EVENT_KEY];
  var handlers;

  if (!events) {
    events = element[EVENT_KEY] = {};
  }

  handlers = events[type];
  if (!handlers) {
    handlers = events[type] = [];
  }

  return handlers;
}

var _safeEvent = safeEvent$2;

/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isString$2 = isString_1;
var forEach$3 = forEach_1;

var safeEvent$1 = _safeEvent;

/**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * const div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * const name = 'global';
 * const repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *   console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */
function on(element, types, handler, context) {
  if (isString$2(types)) {
    forEach$3(types.split(/\s+/g), function(type) {
      bindEvent(element, type, handler, context);
    });

    return;
  }

  forEach$3(types, function(func, type) {
    bindEvent(element, type, func, handler);
  });
}

/**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */
function bindEvent(element, type, handler, context) {
  /**
     * Event handler
     * @param {Event} e - event object
     */
  function eventHandler(e) {
    handler.call(context || element, e || window.event);
  }

  if ('addEventListener' in element) {
    element.addEventListener(type, eventHandler);
  } else if ('attachEvent' in element) {
    element.attachEvent('on' + type, eventHandler);
  }
  memorizeHandler(element, type, handler, eventHandler);
}

/**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function that user passed at on() use
 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
 * @private
 */
function memorizeHandler(element, type, handler, wrappedHandler) {
  var events = safeEvent$1(element, type);
  var existInEvents = false;

  forEach$3(events, function(obj) {
    if (obj.handler === handler) {
      existInEvents = true;

      return false;
    }

    return true;
  });

  if (!existInEvents) {
    events.push({
      handler: handler,
      wrappedHandler: wrappedHandler
    });
  }
}

var on_1 = on;

/**
 * @fileoverview Unbind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isString$1 = isString_1;
var forEach$2 = forEach_1;

var safeEvent = _safeEvent;

/**
 * Unbind DOM events
 * If a handler function is not passed, remove all events of that type.
 * @param {HTMLElement} element - element to unbind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {function} [handler] - handler function
 * @memberof module:domEvent
 * @example
 * // Following the example of domEvent#on
 * 
 * // Unbind one event from an element.
 * off(div, 'click', toggle);
 * 
 * // Unbind multiple events with a same handler from multiple elements at once.
 * // Use event names splitted by a space.
 * off(element, 'mouseenter mouseleave', changeColor);
 * 
 * // Unbind multiple events with different handlers from an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * off(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Unbind events without handlers.
 * off(div, 'drag');
 */
function off(element, types, handler) {
  if (isString$1(types)) {
    forEach$2(types.split(/\s+/g), function(type) {
      unbindEvent(element, type, handler);
    });

    return;
  }

  forEach$2(types, function(func, type) {
    unbindEvent(element, type, func);
  });
}

/**
 * Unbind DOM events
 * If a handler function is not passed, remove all events of that type.
 * @param {HTMLElement} element - element to unbind events
 * @param {string} type - events name
 * @param {function} [handler] - handler function
 * @private
 */
function unbindEvent(element, type, handler) {
  var events = safeEvent(element, type);
  var index;

  if (!handler) {
    forEach$2(events, function(item) {
      removeHandler(element, type, item.wrappedHandler);
    });
    events.splice(0, events.length);
  } else {
    forEach$2(events, function(item, idx) {
      if (handler === item.handler) {
        removeHandler(element, type, item.wrappedHandler);
        index = idx;

        return false;
      }

      return true;
    });
    events.splice(index, 1);
  }
}

/**
 * Remove an event handler
 * @param {HTMLElement} element - An element to remove an event
 * @param {string} type - event type
 * @param {function} handler - event handler
 * @private
 */
function removeHandler(element, type, handler) {
  if ('removeEventListener' in element) {
    element.removeEventListener(type, handler);
  } else if ('detachEvent' in element) {
    element.detachEvent('on' + type, handler);
  }
}

var off_1 = off;

/* eslint-disable complexity */

var isArray$1 = isArray_1;

/**
 * @module array
 */

/**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * // ES6
 * import inArray from 'tui-code-snippet/array/inArray';
 * 
 * // CommonJS
 * const inArray = require('tui-code-snippet/array/inArray');
 *
 * const arr = ['one', 'two', 'three', 'four'];
 * const idx1 = inArray('one', arr, 3); // -1
 * const idx2 = inArray('one', arr); // 0
 */
function inArray$3(searchElement, array, startIndex) {
  var i;
  var length;
  startIndex = startIndex || 0;

  if (!isArray$1(array)) {
    return -1;
  }

  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf.call(array, searchElement, startIndex);
  }

  length = array.length;
  for (i = startIndex; startIndex >= 0 && i < length; i += 1) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

var inArray_1 = inArray$3;

/**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */
function isUndefined$3(obj) {
  return obj === undefined; // eslint-disable-line no-undefined
}

var isUndefined_1 = isUndefined$3;

/**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isUndefined$2 = isUndefined_1;

/**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */
function getClass$3(element) {
  if (!element || !element.className) {
    return '';
  }

  if (isUndefined$2(element.className.baseVal)) {
    return element.className;
  }

  return element.className.baseVal;
}

var getClass_1 = getClass$3;

/**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isArray = isArray_1;
var isUndefined$1 = isUndefined_1;

/**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */
function setClassName$2(element, cssClass) {
  cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;

  cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

  if (isUndefined$1(element.className.baseVal)) {
    element.className = cssClass;

    return;
  }

  element.className.baseVal = cssClass;
}

var _setClassName = setClassName$2;

/**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var forEach$1 = forEach_1;
var inArray$2 = inArray_1;
var getClass$2 = getClass_1;
var setClassName$1 = _setClassName;

/**
 * domUtil module
 * @module domUtil
 */

/**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */
function addClass(element) {
  var cssClass = Array.prototype.slice.call(arguments, 1);
  var classList = element.classList;
  var newClass = [];
  var origin;

  if (classList) {
    forEach$1(cssClass, function(name) {
      element.classList.add(name);
    });

    return;
  }

  origin = getClass$2(element);

  if (origin) {
    cssClass = [].concat(origin.split(/\s+/), cssClass);
  }

  forEach$1(cssClass, function(cls) {
    if (inArray$2(cls, newClass) < 0) {
      newClass.push(cls);
    }
  });

  setClassName$1(element, newClass);
}

var addClass_1 = addClass;

/**
 * @fileoverview Remove css class from element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var forEachArray$1 = forEachArray_1;
var inArray$1 = inArray_1;
var getClass$1 = getClass_1;
var setClassName = _setClassName;

/**
 * Remove css class from element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to remove
 * @memberof module:domUtil
 */
function removeClass(element) {
  var cssClass = Array.prototype.slice.call(arguments, 1);
  var classList = element.classList;
  var origin, newClass;

  if (classList) {
    forEachArray$1(cssClass, function(name) {
      classList.remove(name);
    });

    return;
  }

  origin = getClass$1(element).split(/\s+/);
  newClass = [];
  forEachArray$1(origin, function(name) {
    if (inArray$1(name, cssClass) < 0) {
      newClass.push(name);
    }
  });

  setClassName(element, newClass);
}

var removeClass_1 = removeClass;

/**
 * @fileoverview Setting element style
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isString = isString_1;
var forEach = forEach_1;

/**
 * Setting element style
 * @param {(HTMLElement|SVGElement)} element - element to setting style
 * @param {(string|object)} key - style prop name or {prop: value} pair object
 * @param {string} [value] - style value
 * @memberof module:domUtil
 */
function css(element, key, value) {
  var style = element.style;

  if (isString(key)) {
    style[key] = value;

    return;
  }

  forEach(key, function(v, k) {
    style[k] = v;
  });
}

var css_1 = css;

/**
 * @fileoverview Transform the Array-like object to Array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var forEachArray = forEachArray_1;

/**
 * Transform the Array-like object to Array.
 * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
 * @param {*} arrayLike Array-like object
 * @returns {Array} Array
 * @memberof module:collection
 * @example
 * // ES6
 * import toArray from 'tui-code-snippet/collection/toArray'; 
 * 
 * // CommonJS
 * const toArray = require('tui-code-snippet/collection/toArray'); 
 *
 * const arrayLike = {
 *   0: 'one',
 *   1: 'two',
 *   2: 'three',
 *   3: 'four',
 *   length: 4
 * };
 * const result = toArray(arrayLike);
 *
 * alert(result instanceof Array); // true
 * alert(result); // one,two,three,four
 */
function toArray(arrayLike) {
  var arr;
  try {
    arr = Array.prototype.slice.call(arrayLike);
  } catch (e) {
    arr = [];
    forEachArray(arrayLike, function(value) {
      arr.push(value);
    });
  }

  return arr;
}

var toArray_1 = toArray;

/**
 * @fileoverview Check element has specific css class
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var inArray = inArray_1;
var getClass = getClass_1;

/**
 * Check element has specific css class
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {string} cssClass - css class
 * @returns {boolean}
 * @memberof module:domUtil
 */
function hasClass(element, cssClass) {
  var origin;

  if (element.classList) {
    return element.classList.contains(cssClass);
  }

  origin = getClass(element).split(/\s+/);

  return inArray(cssClass, origin) > -1;
}

var hasClass_1 = hasClass;

var TAG_NAME = '[A-Za-z][A-Za-z0-9-]*';
var ATTRIBUTE_NAME = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var UNQUOTED_VALUE = '[^"\'=<>`\\x00-\\x20]+';
var SINGLE_QUOTED_VALUE = "'[^']*'";
var DOUBLE_QUOTED_VALUE = '"[^"]*"';
var ATTRIBUTE_VALUE = "(?:" + UNQUOTED_VALUE + "|" + SINGLE_QUOTED_VALUE + "|" + DOUBLE_QUOTED_VALUE + ")";
var ATTRIBUTE_VALUE_SPEC = "" + '(?:\\s*=\\s*' + ATTRIBUTE_VALUE + ")";
var ATTRIBUTE = "" + '(?:\\s+' + ATTRIBUTE_NAME + ATTRIBUTE_VALUE_SPEC + "?)";
var OPEN_TAG = "<(" + TAG_NAME + ")(" + ATTRIBUTE + ")*\\s*/?>";
var CLOSE_TAG = "</(" + TAG_NAME + ")\\s*[>]";
var HTML_TAG = "(?:" + OPEN_TAG + "|" + CLOSE_TAG + ")";
var reHTMLTag = new RegExp("^" + HTML_TAG, 'i');

/**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */
function isNull$1(obj) {
  return obj === null;
}

var isNull_1 = isNull$1;

/Mac/.test(navigator.platform);
function includes(arr, targetItem) {
    return arr.indexOf(targetItem) !== -1;
}
var availableLinkAttributes = ['rel', 'target', 'hreflang', 'type'];
function sanitizeLinkAttribute(attribute) {
    if (!attribute) {
        return null;
    }
    var linkAttributes = {};
    availableLinkAttributes.forEach(function (key) {
        if (!isUndefined_1(attribute[key])) {
            linkAttributes[key] = attribute[key];
        }
    });
    return linkAttributes;
}
function last(arr) {
    return arr[arr.length - 1];
}
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
function deepMergedCopy(targetObj, obj) {
    var resultObj = __assign({}, targetObj);
    if (targetObj && obj) {
        Object.keys(obj).forEach(function (prop) {
            if (isObject(resultObj[prop])) {
                if (Array.isArray(obj[prop])) {
                    resultObj[prop] = deepCopyArray(obj[prop]);
                }
                else if (resultObj.hasOwnProperty(prop)) {
                    resultObj[prop] = deepMergedCopy(resultObj[prop], obj[prop]);
                }
                else {
                    resultObj[prop] = deepCopy(obj[prop]);
                }
            }
            else {
                resultObj[prop] = obj[prop];
            }
        });
    }
    return resultObj;
}
function deepCopyArray(items) {
    return items.map(function (item) {
        if (isObject(item)) {
            return Array.isArray(item) ? deepCopyArray(item) : deepCopy(item);
        }
        return item;
    });
}
function deepCopy(obj) {
    var keys = Object.keys(obj);
    if (!keys.length) {
        return obj;
    }
    return keys.reduce(function (acc, prop) {
        if (isObject(obj[prop])) {
            acc[prop] = Array.isArray(obj[prop]) ? deepCopyArray(obj[prop]) : deepCopy(obj[prop]);
        }
        else {
            acc[prop] = obj[prop];
        }
        return acc;
    }, {});
}
function assign(targetObj, obj) {
    if (obj === void 0) { obj = {}; }
    Object.keys(obj).forEach(function (prop) {
        if (targetObj.hasOwnProperty(prop) && typeof targetObj[prop] === 'object') {
            if (Array.isArray(obj[prop])) {
                targetObj[prop] = obj[prop];
            }
            else {
                assign(targetObj[prop], obj[prop]);
            }
        }
        else {
            targetObj[prop] = obj[prop];
        }
    });
    return targetObj;
}
function getSortedNumPair(valueA, valueB) {
    return valueA > valueB ? [valueB, valueA] : [valueA, valueB];
}

function isPositionInBox(style, offsetX, offsetY) {
    var left = parseInt(style.left, 10);
    var top = parseInt(style.top, 10);
    var width = parseInt(style.width, 10) + parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
    var height = parseInt(style.height, 10) + parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    return offsetX >= left && offsetX <= left + width && offsetY >= top && offsetY <= top + height;
}
var CLS_PREFIX = 'toastui-editor-';
function cls() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        var className = void 0;
        if (Array.isArray(name_1)) {
            className = name_1[0] ? name_1[1] : null;
        }
        else {
            className = name_1;
        }
        if (className) {
            result.push("" + CLS_PREFIX + className);
        }
    }
    return result.join(' ');
}
function removeNode(node) {
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
function toggleClass(element, className, state) {
    if (isUndefined_1(state)) {
        state = !hasClass_1(element, className);
    }
    var toggleFn = state ? addClass_1 : removeClass_1;
    toggleFn(element, className);
}
function createElementWith(contents, target) {
    var container = document.createElement('div');
    if (isString_1(contents)) {
        container.innerHTML = contents;
    }
    else {
        container.appendChild(contents);
    }
    var firstChild = container.firstChild;
    if (target) {
        target.appendChild(firstChild);
    }
    return firstChild;
}
function removeProseMirrorHackNodes(html) {
    var reProseMirrorImage = /<img class="ProseMirror-separator" alt="">/g;
    var reProseMirrorTrailingBreak = / class="ProseMirror-trailingBreak"/g;
    var resultHTML = html;
    resultHTML = resultHTML.replace(reProseMirrorImage, '');
    resultHTML = resultHTML.replace(reProseMirrorTrailingBreak, '');
    return resultHTML;
}

/**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */
function isFunction(obj) {
  return obj instanceof Function;
}

var isFunction_1 = isFunction;

function getMdStartCh(mdNode) {
    return mdNode.sourcepos[0][1];
}
function isInlineNode(mdNode) {
    switch (mdNode.type) {
        case 'code':
        case 'text':
        case 'emph':
        case 'strong':
        case 'strike':
        case 'link':
        case 'image':
        case 'htmlInline':
        case 'linebreak':
        case 'softbreak':
        case 'customInline':
            return true;
        default:
            return false;
    }
}
function findClosestNode(mdNode, condition, includeSelf) {
    if (includeSelf === void 0) { includeSelf = true; }
    mdNode = includeSelf ? mdNode : mdNode.parent;
    while (mdNode && mdNode.type !== 'document') {
        if (condition(mdNode)) {
            return mdNode;
        }
        mdNode = mdNode.parent;
    }
    return null;
}
function getInlineMarkdownText(mdNode) {
    var text = mdNode.firstChild.literal;
    switch (mdNode.type) {
        case 'emph':
            return "*" + text + "*";
        case 'strong':
            return "**" + text + "**";
        case 'strike':
            return "~~" + text + "~~";
        case 'code':
            return "`" + text + "`";
        case 'link':
        case 'image':
            /* eslint-disable no-case-declarations */
            var _a = mdNode, destination = _a.destination, title = _a.title;
            var delim = mdNode.type === 'link' ? '' : '!';
            return delim + "[" + text + "](" + destination + (title ? " \"" + title + "\"" : '') + ")";
        default:
            return null;
    }
}

var widgetRuleMap = {};
var reWidgetPrefix = /\$\$widget\d+\s/;
function unwrapWidgetSyntax(text) {
    var index = text.search(reWidgetPrefix);
    if (index !== -1) {
        var rest = text.substring(index);
        var replaced = rest.replace(reWidgetPrefix, '').replace('$$', '');
        text = text.substring(0, index);
        text += unwrapWidgetSyntax(replaced);
    }
    return text;
}
function widgetToDOM(info, text) {
    var _a = widgetRuleMap[info], rule = _a.rule, toDOM = _a.toDOM;
    var matches = unwrapWidgetSyntax(text).match(rule);
    if (matches) {
        text = matches[0];
    }
    return toDOM(text);
}
function getWidgetContent(widgetNode) {
    var event;
    var text = '';
    var walker = widgetNode.walker();
    while ((event = walker.next())) {
        var node = event.node, entering = event.entering;
        if (entering) {
            if (node !== widgetNode && node.type !== 'text') {
                text += getInlineMarkdownText(node);
                // skip the children
                walker.resumeAt(widgetNode, false);
                walker.next();
            }
            else if (node.type === 'text') {
                text += node.literal;
            }
        }
    }
    return text;
}

/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var hasOwnProperty = Object.hasOwnProperty,
    setPrototypeOf = Object.setPrototypeOf,
    isFrozen = Object.isFrozen,
    getPrototypeOf = Object.getPrototypeOf,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze,
    seal = Object.seal,
    create = Object.create; // eslint-disable-line import/no-mutable-exports

var _ref = typeof Reflect !== 'undefined' && Reflect,
    apply = _ref.apply,
    construct = _ref.construct;

if (!apply) {
  apply = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}

if (!freeze) {
  freeze = function freeze(x) {
    return x;
  };
}

if (!seal) {
  seal = function seal(x) {
    return x;
  };
}

if (!construct) {
  construct = function construct(Func, args) {
    return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
  };
}

var arrayForEach = unapply(Array.prototype.forEach);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);

var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);

var regExpTest = unapply(RegExp.prototype.test);

var typeErrorCreate = unconstruct(TypeError);

function unapply(func) {
  return function (thisArg) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return apply(func, thisArg, args);
  };
}

function unconstruct(func) {
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return construct(func, args);
  };
}

/* Add properties to a lookup table */
function addToSet(set, array) {
  if (setPrototypeOf) {
    // Make 'in' and truthy checks like Boolean(set.constructor)
    // independent of any properties defined on Object.prototype.
    // Prevent prototype setters from intercepting set as a this value.
    setPrototypeOf(set, null);
  }

  var l = array.length;
  while (l--) {
    var element = array[l];
    if (typeof element === 'string') {
      var lcElement = stringToLowerCase(element);
      if (lcElement !== element) {
        // Config presets (e.g. tags.js, attrs.js) are immutable.
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }

        element = lcElement;
      }
    }

    set[element] = true;
  }

  return set;
}

/* Shallow clone an object */
function clone(object) {
  var newObject = create(null);

  var property = void 0;
  for (property in object) {
    if (apply(hasOwnProperty, object, [property])) {
      newObject[property] = object[property];
    }
  }

  return newObject;
}

/* IE10 doesn't support __lookupGetter__ so lets'
 * simulate it. It also automatically checks
 * if the prop is function or getter and behaves
 * accordingly. */
function lookupGetter(object, prop) {
  while (object !== null) {
    var desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }

      if (typeof desc.value === 'function') {
        return unapply(desc.value);
      }
    }

    object = getPrototypeOf(object);
  }

  function fallbackValue(element) {
    console.warn('fallback value for', element);
    return null;
  }

  return fallbackValue;
}

var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

// SVG
var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);

var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

// List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.
var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'feimage', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);

var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

// Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.
var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);

var text = freeze(['#text']);

var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);

var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

// eslint-disable-next-line unicorn/better-regex
var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};

/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
 * @param {Document} document The document object (to determine policy name suffix)
 * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
 * are not supported).
 */
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
  if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
    return null;
  }

  // Allow the callers to control the unique policy name
  // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
  // Policy creation with duplicate names throws in Trusted Types.
  var suffix = null;
  var ATTR_NAME = 'data-tt-policy-suffix';
  if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
    suffix = document.currentScript.getAttribute(ATTR_NAME);
  }

  var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML: function createHTML(html$$1) {
        return html$$1;
      }
    });
  } catch (_) {
    // Policy creation failed (most likely another DOMPurify script has
    // already run). Skip creating the policy, as this will only cause errors
    // if TT are enforced.
    console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
    return null;
  }
};

function createDOMPurify() {
  var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

  var DOMPurify = function DOMPurify(root) {
    return createDOMPurify(root);
  };

  /**
   * Version label, exposed for easier checks
   * if DOMPurify is up to date or not
   */
  DOMPurify.version = '2.3.3';

  /**
   * Array of elements that DOMPurify removed during sanitation.
   * Empty if nothing was removed.
   */
  DOMPurify.removed = [];

  if (!window || !window.document || window.document.nodeType !== 9) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;

    return DOMPurify;
  }

  var originalDocument = window.document;

  var document = window.document;
  var DocumentFragment = window.DocumentFragment,
      HTMLTemplateElement = window.HTMLTemplateElement,
      Node = window.Node,
      Element = window.Element,
      NodeFilter = window.NodeFilter,
      _window$NamedNodeMap = window.NamedNodeMap,
      NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
      Text = window.Text,
      Comment = window.Comment,
      DOMParser = window.DOMParser,
      trustedTypes = window.trustedTypes;


  var ElementPrototype = Element.prototype;

  var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
  var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
  var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
  var getParentNode = lookupGetter(ElementPrototype, 'parentNode');

  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.
  if (typeof HTMLTemplateElement === 'function') {
    var template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }

  var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
  var emptyHTML = trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML('') : '';

  var _document = document,
      implementation = _document.implementation,
      createNodeIterator = _document.createNodeIterator,
      createDocumentFragment = _document.createDocumentFragment,
      getElementsByTagName = _document.getElementsByTagName;
  var importNode = originalDocument.importNode;


  var documentMode = {};
  try {
    documentMode = clone(document).documentMode ? document.documentMode : {};
  } catch (_) {}

  var hooks = {};

  /**
   * Expose whether this browser supports running the full DOMPurify.
   */
  DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;

  var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
      ERB_EXPR$$1 = ERB_EXPR,
      DATA_ATTR$$1 = DATA_ATTR,
      ARIA_ATTR$$1 = ARIA_ATTR,
      IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
  var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */

  /* allowed element names */

  var ALLOWED_TAGS = null;
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  var FORBID_TAGS = null;

  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  var FORBID_ATTR = null;

  /* Decide if ARIA attributes are okay */
  var ALLOW_ARIA_ATTR = true;

  /* Decide if custom data attributes are okay */
  var ALLOW_DATA_ATTR = true;

  /* Decide if unknown protocols are okay */
  var ALLOW_UNKNOWN_PROTOCOLS = false;

  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  var SAFE_FOR_TEMPLATES = false;

  /* Decide if document with <html>... should be returned */
  var WHOLE_DOCUMENT = false;

  /* Track whether config is already set on this instance of DOMPurify. */
  var SET_CONFIG = false;

  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  var FORCE_BODY = false;

  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  var RETURN_DOM = false;

  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */
  var RETURN_DOM_FRAGMENT = false;

  /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
   * `Node` is imported into the current `Document`. If this flag is not enabled the
   * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
   * DOMPurify.
   *
   * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
   * might cause XSS from attacks hidden in closed shadowroots in case the browser
   * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
   */
  var RETURN_DOM_IMPORT = true;

  /* Try to return a Trusted Type object instead of a string, return a string in
   * case Trusted Types are not supported  */
  var RETURN_TRUSTED_TYPE = false;

  /* Output should be free from DOM clobbering attacks? */
  var SANITIZE_DOM = true;

  /* Keep element content when removing element? */
  var KEEP_CONTENT = true;

  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */
  var IN_PLACE = false;

  /* Allow usage of profiles like html, svg and mathMl */
  var USE_PROFILES = {};

  /* Tags to ignore content of when KEEP_CONTENT is true */
  var FORBID_CONTENTS = null;
  var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

  /* Tags that are safe for data: URIs */
  var DATA_URI_TAGS = null;
  var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

  /* Attributes safe for values like "javascript:" */
  var URI_SAFE_ATTRIBUTES = null;
  var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);

  var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
  /* Document namespace */
  var NAMESPACE = HTML_NAMESPACE;
  var IS_EMPTY_INPUT = false;

  /* Parsing of strict XHTML documents */
  var PARSER_MEDIA_TYPE = void 0;
  var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
  var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
  var transformCaseFunc = void 0;

  /* Keep a reference to config to pass to hooks */
  var CONFIG = null;

  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */

  var formElement = document.createElement('form');

  /**
   * _parseConfig
   *
   * @param  {Object} cfg optional config literal
   */
  // eslint-disable-next-line complexity
  var _parseConfig = function _parseConfig(cfg) {
    if (CONFIG && CONFIG === cfg) {
      return;
    }

    /* Shield configuration object from tampering */
    if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
      cfg = {};
    }

    /* Shield configuration object from prototype pollution */
    cfg = clone(cfg);

    /* Set configuration parameters */
    ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
    URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
    FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
    USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT !== false; // Default true
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
    IN_PLACE = cfg.IN_PLACE || false; // Default false
    IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;

    PARSER_MEDIA_TYPE =
    // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;

    // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
    transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? function (x) {
      return x;
    } : stringToLowerCase;

    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }

    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }

    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html);
        addToSet(ALLOWED_ATTR, html$1);
      }

      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg$1);
        addToSet(ALLOWED_ATTR, xml);
      }

      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl);
        addToSet(ALLOWED_ATTR, mathMl$1);
        addToSet(ALLOWED_ATTR, xml);
      }
    }

    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }

      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
    }

    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }

      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
    }

    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
    }

    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }

      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS);
    }

    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }

    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
    }

    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
      delete FORBID_TAGS.tbody;
    }

    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (freeze) {
      freeze(cfg);
    }

    CONFIG = cfg;
  };

  var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);

  var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']);

  /* Keep track of all possible SVG and MathML tags
   * so that we can perform the namespace checks
   * correctly. */
  var ALL_SVG_TAGS = addToSet({}, svg);
  addToSet(ALL_SVG_TAGS, svgFilters);
  addToSet(ALL_SVG_TAGS, svgDisallowed);

  var ALL_MATHML_TAGS = addToSet({}, mathMl);
  addToSet(ALL_MATHML_TAGS, mathMlDisallowed);

  /**
   *
   *
   * @param  {Element} element a DOM element whose namespace is being checked
   * @returns {boolean} Return false if the element has a
   *  namespace that a spec-compliant parser would never
   *  return. Return true otherwise.
   */
  var _checkValidNamespace = function _checkValidNamespace(element) {
    var parent = getParentNode(element);

    // In JSDOM, if we're inside shadow DOM, then parentNode
    // can be null. We just simulate parent in this case.
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: HTML_NAMESPACE,
        tagName: 'template'
      };
    }

    var tagName = stringToLowerCase(element.tagName);
    var parentTagName = stringToLowerCase(parent.tagName);

    if (element.namespaceURI === SVG_NAMESPACE) {
      // The only way to switch from HTML namespace to SVG
      // is via <svg>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'svg';
      }

      // The only way to switch from MathML to SVG is via
      // svg if parent is either <annotation-xml> or MathML
      // text integration points.
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }

      // We only allow elements that are defined in SVG
      // spec. All others are disallowed in SVG namespace.
      return Boolean(ALL_SVG_TAGS[tagName]);
    }

    if (element.namespaceURI === MATHML_NAMESPACE) {
      // The only way to switch from HTML namespace to MathML
      // is via <math>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'math';
      }

      // The only way to switch from SVG to MathML is via
      // <math> and HTML integration points
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
      }

      // We only allow elements that are defined in MathML
      // spec. All others are disallowed in MathML namespace.
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }

    if (element.namespaceURI === HTML_NAMESPACE) {
      // The only way to switch from SVG to HTML is via
      // HTML integration points, and from MathML to HTML
      // is via MathML text integration points
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }

      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }

      // Certain elements are allowed in both SVG and HTML
      // namespace. We need to specify them explicitly
      // so that they don't get erronously deleted from
      // HTML namespace.
      var commonSvgAndHTMLElements = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

      // We disallow tags that are specific for MathML
      // or SVG and should never appear in HTML namespace
      return !ALL_MATHML_TAGS[tagName] && (commonSvgAndHTMLElements[tagName] || !ALL_SVG_TAGS[tagName]);
    }

    // The code should never reach this place (this means
    // that the element somehow got namespace that is not
    // HTML, SVG or MathML). Return false just in case.
    return false;
  };

  /**
   * _forceRemove
   *
   * @param  {Node} node a DOM node
   */
  var _forceRemove = function _forceRemove(node) {
    arrayPush(DOMPurify.removed, { element: node });
    try {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      node.parentNode.removeChild(node);
    } catch (_) {
      try {
        node.outerHTML = emptyHTML;
      } catch (_) {
        node.remove();
      }
    }
  };

  /**
   * _removeAttribute
   *
   * @param  {String} name an Attribute name
   * @param  {Node} node a DOM node
   */
  var _removeAttribute = function _removeAttribute(name, node) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: node.getAttributeNode(name),
        from: node
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: node
      });
    }

    node.removeAttribute(name);

    // We void attribute values for unremovable "is"" attributes
    if (name === 'is' && !ALLOWED_ATTR[name]) {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(node);
        } catch (_) {}
      } else {
        try {
          node.setAttribute(name, '');
        } catch (_) {}
      }
    }
  };

  /**
   * _initDocument
   *
   * @param  {String} dirty a string of dirty markup
   * @return {Document} a DOM, filled with the dirty markup
   */
  var _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    var doc = void 0;
    var leadingWhitespace = void 0;

    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    } else {
      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
      var matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }

    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml') {
      // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
    }

    var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    /*
     * Use the DOMParser API by default, fallback later if needs be
     * DOMParser not work for svg when has multiple root element.
     */
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {}
    }

    /* Use createHTMLDocument in case DOMParser is not available */
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, 'template', null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? '' : dirtyPayload;
      } catch (_) {
        // Syntax error if dirtyPayload is invalid xml
      }
    }

    var body = doc.body || doc.documentElement;

    if (dirty && leadingWhitespace) {
      body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }

    /* Work on whole document or just its body */
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
    }

    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };

  /**
   * _createIterator
   *
   * @param  {Document} root document/fragment to create iterator for
   * @return {Iterator} iterator instance
   */
  var _createIterator = function _createIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
  };

  /**
   * _isClobbered
   *
   * @param  {Node} elm element to check for clobbering attacks
   * @return {Boolean} true if clobbered, false if safe
   */
  var _isClobbered = function _isClobbered(elm) {
    if (elm instanceof Text || elm instanceof Comment) {
      return false;
    }

    if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function') {
      return true;
    }

    return false;
  };

  /**
   * _isNode
   *
   * @param  {Node} obj object to check whether it's a DOM node
   * @return {Boolean} true is object is a DOM node
   */
  var _isNode = function _isNode(object) {
    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
  };

  /**
   * _executeHook
   * Execute user configurable hooks
   *
   * @param  {String} entryPoint  Name of the hook's entry point
   * @param  {Node} currentNode node to work on with the hook
   * @param  {Object} data additional hook parameters
   */
  var _executeHook = function _executeHook(entryPoint, currentNode, data) {
    if (!hooks[entryPoint]) {
      return;
    }

    arrayForEach(hooks[entryPoint], function (hook) {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  };

  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   *
   * @param   {Node} currentNode to check for permission to exist
   * @return  {Boolean} true if node was killed, false if left alive
   */
  var _sanitizeElements = function _sanitizeElements(currentNode) {
    var content = void 0;

    /* Execute a hook if present */
    _executeHook('beforeSanitizeElements', currentNode, null);

    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Check if tagname contains Unicode */
    if (stringMatch(currentNode.nodeName, /[\u0080-\uFFFF]/)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Now let's check the element's type and name */
    var tagName = transformCaseFunc(currentNode.nodeName);

    /* Execute a hook if present */
    _executeHook('uponSanitizeElement', currentNode, {
      tagName: tagName,
      allowedTags: ALLOWED_TAGS
    });

    /* Detect mXSS attempts abusing namespace confusion */
    if (!_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Mitigate a problem with templates inside select */
    if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Keep content except for bad-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        var parentNode = getParentNode(currentNode) || currentNode.parentNode;
        var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

        if (childNodes && parentNode) {
          var childCount = childNodes.length;

          for (var i = childCount - 1; i >= 0; --i) {
            parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
          }
        }
      }

      _forceRemove(currentNode);
      return true;
    }

    /* Check whether element has a valid namespace */
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }

    if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }

    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
      /* Get the element's text content */
      content = currentNode.textContent;
      content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
      content = stringReplace(content, ERB_EXPR$$1, ' ');
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeElements', currentNode, null);

    return false;
  };

  /**
   * _isValidAttribute
   *
   * @param  {string} lcTag Lowercase tag name of containing element.
   * @param  {string} lcName Lowercase attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid, otherwise false.
   */
  // eslint-disable-next-line complexity
  var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }

    /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      return false;

      /* Check value is safe. First, is attr inert? If so, is safe */
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
      return false;
    }

    return true;
  };

  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param  {Node} currentNode to sanitize
   */
  var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    var attr = void 0;
    var value = void 0;
    var lcName = void 0;
    var l = void 0;
    /* Execute a hook if present */
    _executeHook('beforeSanitizeAttributes', currentNode, null);

    var attributes = currentNode.attributes;

    /* Check if we have attributes; if not we might have a text node */

    if (!attributes) {
      return;
    }

    var hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR
    };
    l = attributes.length;

    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      attr = attributes[l];
      var _attr = attr,
          name = _attr.name,
          namespaceURI = _attr.namespaceURI;

      value = stringTrim(attr.value);
      lcName = transformCaseFunc(name);

      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
      _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
      value = hookEvent.attrValue;
      /* Did the hooks approve of the attribute? */
      if (hookEvent.forceKeepAttr) {
        continue;
      }

      /* Remove attribute */
      _removeAttribute(name, currentNode);

      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        continue;
      }

      /* Work around a security issue in jQuery 3.0 */
      if (regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }

      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
        value = stringReplace(value, ERB_EXPR$$1, ' ');
      }

      /* Is `value` valid for this attribute? */
      var lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }

      /* Handle invalid data-* attribute set by try-catching it */
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
          currentNode.setAttribute(name, value);
        }

        arrayPop(DOMPurify.removed);
      } catch (_) {}
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeAttributes', currentNode, null);
  };

  /**
   * _sanitizeShadowDOM
   *
   * @param  {DocumentFragment} fragment to iterate over recursively
   */
  var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    var shadowNode = void 0;
    var shadowIterator = _createIterator(fragment);

    /* Execute a hook if present */
    _executeHook('beforeSanitizeShadowDOM', fragment, null);

    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHook('uponSanitizeShadowNode', shadowNode, null);

      /* Sanitize tags and elements */
      if (_sanitizeElements(shadowNode)) {
        continue;
      }

      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(shadowNode);
    }

    /* Execute a hook if present */
    _executeHook('afterSanitizeShadowDOM', fragment, null);
  };

  /**
   * Sanitize
   * Public method providing core sanitation functionality
   *
   * @param {String|Node} dirty string or DOM node
   * @param {Object} configuration object
   */
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty, cfg) {
    var body = void 0;
    var importedNode = void 0;
    var currentNode = void 0;
    var oldNode = void 0;
    var returnNode = void 0;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = '<!-->';
    }

    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      // eslint-disable-next-line no-negated-condition
      if (typeof dirty.toString !== 'function') {
        throw typeErrorCreate('toString is not a function');
      } else {
        dirty = dirty.toString();
        if (typeof dirty !== 'string') {
          throw typeErrorCreate('dirty is not a string, aborting');
        }
      }
    }

    /* Check we can run. Otherwise fall back or ignore */
    if (!DOMPurify.isSupported) {
      if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
        if (typeof dirty === 'string') {
          return window.toStaticHTML(dirty);
        }

        if (_isNode(dirty)) {
          return window.toStaticHTML(dirty.outerHTML);
        }
      }

      return dirty;
    }

    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }

    /* Clean up removed elements */
    DOMPurify.removed = [];

    /* Check if dirty is correctly typed for IN_PLACE */
    if (typeof dirty === 'string') {
      IN_PLACE = false;
    }

    if (IN_PLACE) ; else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!---->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else if (importedNode.nodeName === 'HTML') {
        body = importedNode;
      } else {
        // eslint-disable-next-line unicorn/prefer-dom-node-append
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
      // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf('<') === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }

      /* Initialize the document to work on */
      body = _initDocument(dirty);

      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : emptyHTML;
      }
    }

    /* Remove first element node (ours) if FORCE_BODY is set */
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }

    /* Get node iterator */
    var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Fix IE's strange behavior with manipulated textNodes #89 */
      if (currentNode.nodeType === 3 && currentNode === oldNode) {
        continue;
      }

      /* Sanitize tags and elements */
      if (_sanitizeElements(currentNode)) {
        continue;
      }

      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }

      /* Check attributes, sanitize if necessary */
      _sanitizeAttributes(currentNode);

      oldNode = currentNode;
    }

    oldNode = null;

    /* If we sanitized `dirty` in-place, return it. */
    if (IN_PLACE) {
      return dirty;
    }

    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);

        while (body.firstChild) {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }

      if (RETURN_DOM_IMPORT) {
        /*
          AdoptNode() is not used because internal state is not reset
          (e.g. the past names map of a HTMLFormElement), this is safe
          in theory but we would rather not risk another attack vector.
          The state that is cloned by importNode() is explicitly defined
          by the specs.
        */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }

      return returnNode;
    }

    var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

    /* Sanitize final string template-safe */
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
      serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
    }

    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };

  /**
   * Public method to set the configuration once
   * setConfig
   *
   * @param {Object} cfg configuration object
   */
  DOMPurify.setConfig = function (cfg) {
    _parseConfig(cfg);
    SET_CONFIG = true;
  };

  /**
   * Public method to remove the configuration
   * clearConfig
   *
   */
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };

  /**
   * Public method to check if an attribute value is valid.
   * Uses last set config, if any. Otherwise, uses config defaults.
   * isValidAttribute
   *
   * @param  {string} tag Tag name of containing element.
   * @param  {string} attr Attribute name.
   * @param  {string} value Attribute value.
   * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
   */
  DOMPurify.isValidAttribute = function (tag, attr, value) {
    /* Initialize shared config vars if necessary. */
    if (!CONFIG) {
      _parseConfig({});
    }

    var lcTag = transformCaseFunc(tag);
    var lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };

  /**
   * AddHook
   * Public method to add DOMPurify hooks
   *
   * @param {String} entryPoint entry point for the hook to add
   * @param {Function} hookFunction function to execute
   */
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }

    hooks[entryPoint] = hooks[entryPoint] || [];
    arrayPush(hooks[entryPoint], hookFunction);
  };

  /**
   * RemoveHook
   * Public method to remove a DOMPurify hook at a given entryPoint
   * (pops it from the stack of hooks if more are present)
   *
   * @param {String} entryPoint entry point for the hook to remove
   */
  DOMPurify.removeHook = function (entryPoint) {
    if (hooks[entryPoint]) {
      arrayPop(hooks[entryPoint]);
    }
  };

  /**
   * RemoveHooks
   * Public method to remove all DOMPurify hooks at a given entryPoint
   *
   * @param  {String} entryPoint entry point for the hooks to remove
   */
  DOMPurify.removeHooks = function (entryPoint) {
    if (hooks[entryPoint]) {
      hooks[entryPoint] = [];
    }
  };

  /**
   * RemoveAllHooks
   * Public method to remove all DOMPurify hooks
   *
   */
  DOMPurify.removeAllHooks = function () {
    hooks = {};
  };

  return DOMPurify;
}

var purify = createDOMPurify();

var CAN_BE_WHITE_TAG_LIST = ['iframe', 'embed'];
var whiteTagList = [];
function registerTagWhitelistIfPossible(tagName) {
    if (includes(CAN_BE_WHITE_TAG_LIST, tagName)) {
        whiteTagList.push(tagName.toLowerCase());
    }
}
function sanitizeHTML(html, options) {
    return purify.sanitize(html, __assign({ ADD_TAGS: whiteTagList, ADD_ATTR: ['rel', 'target', 'hreflang', 'type'], FORBID_TAGS: [
            'input',
            'script',
            'textarea',
            'form',
            'button',
            'select',
            'meta',
            'style',
            'link',
            'title',
            'object',
            'base',
        ] }, options));
}

function getChildrenHTML(node, typeName) {
    return node
        .literal.replace(new RegExp("(<\\s*" + typeName + "[^>]*>)|(</" + typeName + "\\s*[>])", 'ig'), '')
        .trim();
}
function getHTMLAttrsByHTMLString(html) {
    html = html.match(reHTMLTag)[0];
    var attrs = html.match(new RegExp(ATTRIBUTE, 'g'));
    return attrs
        ? attrs.reduce(function (acc, attr) {
            var _a = attr.trim().split('='), name = _a[0], values = _a.slice(1);
            if (values.length) {
                acc[name] = values.join('=').replace(/'|"/g, '').trim();
            }
            return acc;
        }, {})
        : {};
}

var reCloseTag = /^\s*<\s*\//;
var baseConvertors = {
    paragraph: function (_, _a) {
        var entering = _a.entering, origin = _a.origin, options = _a.options;
        if (options.nodeId) {
            return {
                type: entering ? 'openTag' : 'closeTag',
                outerNewLine: true,
                tagName: 'p',
            };
        }
        return origin();
    },
    softbreak: function (node) {
        var isPrevNodeHTML = node.prev && node.prev.type === 'htmlInline';
        var isPrevBR = isPrevNodeHTML && /<br ?\/?>/.test(node.prev.literal);
        var content = isPrevBR ? '\n' : '<br>\n';
        return { type: 'html', content: content };
    },
    item: function (node, _a) {
        var entering = _a.entering;
        if (entering) {
            var attributes = {};
            var classNames = [];
            if (node.listData.task) {
                attributes['data-task'] = '';
                classNames.push('task-list-item');
                if (node.listData.checked) {
                    classNames.push('checked');
                    attributes['data-task-checked'] = '';
                }
            }
            return {
                type: 'openTag',
                tagName: 'li',
                classNames: classNames,
                attributes: attributes,
                outerNewLine: true,
            };
        }
        return {
            type: 'closeTag',
            tagName: 'li',
            outerNewLine: true,
        };
    },
    code: function (node) {
        var attributes = { 'data-backticks': String(node.tickCount) };
        return [
            { type: 'openTag', tagName: 'code', attributes: attributes },
            { type: 'text', content: node.literal },
            { type: 'closeTag', tagName: 'code' },
        ];
    },
    codeBlock: function (node) {
        var _a = node, fenceLength = _a.fenceLength, info = _a.info;
        var infoWords = info ? info.split(/\s+/) : [];
        var preClasses = [];
        var codeAttrs = {};
        if (fenceLength > 3) {
            codeAttrs['data-backticks'] = fenceLength;
        }
        if (infoWords.length > 0 && infoWords[0].length > 0) {
            var lang = infoWords[0];
            preClasses.push("lang-" + lang);
            codeAttrs['data-language'] = lang;
        }
        return [
            { type: 'openTag', tagName: 'pre', classNames: preClasses },
            { type: 'openTag', tagName: 'code', attributes: codeAttrs },
            { type: 'text', content: node.literal },
            { type: 'closeTag', tagName: 'code' },
            { type: 'closeTag', tagName: 'pre' },
        ];
    },
    customInline: function (node, _a) {
        var origin = _a.origin, entering = _a.entering, skipChildren = _a.skipChildren;
        var info = node.info;
        if (info.indexOf('widget') !== -1 && entering) {
            skipChildren();
            var content = getWidgetContent(node);
            var htmlInline = widgetToDOM(info, content).outerHTML;
            return [
                { type: 'openTag', tagName: 'span', classNames: ['tui-widget'] },
                { type: 'html', content: htmlInline },
                { type: 'closeTag', tagName: 'span' },
            ];
        }
        return origin();
    },
};
function getHTMLRenderConvertors(linkAttributes, customConvertors) {
    var convertors = __assign({}, baseConvertors);
    if (linkAttributes) {
        convertors.link = function (_, _a) {
            var entering = _a.entering, origin = _a.origin;
            var result = origin();
            if (entering) {
                result.attributes = __assign(__assign({}, result.attributes), linkAttributes);
            }
            return result;
        };
    }
    if (customConvertors) {
        Object.keys(customConvertors).forEach(function (nodeType) {
            var orgConvertor = convertors[nodeType];
            var customConvertor = customConvertors[nodeType];
            if (orgConvertor && isFunction_1(customConvertor)) {
                convertors[nodeType] = function (node, context) {
                    var newContext = __assign({}, context);
                    newContext.origin = function () { return orgConvertor(node, context); };
                    return customConvertor(node, newContext);
                };
            }
            else if (includes(['htmlBlock', 'htmlInline'], nodeType) && !isFunction_1(customConvertor)) {
                convertors[nodeType] = function (node, context) {
                    var matched = node.literal.match(reHTMLTag);
                    if (matched) {
                        var rootHTML = matched[0], openTagName = matched[1], closeTagName = matched[3];
                        var typeName = (openTagName || closeTagName).toLowerCase();
                        var htmlConvertor = customConvertor[typeName];
                        var childrenHTML = getChildrenHTML(node, typeName);
                        if (htmlConvertor) {
                            // copy for preventing to overwrite the originial property
                            var newNode = __assign({}, node);
                            newNode.attrs = getHTMLAttrsByHTMLString(rootHTML);
                            newNode.childrenHTML = childrenHTML;
                            newNode.type = typeName;
                            context.entering = !reCloseTag.test(node.literal);
                            return htmlConvertor(newNode, context);
                        }
                    }
                    return context.origin();
                };
            }
            else {
                convertors[nodeType] = customConvertor;
            }
        });
    }
    return convertors;
}

var nestableTagNames = ['UL', 'OL', 'BLOCKQUOTE'];
function getTotalOffsetTop(el, root) {
    var offsetTop = 0;
    while (el && el !== root) {
        if (!includes(nestableTagNames, el.tagName)) {
            offsetTop += el.offsetTop;
        }
        if (el.offsetParent === root.offsetParent) {
            break;
        }
        el = el.parentElement;
    }
    return offsetTop;
}
function findAdjacentElementToScrollTop(scrollTop, root) {
    var el = root;
    var prev = null;
    while (el) {
        var firstElementChild = el.firstElementChild;
        if (!firstElementChild) {
            break;
        }
        var lastSibling = findLastSiblingElementToScrollTop(firstElementChild, scrollTop, getTotalOffsetTop(el, root));
        prev = el;
        el = lastSibling;
    }
    var adjacentEl = el || prev;
    return adjacentEl === root ? null : adjacentEl;
}
function findLastSiblingElementToScrollTop(el, scrollTop, offsetTop) {
    if (el && scrollTop > offsetTop + el.offsetTop) {
        return (findLastSiblingElementToScrollTop(el.nextElementSibling, scrollTop, offsetTop) || el);
    }
    return null;
}

var offsetInfoMap = {};
function removeOffsetInfoByNode(node) {
    if (node) {
        delete offsetInfoMap[Number(node.getAttribute('data-nodeid'))];
        toArray_1(node.children).forEach(function (child) {
            removeOffsetInfoByNode(child);
        });
    }
}

var CLASS_HIGHLIGHT = cls('md-preview-highlight');
function findTableCell(tableRow, chOffset) {
    var cell = tableRow.firstChild;
    while (cell && cell.next) {
        if (getMdStartCh(cell.next) > chOffset + 1) {
            break;
        }
        cell = cell.next;
    }
    return cell;
}
/**
 * Class Markdown Preview
 * @param {HTMLElement} el - base element
 * @param {eventEmitter} eventEmitter - event manager
 * @param {object} options
 * @param {boolean} options.isViewer - true for view-only mode
 * @param {boolean} options.highlight - true for using live-highlight feature
 * @param {object} opitons.linkAttributes - attributes for link element
 * @param {object} opitons.customHTMLRenderer - map of custom HTML render functions
 *
 * @ignore
 */
var MarkdownPreview = /** @class */ (function () {
    function MarkdownPreview(eventEmitter, options) {
        var el = document.createElement('div');
        this.el = el;
        this.eventEmitter = eventEmitter;
        this.isViewer = !!options.isViewer;
        this.el.className = cls('md-preview');
        var linkAttributes = options.linkAttributes, customHTMLRenderer = options.customHTMLRenderer, sanitizer = options.sanitizer, _a = options.highlight, highlight = _a === void 0 ? false : _a;
        this.renderer = new Renderer({
            gfm: true,
            nodeId: true,
            convertors: getHTMLRenderConvertors(linkAttributes, customHTMLRenderer),
        });
        this.cursorNodeId = null;
        this.sanitizer = sanitizer;
        this.initEvent(highlight);
        this.initContentSection();
        // To prevent overflowing contents in the viewer
        if (this.isViewer) {
            this.previewContent.style.overflowWrap = 'break-word';
        }
    }
    MarkdownPreview.prototype.initContentSection = function () {
        this.previewContent = createElementWith("<div class=\"" + cls('contents') + "\"></div>");
        if (!this.isViewer) {
            this.el.appendChild(this.previewContent);
        }
    };
    MarkdownPreview.prototype.toggleActive = function (active) {
        toggleClass(this.el, 'active', active);
    };
    MarkdownPreview.prototype.initEvent = function (highlight) {
        var _this = this;
        this.eventEmitter.listen('updatePreview', this.update.bind(this));
        if (this.isViewer) {
            return;
        }
        if (highlight) {
            this.eventEmitter.listen('changeToolbarState', function (_a) {
                var mdNode = _a.mdNode, cursorPos = _a.cursorPos;
                _this.updateCursorNode(mdNode, cursorPos);
            });
            this.eventEmitter.listen('blur', function () {
                _this.removeHighlight();
            });
        }
        on_1(this.el, 'scroll', function (event) {
            _this.eventEmitter.emit('scroll', 'preview', findAdjacentElementToScrollTop(event.target.scrollTop, _this.previewContent));
        });
        this.eventEmitter.listen('changePreviewTabPreview', function () { return _this.toggleActive(true); });
        this.eventEmitter.listen('changePreviewTabWrite', function () { return _this.toggleActive(false); });
    };
    MarkdownPreview.prototype.removeHighlight = function () {
        if (this.cursorNodeId) {
            var currentEl = this.getElementByNodeId(this.cursorNodeId);
            if (currentEl) {
                removeClass_1(currentEl, CLASS_HIGHLIGHT);
            }
        }
    };
    MarkdownPreview.prototype.updateCursorNode = function (cursorNode, cursorPos) {
        if (cursorNode) {
            cursorNode = findClosestNode(cursorNode, function (mdNode) { return !isInlineNode(mdNode); });
            if (cursorNode.type === 'tableRow') {
                cursorNode = findTableCell(cursorNode, cursorPos[1]);
            }
            else if (cursorNode.type === 'tableBody') {
                // empty line next to table
                cursorNode = null;
            }
        }
        var cursorNodeId = cursorNode ? cursorNode.id : null;
        if (this.cursorNodeId === cursorNodeId) {
            return;
        }
        var oldEL = this.getElementByNodeId(this.cursorNodeId);
        var newEL = this.getElementByNodeId(cursorNodeId);
        if (oldEL) {
            removeClass_1(oldEL, CLASS_HIGHLIGHT);
        }
        if (newEL) {
            addClass_1(newEL, CLASS_HIGHLIGHT);
        }
        this.cursorNodeId = cursorNodeId;
    };
    MarkdownPreview.prototype.getElementByNodeId = function (nodeId) {
        return nodeId
            ? this.previewContent.querySelector("[data-nodeid=\"" + nodeId + "\"]")
            : null;
    };
    MarkdownPreview.prototype.update = function (changed) {
        var _this = this;
        changed.forEach(function (editResult) { return _this.replaceRangeNodes(editResult); });
        this.eventEmitter.emit('afterPreviewRender', this);
    };
    MarkdownPreview.prototype.replaceRangeNodes = function (editResult) {
        var _this = this;
        var nodes = editResult.nodes, removedNodeRange = editResult.removedNodeRange;
        var contentEl = this.previewContent;
        var newHtml = this.eventEmitter.emitReduce('beforePreviewRender', this.sanitizer(nodes.map(function (node) { return _this.renderer.render(node); }).join('')));
        if (!removedNodeRange) {
            contentEl.insertAdjacentHTML('afterbegin', newHtml);
        }
        else {
            var _a = removedNodeRange.id, startNodeId = _a[0], endNodeId = _a[1];
            var startEl = this.getElementByNodeId(startNodeId);
            var endEl = this.getElementByNodeId(endNodeId);
            if (startEl) {
                startEl.insertAdjacentHTML('beforebegin', newHtml);
                var el = startEl;
                while (el && el !== endEl) {
                    var nextEl = el.nextElementSibling;
                    removeNode(el);
                    removeOffsetInfoByNode(el);
                    el = nextEl;
                }
                if (el === null || el === void 0 ? void 0 : el.parentNode) {
                    removeNode(el);
                    removeOffsetInfoByNode(el);
                }
            }
        }
    };
    MarkdownPreview.prototype.getRenderer = function () {
        return this.renderer;
    };
    MarkdownPreview.prototype.destroy = function () {
        off_1(this.el, 'scroll');
        this.el = null;
    };
    MarkdownPreview.prototype.getElement = function () {
        return this.el;
    };
    MarkdownPreview.prototype.getHTML = function () {
        return removeProseMirrorHackNodes(this.previewContent.innerHTML);
    };
    MarkdownPreview.prototype.setHTML = function (html) {
        this.previewContent.innerHTML = html;
    };
    MarkdownPreview.prototype.setHeight = function (height) {
        css_1(this.el, { height: height + "px" });
    };
    MarkdownPreview.prototype.setMinHeight = function (minHeight) {
        css_1(this.el, { minHeight: minHeight + "px" });
    };
    return MarkdownPreview;
}());

/**
 * @class
 * @ignore
 * @classdesc ES6 Map
 */
var Map$1 = /** @class */ (function () {
    function Map() {
        this.keys = [];
        this.values = [];
    }
    Map.prototype.getKeyIndex = function (key) {
        return inArray_1(key, this.keys);
    };
    Map.prototype.get = function (key) {
        return this.values[this.getKeyIndex(key)];
    };
    Map.prototype.set = function (key, value) {
        var keyIndex = this.getKeyIndex(key);
        if (keyIndex > -1) {
            this.values[keyIndex] = value;
        }
        else {
            this.keys.push(key);
            this.values.push(value);
        }
        return this;
    };
    Map.prototype.has = function (key) {
        return this.getKeyIndex(key) > -1;
    };
    Map.prototype.delete = function (key) {
        var keyIndex = this.getKeyIndex(key);
        if (keyIndex > -1) {
            this.keys.splice(keyIndex, 1);
            this.values.splice(keyIndex, 1);
            return true;
        }
        return false;
    };
    Map.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        if (thisArg === void 0) { thisArg = this; }
        this.values.forEach(function (value, index) {
            if (value && _this.keys[index]) {
                callback.call(thisArg, value, _this.keys[index], _this);
            }
        });
    };
    Map.prototype.clear = function () {
        this.keys = [];
        this.values = [];
    };
    return Map;
}());

/**
 * @fileoverview Implements i18n
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 */
var DEFAULT_CODE = 'en-US';
/**
 * Class I18n
 * @ignore
 */
var I18n = /** @class */ (function () {
    function I18n() {
        this.code = DEFAULT_CODE;
        this.langs = new Map$1();
    }
    I18n.prototype.setCode = function (code) {
        this.code = code || DEFAULT_CODE;
    };
    /**
     * Set language set
     * @param {string|string[]} codes locale code
     * @param {object} data language set
     */
    I18n.prototype.setLanguage = function (codes, data) {
        var _this = this;
        codes = [].concat(codes);
        codes.forEach(function (code) {
            if (!_this.langs.has(code)) {
                _this.langs.set(code, data);
            }
            else {
                var langData = _this.langs.get(code);
                _this.langs.set(code, extend_1(langData, data));
            }
        });
    };
    I18n.prototype.get = function (key, code) {
        if (!code) {
            code = this.code;
        }
        var langSet = this.langs.get(code);
        if (!langSet) {
            langSet = this.langs.get(DEFAULT_CODE);
        }
        var text = langSet[key];
        if (!text) {
            throw new Error("There is no text key \"" + key + "\" in " + code);
        }
        return text;
    };
    return I18n;
}());
var i18n = new I18n();

function findNodeBy(pos, condition) {
    var depth = pos.depth;
    while (depth) {
        var node = pos.node(depth);
        if (condition(node, depth)) {
            return {
                node: node,
                depth: depth,
                offset: depth > 0 ? pos.before(depth) : 0,
            };
        }
        depth -= 1;
    }
    return null;
}

var cache = new Map();
/* eslint-disable @typescript-eslint/no-unused-vars */
var TableOffsetMap = /** @class */ (function () {
    function TableOffsetMap(table, tableRows, tableStartPos, rowInfo) {
        this.table = table;
        this.tableRows = tableRows;
        this.tableStartPos = tableStartPos;
        this.rowInfo = rowInfo;
    }
    TableOffsetMap.create = function (cellPos) {
        var table = findNodeBy(cellPos, function (_a) {
            var type = _a.type;
            return type.name === 'table';
        });
        if (table) {
            var node = table.node, depth = table.depth, offset = table.offset;
            var cached = cache.get(node);
            if ((cached === null || cached === void 0 ? void 0 : cached.tableStartPos) === offset + 1) {
                return cached;
            }
            var rows_1 = [];
            var tablePos = cellPos.start(depth);
            var thead = node.child(0);
            var tbody = node.child(1);
            var theadCellInfo = createOffsetMap(thead, tablePos);
            var tbodyCellInfo = createOffsetMap(tbody, tablePos + thead.nodeSize);
            thead.forEach(function (row) { return rows_1.push(row); });
            tbody.forEach(function (row) { return rows_1.push(row); });
            var map = new TableOffsetMap(node, rows_1, tablePos, theadCellInfo.concat(tbodyCellInfo));
            cache.set(node, map);
            return map;
        }
        return null;
    };
    Object.defineProperty(TableOffsetMap.prototype, "totalRowCount", {
        get: function () {
            return this.rowInfo.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableOffsetMap.prototype, "totalColumnCount", {
        get: function () {
            return this.rowInfo[0].length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableOffsetMap.prototype, "tableStartOffset", {
        get: function () {
            return this.tableStartPos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableOffsetMap.prototype, "tableEndOffset", {
        get: function () {
            return this.tableStartPos + this.table.nodeSize - 1;
        },
        enumerable: false,
        configurable: true
    });
    TableOffsetMap.prototype.getCellInfo = function (rowIdx, colIdx) {
        return this.rowInfo[rowIdx][colIdx];
    };
    TableOffsetMap.prototype.posAt = function (rowIdx, colIdx) {
        for (var i = 0, rowStart = this.tableStartPos;; i += 1) {
            var rowEnd = rowStart + this.tableRows[i].nodeSize;
            if (i === rowIdx) {
                var index = colIdx;
                // Skip the cells from previous row(via rowspan)
                while (index < this.totalColumnCount && this.rowInfo[i][index].offset < rowStart) {
                    index += 1;
                }
                return index === this.totalColumnCount ? rowEnd : this.rowInfo[i][index].offset;
            }
            rowStart = rowEnd;
        }
    };
    TableOffsetMap.prototype.getNodeAndPos = function (rowIdx, colIdx) {
        var cellInfo = this.rowInfo[rowIdx][colIdx];
        return {
            node: this.table.nodeAt(cellInfo.offset - this.tableStartOffset),
            pos: cellInfo.offset,
        };
    };
    TableOffsetMap.prototype.extendedRowspan = function (rowIdx, colIdx) {
        return false;
    };
    TableOffsetMap.prototype.extendedColspan = function (rowIdx, colIdx) {
        return false;
    };
    TableOffsetMap.prototype.getRowspanCount = function (rowIdx, colIdx) {
        return 0;
    };
    TableOffsetMap.prototype.getColspanCount = function (rowIdx, colIdx) {
        return 0;
    };
    TableOffsetMap.prototype.decreaseColspanCount = function (rowIdx, colIdx) {
        return 0;
    };
    TableOffsetMap.prototype.decreaseRowspanCount = function (rowIdx, colIdx) {
        return 0;
    };
    TableOffsetMap.prototype.getColspanStartInfo = function (rowIdx, colIdx) {
        return null;
    };
    TableOffsetMap.prototype.getRowspanStartInfo = function (rowIdx, colIdx) {
        return null;
    };
    TableOffsetMap.prototype.getCellStartOffset = function (rowIdx, colIdx) {
        var offset = this.rowInfo[rowIdx][colIdx].offset;
        return this.extendedRowspan(rowIdx, colIdx) ? this.posAt(rowIdx, colIdx) : offset;
    };
    TableOffsetMap.prototype.getCellEndOffset = function (rowIdx, colIdx) {
        var _a = this.rowInfo[rowIdx][colIdx], offset = _a.offset, nodeSize = _a.nodeSize;
        return this.extendedRowspan(rowIdx, colIdx) ? this.posAt(rowIdx, colIdx) : offset + nodeSize;
    };
    TableOffsetMap.prototype.getCellIndex = function (cellPos) {
        for (var rowIdx = 0; rowIdx < this.totalRowCount; rowIdx += 1) {
            var rowInfo = this.rowInfo[rowIdx];
            for (var colIdx = 0; colIdx < this.totalColumnCount; colIdx += 1) {
                if (rowInfo[colIdx].offset + 1 > cellPos.pos) {
                    return [rowIdx, colIdx];
                }
            }
        }
        return [0, 0];
    };
    TableOffsetMap.prototype.getRectOffsets = function (startCellPos, endCellPos) {
        var _a, _b, _c;
        if (endCellPos === void 0) { endCellPos = startCellPos; }
        if (startCellPos.pos > endCellPos.pos) {
            _a = [endCellPos, startCellPos], startCellPos = _a[0], endCellPos = _a[1];
        }
        var _d = this.getCellIndex(startCellPos), startRowIdx = _d[0], startColIdx = _d[1];
        var _e = this.getCellIndex(endCellPos), endRowIdx = _e[0], endColIdx = _e[1];
        _b = getSortedNumPair(startRowIdx, endRowIdx), startRowIdx = _b[0], endRowIdx = _b[1];
        _c = getSortedNumPair(startColIdx, endColIdx), startColIdx = _c[0], endColIdx = _c[1];
        return this.getSpannedOffsets({ startRowIdx: startRowIdx, startColIdx: startColIdx, endRowIdx: endRowIdx, endColIdx: endColIdx });
    };
    TableOffsetMap.prototype.getSpannedOffsets = function (selectionInfo) {
        return selectionInfo;
    };
    return TableOffsetMap;
}());
/* eslint-enable @typescript-eslint/no-unused-vars */
var createOffsetMap = function (headOrBody, startOffset) {
    var cellInfoMatrix = [];
    headOrBody.forEach(function (row, rowOffset) {
        // get row index based on table(not table head or table body)
        var rowInfo = { rowspanMap: {}, colspanMap: {}, length: 0 };
        row.forEach(function (_a, cellOffset) {
            var nodeSize = _a.nodeSize;
            var colIdx = 0;
            while (rowInfo[colIdx]) {
                colIdx += 1;
            }
            rowInfo[colIdx] = {
                // 2 is the sum of the front and back positions of the tag
                offset: startOffset + rowOffset + cellOffset + 2,
                nodeSize: nodeSize,
            };
            rowInfo.length += 1;
        });
        cellInfoMatrix.push(rowInfo);
    });
    return cellInfoMatrix;
};
function mixinTableOffsetMapPrototype(offsetMapMixin, createOffsetMapMixin) {
    assign(TableOffsetMap.prototype, offsetMapMixin);
    createOffsetMap = createOffsetMapMixin;
    return TableOffsetMap;
}

function execPlugin(pluginInfo) {
    var plugin = pluginInfo.plugin, eventEmitter = pluginInfo.eventEmitter, usageStatistics = pluginInfo.usageStatistics, instance = pluginInfo.instance;
    var pmState = { Plugin: Plugin, PluginKey: PluginKey, Selection: Selection, TextSelection: TextSelection };
    var pmView = { Decoration: Decoration, DecorationSet: DecorationSet };
    var pmModel = { Fragment: Fragment };
    var pmRules = { InputRule: InputRule, inputRules: inputRules, undoInputRule: undoInputRule };
    var pmKeymap = { keymap: keymap };
    var context = {
        eventEmitter: eventEmitter,
        usageStatistics: usageStatistics,
        instance: instance,
        pmState: pmState,
        pmView: pmView,
        pmModel: pmModel,
        pmRules: pmRules,
        pmKeymap: pmKeymap,
        i18n: i18n,
    };
    if (isArray_1(plugin)) {
        var pluginFn = plugin[0], _a = plugin[1], options = _a === void 0 ? {} : _a;
        return pluginFn(context, options);
    }
    return plugin(context);
}
function getPluginInfo(pluginsInfo) {
    var plugins = pluginsInfo.plugins, eventEmitter = pluginsInfo.eventEmitter, usageStatistics = pluginsInfo.usageStatistics, instance = pluginsInfo.instance;
    eventEmitter.listen('mixinTableOffsetMapPrototype', mixinTableOffsetMapPrototype);
    return (plugins !== null && plugins !== void 0 ? plugins : []).reduce(function (acc, plugin) {
        var pluginInfoResult = execPlugin({
            plugin: plugin,
            eventEmitter: eventEmitter,
            usageStatistics: usageStatistics,
            instance: instance,
        });
        if (!pluginInfoResult) {
            throw new Error('The return value of the executed plugin is empty.');
        }
        var markdownParsers = pluginInfoResult.markdownParsers, toHTMLRenderers = pluginInfoResult.toHTMLRenderers, toMarkdownRenderers = pluginInfoResult.toMarkdownRenderers, markdownPlugins = pluginInfoResult.markdownPlugins, wysiwygPlugins = pluginInfoResult.wysiwygPlugins, wysiwygNodeViews = pluginInfoResult.wysiwygNodeViews, markdownCommands = pluginInfoResult.markdownCommands, wysiwygCommands = pluginInfoResult.wysiwygCommands, toolbarItems = pluginInfoResult.toolbarItems;
        if (toHTMLRenderers) {
            acc.toHTMLRenderers = deepMergedCopy(acc.toHTMLRenderers, toHTMLRenderers);
        }
        if (toMarkdownRenderers) {
            acc.toMarkdownRenderers = deepMergedCopy(acc.toMarkdownRenderers, toMarkdownRenderers);
        }
        if (markdownPlugins) {
            acc.mdPlugins = acc.mdPlugins.concat(markdownPlugins);
        }
        if (wysiwygPlugins) {
            acc.wwPlugins = acc.wwPlugins.concat(wysiwygPlugins);
        }
        if (wysiwygNodeViews) {
            acc.wwNodeViews = __assign(__assign({}, acc.wwNodeViews), wysiwygNodeViews);
        }
        if (markdownCommands) {
            acc.mdCommands = __assign(__assign({}, acc.mdCommands), markdownCommands);
        }
        if (wysiwygCommands) {
            acc.wwCommands = __assign(__assign({}, acc.wwCommands), wysiwygCommands);
        }
        if (toolbarItems) {
            acc.toolbarItems = acc.toolbarItems.concat(toolbarItems);
        }
        if (markdownParsers) {
            acc.markdownParsers = __assign(__assign({}, acc.markdownParsers), markdownParsers);
        }
        return acc;
    }, {
        toHTMLRenderers: {},
        toMarkdownRenderers: {},
        mdPlugins: [],
        wwPlugins: [],
        wwNodeViews: {},
        mdCommands: {},
        wwCommands: {},
        toolbarItems: [],
        markdownParsers: {},
    });
}

/**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isUndefined = isUndefined_1;
var isNull = isNull_1;

/**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * // ES6
 * import isExisty from 'tui-code-snippet/type/isExisty');
 * 
 * // CommonJS
 * const isExisty = require('tui-code-snippet/type/isExisty');
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/
function isExisty$1(param) {
  return !isUndefined(param) && !isNull(param);
}

var isExisty_1 = isExisty$1;

/**
 * @fileoverview Check whether the given variable is truthy or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isExisty = isExisty_1;

/**
 * Check whether the given variable is truthy or not.
 * If the given variable is not null or not undefined or not false, returns true.
 * (It regards 0 as true)
 * @param {*} obj - Target for checking
 * @returns {boolean} Is truthy?
 * @memberof module:type
 */
function isTruthy$1(obj) {
  return isExisty(obj) && obj !== false;
}

var isTruthy_1 = isTruthy$1;

/**
 * @fileoverview Check whether the given variable is falsy or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isTruthy = isTruthy_1;

/**
 * Check whether the given variable is falsy or not.
 * If the given variable is null or undefined or false, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is falsy?
 * @memberof module:type
 */
function isFalsy(obj) {
  return !isTruthy(obj);
}

var isFalsy_1 = isFalsy;

var eventTypeList = [
    'afterPreviewRender',
    'updatePreview',
    'changeMode',
    'needChangeMode',
    'command',
    'changePreviewStyle',
    'changePreviewTabPreview',
    'changePreviewTabWrite',
    'scroll',
    'contextmenu',
    'show',
    'hide',
    'changeLanguage',
    'changeToolbarState',
    'toggleScrollSync',
    'mixinTableOffsetMapPrototype',
    'setFocusedNode',
    'removePopupWidget',
    'query',
    // provide event for user
    'openPopup',
    'closePopup',
    'addImageBlobHook',
    'beforePreviewRender',
    'beforeConvertWysiwygToMarkdown',
    'load',
    'loadUI',
    'change',
    'caretChange',
    'destroy',
    'focus',
    'blur',
    'keydown',
    'keyup',
];
/**
 * Class EventEmitter
 * @ignore
 */
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        var _this = this;
        this.events = new Map$1();
        this.eventTypes = eventTypeList.reduce(function (types, type) {
            return __assign(__assign({}, types), { type: type });
        }, {});
        this.hold = false;
        eventTypeList.forEach(function (eventType) {
            _this.addEventType(eventType);
        });
    }
    /**
     * Listen event and bind event handler
     * @param {string} type Event type string
     * @param {function} handler Event handler
     */
    EventEmitter.prototype.listen = function (type, handler) {
        var typeInfo = this.getTypeInfo(type);
        var eventHandlers = this.events.get(typeInfo.type) || [];
        if (!this.hasEventType(typeInfo.type)) {
            throw new Error("There is no event type " + typeInfo.type);
        }
        if (typeInfo.namespace) {
            handler.namespace = typeInfo.namespace;
        }
        eventHandlers.push(handler);
        this.events.set(typeInfo.type, eventHandlers);
    };
    /**
     * Emit event
     * @param {string} eventName Event name to emit
     * @returns {Array}
     */
    EventEmitter.prototype.emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var typeInfo = this.getTypeInfo(type);
        var eventHandlers = this.events.get(typeInfo.type);
        var results = [];
        if (!this.hold && eventHandlers) {
            eventHandlers.forEach(function (handler) {
                var result = handler.apply(void 0, args);
                if (!isUndefined_1(result)) {
                    results.push(result);
                }
            });
        }
        return results;
    };
    /**
     * Emit given event and return result
     * @param {string} eventName Event name to emit
     * @param {any} source Source to change
     * @returns {string}
     */
    EventEmitter.prototype.emitReduce = function (type, source) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var eventHandlers = this.events.get(type);
        if (!this.hold && eventHandlers) {
            eventHandlers.forEach(function (handler) {
                var result = handler.apply(void 0, __spreadArray([source], args));
                if (!isFalsy_1(result)) {
                    source = result;
                }
            });
        }
        return source;
    };
    /**
     * Get event type and namespace
     * @param {string} type Event type name
     * @returns {{type: string, namespace: string}}
     * @private
     */
    EventEmitter.prototype.getTypeInfo = function (type) {
        var splited = type.split('.');
        return {
            type: splited[0],
            namespace: splited[1],
        };
    };
    /**
     * Check whether event type exists or not
     * @param {string} type Event type name
     * @returns {boolean}
     * @private
     */
    EventEmitter.prototype.hasEventType = function (type) {
        return !isUndefined_1(this.eventTypes[this.getTypeInfo(type).type]);
    };
    /**
     * Add event type when given event not exists
     * @param {string} type Event type name
     */
    EventEmitter.prototype.addEventType = function (type) {
        if (this.hasEventType(type)) {
            throw new Error("There is already have event type " + type);
        }
        this.eventTypes[type] = type;
    };
    /**
     * Remove event handler from given event type
     * @param {string} eventType Event type name
     * @param {function} [handler] - registered event handler
     */
    EventEmitter.prototype.removeEventHandler = function (eventType, handler) {
        var _this = this;
        var _a = this.getTypeInfo(eventType), type = _a.type, namespace = _a.namespace;
        if (type && handler) {
            this.removeEventHandlerWithHandler(type, handler);
        }
        else if (type && !namespace) {
            this.events.delete(type);
        }
        else if (!type && namespace) {
            this.events.forEach(function (_, evtType) {
                _this.removeEventHandlerWithTypeInfo(evtType, namespace);
            });
        }
        else if (type && namespace) {
            this.removeEventHandlerWithTypeInfo(type, namespace);
        }
    };
    /**
     * Remove event handler with event handler
     * @param {string} type - event type name
     * @param {function} handler - event handler
     * @private
     */
    EventEmitter.prototype.removeEventHandlerWithHandler = function (type, handler) {
        var eventHandlers = this.events.get(type);
        if (eventHandlers) {
            var handlerIndex = eventHandlers.indexOf(handler);
            if (eventHandlers.indexOf(handler) >= 0) {
                eventHandlers.splice(handlerIndex, 1);
            }
        }
    };
    /**
     * Remove event handler with event type information
     * @param {string} type Event type name
     * @param {string} namespace Event namespace
     * @private
     */
    EventEmitter.prototype.removeEventHandlerWithTypeInfo = function (type, namespace) {
        var handlersToSurvive = [];
        var eventHandlers = this.events.get(type);
        if (!eventHandlers) {
            return;
        }
        eventHandlers.map(function (handler) {
            if (handler.namespace !== namespace) {
                handlersToSurvive.push(handler);
            }
            return null;
        });
        this.events.set(type, handlersToSurvive);
    };
    EventEmitter.prototype.getEvents = function () {
        return this.events;
    };
    EventEmitter.prototype.holdEventInvoke = function (fn) {
        this.hold = true;
        fn();
        this.hold = false;
    };
    return EventEmitter;
}());

var TASK_ATTR_NAME = 'data-task';
var DISABLED_TASK_ATTR_NAME = 'data-task-disabled';
var TASK_CHECKED_CLASS_NAME = 'checked';
function registerHTMLTagToWhitelist(convertorMap) {
    ['htmlBlock', 'htmlInline'].forEach(function (htmlType) {
        if (convertorMap[htmlType]) {
            // register tag white list for preventing to remove the html in sanitizer
            Object.keys(convertorMap[htmlType]).forEach(function (type) { return registerTagWhitelistIfPossible(type); });
        }
    });
}
/**
 * Class ToastUIEditorViewer
 * @param {object} options Option object
 *     @param {HTMLElement} options.el - container element
 *     @param {string} [options.initialValue] Editor's initial value
 *     @param {Object} [options.events] - Events
 *         @param {function} [options.events.load] - It would be emitted when editor fully load
 *         @param {function} [options.events.change] - It would be emitted when content changed
 *         @param {function} [options.events.caretChange] - It would be emitted when format change by cursor position
 *         @param {function} [options.events.focus] - It would be emitted when editor get focus
 *         @param {function} [options.events.blur] - It would be emitted when editor loose focus
 *     @param {Array.<function|Array>} [options.plugins] - Array of plugins. A plugin can be either a function or an array in the form of [function, options].
 *     @param {Object} [options.extendedAutolinks] - Using extended Autolinks specified in GFM spec
 *     @param {Object} [options.linkAttributes] - Attributes of anchor element that should be rel, target, hreflang, type
 *     @param {Object} [options.customHTMLRenderer=null] - Object containing custom renderer functions correspond to change markdown node to preview HTML or wysiwyg node
 *     @param {boolean} [options.referenceDefinition=false] - whether use the specification of link reference definition
 *     @param {function} [options.customHTMLSanitizer=null] - custom HTML sanitizer
 *     @param {boolean} [options.frontMatter=false] - whether use the front matter
 *     @param {string} [options.theme] - The theme to style the viewer with. The default is included in toastui-editor.css.
 */
var ToastUIEditorViewer = /** @class */ (function () {
    function ToastUIEditorViewer(options) {
        var _this = this;
        this.options = extend_1({
            linkAttributes: null,
            extendedAutolinks: false,
            customHTMLRenderer: null,
            referenceDefinition: false,
            customHTMLSanitizer: null,
            frontMatter: false,
            usageStatistics: true,
            theme: 'light',
        }, options);
        this.eventEmitter = new EventEmitter();
        var linkAttributes = sanitizeLinkAttribute(this.options.linkAttributes);
        var _a = getPluginInfo({
            plugins: this.options.plugins,
            eventEmitter: this.eventEmitter,
            usageStatistics: this.options.usageStatistics,
            instance: this,
        }) || {}, toHTMLRenderers = _a.toHTMLRenderers, markdownParsers = _a.markdownParsers;
        var _b = this.options, customHTMLRenderer = _b.customHTMLRenderer, extendedAutolinks = _b.extendedAutolinks, referenceDefinition = _b.referenceDefinition, frontMatter = _b.frontMatter, customHTMLSanitizer = _b.customHTMLSanitizer;
        var rendererOptions = {
            linkAttributes: linkAttributes,
            customHTMLRenderer: __assign(__assign({}, toHTMLRenderers), customHTMLRenderer),
            extendedAutolinks: extendedAutolinks,
            referenceDefinition: referenceDefinition,
            frontMatter: frontMatter,
            sanitizer: customHTMLSanitizer || sanitizeHTML,
        };
        registerHTMLTagToWhitelist(rendererOptions.customHTMLRenderer);
        if (this.options.events) {
            forEachOwnProperties_1(this.options.events, function (fn, key) {
                _this.on(key, fn);
            });
        }
        var _c = this.options, el = _c.el, initialValue = _c.initialValue, theme = _c.theme;
        var existingHTML = el.innerHTML;
        if (theme !== 'light') {
            el.classList.add(cls(theme));
        }
        el.innerHTML = '';
        this.toastMark = new ToastMark('', {
            disallowedHtmlBlockTags: ['br', 'img'],
            extendedAutolinks: extendedAutolinks,
            referenceDefinition: referenceDefinition,
            disallowDeepHeading: true,
            frontMatter: frontMatter,
            customParser: markdownParsers,
        });
        this.preview = new MarkdownPreview(this.eventEmitter, __assign(__assign({}, rendererOptions), { isViewer: true }));
        on_1(this.preview.previewContent, 'mousedown', this.toggleTask.bind(this));
        if (initialValue) {
            this.setMarkdown(initialValue);
        }
        else if (existingHTML) {
            this.preview.setHTML(existingHTML);
        }
        el.appendChild(this.preview.previewContent);
        this.eventEmitter.emit('load', this);
    }
    /**
     * Toggle task by detecting mousedown event.
     * @param {MouseEvent} ev - event
     * @private
     */
    ToastUIEditorViewer.prototype.toggleTask = function (ev) {
        var element = ev.target;
        var style = getComputedStyle(element, ':before');
        if (!element.hasAttribute(DISABLED_TASK_ATTR_NAME) &&
            element.hasAttribute(TASK_ATTR_NAME) &&
            isPositionInBox(style, ev.offsetX, ev.offsetY)) {
            toggleClass(element, TASK_CHECKED_CLASS_NAME);
            this.eventEmitter.emit('change', {
                source: 'viewer',
                date: ev,
            });
        }
    };
    /**
     * Set content for preview
     * @param {string} markdown Markdown text
     */
    ToastUIEditorViewer.prototype.setMarkdown = function (markdown) {
        var lineTexts = this.toastMark.getLineTexts();
        var length = lineTexts.length;
        var lastLine = last(lineTexts);
        var endSourcepos = [length, lastLine.length + 1];
        var editResult = this.toastMark.editMarkdown([1, 1], endSourcepos, markdown || '');
        this.eventEmitter.emit('updatePreview', editResult);
    };
    /**
     * Bind eventHandler to event type
     * @param {string} type Event type
     * @param {function} handler Event handler
     */
    ToastUIEditorViewer.prototype.on = function (type, handler) {
        this.eventEmitter.listen(type, handler);
    };
    /**
     * Unbind eventHandler from event type
     * @param {string} type Event type
     */
    ToastUIEditorViewer.prototype.off = function (type) {
        this.eventEmitter.removeEventHandler(type);
    };
    /**
     * Add hook to TUIEditor event
     * @param {string} type Event type
     * @param {function} handler Event handler
     */
    ToastUIEditorViewer.prototype.addHook = function (type, handler) {
        this.eventEmitter.removeEventHandler(type);
        this.eventEmitter.listen(type, handler);
    };
    /**
     * Remove Viewer preview from document
     */
    ToastUIEditorViewer.prototype.destroy = function () {
        off_1(this.preview.el, 'mousedown', this.toggleTask.bind(this));
        this.preview.destroy();
        this.eventEmitter.emit('destroy');
    };
    /**
     * Return true
     * @returns {boolean}
     */
    ToastUIEditorViewer.prototype.isViewer = function () {
        return true;
    };
    /**
     * Return false
     * @returns {boolean}
     */
    ToastUIEditorViewer.prototype.isMarkdownMode = function () {
        return false;
    };
    /**
     * Return false
     * @returns {boolean}
     */
    ToastUIEditorViewer.prototype.isWysiwygMode = function () {
        return false;
    };
    return ToastUIEditorViewer;
}());

export { ToastUIEditorViewer as default };
