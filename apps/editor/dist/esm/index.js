/**
 * @toast-ui/editor
 * @version 3.2.2 | Tue Nov 05 2024
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */

import { Fragment, Schema, Slice, NodeRange, Mark as Mark$1, DOMParser, Node as Node$2 } from 'prosemirror-model';
import { DecorationSet, Decoration, EditorView } from 'prosemirror-view';
import { ReplaceAroundStep, liftTarget, canSplit, StepMap } from 'prosemirror-transform';
import { TextSelection, Plugin, PluginKey, EditorState, AllSelection, Selection, SelectionRange, NodeSelection } from 'prosemirror-state';
import { keymap } from 'prosemirror-keymap';
import { deleteSelection, selectAll, baseKeymap, chainCommands, joinForward, newlineInCode, setBlockType, wrapIn, toggleMark as toggleMark$1, exitCode } from 'prosemirror-commands';
import { InputRule, inputRules, undoInputRule } from 'prosemirror-inputrules';
import { undo, redo, history, undoDepth } from 'prosemirror-history';
import { Renderer, ToastMark } from '@toast-ui/toastmark';

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
function forEachOwnProperties$2(obj, iteratee, context) {
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

var forEachOwnProperties_1 = forEachOwnProperties$2;

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
var forEachOwnProperties$1 = forEachOwnProperties_1;

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
    forEachOwnProperties$1(obj, iteratee, context);
  }
}

var forEach_1 = forEach$4;

/**
 * @fileoverview Setting element style
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isString$2 = isString_1;
var forEach$3 = forEach_1;

/**
 * Setting element style
 * @param {(HTMLElement|SVGElement)} element - element to setting style
 * @param {(string|object)} key - style prop name or {prop: value} pair object
 * @param {string} [value] - style value
 * @memberof module:domUtil
 */
function css(element, key, value) {
  var style = element.style;

  if (isString$2(key)) {
    style[key] = value;

    return;
  }

  forEach$3(key, function(v, k) {
    style[k] = v;
  });
}

var css_1 = css;

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
function inArray$4(searchElement, array, startIndex) {
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

var inArray_1 = inArray$4;

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
function isUndefined$4(obj) {
  return obj === undefined; // eslint-disable-line no-undefined
}

var isUndefined_1 = isUndefined$4;

/**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isUndefined$3 = isUndefined_1;

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

  if (isUndefined$3(element.className.baseVal)) {
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
var isUndefined$2 = isUndefined_1;

/**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */
function setClassName$2(element, cssClass) {
  cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;

  cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

  if (isUndefined$2(element.className.baseVal)) {
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

var forEach$2 = forEach_1;
var inArray$3 = inArray_1;
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
    forEach$2(cssClass, function(name) {
      element.classList.add(name);
    });

    return;
  }

  origin = getClass$2(element);

  if (origin) {
    cssClass = [].concat(origin.split(/\s+/), cssClass);
  }

  forEach$2(cssClass, function(cls) {
    if (inArray$3(cls, newClass) < 0) {
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
var inArray$2 = inArray_1;
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
    if (inArray$2(name, cssClass) < 0) {
      newClass.push(name);
    }
  });

  setClassName(element, newClass);
}

var removeClass_1 = removeClass;

/**
 * @fileoverview Check whether the given variable is a number or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Check whether the given variable is a number or not.
 * If the given variable is a number, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is number?
 * @memberof module:type
 */
function isNumber(obj) {
  return typeof obj === 'number' || obj instanceof Number;
}

var isNumber_1 = isNumber;

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

/**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var forEachOwnProperties = forEachOwnProperties_1;

/**
 * @module request
 */

/**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * // ES6
 * import imagePing from 'tui-code-snippet/request/imagePing';
 * 
 * // CommonJS
 * const imagePing = require('tui-code-snippet/request/imagePing');
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *   v: 1,
 *   t: 'event',
 *   tid: 'trackingid',
 *   cid: 'cid',
 *   dp: 'dp',
 *   dh: 'dh'
 * });
 */
function imagePing$1(url, trackingInfo) {
  var trackingElement = document.createElement('img');
  var queryString = '';
  forEachOwnProperties(trackingInfo, function(value, key) {
    queryString += '&' + key + '=' + value;
  });
  queryString = queryString.substring(1);

  trackingElement.src = url + '?' + queryString;

  trackingElement.style.display = 'none';
  document.body.appendChild(trackingElement);
  document.body.removeChild(trackingElement);

  return trackingElement;
}

var imagePing_1 = imagePing$1;

/**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isUndefined$1 = isUndefined_1;
var imagePing = imagePing_1;

var ms7days = 7 * 24 * 60 * 60 * 1000;

/**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */
function isExpired(date) {
  var now = new Date().getTime();

  return now - date > ms7days;
}

/**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */
function sendHostname(appName, trackingId) {
  var url = 'https://www.google-analytics.com/collect';
  var hostname = location.hostname;
  var hitType = 'event';
  var eventCategory = 'use';
  var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
  var date = window.localStorage.getItem(applicationKeyForStorage);

  // skip if the flag is defined and is set to false explicitly
  if (!isUndefined$1(window.tui) && window.tui.usageStatistics === false) {
    return;
  }

  // skip if not pass seven days old
  if (date && !isExpired(date)) {
    return;
  }

  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());

  setTimeout(function() {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      imagePing(url, {
        v: 1,
        t: hitType,
        tid: trackingId,
        cid: hostname,
        dp: hostname,
        dh: appName,
        el: appName,
        ec: eventCategory
      });
    }
  }, 1000);
}

var sendHostname_1 = sendHostname;

/Mac/.test(navigator.platform);
var reSpaceMoreThanOne = /[\u0020]+/g;
var reEscapeChars = /[>(){}[\]+-.!#|]/g;
var reEscapeHTML = /<([a-zA-Z_][a-zA-Z0-9\-._]*)(\s|[^\\>])*\/?>|<(\/)([a-zA-Z_][a-zA-Z0-9\-._]*)\s*\/?>|<!--[^-]+-->|<([a-zA-Z_][a-zA-Z0-9\-.:/]*)>/g;
var reEscapeBackSlash = /\\[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]/g;
var reEscapePairedChars = /[*_~`]/g;
var reMdImageSyntax = /!\[.*\]\(.*\)/g;
var reEscapedCharInLinkSyntax = /[[\]]/g;
var reEscapeBackSlashInSentence = /(?:^|[^\\])\\(?!\\)/g;
var XMLSPECIAL = '[&<>"]';
var reXmlSpecial = new RegExp(XMLSPECIAL, 'g');
function replaceUnsafeChar(char) {
    switch (char) {
        case '&':
            return '&amp;';
        case '<':
            return '&lt;';
        case '>':
            return '&gt;';
        case '"':
            return '&quot;';
        default:
            return char;
    }
}
function escapeXml(text) {
    if (reXmlSpecial.test(text)) {
        return text.replace(reXmlSpecial, replaceUnsafeChar);
    }
    return text;
}
function sendHostName() {
    sendHostname_1('editor', 'UA-129966929-1');
}
function includes(arr, targetItem) {
    return arr.indexOf(targetItem) !== -1;
}
var availableLinkAttributes = ['rel', 'target', 'hreflang', 'type'];
var reMarkdownTextToEscapeMap = {
    codeblock: /(^ {4}[^\n]+\n*)+/,
    thematicBreak: /^ *((\* *){3,}|(- *){3,} *|(_ *){3,}) */,
    atxHeading: /^(#{1,6}) +[\s\S]+/,
    seTextheading: /^([^\n]+)\n *(=|-){2,} */,
    blockquote: /^( *>[^\n]+.*)+/,
    list: /^ *(\*+|-+|\d+\.) [\s\S]+/,
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? */,
    link: /!?\[.*\]\(.*\)/,
    reflink: /!?\[.*\]\s*\[([^\]]*)\]/,
    verticalBar: /\u007C/,
    fencedCodeblock: /^((`|~){3,})/,
};
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
function repeat(text, count) {
    var result = '';
    for (var i = 0; i < count; i += 1) {
        result += text;
    }
    return result;
}
function isNeedEscapeText(text) {
    var needEscape = false;
    forEachOwnProperties_1(reMarkdownTextToEscapeMap, function (reMarkdownTextToEscape) {
        if (reMarkdownTextToEscape.test(text)) {
            needEscape = true;
        }
        return !needEscape;
    });
    return needEscape;
}
function escapeTextForLink(text) {
    var imageSyntaxRanges = [];
    var result = reMdImageSyntax.exec(text);
    while (result) {
        imageSyntaxRanges.push([result.index, result.index + result[0].length]);
        result = reMdImageSyntax.exec(text);
    }
    return text.replace(reEscapedCharInLinkSyntax, function (matched, offset) {
        var isDelimiter = imageSyntaxRanges.some(function (range) { return offset > range[0] && offset < range[1]; });
        return isDelimiter ? matched : "\\" + matched;
    });
}
function escape(text) {
    var aheadReplacer = function (matched) { return "\\" + matched; };
    var behindReplacer = function (matched) { return matched + "\\"; };
    var escapedText = text.replace(reSpaceMoreThanOne, ' ');
    if (reEscapeBackSlash.test(escapedText)) {
        escapedText = escapedText.replace(reEscapeBackSlash, aheadReplacer);
    }
    if (reEscapeBackSlashInSentence.test(escapedText)) {
        escapedText = escapedText.replace(reEscapeBackSlashInSentence, behindReplacer);
    }
    escapedText = escapedText.replace(reEscapePairedChars, aheadReplacer);
    if (reEscapeHTML.test(escapedText)) {
        escapedText = escapedText.replace(reEscapeHTML, aheadReplacer);
    }
    if (isNeedEscapeText(escapedText)) {
        escapedText = escapedText.replace(reEscapeChars, aheadReplacer);
    }
    return escapedText;
}
function quote(text) {
    var result;
    if (text.indexOf('"') === -1) {
        result = '""';
    }
    else {
        result = text.indexOf("'") === -1 ? "''" : '()';
    }
    return result[0] + text + result[1];
}
function isNil(value) {
    return isNull_1(value) || isUndefined_1(value);
}
function shallowEqual(o1, o2) {
    if (o1 === null && o1 === o2) {
        return true;
    }
    if (typeof o1 !== 'object' || typeof o2 !== 'object' || isNil(o1) || isNil(o2)) {
        return o1 === o2;
    }
    for (var key in o1) {
        if (o1[key] !== o2[key]) {
            return false;
        }
    }
    for (var key in o2) {
        if (!(key in o1)) {
            return false;
        }
    }
    return true;
}
function last(arr) {
    return arr[arr.length - 1];
}
function between(value, min, max) {
    return value >= min && value <= max;
}
function isObject$1(obj) {
    return typeof obj === 'object' && obj !== null;
}
function deepMergedCopy(targetObj, obj) {
    var resultObj = __assign({}, targetObj);
    if (targetObj && obj) {
        Object.keys(obj).forEach(function (prop) {
            if (isObject$1(resultObj[prop])) {
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
        if (isObject$1(item)) {
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
        if (isObject$1(obj[prop])) {
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
function toArray$1(arrayLike) {
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

var toArray_1 = toArray$1;

function createParagraph(schema, content) {
    var paragraph = schema.nodes.paragraph;
    if (!content) {
        return paragraph.createAndFill();
    }
    return paragraph.create(null, isString_1(content) ? schema.text(content) : content);
}
function createTextNode$1(schema, text, marks) {
    return schema.text(text, marks);
}
function createTextSelection(tr, from, to) {
    if (to === void 0) { to = from; }
    var contentSize = tr.doc.content.size;
    var size = contentSize > 0 ? contentSize - 1 : 1;
    return TextSelection.create(tr.doc, Math.min(from, size), Math.min(to, size));
}
function addParagraph(tr, _a, schema) {
    var pos = _a.pos;
    tr.replaceWith(pos, pos, createParagraph(schema));
    return tr.setSelection(createTextSelection(tr, pos + 1));
}
function replaceTextNode(_a) {
    var state = _a.state, from = _a.from, startIndex = _a.startIndex, endIndex = _a.endIndex, createText = _a.createText;
    var tr = state.tr, doc = state.doc, schema = state.schema;
    for (var i = startIndex; i <= endIndex; i += 1) {
        var _b = doc.child(i), nodeSize = _b.nodeSize, textContent = _b.textContent, content = _b.content;
        var text = createText(textContent);
        var node = text ? createTextNode$1(schema, text) : Fragment.empty;
        var mappedFrom = tr.mapping.map(from);
        var mappedTo = mappedFrom + content.size;
        tr.replaceWith(mappedFrom, mappedTo, node);
        from += nodeSize;
    }
    return tr;
}
function splitAndExtendBlock(tr, pos, text, node) {
    var textLen = text.length;
    tr.split(pos)
        .delete(pos - textLen, pos)
        .insert(tr.mapping.map(pos), node)
        .setSelection(createTextSelection(tr, tr.mapping.map(pos) - textLen));
}

function getMdStartLine(mdNode) {
    return mdNode.sourcepos[0][0];
}
function getMdEndLine(mdNode) {
    return mdNode.sourcepos[1][0];
}
function getMdStartCh(mdNode) {
    return mdNode.sourcepos[0][1];
}
function getMdEndCh(mdNode) {
    return mdNode.sourcepos[1][1];
}
function isHTMLNode(mdNode) {
    var type = mdNode.type;
    return type === 'htmlBlock' || type === 'htmlInline';
}
function isStyledInlineNode(mdNode) {
    var type = mdNode.type;
    return (type === 'strike' ||
        type === 'strong' ||
        type === 'emph' ||
        type === 'code' ||
        type === 'link' ||
        type === 'image');
}
function isCodeBlockNode(mdNode) {
    return mdNode && mdNode.type === 'codeBlock';
}
function isListNode$1(mdNode) {
    return mdNode && (mdNode.type === 'item' || mdNode.type === 'list');
}
function isOrderedListNode(mdNode) {
    return isListNode$1(mdNode) && mdNode.listData.type === 'ordered';
}
function isBulletListNode(mdNode) {
    return isListNode$1(mdNode) && mdNode.listData.type !== 'ordered';
}
function isTableCellNode(mdNode) {
    return mdNode && (mdNode.type === 'tableCell' || mdNode.type === 'tableDelimCell');
}
function isInlineNode$1(mdNode) {
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
function traverseParentNodes(mdNode, iteratee, includeSelf) {
    if (includeSelf === void 0) { includeSelf = true; }
    mdNode = includeSelf ? mdNode : mdNode.parent;
    while (mdNode && mdNode.type !== 'document') {
        iteratee(mdNode);
        mdNode = mdNode.parent;
    }
}
function addOffsetPos(originPos, offset) {
    return [originPos[0], originPos[1] + offset];
}
function setOffsetPos(originPos, newOffset) {
    return [originPos[0], newOffset];
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
function isContainer$1(node) {
    switch (node.type) {
        case 'document':
        case 'blockQuote':
        case 'list':
        case 'item':
        case 'paragraph':
        case 'heading':
        case 'emph':
        case 'strong':
        case 'strike':
        case 'link':
        case 'image':
        case 'table':
        case 'tableHead':
        case 'tableBody':
        case 'tableRow':
        case 'tableCell':
        case 'tableDelimRow':
        case 'customInline':
            return true;
        default:
            return false;
    }
}
function getChildrenText(node) {
    var buffer = [];
    var walker = node.walker();
    var event = null;
    while ((event = walker.next())) {
        var childNode = event.node;
        if (childNode.type === 'text') {
            buffer.push(childNode.literal);
        }
    }
    return buffer.join('');
}

var widgetRules = [];
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
function createWidgetContent(info, text) {
    return "$$" + info + " " + text + "$$";
}
function widgetToDOM(info, text) {
    var _a = widgetRuleMap[info], rule = _a.rule, toDOM = _a.toDOM;
    var matches = unwrapWidgetSyntax(text).match(rule);
    if (matches) {
        text = matches[0];
    }
    return toDOM(text);
}
function getWidgetRules() {
    return widgetRules;
}
function setWidgetRules(rules) {
    widgetRules = rules;
    widgetRules.forEach(function (rule, index) {
        widgetRuleMap["widget" + index] = rule;
    });
}
function mergeNodes(nodes, text, schema, ruleIndex) {
    return nodes.concat(createNodesWithWidget(text, schema, ruleIndex));
}
/**
 * create nodes with plain text and replace text matched to the widget rules with the widget node
 * For example, in case the text and widget rules as below
 *
 * text: $test plain text #test
 * widget rules: [{ rule: /$.+/ }, { rule: /#.+/ }]
 *
 * The creating node process is recursive and is as follows.
 *
 * in first widget rule(/$.+/)
 *  $test -> widget node
 *  plain text -> match with next widget rule
 *  #test -> match with next widget rule
 *
 * in second widget rule(/#.+/)
 *  plain text -> text node(no rule for matching)
 *  #test -> widget node
 */
function createNodesWithWidget(text, schema, ruleIndex) {
    if (ruleIndex === void 0) { ruleIndex = 0; }
    var nodes = [];
    var rule = (widgetRules[ruleIndex] || {}).rule;
    var nextRuleIndex = ruleIndex + 1;
    text = unwrapWidgetSyntax(text);
    if (rule && rule.test(text)) {
        var index = void 0;
        while ((index = text.search(rule)) !== -1) {
            var prev = text.substring(0, index);
            // get widget node on first splitted text using next widget rule
            if (prev) {
                nodes = mergeNodes(nodes, prev, schema, nextRuleIndex);
            }
            // build widget node using current widget rule
            text = text.substring(index);
            var literal = text.match(rule)[0];
            var info = "widget" + ruleIndex;
            nodes.push(schema.nodes.widget.create({ info: info }, schema.text(createWidgetContent(info, literal))));
            text = text.substring(literal.length);
        }
        // get widget node on last splitted text using next widget rule
        if (text) {
            nodes = mergeNodes(nodes, text, schema, nextRuleIndex);
        }
    }
    else if (text) {
        nodes =
            ruleIndex < widgetRules.length - 1
                ? mergeNodes(nodes, text, schema, nextRuleIndex)
                : [schema.text(text)];
    }
    return nodes;
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

function getDefaultCommands() {
    return {
        deleteSelection: function () { return deleteSelection; },
        selectAll: function () { return selectAll; },
        undo: function () { return undo; },
        redo: function () { return redo; },
    };
}

function placeholder(options) {
    return new Plugin({
        props: {
            decorations: function (state) {
                var doc = state.doc;
                if (options.text &&
                    doc.childCount === 1 &&
                    doc.firstChild.isTextblock &&
                    doc.firstChild.content.size === 0) {
                    var placeHolder = document.createElement('span');
                    addClass_1(placeHolder, 'placeholder');
                    if (options.className) {
                        addClass_1(placeHolder, options.className);
                    }
                    placeHolder.textContent = options.text;
                    return DecorationSet.create(doc, [Decoration.widget(1, placeHolder)]);
                }
                return null;
            },
        },
    });
}

/**
 * @fileoverview Check element has specific css class
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var inArray$1 = inArray_1;
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

  return inArray$1(cssClass, origin) > -1;
}

var hasClass_1 = hasClass;

/**
 * @fileoverview Check element match selector
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var inArray = inArray_1;
var toArray = toArray_1;

var elProto = Element.prototype;
var matchSelector = elProto.matches ||
    elProto.webkitMatchesSelector ||
    elProto.mozMatchesSelector ||
    elProto.msMatchesSelector ||
    function(selector) {
      var doc = this.document || this.ownerDocument;

      return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
    };

/**
 * Check element match selector
 * @param {HTMLElement} element - element to check
 * @param {string} selector - selector to check
 * @returns {boolean} is selector matched to element?
 * @memberof module:domUtil
 */
function matches(element, selector) {
  return matchSelector.call(element, selector);
}

var matches_1 = matches;

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
var reBR = /<br\s*\/*>/i;
var reHTMLComment = /<! ---->|<!--(?:-?[^>-])(?:-?[^-])*-->/;
var ALTERNATIVE_TAG_FOR_BR = '</p><p>';

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
function clsWithMdPrefix() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names.map(function (className) { return CLS_PREFIX + "md-" + className; }).join(' ');
}
function isTextNode(node) {
    return (node === null || node === void 0 ? void 0 : node.nodeType) === Node.TEXT_NODE;
}
function isElemNode(node) {
    return node && node.nodeType === Node.ELEMENT_NODE;
}
function findNodes(element, selector) {
    var nodeList = toArray_1(element.querySelectorAll(selector));
    if (nodeList.length) {
        return nodeList;
    }
    return [];
}
function appendNodes(node, nodesToAppend) {
    nodesToAppend = isArray_1(nodesToAppend) ? toArray_1(nodesToAppend) : [nodesToAppend];
    nodesToAppend.forEach(function (nodeToAppend) {
        node.appendChild(nodeToAppend);
    });
}
function insertBeforeNode(insertedNode, node) {
    if (node.parentNode) {
        node.parentNode.insertBefore(insertedNode, node);
    }
}
function removeNode$1(node) {
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
function unwrapNode(node) {
    var result = [];
    while (node.firstChild) {
        result.push(node.firstChild);
        if (node.parentNode) {
            node.parentNode.insertBefore(node.firstChild, node);
        }
    }
    removeNode$1(node);
    return result;
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
function getOuterWidth(el) {
    var computed = window.getComputedStyle(el);
    return (['margin-left', 'margin-right'].reduce(function (acc, type) { return acc + parseInt(computed.getPropertyValue(type), 10); }, 0) + el.offsetWidth);
}
function closest(node, found) {
    var condition;
    if (isString_1(found)) {
        condition = function (target) { return matches_1(target, found); };
    }
    else {
        condition = function (target) { return target === found; };
    }
    while (node && node !== document) {
        if (isElemNode(node) && condition(node)) {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}
function getTotalOffset(el, root) {
    var offsetTop = 0;
    var offsetLeft = 0;
    while (el && el !== root) {
        var top_1 = el.offsetTop, left = el.offsetLeft, offsetParent = el.offsetParent;
        offsetTop += top_1;
        offsetLeft += left;
        if (offsetParent === root.offsetParent) {
            break;
        }
        el = el.offsetParent;
    }
    return { offsetTop: offsetTop, offsetLeft: offsetLeft };
}
function setAttributes(attributes, element) {
    Object.keys(attributes).forEach(function (attrName) {
        if (isNil(attributes[attrName])) {
            element.removeAttribute(attrName);
        }
        else {
            element.setAttribute(attrName, attributes[attrName]);
        }
    });
}
function replaceBRWithEmptyBlock(html) {
    // remove br in paragraph to compatible with markdown
    var replacedHTML = html.replace(/<p><br\s*\/*><\/p>/gi, '<p></p>');
    var reHTMLTag = new RegExp(HTML_TAG, 'ig');
    var htmlTagMatched = replacedHTML.match(reHTMLTag);
    htmlTagMatched === null || htmlTagMatched === void 0 ? void 0 : htmlTagMatched.forEach(function (htmlTag, index) {
        if (reBR.test(htmlTag)) {
            var alternativeTag = ALTERNATIVE_TAG_FOR_BR;
            if (index) {
                var prevTag = htmlTagMatched[index - 1];
                var openTagMatched = prevTag.match(OPEN_TAG);
                if (openTagMatched && !/br/i.test(openTagMatched[1])) {
                    var tagName = openTagMatched[1];
                    alternativeTag = "</" + tagName + "><" + tagName + ">";
                }
            }
            replacedHTML = replacedHTML.replace(reBR, alternativeTag);
        }
    });
    return replacedHTML;
}
function removeProseMirrorHackNodes(html) {
    var reProseMirrorImage = /<img class="ProseMirror-separator" alt="">/g;
    var reProseMirrorTrailingBreak = / class="ProseMirror-trailingBreak"/g;
    var resultHTML = html;
    resultHTML = resultHTML.replace(reProseMirrorImage, '');
    resultHTML = resultHTML.replace(reProseMirrorTrailingBreak, '');
    return resultHTML;
}

var pluginKey$1 = new PluginKey('widget');
var MARGIN = 5;
var PopupWidget = /** @class */ (function () {
    function PopupWidget(view, eventEmitter) {
        var _this = this;
        this.popup = null;
        this.removeWidget = function () {
            if (_this.popup) {
                _this.rootEl.removeChild(_this.popup);
                _this.popup = null;
            }
        };
        this.rootEl = view.dom.parentElement;
        this.eventEmitter = eventEmitter;
        this.eventEmitter.listen('blur', this.removeWidget);
        this.eventEmitter.listen('loadUI', function () {
            _this.rootEl = closest(view.dom.parentElement, "." + cls('defaultUI'));
        });
        this.eventEmitter.listen('removePopupWidget', this.removeWidget);
    }
    PopupWidget.prototype.update = function (view) {
        var widget = pluginKey$1.getState(view.state);
        this.removeWidget();
        if (widget) {
            var node = widget.node, style = widget.style;
            var _a = view.coordsAtPos(widget.pos), top_1 = _a.top, left = _a.left, bottom = _a.bottom;
            var height = bottom - top_1;
            var rect = this.rootEl.getBoundingClientRect();
            var relTopPos = top_1 - rect.top;
            css_1(node, { opacity: '0' });
            this.rootEl.appendChild(node);
            css_1(node, {
                position: 'absolute',
                left: left - rect.left + MARGIN + "px",
                top: (style === 'bottom' ? relTopPos + height - MARGIN : relTopPos - height) + "px",
                opacity: '1',
            });
            this.popup = node;
            view.focus();
        }
    };
    PopupWidget.prototype.destroy = function () {
        this.eventEmitter.removeEventHandler('blur', this.removeWidget);
    };
    return PopupWidget;
}());
function addWidget(eventEmitter) {
    return new Plugin({
        key: pluginKey$1,
        state: {
            init: function () {
                return null;
            },
            apply: function (tr) {
                return tr.getMeta('widget');
            },
        },
        view: function (editorView) {
            return new PopupWidget(editorView, eventEmitter);
        },
    });
}

function addDefaultImageBlobHook(eventEmitter) {
    eventEmitter.listen('addImageBlobHook', function (blob, callback) {
        var reader = new FileReader();
        reader.onload = function (_a) {
            var target = _a.target;
            return callback(target.result);
        };
        reader.readAsDataURL(blob);
    });
}
function emitImageBlobHook(eventEmitter, blob, type) {
    var hook = function (imageUrl, altText) {
        eventEmitter.emit('command', 'addImage', {
            imageUrl: imageUrl,
            altText: altText || blob.name || 'image',
        });
    };
    eventEmitter.emit('addImageBlobHook', blob, hook, type);
}
function pasteImageOnly(items) {
    var images = toArray_1(items).filter(function (_a) {
        var type = _a.type;
        return type.indexOf('image') !== -1;
    });
    if (images.length === 1) {
        var item = images[0];
        if (item) {
            return item.getAsFile();
        }
    }
    return null;
}

function dropImage(_a) {
    var eventEmitter = _a.eventEmitter;
    return new Plugin({
        props: {
            handleDOMEvents: {
                drop: function (_, ev) {
                    var _a;
                    var items = (_a = ev.dataTransfer) === null || _a === void 0 ? void 0 : _a.files;
                    if (items) {
                        forEachArray_1(items, function (item) {
                            if (item.type.indexOf('image') !== -1) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                emitImageBlobHook(eventEmitter, item, ev.type);
                                return false;
                            }
                            return true;
                        });
                    }
                    return true;
                },
            },
        },
    });
}

var Node$1 = /** @class */ (function () {
    function Node() {
    }
    Object.defineProperty(Node.prototype, "type", {
        get: function () {
            return 'node';
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.setContext = function (context) {
        this.context = context;
    };
    return Node;
}());

function widgetNodeView(pmNode) {
    var dom = document.createElement('span');
    var node = widgetToDOM(pmNode.attrs.info, pmNode.textContent);
    dom.className = 'tui-widget';
    dom.appendChild(node);
    return { dom: dom };
}
function isWidgetNode(pmNode) {
    return pmNode.type.name === 'widget';
}
var Widget = /** @class */ (function (_super) {
    __extends(Widget, _super);
    function Widget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Widget.prototype, "name", {
        get: function () {
            return 'widget';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "schema", {
        get: function () {
            return {
                attrs: {
                    info: { default: null },
                },
                group: 'inline',
                inline: true,
                content: 'text*',
                selectable: false,
                atom: true,
                toDOM: function () {
                    return ['span', { class: 'tui-widget' }, 0];
                },
                parseDOM: [
                    {
                        tag: 'span.tui-widget',
                        getAttrs: function (dom) {
                            var text = dom.textContent;
                            var _a = text.match(/\$\$(widget\d+)/), info = _a[1];
                            return { info: info };
                        },
                    },
                ],
            };
        },
        enumerable: false,
        configurable: true
    });
    return Widget;
}(Node$1));

var EditorBase = /** @class */ (function () {
    function EditorBase(eventEmitter) {
        this.timer = null;
        this.el = document.createElement('div');
        this.el.className = 'toastui-editor';
        this.eventEmitter = eventEmitter;
        this.placeholder = { text: '' };
    }
    EditorBase.prototype.createState = function () {
        return EditorState.create({
            schema: this.schema,
            plugins: this.createPlugins(),
        });
    };
    EditorBase.prototype.initEvent = function () {
        var _a = this, eventEmitter = _a.eventEmitter, view = _a.view, editorType = _a.editorType;
        view.dom.addEventListener('focus', function () { return eventEmitter.emit('focus', editorType); });
        view.dom.addEventListener('blur', function () { return eventEmitter.emit('blur', editorType); });
    };
    EditorBase.prototype.emitChangeEvent = function (tr) {
        this.eventEmitter.emit('caretChange', this.editorType);
        if (tr.docChanged) {
            this.eventEmitter.emit('change', this.editorType);
        }
    };
    Object.defineProperty(EditorBase.prototype, "defaultPlugins", {
        get: function () {
            var rules = this.createInputRules();
            var plugins = __spreadArray(__spreadArray([], this.keymaps), [
                keymap(__assign({ 'Shift-Enter': baseKeymap.Enter }, baseKeymap)),
                history(),
                placeholder(this.placeholder),
                addWidget(this.eventEmitter),
                dropImage(this.context),
            ]);
            return rules ? plugins.concat(rules) : plugins;
        },
        enumerable: false,
        configurable: true
    });
    EditorBase.prototype.createInputRules = function () {
        var widgetRules = getWidgetRules();
        var rules = widgetRules.map(function (_a) {
            var rule = _a.rule;
            return new InputRule(rule, function (state, match, start, end) {
                var schema = state.schema, tr = state.tr, doc = state.doc;
                var allMatched = match.input.match(new RegExp(rule, 'g'));
                var pos = doc.resolve(start);
                var parent = pos.parent;
                var count = 0;
                if (isWidgetNode(parent)) {
                    parent = pos.node(pos.depth - 1);
                }
                parent.forEach(function (child) { return isWidgetNode(child) && (count += 1); });
                // replace the content only if the count of matched rules in whole text is greater than current widget node count
                if (allMatched.length > count) {
                    var content = last(allMatched);
                    var nodes = createNodesWithWidget(content, schema);
                    // adjust start position based on widget content
                    return tr.replaceWith(end - content.length + 1, end, nodes);
                }
                return null;
            });
        });
        return rules.length ? inputRules({ rules: rules }) : null;
    };
    EditorBase.prototype.clearTimer = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    EditorBase.prototype.createSchema = function () {
        return new Schema({
            nodes: this.specs.nodes,
            marks: this.specs.marks,
        });
    };
    EditorBase.prototype.createKeymaps = function (useCommandShortcut) {
        var _a = getDefaultCommands(), undo = _a.undo, redo = _a.redo;
        var allKeymaps = this.specs.keymaps(useCommandShortcut);
        var historyKeymap = {
            'Mod-z': undo(),
            'Shift-Mod-z': redo(),
        };
        return useCommandShortcut ? allKeymaps.concat(keymap(historyKeymap)) : allKeymaps;
    };
    EditorBase.prototype.createCommands = function () {
        return this.specs.commands(this.view);
    };
    EditorBase.prototype.createPluginProps = function () {
        var _this = this;
        return this.extraPlugins.map(function (plugin) { return plugin(_this.eventEmitter); });
    };
    EditorBase.prototype.focus = function () {
        var _this = this;
        this.clearTimer();
        // prevent the error for IE11
        this.timer = setTimeout(function () {
            _this.view.focus();
            _this.view.dispatch(_this.view.state.tr.scrollIntoView());
        });
    };
    EditorBase.prototype.blur = function () {
        this.view.dom.blur();
    };
    EditorBase.prototype.destroy = function () {
        var _this = this;
        this.clearTimer();
        this.view.destroy();
        Object.keys(this).forEach(function (prop) {
            delete _this[prop];
        });
    };
    EditorBase.prototype.moveCursorToStart = function (focus) {
        var tr = this.view.state.tr;
        this.view.dispatch(tr.setSelection(createTextSelection(tr, 1)).scrollIntoView());
        if (focus) {
            this.focus();
        }
    };
    EditorBase.prototype.moveCursorToEnd = function (focus) {
        var tr = this.view.state.tr;
        this.view.dispatch(tr.setSelection(createTextSelection(tr, tr.doc.content.size - 1)).scrollIntoView());
        if (focus) {
            this.focus();
        }
    };
    EditorBase.prototype.setScrollTop = function (top) {
        this.view.dom.scrollTop = top;
    };
    EditorBase.prototype.getScrollTop = function () {
        return this.view.dom.scrollTop;
    };
    EditorBase.prototype.setPlaceholder = function (text) {
        this.placeholder.text = text;
        this.view.dispatch(this.view.state.tr.scrollIntoView());
    };
    EditorBase.prototype.setHeight = function (height) {
        css_1(this.el, { height: height + "px" });
    };
    EditorBase.prototype.setMinHeight = function (minHeight) {
        css_1(this.el, { minHeight: minHeight + "px" });
    };
    EditorBase.prototype.getElement = function () {
        return this.el;
    };
    return EditorBase;
}());

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

var defaultCommandShortcuts = [
    'Enter',
    'Shift-Enter',
    'Mod-Enter',
    'Tab',
    'Shift-Tab',
    'Delete',
    'Backspace',
    'Mod-Delete',
    'Mod-Backspace',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Mod-d',
    'Mod-D',
    'Alt-ArrowUp',
    'Alt-ArrowDown',
];
function execCommand(view, command, payload) {
    view.focus();
    return command(payload)(view.state, view.dispatch, view);
}
var SpecManager = /** @class */ (function () {
    function SpecManager(specs) {
        this.specs = specs;
    }
    Object.defineProperty(SpecManager.prototype, "nodes", {
        get: function () {
            return this.specs
                .filter(function (spec) { return spec.type === 'node'; })
                .reduce(function (nodes, _a) {
                var _b;
                var name = _a.name, schema = _a.schema;
                return __assign(__assign({}, nodes), (_b = {}, _b[name] = schema, _b));
            }, {});
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecManager.prototype, "marks", {
        get: function () {
            return this.specs
                .filter(function (spec) { return spec.type === 'mark'; })
                .reduce(function (marks, _a) {
                var _b;
                var name = _a.name, schema = _a.schema;
                return __assign(__assign({}, marks), (_b = {}, _b[name] = schema, _b));
            }, {});
        },
        enumerable: false,
        configurable: true
    });
    SpecManager.prototype.commands = function (view, addedCommands) {
        var specCommands = this.specs
            .filter(function (_a) {
            var commands = _a.commands;
            return commands;
        })
            .reduce(function (allCommands, spec) {
            var commands = {};
            var specCommand = spec.commands();
            if (isFunction_1(specCommand)) {
                commands[spec.name] = function (payload) { return execCommand(view, specCommand, payload); };
            }
            else {
                Object.keys(specCommand).forEach(function (name) {
                    commands[name] = function (payload) { return execCommand(view, specCommand[name], payload); };
                });
            }
            return __assign(__assign({}, allCommands), commands);
        }, {});
        var defaultCommands = getDefaultCommands();
        Object.keys(defaultCommands).forEach(function (name) {
            specCommands[name] = function (payload) { return execCommand(view, defaultCommands[name], payload); };
        });
        if (addedCommands) {
            Object.keys(addedCommands).forEach(function (name) {
                specCommands[name] = function (payload) { return execCommand(view, addedCommands[name], payload); };
            });
        }
        return specCommands;
    };
    SpecManager.prototype.keymaps = function (useCommandShortcut) {
        var specKeymaps = this.specs.filter(function (spec) { return spec.keymaps; }).map(function (spec) { return spec.keymaps(); });
        return specKeymaps.map(function (keys) {
            if (!useCommandShortcut) {
                Object.keys(keys).forEach(function (key) {
                    if (!includes(defaultCommandShortcuts, key)) {
                        delete keys[key];
                    }
                });
            }
            return keymap(keys);
        });
    };
    SpecManager.prototype.setContext = function (context) {
        this.specs.forEach(function (spec) {
            spec.setContext(context);
        });
    };
    return SpecManager;
}());

function resolveSelectionPos(selection) {
    var from = selection.from, to = selection.to;
    if (selection instanceof AllSelection) {
        return [from + 1, to - 1];
    }
    return [from, to];
}
function getMdLine(resolvedPos) {
    return resolvedPos.index(0) + 1;
}
function getWidgetNodePos(node, chPos, direction) {
    if (direction === void 0) { direction = 1; }
    var additionalPos = 0;
    node.forEach(function (child, pos) {
        // add or subtract widget node tag
        if (isWidgetNode(child) && pos + 2 < chPos) {
            additionalPos += 2 * direction;
        }
    });
    return additionalPos;
}
function getEditorToMdPos(doc, from, to) {
    if (to === void 0) { to = from; }
    var collapsed = from === to;
    var startResolvedPos = doc.resolve(from);
    var startLine = getMdLine(startResolvedPos);
    var endLine = startLine;
    var startOffset = startResolvedPos.start(1);
    var endOffset = startOffset;
    if (!collapsed) {
        // prevent the end offset from pointing to the root document position
        var endResolvedPos = doc.resolve(to === doc.content.size ? to - 1 : to);
        endOffset = endResolvedPos.start(1);
        endLine = getMdLine(endResolvedPos);
        // To resolve the end offset excluding document tag size
        if (endResolvedPos.pos === doc.content.size) {
            to = doc.content.size - 2;
        }
    }
    var startCh = Math.max(from - startOffset + 1, 1);
    var endCh = Math.max(to - endOffset + 1, 1);
    return [
        [startLine, startCh + getWidgetNodePos(doc.child(startLine - 1), startCh, -1)],
        [endLine, endCh + getWidgetNodePos(doc.child(endLine - 1), endCh, -1)],
    ];
}
function getStartPosListPerLine(doc, endIndex) {
    var startPosListPerLine = [];
    for (var i = 0, pos = 0; i < endIndex; i += 1) {
        var child = doc.child(i);
        startPosListPerLine[i] = pos;
        pos += child.nodeSize;
    }
    return startPosListPerLine;
}
function getMdToEditorPos(doc, startPos, endPos) {
    var startPosListPerLine = getStartPosListPerLine(doc, endPos[0]);
    var startIndex = startPos[0] - 1;
    var endIndex = endPos[0] - 1;
    var startNode = doc.child(startIndex);
    var endNode = doc.child(endIndex);
    // calculate the position corresponding to the line
    var from = startPosListPerLine[startIndex];
    var to = startPosListPerLine[endIndex];
    // calculate the position corresponding to the character offset of the line
    from += startPos[1] + getWidgetNodePos(startNode, startPos[1] - 1);
    to += endPos[1] + getWidgetNodePos(endNode, endPos[1] - 1);
    return [from, Math.min(to, doc.content.size)];
}
function getRangeInfo(selection) {
    var $from = selection.$from, $to = selection.$to;
    var from = selection.from, to = selection.to;
    var doc = $from.doc;
    if (selection instanceof AllSelection) {
        $from = doc.resolve(from + 1);
        $to = doc.resolve(to - 1);
    }
    if ($from.depth === 0) {
        $from = doc.resolve(from - 1);
        $to = $from;
    }
    return {
        startFromOffset: $from.start(1),
        endFromOffset: $to.start(1),
        startToOffset: $from.end(1),
        endToOffset: $to.end(1),
        startIndex: $from.index(0),
        endIndex: $to.index(0),
        from: $from.pos,
        to: $to.pos,
    };
}
function getNodeContentOffsetRange(doc, targetIndex) {
    var startOffset = 1;
    var endOffset = 1;
    for (var i = 0, offset = 0; i < doc.childCount; i += 1) {
        var nodeSize = doc.child(i).nodeSize;
        // calculate content start, end offset(not node offset)
        startOffset = offset + 1;
        endOffset = offset + nodeSize - 1;
        if (i === targetIndex) {
            break;
        }
        offset += nodeSize;
    }
    return { startOffset: startOffset, endOffset: endOffset };
}

var HEADING = 'heading';
var BLOCK_QUOTE = 'blockQuote';
var LIST_ITEM = 'listItem';
var TABLE = 'table';
var TABLE_CELL = 'tableCell';
var CODE_BLOCK = 'codeBlock';
var THEMATIC_BREAK = 'thematicBreak';
var LINK = 'link';
var CODE = 'code';
var META = 'meta';
var DELIM = 'delimiter';
var TASK_DELIM = 'taskDelimiter';
var TEXT = 'markedText';
var HTML = 'html';
var CUSTOM_BLOCK = 'customBlock';
var delimSize = {
    strong: 2,
    emph: 1,
    strike: 2,
};
function markInfo(start, end, type, attrs) {
    return { start: start, end: end, spec: { type: type, attrs: attrs } };
}
function heading(_a, start, end) {
    var level = _a.level, headingType = _a.headingType;
    var marks = [markInfo(start, end, HEADING, { level: level })];
    if (headingType === 'atx') {
        marks.push(markInfo(start, addOffsetPos(start, level), DELIM));
    }
    else {
        marks.push(markInfo(setOffsetPos(end, 0), end, HEADING, { seText: true }));
    }
    return marks;
}
function emphasisAndStrikethrough(_a, start, end) {
    var type = _a.type;
    var startDelimPos = addOffsetPos(start, delimSize[type]);
    var endDelimPos = addOffsetPos(end, -delimSize[type]);
    return [
        markInfo(startDelimPos, endDelimPos, type),
        markInfo(start, startDelimPos, DELIM),
        markInfo(endDelimPos, end, DELIM),
    ];
}
function markLink(start, end, linkTextStart, lastChildCh) {
    return [
        markInfo(start, end, LINK),
        markInfo(setOffsetPos(start, linkTextStart[1] + 1), setOffsetPos(end, lastChildCh), LINK, {
            desc: true,
        }),
        markInfo(setOffsetPos(end, lastChildCh + 2), addOffsetPos(end, -1), LINK, { url: true }),
    ];
}
function image(_a, start, end) {
    var lastChild = _a.lastChild;
    var lastChildCh = lastChild ? getMdEndCh(lastChild) + 1 : 3; // 3: length of '![]'
    var linkTextEnd = addOffsetPos(start, 1);
    return __spreadArray([markInfo(start, linkTextEnd, META)], markLink(start, end, linkTextEnd, lastChildCh));
}
function link(_a, start, end) {
    var lastChild = _a.lastChild, extendedAutolink = _a.extendedAutolink;
    var lastChildCh = lastChild ? getMdEndCh(lastChild) + 1 : 2; // 2: length of '[]'
    return extendedAutolink
        ? [markInfo(start, end, LINK, { desc: true })]
        : markLink(start, end, start, lastChildCh);
}
function code(_a, start, end) {
    var tickCount = _a.tickCount;
    var openDelimEnd = addOffsetPos(start, tickCount);
    var closeDelimStart = addOffsetPos(end, -tickCount);
    return [
        markInfo(start, end, CODE),
        markInfo(start, openDelimEnd, CODE, { start: true }),
        markInfo(openDelimEnd, closeDelimStart, CODE, { marked: true }),
        markInfo(closeDelimStart, end, CODE, { end: true }),
    ];
}
function lineBackground(parent, start, end, prefix) {
    var defaultBackground = {
        start: start,
        end: end,
        spec: {
            attrs: { className: prefix + "-line-background", codeStart: start[0], codeEnd: end[0] },
        },
        lineBackground: true,
    };
    return parent.type !== 'item' && parent.type !== 'blockQuote'
        ? [
            __assign(__assign({}, defaultBackground), { end: start, spec: { attrs: { className: prefix + "-line-background start" } } }),
            __assign(__assign({}, defaultBackground), { start: [Math.min(start[0] + 1, end[0]), start[1]] }),
        ]
        : null;
}
function codeBlock(node, start, end, endLine) {
    var fenceOffset = node.fenceOffset, fenceLength = node.fenceLength, fenceChar = node.fenceChar, info = node.info, infoPadding = node.infoPadding, parent = node.parent;
    var fenceEnd = fenceOffset + fenceLength;
    var marks = [markInfo(setOffsetPos(start, 1), end, CODE_BLOCK)];
    if (fenceChar) {
        marks.push(markInfo(start, addOffsetPos(start, fenceEnd), DELIM));
    }
    if (info) {
        marks.push(markInfo(addOffsetPos(start, fenceLength), addOffsetPos(start, fenceLength + infoPadding + info.length), META));
    }
    var codeBlockEnd = "^(\\s{0,4})(" + fenceChar + "{" + fenceLength + ",})";
    var reCodeBlockEnd = new RegExp(codeBlockEnd);
    if (reCodeBlockEnd.test(endLine)) {
        marks.push(markInfo(setOffsetPos(end, 1), end, DELIM));
    }
    var lineBackgroundMarkInfo = lineBackground(parent, start, end, 'code-block');
    return lineBackgroundMarkInfo ? marks.concat(lineBackgroundMarkInfo) : marks;
}
function customBlock(node, start, end) {
    var _a = node, offset = _a.offset, syntaxLength = _a.syntaxLength, info = _a.info, parent = _a.parent;
    var syntaxEnd = offset + syntaxLength;
    var marks = [markInfo(setOffsetPos(start, 1), end, CUSTOM_BLOCK)];
    marks.push(markInfo(start, addOffsetPos(start, syntaxEnd), DELIM));
    if (info) {
        marks.push(markInfo(addOffsetPos(start, syntaxEnd), addOffsetPos(start, syntaxLength + info.length), META));
    }
    marks.push(markInfo(setOffsetPos(end, 1), end, DELIM));
    var lineBackgroundMarkInfo = lineBackground(parent, start, end, 'custom-block');
    return lineBackgroundMarkInfo ? marks.concat(lineBackgroundMarkInfo) : marks;
}
function markListItemChildren(node, markType) {
    var marks = [];
    while (node) {
        var type = node.type;
        if (type === 'paragraph' || type === 'codeBlock') {
            marks.push(markInfo([getMdStartLine(node), getMdStartCh(node) - 1], [getMdEndLine(node), getMdEndCh(node) + 1], markType));
        }
        node = node.next;
    }
    return marks;
}
function markParagraphInBlockQuote(node) {
    var marks = [];
    while (node) {
        marks.push(markInfo([getMdStartLine(node), getMdStartCh(node)], [getMdEndLine(node), getMdEndCh(node) + 1], TEXT));
        node = node.next;
    }
    return marks;
}
function blockQuote(node, start, end) {
    var marks = node.parent && node.parent.type !== 'blockQuote' ? [markInfo(start, end, BLOCK_QUOTE)] : [];
    if (node.firstChild) {
        var childMarks = [];
        if (node.firstChild.type === 'paragraph') {
            childMarks = markParagraphInBlockQuote(node.firstChild.firstChild);
        }
        else if (node.firstChild.type === 'list') {
            childMarks = markListItemChildren(node.firstChild, TEXT);
        }
        marks = __spreadArray(__spreadArray([], marks), childMarks);
    }
    return marks;
}
function getSpecOfListItemStyle(node) {
    var depth = 0;
    while (node.parent.parent && node.parent.parent.type === 'item') {
        node = node.parent.parent;
        depth += 1;
    }
    var attrs = [{ odd: true }, { even: true }][depth % 2];
    return [LIST_ITEM, __assign(__assign({}, attrs), { listStyle: true })];
}
function item(node, start) {
    var _a = node.listData, padding = _a.padding, task = _a.task;
    var spec = getSpecOfListItemStyle(node);
    var marks = [markInfo.apply(void 0, __spreadArray([start, addOffsetPos(start, padding)], spec))];
    if (task) {
        marks.push(markInfo(addOffsetPos(start, padding), addOffsetPos(start, padding + 3), TASK_DELIM));
        marks.push(markInfo(addOffsetPos(start, padding + 1), addOffsetPos(start, padding + 2), META));
    }
    return marks.concat(markListItemChildren(node.firstChild, TEXT));
}
var markNodeFuncMap = {
    heading: heading,
    strong: emphasisAndStrikethrough,
    emph: emphasisAndStrikethrough,
    strike: emphasisAndStrikethrough,
    link: link,
    image: image,
    code: code,
    codeBlock: codeBlock,
    blockQuote: blockQuote,
    item: item,
    customBlock: customBlock,
};
var simpleMarkClassNameMap = {
    thematicBreak: THEMATIC_BREAK,
    table: TABLE,
    tableCell: TABLE_CELL,
    htmlInline: HTML,
};
function getMarkInfo(node, start, end, endLine) {
    var type = node.type;
    if (isFunction_1(markNodeFuncMap[type])) {
        // @ts-ignore
        return markNodeFuncMap[type](node, start, end, endLine);
    }
    if (simpleMarkClassNameMap[type]) {
        return [markInfo(start, end, simpleMarkClassNameMap[type])];
    }
    return null;
}

var removingBackgroundIndexMap = {};
function syntaxHighlight(_a) {
    var schema = _a.schema, toastMark = _a.toastMark;
    return new Plugin({
        appendTransaction: function (transactions, _, newState) {
            var tr = transactions[0];
            var newTr = newState.tr;
            if (tr.docChanged) {
                var markInfo_1 = [];
                var editResult = tr.getMeta('editResult');
                editResult.forEach(function (result) {
                    var nodes = result.nodes, removedNodeRange = result.removedNodeRange;
                    if (nodes.length) {
                        markInfo_1 = markInfo_1.concat(getMarkForRemoving(newTr, nodes));
                        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                            var parent_1 = nodes_1[_i];
                            var walker = parent_1.walker();
                            var event_1 = walker.next();
                            while (event_1) {
                                var node = event_1.node, entering = event_1.entering;
                                if (entering) {
                                    markInfo_1 = markInfo_1.concat(getMarkForAdding(node, toastMark));
                                }
                                event_1 = walker.next();
                            }
                        }
                    }
                    else if (removedNodeRange) {
                        var maxIndex = newTr.doc.childCount - 1;
                        var _a = removedNodeRange.line, startLine = _a[0], endLine = _a[1];
                        var startIndex = Math.min(startLine, maxIndex);
                        var endIndex = Math.min(endLine, maxIndex);
                        // cache the index to remove code block, custom block background when there are no adding nodes
                        for (var i = startIndex; i <= endIndex; i += 1) {
                            removingBackgroundIndexMap[i] = true;
                        }
                    }
                });
                appendMarkTr(newTr, schema, markInfo_1);
            }
            return newTr.setMeta('widget', tr.getMeta('widget'));
        },
    });
}
function isDifferentBlock(doc, index, attrs) {
    return Object.keys(attrs).some(function (name) { return attrs[name] !== doc.child(index).attrs[name]; });
}
function addLineBackground(tr, doc, paragraph, blockPosInfo, attrs) {
    if (attrs === void 0) { attrs = {}; }
    var startIndex = blockPosInfo.startIndex, endIndex = blockPosInfo.endIndex, from = blockPosInfo.from, to = blockPosInfo.to;
    var shouldChangeBlockType = false;
    for (var i = startIndex; i <= endIndex; i += 1) {
        // prevent to remove background of the node that need to have background
        delete removingBackgroundIndexMap[i];
        shouldChangeBlockType = isDifferentBlock(doc, i, attrs);
    }
    if (shouldChangeBlockType) {
        tr.setBlockType(from, to, paragraph, attrs);
    }
}
function appendMarkTr(tr, schema, marks) {
    var doc = tr.doc;
    var paragraph = schema.nodes.paragraph;
    // get start position per line for lazy calculation
    var startPosListPerLine = getStartPosListPerLine(doc, doc.childCount);
    marks.forEach(function (_a) {
        var start = _a.start, end = _a.end, spec = _a.spec, lineBackground = _a.lineBackground;
        var startIndex = Math.min(start[0], doc.childCount) - 1;
        var endIndex = Math.min(end[0], doc.childCount) - 1;
        var startNode = doc.child(startIndex);
        var endNode = doc.child(endIndex);
        // calculate the position corresponding to the line
        var from = startPosListPerLine[startIndex];
        var to = startPosListPerLine[endIndex];
        // calculate the position corresponding to the character offset of the line
        from += start[1] + getWidgetNodePos(startNode, start[1] - 1);
        to += end[1] + getWidgetNodePos(endNode, end[1] - 1);
        if (spec) {
            if (lineBackground) {
                var posInfo = { from: from, to: to, startIndex: startIndex, endIndex: endIndex };
                addLineBackground(tr, doc, paragraph, posInfo, spec.attrs);
            }
            else {
                tr.addMark(from, to, schema.mark(spec.type, spec.attrs));
            }
        }
        else {
            tr.removeMark(from, to);
        }
    });
    removeBlockBackground(tr, startPosListPerLine, paragraph);
}
function removeBlockBackground(tr, startPosListPerLine, paragraph) {
    Object.keys(removingBackgroundIndexMap).forEach(function (index) {
        var startIndex = Number(index);
        // get the end position of the current line with the next node start position.
        var endIndex = Math.min(Number(index) + 1, tr.doc.childCount - 1);
        var from = startPosListPerLine[startIndex];
        // subtract '1' for getting end position of the line
        var to = startPosListPerLine[endIndex] - 1;
        if (startIndex === endIndex) {
            to += 2;
        }
        tr.setBlockType(from, to, paragraph);
    });
}
function cacheIndexToRemoveBackground(doc, start, end) {
    var skipLines = [];
    removingBackgroundIndexMap = {};
    for (var i = start[0] - 1; i < end[0]; i += 1) {
        var node = doc.child(i);
        var codeEnd = node.attrs.codeEnd;
        var codeStart = node.attrs.codeStart;
        if (codeStart && codeEnd && !includes(skipLines, codeStart)) {
            skipLines.push(codeStart);
            codeEnd = Math.min(codeEnd, doc.childCount);
            // should subtract '1' to markdown line position
            // because markdown parser has '1'(not zero) as the start number
            var startIndex = codeStart - 1;
            var endIndex = end[0];
            for (var index = startIndex; index < endIndex; index += 1) {
                removingBackgroundIndexMap[index] = true;
            }
        }
    }
}
function getMarkForRemoving(_a, nodes) {
    var doc = _a.doc;
    var start = nodes[0].sourcepos[0];
    var _b = last(nodes).sourcepos, end = _b[1];
    var startPos = [start[0], start[1]];
    var endPos = [end[0], end[1] + 1];
    var marks = [];
    cacheIndexToRemoveBackground(doc, start, end);
    marks.push({ start: startPos, end: endPos });
    return marks;
}
function getMarkForAdding(node, toastMark) {
    var lineTexts = toastMark.getLineTexts();
    var startPos = [getMdStartLine(node), getMdStartCh(node)];
    var endPos = [getMdEndLine(node), getMdEndCh(node) + 1];
    var markInfo = getMarkInfo(node, startPos, endPos, lineTexts[endPos[0] - 1]);
    return markInfo !== null && markInfo !== void 0 ? markInfo : [];
}

var defaultToolbarStateKeys = [
    'taskList',
    'orderedList',
    'bulletList',
    'table',
    'strong',
    'emph',
    'strike',
    'heading',
    'thematicBreak',
    'blockQuote',
    'code',
    'codeBlock',
    'indent',
    'outdent',
];
function getToolbarStateType$1(mdNode) {
    var type = mdNode.type;
    if (isListNode$1(mdNode)) {
        if (mdNode.listData.task) {
            return 'taskList';
        }
        return mdNode.listData.type === 'ordered' ? 'orderedList' : 'bulletList';
    }
    if (type.indexOf('table') !== -1) {
        return 'table';
    }
    if (!includes(defaultToolbarStateKeys, type)) {
        return null;
    }
    return type;
}
function getToolbarState$1(targetNode) {
    var toolbarState = {
        indent: { active: false, disabled: true },
        outdent: { active: false, disabled: true },
    };
    var listEnabled = true;
    traverseParentNodes(targetNode, function (mdNode) {
        var type = getToolbarStateType$1(mdNode);
        if (!type) {
            return;
        }
        if (type === 'bulletList' || type === 'orderedList') {
            // to apply the nearlist list state in the nested list
            if (listEnabled) {
                toolbarState[type] = { active: true };
                toolbarState.indent.disabled = false;
                toolbarState.outdent.disabled = false;
                listEnabled = false;
            }
        }
        else {
            toolbarState[type] = { active: true };
        }
    });
    return toolbarState;
}
function previewHighlight(_a) {
    var toastMark = _a.toastMark, eventEmitter = _a.eventEmitter;
    return new Plugin({
        view: function () {
            return {
                update: function (view, prevState) {
                    var state = view.state;
                    var doc = state.doc, selection = state.selection;
                    if (prevState && prevState.doc.eq(doc) && prevState.selection.eq(selection)) {
                        return;
                    }
                    var from = selection.from;
                    var startChOffset = state.doc.resolve(from).start();
                    var line = state.doc.content.findIndex(from).index + 1;
                    var ch = from - startChOffset;
                    if (from === startChOffset) {
                        ch += 1;
                    }
                    var cursorPos = [line, ch];
                    var mdNode = toastMark.findNodeAtPosition(cursorPos);
                    var toolbarState = getToolbarState$1(mdNode);
                    eventEmitter.emit('changeToolbarState', {
                        cursorPos: cursorPos,
                        mdNode: mdNode,
                        toolbarState: toolbarState,
                    });
                    eventEmitter.emit('setFocusedNode', mdNode);
                },
            };
        },
    });
}

var Doc$1 = /** @class */ (function (_super) {
    __extends(Doc, _super);
    function Doc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Doc.prototype, "name", {
        get: function () {
            return 'doc';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Doc.prototype, "schema", {
        get: function () {
            return {
                content: 'block+',
            };
        },
        enumerable: false,
        configurable: true
    });
    return Doc;
}(Node$1));

var Mark = /** @class */ (function () {
    function Mark() {
    }
    Object.defineProperty(Mark.prototype, "type", {
        get: function () {
            return 'mark';
        },
        enumerable: false,
        configurable: true
    });
    Mark.prototype.setContext = function (context) {
        this.context = context;
    };
    return Mark;
}());

function getTextByMdLine(doc, mdLine) {
    return getTextContent(doc, mdLine - 1);
}
function getTextContent(doc, index) {
    return doc.child(index).textContent;
}

var reBlockQuote = /^\s*> ?/;
var BlockQuote$1 = /** @class */ (function (_super) {
    __extends(BlockQuote, _super);
    function BlockQuote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BlockQuote.prototype, "name", {
        get: function () {
            return 'blockQuote';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockQuote.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('block-quote') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    BlockQuote.prototype.createBlockQuoteText = function (text, isBlockQuote) {
        return isBlockQuote ? text.replace(reBlockQuote, '').trim() : "> " + text.trim();
    };
    BlockQuote.prototype.extendBlockQuote = function () {
        var _this = this;
        return function (_a, dispatch) {
            var selection = _a.selection, doc = _a.doc, tr = _a.tr, schema = _a.schema;
            var _b = getRangeInfo(selection), endFromOffset = _b.endFromOffset, endToOffset = _b.endToOffset, endIndex = _b.endIndex, to = _b.to;
            var textContent = getTextContent(doc, endIndex);
            var isBlockQuote = reBlockQuote.test(textContent);
            if (isBlockQuote && to > endFromOffset && selection.empty) {
                var isEmpty = !textContent.replace(reBlockQuote, '').trim();
                if (isEmpty) {
                    tr.deleteRange(endFromOffset, endToOffset).split(tr.mapping.map(endToOffset));
                }
                else {
                    var slicedText = textContent.slice(to - endFromOffset).trim();
                    var node = createTextNode$1(schema, _this.createBlockQuoteText(slicedText));
                    splitAndExtendBlock(tr, endToOffset, slicedText, node);
                }
                dispatch(tr);
                return true;
            }
            return false;
        };
    };
    BlockQuote.prototype.commands = function () {
        var _this = this;
        return function () { return function (state, dispatch) {
            var selection = state.selection, doc = state.doc;
            var _a = getRangeInfo(selection), startFromOffset = _a.startFromOffset, endToOffset = _a.endToOffset, startIndex = _a.startIndex, endIndex = _a.endIndex;
            var isBlockQuote = reBlockQuote.test(getTextContent(doc, startIndex));
            var tr = replaceTextNode({
                state: state,
                startIndex: startIndex,
                endIndex: endIndex,
                from: startFromOffset,
                createText: function (textContent) { return _this.createBlockQuoteText(textContent, isBlockQuote); },
            });
            dispatch(tr.setSelection(createTextSelection(tr, tr.mapping.map(endToOffset))));
            return true;
        }; };
    };
    BlockQuote.prototype.keymaps = function () {
        var blockQuoteCommand = this.commands()();
        return {
            'alt-q': blockQuoteCommand,
            'alt-Q': blockQuoteCommand,
            Enter: this.extendBlockQuote(),
        };
    };
    return BlockQuote;
}(Mark));

var reList = /(^\s*)([-*+] |[\d]+\. )/;
var reOrderedList = /(^\s*)([\d])+\.( \[[ xX]])? /;
var reOrderedListGroup = /^(\s*)((\d+)([.)]\s(?:\[(?:x|\s)\]\s)?))(.*)/;
var reCanBeTaskList = /(^\s*)([-*+]|[\d]+\.)( \[[ xX]])? /;
var reBulletListGroup = /^(\s*)([-*+]+(\s(?:\[(?:x|\s)\]\s)?))(.*)/;
var reTaskList = /(^\s*)([-*+] |[\d]+\. )(\[[ xX]] )/;
var reBulletTaskList = /(^\s*)([-*+])( \[[ xX]]) /;
function getListType(text) {
    return reOrderedList.test(text) ? 'ordered' : 'bullet';
}
function getListDepth(mdNode) {
    var depth = 0;
    while (mdNode && mdNode.type !== 'document') {
        if (mdNode.type === 'list') {
            depth += 1;
        }
        mdNode = mdNode.parent;
    }
    return depth;
}
function findSameDepthList(toastMark, currentLine, depth, backward) {
    var lineTexts = toastMark.getLineTexts();
    var lineLen = lineTexts.length;
    var result = [];
    var line = currentLine;
    while (backward ? line < lineLen : line > 1) {
        line = backward ? line + 1 : line - 1;
        var mdNode = toastMark.findFirstNodeAtLine(line);
        var currentListDepth = getListDepth(mdNode);
        if (currentListDepth === depth) {
            result.push({ line: line, depth: depth, mdNode: mdNode });
        }
        else if (currentListDepth < depth) {
            break;
        }
    }
    return result;
}
function getSameDepthItems(_a) {
    var toastMark = _a.toastMark, mdNode = _a.mdNode, line = _a.line;
    var depth = getListDepth(mdNode);
    var forwardList = findSameDepthList(toastMark, line, depth, false).reverse();
    var backwardList = findSameDepthList(toastMark, line, depth, true);
    return forwardList.concat([{ line: line, depth: depth, mdNode: mdNode }]).concat(backwardList);
}
function textToBullet(text) {
    if (!reList.test(text)) {
        return "* " + text;
    }
    var type = getListType(text);
    if (type === 'bullet' && reCanBeTaskList.test(text)) {
        text = text.replace(reBulletTaskList, '$1$2 ');
    }
    else if (type === 'ordered') {
        text = text.replace(reOrderedList, '$1* ');
    }
    return text;
}
function textToOrdered(text, ordinalNum) {
    if (!reList.test(text)) {
        return ordinalNum + ". " + text;
    }
    var type = getListType(text);
    if (type === 'bullet' || (type === 'ordered' && reCanBeTaskList.test(text))) {
        text = text.replace(reCanBeTaskList, "$1" + ordinalNum + ". ");
    }
    else if (type === 'ordered') {
        // eslint-disable-next-line prefer-destructuring
        var start = reOrderedListGroup.exec(text)[3];
        if (Number(start) !== ordinalNum) {
            text = text.replace(reOrderedList, "$1" + ordinalNum + ". ");
        }
    }
    return text;
}
function getChangedInfo(doc, sameDepthItems, type, start) {
    if (start === void 0) { start = 0; }
    var firstIndex = Number.MAX_VALUE;
    var lastIndex = 0;
    var changedResults = sameDepthItems.map(function (_a, index) {
        var line = _a.line;
        firstIndex = Math.min(line - 1, firstIndex);
        lastIndex = Math.max(line - 1, lastIndex);
        var text = getTextByMdLine(doc, line);
        text = type === 'bullet' ? textToBullet(text) : textToOrdered(text, index + 1 + start);
        return { text: text, line: line };
    });
    return { changedResults: changedResults, firstIndex: firstIndex, lastIndex: lastIndex };
}
function getBulletOrOrdered(type, context) {
    var sameDepthListInfo = getSameDepthItems(context);
    return getChangedInfo(context.doc, sameDepthListInfo, type);
}
var otherListToList = {
    bullet: function (context) {
        return getBulletOrOrdered('bullet', context);
    },
    ordered: function (context) {
        return getBulletOrOrdered('ordered', context);
    },
    task: function (_a) {
        var mdNode = _a.mdNode, doc = _a.doc, line = _a.line;
        var text = getTextByMdLine(doc, line);
        if (mdNode.listData.task) {
            text = text.replace(reTaskList, '$1$2');
        }
        else if (isListNode$1(mdNode)) {
            text = text.replace(reList, '$1$2[ ] ');
        }
        return { changedResults: [{ text: text, line: line }] };
    },
};
var otherNodeToList = {
    bullet: function (_a) {
        var doc = _a.doc, line = _a.line;
        var lineText = getTextByMdLine(doc, line);
        var changedResults = [{ text: "* " + lineText, line: line }];
        return { changedResults: changedResults };
    },
    ordered: function (_a) {
        var toastMark = _a.toastMark, doc = _a.doc, line = _a.line, startLine = _a.startLine;
        var lineText = getTextByMdLine(doc, line);
        var firstOrderedListNum = 1;
        var firstOrderedListLine = startLine;
        var skipped = 0;
        for (var i = startLine - 1; i > 0; i -= 1) {
            var mdNode = toastMark.findFirstNodeAtLine(i);
            var text = getTextByMdLine(doc, i);
            var canBeListNode = text && !!findClosestNode(mdNode, function (targetNode) { return isListNode$1(targetNode); });
            var searchResult = reOrderedListGroup.exec(getTextByMdLine(doc, i));
            if (!searchResult && !canBeListNode) {
                break;
            }
            if (!searchResult && canBeListNode) {
                skipped += 1;
                continue;
            }
            var _b = searchResult, indent = _b[1], start = _b[3];
            // basis on one depth list
            if (!indent) {
                firstOrderedListNum = Number(start);
                firstOrderedListLine = i;
                break;
            }
        }
        var ordinalNum = firstOrderedListNum + line - firstOrderedListLine - skipped;
        var changedResults = [{ text: ordinalNum + ". " + lineText, line: line }];
        return { changedResults: changedResults };
    },
    task: function (_a) {
        var doc = _a.doc, line = _a.line;
        var lineText = getTextByMdLine(doc, line);
        var changedResults = [{ text: "* [ ] " + lineText, line: line }];
        return { changedResults: changedResults };
    },
};
var extendList = {
    bullet: function (_a) {
        var line = _a.line, doc = _a.doc;
        var lineText = getTextByMdLine(doc, line);
        var _b = reBulletListGroup.exec(lineText), indent = _b[1], delimiter = _b[2];
        return { listSyntax: "" + indent + delimiter };
    },
    ordered: function (_a) {
        var toastMark = _a.toastMark, line = _a.line, mdNode = _a.mdNode, doc = _a.doc;
        var depth = getListDepth(mdNode);
        var lineText = getTextByMdLine(doc, line);
        var _b = reOrderedListGroup.exec(lineText), indent = _b[1], start = _b[3], delimiter = _b[4];
        var ordinalNum = Number(start) + 1;
        var listSyntax = "" + indent + ordinalNum + delimiter;
        var backwardList = findSameDepthList(toastMark, line, depth, true);
        var filteredList = backwardList.filter(function (info) {
            var searchResult = reOrderedListGroup.exec(getTextByMdLine(doc, info.line));
            return (searchResult &&
                searchResult[1].length === indent.length &&
                !!findClosestNode(info.mdNode, function (targetNode) { return isOrderedListNode(targetNode); }));
        });
        return __assign({ listSyntax: listSyntax }, getChangedInfo(doc, filteredList, 'ordered', ordinalNum));
    },
};
function getReorderedListInfo(doc, schema, line, ordinalNum, prevIndentLength) {
    var nodes = [];
    var lineText = getTextByMdLine(doc, line);
    var searchResult = reOrderedListGroup.exec(lineText);
    while (searchResult) {
        var indent = searchResult[1], delimiter = searchResult[4], text = searchResult[5];
        var indentLength = indent.length;
        if (indentLength === prevIndentLength) {
            nodes.push(createTextNode$1(schema, "" + indent + ordinalNum + delimiter + text));
            ordinalNum += 1;
            line += 1;
        }
        else if (indentLength > prevIndentLength) {
            var nestedListInfo = getReorderedListInfo(doc, schema, line, 1, indentLength);
            line = nestedListInfo.line;
            nodes = nodes.concat(nestedListInfo.nodes);
        }
        if (indentLength < prevIndentLength || line > doc.childCount) {
            break;
        }
        lineText = getTextByMdLine(doc, line);
        searchResult = reOrderedListGroup.exec(lineText);
    }
    return { nodes: nodes, line: line };
}

var reStartSpace = /(^\s{1,4})(.*)/;
function isBlockUnit(from, to, text) {
    return from < to || reList.test(text) || reBlockQuote.test(text);
}
function isInTableCellNode(doc, schema, selection) {
    var $pos = selection.$from;
    if ($pos.depth === 0) {
        $pos = doc.resolve($pos.pos - 1);
    }
    var node = $pos.node(1);
    var startOffset = $pos.start(1);
    var contentSize = node.content.size;
    return (node.rangeHasMark(0, contentSize, schema.marks.table) &&
        $pos.pos - startOffset !== contentSize &&
        $pos.pos !== startOffset);
}
function createSelection(tr, posInfo) {
    var from = posInfo.from, to = posInfo.to;
    if (posInfo.type === 'indent') {
        var softTabLen = 4;
        from += softTabLen;
        to += (posInfo.lineLen + 1) * softTabLen;
    }
    else {
        var spaceLenList = posInfo.spaceLenList;
        from -= spaceLenList[0];
        for (var i = 0; i < spaceLenList.length; i += 1) {
            to -= spaceLenList[i];
        }
    }
    return createTextSelection(tr, from, to);
}
var Paragraph$1 = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Paragraph.prototype, "name", {
        get: function () {
            return 'paragraph';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph.prototype, "schema", {
        get: function () {
            return {
                content: 'inline*',
                attrs: {
                    className: { default: null },
                    codeStart: { default: null },
                    codeEnd: { default: null },
                },
                selectable: false,
                group: 'block',
                parseDOM: [{ tag: 'div' }],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return attrs.className
                        ? ['div', { class: clsWithMdPrefix(attrs.className) }, 0]
                        : ['div', 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Paragraph.prototype.reorderList = function (startLine, endLine) {
        var _a = this.context, view = _a.view, toastMark = _a.toastMark, schema = _a.schema;
        var _b = view.state, tr = _b.tr, selection = _b.selection, doc = _b.doc;
        var mdNode = toastMark.findFirstNodeAtLine(startLine);
        var topListNode = mdNode;
        while (mdNode && !isBulletListNode(mdNode) && mdNode.parent.type !== 'document') {
            mdNode = mdNode.parent;
            if (isOrderedListNode(mdNode)) {
                topListNode = mdNode;
                break;
            }
        }
        if (topListNode) {
            startLine = topListNode.sourcepos[0][0];
        }
        var _c = reOrderedListGroup.exec(getTextByMdLine(doc, startLine)), indent = _c[1], start = _c[3];
        var indentLen = indent.length;
        var _d = getReorderedListInfo(doc, schema, startLine, Number(start), indentLen), line = _d.line, nodes = _d.nodes;
        endLine = Math.max(endLine, line - 1);
        var startOffset = getNodeContentOffsetRange(doc, startLine - 1).startOffset;
        for (var i = startLine - 1; i <= endLine - 1; i += 1) {
            var _e = doc.child(i), nodeSize = _e.nodeSize, content = _e.content;
            var mappedFrom = tr.mapping.map(startOffset);
            var mappedTo = mappedFrom + content.size;
            tr.replaceWith(mappedFrom, mappedTo, nodes[i - startLine + 1]);
            startOffset += nodeSize;
        }
        var newSelection = createTextSelection(tr, selection.from, selection.to);
        view.dispatch(tr.setSelection(newSelection));
    };
    Paragraph.prototype.indent = function (tabKey) {
        var _this = this;
        if (tabKey === void 0) { tabKey = false; }
        return function () { return function (state, dispatch) {
            var schema = state.schema, selection = state.selection, doc = state.doc;
            var _a = getRangeInfo(selection), from = _a.from, to = _a.to, startFromOffset = _a.startFromOffset, startIndex = _a.startIndex, endIndex = _a.endIndex;
            if (tabKey && isInTableCellNode(doc, schema, selection)) {
                return false;
            }
            var startLineText = getTextContent(doc, startIndex);
            if ((tabKey && isBlockUnit(from, to, startLineText)) ||
                (!tabKey && reList.test(startLineText))) {
                var tr = replaceTextNode({
                    state: state,
                    from: startFromOffset,
                    startIndex: startIndex,
                    endIndex: endIndex,
                    createText: function (textContent) { return "    " + textContent; },
                });
                var posInfo = {
                    type: 'indent',
                    from: from,
                    to: to,
                    lineLen: endIndex - startIndex,
                };
                dispatch(tr.setSelection(createSelection(tr, posInfo)));
                if (reOrderedListGroup.test(startLineText)) {
                    _this.reorderList(startIndex + 1, endIndex + 1);
                }
            }
            else if (tabKey) {
                dispatch(state.tr.insert(to, createTextNode$1(schema, '    ')));
            }
            return true;
        }; };
    };
    Paragraph.prototype.outdent = function (tabKey) {
        var _this = this;
        if (tabKey === void 0) { tabKey = false; }
        return function () { return function (state, dispatch) {
            var selection = state.selection, doc = state.doc, schema = state.schema;
            var _a = getRangeInfo(selection), from = _a.from, to = _a.to, startFromOffset = _a.startFromOffset, startIndex = _a.startIndex, endIndex = _a.endIndex;
            if (tabKey && isInTableCellNode(doc, schema, selection)) {
                return false;
            }
            var startLineText = getTextContent(doc, startIndex);
            if ((tabKey && isBlockUnit(from, to, startLineText)) ||
                (!tabKey && reList.test(startLineText))) {
                var spaceLenList_1 = [];
                var tr = replaceTextNode({
                    state: state,
                    from: startFromOffset,
                    startIndex: startIndex,
                    endIndex: endIndex,
                    createText: function (textContent) {
                        var searchResult = reStartSpace.exec(textContent);
                        spaceLenList_1.push(searchResult ? searchResult[1].length : 0);
                        return textContent.replace(reStartSpace, '$2');
                    },
                });
                var posInfo = { type: 'outdent', from: from, to: to, spaceLenList: spaceLenList_1 };
                dispatch(tr.setSelection(createSelection(tr, posInfo)));
                if (reOrderedListGroup.test(startLineText)) {
                    _this.reorderList(startIndex + 1, endIndex + 1);
                }
            }
            else if (tabKey) {
                var startText = startLineText.slice(0, to - startFromOffset);
                var startTextWithoutSpace = startText.replace(/\s{1,4}$/, '');
                var deletStart = to - (startText.length - startTextWithoutSpace.length);
                dispatch(state.tr.delete(deletStart, to));
            }
            return true;
        }; };
    };
    Paragraph.prototype.deleteLines = function () {
        var _this = this;
        return function (state, dispatch) {
            var view = _this.context.view;
            var _a = getRangeInfo(state.selection), startFromOffset = _a.startFromOffset, endToOffset = _a.endToOffset;
            var deleteRange = function () {
                dispatch(state.tr.deleteRange(startFromOffset, endToOffset));
                return true;
            };
            return chainCommands(deleteRange, joinForward)(state, dispatch, view);
        };
    };
    Paragraph.prototype.moveDown = function () {
        return function (state, dispatch) {
            var doc = state.doc, tr = state.tr, selection = state.selection, schema = state.schema;
            var _a = getRangeInfo(selection), startFromOffset = _a.startFromOffset, endToOffset = _a.endToOffset, endIndex = _a.endIndex;
            if (endIndex < doc.content.childCount - 1) {
                var _b = doc.child(endIndex + 1), nodeSize = _b.nodeSize, textContent = _b.textContent;
                tr.delete(endToOffset, endToOffset + nodeSize)
                    .split(startFromOffset)
                    // subtract 2(start, end tag length) to insert prev line
                    .insert(tr.mapping.map(startFromOffset) - 2, createTextNode$1(schema, textContent));
                dispatch(tr);
                return true;
            }
            return false;
        };
    };
    Paragraph.prototype.moveUp = function () {
        return function (state, dispatch) {
            var tr = state.tr, doc = state.doc, selection = state.selection, schema = state.schema;
            var _a = getRangeInfo(selection), startFromOffset = _a.startFromOffset, endToOffset = _a.endToOffset, startIndex = _a.startIndex;
            if (startIndex > 0) {
                var _b = doc.child(startIndex - 1), nodeSize = _b.nodeSize, textContent = _b.textContent;
                tr.delete(startFromOffset - nodeSize, startFromOffset)
                    .split(tr.mapping.map(endToOffset))
                    .insert(tr.mapping.map(endToOffset), createTextNode$1(schema, textContent));
                dispatch(tr);
                return true;
            }
            return false;
        };
    };
    Paragraph.prototype.commands = function () {
        return {
            indent: this.indent(),
            outdent: this.outdent(),
        };
    };
    Paragraph.prototype.keymaps = function () {
        return {
            Tab: this.indent(true)(),
            'Shift-Tab': this.outdent(true)(),
            'Mod-d': this.deleteLines(),
            'Mod-D': this.deleteLines(),
            'Alt-ArrowUp': this.moveUp(),
            'Alt-ArrowDown': this.moveDown(),
        };
    };
    return Paragraph;
}(Node$1));

var Text$1 = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Text.prototype, "name", {
        get: function () {
            return 'text';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "schema", {
        get: function () {
            return {
                group: 'inline',
            };
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(Node$1));

var reHeading = /^#{1,6}\s/;
var Heading$1 = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Heading.prototype, "name", {
        get: function () {
            return 'heading';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heading.prototype, "schema", {
        get: function () {
            return {
                attrs: {
                    level: { default: 1 },
                    seText: { default: false },
                },
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    var level = attrs.level, seText = attrs.seText;
                    var classNames = "heading|heading" + level;
                    if (seText) {
                        classNames += '|delimiter|setext';
                    }
                    return ['span', { class: clsWithMdPrefix.apply(void 0, classNames.split('|')) }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Heading.prototype.createHeadingText = function (level, text, curHeadingSyntax) {
        var textContent = text.replace(curHeadingSyntax, '').trim();
        var headingText = '';
        while (level > 0) {
            headingText += '#';
            level -= 1;
        }
        return headingText + " " + textContent;
    };
    Heading.prototype.commands = function () {
        var _this = this;
        return function (payload) { return function (state, dispatch) {
            var level = payload.level;
            var _a = getRangeInfo(state.selection), startFromOffset = _a.startFromOffset, endToOffset = _a.endToOffset, startIndex = _a.startIndex, endIndex = _a.endIndex;
            var tr = replaceTextNode({
                state: state,
                from: startFromOffset,
                startIndex: startIndex,
                endIndex: endIndex,
                createText: function (textContent) {
                    var matchedHeading = textContent.match(reHeading);
                    var curHeadingSyntax = matchedHeading ? matchedHeading[0] : '';
                    return _this.createHeadingText(level, textContent, curHeadingSyntax);
                },
            });
            dispatch(tr.setSelection(createTextSelection(tr, tr.mapping.map(endToOffset))));
            return true;
        }; };
    };
    return Heading;
}(Mark));

var fencedCodeBlockSyntax = '```';
var CodeBlock$1 = /** @class */ (function (_super) {
    __extends(CodeBlock, _super);
    function CodeBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CodeBlock.prototype, "name", {
        get: function () {
            return 'codeBlock';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeBlock.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('code-block') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    CodeBlock.prototype.commands = function () {
        return function () { return function (state, dispatch) {
            var selection = state.selection, schema = state.schema, tr = state.tr;
            var _a = getRangeInfo(selection), startFromOffset = _a.startFromOffset, endToOffset = _a.endToOffset;
            var fencedNode = createTextNode$1(schema, fencedCodeBlockSyntax);
            // add fenced start block
            tr.insert(startFromOffset, fencedNode).split(startFromOffset + fencedCodeBlockSyntax.length);
            // add fenced end block
            tr.split(tr.mapping.map(endToOffset)).insert(tr.mapping.map(endToOffset), fencedNode);
            dispatch(tr.setSelection(
            // subtract fenced syntax length and open, close tag(2)
            createTextSelection(tr, tr.mapping.map(endToOffset) - (fencedCodeBlockSyntax.length + 2))));
            return true;
        }; };
    };
    CodeBlock.prototype.keepIndentation = function () {
        var _this = this;
        return function (_a, dispatch) {
            var selection = _a.selection, tr = _a.tr, doc = _a.doc, schema = _a.schema;
            var toastMark = _this.context.toastMark;
            var _b = getRangeInfo(selection), startFromOffset = _b.startFromOffset, endToOffset = _b.endToOffset, endIndex = _b.endIndex, from = _b.from, to = _b.to;
            var textContent = getTextContent(doc, endIndex);
            if (from === to && textContent.trim()) {
                var matched = textContent.match(/^\s+/);
                var mdNode = toastMark.findFirstNodeAtLine(endIndex + 1);
                if (isCodeBlockNode(mdNode) && matched) {
                    var spaces = matched[0];
                    var slicedText = textContent.slice(to - startFromOffset);
                    var node = createTextNode$1(schema, spaces + slicedText);
                    splitAndExtendBlock(tr, endToOffset, slicedText, node);
                    dispatch(tr);
                    return true;
                }
            }
            return false;
        };
    };
    CodeBlock.prototype.keymaps = function () {
        var codeBlockCommand = this.commands()();
        return {
            'Shift-Mod-p': codeBlockCommand,
            'Shift-Mod-P': codeBlockCommand,
            Enter: this.keepIndentation(),
        };
    };
    return CodeBlock;
}(Mark));

var reEmptyTable = /\||\s/g;
function createTableHeader(columnCount) {
    return [createTableRow(columnCount), createTableRow(columnCount, true)];
}
function createTableBody$1(columnCount, rowCount) {
    var bodyRows = [];
    for (var i = 0; i < rowCount; i += 1) {
        bodyRows.push(createTableRow(columnCount));
    }
    return bodyRows;
}
function createTableRow(columnCount, delim) {
    var row = '|';
    for (var i = 0; i < columnCount; i += 1) {
        row += delim ? ' --- |' : '  |';
    }
    return row;
}
function createTargetTypes(moveNext) {
    return moveNext
        ? { type: 'next', parentType: 'tableHead', childType: 'firstChild' }
        : { type: 'prev', parentType: 'tableBody', childType: 'lastChild' };
}
var Table$1 = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Table.prototype, "name", {
        get: function () {
            return 'table';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('table') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.extendTable = function () {
        var _this = this;
        return function (_a, dispatch) {
            var selection = _a.selection, doc = _a.doc, tr = _a.tr, schema = _a.schema;
            if (!selection.empty) {
                return false;
            }
            var _b = getRangeInfo(selection), endFromOffset = _b.endFromOffset, endToOffset = _b.endToOffset, endIndex = _b.endIndex, to = _b.to;
            var textContent = getTextContent(doc, endIndex);
            // should add `1` to line for the markdown parser
            // because markdown parser has `1`(not zero) as the start number
            var mdPos = [endIndex + 1, to - endFromOffset + 1];
            var mdNode = _this.context.toastMark.findNodeAtPosition(mdPos);
            var cellNode = findClosestNode(mdNode, function (node) {
                return isTableCellNode(node) &&
                    (node.parent.type === 'tableDelimRow' || node.parent.parent.type === 'tableBody');
            });
            if (cellNode) {
                var isEmpty = !textContent.replace(reEmptyTable, '').trim();
                var parent_1 = cellNode.parent;
                var columnCount = parent_1.parent.parent.columns.length;
                var row = createTableRow(columnCount);
                if (isEmpty) {
                    tr.deleteRange(endFromOffset, endToOffset).split(tr.mapping.map(endToOffset));
                }
                else {
                    tr
                        .split(endToOffset)
                        .insert(tr.mapping.map(endToOffset), createTextNode$1(schema, row))
                        // should subtract `2` to selection end position considering ` |` text
                        .setSelection(createTextSelection(tr, tr.mapping.map(endToOffset) - 2));
                }
                dispatch(tr);
                return true;
            }
            return false;
        };
    };
    Table.prototype.moveTableCell = function (moveNext) {
        var _this = this;
        return function (_a, dispatch) {
            var selection = _a.selection, tr = _a.tr;
            var _b = getRangeInfo(selection), endFromOffset = _b.endFromOffset, endIndex = _b.endIndex, to = _b.to;
            var mdPos = [endIndex + 1, to - endFromOffset];
            var mdNode = _this.context.toastMark.findNodeAtPosition(mdPos);
            var cellNode = findClosestNode(mdNode, function (node) { return isTableCellNode(node); });
            if (cellNode) {
                var parent_2 = cellNode.parent;
                var _c = createTargetTypes(moveNext), type = _c.type, parentType = _c.parentType, childType = _c.childType;
                var chOffset = getMdEndCh(cellNode);
                if (cellNode[type]) {
                    chOffset = getMdEndCh(cellNode[type]) - 1;
                }
                else {
                    var row = !parent_2[type] && parent_2.parent.type === parentType
                        ? parent_2.parent[type][childType]
                        : parent_2[type];
                    if (type === 'next') {
                        // if there is next row, the base offset would be end position of the next row's first child.
                        // Otherwise, the base offset is zero.
                        var baseOffset = row ? getMdEndCh(row[childType]) : 0;
                        // calculate tag(open, close) position('2') for selection
                        chOffset += baseOffset + 2;
                    }
                    else if (type === 'prev') {
                        // if there is prev row, the target position would be '-4' for calculating ' |' characters and tag(open, close)
                        // Otherwise, the target position is zero.
                        chOffset = row ? -4 : 0;
                    }
                }
                dispatch(tr.setSelection(createTextSelection(tr, endFromOffset + chOffset)));
                return true;
            }
            return false;
        };
    };
    Table.prototype.addTable = function () {
        return function (payload) { return function (_a, dispatch) {
            var selection = _a.selection, tr = _a.tr, schema = _a.schema;
            var _b = payload, columnCount = _b.columnCount, rowCount = _b.rowCount;
            var endToOffset = getRangeInfo(selection).endToOffset;
            var headerRows = createTableHeader(columnCount);
            var bodyRows = createTableBody$1(columnCount, rowCount - 1);
            var rows = __spreadArray(__spreadArray([], headerRows), bodyRows);
            rows.forEach(function (row) {
                tr.split(tr.mapping.map(endToOffset)).insert(tr.mapping.map(endToOffset), createTextNode$1(schema, row));
            });
            // should add `4` to selection position considering `| ` text and start block tag length
            dispatch(tr.setSelection(createTextSelection(tr, endToOffset + 4)));
            return true;
        }; };
    };
    Table.prototype.commands = function () {
        return { addTable: this.addTable() };
    };
    Table.prototype.keymaps = function () {
        return {
            Enter: this.extendTable(),
            Tab: this.moveTableCell(true),
            'Shift-Tab': this.moveTableCell(false),
        };
    };
    return Table;
}(Mark));

var thematicBreakSyntax = '***';
var ThematicBreak$1 = /** @class */ (function (_super) {
    __extends(ThematicBreak, _super);
    function ThematicBreak() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ThematicBreak.prototype, "name", {
        get: function () {
            return 'thematicBreak';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ThematicBreak.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('thematic-break') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    ThematicBreak.prototype.hr = function () {
        return function () { return function (state, dispatch) {
            var selection = state.selection, schema = state.schema, tr = state.tr;
            var _a = getRangeInfo(selection), from = _a.from, to = _a.to, endToOffset = _a.endToOffset;
            var node = createTextNode$1(schema, thematicBreakSyntax);
            tr
                .split(from)
                .replaceWith(tr.mapping.map(from), tr.mapping.map(to), node)
                .split(tr.mapping.map(to)).setSelection(createTextSelection(tr, tr.mapping.map(endToOffset)));
            dispatch(tr);
            return true;
        }; };
    };
    ThematicBreak.prototype.commands = function () {
        return { hr: this.hr() };
    };
    ThematicBreak.prototype.keymaps = function () {
        var lineCommand = this.hr()();
        return { 'Mod-l': lineCommand, 'Mod-L': lineCommand };
    };
    return ThematicBreak;
}(Mark));

function cannotBeListNode(_a, line) {
    var type = _a.type, sourcepos = _a.sourcepos;
    // eslint-disable-next-line prefer-destructuring
    var startLine = sourcepos[0][0];
    return line <= startLine && (type === 'codeBlock' || type === 'heading' || type.match('table'));
}
var ListItem$1 = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListItem.prototype, "name", {
        get: function () {
            return 'listItem';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "schema", {
        get: function () {
            return {
                attrs: {
                    odd: { default: false },
                    even: { default: false },
                    listStyle: { default: false },
                },
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    var odd = attrs.odd, even = attrs.even, listStyle = attrs.listStyle;
                    var classNames = 'list-item';
                    if (listStyle) {
                        classNames += '|list-item-style';
                    }
                    if (odd) {
                        classNames += '|list-item-odd';
                    }
                    if (even) {
                        classNames += '|list-item-even';
                    }
                    return ['span', { class: clsWithMdPrefix.apply(void 0, classNames.split('|')) }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.extendList = function () {
        var _this = this;
        return function (_a, dispatch) {
            var selection = _a.selection, doc = _a.doc, schema = _a.schema, tr = _a.tr;
            var toastMark = _this.context.toastMark;
            var _b = getRangeInfo(selection), to = _b.to, startFromOffset = _b.startFromOffset, endFromOffset = _b.endFromOffset, endIndex = _b.endIndex, endToOffset = _b.endToOffset;
            var textContent = getTextContent(doc, endIndex);
            var isList = reList.test(textContent);
            if (!isList || selection.from === startFromOffset || !selection.empty) {
                return false;
            }
            var isEmpty = !textContent.replace(reCanBeTaskList, '').trim();
            if (isEmpty) {
                tr.deleteRange(endFromOffset, endToOffset).split(tr.mapping.map(endToOffset));
            }
            else {
                var commandType = getListType(textContent);
                // should add `1` to line for the markdown parser
                // because markdown parser has `1`(not zero) as the start number
                var mdNode = toastMark.findFirstNodeAtLine(endIndex + 1);
                var slicedText = textContent.slice(to - endFromOffset);
                var context = { toastMark: toastMark, mdNode: mdNode, doc: doc, line: endIndex + 1 };
                var _c = extendList[commandType](context), listSyntax = _c.listSyntax, changedResults = _c.changedResults;
                // change ordinal number of backward ordered list
                if (changedResults === null || changedResults === void 0 ? void 0 : changedResults.length) {
                    // split the block
                    tr.split(to);
                    // set first ordered list info
                    changedResults.unshift({ text: listSyntax + slicedText, line: endIndex + 1 });
                    _this.changeToListPerLine(tr, changedResults, {
                        from: to,
                        // don't subtract 1 because the line has increased through 'split' command.
                        startLine: changedResults[0].line,
                        endLine: last(changedResults).line,
                    });
                    var pos = tr.mapping.map(endToOffset) - slicedText.length;
                    tr.setSelection(createTextSelection(tr, pos));
                }
                else {
                    var node = createTextNode$1(schema, listSyntax + slicedText);
                    splitAndExtendBlock(tr, endToOffset, slicedText, node);
                }
            }
            dispatch(tr);
            return true;
        };
    };
    ListItem.prototype.toList = function (commandType) {
        var _this = this;
        return function () { return function (_a, dispatch) {
            var doc = _a.doc, tr = _a.tr, selection = _a.selection;
            var toastMark = _this.context.toastMark;
            var rangeInfo = getRangeInfo(selection);
            // should add `1` to line for the markdown parser
            // because markdown parser has `1`(not zero) as the start number
            var startLine = rangeInfo.startIndex + 1;
            var endLine = rangeInfo.endIndex + 1;
            var endToOffset = rangeInfo.endToOffset;
            var skipLines = [];
            for (var line = startLine; line <= endLine; line += 1) {
                var mdNode = toastMark.findFirstNodeAtLine(line);
                if (mdNode && cannotBeListNode(mdNode, line)) {
                    break;
                }
                // to skip unnecessary processing
                if (skipLines.indexOf(line) !== -1) {
                    continue;
                }
                var context = { toastMark: toastMark, mdNode: mdNode, doc: doc, line: line, startLine: startLine };
                var changedResults = (isListNode$1(mdNode)
                    ? otherListToList[commandType](context)
                    : otherNodeToList[commandType](context)).changedResults;
                var endOffset = _this.changeToListPerLine(tr, changedResults, {
                    from: getNodeContentOffsetRange(doc, changedResults[0].line - 1).startOffset,
                    startLine: changedResults[0].line,
                    endLine: last(changedResults).line,
                    indexDiff: 1,
                });
                endToOffset = Math.max(endOffset, endToOffset);
                if (changedResults) {
                    skipLines = skipLines.concat(changedResults.map(function (info) { return info.line; }));
                }
            }
            dispatch(tr.setSelection(createTextSelection(tr, tr.mapping.map(endToOffset))));
            return true;
        }; };
    };
    ListItem.prototype.changeToListPerLine = function (tr, changedResults, _a) {
        var from = _a.from, startLine = _a.startLine, endLine = _a.endLine, _b = _a.indexDiff, indexDiff = _b === void 0 ? 0 : _b;
        var maxEndOffset = 0;
        var _loop_1 = function (i) {
            var _c = tr.doc.child(i), nodeSize = _c.nodeSize, content = _c.content;
            var mappedFrom = tr.mapping.map(from);
            var mappedTo = mappedFrom + content.size;
            var changedResult = changedResults.filter(function (result) { return result.line - indexDiff === i; })[0];
            if (changedResult) {
                tr.replaceWith(mappedFrom, mappedTo, createTextNode$1(this_1.context.schema, changedResult.text));
                maxEndOffset = Math.max(maxEndOffset, from + content.size);
            }
            from += nodeSize;
        };
        var this_1 = this;
        for (var i = startLine - indexDiff; i <= endLine - indexDiff; i += 1) {
            _loop_1(i);
        }
        return maxEndOffset;
    };
    ListItem.prototype.toggleTask = function () {
        var _this = this;
        return function (_a, dispatch) {
            var selection = _a.selection, tr = _a.tr, doc = _a.doc, schema = _a.schema;
            var toastMark = _this.context.toastMark;
            var _b = getRangeInfo(selection), startIndex = _b.startIndex, endIndex = _b.endIndex;
            var newTr = null;
            for (var i = startIndex; i <= endIndex; i += 1) {
                var mdNode = toastMark.findFirstNodeAtLine(i + 1);
                if (isListNode$1(mdNode) && mdNode.listData.task) {
                    var _c = mdNode.listData, checked = _c.checked, padding = _c.padding;
                    var stateChar = checked ? ' ' : 'x';
                    var mdPos = mdNode.sourcepos[0];
                    var startOffset = getNodeContentOffsetRange(doc, mdPos[0] - 1).startOffset;
                    startOffset += mdPos[1] + padding;
                    newTr = tr.replaceWith(startOffset, startOffset + 1, schema.text(stateChar));
                }
            }
            if (newTr) {
                dispatch(newTr);
                return true;
            }
            return false;
        };
    };
    ListItem.prototype.commands = function () {
        return {
            bulletList: this.toList('bullet'),
            orderedList: this.toList('ordered'),
            taskList: this.toList('task'),
        };
    };
    ListItem.prototype.keymaps = function () {
        var bulletCommand = this.toList('bullet')();
        var orderedCommand = this.toList('ordered')();
        var taskCommand = this.toList('task')();
        var togleTaskCommand = this.toggleTask();
        return {
            'Mod-u': bulletCommand,
            'Mod-U': bulletCommand,
            'Mod-o': orderedCommand,
            'Mod-O': orderedCommand,
            'alt-t': taskCommand,
            'alt-T': taskCommand,
            'Shift-Ctrl-x': togleTaskCommand,
            'Shift-Ctrl-X': togleTaskCommand,
            Enter: this.extendList(),
        };
    };
    return ListItem;
}(Mark));

function toggleMark(condition, syntax) {
    return function () { return function (_a, dispatch) {
        var tr = _a.tr, selection = _a.selection;
        var conditionFn = !isFunction_1(condition)
            ? function (text) { return condition.test(text); }
            : condition;
        var syntaxLen = syntax.length;
        var doc = tr.doc;
        var _b = resolveSelectionPos(selection), from = _b[0], to = _b[1];
        var prevPos = Math.max(from - syntaxLen, 1);
        var nextPos = Math.min(to + syntaxLen, doc.content.size - 1);
        var slice = selection.content();
        var textContent = slice.content.textBetween(0, slice.content.size, '\n');
        var prevText = doc.textBetween(prevPos, from, '\n');
        var nextText = doc.textBetween(to, nextPos, '\n');
        textContent = "" + prevText + textContent + nextText;
        if (prevText && nextText && conditionFn(textContent)) {
            tr.delete(nextPos - syntaxLen, nextPos).delete(prevPos, prevPos + syntaxLen);
        }
        else {
            tr.insertText(syntax, to).insertText(syntax, from);
            var newSelection = selection.empty
                ? createTextSelection(tr, from + syntaxLen)
                : createTextSelection(tr, from + syntaxLen, to + syntaxLen);
            tr.setSelection(newSelection);
        }
        dispatch(tr);
        return true;
    }; };
}

var reStrong = /^(\*{2}|_{2}).*([\s\S]*)\1$/m;
var strongSyntax = '**';
var Strong$1 = /** @class */ (function (_super) {
    __extends(Strong, _super);
    function Strong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Strong.prototype, "name", {
        get: function () {
            return 'strong';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Strong.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('strong') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Strong.prototype.bold = function () {
        return toggleMark(reStrong, strongSyntax);
    };
    Strong.prototype.commands = function () {
        return { bold: this.bold() };
    };
    Strong.prototype.keymaps = function () {
        var boldCommand = this.bold()();
        return { 'Mod-b': boldCommand, 'Mod-B': boldCommand };
    };
    return Strong;
}(Mark));

var reStrike = /^(~{2}).*([\s\S]*)\1$/m;
var strikeSyntax = '~~';
var Strike$1 = /** @class */ (function (_super) {
    __extends(Strike, _super);
    function Strike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Strike.prototype, "name", {
        get: function () {
            return 'strike';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Strike.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('strike') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Strike.prototype.commands = function () {
        return toggleMark(reStrike, strikeSyntax);
    };
    Strike.prototype.keymaps = function () {
        var strikeCommand = this.commands()();
        return { 'Mod-s': strikeCommand, 'Mod-S': strikeCommand };
    };
    return Strike;
}(Mark));

var reEmph = /^(\*|_).*([\s\S]*)\1$/m;
var emphSyntax = '*';
var Emph$1 = /** @class */ (function (_super) {
    __extends(Emph, _super);
    function Emph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Emph.prototype, "name", {
        get: function () {
            return 'emph';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emph.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('emph') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Emph.prototype.italic = function () {
        return toggleMark(reEmph, emphSyntax);
    };
    Emph.prototype.commands = function () {
        return { italic: this.italic() };
    };
    Emph.prototype.keymaps = function () {
        var italicCommand = this.italic()();
        return { 'Mod-i': italicCommand, 'Mod-I': italicCommand };
    };
    return Emph;
}(Mark));

var reCode = /^(`).*([\s\S]*)\1$/m;
var codeSyntax = '`';
var Code$1 = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Code.prototype, "name", {
        get: function () {
            return 'code';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "schema", {
        get: function () {
            return {
                attrs: {
                    start: { default: false },
                    end: { default: false },
                    marked: { default: false },
                },
                toDOM: function (mark) {
                    var _a = mark.attrs, start = _a.start, end = _a.end, marked = _a.marked;
                    var classNames = 'code';
                    if (start) {
                        classNames += '|delimiter|start';
                    }
                    if (end) {
                        classNames += '|delimiter|end';
                    }
                    if (marked) {
                        classNames += '|marked-text';
                    }
                    return ['span', { class: clsWithMdPrefix.apply(void 0, classNames.split('|')) }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Code.prototype.commands = function () {
        return toggleMark(reCode, codeSyntax);
    };
    Code.prototype.keymaps = function () {
        var codeCommand = this.commands()();
        return { 'Shift-Mod-c': codeCommand, 'Shift-Mod-C': codeCommand };
    };
    return Code;
}(Mark));

var Link$1 = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Link.prototype, "name", {
        get: function () {
            return 'link';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "schema", {
        get: function () {
            return {
                attrs: {
                    url: { default: false },
                    desc: { default: false },
                },
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    var url = attrs.url, desc = attrs.desc;
                    var classNames = 'link';
                    if (url) {
                        classNames += '|link-url|marked-text';
                    }
                    if (desc) {
                        classNames += '|link-desc|marked-text';
                    }
                    return ['span', { class: clsWithMdPrefix.apply(void 0, classNames.split('|')) }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Link.prototype.addLinkOrImage = function (commandType) {
        return function (payload) { return function (_a, dispatch) {
            var selection = _a.selection, tr = _a.tr, schema = _a.schema;
            var _b = resolveSelectionPos(selection), from = _b[0], to = _b[1];
            var _c = payload, linkText = _c.linkText, altText = _c.altText, linkUrl = _c.linkUrl, imageUrl = _c.imageUrl;
            var text = linkText;
            var url = linkUrl;
            var syntax = '';
            if (commandType === 'image') {
                text = altText;
                url = imageUrl;
                syntax = '!';
            }
            text = escapeTextForLink(text);
            syntax += "[" + text + "](" + url + ")";
            dispatch(tr.replaceWith(from, to, createTextNode$1(schema, syntax)));
            return true;
        }; };
    };
    Link.prototype.commands = function () {
        return {
            addImage: this.addLinkOrImage('image'),
            addLink: this.addLinkOrImage('link'),
        };
    };
    return Link;
}(Mark));

var TaskDelimiter = /** @class */ (function (_super) {
    __extends(TaskDelimiter, _super);
    function TaskDelimiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TaskDelimiter.prototype, "name", {
        get: function () {
            return 'taskDelimiter';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskDelimiter.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('delimiter', 'list-item') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return TaskDelimiter;
}(Mark));
var Delimiter = /** @class */ (function (_super) {
    __extends(Delimiter, _super);
    function Delimiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Delimiter.prototype, "name", {
        get: function () {
            return 'delimiter';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Delimiter.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('delimiter') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return Delimiter;
}(Mark));
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Meta.prototype, "name", {
        get: function () {
            return 'meta';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Meta.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('meta') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return Meta;
}(Mark));
var MarkedText = /** @class */ (function (_super) {
    __extends(MarkedText, _super);
    function MarkedText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MarkedText.prototype, "name", {
        get: function () {
            return 'markedText';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarkedText.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('marked-text') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return MarkedText;
}(Mark));
var TableCell = /** @class */ (function (_super) {
    __extends(TableCell, _super);
    function TableCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableCell.prototype, "name", {
        get: function () {
            return 'tableCell';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableCell.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('table-cell') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return TableCell;
}(Mark));

var Html = /** @class */ (function (_super) {
    __extends(Html, _super);
    function Html() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Html.prototype, "name", {
        get: function () {
            return 'html';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Html.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('html') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return Html;
}(Mark));

var customBlockSyntax = '$$';
var CustomBlock$1 = /** @class */ (function (_super) {
    __extends(CustomBlock, _super);
    function CustomBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CustomBlock.prototype, "name", {
        get: function () {
            return 'customBlock';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomBlock.prototype, "schema", {
        get: function () {
            return {
                toDOM: function () {
                    return ['span', { class: clsWithMdPrefix('custom-block') }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    CustomBlock.prototype.commands = function () {
        return function (payload) { return function (state, dispatch) {
            var selection = state.selection, schema = state.schema, tr = state.tr;
            var _a = getRangeInfo(selection), startFromOffset = _a.startFromOffset, endToOffset = _a.endToOffset;
            if (!(payload === null || payload === void 0 ? void 0 : payload.info)) {
                return false;
            }
            var customBlock = "" + customBlockSyntax + payload.info;
            var startNode = createTextNode$1(schema, customBlock);
            var endNode = createTextNode$1(schema, customBlockSyntax);
            tr.insert(startFromOffset, startNode).split(startFromOffset + customBlock.length);
            tr.split(tr.mapping.map(endToOffset)).insert(tr.mapping.map(endToOffset), endNode);
            dispatch(tr.setSelection(createTextSelection(tr, tr.mapping.map(endToOffset) - (customBlockSyntax.length + 2))));
            return true;
        }; };
    };
    return CustomBlock;
}(Mark));

var reTaskMarkerKey = /x|backspace/i;
var reTaskMarker = /^\[(\s*)(x?)(\s*)\](?:\s+)/i;
function smartTask(_a) {
    var schema = _a.schema, toastMark = _a.toastMark;
    return new Plugin({
        props: {
            handleDOMEvents: {
                keyup: function (view, ev) {
                    var _a;
                    var _b = view.state, doc = _b.doc, tr = _b.tr, selection = _b.selection;
                    if (selection.empty && reTaskMarkerKey.test(ev.key)) {
                        var _c = getRangeInfo(selection), startIndex = _c.startIndex, startFromOffset = _c.startFromOffset, from = _c.from;
                        // should add `1` to line for the markdown parser
                        // because markdown parser has `1`(not zero) as the start number
                        var mdPos = [startIndex + 1, from - startFromOffset + 1];
                        var mdNode = toastMark.findNodeAtPosition(mdPos);
                        var paraNode = findClosestNode(mdNode, function (node) { var _a; return node.type === 'paragraph' && ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === 'item'; });
                        if ((_a = paraNode === null || paraNode === void 0 ? void 0 : paraNode.firstChild) === null || _a === void 0 ? void 0 : _a.literal) {
                            var firstChild = paraNode.firstChild;
                            var matched = firstChild.literal.match(reTaskMarker);
                            if (matched) {
                                var startMdPos = firstChild.sourcepos[0];
                                var startSpaces = matched[1], stateChar = matched[2], lastSpaces = matched[3];
                                var spaces = startSpaces.length + lastSpaces.length;
                                var startOffset = getNodeContentOffsetRange(doc, startMdPos[0] - 1).startOffset;
                                var startPos = startMdPos[1] + startOffset;
                                if (stateChar) {
                                    var addedPos = spaces ? spaces + 1 : 0;
                                    tr.replaceWith(startPos, addedPos + startPos, schema.text(stateChar));
                                    view.dispatch(tr);
                                }
                                else if (!spaces) {
                                    tr.insertText(' ', startPos);
                                    view.dispatch(tr);
                                }
                            }
                        }
                    }
                    return false;
                },
            },
        },
    });
}

var EVENT_TYPE = 'cut';
var reLineEnding = /\r\n|\n|\r/;
var MdEditor = /** @class */ (function (_super) {
    __extends(MdEditor, _super);
    function MdEditor(eventEmitter, options) {
        var _this = _super.call(this, eventEmitter) || this;
        var toastMark = options.toastMark, _a = options.useCommandShortcut, useCommandShortcut = _a === void 0 ? true : _a, _b = options.mdPlugins, mdPlugins = _b === void 0 ? [] : _b;
        _this.editorType = 'markdown';
        _this.el.classList.add('md-mode');
        _this.toastMark = toastMark;
        _this.extraPlugins = mdPlugins;
        _this.specs = _this.createSpecs();
        _this.schema = _this.createSchema();
        _this.context = _this.createContext();
        _this.keymaps = _this.createKeymaps(useCommandShortcut);
        _this.view = _this.createView();
        _this.commands = _this.createCommands();
        _this.specs.setContext(__assign(__assign({}, _this.context), { view: _this.view }));
        _this.createClipboard();
        // To prevent unnecessary focus setting during initial rendering
        _this.eventEmitter.listen('changePreviewTabWrite', function (isMarkdownTabMounted) {
            return _this.toggleActive(true, isMarkdownTabMounted);
        });
        _this.eventEmitter.listen('changePreviewTabPreview', function () { return _this.toggleActive(false); });
        _this.initEvent();
        return _this;
    }
    MdEditor.prototype.toggleActive = function (active, isMarkdownTabMounted) {
        toggleClass(this.el, 'active', active);
        if (active) {
            if (!isMarkdownTabMounted) {
                this.focus();
            }
        }
        else {
            this.blur();
        }
    };
    MdEditor.prototype.createClipboard = function () {
        var _this = this;
        this.clipboard = document.createElement('textarea');
        this.clipboard.className = cls('pseudo-clipboard');
        this.clipboard.addEventListener('paste', function (ev) {
            var clipboardData = ev.clipboardData || window.clipboardData;
            var items = clipboardData && clipboardData.items;
            if (items) {
                var containRtfItem = toArray_1(items).some(function (item) { return item.kind === 'string' && item.type === 'text/rtf'; });
                // if it contains rtf, it's most likely copy paste from office -> no image
                if (!containRtfItem) {
                    var imageBlob = pasteImageOnly(items);
                    if (imageBlob) {
                        ev.preventDefault();
                        emitImageBlobHook(_this.eventEmitter, imageBlob, ev.type);
                    }
                }
            }
        });
        // process the pasted data in input event for IE11
        this.clipboard.addEventListener('input', function (ev) {
            var text = ev.target.value;
            _this.replaceSelection(text);
            ev.preventDefault();
            ev.target.value = '';
        });
        this.el.insertBefore(this.clipboard, this.view.dom);
    };
    MdEditor.prototype.createContext = function () {
        return {
            toastMark: this.toastMark,
            schema: this.schema,
            eventEmitter: this.eventEmitter,
        };
    };
    MdEditor.prototype.createSpecs = function () {
        return new SpecManager([
            new Doc$1(),
            new Paragraph$1(),
            new Widget(),
            new Text$1(),
            new Heading$1(),
            new BlockQuote$1(),
            new CodeBlock$1(),
            new CustomBlock$1(),
            new Table$1(),
            new TableCell(),
            new ThematicBreak$1(),
            new ListItem$1(),
            new Strong$1(),
            new Strike$1(),
            new Emph$1(),
            new Code$1(),
            new Link$1(),
            new Delimiter(),
            new TaskDelimiter(),
            new MarkedText(),
            new Meta(),
            new Html(),
        ]);
    };
    MdEditor.prototype.createPlugins = function () {
        return __spreadArray([
            syntaxHighlight(this.context),
            previewHighlight(this.context),
            smartTask(this.context)
        ], this.createPluginProps()).concat(this.defaultPlugins);
    };
    MdEditor.prototype.createView = function () {
        var _this = this;
        return new EditorView(this.el, {
            state: this.createState(),
            dispatchTransaction: function (tr) {
                _this.updateMarkdown(tr);
                var state = _this.view.state.applyTransaction(tr).state;
                _this.view.updateState(state);
                _this.emitChangeEvent(tr);
            },
            handleKeyDown: function (_, ev) {
                if ((ev.metaKey || ev.ctrlKey) && ev.key.toUpperCase() === 'V') {
                    _this.clipboard.focus();
                }
                _this.eventEmitter.emit('keydown', _this.editorType, ev);
                return false;
            },
            handleDOMEvents: {
                copy: function (_, ev) { return _this.captureCopy(ev); },
                cut: function (_, ev) { return _this.captureCopy(ev, EVENT_TYPE); },
                scroll: function () {
                    _this.eventEmitter.emit('scroll', 'editor');
                    return true;
                },
                keyup: function (_, ev) {
                    _this.eventEmitter.emit('keyup', _this.editorType, ev);
                    return false;
                },
            },
            nodeViews: {
                widget: widgetNodeView,
            },
        });
    };
    MdEditor.prototype.createCommands = function () {
        return this.specs.commands(this.view);
    };
    MdEditor.prototype.captureCopy = function (ev, type) {
        ev.preventDefault();
        var _a = this.view.state, selection = _a.selection, tr = _a.tr;
        if (selection.empty) {
            return true;
        }
        var text = this.getChanged(selection.content());
        if (ev.clipboardData) {
            ev.clipboardData.setData('text/plain', text);
        }
        else {
            window.clipboardData.setData('Text', text);
        }
        if (type === EVENT_TYPE) {
            this.view.dispatch(tr.deleteSelection().scrollIntoView().setMeta('uiEvent', EVENT_TYPE));
        }
        return true;
    };
    MdEditor.prototype.updateMarkdown = function (tr) {
        var _this = this;
        if (tr.docChanged) {
            tr.steps.forEach(function (step, index) {
                if (step.slice && !(step instanceof ReplaceAroundStep)) {
                    var doc = tr.docs[index];
                    var _a = [step.from, step.to], from = _a[0], to = _a[1];
                    var _b = getEditorToMdPos(doc, from, to), startPos = _b[0], endPos = _b[1];
                    var changed = _this.getChanged(step.slice);
                    if (startPos[0] === endPos[0] && startPos[1] === endPos[1] && changed === '') {
                        changed = '\n';
                    }
                    var editResult = _this.toastMark.editMarkdown(startPos, endPos, changed);
                    _this.eventEmitter.emit('updatePreview', editResult);
                    tr.setMeta('editResult', editResult).scrollIntoView();
                }
            });
        }
    };
    MdEditor.prototype.getChanged = function (slice) {
        var changed = '';
        var from = 0;
        var to = slice.content.size;
        slice.content.nodesBetween(from, to, function (node, pos) {
            if (node.isText) {
                changed += node.text.slice(Math.max(from, pos) - pos, to - pos);
            }
            else if (node.isBlock && pos > 0) {
                changed += '\n';
            }
        });
        return changed;
    };
    MdEditor.prototype.setSelection = function (start, end) {
        if (end === void 0) { end = start; }
        var tr = this.view.state.tr;
        var _a = getMdToEditorPos(tr.doc, start, end), from = _a[0], to = _a[1];
        this.view.dispatch(tr.setSelection(createTextSelection(tr, from, to)).scrollIntoView());
    };
    MdEditor.prototype.replaceSelection = function (text, start, end) {
        var newTr;
        var _a = this.view.state, tr = _a.tr, schema = _a.schema, doc = _a.doc;
        var lineTexts = text.split(reLineEnding);
        var nodes = lineTexts.map(function (lineText) {
            return createParagraph(schema, createNodesWithWidget(lineText, schema));
        });
        var slice = new Slice(Fragment.from(nodes), 1, 1);
        this.focus();
        if (start && end) {
            var _b = getMdToEditorPos(doc, start, end), from = _b[0], to = _b[1];
            newTr = tr.replaceRange(from, to, slice);
        }
        else {
            newTr = tr.replaceSelection(slice);
        }
        this.view.dispatch(newTr.scrollIntoView());
    };
    MdEditor.prototype.deleteSelection = function (start, end) {
        var newTr;
        var _a = this.view.state, tr = _a.tr, doc = _a.doc;
        if (start && end) {
            var _b = getMdToEditorPos(doc, start, end), from = _b[0], to = _b[1];
            newTr = tr.deleteRange(from, to);
        }
        else {
            newTr = tr.deleteSelection();
        }
        this.view.dispatch(newTr.scrollIntoView());
    };
    MdEditor.prototype.getSelectedText = function (start, end) {
        var _a = this.view.state, doc = _a.doc, selection = _a.selection;
        var from = selection.from, to = selection.to;
        if (start && end) {
            var pos = getMdToEditorPos(doc, start, end);
            from = pos[0];
            to = pos[1];
        }
        return doc.textBetween(from, to, '\n');
    };
    MdEditor.prototype.getSelection = function () {
        var _a = this.view.state.selection, from = _a.from, to = _a.to;
        return getEditorToMdPos(this.view.state.tr.doc, from, to);
    };
    MdEditor.prototype.setMarkdown = function (markdown, cursorToEnd) {
        if (cursorToEnd === void 0) { cursorToEnd = true; }
        var lineTexts = markdown.split(reLineEnding);
        var _a = this.view.state, tr = _a.tr, doc = _a.doc, schema = _a.schema;
        var nodes = lineTexts.map(function (lineText) {
            return createParagraph(schema, createNodesWithWidget(lineText, schema));
        });
        this.view.dispatch(tr.replaceWith(0, doc.content.size, nodes));
        if (cursorToEnd) {
            this.moveCursorToEnd(true);
        }
    };
    MdEditor.prototype.addWidget = function (node, style, mdPos) {
        var _a = this.view.state, tr = _a.tr, doc = _a.doc, selection = _a.selection;
        var pos = mdPos ? getMdToEditorPos(doc, mdPos, mdPos)[0] : selection.to;
        this.view.dispatch(tr.setMeta('widget', { pos: pos, node: node, style: style }));
    };
    MdEditor.prototype.replaceWithWidget = function (start, end, text) {
        var _a = this.view.state, tr = _a.tr, schema = _a.schema, doc = _a.doc;
        var pos = getMdToEditorPos(doc, start, end);
        var nodes = createNodesWithWidget(text, schema);
        this.view.dispatch(tr.replaceWith(pos[0], pos[1], nodes));
    };
    MdEditor.prototype.getRangeInfoOfNode = function (pos) {
        var _a = this.view.state, doc = _a.doc, selection = _a.selection;
        var mdPos = pos || getEditorToMdPos(doc, selection.from)[0];
        var mdNode = this.toastMark.findNodeAtPosition(mdPos);
        if (mdNode.type === 'text' && mdNode.parent.type !== 'paragraph') {
            mdNode = mdNode.parent;
        }
        // add 1 sync for prosemirror position
        mdNode.sourcepos[1][1] += 1;
        return { range: mdNode.sourcepos, type: mdNode.type };
    };
    MdEditor.prototype.getMarkdown = function () {
        return this.toastMark
            .getLineTexts()
            .map(function (lineText) { return unwrapWidgetSyntax(lineText); })
            .join('\n');
    };
    MdEditor.prototype.getToastMark = function () {
        return this.toastMark;
    };
    return MdEditor;
}(EditorBase));

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
 * @fileoverview Unbind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isString$1 = isString_1;
var forEach$1 = forEach_1;

var safeEvent$1 = _safeEvent;

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
    forEach$1(types.split(/\s+/g), function(type) {
      unbindEvent(element, type, handler);
    });

    return;
  }

  forEach$1(types, function(func, type) {
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
  var events = safeEvent$1(element, type);
  var index;

  if (!handler) {
    forEach$1(events, function(item) {
      removeHandler(element, type, item.wrappedHandler);
    });
    events.splice(0, events.length);
  } else {
    forEach$1(events, function(item, idx) {
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

/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

var isString = isString_1;
var forEach = forEach_1;

var safeEvent = _safeEvent;

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
  if (isString(types)) {
    forEach(types.split(/\s+/g), function(type) {
      bindEvent(element, type, handler, context);
    });

    return;
  }

  forEach(types, function(func, type) {
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
  var events = safeEvent(element, type);
  var existInEvents = false;

  forEach(events, function(obj) {
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

var html$2 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

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

var html$1$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);

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
  var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html$2), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

  /* Allowed attribute names */
  var ALLOWED_ATTR = null;
  var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

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
        addToSet(ALLOWED_TAGS, html$2);
        addToSet(ALLOWED_ATTR, html$1$1);
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
function getHTMLAttrs(dom) {
    return toArray_1(dom.attributes).reduce(function (acc, attr) {
        acc[attr.nodeName] = attr.nodeValue;
        return acc;
    }, {});
}
function sanitizeDOM(node, typeName, sanitizer, wwToDOMAdaptor) {
    var dom = wwToDOMAdaptor.getToDOMNode(typeName)(node);
    var html = sanitizer(dom.outerHTML);
    var container = document.createElement('div');
    container.innerHTML = html;
    dom = container.firstChild;
    var htmlAttrs = getHTMLAttrs(dom);
    return { dom: dom, htmlAttrs: htmlAttrs };
}
var schemaFactory = {
    htmlBlock: function (typeName, sanitizeHTML, wwToDOMAdaptor) {
        return {
            atom: true,
            content: 'block+',
            group: 'block',
            attrs: {
                htmlAttrs: { default: {} },
                childrenHTML: { default: '' },
                htmlBlock: { default: true },
            },
            parseDOM: [
                {
                    tag: typeName,
                    getAttrs: function (dom) {
                        return {
                            htmlAttrs: getHTMLAttrs(dom),
                            childrenHTML: dom.innerHTML,
                        };
                    },
                },
            ],
            toDOM: function (node) {
                var _a = sanitizeDOM(node, typeName, sanitizeHTML, wwToDOMAdaptor), dom = _a.dom, htmlAttrs = _a.htmlAttrs;
                htmlAttrs.class = htmlAttrs.class ? htmlAttrs.class + " html-block" : 'html-block';
                return __spreadArray([typeName, htmlAttrs], toArray_1(dom.childNodes));
            },
        };
    },
    htmlInline: function (typeName, sanitizeHTML, wwToDOMAdaptor) {
        return {
            attrs: {
                htmlAttrs: { default: {} },
                htmlInline: { default: true },
            },
            parseDOM: [
                {
                    tag: typeName,
                    getAttrs: function (dom) {
                        return {
                            htmlAttrs: getHTMLAttrs(dom),
                        };
                    },
                },
            ],
            toDOM: function (node) {
                var htmlAttrs = sanitizeDOM(node, typeName, sanitizeHTML, wwToDOMAdaptor).htmlAttrs;
                return [typeName, htmlAttrs, 0];
            },
        };
    },
};
function createHTMLSchemaMap(convertorMap, sanitizeHTML, wwToDOMAdaptor) {
    var htmlSchemaMap = { nodes: {}, marks: {} };
    ['htmlBlock', 'htmlInline'].forEach(function (htmlType) {
        if (convertorMap[htmlType]) {
            Object.keys(convertorMap[htmlType]).forEach(function (type) {
                var targetType = htmlType === 'htmlBlock' ? 'nodes' : 'marks';
                // register tag white list for preventing to remove the html in sanitizer
                registerTagWhitelistIfPossible(type);
                htmlSchemaMap[targetType][type] = schemaFactory[htmlType](type, sanitizeHTML, wwToDOMAdaptor);
            });
        }
    });
    return htmlSchemaMap;
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

var nestableTypes = ['list', 'item', 'blockQuote'];
var nestableTagNames = ['UL', 'OL', 'BLOCKQUOTE'];
function isBlankLine(doc, index) {
    var _a;
    var pmNode = doc.child(index);
    return !pmNode.childCount || (pmNode.childCount === 1 && !((_a = pmNode.firstChild.text) === null || _a === void 0 ? void 0 : _a.trim()));
}
function getEditorRangeHeightInfo(doc, mdNode, children) {
    var start = getMdStartLine(mdNode) - 1;
    var end = getMdEndLine(mdNode) - 1;
    var rect = children[start].getBoundingClientRect();
    var height = children[end].offsetTop -
        children[start].offsetTop +
        children[end].clientHeight;
    return {
        height: height <= 0
            ? children[start].clientHeight
            : height + getBlankLinesHeight(doc, children, Math.min(end + 1, doc.childCount - 1)),
        rect: rect,
    };
}
function getBlankLinesHeight(doc, children, start) {
    var end = doc.childCount - 1;
    var height = 0;
    while (start <= end && isBlankLine(doc, start)) {
        height += children[start].clientHeight;
        start += 1;
    }
    return height;
}
function findAncestorHavingId(el, root) {
    while (!el.getAttribute('data-nodeid') && el.parentElement !== root) {
        el = el.parentElement;
    }
    return el;
}
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
function getAdditionalPos(scrollTop, offsetTop, height, targetNodeHeight) {
    var ratio = Math.min((scrollTop - offsetTop) / height, 1);
    return ratio * targetNodeHeight;
}
function getParentNodeObj(previewContent, mdNode) {
    var el = previewContent.querySelector("[data-nodeid=\"" + mdNode.id + "\"]");
    while (!el || isStyledInlineNode(mdNode)) {
        mdNode = mdNode.parent;
        el = previewContent.querySelector("[data-nodeid=\"" + mdNode.id + "\"]");
    }
    return getNonNestableNodeObj({ mdNode: mdNode, el: el });
}
function getNonNestableNodeObj(_a) {
    var mdNode = _a.mdNode, el = _a.el;
    while ((includes(nestableTypes, mdNode.type) || mdNode.type === 'table') && mdNode.firstChild) {
        mdNode = mdNode.firstChild;
        el = el.firstElementChild;
    }
    return { mdNode: mdNode, el: el };
}

var offsetInfoMap = {};
function setHeight(id, height) {
    offsetInfoMap[id] = offsetInfoMap[id] || {};
    offsetInfoMap[id].height = height;
}
function setOffsetTop(id, offsetTop) {
    offsetInfoMap[id] = offsetInfoMap[id] || {};
    offsetInfoMap[id].offsetTop = offsetTop;
}
function getHeight(id) {
    return offsetInfoMap[id] && offsetInfoMap[id].height;
}
function getOffsetTop(id) {
    return offsetInfoMap[id] && offsetInfoMap[id].offsetTop;
}
function removeOffsetInfoByNode(node) {
    if (node) {
        delete offsetInfoMap[Number(node.getAttribute('data-nodeid'))];
        toArray_1(node.children).forEach(function (child) {
            removeOffsetInfoByNode(child);
        });
    }
}
function getAndSaveOffsetInfo(node, root, mdNodeId) {
    var cachedHeight = getHeight(mdNodeId);
    var cachedTop = getOffsetTop(mdNodeId);
    var nodeHeight = cachedHeight || node.clientHeight;
    var offsetTop = cachedTop || getTotalOffsetTop(node, root) || node.offsetTop;
    if (!cachedHeight) {
        setHeight(mdNodeId, nodeHeight);
    }
    if (!cachedTop) {
        setOffsetTop(mdNodeId, offsetTop);
    }
    return { nodeHeight: nodeHeight, offsetTop: offsetTop };
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
            cursorNode = findClosestNode(cursorNode, function (mdNode) { return !isInlineNode$1(mdNode); });
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
                    removeNode$1(el);
                    removeOffsetInfoByNode(el);
                    el = nextEl;
                }
                if (el === null || el === void 0 ? void 0 : el.parentNode) {
                    removeNode$1(el);
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
function isInListNode(pos) {
    return !!findNodeBy(pos, function (_a) {
        var type = _a.type;
        return type.name === 'listItem' || type.name === 'bulletList' || type.name === 'orderedList';
    });
}
function isInTableNode(pos) {
    return !!findNodeBy(pos, function (_a) {
        var type = _a.type;
        return type.name === 'tableHeadCell' || type.name === 'tableBodyCell';
    });
}
function findListItem(pos) {
    return findNodeBy(pos, function (_a) {
        var type = _a.type;
        return type.name === 'listItem';
    });
}
function createDOMInfoParsedRawHTML(tag) {
    return {
        tag: tag,
        getAttrs: function (dom) {
            var rawHTML = dom.getAttribute('data-raw-html');
            return __assign({}, (rawHTML && { rawHTML: rawHTML }));
        },
    };
}
function createCellAttrs(attrs) {
    return Object.keys(attrs).reduce(function (acc, attrName) {
        if (attrName !== 'rawHTML' && attrs[attrName]) {
            attrName = attrName === 'className' ? 'class' : attrName;
            acc[attrName] = attrs[attrName];
        }
        return acc;
    }, {});
}
function createParsedCellDOM(tag) {
    return {
        tag: tag,
        getAttrs: function (dom) {
            return ['rawHTML', 'colspan', 'rowspan', 'extended'].reduce(function (acc, attrName) {
                var attrNameInDOM = attrName === 'rawHTML' ? 'data-raw-html' : attrName;
                var attrValue = dom.getAttribute(attrNameInDOM);
                if (attrValue) {
                    acc[attrName] = includes(['rawHTML', 'extended'], attrName)
                        ? attrValue
                        : Number(attrValue);
                }
                return acc;
            }, {});
        },
    };
}
function getDefaultCustomAttrs() {
    return {
        htmlAttrs: { default: null },
        classNames: { default: null },
    };
}
function getCustomAttrs(attrs) {
    var htmlAttrs = attrs.htmlAttrs, classNames = attrs.classNames;
    return __assign(__assign({}, htmlAttrs), { class: classNames ? classNames.join(' ') : null });
}

function findWrappingOutside(range, type) {
    var parent = range.parent, startIndex = range.startIndex, endIndex = range.endIndex;
    var around = parent.contentMatchAt(startIndex).findWrapping(type);
    if (around) {
        var outer = around.length ? around[0] : type;
        return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
    }
    return null;
}
function findWrappingInside(range, type) {
    var parent = range.parent, startIndex = range.startIndex, endIndex = range.endIndex;
    var inner = parent.child(startIndex);
    var inside = type.contentMatch.findWrapping(inner.type);
    if (inside) {
        var lastType = inside.length ? inside[inside.length - 1] : type;
        var innerMatch = lastType.contentMatch;
        for (var i = startIndex; innerMatch && i < endIndex; i += 1) {
            innerMatch = innerMatch.matchType(parent.child(i).type);
        }
        if (innerMatch && innerMatch.validEnd) {
            return inside;
        }
    }
    return null;
}
function findWrappers(range, innerRange, nodeType, attrs) {
    var around = findWrappingOutside(range, nodeType);
    var inner = findWrappingInside(innerRange, nodeType);
    if (around && inner) {
        var aroundNodes = around.map(function (type) {
            return { type: type };
        });
        var innerNodes = inner.map(function (type) {
            return { type: type, attrs: attrs };
        });
        return aroundNodes.concat({ type: nodeType }).concat(innerNodes);
    }
    return null;
}
function wrapInList(tr, _a, wrappers, joinBefore, list) {
    var start = _a.start, end = _a.end, startIndex = _a.startIndex, endIndex = _a.endIndex, parent = _a.parent;
    var content = Fragment.empty;
    for (var i = wrappers.length - 1; i >= 0; i -= 1) {
        content = Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
    }
    tr.step(new ReplaceAroundStep(start - (joinBefore ? 2 : 0), end, start, end, new Slice(content, 0, 0), wrappers.length, true));
    var foundListIndex = 0;
    for (var i = 0; i < wrappers.length; i += 1) {
        if (wrappers[i].type === list) {
            foundListIndex = i + 1;
            break;
        }
    }
    var splitDepth = wrappers.length - foundListIndex;
    var splitPos = start + wrappers.length - (joinBefore ? 2 : 0);
    for (var i = startIndex, len = endIndex; i < len; i += 1) {
        var first = i === startIndex;
        if (!first && canSplit(tr.doc, splitPos, splitDepth)) {
            tr.split(splitPos, splitDepth);
            splitPos += splitDepth * 2;
        }
        splitPos += parent.child(i).nodeSize;
    }
    return tr;
}
function changeToList(tr, range, list, attrs) {
    var $from = range.$from, $to = range.$to, depth = range.depth;
    var outerRange = range;
    var joinBefore = false;
    if (depth >= 2 &&
        $from.node(depth - 1).type.compatibleContent(list) &&
        range.startIndex === 0 &&
        $from.index(depth - 1)) {
        var start = tr.doc.resolve(range.start - 2);
        outerRange = new NodeRange(start, start, depth);
        if (range.endIndex < range.parent.childCount) {
            range = new NodeRange($from, tr.doc.resolve($to.end(depth)), depth);
        }
        joinBefore = true;
    }
    var wrappers = findWrappers(outerRange, range, list, attrs);
    if (wrappers) {
        return wrapInList(tr, range, wrappers, joinBefore, list);
    }
    return tr;
}
function getBeforeLineListItem(doc, offset) {
    var endListItemPos = doc.resolve(offset);
    while (endListItemPos.node().type.name !== 'paragraph') {
        offset -= 2; // The position value of </li></ul>
        endListItemPos = doc.resolve(offset);
    }
    return findListItem(endListItemPos);
}
function toggleTaskListItems(tr, _a) {
    var $from = _a.$from, $to = _a.$to;
    var startListItem = findListItem($from);
    var endListItem = findListItem($to);
    if (startListItem && endListItem) {
        while (endListItem) {
            var offset = endListItem.offset, node = endListItem.node;
            var attrs = { task: !node.attrs.task, checked: false };
            tr.setNodeMarkup(offset, null, attrs);
            if (offset === startListItem.offset) {
                break;
            }
            endListItem = getBeforeLineListItem(tr.doc, offset);
        }
    }
    return tr;
}
function changeListType(tr, _a, list) {
    var $from = _a.$from, $to = _a.$to;
    var startListItem = findListItem($from);
    var endListItem = findListItem($to);
    if (startListItem && endListItem) {
        while (endListItem) {
            var offset = endListItem.offset, node = endListItem.node, depth = endListItem.depth;
            if (node.attrs.task) {
                tr.setNodeMarkup(offset, null, { task: false, checked: false });
            }
            var resolvedPos = tr.doc.resolve(offset);
            if (resolvedPos.parent.type !== list) {
                var parentOffset = resolvedPos.before(depth - 1);
                tr.setNodeMarkup(parentOffset, list);
            }
            if (offset === startListItem.offset) {
                break;
            }
            endListItem = getBeforeLineListItem(tr.doc, offset);
        }
    }
    return tr;
}
function changeList(list) {
    return function (_a, dispatch) {
        var selection = _a.selection, tr = _a.tr;
        var $from = selection.$from, $to = selection.$to;
        var range = $from.blockRange($to);
        if (range) {
            var newTr = isInListNode($from)
                ? changeListType(tr, range, list)
                : changeToList(tr, range, list);
            dispatch(newTr);
            return true;
        }
        return false;
    };
}
function toggleTask() {
    return function (_a, dispatch) {
        var selection = _a.selection, tr = _a.tr, schema = _a.schema;
        var $from = selection.$from, $to = selection.$to;
        var range = $from.blockRange($to);
        if (range) {
            var newTr = isInListNode($from)
                ? toggleTaskListItems(tr, range)
                : changeToList(tr, range, schema.nodes.bulletList, { task: true });
            dispatch(newTr);
            return true;
        }
        return false;
    };
}
function sinkListItem(listItem) {
    return function (_a, dispatch) {
        var tr = _a.tr, selection = _a.selection;
        var $from = selection.$from, $to = selection.$to;
        var range = $from.blockRange($to, function (_a) {
            var childCount = _a.childCount, firstChild = _a.firstChild;
            return !!childCount && firstChild.type === listItem;
        });
        if (range && range.startIndex > 0) {
            var parent_1 = range.parent;
            var nodeBefore = parent_1.child(range.startIndex - 1);
            if (nodeBefore.type !== listItem) {
                return false;
            }
            var nestedBefore = nodeBefore.lastChild && nodeBefore.lastChild.type === parent_1.type;
            var inner = nestedBefore ? Fragment.from(listItem.create()) : null;
            var slice = new Slice(Fragment.from(listItem.create(null, Fragment.from(parent_1.type.create(null, inner)))), nestedBefore ? 3 : 1, 0);
            var before = range.start;
            var after = range.end;
            tr.step(new ReplaceAroundStep(before - (nestedBefore ? 3 : 1), after, before, after, slice, 1, true));
            dispatch(tr);
            return true;
        }
        return false;
    };
}
function liftToOuterList(tr, range, listItem) {
    var $from = range.$from, $to = range.$to, end = range.end, depth = range.depth, parent = range.parent;
    var endOfList = $to.end(depth);
    if (end < endOfList) {
        // There are siblings after the lifted items, which must become
        // children of the last item
        tr.step(new ReplaceAroundStep(end - 1, endOfList, end, endOfList, new Slice(Fragment.from(listItem.create(null, parent.copy())), 1, 0), 1, true));
        range = new NodeRange(tr.doc.resolve($from.pos), tr.doc.resolve(endOfList), depth);
    }
    tr.lift(range, liftTarget(range));
    return tr;
}
function liftOutOfList(tr, range) {
    var list = range.parent;
    var pos = range.end;
    // Merge the list items into a single big item
    for (var i = range.endIndex - 1, len = range.startIndex; i > len; i -= 1) {
        pos -= list.child(i).nodeSize;
        tr.delete(pos - 1, pos + 1);
    }
    var startPos = tr.doc.resolve(range.start);
    var listItem = startPos.nodeAfter;
    var atStart = range.startIndex === 0;
    var atEnd = range.endIndex === list.childCount;
    var parent = startPos.node(-1);
    var indexBefore = startPos.index(-1);
    var canReplaceParent = parent.canReplace(indexBefore + (atStart ? 0 : 1), indexBefore + 1, listItem === null || listItem === void 0 ? void 0 : listItem.content.append(atEnd ? Fragment.empty : Fragment.from(list)));
    if (listItem && canReplaceParent) {
        var start = startPos.pos;
        var end = start + listItem.nodeSize;
        // Strip off the surrounding list. At the sides where we're not at
        // the end of the list, the existing list is closed. At sides where
        // this is the end, it is overwritten to its end.
        tr.step(new ReplaceAroundStep(start - (atStart ? 1 : 0), end + (atEnd ? 1 : 0), start + 1, end - 1, new Slice((atStart ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))).append(atEnd ? Fragment.empty : Fragment.from(list.copy(Fragment.empty))), atStart ? 0 : 1, atEnd ? 0 : 1), atStart ? 0 : 1));
    }
    return tr;
}
function liftListItem(listItem) {
    return function (_a, dispatch) {
        var tr = _a.tr, selection = _a.selection;
        var $from = selection.$from, $to = selection.$to;
        var range = $from.blockRange($to, function (_a) {
            var childCount = _a.childCount, firstChild = _a.firstChild;
            return !!childCount && firstChild.type === listItem;
        });
        if (range) {
            var topListItem = $from.node(range.depth - 1).type === listItem;
            var newTr = topListItem ? liftToOuterList(tr, range, listItem) : liftOutOfList(tr, range);
            dispatch(newTr);
            return true;
        }
        return false;
    };
}
function splitListItem(listItem) {
    return function (_a, dispatch) {
        var tr = _a.tr, selection = _a.selection;
        var $from = selection.$from, $to = selection.$to;
        if ($from.depth < 2 || !$from.sameParent($to)) {
            return false;
        }
        var grandParent = $from.node(-1);
        if (grandParent.type !== listItem) {
            return false;
        }
        if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
            // In an empty block. If this is a nested list, the wrapping
            // list item should be split. Otherwise, bail out and let next
            // command handle lifting.
            if ($from.depth === 2 ||
                $from.node(-3).type !== listItem ||
                $from.index(-2) !== $from.node(-2).childCount - 1) {
                return false;
            }
            var keepItem = $from.index(-1) > 0;
            var wrapper = Fragment.empty;
            // Build a fragment containing empty versions of the structure
            // from the outer list item to the parent node of the cursor
            for (var depth = $from.depth - (keepItem ? 1 : 2); depth >= $from.depth - 3; depth -= 1) {
                wrapper = Fragment.from($from.node(depth).copy(wrapper));
            }
            // Add a second list item with an empty default start node
            wrapper = wrapper.append(Fragment.from(listItem.createAndFill()));
            tr.replace(keepItem ? $from.before() : $from.before(-1), $from.after(-3), new Slice(wrapper, keepItem ? 3 : 2, 2));
            tr.setSelection(Selection.near(tr.doc.resolve($from.pos + (keepItem ? 3 : 2))));
            dispatch(tr);
            return true;
        }
        var nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
        var types = nextType && [null, { type: nextType }];
        tr.delete($from.pos, $to.pos);
        if (canSplit(tr.doc, $from.pos, 2, types)) {
            tr.split($from.pos, 2, types);
            dispatch(tr);
            return true;
        }
        return false;
    };
}

function indent() {
    return function () { return function (state, dispatch) {
        var selection = state.selection, schema = state.schema;
        var $from = selection.$from, $to = selection.$to;
        var range = $from.blockRange($to);
        if (range && isInListNode($from)) {
            return sinkListItem(schema.nodes.listItem)(state, dispatch);
        }
        return false;
    }; };
}
function outdent() {
    return function () { return function (state, dispatch) {
        var selection = state.selection, schema = state.schema;
        var $from = selection.$from, $to = selection.$to;
        var range = $from.blockRange($to);
        if (range && isInListNode($from)) {
            return liftListItem(schema.nodes.listItem)(state, dispatch);
        }
        return false;
    }; };
}
function getWwCommands() {
    return {
        indent: indent(),
        outdent: outdent(),
    };
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

function getSelectionRanges(doc, map, _a) {
    var startRowIdx = _a.startRowIdx, startColIdx = _a.startColIdx, endRowIdx = _a.endRowIdx, endColIdx = _a.endColIdx;
    var ranges = [];
    for (var rowIdx = startRowIdx; rowIdx <= endRowIdx; rowIdx += 1) {
        for (var colIdx = startColIdx; colIdx <= endColIdx; colIdx += 1) {
            var _b = map.getCellInfo(rowIdx, colIdx), offset = _b.offset, nodeSize = _b.nodeSize;
            ranges.push(new SelectionRange(doc.resolve(offset + 1), doc.resolve(offset + nodeSize - 1)));
        }
    }
    return ranges;
}
function createTableFragment(tableHead, tableBody) {
    var fragment = [];
    if (tableHead.childCount) {
        fragment.push(tableHead);
    }
    if (tableBody.childCount) {
        fragment.push(tableBody);
    }
    return Fragment.from(fragment);
}
var CellSelection = /** @class */ (function (_super) {
    __extends(CellSelection, _super);
    function CellSelection(startCellPos, endCellPos) {
        if (endCellPos === void 0) { endCellPos = startCellPos; }
        var _this = this;
        var doc = startCellPos.node(0);
        var map = TableOffsetMap.create(startCellPos);
        var selectionInfo = map.getRectOffsets(startCellPos, endCellPos);
        var ranges = getSelectionRanges(doc, map, selectionInfo);
        _this = _super.call(this, ranges[0].$from, ranges[0].$to, ranges) || this;
        _this.startCell = startCellPos;
        _this.endCell = endCellPos;
        _this.offsetMap = map;
        _this.isCellSelection = true;
        // This property is the api of the 'Selection' in prosemirror,
        // and is used to disable the text selection.
        _this.visible = false;
        return _this;
    }
    CellSelection.prototype.map = function (doc, mapping) {
        var startPos = this.startCell.pos;
        var endPos = this.endCell.pos;
        var startCell = doc.resolve(mapping.map(startPos));
        var endCell = doc.resolve(mapping.map(endPos));
        var map = TableOffsetMap.create(startCell);
        // text selection when rows or columns are deleted
        if (this.offsetMap.totalColumnCount > map.totalColumnCount ||
            this.offsetMap.totalRowCount > map.totalRowCount) {
            var depthMap = { tableBody: 1, tableRow: 2, tableCell: 3, paragraph: 4 };
            var depthFromTable = depthMap[endCell.parent.type.name];
            var tableEndPos = endCell.end(endCell.depth - depthFromTable);
            // subtract 4(</td></tr></tbody></table> tag length)
            var from = Math.min(tableEndPos - 4, endCell.pos);
            return TextSelection.create(doc, from);
        }
        return new CellSelection(startCell, endCell);
    };
    CellSelection.prototype.eq = function (cell) {
        return (cell instanceof CellSelection &&
            cell.startCell.pos === this.startCell.pos &&
            cell.endCell.pos === this.endCell.pos);
    };
    CellSelection.prototype.content = function () {
        var table = this.startCell.node(-2);
        var tableOffset = this.startCell.start(-2);
        var row = table.child(1).firstChild;
        var tableHead = table.child(0).type.create();
        var tableBody = table.child(1).type.create();
        var map = TableOffsetMap.create(this.startCell);
        var selectionInfo = map.getRectOffsets(this.startCell, this.endCell);
        var startRowIdx = selectionInfo.startRowIdx, startColIdx = selectionInfo.startColIdx, endRowIdx = selectionInfo.endRowIdx, endColIdx = selectionInfo.endColIdx;
        var isTableHeadCell = false;
        for (var rowIdx = startRowIdx; rowIdx <= endRowIdx; rowIdx += 1) {
            var cells = [];
            for (var colIdx = startColIdx; colIdx <= endColIdx; colIdx += 1) {
                var offset = map.getCellInfo(rowIdx, colIdx).offset;
                var cell = table.nodeAt(offset - tableOffset);
                if (cell) {
                    isTableHeadCell = cell.type.name === 'tableHeadCell';
                    // mark the extended cell for pasting
                    if (map.extendedRowspan(rowIdx, colIdx) || map.extendedColspan(rowIdx, colIdx)) {
                        cells.push(cell.type.create({ extended: true }));
                    }
                    else {
                        cells.push(cell.copy(cell.content));
                    }
                }
            }
            var copiedRow = row.copy(Fragment.from(cells));
            var targetNode = isTableHeadCell ? tableHead : tableBody;
            // @ts-ignore
            targetNode.content = targetNode.content.append(Fragment.from(copiedRow));
        }
        return new Slice(createTableFragment(tableHead, tableBody), 1, 1);
    };
    CellSelection.prototype.toJSON = function () {
        return JSON.stringify(this);
    };
    return CellSelection;
}(Selection));

function createTableHeadRow(columnCount, schema, data) {
    var _a = schema.nodes, tableRow = _a.tableRow, tableHeadCell = _a.tableHeadCell, paragraph = _a.paragraph;
    var cells = [];
    for (var index = 0; index < columnCount; index += 1) {
        var text = data && data[index];
        var para = paragraph.create(null, text ? schema.text(text) : []);
        cells.push(tableHeadCell.create(null, para));
    }
    return [tableRow.create(null, cells)];
}
function createTableBodyRows(rowCount, columnCount, schema, data) {
    var _a = schema.nodes, tableRow = _a.tableRow, tableBodyCell = _a.tableBodyCell, paragraph = _a.paragraph;
    var tableRows = [];
    for (var rowIdx = 0; rowIdx < rowCount; rowIdx += 1) {
        var cells = [];
        for (var colIdx = 0; colIdx < columnCount; colIdx += 1) {
            var text = data && data[rowIdx * columnCount + colIdx];
            var para = paragraph.create(null, text ? schema.text(text) : []);
            cells.push(tableBodyCell.create(null, para));
        }
        tableRows.push(tableRow.create(null, cells));
    }
    return tableRows;
}
function createDummyCells(columnCount, rowIdx, schema, attrs) {
    if (attrs === void 0) { attrs = null; }
    var _a = schema.nodes, tableHeadCell = _a.tableHeadCell, tableBodyCell = _a.tableBodyCell, paragraph = _a.paragraph;
    var cell = rowIdx === 0 ? tableHeadCell : tableBodyCell;
    var cells = [];
    for (var index = 0; index < columnCount; index += 1) {
        cells.push(cell.create(attrs, paragraph.create()));
    }
    return cells;
}
function findCellElement(node, root) {
    while (node && node !== root) {
        if (node.nodeName === 'TD' || node.nodeName === 'TH') {
            return node;
        }
        node = node.parentNode;
    }
    return null;
}
function findCell(pos) {
    return findNodeBy(pos, function (_a) {
        var type = _a.type;
        return type.name === 'tableHeadCell' || type.name === 'tableBodyCell';
    });
}
function getResolvedSelection(selection) {
    if (selection instanceof TextSelection) {
        var $anchor = selection.$anchor;
        var foundCell = findCell($anchor);
        if (foundCell) {
            var anchor = $anchor.node(0).resolve($anchor.before(foundCell.depth));
            return { anchor: anchor, head: anchor };
        }
    }
    var _a = selection, startCell = _a.startCell, endCell = _a.endCell;
    return { anchor: startCell, head: endCell };
}
function getTableContentFromSlice(slice) {
    var _a;
    if (slice.size) {
        var content = slice.content, openStart = slice.openStart, openEnd = slice.openEnd;
        if (content.childCount !== 1) {
            return null;
        }
        while (content.childCount === 1 &&
            ((openStart > 0 && openEnd > 0) || ((_a = content.firstChild) === null || _a === void 0 ? void 0 : _a.type.name) === 'table')) {
            openStart -= 1;
            openEnd -= 1;
            content = content.firstChild.content;
        }
        if (content.firstChild.type.name === 'tableHead' ||
            content.firstChild.type.name === 'tableBody') {
            return content;
        }
    }
    return null;
}
function getRowAndColumnCount(_a) {
    var startRowIdx = _a.startRowIdx, startColIdx = _a.startColIdx, endRowIdx = _a.endRowIdx, endColIdx = _a.endColIdx;
    var rowCount = endRowIdx - startRowIdx + 1;
    var columnCount = endColIdx - startColIdx + 1;
    return { rowCount: rowCount, columnCount: columnCount };
}
function setAttrs(cell, attrs) {
    return __assign(__assign({}, cell.attrs), attrs);
}

var pluginKey = new PluginKey('cellSelection');
var MOUSE_RIGHT_BUTTON = 2;
var TableSelection = /** @class */ (function () {
    function TableSelection(view) {
        this.view = view;
        this.handlers = {
            mousedown: this.handleMousedown.bind(this),
            mousemove: this.handleMousemove.bind(this),
            mouseup: this.handleMouseup.bind(this),
        };
        this.startCellPos = null;
        this.init();
    }
    TableSelection.prototype.init = function () {
        this.view.dom.addEventListener('mousedown', this.handlers.mousedown);
    };
    TableSelection.prototype.handleMousedown = function (ev) {
        var foundCell = findCellElement(ev.target, this.view.dom);
        if (ev.button === MOUSE_RIGHT_BUTTON) {
            ev.preventDefault();
            return;
        }
        if (foundCell) {
            var startCellPos = this.getCellPos(ev);
            if (startCellPos) {
                this.startCellPos = startCellPos;
            }
            this.bindEvent();
        }
    };
    TableSelection.prototype.handleMousemove = function (ev) {
        var prevEndCellOffset = pluginKey.getState(this.view.state);
        var endCellPos = this.getCellPos(ev);
        var startCellPos = this.startCellPos;
        var prevEndCellPos;
        if (prevEndCellOffset) {
            prevEndCellPos = this.view.state.doc.resolve(prevEndCellOffset);
        }
        else if (startCellPos !== endCellPos) {
            prevEndCellPos = startCellPos;
        }
        if (prevEndCellPos && startCellPos && endCellPos) {
            this.setCellSelection(startCellPos, endCellPos);
        }
    };
    TableSelection.prototype.handleMouseup = function () {
        this.startCellPos = null;
        this.unbindEvent();
        if (pluginKey.getState(this.view.state) !== null) {
            this.view.dispatch(this.view.state.tr.setMeta(pluginKey, -1));
        }
    };
    TableSelection.prototype.bindEvent = function () {
        var dom = this.view.dom;
        dom.addEventListener('mousemove', this.handlers.mousemove);
        dom.addEventListener('mouseup', this.handlers.mouseup);
    };
    TableSelection.prototype.unbindEvent = function () {
        var dom = this.view.dom;
        dom.removeEventListener('mousemove', this.handlers.mousemove);
        dom.removeEventListener('mouseup', this.handlers.mouseup);
    };
    TableSelection.prototype.getCellPos = function (_a) {
        var clientX = _a.clientX, clientY = _a.clientY;
        var mousePos = this.view.posAtCoords({ left: clientX, top: clientY });
        if (mousePos) {
            var doc = this.view.state.doc;
            var currentPos = doc.resolve(mousePos.pos);
            var foundCell = findCell(currentPos);
            if (foundCell) {
                var cellOffset = currentPos.before(foundCell.depth);
                return doc.resolve(cellOffset);
            }
        }
        return null;
    };
    TableSelection.prototype.setCellSelection = function (startCellPos, endCellPos) {
        var _a = this.view.state, selection = _a.selection, tr = _a.tr;
        var starting = pluginKey.getState(this.view.state) === null;
        var cellSelection = new CellSelection(startCellPos, endCellPos);
        if (starting || !selection.eq(cellSelection)) {
            var newTr = tr.setSelection(cellSelection);
            if (starting) {
                newTr.setMeta(pluginKey, endCellPos.pos);
            }
            this.view.dispatch(newTr);
        }
    };
    TableSelection.prototype.destroy = function () {
        this.view.dom.removeEventListener('mousedown', this.handlers.mousedown);
    };
    return TableSelection;
}());

var SELECTED_CELL_CLASS_NAME = cls('cell-selected');
function drawCellSelection(_a) {
    var selection = _a.selection, doc = _a.doc;
    if (selection instanceof CellSelection) {
        var cells_1 = [];
        var ranges = selection.ranges;
        ranges.forEach(function (_a) {
            var $from = _a.$from, $to = _a.$to;
            cells_1.push(Decoration.node($from.pos - 1, $to.pos + 1, { class: SELECTED_CELL_CLASS_NAME }));
        });
        return DecorationSet.create(doc, cells_1);
    }
    return null;
}
function tableSelection() {
    return new Plugin({
        key: pluginKey,
        state: {
            init: function () {
                return null;
            },
            apply: function (tr, value) {
                var cellOffset = tr.getMeta(pluginKey);
                if (cellOffset) {
                    return cellOffset === -1 ? null : cellOffset;
                }
                if (isNull_1(value) || !tr.docChanged) {
                    return value;
                }
                var _a = tr.mapping.mapResult(value), deleted = _a.deleted, pos = _a.pos;
                return deleted ? null : pos;
            },
        },
        props: {
            decorations: drawCellSelection,
            createSelectionBetween: function (_a) {
                var state = _a.state;
                if (!isNull_1(pluginKey.getState(state))) {
                    return state.selection;
                }
                return null;
            },
        },
        view: function (editorView) {
            return new TableSelection(editorView);
        },
    });
}

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

var contextMenuGroups = [
    [
        {
            action: 'Add row to up',
            command: 'addRowToUp',
            disableInThead: true,
            className: 'add-row-up',
        },
        {
            action: 'Add row to down',
            command: 'addRowToDown',
            disableInThead: true,
            className: 'add-row-down',
        },
        { action: 'Remove row', command: 'removeRow', disableInThead: true, className: 'remove-row' },
    ],
    [
        { action: 'Add column to left', command: 'addColumnToLeft', className: 'add-column-left' },
        { action: 'Add column to right', command: 'addColumnToRight', className: 'add-column-right' },
        { action: 'Remove column', command: 'removeColumn', className: 'remove-column' },
    ],
    [
        {
            action: 'Align column to left',
            command: 'alignColumn',
            payload: { align: 'left' },
            className: 'align-column-left',
        },
        {
            action: 'Align column to center',
            command: 'alignColumn',
            payload: { align: 'center' },
            className: 'align-column-center',
        },
        {
            action: 'Align column to right',
            command: 'alignColumn',
            payload: { align: 'right' },
            className: 'align-column-right',
        },
    ],
    [{ action: 'Remove table', command: 'removeTable', className: 'remove-table' }],
];
function getContextMenuGroups(eventEmitter, inTableHead) {
    return contextMenuGroups
        .map(function (contextMenuGroup) {
        return contextMenuGroup.map(function (_a) {
            var action = _a.action, command = _a.command, payload = _a.payload, disableInThead = _a.disableInThead, className = _a.className;
            return {
                label: i18n.get(action),
                onClick: function () {
                    eventEmitter.emit('command', command, payload);
                },
                disabled: inTableHead && !!disableInThead,
                className: className,
            };
        });
    })
        .concat();
}
function tableContextMenu(eventEmitter) {
    return new Plugin({
        props: {
            handleDOMEvents: {
                contextmenu: function (view, ev) {
                    var tableCell = findCellElement(ev.target, view.dom);
                    if (tableCell) {
                        ev.preventDefault();
                        var _a = ev, clientX = _a.clientX, clientY = _a.clientY;
                        var _b = view.dom.parentNode.getBoundingClientRect(), left = _b.left, top_1 = _b.top;
                        var inTableHead = tableCell.nodeName === 'TH';
                        eventEmitter.emit('contextmenu', {
                            pos: { left: clientX - left + 10 + "px", top: clientY - top_1 + 30 + "px" },
                            menuGroups: getContextMenuGroups(eventEmitter, inTableHead),
                            tableCell: tableCell,
                        });
                        return true;
                    }
                    return false;
                },
            },
        },
    });
}

function task() {
    return new Plugin({
        props: {
            handleDOMEvents: {
                mousedown: function (view, ev) {
                    var _a = ev, clientX = _a.clientX, clientY = _a.clientY;
                    var mousePos = view.posAtCoords({ left: clientX, top: clientY });
                    if (mousePos) {
                        var _b = view.state, doc = _b.doc, tr = _b.tr;
                        var currentPos = doc.resolve(mousePos.pos);
                        var listItem = findListItem(currentPos);
                        var target = ev.target;
                        var style = getComputedStyle(target, ':before');
                        var _c = ev, offsetX = _c.offsetX, offsetY = _c.offsetY;
                        if (!listItem || !isPositionInBox(style, offsetX, offsetY)) {
                            return false;
                        }
                        ev.preventDefault();
                        var offset = currentPos.before(listItem.depth);
                        var attrs = listItem.node.attrs;
                        tr.setNodeMarkup(offset, null, __assign(__assign({}, attrs), { checked: !attrs.checked }));
                        view.dispatch(tr);
                        return true;
                    }
                    return false;
                },
            },
        },
    });
}

var EXCEPT_TYPES = ['image', 'link', 'customBlock', 'frontMatter'];
var MARK_TYPES = ['strong', 'strike', 'emph', 'code'];
var LIST_TYPES = ['bulletList', 'orderedList', 'taskList'];
function getToolbarStateType(node, parentNode) {
    var type = node.type.name;
    if (type === 'listItem') {
        return node.attrs.task ? 'taskList' : parentNode.type.name;
    }
    if (type.indexOf('table') !== -1) {
        return 'table';
    }
    return type;
}
function setListNodeToolbarState(type, nodeTypeState) {
    nodeTypeState[type] = { active: true };
    LIST_TYPES.filter(function (listName) { return listName !== type; }).forEach(function (listType) {
        if (nodeTypeState[listType]) {
            delete nodeTypeState[listType];
        }
    });
}
function setMarkTypeStates(from, to, schema, toolbarState) {
    MARK_TYPES.forEach(function (type) {
        var mark = schema.marks[type];
        var marksAtPos = from.marksAcross(to) || [];
        var foundMark = !!mark.isInSet(marksAtPos);
        if (foundMark) {
            toolbarState[type] = { active: true };
        }
    });
}
function getToolbarState(selection, doc, schema) {
    var $from = selection.$from, $to = selection.$to, from = selection.from, to = selection.to;
    var toolbarState = {
        indent: { active: false, disabled: true },
        outdent: { active: false, disabled: true },
    };
    doc.nodesBetween(from, to, function (node, _, parentNode) {
        var type = getToolbarStateType(node, parentNode);
        if (includes(EXCEPT_TYPES, type)) {
            return;
        }
        if (includes(LIST_TYPES, type)) {
            setListNodeToolbarState(type, toolbarState);
            toolbarState.indent.disabled = false;
            toolbarState.outdent.disabled = false;
        }
        else if (type === 'paragraph' || type === 'text') {
            setMarkTypeStates($from, $to, schema, toolbarState);
        }
        else {
            toolbarState[type] = { active: true };
        }
    });
    return toolbarState;
}
function toolbarStateHighlight(eventEmitter) {
    return new Plugin({
        view: function () {
            return {
                update: function (view) {
                    var _a = view.state, selection = _a.selection, doc = _a.doc, schema = _a.schema;
                    eventEmitter.emit('changeToolbarState', {
                        toolbarState: getToolbarState(selection, doc, schema),
                    });
                },
            };
        },
    });
}

var CustomBlockView = /** @class */ (function () {
    function CustomBlockView(node, view, getPos, toDOMAdaptor) {
        var _this = this;
        this.openEditor = function () {
            if (_this.innerEditorView) {
                throw new Error('The editor is already opened.');
            }
            _this.dom.draggable = false;
            _this.wrapper.style.display = 'none';
            _this.innerViewContainer.style.display = 'block';
            _this.innerEditorView = new EditorView(_this.innerViewContainer, {
                state: EditorState.create({
                    doc: _this.node,
                    plugins: [
                        keymap({
                            'Mod-z': function () { return undo(_this.innerEditorView.state, _this.innerEditorView.dispatch); },
                            'Shift-Mod-z': function () { return redo(_this.innerEditorView.state, _this.innerEditorView.dispatch); },
                            Tab: function (state, dispatch) {
                                dispatch(state.tr.insertText('\t'));
                                return true;
                            },
                            Enter: newlineInCode,
                            Escape: function () {
                                _this.cancelEditing();
                                return true;
                            },
                            'Ctrl-Enter': function () {
                                _this.saveAndFinishEditing();
                                return true;
                            },
                        }),
                        history(),
                    ],
                }),
                dispatchTransaction: function (tr) { return _this.dispatchInner(tr); },
                handleDOMEvents: {
                    mousedown: function () {
                        if (_this.editorView.hasFocus()) {
                            _this.innerEditorView.focus();
                        }
                        return true;
                    },
                    blur: function () {
                        _this.saveAndFinishEditing();
                        return true;
                    },
                },
            });
            _this.innerEditorView.focus();
        };
        this.node = node;
        this.editorView = view;
        this.getPos = getPos;
        this.toDOMAdaptor = toDOMAdaptor;
        this.innerEditorView = null;
        this.canceled = false;
        this.dom = document.createElement('div');
        this.dom.className = cls('custom-block');
        this.wrapper = document.createElement('div');
        this.wrapper.className = cls('custom-block-view');
        this.createInnerViewContainer();
        this.renderCustomBlock();
        this.dom.appendChild(this.innerViewContainer);
        this.dom.appendChild(this.wrapper);
    }
    CustomBlockView.prototype.renderToolArea = function () {
        var _this = this;
        var tool = document.createElement('div');
        var span = document.createElement('span');
        var button = document.createElement('button');
        tool.className = 'tool';
        span.textContent = this.node.attrs.info;
        span.className = 'info';
        button.type = 'button';
        button.addEventListener('click', function () { return _this.openEditor(); });
        tool.appendChild(span);
        tool.appendChild(button);
        this.wrapper.appendChild(tool);
    };
    CustomBlockView.prototype.renderCustomBlock = function () {
        var toDOMNode = this.toDOMAdaptor.getToDOMNode(this.node.attrs.info);
        if (toDOMNode) {
            var node = toDOMNode(this.node);
            while (this.wrapper.hasChildNodes()) {
                this.wrapper.removeChild(this.wrapper.lastChild);
            }
            if (node) {
                this.wrapper.appendChild(node);
            }
            this.renderToolArea();
        }
    };
    CustomBlockView.prototype.createInnerViewContainer = function () {
        this.innerViewContainer = document.createElement('div');
        this.innerViewContainer.className = cls('custom-block-editor');
        this.innerViewContainer.style.display = 'none';
    };
    CustomBlockView.prototype.closeEditor = function () {
        if (this.innerEditorView) {
            this.innerEditorView.destroy();
            this.innerEditorView = null;
            this.innerViewContainer.style.display = 'none';
        }
        this.wrapper.style.display = 'block';
    };
    CustomBlockView.prototype.saveAndFinishEditing = function () {
        var to = this.editorView.state.selection.to;
        var outerState = this.editorView.state;
        this.editorView.dispatch(outerState.tr.setSelection(createTextSelection(outerState.tr, to)));
        this.editorView.focus();
        this.renderCustomBlock();
        this.closeEditor();
    };
    CustomBlockView.prototype.cancelEditing = function () {
        var undoableCount = undoDepth(this.innerEditorView.state);
        this.canceled = true;
        // should undo editing result
        // eslint-disable-next-line no-plusplus
        while (undoableCount--) {
            undo(this.innerEditorView.state, this.innerEditorView.dispatch);
            undo(this.editorView.state, this.editorView.dispatch);
        }
        this.canceled = false;
        var to = this.editorView.state.selection.to;
        var outerState = this.editorView.state;
        this.editorView.dispatch(outerState.tr.setSelection(TextSelection.create(outerState.doc, to)));
        this.editorView.focus();
        this.closeEditor();
    };
    CustomBlockView.prototype.dispatchInner = function (tr) {
        var _a = this.innerEditorView.state.applyTransaction(tr), state = _a.state, transactions = _a.transactions;
        this.innerEditorView.updateState(state);
        if (!this.canceled && isFunction_1(this.getPos)) {
            var outerTr = this.editorView.state.tr;
            var offsetMap = StepMap.offset(this.getPos() + 1);
            for (var i = 0; i < transactions.length; i += 1) {
                var steps = transactions[i].steps;
                for (var j = 0; j < steps.length; j += 1) {
                    outerTr.step(steps[j].map(offsetMap));
                }
            }
            if (outerTr.docChanged) {
                this.editorView.dispatch(outerTr);
            }
        }
    };
    CustomBlockView.prototype.update = function (node) {
        if (!node.sameMarkup(this.node)) {
            return false;
        }
        this.node = node;
        if (!this.innerEditorView) {
            this.renderCustomBlock();
        }
        return true;
    };
    CustomBlockView.prototype.stopEvent = function (event) {
        return (!!this.innerEditorView &&
            !!event.target &&
            this.innerEditorView.dom.contains(event.target));
    };
    CustomBlockView.prototype.ignoreMutation = function () {
        return true;
    };
    CustomBlockView.prototype.destroy = function () {
        this.dom.removeEventListener('dblclick', this.openEditor);
        this.closeEditor();
    };
    return CustomBlockView;
}());

var IMAGE_LINK_CLASS_NAME = 'image-link';
var ImageView = /** @class */ (function () {
    function ImageView(node, view, getPos, eventEmitter) {
        var _this = this;
        var _a;
        this.handleMousedown = function (ev) {
            ev.preventDefault();
            var target = ev.target, offsetX = ev.offsetX, offsetY = ev.offsetY;
            if (_this.imageLink &&
                isFunction_1(_this.getPos) &&
                hasClass_1(target, IMAGE_LINK_CLASS_NAME)) {
                var style = getComputedStyle(target, ':before');
                ev.stopPropagation();
                if (isPositionInBox(style, offsetX, offsetY)) {
                    var tr = _this.view.state.tr;
                    var pos = _this.getPos();
                    tr.setSelection(createTextSelection(tr, pos, pos + 1));
                    _this.view.dispatch(tr);
                    _this.eventEmitter.emit('openPopup', 'link', _this.imageLink.attrs);
                }
            }
        };
        this.node = node;
        this.view = view;
        this.getPos = getPos;
        this.eventEmitter = eventEmitter;
        this.imageLink = (_a = node.marks.filter(function (_a) {
            var type = _a.type;
            return type.name === 'link';
        })[0]) !== null && _a !== void 0 ? _a : null;
        this.dom = this.createElement();
        this.bindEvent();
    }
    ImageView.prototype.createElement = function () {
        var image = this.createImageElement(this.node);
        if (this.imageLink) {
            var wrapper = document.createElement('span');
            wrapper.className = IMAGE_LINK_CLASS_NAME;
            wrapper.appendChild(image);
            return wrapper;
        }
        return image;
    };
    ImageView.prototype.createImageElement = function (node) {
        var image = document.createElement('img');
        var _a = node.attrs, imageUrl = _a.imageUrl, altText = _a.altText;
        var attrs = getCustomAttrs(node.attrs);
        image.src = imageUrl;
        if (altText) {
            image.alt = altText;
        }
        setAttributes(attrs, image);
        return image;
    };
    ImageView.prototype.bindEvent = function () {
        if (this.imageLink) {
            this.dom.addEventListener('mousedown', this.handleMousedown);
        }
    };
    ImageView.prototype.stopEvent = function () {
        return true;
    };
    ImageView.prototype.destroy = function () {
        if (this.imageLink) {
            this.dom.removeEventListener('mousedown', this.handleMousedown);
        }
    };
    return ImageView;
}());

var WRAPPER_CLASS_NAME = 'toastui-editor-ww-code-block';
var CODE_BLOCK_LANG_CLASS_NAME = 'toastui-editor-ww-code-block-language';
var CodeBlockView = /** @class */ (function () {
    function CodeBlockView(node, view, getPos, eventEmitter) {
        var _this = this;
        this.contentDOM = null;
        this.input = null;
        this.timer = null;
        this.handleMousedown = function (ev) {
            var target = ev.target;
            var style = getComputedStyle(target, ':after');
            // judge to click pseudo element with background image for IE11
            if (style.backgroundImage !== 'none' && isFunction_1(_this.getPos)) {
                var _a = _this.view.coordsAtPos(_this.getPos()), top_1 = _a.top, right = _a.right;
                _this.createLanguageEditor({ top: top_1, right: right });
            }
        };
        this.handleKeydown = function (ev) {
            if (ev.key === 'Enter' && _this.input) {
                ev.preventDefault();
                _this.changeLanguage();
            }
        };
        this.node = node;
        this.view = view;
        this.getPos = getPos;
        this.eventEmitter = eventEmitter;
        this.createElement();
        this.bindDOMEvent();
        this.bindEvent();
    }
    CodeBlockView.prototype.createElement = function () {
        var language = this.node.attrs.language;
        var wrapper = document.createElement('div');
        wrapper.setAttribute('data-language', language || 'text');
        wrapper.className = WRAPPER_CLASS_NAME;
        var pre = this.createCodeBlockElement();
        var code = pre.firstChild;
        wrapper.appendChild(pre);
        this.dom = wrapper;
        this.contentDOM = code;
    };
    CodeBlockView.prototype.createCodeBlockElement = function () {
        var pre = document.createElement('pre');
        var code = document.createElement('code');
        var language = this.node.attrs.language;
        var attrs = getCustomAttrs(this.node.attrs);
        if (language) {
            code.setAttribute('data-language', language);
        }
        setAttributes(attrs, pre);
        pre.appendChild(code);
        return pre;
    };
    CodeBlockView.prototype.createLanguageEditor = function (_a) {
        var _this = this;
        var top = _a.top, right = _a.right;
        var wrapper = document.createElement('span');
        wrapper.className = CODE_BLOCK_LANG_CLASS_NAME;
        var input = document.createElement('input');
        input.type = 'text';
        input.value = this.node.attrs.language;
        wrapper.appendChild(input);
        this.view.dom.parentElement.appendChild(wrapper);
        var wrpperWidth = wrapper.clientWidth;
        css_1(wrapper, {
            top: top + 10 + "px",
            left: right - wrpperWidth - 10 + "px",
            width: wrpperWidth + "px",
        });
        this.input = input;
        this.input.addEventListener('blur', function () { return _this.changeLanguage(); });
        this.input.addEventListener('keydown', this.handleKeydown);
        this.clearTimer();
        this.timer = setTimeout(function () {
            _this.input.focus();
        });
    };
    CodeBlockView.prototype.bindDOMEvent = function () {
        if (this.dom) {
            this.dom.addEventListener('click', this.handleMousedown);
        }
    };
    CodeBlockView.prototype.bindEvent = function () {
        var _this = this;
        this.eventEmitter.listen('scroll', function () {
            if (_this.input) {
                _this.reset();
            }
        });
    };
    CodeBlockView.prototype.changeLanguage = function () {
        if (this.input && isFunction_1(this.getPos)) {
            var value = this.input.value;
            this.reset();
            var pos = this.getPos();
            var tr = this.view.state.tr;
            tr.setNodeMarkup(pos, null, { language: value });
            this.view.dispatch(tr);
        }
    };
    CodeBlockView.prototype.reset = function () {
        var _a;
        if ((_a = this.input) === null || _a === void 0 ? void 0 : _a.parentElement) {
            var parent_1 = this.input.parentElement;
            this.input = null;
            removeNode$1(parent_1);
        }
    };
    CodeBlockView.prototype.clearTimer = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    CodeBlockView.prototype.stopEvent = function () {
        return true;
    };
    CodeBlockView.prototype.update = function (node) {
        if (!node.sameMarkup(this.node)) {
            return false;
        }
        this.node = node;
        return true;
    };
    CodeBlockView.prototype.destroy = function () {
        this.reset();
        this.clearTimer();
        if (this.dom) {
            this.dom.removeEventListener('click', this.handleMousedown);
        }
    };
    return CodeBlockView;
}());

var reMSOListClassName = /MsoListParagraph/;
var reMSOStylePrefix = /style=(.|\n)*mso-/;
var reMSOListStyle = /mso-list:(.*)/;
var reMSOTagName = /O:P/;
var reMSOListBullet = /^(n|u|l)/;
var MSO_CLASS_NAME_LIST_PARA = 'p.MsoListParagraph';
function isFromMso(html) {
    return reMSOStylePrefix.test(html);
}
function getListItemContents(para) {
    var removedNodes = [];
    var walker = document.createTreeWalker(para, 1, null, false);
    while (walker.nextNode()) {
        var node = walker.currentNode;
        if (isElemNode(node)) {
            var _a = node, outerHTML = _a.outerHTML, textContent = _a.textContent;
            var msoSpan = reMSOStylePrefix.test(outerHTML);
            var bulletSpan = reMSOListStyle.test(outerHTML);
            if (msoSpan && !bulletSpan && textContent) {
                removedNodes.push([node, true]);
            }
            else if (reMSOTagName.test(node.nodeName) || (msoSpan && !textContent) || bulletSpan) {
                removedNodes.push([node, false]);
            }
        }
    }
    removedNodes.forEach(function (_a) {
        var node = _a[0], isUnwrap = _a[1];
        if (isUnwrap) {
            unwrapNode(node);
        }
        else {
            removeNode$1(node);
        }
    });
    return para.innerHTML.trim();
}
function createListItemDataFromParagraph(para, index) {
    var styleAttr = para.getAttribute('style');
    if (styleAttr) {
        var _a = styleAttr.match(reMSOListStyle), listItemInfo = _a[1];
        var _b = listItemInfo.trim().split(' '), levelStr = _b[1];
        var level = parseInt(levelStr.replace('level', ''), 10);
        var unordered = reMSOListBullet.test(para.textContent || '');
        return {
            id: index,
            level: level,
            prev: null,
            parent: null,
            children: [],
            unordered: unordered,
            contents: getListItemContents(para),
        };
    }
    return null;
}
function addListItemDetailData(data, prevData) {
    if (prevData.level < data.level) {
        prevData.children.push(data);
        data.parent = prevData;
    }
    else {
        while (prevData) {
            if (prevData.level === data.level) {
                break;
            }
            prevData = prevData.parent;
        }
        if (prevData) {
            data.prev = prevData;
            data.parent = prevData.parent;
            if (data.parent) {
                data.parent.children.push(data);
            }
        }
    }
}
function createListData(paras) {
    var listData = [];
    paras.forEach(function (para, index) {
        var prevListItemData = listData[index - 1];
        var listItemData = createListItemDataFromParagraph(para, index);
        if (listItemData) {
            if (prevListItemData) {
                addListItemDetailData(listItemData, prevListItemData);
            }
            listData.push(listItemData);
        }
    });
    return listData;
}
function makeList(listData) {
    var listTagName = listData[0].unordered ? 'ul' : 'ol';
    var list = document.createElement(listTagName);
    listData.forEach(function (data) {
        var children = data.children, contents = data.contents;
        var listItem = document.createElement('li');
        listItem.innerHTML = contents;
        list.appendChild(listItem);
        if (children.length) {
            list.appendChild(makeList(children));
        }
    });
    return list;
}
function makeListFromParagraphs(paras) {
    var listData = createListData(paras);
    var rootChildren = listData.filter(function (_a) {
        var parent = _a.parent;
        return !parent;
    });
    return makeList(rootChildren);
}
function isMsoListParagraphEnd(node) {
    while (node) {
        if (isElemNode(node)) {
            break;
        }
        node = node.nextSibling;
    }
    return node ? !reMSOListClassName.test(node.className) : true;
}
function convertMsoParagraphsToList(html) {
    var container = document.createElement('div');
    container.innerHTML = html;
    var paras = [];
    var foundParas = findNodes(container, MSO_CLASS_NAME_LIST_PARA);
    foundParas.forEach(function (para) {
        var msoListParaEnd = isMsoListParagraphEnd(para.nextSibling);
        paras.push(para);
        if (msoListParaEnd) {
            var list = makeListFromParagraphs(paras);
            var nextSibling = para.nextSibling;
            if (nextSibling) {
                insertBeforeNode(list, nextSibling);
            }
            else {
                appendNodes(container, list);
            }
            paras = [];
        }
        removeNode$1(para);
    });
    // without `<p></p>`, the list string was parsed as a paragraph node and added
    var extraHTML = foundParas.length ? '<p></p>' : '';
    return "" + extraHTML + container.innerHTML;
}

var START_FRAGMENT_COMMENT = '<!--StartFragment-->';
var END_FRAGMENT_COMMENT = '<!--EndFragment-->';
function getContentBetweenFragmentComments(html) {
    var startFragmentIndex = html.indexOf(START_FRAGMENT_COMMENT);
    var endFragmentIndex = html.lastIndexOf(END_FRAGMENT_COMMENT);
    if (startFragmentIndex > -1 && endFragmentIndex > -1) {
        html = html.slice(startFragmentIndex + START_FRAGMENT_COMMENT.length, endFragmentIndex);
    }
    return html.replace(/<br[^>]*>/g, ALTERNATIVE_TAG_FOR_BR);
}
function convertMsoTableToCompletedTable(html) {
    // wrap with <tr> if html contains dangling <td> tags
    // dangling <td> tag is that tag does not have <tr> as parent node
    if (/<\/td>((?!<\/tr>)[\s\S])*$/i.test(html)) {
        html = "<tr>" + html + "</tr>";
    }
    // wrap with <table> if html contains dangling <tr> tags
    // dangling <tr> tag is that tag does not have <table> as parent node
    if (/<\/tr>((?!<\/table>)[\s\S])*$/i.test(html)) {
        html = "<table>" + html + "</table>";
    }
    return html;
}
function changePastedHTML(html) {
    html = getContentBetweenFragmentComments(html);
    html = convertMsoTableToCompletedTable(html);
    if (isFromMso(html)) {
        html = convertMsoParagraphsToList(html);
    }
    return html;
}
function getMaxColumnCount(rows) {
    var row = rows.reduce(function (prevRow, currentRow) {
        return prevRow.childCount > currentRow.childCount ? prevRow : currentRow;
    });
    return row.childCount;
}
function createCells(orgRow, maxColumnCount, cell) {
    var cells = [];
    var cellCount = orgRow.childCount;
    for (var colIdx = 0; colIdx < cellCount; colIdx += 1) {
        if (!orgRow.child(colIdx).attrs.extended) {
            var copiedCell = colIdx < cellCount
                ? cell.create(orgRow.child(colIdx).attrs, orgRow.child(colIdx).content)
                : cell.createAndFill();
            cells.push(copiedCell);
        }
    }
    return cells;
}
function copyTableHeadRow(orgRow, maxColumnCount, schema) {
    var _a = schema.nodes, tableRow = _a.tableRow, tableHeadCell = _a.tableHeadCell;
    var cells = createCells(orgRow, maxColumnCount, tableHeadCell);
    return tableRow.create(null, cells);
}
function copyTableBodyRow(orgRow, maxColumnCount, schema) {
    var _a = schema.nodes, tableRow = _a.tableRow, tableBodyCell = _a.tableBodyCell;
    var cells = createCells(orgRow, maxColumnCount, tableBodyCell);
    return tableRow.create(null, cells);
}
function creatTableBodyDummyRow(columnCount, schema) {
    var _a = schema.nodes, tableRow = _a.tableRow, tableBodyCell = _a.tableBodyCell;
    var cells = [];
    for (var columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
        var dummyCell = tableBodyCell.createAndFill();
        cells.push(dummyCell);
    }
    return tableRow.create({ dummyRowForPasting: true }, cells);
}
function createRowsFromPastingTable(tableContent) {
    var tableHeadRows = [];
    var tableBodyRows = [];
    if (tableContent.firstChild.type.name === 'tableHead') {
        var tableHead = tableContent.firstChild;
        tableHead.forEach(function (row) { return tableHeadRows.push(row); });
    }
    if (tableContent.lastChild.type.name === 'tableBody') {
        var tableBody = tableContent.lastChild;
        tableBody.forEach(function (row) { return tableBodyRows.push(row); });
    }
    return __spreadArray(__spreadArray([], tableHeadRows), tableBodyRows);
}
function createTableHead(tableHeadRow, maxColumnCount, schema) {
    var copiedRow = copyTableHeadRow(tableHeadRow, maxColumnCount, schema);
    return schema.nodes.tableHead.create(null, copiedRow);
}
function createTableBody(tableBodyRows, maxColumnCount, schema) {
    var copiedRows = tableBodyRows.map(function (tableBodyRow) {
        return copyTableBodyRow(tableBodyRow, maxColumnCount, schema);
    });
    if (!tableBodyRows.length) {
        var dummyTableRow = creatTableBodyDummyRow(maxColumnCount, schema);
        copiedRows.push(dummyTableRow);
    }
    return schema.nodes.tableBody.create(null, copiedRows);
}
function createTableFromPastingTable(rows, schema, startFromBody, isInTable) {
    var columnCount = getMaxColumnCount(rows);
    if (startFromBody && isInTable) {
        return schema.nodes.table.create(null, [createTableBody(rows, columnCount, schema)]);
    }
    var tableHeadRow = rows[0];
    var tableBodyRows = rows.slice(1);
    var nodes = [createTableHead(tableHeadRow, columnCount, schema)];
    if (tableBodyRows.length) {
        nodes.push(createTableBody(tableBodyRows, columnCount, schema));
    }
    return schema.nodes.table.create(null, nodes);
}
function changePastedSlice(slice, schema, isInTable) {
    var nodes = [];
    var content = slice.content, openStart = slice.openStart, openEnd = slice.openEnd;
    content.forEach(function (node) {
        if (node.type.name === 'table') {
            var tableContent = getTableContentFromSlice(new Slice(Fragment.from(node), 0, 0));
            if (tableContent) {
                var rows = createRowsFromPastingTable(tableContent);
                var startFromBody = tableContent.firstChild.type.name === 'tableBody';
                var table = createTableFromPastingTable(rows, schema, startFromBody, isInTable);
                nodes.push(table);
            }
        }
        else {
            nodes.push(node);
        }
    });
    return new Slice(Fragment.from(nodes), openStart, openEnd);
}

var DUMMY_CELL_SIZE = 4;
var TR_NODES_SIZE = 2;
function getDummyCellSize(dummyCellCount) {
    return dummyCellCount * DUMMY_CELL_SIZE;
}
function createPastingCells(tableContent, curSelectionInfo, schema) {
    var pastingRows = [];
    var pastingTableRows = createRowsFromPastingTable(tableContent);
    var columnCount = pastingTableRows[0].childCount;
    var rowCount = pastingTableRows.length;
    var startToTableHead = curSelectionInfo.startRowIdx === 0;
    var slicedRows = pastingTableRows.slice(0, rowCount);
    if (startToTableHead) {
        var tableHeadRow = slicedRows.shift();
        if (tableHeadRow) {
            var content = copyTableHeadRow(tableHeadRow, columnCount, schema).content;
            pastingRows.push(content);
        }
    }
    slicedRows.forEach(function (tableBodyRow) {
        if (!tableBodyRow.attrs.dummyRowForPasting) {
            var content = copyTableBodyRow(tableBodyRow, columnCount, schema).content;
            pastingRows.push(content);
        }
    });
    return pastingRows;
}
function getPastingRangeInfo(map, _a, pastingCells) {
    var startRowIdx = _a.startRowIdx, startColIdx = _a.startColIdx;
    var pastingRowCount = pastingCells.length;
    var pastingColumnCount = 0;
    var _loop_1 = function (i) {
        var columnCount = pastingCells[i].childCount;
        pastingCells[i].forEach(function (_a) {
            var attrs = _a.attrs;
            var colspan = attrs.colspan;
            if (colspan > 1) {
                columnCount += colspan - 1;
            }
        });
        pastingColumnCount = Math.max(pastingColumnCount, columnCount);
    };
    for (var i = 0; i < pastingRowCount; i += 1) {
        _loop_1(i);
    }
    var endRowIdx = startRowIdx + pastingRowCount - 1;
    var endColIdx = startColIdx + pastingColumnCount - 1;
    var addedRowCount = Math.max(endRowIdx + 1 - map.totalRowCount, 0);
    var addedColumnCount = Math.max(endColIdx + 1 - map.totalColumnCount, 0);
    return {
        startRowIdx: startRowIdx,
        startColIdx: startColIdx,
        endRowIdx: endRowIdx,
        endColIdx: endColIdx,
        addedRowCount: addedRowCount,
        addedColumnCount: addedColumnCount,
    };
}
function addReplacedOffsets(_a, cellsOffsets) {
    var startRowIdx = _a.startRowIdx, startColIdx = _a.startColIdx, endRowIdx = _a.endRowIdx, endColIdx = _a.endColIdx, addedRowCount = _a.addedRowCount, addedColumnCount = _a.addedColumnCount;
    for (var rowIdx = startRowIdx; rowIdx <= endRowIdx - addedRowCount; rowIdx += 1) {
        cellsOffsets.push({
            rowIdx: rowIdx,
            startColIdx: startColIdx,
            endColIdx: endColIdx - addedColumnCount,
        });
    }
}
function expandColumns(tr, schema, map, _a, cellsOffsets) {
    var startRowIdx = _a.startRowIdx, startColIdx = _a.startColIdx, endRowIdx = _a.endRowIdx, endColIdx = _a.endColIdx, addedRowCount = _a.addedRowCount, addedColumnCount = _a.addedColumnCount;
    var totalRowCount = map.totalRowCount;
    var index = 0;
    for (var rowIdx = 0; rowIdx < totalRowCount; rowIdx += 1) {
        var _b = map.getCellInfo(rowIdx, endColIdx - addedColumnCount), offset = _b.offset, nodeSize = _b.nodeSize;
        var insertOffset = tr.mapping.map(offset + nodeSize);
        var cells = createDummyCells(addedColumnCount, rowIdx, schema);
        tr.insert(insertOffset, cells);
        if (rowIdx >= startRowIdx && rowIdx <= endRowIdx - addedRowCount) {
            var cellInfo = map.getCellInfo(rowIdx, endColIdx - addedColumnCount);
            var startCellOffset = tr.mapping.map(cellInfo.offset);
            var endCellOffset = insertOffset + getDummyCellSize(addedColumnCount);
            cellsOffsets[index] = {
                rowIdx: rowIdx,
                startColIdx: startColIdx,
                endColIdx: endColIdx,
                dummyOffsets: [startCellOffset, endCellOffset],
            };
            index += 1;
        }
    }
}
function expandRows(tr, schema, map, _a, cellsOffsets) {
    var addedRowCount = _a.addedRowCount, addedColumnCount = _a.addedColumnCount, startColIdx = _a.startColIdx, endColIdx = _a.endColIdx;
    var mapStart = tr.mapping.maps.length;
    var tableEndPos = map.tableEndOffset - 2;
    var rows = createTableBodyRows(addedRowCount, map.totalColumnCount + addedColumnCount, schema);
    var startOffset = tableEndPos;
    tr.insert(tr.mapping.slice(mapStart).map(startOffset), rows);
    for (var rowIndex = 0; rowIndex < addedRowCount; rowIndex += 1) {
        var startCellOffset = startOffset + getDummyCellSize(startColIdx) + 1;
        var endCellOffset = startOffset + getDummyCellSize(endColIdx + 1) + 1;
        var nextCellOffset = startOffset + getDummyCellSize(map.totalColumnCount + addedColumnCount) + TR_NODES_SIZE;
        cellsOffsets.push({
            rowIdx: rowIndex + map.totalRowCount,
            startColIdx: startColIdx,
            endColIdx: endColIdx,
            dummyOffsets: [startCellOffset, endCellOffset],
        });
        startOffset = nextCellOffset;
    }
}
function replaceCells(tr, pastingRows, cellsOffsets, map) {
    var mapStart = tr.mapping.maps.length;
    cellsOffsets.forEach(function (offsets, index) {
        var rowIdx = offsets.rowIdx, startColIdx = offsets.startColIdx, endColIdx = offsets.endColIdx, dummyOffsets = offsets.dummyOffsets;
        var mapping = tr.mapping.slice(mapStart);
        var cells = new Slice(pastingRows[index], 0, 0);
        var from = dummyOffsets ? dummyOffsets[0] : map.getCellStartOffset(rowIdx, startColIdx);
        var to = dummyOffsets ? dummyOffsets[1] : map.getCellEndOffset(rowIdx, endColIdx);
        tr.replace(mapping.map(from), mapping.map(to), cells);
    });
}
function pasteToTable(view, slice) {
    var _a = view.state, selection = _a.selection, schema = _a.schema, tr = _a.tr;
    var _b = getResolvedSelection(selection), anchor = _b.anchor, head = _b.head;
    if (anchor && head) {
        var tableContent = getTableContentFromSlice(slice);
        if (!tableContent) {
            return false;
        }
        var map = TableOffsetMap.create(anchor);
        var curSelectionInfo = map.getRectOffsets(anchor, head);
        var pastingCells = createPastingCells(tableContent, curSelectionInfo, schema);
        var pastingInfo = getPastingRangeInfo(map, curSelectionInfo, pastingCells);
        var cellsOffsets = [];
        // @TODO: unmerge the span and paste the cell
        if (canMerge(map, pastingInfo)) {
            addReplacedOffsets(pastingInfo, cellsOffsets);
            if (pastingInfo.addedColumnCount) {
                expandColumns(tr, schema, map, pastingInfo, cellsOffsets);
            }
            if (pastingInfo.addedRowCount) {
                expandRows(tr, schema, map, pastingInfo, cellsOffsets);
            }
            replaceCells(tr, pastingCells, cellsOffsets, map);
            view.dispatch(tr);
            setSelection(view, cellsOffsets, map.getCellInfo(0, 0).offset);
        }
        return true;
    }
    return false;
}
function setSelection(view, cellsOffsets, pos) {
    var _a = view.state, tr = _a.tr, doc = _a.doc;
    // get changed cell offsets
    var map = TableOffsetMap.create(doc.resolve(pos));
    // eslint-disable-next-line prefer-destructuring
    var _b = cellsOffsets[0], startRowIdx = _b.rowIdx, startColIdx = _b.startColIdx;
    var _c = last(cellsOffsets), endRowIdx = _c.rowIdx, endColIdx = _c.endColIdx;
    var startOffset = map.getCellInfo(startRowIdx, startColIdx).offset;
    var endOffset = map.getCellInfo(endRowIdx, endColIdx).offset;
    view.dispatch(tr.setSelection(new CellSelection(doc.resolve(startOffset), doc.resolve(endOffset))));
}
function canMerge(map, pastingInfo) {
    var ranges = map.getSpannedOffsets(pastingInfo);
    var _a = getRowAndColumnCount(ranges), rowCount = _a.rowCount, columnCount = _a.columnCount;
    var _b = getRowAndColumnCount(pastingInfo), pastingRowCount = _b.rowCount, pastingColumnCount = _b.columnCount;
    return rowCount === pastingRowCount && columnCount === pastingColumnCount;
}

var Doc = /** @class */ (function (_super) {
    __extends(Doc, _super);
    function Doc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Doc.prototype, "name", {
        get: function () {
            return 'doc';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Doc.prototype, "schema", {
        get: function () {
            return {
                content: 'block+',
            };
        },
        enumerable: false,
        configurable: true
    });
    return Doc;
}(Node$1));

var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Paragraph.prototype, "name", {
        get: function () {
            return 'paragraph';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paragraph.prototype, "schema", {
        get: function () {
            return {
                content: 'inline*',
                group: 'block',
                attrs: __assign({}, getDefaultCustomAttrs()),
                parseDOM: [{ tag: 'p' }],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['p', getCustomAttrs(attrs), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return Paragraph;
}(Node$1));

var reSoftTabLen = /\s{1,4}$/;
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Text.prototype, "name", {
        get: function () {
            return 'text';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "schema", {
        get: function () {
            return {
                group: 'inline',
            };
        },
        enumerable: false,
        configurable: true
    });
    Text.prototype.addSpaces = function () {
        return function (_a, dispatch) {
            var selection = _a.selection, tr = _a.tr;
            var $from = selection.$from, $to = selection.$to;
            var range = $from.blockRange($to);
            if (range && !isInListNode($from) && !isInTableNode($from)) {
                dispatch(tr.insertText('    ', $from.pos, $to.pos));
                return true;
            }
            return false;
        };
    };
    Text.prototype.removeSpaces = function () {
        return function (_a, dispatch) {
            var selection = _a.selection, tr = _a.tr;
            var $from = selection.$from, $to = selection.$to, from = selection.from;
            var range = $from.blockRange($to);
            if (range && !isInListNode($from) && !isInTableNode($from)) {
                var nodeBefore = $from.nodeBefore;
                if (nodeBefore && nodeBefore.isText) {
                    var text = nodeBefore.text;
                    var removedSpaceText = text.replace(reSoftTabLen, '');
                    var spaces = text.length - removedSpaceText.length;
                    dispatch(tr.delete(from - spaces, from));
                    return true;
                }
            }
            return false;
        };
    };
    Text.prototype.keymaps = function () {
        return {
            Tab: this.addSpaces(),
            'Shift-Tab': this.removeSpaces(),
        };
    };
    return Text;
}(Node$1));

var Heading = /** @class */ (function (_super) {
    __extends(Heading, _super);
    function Heading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Heading.prototype, "name", {
        get: function () {
            return 'heading';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heading.prototype, "levels", {
        get: function () {
            return [1, 2, 3, 4, 5, 6];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Heading.prototype, "schema", {
        get: function () {
            var parseDOM = this.levels.map(function (level) {
                return {
                    tag: "h" + level,
                    getAttrs: function (dom) {
                        var rawHTML = dom.getAttribute('data-raw-html');
                        return __assign({ level: level }, (rawHTML && { rawHTML: rawHTML }));
                    },
                };
            });
            return {
                attrs: __assign({ level: { default: 1 }, headingType: { default: 'atx' }, rawHTML: { default: null } }, getDefaultCustomAttrs()),
                content: 'inline*',
                group: 'block',
                defining: true,
                parseDOM: parseDOM,
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ["h" + attrs.level, getCustomAttrs(attrs), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Heading.prototype.commands = function () {
        return function (payload) { return function (state, dispatch) {
            var nodeType = state.schema.nodes[payload.level ? 'heading' : 'paragraph'];
            return setBlockType(nodeType, payload)(state, dispatch);
        }; };
    };
    return Heading;
}(Node$1));

var CodeBlock = /** @class */ (function (_super) {
    __extends(CodeBlock, _super);
    function CodeBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CodeBlock.prototype, "name", {
        get: function () {
            return 'codeBlock';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodeBlock.prototype, "schema", {
        get: function () {
            return {
                content: 'text*',
                group: 'block',
                attrs: __assign({ language: { default: null }, rawHTML: { default: null } }, getDefaultCustomAttrs()),
                code: true,
                defining: true,
                marks: '',
                parseDOM: [
                    {
                        tag: 'pre',
                        preserveWhitespace: 'full',
                        getAttrs: function (dom) {
                            var rawHTML = dom.getAttribute('data-raw-html');
                            var child = dom.firstElementChild;
                            return __assign({ language: (child === null || child === void 0 ? void 0 : child.getAttribute('data-language')) || null }, (rawHTML && { rawHTML: rawHTML }));
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return [
                        attrs.rawHTML || 'pre',
                        ['code', __assign({ 'data-language': attrs.language }, getCustomAttrs(attrs)), 0],
                    ];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    CodeBlock.prototype.commands = function () {
        return function () { return function (state, dispatch) { return setBlockType(state.schema.nodes.codeBlock)(state, dispatch); }; };
    };
    CodeBlock.prototype.moveCursor = function (direction) {
        var _this = this;
        return function (state, dispatch) {
            var tr = state.tr, doc = state.doc, schema = state.schema;
            var $from = state.selection.$from;
            var view = _this.context.view;
            if (view.endOfTextblock(direction) && $from.node().type.name === 'codeBlock') {
                var lines = $from.parent.textContent.split('\n');
                var offset = direction === 'up' ? $from.start() : $from.end();
                var range = direction === 'up'
                    ? [offset, lines[0].length + offset]
                    : [offset - last(lines).length, offset];
                var pos = doc.resolve(direction === 'up' ? $from.before() : $from.after());
                var node = direction === 'up' ? pos.nodeBefore : pos.nodeAfter;
                if (between($from.pos, range[0], range[1]) && !node) {
                    var newTr = addParagraph(tr, pos, schema);
                    if (newTr) {
                        dispatch(newTr);
                        return true;
                    }
                }
            }
            return false;
        };
    };
    CodeBlock.prototype.keymaps = function () {
        var codeCommand = this.commands()();
        return {
            'Shift-Mod-p': codeCommand,
            'Shift-Mod-P': codeCommand,
            ArrowUp: this.moveCursor('up'),
            ArrowDown: this.moveCursor('down'),
        };
    };
    return CodeBlock;
}(Node$1));

var BulletList = /** @class */ (function (_super) {
    __extends(BulletList, _super);
    function BulletList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BulletList.prototype, "name", {
        get: function () {
            return 'bulletList';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BulletList.prototype, "schema", {
        get: function () {
            return {
                content: 'listItem+',
                group: 'block',
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: [createDOMInfoParsedRawHTML('ul')],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['ul', getCustomAttrs(attrs), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    BulletList.prototype.changeList = function () {
        return function (state, dispatch) { return changeList(state.schema.nodes.bulletList)(state, dispatch); };
    };
    BulletList.prototype.commands = function () {
        return {
            bulletList: this.changeList,
            taskList: toggleTask,
        };
    };
    BulletList.prototype.keymaps = function () {
        var bulletListCommand = this.changeList();
        var _a = getWwCommands(), indent = _a.indent, outdent = _a.outdent;
        return {
            'Mod-u': bulletListCommand,
            'Mod-U': bulletListCommand,
            Tab: indent(),
            'Shift-Tab': outdent(),
        };
    };
    return BulletList;
}(Node$1));

var OrderedList = /** @class */ (function (_super) {
    __extends(OrderedList, _super);
    function OrderedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OrderedList.prototype, "name", {
        get: function () {
            return 'orderedList';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderedList.prototype, "schema", {
        get: function () {
            return {
                content: 'listItem+',
                group: 'block',
                attrs: __assign({ order: { default: 1 }, rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: [
                    {
                        tag: 'ol',
                        getAttrs: function (dom) {
                            var start = dom.getAttribute('start');
                            var rawHTML = dom.getAttribute('data-raw-html');
                            return __assign({ order: dom.hasAttribute('start') ? Number(start) : 1 }, (rawHTML && { rawHTML: rawHTML }));
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return [
                        attrs.rawHTML || 'ol',
                        __assign({ start: attrs.order === 1 ? null : attrs.order }, getCustomAttrs(attrs)),
                        0,
                    ];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    OrderedList.prototype.commands = function () {
        return function () { return function (state, dispatch) { return changeList(state.schema.nodes.orderedList)(state, dispatch); }; };
    };
    OrderedList.prototype.keymaps = function () {
        var orderedListCommand = this.commands()();
        var _a = getWwCommands(), indent = _a.indent, outdent = _a.outdent;
        return {
            'Mod-o': orderedListCommand,
            'Mod-O': orderedListCommand,
            Tab: indent(),
            'Shift-Tab': outdent(),
        };
    };
    return OrderedList;
}(Node$1));

var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListItem.prototype, "name", {
        get: function () {
            return 'listItem';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "schema", {
        get: function () {
            return {
                content: 'paragraph block*',
                selectable: false,
                attrs: {
                    task: { default: false },
                    checked: { default: false },
                    rawHTML: { default: null },
                },
                defining: true,
                parseDOM: [
                    {
                        tag: 'li',
                        getAttrs: function (dom) {
                            var rawHTML = dom.getAttribute('data-raw-html');
                            return __assign({ task: dom.hasAttribute('data-task'), checked: dom.hasAttribute('data-task-checked') }, (rawHTML && { rawHTML: rawHTML }));
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    var task = attrs.task, checked = attrs.checked;
                    if (!task) {
                        return [attrs.rawHTML || 'li', 0];
                    }
                    var classNames = ['task-list-item'];
                    if (checked) {
                        classNames.push('checked');
                    }
                    return [
                        attrs.rawHTML || 'li',
                        __assign({ class: classNames.join(' '), 'data-task': task }, (checked && { 'data-task-checked': checked })),
                        0,
                    ];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.liftToPrevListItem = function () {
        return function (state, dispatch) {
            var selection = state.selection, tr = state.tr, schema = state.schema;
            var $from = selection.$from, empty = selection.empty;
            var listItem = schema.nodes.listItem;
            var parent = $from.parent;
            var listItemParent = $from.node(-1);
            if (empty && !parent.childCount && listItemParent.type === listItem) {
                // move to previous sibling list item when the current list item is not top list item
                if ($from.index(-2) >= 1) {
                    // should subtract '1' for considering tag length(<li>)
                    tr.delete($from.start(-1) - 1, $from.end(-1));
                    dispatch(tr);
                    return true;
                }
                var grandParentListItem = $from.node(-3);
                // move to parent list item when the current list item is top list item
                if (grandParentListItem.type === listItem) {
                    // should subtract '1' for considering tag length(<ul>)
                    tr.delete($from.start(-2) - 1, $from.end(-1));
                    dispatch(tr);
                    return true;
                }
            }
            return false;
        };
    };
    ListItem.prototype.keymaps = function () {
        var split = function (state, dispatch) {
            return splitListItem(state.schema.nodes.listItem)(state, dispatch);
        };
        return {
            Backspace: this.liftToPrevListItem(),
            Enter: split,
        };
    };
    return ListItem;
}(Node$1));

var BlockQuote = /** @class */ (function (_super) {
    __extends(BlockQuote, _super);
    function BlockQuote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BlockQuote.prototype, "name", {
        get: function () {
            return 'blockQuote';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlockQuote.prototype, "schema", {
        get: function () {
            return {
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                content: 'block+',
                group: 'block',
                parseDOM: [createDOMInfoParsedRawHTML('blockquote')],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['blockquote', getCustomAttrs(attrs), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    BlockQuote.prototype.commands = function () {
        return function () { return function (state, dispatch) { return wrapIn(state.schema.nodes.blockQuote)(state, dispatch); }; };
    };
    BlockQuote.prototype.keymaps = function () {
        var blockQutoeCommand = this.commands()();
        return {
            'Alt-q': blockQutoeCommand,
            'Alt-Q': blockQutoeCommand,
        };
    };
    return BlockQuote;
}(Node$1));

var cellOffsetFnMap = {
    left: getLeftCellOffset,
    right: getRightCellOffset,
    up: getUpCellOffset,
    down: getDownCellOffset,
};
function isInFirstListItem(pos, doc, _a) {
    var paraDepth = _a[0], listDepth = _a[1];
    var listItemNode = doc.resolve(pos.before(paraDepth - 1));
    return listDepth === paraDepth && !listItemNode.nodeBefore;
}
function isInLastListItem(pos) {
    var _a;
    var depth = pos.depth;
    var parentNode;
    while (depth) {
        parentNode = pos.node(depth);
        if (parentNode.type.name === 'tableBodyCell') {
            break;
        }
        if (parentNode.type.name === 'listItem') {
            var grandParent = pos.node(depth - 1);
            var lastListItem = grandParent.lastChild === parentNode;
            var hasChildren = ((_a = parentNode.lastChild) === null || _a === void 0 ? void 0 : _a.type.name) !== 'paragraph';
            if (!lastListItem) {
                return false;
            }
            return !hasChildren;
        }
        depth -= 1;
    }
    return false;
}
function canMoveToBeforeCell(direction, _a, from, doc, inList) {
    var paraDepth = _a[0], listDepth = _a[1], curDepth = _a[2];
    if (direction === "left" /* LEFT */ || direction === "up" /* UP */) {
        if (inList && !isInFirstListItem(from, doc, [paraDepth, listDepth])) {
            return false;
        }
        var endOffset = from.before(curDepth);
        var nodeBefore = doc.resolve(endOffset).nodeBefore;
        if (nodeBefore) {
            return false;
        }
    }
    return true;
}
function canMoveToAfterCell(direction, curDepth, from, doc, inList) {
    if (direction === "right" /* RIGHT */ || direction === "down" /* DOWN */) {
        if (inList && !isInLastListItem(from)) {
            return false;
        }
        var endOffset = from.after(curDepth);
        var nodeAfter = doc.resolve(endOffset).nodeAfter;
        if (nodeAfter) {
            return false;
        }
    }
    return true;
}
function canMoveBetweenCells(direction, _a, from, doc) {
    var cellDepth = _a[0], paraDepth = _a[1];
    var listDepth = cellDepth + 3; // 3 is position of <ul><li><p>
    var inList = paraDepth >= listDepth;
    var curDepth = inList ? cellDepth + 1 : paraDepth;
    var moveBeforeCell = canMoveToBeforeCell(direction, [paraDepth, listDepth, curDepth], from, doc, inList);
    var moveAfterCell = canMoveToAfterCell(direction, curDepth, from, doc, inList);
    return moveBeforeCell && moveAfterCell;
}
function canBeOutOfTable(direction, map, _a) {
    var rowIdx = _a[0], colIdx = _a[1];
    var rowspanInfo = map.getRowspanStartInfo(rowIdx, colIdx);
    var inFirstRow = direction === "up" /* UP */ && rowIdx === 0;
    var inLastRow = direction === "down" /* DOWN */ &&
        ((rowspanInfo === null || rowspanInfo === void 0 ? void 0 : rowspanInfo.count) > 1 ? rowIdx + rowspanInfo.count - 1 : rowIdx) === map.totalRowCount - 1;
    return inFirstRow || inLastRow;
}
function addParagraphBeforeTable(tr, map, schema) {
    var tableStartPos = tr.doc.resolve(map.tableStartOffset - 1);
    if (!tableStartPos.nodeBefore) {
        return addParagraph(tr, tableStartPos, schema);
    }
    return tr.setSelection(Selection.near(tableStartPos, -1));
}
function addParagraphAfterTable(tr, map, schema, forcedAddtion) {
    if (forcedAddtion === void 0) { forcedAddtion = false; }
    var tableEndPos = tr.doc.resolve(map.tableEndOffset);
    if (forcedAddtion || !tableEndPos.nodeAfter) {
        return addParagraph(tr, tableEndPos, schema);
    }
    return tr.setSelection(Selection.near(tableEndPos, 1));
}
function getRightCellOffset(_a, map) {
    var rowIdx = _a[0], colIdx = _a[1];
    var totalRowCount = map.totalRowCount, totalColumnCount = map.totalColumnCount;
    var lastCellInRow = colIdx === totalColumnCount - 1;
    var lastCellInTable = rowIdx === totalRowCount - 1 && lastCellInRow;
    if (!lastCellInTable) {
        var nextColIdx = colIdx + 1;
        var colspanInfo = map.getColspanStartInfo(rowIdx, colIdx);
        if ((colspanInfo === null || colspanInfo === void 0 ? void 0 : colspanInfo.count) > 1) {
            nextColIdx += colspanInfo.count - 1;
        }
        if (lastCellInRow || nextColIdx === totalColumnCount) {
            rowIdx += 1;
            nextColIdx = 0;
        }
        var offset = map.getCellInfo(rowIdx, nextColIdx).offset;
        return offset + 2;
    }
    return null;
}
function getLeftCellOffset(_a, map) {
    var rowIdx = _a[0], colIdx = _a[1];
    var totalColumnCount = map.totalColumnCount;
    var firstCellInRow = colIdx === 0;
    var firstCellInTable = rowIdx === 0 && firstCellInRow;
    if (!firstCellInTable) {
        colIdx -= 1;
        if (firstCellInRow) {
            rowIdx -= 1;
            colIdx = totalColumnCount - 1;
        }
        var _b = map.getCellInfo(rowIdx, colIdx), offset = _b.offset, nodeSize = _b.nodeSize;
        return offset + nodeSize - 2;
    }
    return null;
}
function getUpCellOffset(_a, map) {
    var rowIdx = _a[0], colIdx = _a[1];
    if (rowIdx > 0) {
        var _b = map.getCellInfo(rowIdx - 1, colIdx), offset = _b.offset, nodeSize = _b.nodeSize;
        return offset + nodeSize - 2;
    }
    return null;
}
function getDownCellOffset(_a, map) {
    var rowIdx = _a[0], colIdx = _a[1];
    var totalRowCount = map.totalRowCount;
    if (rowIdx < totalRowCount - 1) {
        var nextRowIdx = rowIdx + 1;
        var rowspanInfo = map.getRowspanStartInfo(rowIdx, colIdx);
        if ((rowspanInfo === null || rowspanInfo === void 0 ? void 0 : rowspanInfo.count) > 1) {
            nextRowIdx += rowspanInfo.count - 1;
        }
        var offset = map.getCellInfo(nextRowIdx, colIdx).offset;
        return offset + 2;
    }
    return null;
}
function moveToCell(direction, tr, cellIndex, map) {
    var cellOffsetFn = cellOffsetFnMap[direction];
    var offset = cellOffsetFn(cellIndex, map);
    if (offset) {
        var dir = direction === "right" /* RIGHT */ || direction === "down" /* DOWN */ ? 1 : -1;
        return tr.setSelection(Selection.near(tr.doc.resolve(offset), dir));
    }
    return null;
}
function canSelectTableNode(direction, map, _a) {
    var rowIdx = _a[0], colIdx = _a[1];
    if (direction === "up" /* UP */ || direction === "down" /* DOWN */) {
        return false;
    }
    var tableStartOffset = map.tableStartOffset, tableEndOffset = map.tableEndOffset;
    var _b = map.getCellInfo(rowIdx, colIdx), offset = _b.offset, nodeSize = _b.nodeSize;
    var pos = direction === "left" /* LEFT */ ? tableStartOffset : tableEndOffset;
    var curPos = direction === "left" /* LEFT */ ? offset - 2 : offset + nodeSize + 3;
    return pos === curPos;
}
function selectNode(tr, pos, depth) {
    var tablePos = tr.doc.resolve(pos.before(depth - 3));
    return tr.setSelection(new NodeSelection(tablePos));
}

function getTargetRowInfo(direction, map, selectionInfo) {
    var targetRowIdx;
    var insertColIdx;
    var nodeSize;
    if (direction === "up" /* UP */) {
        targetRowIdx = selectionInfo.startRowIdx;
        insertColIdx = 0;
        nodeSize = -1;
    }
    else {
        targetRowIdx = selectionInfo.endRowIdx;
        insertColIdx = map.totalColumnCount - 1;
        nodeSize = map.getCellInfo(targetRowIdx, insertColIdx).nodeSize + 1;
    }
    return { targetRowIdx: targetRowIdx, insertColIdx: insertColIdx, nodeSize: nodeSize };
}
function getRowRanges(map, rowIdx, totalColumnCount) {
    var startOffset = map.getCellInfo(rowIdx, 0).offset;
    var _a = map.getCellInfo(rowIdx, totalColumnCount - 1), offset = _a.offset, nodeSize = _a.nodeSize;
    return { from: startOffset, to: offset + nodeSize };
}
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Table.prototype, "name", {
        get: function () {
            return 'table';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "schema", {
        get: function () {
            return {
                content: 'tableHead{1} tableBody{1}',
                group: 'block',
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: [createDOMInfoParsedRawHTML('table')],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['table', getCustomAttrs(attrs), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.addTable = function () {
        return function (payload) {
            if (payload === void 0) { payload = { rowCount: 2, columnCount: 1, data: [] }; }
            return function (state, dispatch) {
                var rowCount = payload.rowCount, columnCount = payload.columnCount, data = payload.data;
                var schema = state.schema, selection = state.selection, tr = state.tr;
                var from = selection.from, to = selection.to, $from = selection.$from;
                var collapsed = from === to;
                if (collapsed && !isInTableNode($from)) {
                    var _a = schema.nodes, tableHead = _a.tableHead, tableBody = _a.tableBody;
                    var theadData = data === null || data === void 0 ? void 0 : data.slice(0, columnCount);
                    var tbodyData = data === null || data === void 0 ? void 0 : data.slice(columnCount, data.length);
                    var tableHeadRow = createTableHeadRow(columnCount, schema, theadData);
                    var tableBodyRows = createTableBodyRows(rowCount - 1, columnCount, schema, tbodyData);
                    var table = schema.nodes.table.create(null, [
                        tableHead.create(null, tableHeadRow),
                        tableBody.create(null, tableBodyRows),
                    ]);
                    dispatch(tr.replaceSelectionWith(table));
                    return true;
                }
                return false;
            };
        };
    };
    Table.prototype.removeTable = function () {
        return function () { return function (state, dispatch) {
            var selection = state.selection, tr = state.tr;
            var map = TableOffsetMap.create(selection.$anchor);
            if (map) {
                var tableStartOffset = map.tableStartOffset, tableEndOffset = map.tableEndOffset;
                var startOffset = tableStartOffset - 1;
                var cursorPos = createTextSelection(tr.delete(startOffset, tableEndOffset), startOffset);
                dispatch(tr.setSelection(cursorPos));
                return true;
            }
            return false;
        }; };
    };
    Table.prototype.addColumn = function (direction) {
        return function () { return function (state, dispatch) {
            var selection = state.selection, tr = state.tr, schema = state.schema;
            var _a = getResolvedSelection(selection), anchor = _a.anchor, head = _a.head;
            if (anchor && head) {
                var map = TableOffsetMap.create(anchor);
                var selectionInfo = map.getRectOffsets(anchor, head);
                var targetColIdx = direction === "left" /* LEFT */ ? selectionInfo.startColIdx : selectionInfo.endColIdx + 1;
                var columnCount = getRowAndColumnCount(selectionInfo).columnCount;
                var totalRowCount = map.totalRowCount;
                for (var rowIdx = 0; rowIdx < totalRowCount; rowIdx += 1) {
                    var cells = createDummyCells(columnCount, rowIdx, schema);
                    tr.insert(tr.mapping.map(map.posAt(rowIdx, targetColIdx)), cells);
                }
                dispatch(tr);
                return true;
            }
            return false;
        }; };
    };
    Table.prototype.removeColumn = function () {
        return function () { return function (state, dispatch) {
            var selection = state.selection, tr = state.tr;
            var _a = getResolvedSelection(selection), anchor = _a.anchor, head = _a.head;
            if (anchor && head) {
                var map = TableOffsetMap.create(anchor);
                var selectionInfo = map.getRectOffsets(anchor, head);
                var totalColumnCount = map.totalColumnCount, totalRowCount = map.totalRowCount;
                var columnCount = getRowAndColumnCount(selectionInfo).columnCount;
                var selectedAllColumn = columnCount === totalColumnCount;
                if (selectedAllColumn) {
                    return false;
                }
                var startColIdx = selectionInfo.startColIdx, endColIdx = selectionInfo.endColIdx;
                var mapStart = tr.mapping.maps.length;
                for (var rowIdx = 0; rowIdx < totalRowCount; rowIdx += 1) {
                    for (var colIdx = endColIdx; colIdx >= startColIdx; colIdx -= 1) {
                        var _b = map.getCellInfo(rowIdx, colIdx), offset = _b.offset, nodeSize = _b.nodeSize;
                        var from = tr.mapping.slice(mapStart).map(offset);
                        var to = from + nodeSize;
                        tr.delete(from, to);
                    }
                }
                dispatch(tr);
                return true;
            }
            return false;
        }; };
    };
    Table.prototype.addRow = function (direction) {
        return function () { return function (state, dispatch) {
            var selection = state.selection, schema = state.schema, tr = state.tr;
            var _a = getResolvedSelection(selection), anchor = _a.anchor, head = _a.head;
            if (anchor && head) {
                var map = TableOffsetMap.create(anchor);
                var totalColumnCount = map.totalColumnCount;
                var selectionInfo = map.getRectOffsets(anchor, head);
                var rowCount = getRowAndColumnCount(selectionInfo).rowCount;
                var _b = getTargetRowInfo(direction, map, selectionInfo), targetRowIdx = _b.targetRowIdx, insertColIdx = _b.insertColIdx, nodeSize = _b.nodeSize;
                var selectedThead = targetRowIdx === 0;
                if (!selectedThead) {
                    var rows = [];
                    var from = tr.mapping.map(map.posAt(targetRowIdx, insertColIdx)) + nodeSize;
                    var cells = [];
                    for (var colIdx = 0; colIdx < totalColumnCount; colIdx += 1) {
                        cells = cells.concat(createDummyCells(1, targetRowIdx, schema));
                    }
                    for (var i = 0; i < rowCount; i += 1) {
                        rows.push(schema.nodes.tableRow.create(null, cells));
                    }
                    dispatch(tr.insert(from, rows));
                    return true;
                }
            }
            return false;
        }; };
    };
    Table.prototype.removeRow = function () {
        return function () { return function (state, dispatch) {
            var selection = state.selection, tr = state.tr;
            var _a = getResolvedSelection(selection), anchor = _a.anchor, head = _a.head;
            if (anchor && head) {
                var map = TableOffsetMap.create(anchor);
                var totalRowCount = map.totalRowCount, totalColumnCount = map.totalColumnCount;
                var selectionInfo = map.getRectOffsets(anchor, head);
                var rowCount = getRowAndColumnCount(selectionInfo).rowCount;
                var startRowIdx = selectionInfo.startRowIdx, endRowIdx = selectionInfo.endRowIdx;
                var selectedThead = startRowIdx === 0;
                var selectedAllTbodyRow = rowCount === totalRowCount - 1;
                if (selectedAllTbodyRow || selectedThead) {
                    return false;
                }
                for (var rowIdx = endRowIdx; rowIdx >= startRowIdx; rowIdx -= 1) {
                    var _b = getRowRanges(map, rowIdx, totalColumnCount), from = _b.from, to = _b.to;
                    // delete table row
                    tr.delete(from - 1, to + 1);
                }
                dispatch(tr);
                return true;
            }
            return false;
        }; };
    };
    Table.prototype.alignColumn = function () {
        return function (payload) {
            if (payload === void 0) { payload = { align: 'center' }; }
            return function (state, dispatch) {
                var align = payload.align;
                var selection = state.selection, tr = state.tr;
                var _a = getResolvedSelection(selection), anchor = _a.anchor, head = _a.head;
                if (anchor && head) {
                    var map = TableOffsetMap.create(anchor);
                    var totalRowCount = map.totalRowCount;
                    var selectionInfo = map.getRectOffsets(anchor, head);
                    var startColIdx = selectionInfo.startColIdx, endColIdx = selectionInfo.endColIdx;
                    for (var rowIdx = 0; rowIdx < totalRowCount; rowIdx += 1) {
                        for (var colIdx = startColIdx; colIdx <= endColIdx; colIdx += 1) {
                            if (!map.extendedRowspan(rowIdx, colIdx) && !map.extendedColspan(rowIdx, colIdx)) {
                                var _b = map.getNodeAndPos(rowIdx, colIdx), node = _b.node, pos = _b.pos;
                                var attrs = setAttrs(node, { align: align });
                                tr.setNodeMarkup(pos, null, attrs);
                            }
                        }
                    }
                    dispatch(tr);
                    return true;
                }
                return false;
            };
        };
    };
    Table.prototype.moveToCell = function (direction) {
        return function (state, dispatch) {
            var selection = state.selection, tr = state.tr, schema = state.schema;
            var _a = getResolvedSelection(selection), anchor = _a.anchor, head = _a.head;
            if (anchor && head) {
                var map = TableOffsetMap.create(anchor);
                var cellIndex = map.getCellIndex(anchor);
                var newTr = void 0;
                if (canBeOutOfTable(direction, map, cellIndex)) {
                    // When there is no content before or after the table,
                    // an empty line('paragraph') is created by pressing the arrow keys.
                    newTr = addParagraphAfterTable(tr, map, schema);
                }
                else {
                    newTr = moveToCell(direction, tr, cellIndex, map);
                }
                if (newTr) {
                    dispatch(newTr);
                    return true;
                }
            }
            return false;
        };
    };
    Table.prototype.moveInCell = function (direction) {
        var _this = this;
        return function (state, dispatch) {
            var selection = state.selection, tr = state.tr, doc = state.doc, schema = state.schema;
            var $from = selection.$from;
            var view = _this.context.view;
            if (!view.endOfTextblock(direction)) {
                return false;
            }
            var cell = findNodeBy($from, function (_a) {
                var type = _a.type;
                return type.name === 'tableHeadCell' || type.name === 'tableBodyCell';
            });
            if (cell) {
                var para = findNodeBy($from, function (_a) {
                    var type = _a.type;
                    return type.name === 'paragraph';
                });
                var cellDepth = cell.depth;
                if (para && canMoveBetweenCells(direction, [cellDepth, para.depth], $from, doc)) {
                    var anchor = getResolvedSelection(selection).anchor;
                    var map = TableOffsetMap.create(anchor);
                    var cellIndex = map.getCellIndex(anchor);
                    var newTr = void 0;
                    if (canSelectTableNode(direction, map, cellIndex)) {
                        // When the cursor position is at the end of the cell,
                        // the table is selected when the left / right arrow keys are pressed.
                        newTr = selectNode(tr, $from, cellDepth);
                    }
                    else if (canBeOutOfTable(direction, map, cellIndex)) {
                        // When there is no content before or after the table,
                        // an empty line('paragraph') is created by pressing the arrow keys.
                        if (direction === "up" /* UP */) {
                            newTr = addParagraphBeforeTable(tr, map, schema);
                        }
                        else if (direction === "down" /* DOWN */) {
                            newTr = addParagraphAfterTable(tr, map, schema);
                        }
                    }
                    else {
                        newTr = moveToCell(direction, tr, cellIndex, map);
                    }
                    if (newTr) {
                        dispatch(newTr);
                        return true;
                    }
                }
            }
            return false;
        };
    };
    Table.prototype.deleteCells = function () {
        return function (state, dispatch) {
            var schema = state.schema, selection = state.selection, tr = state.tr;
            var _a = getResolvedSelection(selection), anchor = _a.anchor, head = _a.head;
            var textSelection = selection instanceof TextSelection;
            if (anchor && head && !textSelection) {
                var map = TableOffsetMap.create(anchor);
                var _b = map.getRectOffsets(anchor, head), startRowIdx = _b.startRowIdx, startColIdx = _b.startColIdx, endRowIdx = _b.endRowIdx, endColIdx = _b.endColIdx;
                for (var rowIdx = startRowIdx; rowIdx <= endRowIdx; rowIdx += 1) {
                    for (var colIdx = startColIdx; colIdx <= endColIdx; colIdx += 1) {
                        if (!map.extendedRowspan(rowIdx, colIdx) && !map.extendedColspan(rowIdx, colIdx)) {
                            var _c = map.getNodeAndPos(rowIdx, colIdx), node = _c.node, pos = _c.pos;
                            var cells = createDummyCells(1, rowIdx, schema, node.attrs);
                            tr.replaceWith(tr.mapping.map(pos), tr.mapping.map(pos + node.nodeSize), cells);
                        }
                    }
                }
                dispatch(tr);
                return true;
            }
            return false;
        };
    };
    Table.prototype.exitTable = function () {
        return function (state, dispatch) {
            var selection = state.selection, tr = state.tr, schema = state.schema;
            var $from = selection.$from;
            var cell = findNodeBy($from, function (_a) {
                var type = _a.type;
                return type.name === 'tableHeadCell' || type.name === 'tableBodyCell';
            });
            if (cell) {
                var para = findNodeBy($from, function (_a) {
                    var type = _a.type;
                    return type.name === 'paragraph';
                });
                if (para) {
                    var anchor = getResolvedSelection(selection).anchor;
                    var map = TableOffsetMap.create(anchor);
                    dispatch(addParagraphAfterTable(tr, map, schema, true));
                    return true;
                }
            }
            return false;
        };
    };
    Table.prototype.commands = function () {
        return {
            addTable: this.addTable(),
            removeTable: this.removeTable(),
            addColumnToLeft: this.addColumn("left" /* LEFT */),
            addColumnToRight: this.addColumn("right" /* RIGHT */),
            removeColumn: this.removeColumn(),
            addRowToUp: this.addRow("up" /* UP */),
            addRowToDown: this.addRow("down" /* DOWN */),
            removeRow: this.removeRow(),
            alignColumn: this.alignColumn(),
        };
    };
    Table.prototype.keymaps = function () {
        var deleteCellContent = this.deleteCells();
        return {
            Tab: this.moveToCell("right" /* RIGHT */),
            'Shift-Tab': this.moveToCell("left" /* LEFT */),
            ArrowUp: this.moveInCell("up" /* UP */),
            ArrowDown: this.moveInCell("down" /* DOWN */),
            ArrowLeft: this.moveInCell("left" /* LEFT */),
            ArrowRight: this.moveInCell("right" /* RIGHT */),
            Backspace: deleteCellContent,
            'Mod-Backspace': deleteCellContent,
            Delete: deleteCellContent,
            'Mod-Delete': deleteCellContent,
            'Mod-Enter': this.exitTable(),
        };
    };
    return Table;
}(Node$1));

var TableHead = /** @class */ (function (_super) {
    __extends(TableHead, _super);
    function TableHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableHead.prototype, "name", {
        get: function () {
            return 'tableHead';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableHead.prototype, "schema", {
        get: function () {
            return {
                content: 'tableRow{1}',
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: [createDOMInfoParsedRawHTML('thead')],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['thead', getCustomAttrs(attrs), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return TableHead;
}(Node$1));

var TableBody = /** @class */ (function (_super) {
    __extends(TableBody, _super);
    function TableBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableBody.prototype, "name", {
        get: function () {
            return 'tableBody';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableBody.prototype, "schema", {
        get: function () {
            return {
                content: 'tableRow+',
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: [
                    {
                        tag: 'tbody',
                        getAttrs: function (dom) {
                            var rows = dom.querySelectorAll('tr');
                            var columns = rows[0].children.length;
                            var rawHTML = dom.getAttribute('data-raw-html');
                            if (!columns) {
                                return false;
                            }
                            return __assign({}, (rawHTML && { rawHTML: rawHTML }));
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['tbody', getCustomAttrs(attrs), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return TableBody;
}(Node$1));

var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableRow.prototype, "name", {
        get: function () {
            return 'tableRow';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableRow.prototype, "schema", {
        get: function () {
            return {
                content: '(tableHeadCell | tableBodyCell)*',
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: [
                    {
                        tag: 'tr',
                        getAttrs: function (dom) {
                            var columns = dom.children.length;
                            var rawHTML = dom.getAttribute('data-raw-html');
                            if (!columns) {
                                return false;
                            }
                            return __assign({}, (rawHTML && { rawHTML: rawHTML }));
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['tr', getCustomAttrs(attrs), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return TableRow;
}(Node$1));

var TableHeadCell = /** @class */ (function (_super) {
    __extends(TableHeadCell, _super);
    function TableHeadCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableHeadCell.prototype, "name", {
        get: function () {
            return 'tableHeadCell';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableHeadCell.prototype, "schema", {
        get: function () {
            return {
                content: 'paragraph+',
                attrs: __assign({ align: { default: null }, className: { default: null }, rawHTML: { default: null }, colspan: { default: null }, extended: { default: null } }, getDefaultCustomAttrs()),
                isolating: true,
                parseDOM: [createParsedCellDOM('th')],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    var cellAttrs = createCellAttrs(attrs);
                    return ['th', __assign(__assign({}, cellAttrs), getCustomAttrs(attrs)), 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return TableHeadCell;
}(Node$1));

var TableBodyCell = /** @class */ (function (_super) {
    __extends(TableBodyCell, _super);
    function TableBodyCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TableBodyCell.prototype, "name", {
        get: function () {
            return 'tableBodyCell';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableBodyCell.prototype, "schema", {
        get: function () {
            return {
                content: '(paragraph | bulletList | orderedList)+',
                attrs: {
                    align: { default: null },
                    className: { default: null },
                    rawHTML: { default: null },
                    colspan: { default: null },
                    rowspan: { default: null },
                    extended: { default: null },
                },
                isolating: true,
                parseDOM: [createParsedCellDOM('td')],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    var cellAttrs = createCellAttrs(attrs);
                    return ['td', cellAttrs, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return TableBodyCell;
}(Node$1));

var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Image.prototype, "name", {
        get: function () {
            return 'image';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "schema", {
        get: function () {
            return {
                inline: true,
                attrs: __assign({ imageUrl: { default: '' }, altText: { default: null }, rawHTML: { default: null } }, getDefaultCustomAttrs()),
                group: 'inline',
                selectable: false,
                parseDOM: [
                    {
                        tag: 'img[src]',
                        getAttrs: function (dom) {
                            var sanitizedDOM = sanitizeHTML(dom, { RETURN_DOM_FRAGMENT: true })
                                .firstChild;
                            var imageUrl = sanitizedDOM.getAttribute('src') || '';
                            var rawHTML = sanitizedDOM.getAttribute('data-raw-html');
                            var altText = sanitizedDOM.getAttribute('alt');
                            return __assign({ imageUrl: imageUrl,
                                altText: altText }, (rawHTML && { rawHTML: rawHTML }));
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return [
                        attrs.rawHTML || 'img',
                        __assign(__assign({ src: escapeXml(attrs.imageUrl) }, (attrs.altText && { alt: attrs.altText })), getCustomAttrs(attrs)),
                    ];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Image.prototype.addImage = function () {
        return function (payload) { return function (_a, dispatch) {
            var schema = _a.schema, tr = _a.tr;
            var _b = payload, imageUrl = _b.imageUrl, altText = _b.altText;
            if (!imageUrl) {
                return false;
            }
            var node = schema.nodes.image.createAndFill(__assign({ imageUrl: imageUrl }, (altText && { altText: altText })));
            dispatch(tr.replaceSelectionWith(node).scrollIntoView());
            return true;
        }; };
    };
    Image.prototype.commands = function () {
        return {
            addImage: this.addImage(),
        };
    };
    return Image;
}(Node$1));

var ROOT_BLOCK_DEPTH = 1;
var ThematicBreak = /** @class */ (function (_super) {
    __extends(ThematicBreak, _super);
    function ThematicBreak() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ThematicBreak.prototype, "name", {
        get: function () {
            return 'thematicBreak';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ThematicBreak.prototype, "schema", {
        get: function () {
            return {
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                group: 'block',
                parseDOM: [{ tag: 'hr' }],
                selectable: false,
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['div', getCustomAttrs(attrs), [attrs.rawHTML || 'hr']];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    ThematicBreak.prototype.hr = function () {
        var _this = this;
        return function () { return function (state, dispatch) {
            var _a;
            var _b = state.selection, $from = _b.$from, $to = _b.$to;
            if ($from === $to) {
                var doc = state.doc;
                var _c = state.schema.nodes, thematicBreak = _c.thematicBreak, paragraph = _c.paragraph;
                var nodes = [thematicBreak.create()];
                var rootBlock = $from.node(ROOT_BLOCK_DEPTH);
                var lastBlock = doc.child(doc.childCount - 1) === rootBlock;
                var blockEnd = doc.resolve($from.after(ROOT_BLOCK_DEPTH));
                var nextHr = ((_a = $from.nodeAfter) === null || _a === void 0 ? void 0 : _a.type.name) === _this.name;
                if (lastBlock || nextHr) {
                    nodes.push(paragraph.create());
                }
                dispatch(state.tr.insert(blockEnd.pos, nodes).scrollIntoView());
                return true;
            }
            return false;
        }; };
    };
    ThematicBreak.prototype.commands = function () {
        return { hr: this.hr() };
    };
    ThematicBreak.prototype.keymaps = function () {
        var hrCommand = this.hr()();
        return {
            'Mod-l': hrCommand,
            'Mod-L': hrCommand,
        };
    };
    return ThematicBreak;
}(Node$1));

var Strong = /** @class */ (function (_super) {
    __extends(Strong, _super);
    function Strong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Strong.prototype, "name", {
        get: function () {
            return 'strong';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Strong.prototype, "schema", {
        get: function () {
            var parseDOM = ['b', 'strong'].map(function (tag) {
                return {
                    tag: tag,
                    getAttrs: function (dom) {
                        var rawHTML = dom.getAttribute('data-raw-html');
                        return __assign({}, (rawHTML && { rawHTML: rawHTML }));
                    },
                };
            });
            return {
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: parseDOM,
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return [attrs.rawHTML || 'strong', getCustomAttrs(attrs)];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Strong.prototype.bold = function () {
        return function () { return function (state, dispatch) { return toggleMark$1(state.schema.marks.strong)(state, dispatch); }; };
    };
    Strong.prototype.commands = function () {
        return { bold: this.bold() };
    };
    Strong.prototype.keymaps = function () {
        var boldCommand = this.bold()();
        return {
            'Mod-b': boldCommand,
            'Mod-B': boldCommand,
        };
    };
    return Strong;
}(Mark));

var Emph = /** @class */ (function (_super) {
    __extends(Emph, _super);
    function Emph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Emph.prototype, "name", {
        get: function () {
            return 'emph';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Emph.prototype, "schema", {
        get: function () {
            var parseDOM = ['i', 'em'].map(function (tag) {
                return {
                    tag: tag,
                    getAttrs: function (dom) {
                        var rawHTML = dom.getAttribute('data-raw-html');
                        return __assign({}, (rawHTML && { rawHTML: rawHTML }));
                    },
                };
            });
            return {
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: parseDOM,
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return [attrs.rawHTML || 'em', getCustomAttrs(attrs)];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Emph.prototype.italic = function () {
        return function () { return function (state, dispatch) { return toggleMark$1(state.schema.marks.emph)(state, dispatch); }; };
    };
    Emph.prototype.commands = function () {
        return { italic: this.italic() };
    };
    Emph.prototype.keymaps = function () {
        var italicCommand = this.italic()();
        return {
            'Mod-i': italicCommand,
            'Mod-I': italicCommand,
        };
    };
    return Emph;
}(Mark));

var Strike = /** @class */ (function (_super) {
    __extends(Strike, _super);
    function Strike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Strike.prototype, "name", {
        get: function () {
            return 'strike';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Strike.prototype, "schema", {
        get: function () {
            var parseDOM = ['s', 'del'].map(function (tag) {
                return {
                    tag: tag,
                    getAttrs: function (dom) {
                        var rawHTML = dom.getAttribute('data-raw-html');
                        return __assign({}, (rawHTML && { rawHTML: rawHTML }));
                    },
                };
            });
            return {
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: parseDOM,
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return [attrs.rawHTML || 'del', getCustomAttrs(attrs)];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Strike.prototype.commands = function () {
        return function () { return function (state, dispatch) { return toggleMark$1(state.schema.marks.strike)(state, dispatch); }; };
    };
    Strike.prototype.keymaps = function () {
        var strikeCommand = this.commands()();
        return {
            'Mod-s': strikeCommand,
            'Mod-S': strikeCommand,
        };
    };
    return Strike;
}(Mark));

var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(linkAttributes) {
        var _this = _super.call(this) || this;
        _this.linkAttributes = linkAttributes;
        return _this;
    }
    Object.defineProperty(Link.prototype, "name", {
        get: function () {
            return 'link';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "schema", {
        get: function () {
            var _this = this;
            return {
                attrs: __assign({ linkUrl: { default: '' }, title: { default: null }, rawHTML: { default: null } }, getDefaultCustomAttrs()),
                inclusive: false,
                parseDOM: [
                    {
                        tag: 'a[href]',
                        getAttrs: function (dom) {
                            var sanitizedDOM = sanitizeHTML(dom, { RETURN_DOM_FRAGMENT: true })
                                .firstChild;
                            var href = sanitizedDOM.getAttribute('href') || '';
                            var title = sanitizedDOM.getAttribute('title') || '';
                            var rawHTML = sanitizedDOM.getAttribute('data-raw-html');
                            return __assign({ linkUrl: href, title: title }, (rawHTML && { rawHTML: rawHTML }));
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return [
                        attrs.rawHTML || 'a',
                        __assign(__assign({ href: escapeXml(attrs.linkUrl) }, _this.linkAttributes), getCustomAttrs(attrs)),
                    ];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Link.prototype.addLink = function () {
        return function (payload) { return function (state, dispatch) {
            var _a = payload, linkUrl = _a.linkUrl, _b = _a.linkText, linkText = _b === void 0 ? '' : _b;
            var schema = state.schema, tr = state.tr, selection = state.selection;
            var empty = selection.empty, from = selection.from, to = selection.to;
            if (from && to && linkUrl) {
                var attrs = { linkUrl: linkUrl };
                var mark = schema.mark('link', attrs);
                if (empty && linkText) {
                    var node = createTextNode$1(schema, linkText, mark);
                    tr.replaceRangeWith(from, to, node);
                }
                else {
                    tr.addMark(from, to, mark);
                }
                dispatch(tr.scrollIntoView());
                return true;
            }
            return false;
        }; };
    };
    Link.prototype.toggleLink = function () {
        return function (payload) { return function (state, dispatch) {
            return toggleMark$1(state.schema.marks.link, payload)(state, dispatch);
        }; };
    };
    Link.prototype.commands = function () {
        return {
            addLink: this.addLink(),
            toggleLink: this.toggleLink(),
        };
    };
    return Link;
}(Mark));

var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Code.prototype, "name", {
        get: function () {
            return 'code';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "schema", {
        get: function () {
            return {
                attrs: __assign({ rawHTML: { default: null } }, getDefaultCustomAttrs()),
                parseDOM: [
                    {
                        tag: 'code',
                        getAttrs: function (dom) {
                            var rawHTML = dom.getAttribute('data-raw-html');
                            return __assign({}, (rawHTML && { rawHTML: rawHTML }));
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return [attrs.rawHTML || 'code', getCustomAttrs(attrs)];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Code.prototype.commands = function () {
        return function () { return function (state, dispatch) { return toggleMark$1(state.schema.marks.code)(state, dispatch); }; };
    };
    Code.prototype.keymaps = function () {
        var codeCommand = this.commands()();
        return {
            'Shift-Mod-c': codeCommand,
            'Shift-Mod-C': codeCommand,
        };
    };
    return Code;
}(Mark));

var CustomBlock = /** @class */ (function (_super) {
    __extends(CustomBlock, _super);
    function CustomBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CustomBlock.prototype, "name", {
        get: function () {
            return 'customBlock';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomBlock.prototype, "schema", {
        get: function () {
            return {
                content: 'text*',
                group: 'block',
                attrs: {
                    info: { default: null },
                },
                atom: true,
                code: true,
                defining: true,
                parseDOM: [
                    {
                        tag: 'div[data-custom-info]',
                        getAttrs: function (dom) {
                            var info = dom.getAttribute('data-custom-info');
                            return { info: info };
                        },
                    },
                ],
                toDOM: function (_a) {
                    var attrs = _a.attrs;
                    return ['div', { 'data-custom-info': attrs.info || null }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    CustomBlock.prototype.commands = function () {
        return function (payload) { return function (state, dispatch) {
            return (payload === null || payload === void 0 ? void 0 : payload.info)
                ? setBlockType(state.schema.nodes.customBlock, payload)(state, dispatch)
                : false;
        }; };
    };
    return CustomBlock;
}(Node$1));

var FrontMatter = /** @class */ (function (_super) {
    __extends(FrontMatter, _super);
    function FrontMatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FrontMatter.prototype, "name", {
        get: function () {
            return 'frontMatter';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FrontMatter.prototype, "schema", {
        get: function () {
            return {
                content: 'text*',
                group: 'block',
                code: true,
                defining: true,
                parseDOM: [
                    {
                        preserveWhitespace: 'full',
                        tag: 'div[data-front-matter]',
                    },
                ],
                toDOM: function () {
                    return ['div', { 'data-front-matter': 'true' }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    FrontMatter.prototype.commands = function () {
        return function () { return function (state, dispatch, view) {
            var $from = state.selection.$from;
            if (view.endOfTextblock('down') && $from.node().type.name === 'frontMatter') {
                return exitCode(state, dispatch);
            }
            return false;
        }; };
    };
    FrontMatter.prototype.keymaps = function () {
        return {
            Enter: this.commands()(),
        };
    };
    return FrontMatter;
}(Node$1));

var HTMLComment = /** @class */ (function (_super) {
    __extends(HTMLComment, _super);
    function HTMLComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HTMLComment.prototype, "name", {
        get: function () {
            return 'htmlComment';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLComment.prototype, "schema", {
        get: function () {
            return {
                content: 'text*',
                group: 'block',
                code: true,
                defining: true,
                parseDOM: [{ preserveWhitespace: 'full', tag: 'div[data-html-comment]' }],
                toDOM: function () {
                    return ['div', { 'data-html-comment': 'true' }, 0];
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    HTMLComment.prototype.commands = function () {
        return function () { return function (state, dispatch, view) {
            var $from = state.selection.$from;
            if (view.endOfTextblock('down') && $from.node().type.name === 'htmlComment') {
                return exitCode(state, dispatch);
            }
            return false;
        }; };
    };
    HTMLComment.prototype.keymaps = function () {
        return {
            Enter: this.commands()(),
        };
    };
    return HTMLComment;
}(Node$1));

function createSpecs(linkAttributes) {
    return new SpecManager([
        new Doc(),
        new Paragraph(),
        new Text(),
        new Heading(),
        new CodeBlock(),
        new BulletList(),
        new OrderedList(),
        new ListItem(),
        new BlockQuote(),
        new Table(),
        new TableHead(),
        new TableBody(),
        new TableRow(),
        new TableHeadCell(),
        new TableBodyCell(),
        new Image(),
        new ThematicBreak(),
        new Strong(),
        new Emph(),
        new Strike(),
        new Link(linkAttributes),
        new Code(),
        new CustomBlock(),
        new FrontMatter(),
        new Widget(),
        new HTMLComment(),
    ]);
}

var CONTENTS_CLASS_NAME = cls('contents');
var WysiwygEditor = /** @class */ (function (_super) {
    __extends(WysiwygEditor, _super);
    function WysiwygEditor(eventEmitter, options) {
        var _this = _super.call(this, eventEmitter) || this;
        var toDOMAdaptor = options.toDOMAdaptor, _a = options.htmlSchemaMap, htmlSchemaMap = _a === void 0 ? {} : _a, _b = options.linkAttributes, linkAttributes = _b === void 0 ? {} : _b, _c = options.useCommandShortcut, useCommandShortcut = _c === void 0 ? true : _c, _d = options.wwPlugins, wwPlugins = _d === void 0 ? [] : _d, _e = options.wwNodeViews, wwNodeViews = _e === void 0 ? {} : _e;
        _this.editorType = 'wysiwyg';
        _this.el.classList.add('ww-mode');
        _this.toDOMAdaptor = toDOMAdaptor;
        _this.linkAttributes = linkAttributes;
        _this.extraPlugins = wwPlugins;
        _this.pluginNodeViews = wwNodeViews;
        _this.specs = _this.createSpecs();
        _this.schema = _this.createSchema(htmlSchemaMap);
        _this.context = _this.createContext();
        _this.keymaps = _this.createKeymaps(useCommandShortcut);
        _this.view = _this.createView();
        _this.commands = _this.createCommands();
        _this.specs.setContext(__assign(__assign({}, _this.context), { view: _this.view }));
        _this.initEvent();
        return _this;
    }
    WysiwygEditor.prototype.createSpecs = function () {
        return createSpecs(this.linkAttributes);
    };
    WysiwygEditor.prototype.createContext = function () {
        return {
            schema: this.schema,
            eventEmitter: this.eventEmitter,
        };
    };
    WysiwygEditor.prototype.createSchema = function (htmlSchemaMap) {
        return new Schema({
            nodes: __assign(__assign({}, this.specs.nodes), htmlSchemaMap.nodes),
            marks: __assign(__assign({}, this.specs.marks), htmlSchemaMap.marks),
        });
    };
    WysiwygEditor.prototype.createPlugins = function () {
        return __spreadArray([
            tableSelection(),
            tableContextMenu(this.eventEmitter),
            task(),
            toolbarStateHighlight(this.eventEmitter)
        ], this.createPluginProps()).concat(this.defaultPlugins);
    };
    WysiwygEditor.prototype.createPluginNodeViews = function () {
        var _a = this, eventEmitter = _a.eventEmitter, pluginNodeViews = _a.pluginNodeViews;
        var pluginNodeViewMap = {};
        if (pluginNodeViews) {
            Object.keys(pluginNodeViews).forEach(function (key) {
                pluginNodeViewMap[key] = function (node, view, getPos) {
                    return pluginNodeViews[key](node, view, getPos, eventEmitter);
                };
            });
        }
        return pluginNodeViewMap;
    };
    WysiwygEditor.prototype.createView = function () {
        var _this = this;
        var _a = this, toDOMAdaptor = _a.toDOMAdaptor, eventEmitter = _a.eventEmitter;
        return new EditorView(this.el, {
            state: this.createState(),
            attributes: {
                class: CONTENTS_CLASS_NAME,
            },
            nodeViews: __assign({ customBlock: function (node, view, getPos) {
                    return new CustomBlockView(node, view, getPos, toDOMAdaptor);
                },
                image: function (node, view, getPos) {
                    return new ImageView(node, view, getPos, eventEmitter);
                },
                codeBlock: function (node, view, getPos) {
                    return new CodeBlockView(node, view, getPos, eventEmitter);
                }, widget: widgetNodeView }, this.createPluginNodeViews()),
            dispatchTransaction: function (tr) {
                var state = _this.view.state.applyTransaction(tr).state;
                _this.view.updateState(state);
                _this.emitChangeEvent(tr.scrollIntoView());
                _this.eventEmitter.emit('setFocusedNode', state.selection.$from.node(1));
            },
            transformPastedHTML: changePastedHTML,
            transformPasted: function (slice) {
                return changePastedSlice(slice, _this.schema, isInTableNode(_this.view.state.selection.$from));
            },
            handlePaste: function (view, _, slice) { return pasteToTable(view, slice); },
            handleKeyDown: function (_, ev) {
                _this.eventEmitter.emit('keydown', _this.editorType, ev);
                return false;
            },
            handleDOMEvents: {
                paste: function (_, ev) {
                    var clipboardData = ev.clipboardData || window.clipboardData;
                    var items = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.items;
                    if (items) {
                        var containRtfItem = toArray_1(items).some(function (item) { return item.kind === 'string' && item.type === 'text/rtf'; });
                        // if it contains rtf, it's most likely copy paste from office -> no image
                        if (!containRtfItem) {
                            var imageBlob = pasteImageOnly(items);
                            if (imageBlob) {
                                ev.preventDefault();
                                emitImageBlobHook(_this.eventEmitter, imageBlob, ev.type);
                            }
                        }
                    }
                    return false;
                },
                keyup: function (_, ev) {
                    _this.eventEmitter.emit('keyup', _this.editorType, ev);
                    return false;
                },
                scroll: function () {
                    _this.eventEmitter.emit('scroll', 'editor');
                    return true;
                },
            },
        });
    };
    WysiwygEditor.prototype.createCommands = function () {
        return this.specs.commands(this.view, getWwCommands());
    };
    WysiwygEditor.prototype.getHTML = function () {
        return removeProseMirrorHackNodes(this.view.dom.innerHTML);
    };
    WysiwygEditor.prototype.getModel = function () {
        return this.view.state.doc;
    };
    WysiwygEditor.prototype.getSelection = function () {
        var _a = this.view.state.selection, from = _a.from, to = _a.to;
        return [from, to];
    };
    WysiwygEditor.prototype.getSchema = function () {
        return this.view.state.schema;
    };
    WysiwygEditor.prototype.replaceSelection = function (text, start, end) {
        var _a = this.view.state, schema = _a.schema, tr = _a.tr;
        var lineTexts = text.split('\n');
        var paras = lineTexts.map(function (lineText) {
            return createParagraph(schema, createNodesWithWidget(lineText, schema));
        });
        var slice = new Slice(Fragment.from(paras), 1, 1);
        var newTr = isNumber_1(start) && isNumber_1(end)
            ? tr.replaceRange(start, end, slice)
            : tr.replaceSelection(slice);
        this.view.dispatch(newTr);
        this.focus();
    };
    WysiwygEditor.prototype.deleteSelection = function (start, end) {
        var tr = this.view.state.tr;
        var newTr = isNumber_1(start) && isNumber_1(end) ? tr.deleteRange(start, end) : tr.deleteSelection();
        this.view.dispatch(newTr.scrollIntoView());
    };
    WysiwygEditor.prototype.getSelectedText = function (start, end) {
        var _a = this.view.state, doc = _a.doc, selection = _a.selection;
        var from = selection.from, to = selection.to;
        if (isNumber_1(start) && isNumber_1(end)) {
            from = start;
            to = end;
        }
        return doc.textBetween(from, to, '\n');
    };
    WysiwygEditor.prototype.setModel = function (newDoc, cursorToEnd) {
        if (cursorToEnd === void 0) { cursorToEnd = false; }
        var _a = this.view.state, tr = _a.tr, doc = _a.doc;
        this.view.dispatch(tr.replaceWith(0, doc.content.size, newDoc));
        if (cursorToEnd) {
            this.moveCursorToEnd(true);
        }
    };
    WysiwygEditor.prototype.setSelection = function (start, end) {
        if (end === void 0) { end = start; }
        var tr = this.view.state.tr;
        var selection = createTextSelection(tr, start, end);
        this.view.dispatch(tr.setSelection(selection).scrollIntoView());
    };
    WysiwygEditor.prototype.addWidget = function (node, style, pos) {
        var _a = this.view, dispatch = _a.dispatch, state = _a.state;
        dispatch(state.tr.setMeta('widget', { pos: pos !== null && pos !== void 0 ? pos : state.selection.to, node: node, style: style }));
    };
    WysiwygEditor.prototype.replaceWithWidget = function (start, end, text) {
        var _a = this.view.state, tr = _a.tr, schema = _a.schema;
        var nodes = createNodesWithWidget(text, schema);
        this.view.dispatch(tr.replaceWith(start, end, nodes));
    };
    WysiwygEditor.prototype.getRangeInfoOfNode = function (pos) {
        var _a = this.view.state, doc = _a.doc, selection = _a.selection;
        var $pos = pos ? doc.resolve(pos) : selection.$from;
        var marks = $pos.marks();
        var node = $pos.node();
        var start = $pos.start();
        var end = $pos.end();
        var type = node.type.name;
        if (marks.length || type === 'paragraph') {
            var mark_1 = marks[marks.length - 1];
            var maybeHasMark_1 = function (nodeMarks) {
                return nodeMarks.length ? includes(nodeMarks, mark_1) : true;
            };
            type = mark_1 ? mark_1.type.name : 'text';
            node.forEach(function (child, offset) {
                var isText = child.isText, nodeSize = child.nodeSize, nodeMarks = child.marks;
                var startOffset = $pos.pos - start;
                if (isText &&
                    offset <= startOffset &&
                    offset + nodeSize >= startOffset &&
                    maybeHasMark_1(nodeMarks)) {
                    start = start + offset;
                    end = start + nodeSize;
                }
            });
        }
        return { range: [start, end], type: type };
    };
    return WysiwygEditor;
}(EditorBase));

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

var CommandManager = /** @class */ (function () {
    function CommandManager(eventEmitter, mdCommands, wwCommands, getEditorType) {
        this.eventEmitter = eventEmitter;
        this.mdCommands = mdCommands;
        this.wwCommands = wwCommands;
        this.getEditorType = getEditorType;
        this.initEvent();
    }
    CommandManager.prototype.initEvent = function () {
        var _this = this;
        this.eventEmitter.listen('command', function (command, payload) {
            _this.exec(command, payload);
        });
    };
    CommandManager.prototype.addCommand = function (type, name, command) {
        if (type === 'markdown') {
            this.mdCommands[name] = command;
        }
        else {
            this.wwCommands[name] = command;
        }
    };
    CommandManager.prototype.deleteCommand = function (type, name) {
        if (type === 'markdown') {
            delete this.mdCommands[name];
        }
        else {
            delete this.wwCommands[name];
        }
    };
    CommandManager.prototype.exec = function (name, payload) {
        var type = this.getEditorType();
        if (type === 'markdown') {
            this.mdCommands[name](payload);
        }
        else {
            this.wwCommands[name](payload);
        }
    };
    return CommandManager;
}());

function getTextWithoutTrailingNewline(text) {
    return text[text.length - 1] === '\n' ? text.slice(0, text.length - 1) : text;
}
function isCustomHTMLInlineNode(_a, node) {
    var schema = _a.schema;
    var html = node.literal;
    var matched = html.match(reHTMLTag);
    if (matched) {
        var openTagName = matched[1], closeTagName = matched[3];
        var typeName = (openTagName || closeTagName).toLowerCase();
        return node.type === 'htmlInline' && !!(schema.marks[typeName] || schema.nodes[typeName]);
    }
    return false;
}
function isInlineNode(_a) {
    var type = _a.type;
    return includes(['text', 'strong', 'emph', 'strike', 'image', 'link', 'code'], type);
}
function isSoftbreak(mdNode) {
    return (mdNode === null || mdNode === void 0 ? void 0 : mdNode.type) === 'softbreak';
}
function isListNode(_a) {
    var type = _a.type, literal = _a.literal;
    var matched = type === 'htmlInline' && literal.match(reHTMLTag);
    if (matched) {
        var openTagName = matched[1], closeTagName = matched[3];
        var tagName = openTagName || closeTagName;
        if (tagName) {
            return includes(['ul', 'ol', 'li'], tagName.toLowerCase());
        }
    }
    return false;
}
function getListItemAttrs(_a) {
    var literal = _a.literal;
    var task = /data-task/.test(literal);
    var checked = /data-task-checked/.test(literal);
    return { task: task, checked: checked };
}
function getMatchedAttributeValue(rawHTML) {
    var attrNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        attrNames[_i - 1] = arguments[_i];
    }
    var wrapper = document.createElement('div');
    wrapper.innerHTML = sanitizeHTML(rawHTML);
    var el = wrapper.firstChild;
    return attrNames.map(function (attrName) { return el.getAttribute(attrName) || ''; });
}
function createConvertors(convertors) {
    var convertorMap = {};
    Object.keys(convertors).forEach(function (key) {
        var tagNames = key.split(', ');
        tagNames.forEach(function (tagName) {
            var name = tagName.toLowerCase();
            convertorMap[name] = convertors[key];
        });
    });
    return convertorMap;
}
var convertors = {
    'b, strong': function (state, _, openTagName) {
        var strong = state.schema.marks.strong;
        if (openTagName) {
            state.openMark(strong.create({ rawHTML: openTagName }));
        }
        else {
            state.closeMark(strong);
        }
    },
    'i, em': function (state, _, openTagName) {
        var emph = state.schema.marks.emph;
        if (openTagName) {
            state.openMark(emph.create({ rawHTML: openTagName }));
        }
        else {
            state.closeMark(emph);
        }
    },
    's, del': function (state, _, openTagName) {
        var strike = state.schema.marks.strike;
        if (openTagName) {
            state.openMark(strike.create({ rawHTML: openTagName }));
        }
        else {
            state.closeMark(strike);
        }
    },
    code: function (state, _, openTagName) {
        var code = state.schema.marks.code;
        if (openTagName) {
            state.openMark(code.create({ rawHTML: openTagName }));
        }
        else {
            state.closeMark(code);
        }
    },
    a: function (state, node, openTagName) {
        var tag = node.literal;
        var link = state.schema.marks.link;
        if (openTagName) {
            var linkUrl = getMatchedAttributeValue(tag, 'href')[0];
            state.openMark(link.create({
                linkUrl: linkUrl,
                rawHTML: openTagName,
            }));
        }
        else {
            state.closeMark(link);
        }
    },
    img: function (state, node, openTagName) {
        var tag = node.literal;
        if (openTagName) {
            var _a = getMatchedAttributeValue(tag, 'src', 'alt'), imageUrl = _a[0], altText = _a[1];
            var image = state.schema.nodes.image;
            state.addNode(image, __assign({ rawHTML: openTagName, imageUrl: imageUrl }, (altText && { altText: altText })));
        }
    },
    hr: function (state, _, openTagName) {
        state.addNode(state.schema.nodes.thematicBreak, { rawHTML: openTagName });
    },
    br: function (state, node) {
        var paragraph = state.schema.nodes.paragraph;
        var parent = node.parent, prev = node.prev, next = node.next;
        if ((parent === null || parent === void 0 ? void 0 : parent.type) === 'paragraph') {
            // should open a paragraph node when line text has only <br> tag
            // ex) first line\n\n<br>\nfourth line
            if (isSoftbreak(prev)) {
                state.openNode(paragraph);
            }
            // should close a paragraph node when line text has only <br> tag
            // ex) first line\n\n<br>\nfourth line
            if (isSoftbreak(next)) {
                state.closeNode();
                // should close a paragraph node and open a paragraph node to separate between blocks
                // when <br> tag is in the middle of the paragraph
                // ex) first <br>line\nthird line
            }
            else if (next) {
                state.closeNode();
                state.openNode(paragraph);
            }
        }
        else if ((parent === null || parent === void 0 ? void 0 : parent.type) === 'tableCell') {
            if (prev && (isInlineNode(prev) || isCustomHTMLInlineNode(state, prev))) {
                state.closeNode();
            }
            if (next && (isInlineNode(next) || isCustomHTMLInlineNode(state, next))) {
                state.openNode(paragraph);
            }
        }
    },
    pre: function (state, node, openTagName) {
        var _a, _b;
        var container = document.createElement('div');
        container.innerHTML = node.literal;
        var literal = (_b = (_a = container.firstChild) === null || _a === void 0 ? void 0 : _a.firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
        state.openNode(state.schema.nodes.codeBlock, { rawHTML: openTagName });
        state.addText(getTextWithoutTrailingNewline(literal));
        state.closeNode();
    },
    'ul, ol': function (state, node, openTagName) {
        // in the table cell, '<ul>', '<ol>' is parsed as 'htmlInline' node
        if (node.parent.type === 'tableCell') {
            var _a = state.schema.nodes, bulletList = _a.bulletList, orderedList = _a.orderedList, paragraph = _a.paragraph;
            var list = openTagName === 'ul' ? bulletList : orderedList;
            if (openTagName) {
                if (node.prev && !isListNode(node.prev)) {
                    state.closeNode();
                }
                state.openNode(list, { rawHTML: openTagName });
            }
            else {
                state.closeNode();
                if (node.next && !isListNode(node.next)) {
                    state.openNode(paragraph);
                }
            }
        }
    },
    li: function (state, node, openTagName) {
        var _a;
        // in the table cell, '<li>' is parsed as 'htmlInline' node
        if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === 'tableCell') {
            var _b = state.schema.nodes, listItem = _b.listItem, paragraph = _b.paragraph;
            if (openTagName) {
                var attrs = getListItemAttrs(node);
                if (node.prev && !isListNode(node.prev)) {
                    state.closeNode();
                }
                state.openNode(listItem, __assign({ rawHTML: openTagName }, attrs));
                if (node.next && !isListNode(node.next)) {
                    state.openNode(paragraph);
                }
            }
            else {
                if (node.prev && !isListNode(node.prev)) {
                    state.closeNode();
                }
                state.closeNode();
            }
        }
    },
};
var htmlToWwConvertors = createConvertors(convertors);

function isBRTag(node) {
    return node.type === 'htmlInline' && reBR.test(node.literal);
}
function addRawHTMLAttributeToDOM(parent) {
    toArray_1(parent.childNodes).forEach(function (child) {
        if (isElemNode(child)) {
            var openTagName = child.nodeName.toLowerCase();
            child.setAttribute('data-raw-html', openTagName);
            if (child.childNodes) {
                addRawHTMLAttributeToDOM(child);
            }
        }
    });
}
var toWwConvertors = {
    text: function (state, node) {
        state.addText(node.literal || '');
    },
    paragraph: function (state, node, _a, customAttrs) {
        var _b;
        var entering = _a.entering;
        if (entering) {
            var paragraph = state.schema.nodes.paragraph;
            // The `\n\n` entered in markdown separates the paragraph.
            // When changing to wysiwyg, a newline is added between the two paragraphs.
            if (((_b = node.prev) === null || _b === void 0 ? void 0 : _b.type) === 'paragraph') {
                state.openNode(paragraph, customAttrs);
                state.closeNode();
            }
            state.openNode(paragraph, customAttrs);
        }
        else {
            state.closeNode();
        }
    },
    heading: function (state, node, _a, customAttrs) {
        var entering = _a.entering;
        if (entering) {
            var _b = node, level = _b.level, headingType = _b.headingType;
            state.openNode(state.schema.nodes.heading, __assign({ level: level, headingType: headingType }, customAttrs));
        }
        else {
            state.closeNode();
        }
    },
    codeBlock: function (state, node, customAttrs) {
        var codeBlock = state.schema.nodes.codeBlock;
        var _a = node, info = _a.info, literal = _a.literal;
        state.openNode(codeBlock, __assign({ language: info }, customAttrs));
        state.addText(getTextWithoutTrailingNewline(literal || ''));
        state.closeNode();
    },
    list: function (state, node, _a, customAttrs) {
        var entering = _a.entering;
        if (entering) {
            var _b = state.schema.nodes, bulletList = _b.bulletList, orderedList = _b.orderedList;
            var _c = node.listData, type = _c.type, start = _c.start;
            if (type === 'bullet') {
                state.openNode(bulletList, customAttrs);
            }
            else {
                state.openNode(orderedList, __assign({ order: start }, customAttrs));
            }
        }
        else {
            state.closeNode();
        }
    },
    item: function (state, node, _a, customAttrs) {
        var entering = _a.entering;
        var listItem = state.schema.nodes.listItem;
        var _b = node.listData, task = _b.task, checked = _b.checked;
        if (entering) {
            var attrs = __assign(__assign(__assign({}, (task && { task: task })), (checked && { checked: checked })), customAttrs);
            state.openNode(listItem, attrs);
        }
        else {
            state.closeNode();
        }
    },
    blockQuote: function (state, _, _a, customAttrs) {
        var entering = _a.entering;
        if (entering) {
            state.openNode(state.schema.nodes.blockQuote, customAttrs);
        }
        else {
            state.closeNode();
        }
    },
    image: function (state, node, _a, customAttrs) {
        var entering = _a.entering, skipChildren = _a.skipChildren;
        var image = state.schema.nodes.image;
        var _b = node, destination = _b.destination, firstChild = _b.firstChild;
        if (entering && skipChildren) {
            skipChildren();
        }
        state.addNode(image, __assign(__assign({ imageUrl: destination }, (firstChild && { altText: firstChild.literal })), customAttrs));
    },
    thematicBreak: function (state, node, _, customAttrs) {
        state.addNode(state.schema.nodes.thematicBreak, customAttrs);
    },
    strong: function (state, _, _a, customAttrs) {
        var entering = _a.entering;
        var strong = state.schema.marks.strong;
        if (entering) {
            state.openMark(strong.create(customAttrs));
        }
        else {
            state.closeMark(strong);
        }
    },
    emph: function (state, _, _a, customAttrs) {
        var entering = _a.entering;
        var emph = state.schema.marks.emph;
        if (entering) {
            state.openMark(emph.create(customAttrs));
        }
        else {
            state.closeMark(emph);
        }
    },
    link: function (state, node, _a, customAttrs) {
        var entering = _a.entering;
        var link = state.schema.marks.link;
        var _b = node, destination = _b.destination, title = _b.title;
        if (entering) {
            var attrs = __assign({ linkUrl: destination, title: title }, customAttrs);
            state.openMark(link.create(attrs));
        }
        else {
            state.closeMark(link);
        }
    },
    softbreak: function (state, node) {
        if (node.parent.type === 'paragraph') {
            var prev = node.prev, next = node.next;
            if (prev && !isBRTag(prev)) {
                state.closeNode();
            }
            if (next && !isBRTag(next)) {
                state.openNode(state.schema.nodes.paragraph);
            }
        }
    },
    // GFM specifications node
    table: function (state, _, _a, customAttrs) {
        var entering = _a.entering;
        if (entering) {
            state.openNode(state.schema.nodes.table, customAttrs);
        }
        else {
            state.closeNode();
        }
    },
    tableHead: function (state, _, _a, customAttrs) {
        var entering = _a.entering;
        if (entering) {
            state.openNode(state.schema.nodes.tableHead, customAttrs);
        }
        else {
            state.closeNode();
        }
    },
    tableBody: function (state, _, _a, customAttrs) {
        var entering = _a.entering;
        if (entering) {
            state.openNode(state.schema.nodes.tableBody, customAttrs);
        }
        else {
            state.closeNode();
        }
    },
    tableRow: function (state, _, _a, customAttrs) {
        var entering = _a.entering;
        if (entering) {
            state.openNode(state.schema.nodes.tableRow, customAttrs);
        }
        else {
            state.closeNode();
        }
    },
    tableCell: function (state, node, _a) {
        var entering = _a.entering;
        if (!node.ignored) {
            var hasParaNode = function (childNode) {
                return childNode && (isInlineNode(childNode) || isCustomHTMLInlineNode(state, childNode));
            };
            if (entering) {
                var _b = state.schema.nodes, tableHeadCell = _b.tableHeadCell, tableBodyCell = _b.tableBodyCell, paragraph = _b.paragraph;
                var tablePart = node.parent.parent;
                var cell = tablePart.type === 'tableHead' ? tableHeadCell : tableBodyCell;
                var table = tablePart.parent;
                var align = (table.columns[node.startIdx] || {}).align;
                var attrs = __assign({}, node.attrs);
                if (align) {
                    attrs.align = align;
                }
                state.openNode(cell, attrs);
                if (hasParaNode(node.firstChild)) {
                    state.openNode(paragraph);
                }
            }
            else {
                if (hasParaNode(node.lastChild)) {
                    state.closeNode();
                }
                state.closeNode();
            }
        }
    },
    strike: function (state, _, _a, customAttrs) {
        var entering = _a.entering;
        var strike = state.schema.marks.strike;
        if (entering) {
            state.openMark(strike.create(customAttrs));
        }
        else {
            state.closeMark(strike);
        }
    },
    code: function (state, node, _, customAttrs) {
        var code = state.schema.marks.code;
        state.openMark(code.create(customAttrs));
        state.addText(getTextWithoutTrailingNewline(node.literal || ''));
        state.closeMark(code);
    },
    customBlock: function (state, node) {
        var _a = state.schema.nodes, customBlock = _a.customBlock, paragraph = _a.paragraph;
        var _b = node, info = _b.info, literal = _b.literal;
        state.openNode(customBlock, { info: info });
        state.addText(getTextWithoutTrailingNewline(literal || ''));
        state.closeNode();
        // add empty line to edit the content in next line
        if (!node.next) {
            state.openNode(paragraph);
            state.closeNode();
        }
    },
    frontMatter: function (state, node) {
        state.openNode(state.schema.nodes.frontMatter);
        state.addText(node.literal);
        state.closeNode();
    },
    htmlInline: function (state, node) {
        var html = node.literal;
        var matched = html.match(reHTMLTag);
        var openTagName = matched[1], closeTagName = matched[3];
        var typeName = (openTagName || closeTagName).toLowerCase();
        var markType = state.schema.marks[typeName];
        var sanitizedHTML = sanitizeHTML(html);
        // for user defined html schema
        if (markType === null || markType === void 0 ? void 0 : markType.spec.attrs.htmlInline) {
            if (openTagName) {
                var htmlAttrs = getHTMLAttrsByHTMLString(sanitizedHTML);
                state.openMark(markType.create({ htmlAttrs: htmlAttrs }));
            }
            else {
                state.closeMark(markType);
            }
        }
        else {
            var htmlToWwConvertor = htmlToWwConvertors[typeName];
            if (htmlToWwConvertor) {
                htmlToWwConvertor(state, node, openTagName);
            }
        }
    },
    htmlBlock: function (state, node) {
        var html = node.literal;
        var container = document.createElement('div');
        var isHTMLComment = reHTMLComment.test(html);
        if (isHTMLComment) {
            state.openNode(state.schema.nodes.htmlComment);
            state.addText(node.literal);
            state.closeNode();
        }
        else {
            var matched = html.match(reHTMLTag);
            var openTagName = matched[1], closeTagName = matched[3];
            var typeName = (openTagName || closeTagName).toLowerCase();
            var nodeType = state.schema.nodes[typeName];
            var sanitizedHTML = sanitizeHTML(html);
            // for user defined html schema
            if (nodeType === null || nodeType === void 0 ? void 0 : nodeType.spec.attrs.htmlBlock) {
                var htmlAttrs = getHTMLAttrsByHTMLString(sanitizedHTML);
                var childrenHTML = getChildrenHTML(node, typeName);
                state.addNode(nodeType, { htmlAttrs: htmlAttrs, childrenHTML: childrenHTML });
            }
            else {
                container.innerHTML = sanitizedHTML;
                addRawHTMLAttributeToDOM(container);
                state.convertByDOMParser(container);
            }
        }
    },
    customInline: function (state, node, _a) {
        var entering = _a.entering, skipChildren = _a.skipChildren;
        var _b = node, info = _b.info, firstChild = _b.firstChild;
        var schema = state.schema;
        if (info.indexOf('widget') !== -1 && entering) {
            var content = getWidgetContent(node);
            skipChildren();
            state.addNode(schema.nodes.widget, { info: info }, [
                schema.text(createWidgetContent(info, content)),
            ]);
        }
        else {
            var text = '$$';
            if (entering) {
                text += firstChild ? info + " " : info;
            }
            state.addText(text);
        }
    },
};
function createWwConvertors(customConvertors) {
    var customConvertorTypes = Object.keys(customConvertors);
    var convertors = __assign({}, toWwConvertors);
    var renderer = new Renderer({
        gfm: true,
        nodeId: true,
        convertors: customConvertors,
    });
    var orgConvertors = renderer.getConvertors();
    customConvertorTypes.forEach(function (type) {
        var wwConvertor = toWwConvertors[type];
        if (wwConvertor && !includes(['htmlBlock', 'htmlInline'], type)) {
            convertors[type] = function (state, node, context) {
                context.origin = function () { return orgConvertors[type](node, context, orgConvertors); };
                var tokens = customConvertors[type](node, context);
                var attrs;
                if (tokens) {
                    var _a = Array.isArray(tokens) ? tokens[0] : tokens, htmlAttrs = _a.attributes, classNames = _a.classNames;
                    attrs = { htmlAttrs: htmlAttrs, classNames: classNames };
                }
                wwConvertor(state, node, context, attrs);
            };
        }
    });
    return convertors;
}

function mergeMarkText(a, b) {
    if (a.isText && b.isText && Mark$1.sameSet(a.marks, b.marks)) {
        // @ts-ignore
        // type is not defined for "withText" in prosemirror-model
        return a.withText(a.text + b.text);
    }
    return false;
}
var ToWwConvertorState = /** @class */ (function () {
    function ToWwConvertorState(schema, convertors) {
        this.schema = schema;
        this.convertors = convertors;
        this.stack = [{ type: this.schema.topNodeType, attrs: null, content: [] }];
        this.marks = Mark$1.none;
    }
    ToWwConvertorState.prototype.top = function () {
        return last(this.stack);
    };
    ToWwConvertorState.prototype.push = function (node) {
        if (this.stack.length) {
            this.top().content.push(node);
        }
    };
    ToWwConvertorState.prototype.addText = function (text) {
        if (text) {
            var nodes = this.top().content;
            var lastNode = last(nodes);
            var node = this.schema.text(text, this.marks);
            var merged = lastNode && mergeMarkText(lastNode, node);
            if (merged) {
                nodes[nodes.length - 1] = merged;
            }
            else {
                nodes.push(node);
            }
        }
    };
    ToWwConvertorState.prototype.openMark = function (mark) {
        this.marks = mark.addToSet(this.marks);
    };
    ToWwConvertorState.prototype.closeMark = function (mark) {
        this.marks = mark.removeFromSet(this.marks);
    };
    ToWwConvertorState.prototype.addNode = function (type, attrs, content) {
        var node = type.createAndFill(attrs, content, this.marks);
        if (node) {
            this.push(node);
            return node;
        }
        return null;
    };
    ToWwConvertorState.prototype.openNode = function (type, attrs) {
        this.stack.push({ type: type, attrs: attrs, content: [] });
    };
    ToWwConvertorState.prototype.closeNode = function () {
        if (this.marks.length) {
            this.marks = Mark$1.none;
        }
        var _a = this.stack.pop(), type = _a.type, attrs = _a.attrs, content = _a.content;
        return this.addNode(type, attrs, content);
    };
    ToWwConvertorState.prototype.convertByDOMParser = function (root) {
        var _this = this;
        var doc = DOMParser.fromSchema(this.schema).parse(root);
        doc.content.forEach(function (node) { return _this.push(node); });
    };
    ToWwConvertorState.prototype.closeUnmatchedHTMLInline = function (node, entering) {
        var _a;
        if (!entering && node.type !== 'htmlInline') {
            var length_1 = this.stack.length - 1;
            for (var i = length_1; i >= 0; i -= 1) {
                var nodeInfo = this.stack[i];
                if ((_a = nodeInfo.attrs) === null || _a === void 0 ? void 0 : _a.rawHTML) {
                    if (nodeInfo.content.length) {
                        this.closeNode();
                    }
                    else {
                        // just pop useless unmatched html inline node
                        this.stack.pop();
                    }
                }
                else {
                    break;
                }
            }
        }
    };
    ToWwConvertorState.prototype.convert = function (mdNode, infoForPosSync) {
        var walker = mdNode.walker();
        var event = walker.next();
        var _loop_1 = function () {
            var node = event.node, entering = event.entering;
            var convertor = this_1.convertors[node.type];
            var skipped = false;
            if (convertor) {
                var context = {
                    entering: entering,
                    leaf: !isContainer$1(node),
                    getChildrenText: getChildrenText,
                    options: { gfm: true, nodeId: false, tagFilter: false, softbreak: '\n' },
                    skipChildren: function () {
                        skipped = true;
                    },
                };
                this_1.closeUnmatchedHTMLInline(node, entering);
                convertor(this_1, node, context);
                if ((infoForPosSync === null || infoForPosSync === void 0 ? void 0 : infoForPosSync.node) === node) {
                    var pos = this_1.stack.reduce(function (nodeSize, stackItem) {
                        return nodeSize +
                            stackItem.content.reduce(function (contentSize, pmNode) { return contentSize + pmNode.nodeSize; }, 0);
                    }, 0) + 1;
                    infoForPosSync.setMappedPos(pos);
                }
            }
            if (skipped) {
                walker.resumeAt(node, false);
                walker.next();
            }
            event = walker.next();
        };
        var this_1 = this;
        while (event) {
            _loop_1();
        }
    };
    ToWwConvertorState.prototype.convertNode = function (mdNode, infoForPosSync) {
        this.convert(mdNode, infoForPosSync);
        if (this.stack.length) {
            return this.closeNode();
        }
        return null;
    };
    return ToWwConvertorState;
}());

function convertToRawHTMLHavingInlines(state, node, _a) {
    var openTag = _a[0], closeTag = _a[1];
    state.write(openTag);
    state.convertInline(node);
    state.write(closeTag);
}
function convertToRawHTMLHavingBlocks(state, _a, _b) {
    var node = _a.node, parent = _a.parent;
    var openTag = _b[0], closeTag = _b[1];
    state.stopNewline = true;
    state.write(openTag);
    state.convertNode(node);
    state.write(closeTag);
    if ((parent === null || parent === void 0 ? void 0 : parent.type.name) === 'doc') {
        state.closeBlock(node);
        state.stopNewline = false;
    }
}
function createTableHeadDelim(textContent, columnAlign) {
    var textLen = textContent.length;
    var leftDelim = '';
    var rightDelim = '';
    if (columnAlign === 'left') {
        leftDelim = ':';
        textLen -= 1;
    }
    else if (columnAlign === 'right') {
        rightDelim = ':';
        textLen -= 1;
    }
    else if (columnAlign === 'center') {
        leftDelim = ':';
        rightDelim = ':';
        textLen -= 2;
    }
    return "" + leftDelim + repeat('-', Math.max(textLen, 3)) + rightDelim;
}
var nodeTypeWriters = {
    text: function (state, _a) {
        var _b;
        var node = _a.node;
        var text = (_b = node.text) !== null && _b !== void 0 ? _b : '';
        if ((node.marks || []).some(function (mark) { return mark.type.name === 'link'; })) {
            state.text(escapeTextForLink(text), false);
        }
        else {
            state.text(text);
        }
    },
    paragraph: function (state, _a) {
        var node = _a.node, parent = _a.parent, _b = _a.index, index = _b === void 0 ? 0 : _b;
        if (state.stopNewline) {
            state.convertInline(node);
        }
        else {
            var firstChildNode = index === 0;
            var prevNode = !firstChildNode && parent.child(index - 1);
            var prevEmptyNode = prevNode && prevNode.childCount === 0;
            var nextNode = index < parent.childCount - 1 && parent.child(index + 1);
            var nextParaNode = nextNode && nextNode.type.name === 'paragraph';
            var emptyNode = node.childCount === 0;
            if (emptyNode && prevEmptyNode) {
                state.write('<br>\n');
            }
            else if (emptyNode && !prevEmptyNode && !firstChildNode) {
                if ((parent === null || parent === void 0 ? void 0 : parent.type.name) === 'listItem') {
                    var prevDelim = state.getDelim();
                    state.setDelim('');
                    state.write('<br>');
                    state.setDelim(prevDelim);
                }
                state.write('\n');
            }
            else {
                state.convertInline(node);
                if (nextParaNode) {
                    state.write('\n');
                }
                else {
                    state.closeBlock(node);
                }
            }
        }
    },
    heading: function (state, _a, _b) {
        var node = _a.node;
        var delim = _b.delim;
        var headingType = node.attrs.headingType;
        if (headingType === 'atx') {
            state.write(delim + " ");
            state.convertInline(node);
            state.closeBlock(node);
        }
        else {
            state.convertInline(node);
            state.ensureNewLine();
            state.write(delim);
            state.closeBlock(node);
        }
    },
    codeBlock: function (state, _a, _b) {
        var node = _a.node;
        var delim = _b.delim, text = _b.text;
        var _c = delim, openDelim = _c[0], closeDelim = _c[1];
        state.write(openDelim);
        state.ensureNewLine();
        state.text(text, false);
        state.ensureNewLine();
        state.write(closeDelim);
        state.closeBlock(node);
    },
    blockQuote: function (state, _a, _b) {
        var node = _a.node, parent = _a.parent;
        var delim = _b.delim;
        if ((parent === null || parent === void 0 ? void 0 : parent.type.name) === node.type.name) {
            state.flushClose(1);
        }
        state.wrapBlock(delim, null, node, function () { return state.convertNode(node); });
    },
    bulletList: function (state, _a, _b) {
        var node = _a.node;
        var delim = _b.delim;
        // soft-tab(4)
        state.convertList(node, repeat(' ', 4), function () { return delim + " "; });
    },
    orderedList: function (state, _a) {
        var node = _a.node;
        var start = node.attrs.order || 1;
        // soft-tab(4)
        state.convertList(node, repeat(' ', 4), function (index) {
            var orderedNum = String(start + index);
            return orderedNum + ". ";
        });
    },
    listItem: function (state, _a) {
        var node = _a.node;
        var _b = node.attrs, task = _b.task, checked = _b.checked;
        if (task) {
            state.write("[" + (checked ? 'x' : ' ') + "] ");
        }
        state.convertNode(node);
    },
    image: function (state, _, _a) {
        var attrs = _a.attrs;
        state.write("![" + (attrs === null || attrs === void 0 ? void 0 : attrs.altText) + "](" + (attrs === null || attrs === void 0 ? void 0 : attrs.imageUrl) + ")");
    },
    thematicBreak: function (state, _a, _b) {
        var node = _a.node;
        var delim = _b.delim;
        state.write(delim);
        state.closeBlock(node);
    },
    table: function (state, _a) {
        var node = _a.node;
        state.convertNode(node);
        state.closeBlock(node);
    },
    tableHead: function (state, _a, _b) {
        var node = _a.node;
        var delim = _b.delim;
        var row = node.firstChild;
        state.convertNode(node);
        var result = delim !== null && delim !== void 0 ? delim : '';
        if (!delim && row) {
            row.forEach(function (_a) {
                var textContent = _a.textContent, attrs = _a.attrs;
                var headDelim = createTableHeadDelim(textContent, attrs.align);
                result += "| " + headDelim + " ";
            });
        }
        state.write(result + "|");
        state.ensureNewLine();
    },
    tableBody: function (state, _a) {
        var node = _a.node;
        state.convertNode(node);
    },
    tableRow: function (state, _a) {
        var node = _a.node;
        state.convertNode(node);
        state.write('|');
        state.ensureNewLine();
    },
    tableHeadCell: function (state, _a, _b) {
        var node = _a.node;
        var _c = _b.delim, delim = _c === void 0 ? '| ' : _c;
        state.write(delim);
        state.convertTableCell(node);
        state.write(' ');
    },
    tableBodyCell: function (state, _a, _b) {
        var node = _a.node;
        var _c = _b.delim, delim = _c === void 0 ? '| ' : _c;
        state.write(delim);
        state.convertTableCell(node);
        state.write(' ');
    },
    customBlock: function (state, _a, _b) {
        var node = _a.node;
        var delim = _b.delim, text = _b.text;
        var _c = delim, openDelim = _c[0], closeDelim = _c[1];
        state.write(openDelim);
        state.ensureNewLine();
        state.text(text, false);
        state.ensureNewLine();
        state.write(closeDelim);
        state.closeBlock(node);
    },
    frontMatter: function (state, _a, _b) {
        var node = _a.node;
        var text = _b.text;
        state.text(text, false);
        state.closeBlock(node);
    },
    widget: function (state, _, _a) {
        var text = _a.text;
        state.write(text);
    },
    html: function (state, _a, _b) {
        var node = _a.node;
        var text = _b.text;
        state.write(text);
        if (node.attrs.htmlBlock) {
            state.closeBlock(node);
        }
    },
    htmlComment: function (state, _a, _b) {
        var node = _a.node;
        var text = _b.text;
        state.write(text);
        state.closeBlock(node);
    },
};
function write(type, _a) {
    var state = _a.state, nodeInfo = _a.nodeInfo, params = _a.params;
    var rawHTML = params.rawHTML;
    if (rawHTML) {
        if (inArray_1(type, ['heading', 'codeBlock']) > -1) {
            convertToRawHTMLHavingInlines(state, nodeInfo.node, rawHTML);
        }
        else if (inArray_1(type, ['image', 'thematicBreak']) > -1) {
            state.write(rawHTML);
        }
        else {
            convertToRawHTMLHavingBlocks(state, nodeInfo, rawHTML);
        }
    }
    else {
        nodeTypeWriters[type](state, nodeInfo, params);
    }
}

function addBackticks(node, side) {
    var text = node.text;
    var ticks = /`+/g;
    var len = 0;
    if (node.isText && text) {
        var matched = ticks.exec(text);
        while (matched) {
            len = Math.max(len, matched[0].length);
            matched = ticks.exec(text);
        }
    }
    var result = len > 0 && side > 0 ? ' `' : '`';
    for (var i = 0; i < len; i += 1) {
        result += '`';
    }
    if (len > 0 && side < 0) {
        result += ' ';
    }
    return result;
}
function getPairRawHTML(rawHTML) {
    return rawHTML ? ["<" + rawHTML + ">", "</" + rawHTML + ">"] : null;
}
function getOpenRawHTML(rawHTML) {
    return rawHTML ? "<" + rawHTML + ">" : null;
}
function getCloseRawHTML(rawHTML) {
    return rawHTML ? "</" + rawHTML + ">" : null;
}
var toMdConvertors = {
    heading: function (_a) {
        var node = _a.node;
        var attrs = node.attrs;
        var level = attrs.level;
        var delim = repeat('#', level);
        if (attrs.headingType === 'setext') {
            delim = level === 1 ? '===' : '---';
        }
        return {
            delim: delim,
            rawHTML: getPairRawHTML(attrs.rawHTML),
        };
    },
    codeBlock: function (_a) {
        var node = _a.node;
        var _b = node, attrs = _b.attrs, textContent = _b.textContent;
        return {
            delim: ["```" + (attrs.language || ''), '```'],
            rawHTML: getPairRawHTML(attrs.rawHTML),
            text: textContent,
        };
    },
    blockQuote: function (_a) {
        var node = _a.node;
        return {
            delim: '> ',
            rawHTML: getPairRawHTML(node.attrs.rawHTML),
        };
    },
    bulletList: function (_a, _b) {
        var node = _a.node;
        var inTable = _b.inTable;
        var rawHTML = node.attrs.rawHTML;
        if (inTable) {
            rawHTML = rawHTML || 'ul';
        }
        return {
            delim: '*',
            rawHTML: getPairRawHTML(rawHTML),
        };
    },
    orderedList: function (_a, _b) {
        var node = _a.node;
        var inTable = _b.inTable;
        var rawHTML = node.attrs.rawHTML;
        if (inTable) {
            rawHTML = rawHTML || 'ol';
        }
        return {
            rawHTML: getPairRawHTML(rawHTML),
        };
    },
    listItem: function (_a, _b) {
        var node = _a.node;
        var inTable = _b.inTable;
        var _c = node.attrs, task = _c.task, checked = _c.checked;
        var rawHTML = node.attrs.rawHTML;
        if (inTable) {
            rawHTML = rawHTML || 'li';
        }
        var className = task ? " class=\"task-list-item" + (checked ? ' checked' : '') + "\"" : '';
        var dataset = task ? " data-task" + (checked ? " data-task-checked" : '') : '';
        return {
            rawHTML: rawHTML ? ["<" + rawHTML + className + dataset + ">", "</" + rawHTML + ">"] : null,
        };
    },
    table: function (_a) {
        var node = _a.node;
        return {
            rawHTML: getPairRawHTML(node.attrs.rawHTML),
        };
    },
    tableHead: function (_a) {
        var node = _a.node;
        return {
            rawHTML: getPairRawHTML(node.attrs.rawHTML),
        };
    },
    tableBody: function (_a) {
        var node = _a.node;
        return {
            rawHTML: getPairRawHTML(node.attrs.rawHTML),
        };
    },
    tableRow: function (_a) {
        var node = _a.node;
        return {
            rawHTML: getPairRawHTML(node.attrs.rawHTML),
        };
    },
    tableHeadCell: function (_a) {
        var node = _a.node;
        return {
            rawHTML: getPairRawHTML(node.attrs.rawHTML),
        };
    },
    tableBodyCell: function (_a) {
        var node = _a.node;
        return {
            rawHTML: getPairRawHTML(node.attrs.rawHTML),
        };
    },
    image: function (_a) {
        var node = _a.node;
        var attrs = node.attrs;
        var rawHTML = attrs.rawHTML, altText = attrs.altText;
        var imageUrl = attrs.imageUrl.replace(/&amp;/g, '&');
        var altAttr = altText ? " alt=\"" + escapeXml(altText) + "\"" : '';
        return {
            rawHTML: rawHTML ? "<" + rawHTML + " src=\"" + escapeXml(imageUrl) + "\"" + altAttr + ">" : null,
            attrs: {
                altText: escapeTextForLink(altText || ''),
                imageUrl: imageUrl,
            },
        };
    },
    thematicBreak: function (_a) {
        var node = _a.node;
        return {
            delim: '***',
            rawHTML: getOpenRawHTML(node.attrs.rawHTML),
        };
    },
    customBlock: function (_a) {
        var node = _a.node;
        var _b = node, attrs = _b.attrs, textContent = _b.textContent;
        return {
            delim: ["$$" + attrs.info, '$$'],
            text: textContent,
        };
    },
    frontMatter: function (_a) {
        var node = _a.node;
        return {
            text: node.textContent,
        };
    },
    widget: function (_a) {
        var node = _a.node;
        return {
            text: node.textContent,
        };
    },
    strong: function (_a, _b) {
        var node = _a.node;
        var entering = _b.entering;
        var rawHTML = node.attrs.rawHTML;
        return {
            delim: '**',
            rawHTML: entering ? getOpenRawHTML(rawHTML) : getCloseRawHTML(rawHTML),
        };
    },
    emph: function (_a, _b) {
        var node = _a.node;
        var entering = _b.entering;
        var rawHTML = node.attrs.rawHTML;
        return {
            delim: '*',
            rawHTML: entering ? getOpenRawHTML(rawHTML) : getCloseRawHTML(rawHTML),
        };
    },
    strike: function (_a, _b) {
        var node = _a.node;
        var entering = _b.entering;
        var rawHTML = node.attrs.rawHTML;
        return {
            delim: '~~',
            rawHTML: entering ? getOpenRawHTML(rawHTML) : getCloseRawHTML(rawHTML),
        };
    },
    link: function (_a, _b) {
        var node = _a.node;
        var entering = _b.entering;
        var attrs = node.attrs;
        var title = attrs.title, rawHTML = attrs.rawHTML;
        var linkUrl = attrs.linkUrl.replace(/&amp;/g, '&');
        var titleAttr = title ? " title=\"" + escapeXml(title) + "\"" : '';
        if (entering) {
            return {
                delim: '[',
                rawHTML: rawHTML ? "<" + rawHTML + " href=\"" + escapeXml(linkUrl) + "\"" + titleAttr + ">" : null,
            };
        }
        return {
            delim: "](" + linkUrl + (title ? " " + quote(escapeTextForLink(title)) : '') + ")",
            rawHTML: getCloseRawHTML(rawHTML),
        };
    },
    code: function (_a, _b) {
        var node = _a.node, parent = _a.parent, _c = _a.index, index = _c === void 0 ? 0 : _c;
        var entering = _b.entering;
        var delim = entering
            ? addBackticks(parent.child(index), -1)
            : addBackticks(parent.child(index - 1), 1);
        var rawHTML = entering
            ? getOpenRawHTML(node.attrs.rawHTML)
            : getCloseRawHTML(node.attrs.rawHTML);
        return {
            delim: delim,
            rawHTML: rawHTML,
        };
    },
    htmlComment: function (_a) {
        var node = _a.node;
        return {
            text: node.textContent,
        };
    },
    // html inline node, html block node
    html: function (_a, _b) {
        var node = _a.node;
        var entering = _b.entering;
        var tagName = node.type.name;
        var attrs = node.attrs.htmlAttrs;
        var openTag = "<" + tagName;
        var closeTag = "</" + tagName + ">";
        Object.keys(attrs).forEach(function (attrName) {
            // To prevent broken converting when attributes has double quote string
            openTag += " " + attrName + "=\"" + attrs[attrName].replace(/"/g, "'") + "\"";
        });
        openTag += '>';
        if (node.attrs.htmlInline) {
            return {
                rawHTML: entering ? openTag : closeTag,
            };
        }
        return {
            text: "" + openTag + node.attrs.childrenHTML + closeTag,
        };
    },
};
var markTypeOptions = {
    strong: {
        mixable: true,
        removedEnclosingWhitespace: true,
    },
    emph: {
        mixable: true,
        removedEnclosingWhitespace: true,
    },
    strike: {
        mixable: true,
        removedEnclosingWhitespace: true,
    },
    code: {
        escape: false,
    },
    link: null,
    html: null,
};
function createNodeTypeConvertors(convertors) {
    var nodeTypeConvertors = {};
    var nodeTypes = Object.keys(nodeTypeWriters);
    nodeTypes.forEach(function (type) {
        nodeTypeConvertors[type] = function (state, nodeInfo) {
            var writer = nodeTypeWriters[type];
            if (writer) {
                var convertor = convertors[type];
                var params = convertor
                    ? convertor(nodeInfo, {
                        inTable: state.inTable,
                    })
                    : {};
                write(type, { state: state, nodeInfo: nodeInfo, params: params });
            }
        };
    });
    return nodeTypeConvertors;
}
function createMarkTypeConvertors(convertors) {
    var markTypeConvertors = {};
    var markTypes = Object.keys(markTypeOptions);
    markTypes.forEach(function (type) {
        markTypeConvertors[type] = function (nodeInfo, entering) {
            var markOption = markTypeOptions[type];
            var convertor = convertors[type];
            // There are two ways to call the mark type converter
            // in the `toMdConvertorState` module.
            // When calling the converter without using `delim` and `rawHTML` values,
            // the converter is called without parameters.
            var runConvertor = convertor && nodeInfo && !isUndefined_1(entering);
            var params = runConvertor ? convertor(nodeInfo, { entering: entering }) : {};
            return __assign(__assign({}, params), markOption);
        };
    });
    return markTypeConvertors;
}
// Step 1: Create the converter by overriding the custom converter
//         to the original converter defined in the `toMdConvertors` module.
//         If the node type is defined in the original converter,
//         the `origin()` function is exported to the paramter of the converter.
// Step 2: Create a converter for the node type of ProseMirror by combining the converter
//         created in Step 1 with the writers defined in the`toMdNodeTypeWriters` module.
//         Each writer converts the ProseMirror's node to a string with the value returned
//         by the converter, and then stores the state in the`toMdConverterState` class.
// Step 3: Create a converter for the mark type of ProseMirror by combining the converter
//         created in Step 1 with `markTypeOptions`.
// Step 4: The created node type converter and mark type converter are injected
//         when creating an instance of the`toMdConverterState` class.
function createMdConvertors(customConvertors) {
    var customConvertorTypes = Object.keys(customConvertors);
    customConvertorTypes.forEach(function (type) {
        var baseConvertor = toMdConvertors[type];
        var customConvertor = customConvertors[type];
        if (baseConvertor) {
            toMdConvertors[type] = function (nodeInfo, context) {
                context.origin = function () { return baseConvertor(nodeInfo, context); };
                return customConvertor(nodeInfo, context);
            };
        }
        else {
            toMdConvertors[type] = customConvertor;
        }
        delete customConvertors[type];
    });
    var nodeTypeConvertors = createNodeTypeConvertors(toMdConvertors);
    var markTypeConvertors = createMarkTypeConvertors(toMdConvertors);
    return {
        nodeTypeConvertors: nodeTypeConvertors,
        markTypeConvertors: markTypeConvertors,
    };
}

var ToMdConvertorState = /** @class */ (function () {
    function ToMdConvertorState(_a) {
        var nodeTypeConvertors = _a.nodeTypeConvertors, markTypeConvertors = _a.markTypeConvertors;
        this.nodeTypeConvertors = nodeTypeConvertors;
        this.markTypeConvertors = markTypeConvertors;
        this.delim = '';
        this.result = '';
        this.closed = false;
        this.tightList = false;
        this.stopNewline = false;
        this.inTable = false;
    }
    ToMdConvertorState.prototype.getMarkConvertor = function (mark) {
        var type = mark.attrs.htmlInline ? 'html' : mark.type.name;
        return this.markTypeConvertors[type];
    };
    ToMdConvertorState.prototype.isInBlank = function () {
        return /(^|\n)$/.test(this.result);
    };
    ToMdConvertorState.prototype.markText = function (mark, entering, parent, index) {
        var convertor = this.getMarkConvertor(mark);
        if (convertor) {
            var _a = convertor({ node: mark, parent: parent, index: index }, entering), delim = _a.delim, rawHTML = _a.rawHTML;
            return rawHTML || delim;
        }
        return '';
    };
    ToMdConvertorState.prototype.setDelim = function (delim) {
        this.delim = delim;
    };
    ToMdConvertorState.prototype.getDelim = function () {
        return this.delim;
    };
    ToMdConvertorState.prototype.flushClose = function (size) {
        if (!this.stopNewline && this.closed) {
            if (!this.isInBlank()) {
                this.result += '\n';
            }
            if (!size) {
                size = 2;
            }
            if (size > 1) {
                var delimMin = this.delim;
                var trim = /\s+$/.exec(delimMin);
                if (trim) {
                    delimMin = delimMin.slice(0, delimMin.length - trim[0].length);
                }
                for (var i = 1; i < size; i += 1) {
                    this.result += delimMin + "\n";
                }
            }
            this.closed = false;
        }
    };
    ToMdConvertorState.prototype.wrapBlock = function (delim, firstDelim, node, fn) {
        var old = this.getDelim();
        this.write(firstDelim || delim);
        this.setDelim(this.getDelim() + delim);
        fn();
        this.setDelim(old);
        this.closeBlock(node);
    };
    ToMdConvertorState.prototype.ensureNewLine = function () {
        if (!this.isInBlank()) {
            this.result += '\n';
        }
    };
    ToMdConvertorState.prototype.write = function (content) {
        if (content === void 0) { content = ''; }
        this.flushClose();
        if (this.delim && this.isInBlank()) {
            this.result += this.delim;
        }
        if (content) {
            this.result += content;
        }
    };
    ToMdConvertorState.prototype.closeBlock = function (node) {
        this.closed = node;
    };
    ToMdConvertorState.prototype.text = function (text, escaped) {
        if (escaped === void 0) { escaped = true; }
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i += 1) {
            this.write();
            this.result += escaped ? escape(lines[i]) : lines[i];
            if (i !== lines.length - 1) {
                this.result += '\n';
            }
        }
    };
    ToMdConvertorState.prototype.convertBlock = function (node, parent, index) {
        var type = node.type.name;
        var convertor = this.nodeTypeConvertors[type];
        var nodeInfo = { node: node, parent: parent, index: index };
        if (node.attrs.htmlBlock) {
            this.nodeTypeConvertors.html(this, nodeInfo);
        }
        else if (convertor) {
            convertor(this, nodeInfo);
        }
    };
    ToMdConvertorState.prototype.convertInline = function (parent) {
        var _this = this;
        var active = [];
        var trailing = '';
        var progress = function (node, _, index) {
            var marks = node ? node.marks : [];
            var leading = trailing;
            trailing = '';
            // If whitespace has to be expelled from the node, adjust
            // leading and trailing accordingly.
            var removedWhitespace = node &&
                node.isText &&
                marks.some(function (mark) {
                    var markConvertor = _this.getMarkConvertor(mark);
                    var info = markConvertor && markConvertor();
                    return info && info.removedEnclosingWhitespace;
                });
            if (removedWhitespace && node && node.text) {
                var _a = /^(\s*)(.*?)(\s*)$/m.exec(node.text), lead = _a[1], mark = _a[2], trail = _a[3];
                leading += lead;
                trailing = trail;
                if (lead || trail) {
                    // @ts-ignore
                    // type is not defined for "withText" in prosemirror-model
                    node = mark ? node.withText(mark) : null;
                    if (!node) {
                        marks = active;
                    }
                }
            }
            var lastMark = marks.length && last(marks);
            var markConvertor = lastMark && _this.getMarkConvertor(lastMark);
            var markType = markConvertor && markConvertor();
            var noEscape = markType && markType.escape === false;
            var len = marks.length - (noEscape ? 1 : 0);
            // Try to reorder 'mixable' marks, such as em and strong, which
            // in Markdown may be opened and closed in different order, so
            // that order of the marks for the token matches the order in
            // active.
            for (var i = 0; i < len; i += 1) {
                var mark = marks[i];
                if (markType && !markType.mixable) {
                    break;
                }
                for (var j = 0; j < active.length; j += 1) {
                    var other = active[j];
                    if (markType && !markType.mixable) {
                        break;
                    }
                    if (mark.eq(other)) {
                        // eslint-disable-next-line max-depth
                        if (i > j) {
                            marks = marks
                                .slice(0, j)
                                .concat(mark)
                                .concat(marks.slice(j, i))
                                .concat(marks.slice(i + 1, len));
                        }
                        else if (j > i) {
                            marks = marks
                                .slice(0, i)
                                .concat(marks.slice(i + 1, j))
                                .concat(mark)
                                .concat(marks.slice(j, len));
                        }
                        break;
                    }
                }
            }
            // Find the prefix of the mark set that didn't change
            var keep = 0;
            while (keep < Math.min(active.length, len) && marks[keep].eq(active[keep])) {
                keep += 1;
            }
            // Close the marks that need to be closed
            while (keep < active.length) {
                var activedMark = active.pop();
                if (activedMark) {
                    _this.text(_this.markText(activedMark, false, parent, index), false);
                }
            }
            // Output any previously expelled trailing whitespace outside the marks
            if (leading) {
                _this.text(leading);
            }
            // Open the marks that need to be opened
            if (node) {
                while (active.length < len) {
                    var mark = marks[active.length];
                    active.push(mark);
                    _this.text(_this.markText(mark, true, parent, index), false);
                }
                // Render the node. Special case code marks, since their content
                // may not be escaped.
                if (noEscape && node.isText) {
                    _this.text(_this.markText(lastMark, true, parent, index) +
                        node.text +
                        _this.markText(lastMark, false, parent, index + 1), false);
                }
                else {
                    _this.convertBlock(node, parent, index);
                }
            }
        };
        parent.forEach(progress);
        progress(null, null, parent.childCount);
    };
    // Render a node's content as a list. `delim` should be the extra
    // indentation added to all lines except the first in an item,
    // `firstDelimFn` is a function going from an item index to a
    // delimiter for the first line of the item.
    ToMdConvertorState.prototype.convertList = function (node, delim, firstDelimFn) {
        var _this = this;
        var _a;
        if (this.closed && this.closed.type === node.type) {
            this.flushClose(3);
        }
        else if (this.tightList) {
            this.flushClose(1);
        }
        var tight = (_a = node.attrs.tight) !== null && _a !== void 0 ? _a : true;
        var prevTight = this.tightList;
        this.tightList = tight;
        node.forEach(function (child, _, index) {
            if (index && tight) {
                _this.flushClose(1);
            }
            _this.wrapBlock(delim, firstDelimFn(index), node, function () { return _this.convertBlock(child, node, index); });
        });
        this.tightList = prevTight;
    };
    ToMdConvertorState.prototype.convertTableCell = function (node) {
        var _this = this;
        this.stopNewline = true;
        this.inTable = true;
        node.forEach(function (child, _, index) {
            if (includes(['bulletList', 'orderedList'], child.type.name)) {
                _this.convertBlock(child, node, index);
                _this.closed = false;
            }
            else {
                _this.convertInline(child);
                if (index < node.childCount - 1) {
                    var nextChild = node.child(index + 1);
                    if (nextChild.type.name === 'paragraph') {
                        _this.write('<br>');
                    }
                }
            }
        });
        this.stopNewline = false;
        this.inTable = false;
    };
    ToMdConvertorState.prototype.convertNode = function (parent, infoForPosSync) {
        var _this = this;
        parent.forEach(function (node, _, index) {
            _this.convertBlock(node, parent, index);
            if ((infoForPosSync === null || infoForPosSync === void 0 ? void 0 : infoForPosSync.node) === node) {
                var lineTexts = _this.result.split('\n');
                infoForPosSync.setMappedPos([lineTexts.length, last(lineTexts).length + 1]);
            }
        });
        return this.result;
    };
    return ToMdConvertorState;
}());

var Convertor = /** @class */ (function () {
    function Convertor(schema, toMdConvertors, toHTMLConvertors, eventEmitter) {
        var _this = this;
        this.setMappedPos = function (pos) {
            _this.mappedPosWhenConverting = pos;
        };
        this.schema = schema;
        this.eventEmitter = eventEmitter;
        this.focusedNode = null;
        this.mappedPosWhenConverting = null;
        this.toWwConvertors = createWwConvertors(toHTMLConvertors);
        this.toMdConvertors = createMdConvertors(toMdConvertors || {});
        this.eventEmitter.listen('setFocusedNode', function (node) { return (_this.focusedNode = node); });
    }
    Convertor.prototype.getMappedPos = function () {
        return this.mappedPosWhenConverting;
    };
    Convertor.prototype.getInfoForPosSync = function () {
        return { node: this.focusedNode, setMappedPos: this.setMappedPos };
    };
    Convertor.prototype.toWysiwygModel = function (mdNode) {
        var state = new ToWwConvertorState(this.schema, this.toWwConvertors);
        return state.convertNode(mdNode, this.getInfoForPosSync());
    };
    Convertor.prototype.toMarkdownText = function (wwNode) {
        var state = new ToMdConvertorState(this.toMdConvertors);
        var markdownText = state.convertNode(wwNode, this.getInfoForPosSync());
        markdownText = this.eventEmitter.emitReduce('beforeConvertWysiwygToMarkdown', markdownText);
        return markdownText;
    };
    return Convertor;
}());

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

function isPmNode(node) {
    return node instanceof Node$2;
}
function isContainer(type) {
    var containerTypes = [
        'document',
        'blockQuote',
        'bulletList',
        'orderedList',
        'listItem',
        'paragraph',
        'heading',
        'emph',
        'strong',
        'strike',
        'link',
        'image',
        'table',
        'tableHead',
        'tableBody',
        'tableRow',
        'tableHeadCell',
        'tableBodyCell',
    ];
    return includes(containerTypes, type);
}
function createMdLikeNode(node) {
    var attrs = node.attrs, type = node.type;
    var nodeType = type.name;
    var mdLikeNode = {
        type: nodeType,
        wysiwygNode: true,
        literal: !isContainer(nodeType) && isPmNode(node) ? node.textContent : null,
    };
    var nodeTypeMap = {
        heading: { level: attrs.level },
        link: { destination: attrs.linkUrl, title: attrs.title },
        image: { destination: attrs.imageUrl },
        codeBlock: { info: attrs.language },
        bulletList: { type: 'list', listData: { type: 'bullet' } },
        orderedList: { type: 'list', listData: { type: 'ordered', start: attrs.order } },
        listItem: { type: 'item', listData: { task: attrs.task, checked: attrs.checked } },
        tableHeadCell: { type: 'tableCell', cellType: 'head', align: attrs.align },
        tableBodyCell: { type: 'tableCell', cellType: 'body', align: attrs.align },
        customBlock: { info: attrs.info },
    };
    var nodeInfo = nodeTypeMap[nodeType];
    var attributes = __assign(__assign({}, mdLikeNode), nodeInfo);
    // html block, inline node
    var _a = node.attrs, htmlAttrs = _a.htmlAttrs, childrenHTML = _a.childrenHTML;
    if (htmlAttrs) {
        return __assign(__assign({}, attributes), { attrs: htmlAttrs, childrenHTML: childrenHTML });
    }
    return attributes;
}

var tokenToDOMNode = {
    openTag: function (token, stack) {
        var _a = token, tagName = _a.tagName, classNames = _a.classNames, attributes = _a.attributes;
        var el = document.createElement(tagName);
        var attrs = {};
        if (classNames) {
            el.className = classNames.join(' ');
        }
        if (attributes) {
            attrs = __assign(__assign({}, attrs), attributes);
        }
        setAttributes(attrs, el);
        stack.push(el);
    },
    closeTag: function (_, stack) {
        if (stack.length > 1) {
            var el = stack.pop();
            last(stack).appendChild(el);
        }
    },
    html: function (token, stack) {
        last(stack).insertAdjacentHTML('beforeend', token.content);
    },
    text: function (token, stack) {
        var textNode = document.createTextNode(token.content);
        last(stack).appendChild(textNode);
    },
};
var WwToDOMAdaptor = /** @class */ (function () {
    function WwToDOMAdaptor(linkAttributes, customRenderer) {
        var convertors = getHTMLRenderConvertors(linkAttributes, customRenderer);
        var customHTMLConvertor = __assign(__assign({}, customRenderer.htmlBlock), customRenderer.htmlInline);
        // flatten the html block, inline convertor to other custom convertors
        this.customConvertorKeys = Object.keys(customRenderer).concat(Object.keys(customHTMLConvertor));
        this.renderer = new Renderer({
            gfm: true,
            convertors: __assign(__assign({}, convertors), customHTMLConvertor),
        });
        this.convertors = this.renderer.getConvertors();
    }
    WwToDOMAdaptor.prototype.generateTokens = function (node) {
        var mdLikeNode = createMdLikeNode(node);
        var context = {
            entering: true,
            leaf: isPmNode(node) ? node.isLeaf : false,
            options: this.renderer.getOptions(),
            getChildrenText: function () { return (isPmNode(node) ? node.textContent : ''); },
            skipChildren: function () { return false; },
        };
        var convertor = this.convertors[node.type.name];
        var converted = convertor(mdLikeNode, context, this.convertors);
        var tokens = isArray_1(converted) ? converted : [converted];
        if (isContainer(node.type.name) || node.attrs.htmlInline) {
            context.entering = false;
            tokens.push({ type: 'text', content: isPmNode(node) ? node.textContent : '' });
            tokens = tokens.concat(convertor(mdLikeNode, context, this.convertors));
        }
        return tokens;
    };
    WwToDOMAdaptor.prototype.toDOMNode = function (node) {
        var tokens = this.generateTokens(node);
        var stack = [];
        tokens.forEach(function (token) { return tokenToDOMNode[token.type](token, stack); });
        return stack[0];
    };
    WwToDOMAdaptor.prototype.getToDOMNode = function (name) {
        if (includes(this.customConvertorKeys, name)) {
            return this.toDOMNode.bind(this);
        }
        return null;
    };
    return WwToDOMAdaptor;
}());

var ANIMATION_TIME = 100;
var SCROLL_BLOCKING_RESET_DELAY = 15;
var currentTimeoutId = null;
var releaseTimer = null;
function run(deltaScrollTop, _a) {
    var syncScrollTop = _a.syncScrollTop, releaseEventBlock = _a.releaseEventBlock;
    if (releaseTimer) {
        clearTimeout(releaseTimer);
    }
    syncScrollTop(deltaScrollTop);
    releaseTimer = setTimeout(function () {
        releaseEventBlock();
    }, SCROLL_BLOCKING_RESET_DELAY);
}
function animate(curScrollTop, targetScrollTop, syncCallbacks) {
    var diff = targetScrollTop - curScrollTop;
    var startTime = Date.now();
    var step = function () {
        var stepTime = Date.now();
        var progress = (stepTime - startTime) / ANIMATION_TIME;
        var deltaValue;
        if (currentTimeoutId) {
            clearTimeout(currentTimeoutId);
        }
        if (progress < 1) {
            deltaValue = curScrollTop + diff * Math.cos(((1 - progress) * Math.PI) / 2);
            run(Math.ceil(deltaValue), syncCallbacks);
            currentTimeoutId = setTimeout(step, 1);
        }
        else {
            run(targetScrollTop, syncCallbacks);
            currentTimeoutId = null;
        }
    };
    step();
}

var EDITOR_BOTTOM_PADDING = 18;
var ScrollSync = /** @class */ (function () {
    function ScrollSync(mdEditor, preview, eventEmitter) {
        this.latestEditorScrollTop = null;
        this.latestPreviewScrollTop = null;
        this.blockedScroll = null;
        this.active = true;
        this.timer = null;
        var previewRoot = preview.previewContent, previewEl = preview.el;
        this.previewRoot = previewRoot;
        this.previewEl = previewEl;
        this.mdEditor = mdEditor;
        this.editorView = mdEditor.view;
        this.toastMark = mdEditor.getToastMark();
        this.eventEmitter = eventEmitter;
        this.addScrollSyncEvent();
    }
    ScrollSync.prototype.addScrollSyncEvent = function () {
        var _this = this;
        this.eventEmitter.listen('afterPreviewRender', function () {
            _this.clearTimer();
            // Immediately after the 'afterPreviewRender' event has occurred,
            // browser rendering is not yet complete.
            // So the size of elements can not be accurately measured.
            _this.timer = setTimeout(function () {
                _this.syncPreviewScrollTop(true);
            }, 200);
        });
        this.eventEmitter.listen('scroll', function (type, data) {
            if (_this.active) {
                if (type === 'editor' && _this.blockedScroll !== 'editor') {
                    _this.syncPreviewScrollTop();
                }
                else if (type === 'preview' && _this.blockedScroll !== 'preview') {
                    _this.syncEditorScrollTop(data);
                }
            }
        });
        this.eventEmitter.listen('toggleScrollSync', function (active) {
            _this.active = active;
        });
    };
    ScrollSync.prototype.getMdNodeAtPos = function (doc, posInfo) {
        var indexInfo = doc.content.findIndex(posInfo.pos);
        var line = indexInfo.index;
        return this.toastMark.findFirstNodeAtLine(line + 1);
    };
    ScrollSync.prototype.getScrollTopByCaretPos = function () {
        var pos = this.mdEditor.getSelection();
        var firstMdNode = this.toastMark.findFirstNodeAtLine(pos[0][0]);
        var previewHeight = this.previewEl.clientHeight;
        var el = getParentNodeObj(this.previewRoot, firstMdNode).el;
        var totalOffsetTop = getTotalOffsetTop(el, this.previewRoot) || el.offsetTop;
        var nodeHeight = el.clientHeight;
        // multiply 0.5 for calculating the position in the middle of preview area
        var targetScrollTop = totalOffsetTop + nodeHeight - previewHeight * 0.5;
        this.latestEditorScrollTop = null;
        var diff = el.getBoundingClientRect().top - this.previewEl.getBoundingClientRect().top;
        return diff < previewHeight ? null : targetScrollTop;
    };
    ScrollSync.prototype.syncPreviewScrollTop = function (editing) {
        if (editing === void 0) { editing = false; }
        var _a = this, editorView = _a.editorView, previewEl = _a.previewEl, previewRoot = _a.previewRoot;
        var _b = editorView.dom.getBoundingClientRect(), left = _b.left, top = _b.top;
        var posInfo = editorView.posAtCoords({ left: left, top: top });
        var doc = editorView.state.doc;
        var firstMdNode = this.getMdNodeAtPos(doc, posInfo);
        if (!firstMdNode || isHTMLNode(firstMdNode)) {
            return;
        }
        var curScrollTop = previewEl.scrollTop;
        var _c = editorView.dom, scrollTop = _c.scrollTop, scrollHeight = _c.scrollHeight, clientHeight = _c.clientHeight, children = _c.children;
        var isBottomPos = scrollHeight - scrollTop <= clientHeight + EDITOR_BOTTOM_PADDING;
        var targetScrollTop = isBottomPos ? previewEl.scrollHeight : 0;
        if (scrollTop && !isBottomPos) {
            if (editing) {
                var scrollTopByEditing = this.getScrollTopByCaretPos();
                if (!scrollTopByEditing) {
                    return;
                }
                targetScrollTop = scrollTopByEditing;
            }
            else {
                var _d = getParentNodeObj(this.previewRoot, firstMdNode), el = _d.el, mdNode = _d.mdNode;
                var _e = getEditorRangeHeightInfo(doc, mdNode, children), height = _e.height, rect = _e.rect;
                var totalOffsetTop = getTotalOffsetTop(el, previewRoot) || el.offsetTop;
                var nodeHeight = el.clientHeight;
                var ratio = top > rect.top ? Math.min((top - rect.top) / height, 1) : 0;
                targetScrollTop = totalOffsetTop + nodeHeight * ratio;
            }
            targetScrollTop = this.getResolvedScrollTop('editor', scrollTop, targetScrollTop, curScrollTop);
            this.latestEditorScrollTop = scrollTop;
        }
        if (targetScrollTop !== curScrollTop) {
            this.run('editor', targetScrollTop, curScrollTop);
        }
    };
    ScrollSync.prototype.syncEditorScrollTop = function (targetNode) {
        var _a = this, toastMark = _a.toastMark, editorView = _a.editorView, previewRoot = _a.previewRoot, previewEl = _a.previewEl;
        var dom = editorView.dom, state = editorView.state;
        var scrollTop = previewEl.scrollTop, clientHeight = previewEl.clientHeight, scrollHeight = previewEl.scrollHeight;
        var isBottomPos = scrollHeight - scrollTop <= clientHeight;
        var curScrollTop = dom.scrollTop;
        var targetScrollTop = isBottomPos ? dom.scrollHeight : 0;
        if (scrollTop && targetNode && !isBottomPos) {
            targetNode = findAncestorHavingId(targetNode, previewRoot);
            if (!targetNode.getAttribute('data-nodeid')) {
                return;
            }
            var children = dom.children;
            var mdNodeId = Number(targetNode.getAttribute('data-nodeid'));
            var _b = getParentNodeObj(this.previewRoot, toastMark.findNodeById(mdNodeId)), mdNode = _b.mdNode, el = _b.el;
            var mdNodeStartLine = getMdStartLine(mdNode);
            targetScrollTop = children[mdNodeStartLine - 1].offsetTop;
            var height = getEditorRangeHeightInfo(state.doc, mdNode, children).height;
            var _c = getAndSaveOffsetInfo(el, previewRoot, mdNodeId), nodeHeight = _c.nodeHeight, offsetTop = _c.offsetTop;
            targetScrollTop += getAdditionalPos(scrollTop, offsetTop, nodeHeight, height);
            targetScrollTop = this.getResolvedScrollTop('preview', scrollTop, targetScrollTop, curScrollTop);
            this.latestPreviewScrollTop = scrollTop;
        }
        if (targetScrollTop !== curScrollTop) {
            this.run('preview', targetScrollTop, curScrollTop);
        }
    };
    ScrollSync.prototype.getResolvedScrollTop = function (from, scrollTop, targetScrollTop, curScrollTop) {
        var latestScrollTop = from === 'editor' ? this.latestEditorScrollTop : this.latestPreviewScrollTop;
        if (latestScrollTop === null) {
            return targetScrollTop;
        }
        return latestScrollTop < scrollTop
            ? Math.max(targetScrollTop, curScrollTop)
            : Math.min(targetScrollTop, curScrollTop);
    };
    ScrollSync.prototype.run = function (from, targetScrollTop, curScrollTop) {
        var _this = this;
        var scrollTarget;
        if (from === 'editor') {
            scrollTarget = this.previewEl;
            this.blockedScroll = 'preview';
        }
        else {
            scrollTarget = this.editorView.dom;
            this.blockedScroll = 'editor';
        }
        var syncCallbacks = {
            syncScrollTop: function (scrollTop) { return (scrollTarget.scrollTop = scrollTop); },
            releaseEventBlock: function () { return (_this.blockedScroll = null); },
        };
        animate(curScrollTop, targetScrollTop, syncCallbacks);
    };
    ScrollSync.prototype.clearTimer = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    ScrollSync.prototype.destroy = function () {
        this.clearTimer();
        this.eventEmitter.removeEventHandler('scroll');
        this.eventEmitter.removeEventHandler('afterPreviewRender');
    };
    return ScrollSync;
}());

var queryMap = {
    getPopupInitialValues: function (editor, payload) {
        var popupName = payload.popupName;
        return popupName === 'link' ? { linkText: editor.getSelectedText() } : {};
    },
};
function buildQuery(editor) {
    editor.eventEmitter.listen('query', function (query, payload) {
        return queryMap[query](editor, payload);
    });
}

/**
 * ToastUIEditorCore
 * @param {Object} options Option object
 *     @param {HTMLElement} options.el - container element
 *     @param {string} [options.height='300px'] - Editor's height style value. Height is applied as border-box ex) '300px', '100%', 'auto'
 *     @param {string} [options.minHeight='200px'] - Editor's min-height style value in pixel ex) '300px'
 *     @param {string} [options.initialValue] - Editor's initial value
 *     @param {string} [options.previewStyle] - Markdown editor's preview style (tab, vertical)
 *     @param {boolean} [options.previewHighlight = true] - Highlight a preview element corresponds to the cursor position in the markdown editor
 *     @param {string} [options.initialEditType] - Initial editor type (markdown, wysiwyg)
 *     @param {Object} [options.events] - Events
 *         @param {function} [options.events.load] - It would be emitted when editor fully load
 *         @param {function} [options.events.change] - It would be emitted when content changed
 *         @param {function} [options.events.caretChange] - It would be emitted when format change by cursor position
 *         @param {function} [options.events.focus] - It would be emitted when editor get focus
 *         @param {function} [options.events.blur] - It would be emitted when editor loose focus
 *         @param {function} [options.events.keydown] - It would be emitted when the key is pressed in editor
 *         @param {function} [options.events.keyup] - It would be emitted when the key is released in editor
 *         @param {function} [options.events.beforePreviewRender] - It would be emitted before rendering the markdown preview with html string
 *         @param {function} [options.events.beforeConvertWysiwygToMarkdown] - It would be emitted before converting wysiwyg to markdown with markdown text
 *     @param {Object} [options.hooks] - Hooks
 *         @param {addImageBlobHook} [options.hooks.addImageBlobHook] - hook for image upload
 *     @param {string} [options.language='en-US'] - language
 *     @param {boolean} [options.useCommandShortcut=true] - whether use keyboard shortcuts to perform commands
 *     @param {boolean} [options.usageStatistics=true] - send hostname to google analytics
 *     @param {Array.<string|toolbarItemsValue>} [options.toolbarItems] - toolbar items.
 *     @param {boolean} [options.hideModeSwitch=false] - hide mode switch tab bar
 *     @param {Array.<function|Array>} [options.plugins] - Array of plugins. A plugin can be either a function or an array in the form of [function, options].
 *     @param {Object} [options.extendedAutolinks] - Using extended Autolinks specified in GFM spec
 *     @param {string} [options.placeholder] - The placeholder text of the editable element.
 *     @param {Object} [options.linkAttributes] - Attributes of anchor element that should be rel, target, hreflang, type
 *     @param {Object} [options.customHTMLRenderer=null] - Object containing custom renderer functions correspond to change markdown node to preview HTML or wysiwyg node
 *     @param {Object} [options.customMarkdownRenderer=null] - Object containing custom renderer functions correspond to change wysiwyg node to markdown text
 *     @param {boolean} [options.referenceDefinition=false] - whether use the specification of link reference definition
 *     @param {function} [options.customHTMLSanitizer=null] - custom HTML sanitizer
 *     @param {boolean} [options.previewHighlight=false] - whether highlight preview area
 *     @param {boolean} [options.frontMatter=false] - whether use the front matter
 *     @param {Array.<object>} [options.widgetRules=[]] - The rules for replacing the text with widget node
 *     @param {string} [options.theme] - The theme to style the editor with. The default is included in toastui-editor.css.
 *     @param {autofocus} [options.autofocus=true] - automatically focus the editor on creation.
 */
var ToastUIEditorCore = /** @class */ (function () {
    function ToastUIEditorCore(options) {
        var _this = this;
        this.initialHTML = options.el.innerHTML;
        options.el.innerHTML = '';
        this.options = extend_1({
            previewStyle: 'tab',
            previewHighlight: true,
            initialEditType: 'markdown',
            height: '300px',
            minHeight: '200px',
            language: 'en-US',
            useCommandShortcut: true,
            usageStatistics: true,
            toolbarItems: [
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'image', 'link'],
                ['code', 'codeblock'],
                ['scrollSync'],
            ],
            hideModeSwitch: false,
            linkAttributes: null,
            extendedAutolinks: false,
            customHTMLRenderer: null,
            customMarkdownRenderer: null,
            referenceDefinition: false,
            customHTMLSanitizer: null,
            frontMatter: false,
            widgetRules: [],
            theme: 'light',
            autofocus: true,
        }, options);
        var _a = this.options, customHTMLRenderer = _a.customHTMLRenderer, extendedAutolinks = _a.extendedAutolinks, referenceDefinition = _a.referenceDefinition, frontMatter = _a.frontMatter, customMarkdownRenderer = _a.customMarkdownRenderer, useCommandShortcut = _a.useCommandShortcut, initialEditType = _a.initialEditType, widgetRules = _a.widgetRules, customHTMLSanitizer = _a.customHTMLSanitizer;
        this.mode = initialEditType || 'markdown';
        this.mdPreviewStyle = this.options.previewStyle;
        this.i18n = i18n;
        this.i18n.setCode(this.options.language);
        this.eventEmitter = new EventEmitter();
        setWidgetRules(widgetRules);
        var linkAttributes = sanitizeLinkAttribute(this.options.linkAttributes);
        this.pluginInfo = getPluginInfo({
            plugins: this.options.plugins,
            eventEmitter: this.eventEmitter,
            usageStatistics: this.options.usageStatistics,
            instance: this,
        });
        var _b = this.pluginInfo, toHTMLRenderers = _b.toHTMLRenderers, toMarkdownRenderers = _b.toMarkdownRenderers, mdPlugins = _b.mdPlugins, wwPlugins = _b.wwPlugins, wwNodeViews = _b.wwNodeViews, mdCommands = _b.mdCommands, wwCommands = _b.wwCommands, markdownParsers = _b.markdownParsers;
        var rendererOptions = {
            linkAttributes: linkAttributes,
            customHTMLRenderer: deepMergedCopy(toHTMLRenderers, customHTMLRenderer),
            extendedAutolinks: extendedAutolinks,
            referenceDefinition: referenceDefinition,
            frontMatter: frontMatter,
            sanitizer: customHTMLSanitizer || sanitizeHTML,
        };
        var wwToDOMAdaptor = new WwToDOMAdaptor(linkAttributes, rendererOptions.customHTMLRenderer);
        var htmlSchemaMap = createHTMLSchemaMap(rendererOptions.customHTMLRenderer, rendererOptions.sanitizer, wwToDOMAdaptor);
        this.toastMark = new ToastMark('', {
            disallowedHtmlBlockTags: ['br', 'img'],
            extendedAutolinks: extendedAutolinks,
            referenceDefinition: referenceDefinition,
            disallowDeepHeading: true,
            frontMatter: frontMatter,
            customParser: markdownParsers,
        });
        this.mdEditor = new MdEditor(this.eventEmitter, {
            toastMark: this.toastMark,
            useCommandShortcut: useCommandShortcut,
            mdPlugins: mdPlugins,
        });
        this.preview = new MarkdownPreview(this.eventEmitter, __assign(__assign({}, rendererOptions), { isViewer: false, highlight: this.options.previewHighlight }));
        this.wwEditor = new WysiwygEditor(this.eventEmitter, {
            toDOMAdaptor: wwToDOMAdaptor,
            useCommandShortcut: useCommandShortcut,
            htmlSchemaMap: htmlSchemaMap,
            linkAttributes: linkAttributes,
            wwPlugins: wwPlugins,
            wwNodeViews: wwNodeViews,
        });
        this.convertor = new Convertor(this.wwEditor.getSchema(), __assign(__assign({}, toMarkdownRenderers), customMarkdownRenderer), getHTMLRenderConvertors(linkAttributes, rendererOptions.customHTMLRenderer), this.eventEmitter);
        this.setMinHeight(this.options.minHeight);
        this.setHeight(this.options.height);
        this.setMarkdown(this.options.initialValue, false);
        if (this.options.placeholder) {
            this.setPlaceholder(this.options.placeholder);
        }
        if (!this.options.initialValue) {
            this.setHTML(this.initialHTML, false);
        }
        this.commandManager = new CommandManager(this.eventEmitter, this.mdEditor.commands, this.wwEditor.commands, function () { return _this.mode; });
        if (this.options.usageStatistics) {
            sendHostName();
        }
        this.scrollSync = new ScrollSync(this.mdEditor, this.preview, this.eventEmitter);
        this.addInitEvent();
        this.addInitCommand(mdCommands, wwCommands);
        buildQuery(this);
        if (this.options.hooks) {
            forEachOwnProperties_1(this.options.hooks, function (fn, key) { return _this.addHook(key, fn); });
        }
        if (this.options.events) {
            forEachOwnProperties_1(this.options.events, function (fn, key) { return _this.on(key, fn); });
        }
        this.eventEmitter.emit('load', this);
        this.moveCursorToStart(this.options.autofocus);
    }
    ToastUIEditorCore.prototype.addInitEvent = function () {
        var _this = this;
        this.on('needChangeMode', this.changeMode.bind(this));
        this.on('loadUI', function () {
            if (_this.height !== 'auto') {
                // 75px equals default editor ui height - the editing area height
                var minHeight = Math.min(parseInt(_this.minHeight, 10), parseInt(_this.height, 10) - 75) + "px";
                _this.setMinHeight(minHeight);
            }
        });
        addDefaultImageBlobHook(this.eventEmitter);
    };
    ToastUIEditorCore.prototype.addInitCommand = function (mdCommands, wwCommands) {
        var _this = this;
        var addPluginCommands = function (type, commandMap) {
            Object.keys(commandMap).forEach(function (name) {
                _this.addCommand(type, name, commandMap[name]);
            });
        };
        this.addCommand('markdown', 'toggleScrollSync', function (payload) {
            _this.eventEmitter.emit('toggleScrollSync', payload.active);
            return true;
        });
        addPluginCommands('markdown', mdCommands);
        addPluginCommands('wysiwyg', wwCommands);
    };
    ToastUIEditorCore.prototype.getCurrentModeEditor = function () {
        return (this.isMarkdownMode() ? this.mdEditor : this.wwEditor);
    };
    /**
     * Factory method for Editor
     * @param {object} options Option for initialize TUIEditor
     * @returns {object} ToastUIEditorCore or ToastUIEditorViewer
     */
    ToastUIEditorCore.factory = function (options) {
        return options.viewer ? new ToastUIEditorViewer(options) : new ToastUIEditorCore(options);
    };
    /**
     * Set language
     * @param {string|string[]} code - code for I18N language
     * @param {object} data - language set
     */
    ToastUIEditorCore.setLanguage = function (code, data) {
        i18n.setLanguage(code, data);
    };
    /**
     * change preview style
     * @param {string} style - 'tab'|'vertical'
     */
    ToastUIEditorCore.prototype.changePreviewStyle = function (style) {
        if (this.mdPreviewStyle !== style) {
            this.mdPreviewStyle = style;
            this.eventEmitter.emit('changePreviewStyle', style);
        }
    };
    /**
     * execute editor command
     * @param {string} name - command name
     * @param {object} [payload] - payload for command
     */
    ToastUIEditorCore.prototype.exec = function (name, payload) {
        this.commandManager.exec(name, payload);
    };
    /**
     * @param {string} type - editor type
     * @param {string} name - command name
     * @param {function} command - command handler
     */
    ToastUIEditorCore.prototype.addCommand = function (type, name, command) {
        var _this = this;
        var commandHoc = function (paylaod) {
            if (paylaod === void 0) { paylaod = {}; }
            var view = (type === 'markdown' ? _this.mdEditor : _this.wwEditor).view;
            command(paylaod, view.state, view.dispatch, view);
        };
        this.commandManager.addCommand(type, name, commandHoc);
    };
    /**
     * Bind eventHandler to event type
     * @param {string} type Event type
     * @param {function} handler Event handler
     */
    ToastUIEditorCore.prototype.on = function (type, handler) {
        this.eventEmitter.listen(type, handler);
    };
    /**
     * Unbind eventHandler from event type
     * @param {string} type Event type
     */
    ToastUIEditorCore.prototype.off = function (type) {
        this.eventEmitter.removeEventHandler(type);
    };
    /**
     * Add hook to TUIEditor event
     * @param {string} type Event type
     * @param {function} handler Event handler
     */
    ToastUIEditorCore.prototype.addHook = function (type, handler) {
        this.eventEmitter.removeEventHandler(type);
        this.eventEmitter.listen(type, handler);
    };
    /**
     * Remove hook from TUIEditor event
     * @param {string} type Event type
     */
    ToastUIEditorCore.prototype.removeHook = function (type) {
        this.eventEmitter.removeEventHandler(type);
    };
    /**
     * Set focus to current Editor
     */
    ToastUIEditorCore.prototype.focus = function () {
        this.getCurrentModeEditor().focus();
    };
    /**
     * Remove focus of current Editor
     */
    ToastUIEditorCore.prototype.blur = function () {
        this.getCurrentModeEditor().blur();
    };
    /**
     * Set cursor position to end
     * @param {boolean} [focus] - automatically focus the editor
     */
    ToastUIEditorCore.prototype.moveCursorToEnd = function (focus) {
        if (focus === void 0) { focus = true; }
        this.getCurrentModeEditor().moveCursorToEnd(focus);
    };
    /**
     * Set cursor position to start
     * @param {boolean} [focus] - automatically focus the editor
     */
    ToastUIEditorCore.prototype.moveCursorToStart = function (focus) {
        if (focus === void 0) { focus = true; }
        this.getCurrentModeEditor().moveCursorToStart(focus);
    };
    /**
     * Set markdown syntax text.
     * @param {string} markdown - markdown syntax text.
     * @param {boolean} [cursorToEnd=true] - move cursor to contents end
     */
    ToastUIEditorCore.prototype.setMarkdown = function (markdown, cursorToEnd) {
        if (markdown === void 0) { markdown = ''; }
        if (cursorToEnd === void 0) { cursorToEnd = true; }
        this.mdEditor.setMarkdown(markdown, cursorToEnd);
        if (this.isWysiwygMode()) {
            var mdNode = this.toastMark.getRootNode();
            var wwNode = this.convertor.toWysiwygModel(mdNode);
            this.wwEditor.setModel(wwNode, cursorToEnd);
        }
    };
    /**
     * Set html value.
     * @param {string} html - html syntax text
     * @param {boolean} [cursorToEnd=true] - move cursor to contents end
     */
    ToastUIEditorCore.prototype.setHTML = function (html, cursorToEnd) {
        if (html === void 0) { html = ''; }
        if (cursorToEnd === void 0) { cursorToEnd = true; }
        var container = document.createElement('div');
        // the `br` tag should be replaced with empty block to separate between blocks
        container.innerHTML = replaceBRWithEmptyBlock(html);
        var wwNode = DOMParser.fromSchema(this.wwEditor.schema).parse(container);
        if (this.isMarkdownMode()) {
            this.mdEditor.setMarkdown(this.convertor.toMarkdownText(wwNode), cursorToEnd);
        }
        else {
            this.wwEditor.setModel(wwNode, cursorToEnd);
        }
    };
    /**
     * Get content to markdown
     * @returns {string} markdown text
     */
    ToastUIEditorCore.prototype.getMarkdown = function () {
        if (this.isMarkdownMode()) {
            return this.mdEditor.getMarkdown();
        }
        return this.convertor.toMarkdownText(this.wwEditor.getModel());
    };
    /**
     * Get content to html
     * @returns {string} html string
     */
    ToastUIEditorCore.prototype.getHTML = function () {
        var _this = this;
        this.eventEmitter.holdEventInvoke(function () {
            if (_this.isMarkdownMode()) {
                var mdNode = _this.toastMark.getRootNode();
                var wwNode = _this.convertor.toWysiwygModel(mdNode);
                _this.wwEditor.setModel(wwNode);
            }
        });
        var html = removeProseMirrorHackNodes(this.wwEditor.view.dom.innerHTML);
        if (this.placeholder) {
            var rePlaceholder = new RegExp("<span class=\"placeholder[^>]+>" + this.placeholder + "</span>", 'i');
            return html.replace(rePlaceholder, '');
        }
        return html;
    };
    /**
     * Insert text
     * @param {string} text - text content
     */
    ToastUIEditorCore.prototype.insertText = function (text) {
        this.getCurrentModeEditor().replaceSelection(text);
    };
    /**
     * Set selection range
     * @param {number|Array.<number>} start - start position
     * @param {number|Array.<number>} end - end position
     */
    ToastUIEditorCore.prototype.setSelection = function (start, end) {
        this.getCurrentModeEditor().setSelection(start, end);
    };
    /**
     * Replace selection range with given text content
     * @param {string} text - text content
     * @param {number|Array.<number>} [start] - start position
     * @param {number|Array.<number>} [end] - end position
     */
    ToastUIEditorCore.prototype.replaceSelection = function (text, start, end) {
        this.getCurrentModeEditor().replaceSelection(text, start, end);
    };
    /**
     * Delete the content of selection range
     * @param {number|Array.<number>} [start] - start position
     * @param {number|Array.<number>} [end] - end position
     */
    ToastUIEditorCore.prototype.deleteSelection = function (start, end) {
        this.getCurrentModeEditor().deleteSelection(start, end);
    };
    /**
     * Get selected text content
     * @param {number|Array.<number>} [start] - start position
     * @param {number|Array.<number>} [end] - end position
     * @returns {string} - selected text content
     */
    ToastUIEditorCore.prototype.getSelectedText = function (start, end) {
        return this.getCurrentModeEditor().getSelectedText(start, end);
    };
    /**
     * Get range of the node
     * @param {number|Array.<number>} [pos] - position
     * @returns {Array.<number[]>|Array.<number>} - node [start, end] range
     * @example
     * // Markdown mode
     * const rangeInfo = editor.getRangeInfoOfNode();
     *
     * console.log(rangeInfo); // { range: [[startLineOffset, startCurorOffset], [endLineOffset, endCurorOffset]], type: 'emph' }
     *
     * // WYSIWYG mode
     * const rangeInfo = editor.getRangeInfoOfNode();
     *
     * console.log(rangeInfo); // { range: [startCursorOffset, endCursorOffset], type: 'emph' }
     */
    ToastUIEditorCore.prototype.getRangeInfoOfNode = function (pos) {
        return this.getCurrentModeEditor().getRangeInfoOfNode(pos);
    };
    /**
     * Add widget to selection
     * @param {Node} node - widget node
     * @param {string} style - Adding style "top" or "bottom"
     * @param {number|Array.<number>} [pos] - position
     */
    ToastUIEditorCore.prototype.addWidget = function (node, style, pos) {
        this.getCurrentModeEditor().addWidget(node, style, pos);
    };
    /**
     * Replace node with widget to range
     * @param {number|Array.<number>} start - start position
     * @param {number|Array.<number>} end - end position
     * @param {string} text - widget text content
     */
    ToastUIEditorCore.prototype.replaceWithWidget = function (start, end, text) {
        this.getCurrentModeEditor().replaceWithWidget(start, end, text);
    };
    /**
     * Set editor height
     * @param {string} height - editor height in pixel
     */
    ToastUIEditorCore.prototype.setHeight = function (height) {
        var el = this.options.el;
        if (isString_1(height)) {
            if (height === 'auto') {
                addClass_1(el, 'auto-height');
            }
            else {
                removeClass_1(el, 'auto-height');
            }
            this.setMinHeight(this.getMinHeight());
        }
        css_1(el, { height: height });
        this.height = height;
    };
    /**
     * Get editor height
     * @returns {string} editor height in pixel
     */
    ToastUIEditorCore.prototype.getHeight = function () {
        return this.height;
    };
    /**
     * Set minimum height to editor content
     * @param {string} minHeight - min content height in pixel
     */
    ToastUIEditorCore.prototype.setMinHeight = function (minHeight) {
        if (minHeight !== this.minHeight) {
            var height = this.height || this.options.height;
            if (height !== 'auto' && this.options.el.querySelector("." + cls('main'))) {
                // 75px equals default editor ui height - the editing area height
                minHeight = Math.min(parseInt(minHeight, 10), parseInt(height, 10) - 75) + "px";
            }
            var minHeightNum = parseInt(minHeight, 10);
            this.minHeight = minHeight;
            this.wwEditor.setMinHeight(minHeightNum);
            this.mdEditor.setMinHeight(minHeightNum);
            this.preview.setMinHeight(minHeightNum);
        }
    };
    /**
     * Get minimum height of editor content
     * @returns {string} min height in pixel
     */
    ToastUIEditorCore.prototype.getMinHeight = function () {
        return this.minHeight;
    };
    /**
     * Return true if current editor mode is Markdown
     * @returns {boolean}
     */
    ToastUIEditorCore.prototype.isMarkdownMode = function () {
        return this.mode === 'markdown';
    };
    /**
     * Return true if current editor mode is WYSIWYG
     * @returns {boolean}
     */
    ToastUIEditorCore.prototype.isWysiwygMode = function () {
        return this.mode === 'wysiwyg';
    };
    /**
     * Return false
     * @returns {boolean}
     */
    ToastUIEditorCore.prototype.isViewer = function () {
        return false;
    };
    /**
     * Get current Markdown editor's preview style
     * @returns {string}
     */
    ToastUIEditorCore.prototype.getCurrentPreviewStyle = function () {
        return this.mdPreviewStyle;
    };
    /**
     * Change editor's mode to given mode string
     * @param {string} mode - Editor mode name of want to change
     * @param {boolean} [withoutFocus] - Change mode without focus
     */
    ToastUIEditorCore.prototype.changeMode = function (mode, withoutFocus) {
        if (this.mode === mode) {
            return;
        }
        this.mode = mode;
        if (this.isWysiwygMode()) {
            var mdNode = this.toastMark.getRootNode();
            var wwNode = this.convertor.toWysiwygModel(mdNode);
            this.wwEditor.setModel(wwNode);
        }
        else {
            var wwNode = this.wwEditor.getModel();
            this.mdEditor.setMarkdown(this.convertor.toMarkdownText(wwNode), !withoutFocus);
        }
        this.eventEmitter.emit('removePopupWidget');
        this.eventEmitter.emit('changeMode', mode);
        if (!withoutFocus) {
            var pos = this.convertor.getMappedPos();
            this.focus();
            if (this.isWysiwygMode() && isNumber_1(pos)) {
                this.wwEditor.setSelection(pos);
            }
            else if (Array.isArray(pos)) {
                this.mdEditor.setSelection(pos);
            }
        }
    };
    /**
     * Destroy TUIEditor from document
     */
    ToastUIEditorCore.prototype.destroy = function () {
        var _this = this;
        this.wwEditor.destroy();
        this.mdEditor.destroy();
        this.preview.destroy();
        this.scrollSync.destroy();
        this.eventEmitter.emit('destroy');
        this.eventEmitter.getEvents().forEach(function (_, type) { return _this.off(type); });
    };
    /**
     * Hide TUIEditor
     */
    ToastUIEditorCore.prototype.hide = function () {
        this.eventEmitter.emit('hide');
    };
    /**
     * Show TUIEditor
     */
    ToastUIEditorCore.prototype.show = function () {
        this.eventEmitter.emit('show');
    };
    /**
     * Move on scroll position of the editor container
     * @param {number} value scrollTop value of editor container
     */
    ToastUIEditorCore.prototype.setScrollTop = function (value) {
        this.getCurrentModeEditor().setScrollTop(value);
    };
    /**
     * Get scroll position value of editor container
     * @returns {number} scrollTop value of editor container
     */
    ToastUIEditorCore.prototype.getScrollTop = function () {
        return this.getCurrentModeEditor().getScrollTop();
    };
    /**
     * Reset TUIEditor
     */
    ToastUIEditorCore.prototype.reset = function () {
        this.wwEditor.setModel([]);
        this.mdEditor.setMarkdown('');
    };
    /**
     * Get current selection range
     * @returns {Array.<number[]>|Array.<number>} Returns the range of the selection depending on the editor mode
     * @example
     * // Markdown mode
     * const mdSelection = editor.getSelection();
     *
     * console.log(mdSelection); // [[startLineOffset, startCurorOffset], [endLineOffset, endCurorOffset]]
     *
     * // WYSIWYG mode
     * const wwSelection = editor.getSelection();
     *
     * console.log(wwSelection); // [startCursorOffset, endCursorOffset]
     */
    ToastUIEditorCore.prototype.getSelection = function () {
        return this.getCurrentModeEditor().getSelection();
    };
    /**
     * Set the placeholder on all editors
     * @param {string} placeholder - placeholder to set
     */
    ToastUIEditorCore.prototype.setPlaceholder = function (placeholder) {
        this.placeholder = placeholder;
        this.mdEditor.setPlaceholder(placeholder);
        this.wwEditor.setPlaceholder(placeholder);
    };
    /**
     * Get markdown editor, preview, wysiwyg editor DOM elements
     */
    ToastUIEditorCore.prototype.getEditorElements = function () {
        return {
            mdEditor: this.mdEditor.getElement(),
            mdPreview: this.preview.getElement(),
            wwEditor: this.wwEditor.getElement(),
        };
    };
    /**
     * Convert position to match editor mode
     * @param {number|Array.<number>} start - start position
     * @param {number|Array.<number>} end - end position
     * @param {string} mode - Editor mode name of want to match converted position to
     */
    ToastUIEditorCore.prototype.convertPosToMatchEditorMode = function (start, end, mode) {
        var _a, _b;
        if (end === void 0) { end = start; }
        if (mode === void 0) { mode = this.mode; }
        var doc = this.mdEditor.view.state.doc;
        var isFromArray = Array.isArray(start);
        var isToArray = Array.isArray(end);
        var convertedFrom = start;
        var convertedTo = end;
        if (isFromArray !== isToArray) {
            throw new Error('Types of arguments must be same');
        }
        if (mode === 'markdown' && !isFromArray && !isToArray) {
            _a = getEditorToMdPos(doc, start, end), convertedFrom = _a[0], convertedTo = _a[1];
        }
        else if (mode === 'wysiwyg' && isFromArray && isToArray) {
            _b = getMdToEditorPos(doc, start, end), convertedFrom = _b[0], convertedTo = _b[1];
        }
        return [convertedFrom, convertedTo];
    };
    return ToastUIEditorCore;
}());

// @TODO: change syntax with our convention
/* eslint-disable */
function html$1 (n) {
  for (
    var l,
      e,
      s = arguments,
      t = 1,
      r = '',
      u = '',
      a = [0],
      c = function (n) {
        t === 1 && (n || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, '')))
          ? a.push(n ? s[n] : r)
          : t === 3 && (n || r)
          ? ((a[1] = n ? s[n] : r), (t = 2))
          : t === 2 && r === '...' && n
          ? (a[2] = assign(a[2] || {}, s[n]))
          : t === 2 && r && !n
          ? ((a[2] = a[2] || {})[r] = !0)
          : t >= 5 &&
            (t === 5
              ? (((a[2] = a[2] || {})[e] = n ? (r ? r + s[n] : s[n]) : r), (t = 6))
              : (n || r) && (a[2][e] += n ? r + s[n] : r)),
          (r = '');
      },
      h = 0;
    h < n.length;
    h++
  ) {
    h && (t === 1 && c(), c(h));
    for (let i = 0; i < n[h].length; i++)
      (l = n[h][i]),
        t === 1
          ? l === '<'
            ? (c(), (a = [a, '', null]), (t = 3))
            : (r += l)
          : t === 4
          ? r === '--' && l === '>'
            ? ((t = 1), (r = ''))
            : (r = l + r[0])
          : u
          ? l === u
            ? (u = '')
            : (r += l)
          : l === '"' || l === "'"
          ? (u = l)
          : l === '>'
          ? (c(), (t = 1))
          : t &&
            (l === '='
              ? ((t = 5), (e = r), (r = ''))
              : l === '/' && (t < 5 || n[h][i + 1] === '>')
              ? (c(),
                t === 3 && (a = a[0]),
                (t = a),
                (a = a[0]).push(this.apply(null, t.slice(1))),
                (t = 0))
              : l === ' ' || l === '\t' || l === '\n' || l === '\r'
              ? (c(), (t = 2))
              : (r += l)),
        t === 3 && r === '!--' && ((t = 4), (a = a[0]));
  }
  return c(), a.length > 2 ? a.slice(1) : a[1];
}

/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Check whether the given variable is a boolean or not.
 *  If the given variable is a boolean, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is boolean?
 * @memberof module:type
 */
function isBoolean(obj) {
  return typeof obj === 'boolean' || obj instanceof Boolean;
}

var isBoolean_1 = isBoolean;

var VNodeWalker = /** @class */ (function () {
    function VNodeWalker(current) {
        this.current = current;
        this.root = current;
        this.entering = true;
    }
    VNodeWalker.prototype.walk = function () {
        var _a = this, entering = _a.entering, cur = _a.current;
        if (!cur) {
            return null;
        }
        if (entering) {
            if (cur.firstChild) {
                this.current = cur.firstChild;
                this.entering = true;
            }
            else {
                this.entering = false;
            }
        }
        else if (cur === this.root) {
            this.current = null;
        }
        else if (cur.next) {
            this.current = cur.next;
            this.entering = true;
        }
        else {
            this.current = cur.parent;
            this.entering = false;
        }
        return { vnode: cur, entering: entering };
    };
    return VNodeWalker;
}());
var VNode = /** @class */ (function () {
    function VNode(type, props, children) {
        this.parent = null;
        this.old = null;
        this.firstChild = null;
        this.next = null;
        this.skip = false;
        this.type = type;
        this.props = props;
        this.children = children;
        this.props.children = children;
        if (props.ref) {
            this.ref = props.ref;
            delete props.ref;
        }
        if (props.key) {
            this.key = props.key;
            delete props.key;
        }
    }
    VNode.prototype.walker = function () {
        return new VNodeWalker(this);
    };
    VNode.removalNodes = [];
    return VNode;
}());

function createTextNode(text) {
    return new VNode('TEXT_NODE', { nodeValue: text }, []);
}
function excludeUnnecessaryChild(child, flatted) {
    var vnode = child;
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (isBoolean_1(child) || child == null) {
        vnode = null;
    }
    else if (isString_1(child) || isNumber_1(child)) {
        vnode = createTextNode(String(child));
    }
    if (vnode) {
        flatted.push(vnode);
    }
}
function h(type, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var flatted = [];
    children.forEach(function (child) {
        if (Array.isArray(child)) {
            child.forEach(function (vnode) {
                excludeUnnecessaryChild(vnode, flatted);
            });
        }
        else {
            excludeUnnecessaryChild(child, flatted);
        }
    });
    return new VNode(type, props || {}, flatted);
}
// @ts-ignore
var html = html$1.bind(h);

/**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

/**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */
function isObject(obj) {
  return obj === Object(obj);
}

var isObject_1 = isObject;

// @TODO: clearfy the type definition for CSSDeclaration
function createNode(vnode) {
    var node;
    if (vnode.type === 'TEXT_NODE') {
        node = document.createTextNode(vnode.props.nodeValue);
    }
    else {
        node = document.createElement(vnode.type);
        setProps(node, {}, vnode.props);
    }
    return node;
}
function removeNode(vnode, parentNode) {
    if (vnode.node) {
        parentNode.removeChild(vnode.node);
    }
    else {
        removeNode(vnode.firstChild, parentNode);
    }
}
function innerDiff(node, prevProps, nextProps) {
    Object.keys(prevProps).forEach(function (propName) {
        if (/^on/.test(propName)) {
            if (!nextProps[propName] || prevProps[propName] !== nextProps[propName]) {
                var eventName = propName.slice(2).toLowerCase();
                node.removeEventListener(eventName, prevProps[propName]);
            }
        }
        else if (propName !== 'children' && !nextProps[propName] && !isTextNode(node)) {
            node.removeAttribute(propName);
        }
    });
    setProps(node, prevProps, nextProps, function (propName) { return !shallowEqual(prevProps[propName], nextProps[propName]); });
}
var reNonDimension = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function setProps(node, prevProps, props, condition) {
    Object.keys(props).forEach(function (propName) {
        if (!condition || condition(propName)) {
            if (/^on/.test(propName)) {
                var eventName = propName.slice(2).toLowerCase();
                node.addEventListener(eventName, props[propName]);
            }
            else if (propName === 'nodeValue') {
                node[propName] = props[propName];
            }
            else if (propName === 'style' && isObject_1(props[propName])) {
                setStyleProps(node, prevProps[propName], props[propName]);
            }
            else if (propName !== 'children') {
                if (props[propName] === false) {
                    node.removeAttribute(propName);
                }
                else {
                    node.setAttribute(propName, props[propName]);
                }
            }
        }
    });
}
function setStyleProps(node, prevStyleProps, styleProps) {
    if (prevStyleProps) {
        Object.keys(prevStyleProps).forEach(function (styleProp) {
            // @ts-ignore
            node.style[styleProp] = '';
        });
    }
    Object.keys(styleProps).forEach(function (styleProp) {
        var value = styleProps[styleProp];
        // @ts-ignore
        node.style[styleProp] =
            isNumber_1(value) && !reNonDimension.test(styleProp) ? value + "px" : value;
    });
}

function commit(vnode) {
    VNode.removalNodes.forEach(function (removalNode) { return diff(removalNode); });
    if (vnode) {
        var next = void 0;
        var walker = vnode.walker();
        while ((next = walker.walk())) {
            vnode = next.vnode;
            if (next.entering) {
                diff(vnode);
            }
            else if (isFunction_1(vnode.type)) {
                var comp = vnode.component;
                // lifecycle method
                if (!vnode.old && comp.mounted) {
                    comp.mounted();
                }
                if (vnode.old && comp.updated) {
                    var prevProps = comp.prevProps || {};
                    comp.updated(prevProps);
                }
            }
        }
    }
}
function getParentNode(vnode) {
    var parent = vnode.parent;
    while (!parent.node) {
        parent = parent.parent;
    }
    return parent.node;
}
function diff(vnode) {
    if (!vnode || !vnode.parent) {
        return;
    }
    if (vnode.node) {
        var parentNode = getParentNode(vnode);
        if (vnode.effect === 'A') {
            parentNode.appendChild(vnode.node);
        }
        else if (vnode.effect === 'U') {
            innerDiff(vnode.node, vnode.old.props, vnode.props);
        }
    }
    if (vnode.effect === 'D') {
        var next = void 0;
        var walker = vnode.walker();
        while ((next = walker.walk())) {
            vnode = next.vnode;
            if (!next.entering) {
                if (isFunction_1(vnode.type)) {
                    var comp = vnode.component;
                    // lifecycle method
                    if (comp.beforeDestroy) {
                        comp.beforeDestroy();
                    }
                }
                else {
                    var parentNode = getParentNode(vnode);
                    removeNode(vnode, parentNode);
                }
            }
        }
    }
    // apply ref
    if (vnode.ref) {
        if (vnode.component) {
            vnode.ref(vnode.component);
        }
        else if (vnode.node) {
            vnode.ref(vnode.node);
        }
    }
}

function createComponent(Comp, vnode) {
    var props = vnode.props, component = vnode.component;
    if (component) {
        component.prevProps = component.props;
        component.props = vnode.props;
        return component;
    }
    return new Comp(props);
}
function buildVNode(vnode) {
    var root = vnode;
    while (vnode && !vnode.skip) {
        if (isFunction_1(vnode.type)) {
            var instance = createComponent(vnode.type, vnode);
            instance.vnode = vnode;
            vnode.component = instance;
            vnode.props.children = vnode.children = [instance.render()];
            buildChildrenVNode(vnode);
        }
        else {
            if (!vnode.node) {
                vnode.node = createNode(vnode);
            }
            buildChildrenVNode(vnode);
        }
        if (vnode.firstChild) {
            vnode = vnode.firstChild;
        }
        else {
            while (vnode && vnode.parent && !vnode.next) {
                vnode = vnode.parent;
                if (vnode === root) {
                    break;
                }
            }
            vnode = vnode.next;
        }
    }
}
function isSameType(old, vnode) {
    return old && vnode && vnode.type === old.type && (!vnode.key || vnode.key === old.key);
}
// @TODO: add key diff algorithm
function buildChildrenVNode(parent) {
    var children = parent.children;
    var old = parent.old ? parent.old.firstChild : null;
    var prev = null;
    children.forEach(function (vnode, index) {
        var sameType = isSameType(old, vnode);
        if (sameType) {
            vnode.old = old;
            vnode.parent = parent;
            vnode.node = old.node;
            vnode.component = old.component;
            vnode.effect = 'U';
        }
        if (vnode && !sameType) {
            vnode.old = null;
            vnode.parent = parent;
            vnode.node = null;
            vnode.effect = 'A';
        }
        if (old && !sameType) {
            VNode.removalNodes.push(old);
            old.effect = 'D';
        }
        if (old) {
            old = old.next;
        }
        if (index === 0) {
            parent.firstChild = vnode;
        }
        else if (vnode) {
            prev.next = vnode;
        }
        prev = vnode;
    });
    var lastChild = last(children);
    if (!children.length) {
        while (old) {
            VNode.removalNodes.push(old);
            old.effect = 'D';
            old = old.next;
        }
    }
    while (old && lastChild) {
        if (old && lastChild.old !== old) {
            VNode.removalNodes.push(old);
            old.effect = 'D';
            old = old.next;
        }
    }
}

function destroy(vnode) {
    vnode.effect = 'D';
    VNode.removalNodes = [vnode];
    commit();
    VNode.removalNodes = [];
}
function rerender(comp) {
    var root = comp.vnode;
    root.effect = 'U';
    root.old = root;
    // skip for unnecessary reconciliation
    if (root.next) {
        root.next.skip = true;
    }
    VNode.removalNodes = [];
    buildVNode(root);
    commit(root);
    if (root.next) {
        root.next.skip = false;
    }
}
function render(container, vnode) {
    var root = new VNode(container.tagName.toLowerCase(), {}, [vnode]);
    root.node = container;
    VNode.removalNodes = [];
    buildVNode(root);
    commit(root);
    return function () { return destroy(root.firstChild); };
}

var Component = /** @class */ (function () {
    function Component(props) {
        this.props = props;
        this.state = {};
        this.refs = {};
    }
    Component.prototype.setState = function (state) {
        var newState = __assign(__assign({}, this.state), state);
        if (!shallowEqual(this.state, newState)) {
            this.state = newState;
            rerender(this);
        }
    };
    return Component;
}());

var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hide: false,
        };
        return _this;
    }
    Switch.prototype.show = function () {
        this.setState({ hide: false });
    };
    Switch.prototype.hide = function () {
        this.setState({ hide: true });
    };
    Switch.prototype.render = function () {
        var _a = this.props, editorType = _a.editorType, eventEmitter = _a.eventEmitter;
        return html(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n      <div class=\"", "\" style=\"display: ", "\">\n        <div\n          class=\"tab-item", "\"\n          onClick=", "\n        >\n          ", "\n        </div>\n        <div\n          class=\"tab-item", "\"\n          onClick=", "\n        >\n          ", "\n        </div>\n      </div>\n    "], ["\n      <div class=\"", "\" style=\"display: ", "\">\n        <div\n          class=\"tab-item", "\"\n          onClick=",
            "\n        >\n          ", "\n        </div>\n        <div\n          class=\"tab-item", "\"\n          onClick=",
            "\n        >\n          ", "\n        </div>\n      </div>\n    "])), cls('mode-switch'), this.state.hide ? 'none' : 'block', editorType === 'markdown' ? ' active' : '', function () {
            eventEmitter.emit('needChangeMode', 'markdown');
        }, i18n.get('Markdown'), editorType === 'wysiwyg' ? ' active' : '', function () {
            eventEmitter.emit('needChangeMode', 'wysiwyg');
        }, i18n.get('WYSIWYG'));
    };
    return Switch;
}(Component));
var templateObject_1$h;

/**
 * @fileoverview Creates a debounced function that delays invoking fn until after delay milliseconds has elapsed since the last time the debouced function was invoked.
 * @author NHN FE Development Lab <dl_javascript.nhn.com>
 */

/**
 * @module tricks
 */

/**
 * Creates a debounced function that delays invoking fn until after delay milliseconds has elapsed
 * since the last time the debouced function was invoked.
 * @param {function} fn The function to debounce.
 * @param {number} [delay=0] The number of milliseconds to delay
 * @returns {function} debounced function.
 * @memberof module:tricks
 * @example
 * // ES6
 * import debounce from 'tui-code-snippet/tricks/debounce';
 * 
 * // CommonJS
 * const debounce = require('tui-code-snippet/tricks/debounce');
 *
 * function someMethodToInvokeDebounced() {}
 *
 * const debounced = debounce(someMethodToInvokeDebounced, 300);
 *
 * // invoke repeatedly
 * debounced();
 * debounced();
 * debounced();
 * debounced();
 * debounced();
 * debounced();    // last invoke of debounced()
 *
 * // invoke someMethodToInvokeDebounced() after 300 milliseconds.
 */
function debounce$1(fn, delay) {
  var timer, args;

  /* istanbul ignore next */
  delay = delay || 0;

  function debounced() { // eslint-disable-line require-jsdoc
    args = Array.prototype.slice.call(arguments);

    window.clearTimeout(timer);
    timer = window.setTimeout(function() {
      fn.apply(null, args);
    }, delay);
  }

  return debounced;
}

var debounce_1 = debounce$1;

/**
 * @fileoverview Creates a throttled function that only invokes fn at most once per every interval milliseconds.
 * @author NHN FE Development Lab <dl_javascript.nhn.com>
 */

var debounce = debounce_1;

/**
 * Creates a throttled function that only invokes fn at most once per every interval milliseconds.
 * You can use this throttle short time repeatedly invoking functions. (e.g MouseMove, Resize ...)
 * if you need reuse throttled method. you must remove slugs (e.g. flag variable) related with throttling.
 * @param {function} fn function to throttle
 * @param {number} [interval=0] the number of milliseconds to throttle invocations to.
 * @returns {function} throttled function
 * @memberof module:tricks
 * @example
 * // ES6
 * import throttle from 'tui-code-snippet/tricks/throttle';
 * 
 * // CommonJS
 * const throttle = require('tui-code-snippet/tricks/throttle');
 *
 * function someMethodToInvokeThrottled() {}
 *
 * const throttled = throttle(someMethodToInvokeThrottled, 300);
 *
 * // invoke repeatedly
 * throttled();    // invoke (leading)
 * throttled();
 * throttled();    // invoke (near 300 milliseconds)
 * throttled();
 * throttled();
 * throttled();    // invoke (near 600 milliseconds)
 * // ...
 * // invoke (trailing)
 *
 * // if you need reuse throttled method. then invoke reset()
 * throttled.reset();
 */
function throttle$1(fn, interval) {
  var base;
  var isLeading = true;
  var tick = function(_args) {
    fn.apply(null, _args);
    base = null;
  };
  var debounced, stamp, args;

  /* istanbul ignore next */
  interval = interval || 0;

  debounced = debounce(tick, interval);

  function throttled() { // eslint-disable-line require-jsdoc
    args = Array.prototype.slice.call(arguments);

    if (isLeading) {
      tick(args);
      isLeading = false;

      return;
    }

    stamp = Number(new Date());

    base = base || stamp;

    // pass array directly because `debounce()`, `tick()` are already use
    // `apply()` method to invoke developer's `fn` handler.
    //
    // also, this `debounced` line invoked every time for implements
    // `trailing` features.
    debounced(args);

    if ((stamp - base) >= interval) {
      tick(args);
    }
  }

  function reset() { // eslint-disable-line require-jsdoc
    isLeading = true;
    base = null;
  }

  throttled.reset = reset;

  return throttled;
}

var throttle_1 = throttle$1;

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

var HeadingPopupBody = /** @class */ (function (_super) {
    __extends(HeadingPopupBody, _super);
    function HeadingPopupBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeadingPopupBody.prototype.execCommand = function (ev) {
        var el = closest(ev.target, 'li');
        this.props.execCommand('heading', {
            level: Number(el.getAttribute('data-level')),
        });
    };
    HeadingPopupBody.prototype.render = function () {
        var _this = this;
        return html(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n      <ul\n        onClick=", "\n        aria-role=\"menu\"\n        aria-label=\"", "\"\n      >\n        ", "\n        <li data-type=\"Paragraph\" aria-role=\"menuitem\">\n          <div>", "</div>\n        </li>\n      </ul>\n    "], ["\n      <ul\n        onClick=", "\n        aria-role=\"menu\"\n        aria-label=\"", "\"\n      >\n        ",
            "\n        <li data-type=\"Paragraph\" aria-role=\"menuitem\">\n          <div>", "</div>\n        </li>\n      </ul>\n    "])), function (ev) { return _this.execCommand(ev); }, i18n.get('Headings'), [1, 2, 3, 4, 5, 6].map(function (level) {
            return html(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n              <li data-level=\"", "\" data-type=\"Heading\" aria-role=\"menuitem\">\n                <", ">", " ", "</$>\n              </li>\n            "], ["\n              <li data-level=\"", "\" data-type=\"Heading\" aria-role=\"menuitem\">\n                <", ">", " ", "</$>\n              </li>\n            "])), level, "h" + level, i18n.get('Heading'), level);
        }), i18n.get('Paragraph'));
    };
    return HeadingPopupBody;
}(Component));
var templateObject_1$g, templateObject_2$8;

var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.toggleTab = function (ev, activeTab) {
        this.props.onClick(ev, activeTab);
    };
    Tabs.prototype.render = function () {
        var _this = this;
        return html(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n      <div class=\"", "\" aria-role=\"tabpanel\">\n        ", "\n      </div>\n    "], ["\n      <div class=\"", "\" aria-role=\"tabpanel\">\n        ",
            "\n      </div>\n    "])), cls('tabs'), this.props.tabs.map(function (_a) {
            var name = _a.name, text = _a.text;
            var isActive = _this.props.activeTab === name;
            return html(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n            <div\n              class=\"tab-item", "\"\n              onClick=", "\n              aria-role=\"tab\"\n              aria-label=\"", "\"\n              aria-selected=\"", "\"\n              tabindex=\"", "\"\n            >\n              ", "\n            </div>\n          "], ["\n            <div\n              class=\"tab-item", "\"\n              onClick=", "\n              aria-role=\"tab\"\n              aria-label=\"", "\"\n              aria-selected=\"", "\"\n              tabindex=\"", "\"\n            >\n              ", "\n            </div>\n          "])), isActive ? ' active' : '', function (ev) { return _this.toggleTab(ev, name); }, i18n.get(text), isActive ? 'true' : 'false', isActive ? '0' : '-1', i18n.get(text));
        }));
    };
    return Tabs;
}(Component));
var templateObject_1$f, templateObject_2$7;

var TYPE_UI = 'ui';
var ImagePopupBody = /** @class */ (function (_super) {
    __extends(ImagePopupBody, _super);
    function ImagePopupBody(props) {
        var _this = _super.call(this, props) || this;
        _this.initialize = function (activeTab) {
            if (activeTab === void 0) { activeTab = 'file'; }
            var urlEl = _this.refs.url;
            urlEl.value = '';
            _this.refs.altText.value = '';
            _this.refs.file.value = '';
            removeClass_1(urlEl, 'wrong');
            _this.setState({ activeTab: activeTab, file: null, fileNameElClassName: '' });
        };
        _this.execCommand = function () {
            if (_this.state.activeTab === 'file') {
                _this.emitAddImageBlob();
            }
            else {
                _this.emitAddImage();
            }
        };
        _this.toggleTab = function (_, activeTab) {
            if (activeTab !== _this.state.activeTab) {
                _this.initialize(activeTab);
            }
        };
        _this.showFileSelectBox = function () {
            _this.refs.file.click();
        };
        _this.changeFile = function (ev) {
            var files = ev.target.files;
            if (files === null || files === void 0 ? void 0 : files.length) {
                _this.setState({ file: files[0] });
            }
        };
        _this.state = { activeTab: 'file', file: null, fileNameElClassName: '' };
        _this.tabs = [
            { name: 'file', text: 'File' },
            { name: 'url', text: 'URL' },
        ];
        return _this;
    }
    ImagePopupBody.prototype.emitAddImageBlob = function () {
        var _this = this;
        var files = this.refs.file.files;
        var altTextEl = this.refs.altText;
        var fileNameElClassName = ' wrong';
        if (files === null || files === void 0 ? void 0 : files.length) {
            fileNameElClassName = '';
            var imageFile = files.item(0);
            var hookCallback = function (url, text) {
                return _this.props.execCommand('addImage', { imageUrl: url, altText: text || altTextEl.value });
            };
            this.props.eventEmitter.emit('addImageBlobHook', imageFile, hookCallback, TYPE_UI);
        }
        this.setState({ fileNameElClassName: fileNameElClassName });
    };
    ImagePopupBody.prototype.emitAddImage = function () {
        var imageUrlEl = this.refs.url;
        var altTextEl = this.refs.altText;
        var imageUrl = imageUrlEl.value;
        var altText = altTextEl.value || 'image';
        removeClass_1(imageUrlEl, 'wrong');
        if (!imageUrl.length) {
            addClass_1(imageUrlEl, 'wrong');
            return;
        }
        if (imageUrl) {
            this.props.execCommand('addImage', { imageUrl: imageUrl, altText: altText });
        }
    };
    ImagePopupBody.prototype.preventSelectStart = function (ev) {
        ev.preventDefault();
    };
    ImagePopupBody.prototype.updated = function () {
        if (!this.props.show) {
            this.initialize();
        }
    };
    ImagePopupBody.prototype.render = function () {
        var _this = this;
        var _a = this.state, activeTab = _a.activeTab, file = _a.file, fileNameElClassName = _a.fileNameElClassName;
        return html(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n      <div aria-label=\"", "\">\n        <", " tabs=", " activeTab=", " onClick=", " />\n        <div style=\"display:", "\">\n          <label for=\"toastuiImageUrlInput\">", "</label>\n          <input\n            id=\"toastuiImageUrlInput\"\n            type=\"text\"\n            ref=", "\n          />\n        </div>\n        <div style=\"display:", ";position: relative;\">\n          <label for=\"toastuiImageFileInput\">", "</label>\n          <span\n            class=\"", "", "\"\n            onClick=", "\n            onSelectstart=", "\n          >\n            ", "\n          </span>\n          <button\n            type=\"button\"\n            class=\"", "\"\n            onClick=", "\n          >\n            ", "\n          </button>\n          <input\n            id=\"toastuiImageFileInput\"\n            type=\"file\"\n            accept=\"image/*\"\n            onChange=", "\n            ref=", "\n          />\n        </div>\n        <label for=\"toastuiAltTextInput\">", "</label>\n        <input\n          id=\"toastuiAltTextInput\"\n          type=\"text\"\n          ref=", "\n        />\n        <div class=\"", "\">\n          <button type=\"button\" class=\"", "\" onClick=", ">\n            ", "\n          </button>\n          <button type=\"button\" class=\"", "\" onClick=", ">\n            ", "\n          </button>\n        </div>\n      </div>\n    "], ["\n      <div aria-label=\"", "\">\n        <", " tabs=", " activeTab=", " onClick=", " />\n        <div style=\"display:", "\">\n          <label for=\"toastuiImageUrlInput\">", "</label>\n          <input\n            id=\"toastuiImageUrlInput\"\n            type=\"text\"\n            ref=", "\n          />\n        </div>\n        <div style=\"display:", ";position: relative;\">\n          <label for=\"toastuiImageFileInput\">", "</label>\n          <span\n            class=\"", "", "\"\n            onClick=", "\n            onSelectstart=", "\n          >\n            ", "\n          </span>\n          <button\n            type=\"button\"\n            class=\"", "\"\n            onClick=", "\n          >\n            ", "\n          </button>\n          <input\n            id=\"toastuiImageFileInput\"\n            type=\"file\"\n            accept=\"image/*\"\n            onChange=", "\n            ref=", "\n          />\n        </div>\n        <label for=\"toastuiAltTextInput\">", "</label>\n        <input\n          id=\"toastuiAltTextInput\"\n          type=\"text\"\n          ref=", "\n        />\n        <div class=\"", "\">\n          <button type=\"button\" class=\"", "\" onClick=", ">\n            ", "\n          </button>\n          <button type=\"button\" class=\"", "\" onClick=", ">\n            ", "\n          </button>\n        </div>\n      </div>\n    "])), i18n.get('Insert image'), Tabs, this.tabs, activeTab, this.toggleTab, activeTab === 'url' ? 'block' : 'none', i18n.get('Image URL'), function (el) { return (_this.refs.url = el); }, activeTab === 'file' ? 'block' : 'none', i18n.get('Select image file'), cls('file-name'), file ? ' has-file' : fileNameElClassName, this.showFileSelectBox, this.preventSelectStart, file ? file.name : i18n.get('No file'), cls('file-select-button'), this.showFileSelectBox, i18n.get('Choose a file'), this.changeFile, function (el) { return (_this.refs.file = el); }, i18n.get('Description'), function (el) { return (_this.refs.altText = el); }, cls('button-container'), cls('close-button'), this.props.hidePopup, i18n.get('Cancel'), cls('ok-button'), this.execCommand, i18n.get('OK'));
    };
    return ImagePopupBody;
}(Component));
var templateObject_1$e;

var LinkPopupBody = /** @class */ (function (_super) {
    __extends(LinkPopupBody, _super);
    function LinkPopupBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.execCommand = function () {
            var linkUrlEl = _this.refs.url;
            var linkTextEl = _this.refs.text;
            removeClass_1(linkUrlEl, 'wrong');
            removeClass_1(linkTextEl, 'wrong');
            if (linkUrlEl.value.length < 1) {
                addClass_1(linkUrlEl, 'wrong');
                return;
            }
            var checkLinkText = isUndefined_1(_this.props.initialValues.linkUrl);
            if (checkLinkText && linkTextEl.value.length < 1) {
                addClass_1(linkTextEl, 'wrong');
                return;
            }
            _this.props.execCommand('addLink', {
                linkUrl: linkUrlEl.value,
                linkText: linkTextEl.value,
            });
        };
        return _this;
    }
    LinkPopupBody.prototype.initialize = function () {
        var _a = this.props.initialValues, linkUrl = _a.linkUrl, linkText = _a.linkText;
        var linkUrlEl = this.refs.url;
        var linkTextEl = this.refs.text;
        removeClass_1(linkUrlEl, 'wrong');
        removeClass_1(linkTextEl, 'wrong', 'disabled');
        linkTextEl.removeAttribute('disabled');
        if (linkUrl) {
            addClass_1(linkTextEl, 'disabled');
            linkTextEl.setAttribute('disabled', 'disabled');
        }
        linkUrlEl.value = linkUrl || '';
        linkTextEl.value = linkText || '';
    };
    LinkPopupBody.prototype.mounted = function () {
        this.initialize();
    };
    LinkPopupBody.prototype.updated = function (prevProps) {
        if (!prevProps.show && this.props.show) {
            this.initialize();
        }
    };
    LinkPopupBody.prototype.render = function () {
        var _this = this;
        return html(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n      <div aria-label=\"", "\">\n        <label for=\"toastuiLinkUrlInput\">", "</label>\n        <input\n          id=\"toastuiLinkUrlInput\"\n          type=\"text\"\n          ref=", "\n        />\n        <label for=\"toastuiLinkTextInput\">", "</label>\n        <input\n          id=\"toastuiLinkTextInput\"\n          type=\"text\"\n          ref=", "\n        />\n        <div class=\"", "\">\n          <button type=\"button\" class=\"", "\" onClick=", ">\n            ", "\n          </button>\n          <button type=\"button\" class=\"", "\" onClick=", ">\n            ", "\n          </button>\n        </div>\n      </div>\n    "], ["\n      <div aria-label=\"", "\">\n        <label for=\"toastuiLinkUrlInput\">", "</label>\n        <input\n          id=\"toastuiLinkUrlInput\"\n          type=\"text\"\n          ref=", "\n        />\n        <label for=\"toastuiLinkTextInput\">", "</label>\n        <input\n          id=\"toastuiLinkTextInput\"\n          type=\"text\"\n          ref=", "\n        />\n        <div class=\"", "\">\n          <button type=\"button\" class=\"", "\" onClick=", ">\n            ", "\n          </button>\n          <button type=\"button\" class=\"", "\" onClick=", ">\n            ", "\n          </button>\n        </div>\n      </div>\n    "])), i18n.get('Insert link'), i18n.get('URL'), function (el) { return (_this.refs.url = el); }, i18n.get('Link text'), function (el) { return (_this.refs.text = el); }, cls('button-container'), cls('close-button'), this.props.hidePopup, i18n.get('Cancel'), cls('ok-button'), this.execCommand, i18n.get('OK'));
    };
    return LinkPopupBody;
}(Component));
var templateObject_1$d;

var CELL_WIDTH = 20;
var CELL_HEIGHT = 20;
var MIN_ROW_INDEX = 5;
var MAX_ROW_INDEX = 14;
var MIN_COL_INDEX = 5;
var MAX_COL_INDEX = 9;
var MIN_ROW_SELECTION_INDEX = 1;
var MIN_COL_SELECTION_INDEX = 1;
var BORDER_WIDTH = 1;
var TablePopupBody = /** @class */ (function (_super) {
    __extends(TablePopupBody, _super);
    function TablePopupBody(props) {
        var _this = _super.call(this, props) || this;
        _this.extendSelectionRange = function (_a) {
            var pageX = _a.pageX, pageY = _a.pageY;
            var x = pageX - _this.offsetRect.left;
            var y = pageY - _this.offsetRect.top;
            var range = _this.getSelectionRangeByOffset(x, y);
            _this.setState(__assign({}, range));
        };
        _this.execCommand = function () {
            _this.props.execCommand('addTable', {
                rowCount: _this.state.rowIdx + 1,
                columnCount: _this.state.colIdx + 1,
            });
        };
        _this.state = {
            rowIdx: -1,
            colIdx: -1,
        };
        return _this;
    }
    TablePopupBody.prototype.getDescription = function () {
        return this.state.colIdx === -1 ? '' : this.state.colIdx + 1 + " x " + (this.state.rowIdx + 1);
    };
    TablePopupBody.prototype.getBoundByRange = function (colIdx, rowIdx) {
        return {
            width: (colIdx + 1) * CELL_WIDTH,
            height: (rowIdx + 1) * CELL_HEIGHT,
        };
    };
    TablePopupBody.prototype.getRangeByOffset = function (x, y) {
        return {
            colIdx: Math.floor(x / CELL_WIDTH),
            rowIdx: Math.floor(y / CELL_HEIGHT),
        };
    };
    TablePopupBody.prototype.getTableRange = function () {
        var _a = this.state, orgColIdx = _a.colIdx, orgRowIdx = _a.rowIdx;
        var colIdx = Math.max(orgColIdx, MIN_COL_INDEX);
        var rowIdx = Math.max(orgRowIdx, MIN_ROW_INDEX);
        if (orgColIdx >= MIN_COL_INDEX && colIdx < MAX_COL_INDEX) {
            colIdx += 1;
        }
        if (orgRowIdx >= MIN_ROW_INDEX && rowIdx < MAX_ROW_INDEX) {
            rowIdx += 1;
        }
        return { colIdx: colIdx + 1, rowIdx: rowIdx + 1 };
    };
    TablePopupBody.prototype.getSelectionAreaBound = function () {
        var _a = this.getBoundByRange(this.state.colIdx, this.state.rowIdx), width = _a.width, height = _a.height;
        if (!width && !height) {
            return { display: 'none' };
        }
        return { width: width - BORDER_WIDTH, height: height - BORDER_WIDTH, display: 'block' };
    };
    TablePopupBody.prototype.getSelectionRangeByOffset = function (x, y) {
        var range = this.getRangeByOffset(x, y);
        range.rowIdx = Math.min(Math.max(range.rowIdx, MIN_ROW_SELECTION_INDEX), MAX_ROW_INDEX);
        range.colIdx = Math.min(Math.max(range.colIdx, MIN_COL_SELECTION_INDEX), MAX_COL_INDEX);
        return range;
    };
    TablePopupBody.prototype.updated = function () {
        if (!this.props.show) {
            this.setState({ colIdx: -1, rowIdx: -1 });
        }
        else if (this.state.colIdx === -1 && this.state.rowIdx === -1) {
            var _a = this.refs.tableEl.getBoundingClientRect(), left = _a.left, top_1 = _a.top;
            this.offsetRect = {
                left: window.pageXOffset + left,
                top: window.pageYOffset + top_1,
            };
        }
    };
    TablePopupBody.prototype.createTableArea = function (tableRange) {
        var colIdx = tableRange.colIdx, rowIdx = tableRange.rowIdx;
        var rows = [];
        for (var i = 0; i < rowIdx; i += 1) {
            var cells = [];
            for (var j = 0; j < colIdx; j += 1) {
                var cellClassNames = "" + cls('table-cell') + (i > 0 ? '' : ' header');
                cells.push(html(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["<div class=\"", "\"></div>"], ["<div class=\"", "\"></div>"])), cellClassNames));
            }
            rows.push(html(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), cls('table-row'), cells));
        }
        return html(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["<div class=\"", "\">", "</div>"], ["<div class=\"", "\">", "</div>"])), cls('table'), rows);
    };
    TablePopupBody.prototype.render = function () {
        var _this = this;
        var tableRange = this.getTableRange();
        var selectionAreaBound = this.getSelectionAreaBound();
        return html(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n      <div aria-label=\"", "\">\n        <div\n          class=\"", "\"\n          ref=", "\n          onMousemove=", "\n          onClick=", "\n        >\n          ", "\n          <div class=\"", "\" style=", "></div>\n        </div>\n        <p class=\"", "\">", "</p>\n      </div>\n    "], ["\n      <div aria-label=\"", "\">\n        <div\n          class=\"", "\"\n          ref=", "\n          onMousemove=", "\n          onClick=", "\n        >\n          ", "\n          <div class=\"", "\" style=", "></div>\n        </div>\n        <p class=\"", "\">", "</p>\n      </div>\n    "])), i18n.get('Insert table'), cls('table-selection'), function (el) { return (_this.refs.tableEl = el); }, this.extendSelectionRange, this.execCommand, this.createTableArea(tableRange), cls('table-selection-layer'), selectionAreaBound, cls('table-description'), this.getDescription());
    };
    return TablePopupBody;
}(Component));
var templateObject_1$c, templateObject_2$6, templateObject_3$2, templateObject_4$1;

var CustomPopupBody = /** @class */ (function (_super) {
    __extends(CustomPopupBody, _super);
    function CustomPopupBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomPopupBody.prototype.mounted = function () {
        // append the custom popup body element
        this.refs.el.appendChild(this.props.body);
    };
    CustomPopupBody.prototype.updated = function (prevProps) {
        // update custom popup element
        this.refs.el.replaceChild(this.props.body, prevProps.body);
    };
    CustomPopupBody.prototype.render = function () {
        var _this = this;
        return html(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["<div ref=", "></div>"], ["<div ref=", "></div>"])), function (el) { return (_this.refs.el = el); });
    };
    return CustomPopupBody;
}(Component));
var templateObject_1$b;

function createToolbarItemInfo(type) {
    return isString_1(type) ? createDefaultToolbarItemInfo(type) : type;
}
function createScrollSyncToolbarItem() {
    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    var toggleSwitch = document.createElement('span');
    label.className = 'scroll-sync active';
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    toggleSwitch.className = 'switch';
    var onMounted = function (execCommand) {
        return checkbox.addEventListener('change', function (ev) {
            var checked = ev.target.checked;
            if (checked) {
                addClass_1(label, 'active');
            }
            else {
                removeClass_1(label, 'active');
            }
            execCommand('toggleScrollSync', { active: checked });
        });
    };
    label.appendChild(checkbox);
    label.appendChild(toggleSwitch);
    return {
        name: 'scrollSync',
        el: label,
        onMounted: onMounted,
    };
}
function createDefaultToolbarItemInfo(type) {
    var info;
    switch (type) {
        case 'heading':
            info = {
                name: 'heading',
                className: 'heading',
                tooltip: i18n.get('Headings'),
                state: 'heading',
            };
            break;
        case 'bold':
            info = {
                name: 'bold',
                className: 'bold',
                command: 'bold',
                tooltip: i18n.get('Bold'),
                state: 'strong',
            };
            break;
        case 'italic':
            info = {
                name: 'italic',
                className: 'italic',
                command: 'italic',
                tooltip: i18n.get('Italic'),
                state: 'emph',
            };
            break;
        case 'strike':
            info = {
                name: 'strike',
                className: 'strike',
                command: 'strike',
                tooltip: i18n.get('Strike'),
                state: 'strike',
            };
            break;
        case 'hr':
            info = {
                name: 'hr',
                className: 'hrline',
                command: 'hr',
                tooltip: i18n.get('Line'),
                state: 'thematicBreak',
            };
            break;
        case 'quote':
            info = {
                name: 'quote',
                className: 'quote',
                command: 'blockQuote',
                tooltip: i18n.get('Blockquote'),
                state: 'blockQuote',
            };
            break;
        case 'ul':
            info = {
                name: 'ul',
                className: 'bullet-list',
                command: 'bulletList',
                tooltip: i18n.get('Unordered list'),
                state: 'bulletList',
            };
            break;
        case 'ol':
            info = {
                name: 'ol',
                className: 'ordered-list',
                command: 'orderedList',
                tooltip: i18n.get('Ordered list'),
                state: 'orderedList',
            };
            break;
        case 'task':
            info = {
                name: 'task',
                className: 'task-list',
                command: 'taskList',
                tooltip: i18n.get('Task'),
                state: 'taskList',
            };
            break;
        case 'table':
            info = {
                name: 'table',
                className: 'table',
                tooltip: i18n.get('Insert table'),
                state: 'table',
            };
            break;
        case 'image':
            info = {
                name: 'image',
                className: 'image',
                tooltip: i18n.get('Insert image'),
            };
            break;
        case 'link':
            info = {
                name: 'link',
                className: 'link',
                tooltip: i18n.get('Insert link'),
            };
            break;
        case 'code':
            info = {
                name: 'code',
                className: 'code',
                command: 'code',
                tooltip: i18n.get('Code'),
                state: 'code',
            };
            break;
        case 'codeblock':
            info = {
                name: 'codeblock',
                className: 'codeblock',
                command: 'codeBlock',
                tooltip: i18n.get('Insert CodeBlock'),
                state: 'codeBlock',
            };
            break;
        case 'indent':
            info = {
                name: 'indent',
                className: 'indent',
                command: 'indent',
                tooltip: i18n.get('Indent'),
                state: 'indent',
            };
            break;
        case 'outdent':
            info = {
                name: 'outdent',
                className: 'outdent',
                command: 'outdent',
                tooltip: i18n.get('Outdent'),
                state: 'outdent',
            };
            break;
        case 'scrollSync':
            info = createScrollSyncToolbarItem();
            break;
        case 'more':
            info = {
                name: 'more',
                className: 'more',
                tooltip: i18n.get('More'),
            };
            break;
        // do nothing
    }
    if (info.name !== 'scrollSync') {
        info.className += " " + cls('toolbar-icons');
    }
    return info;
}
function createPopupInfo(type, payload) {
    var el = payload.el, pos = payload.pos, popup = payload.popup, initialValues = payload.initialValues;
    switch (type) {
        case 'heading':
            return {
                render: function (props) { return html(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["<", " ...", " />"], ["<", " ...", " />"])), HeadingPopupBody, props); },
                className: cls('popup-add-heading'),
                fromEl: el,
                pos: pos,
            };
        case 'link':
            return {
                render: function (props) { return html(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["<", " ...", " />"], ["<", " ...", " />"])), LinkPopupBody, props); },
                className: cls('popup-add-link'),
                fromEl: el,
                pos: pos,
                initialValues: initialValues,
            };
        case 'image':
            return {
                render: function (props) { return html(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["<", " ...", " />"], ["<", " ...", " />"])), ImagePopupBody, props); },
                className: cls('popup-add-image'),
                fromEl: el,
                pos: pos,
            };
        case 'table':
            return {
                render: function (props) { return html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["<", " ...", " />"], ["<", " ...", " />"])), TablePopupBody, props); },
                className: cls('popup-add-table'),
                fromEl: el,
                pos: pos,
            };
        case 'customPopupBody':
            if (!popup) {
                return null;
            }
            return __assign({ render: function (props) { return html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["<", " ...", " body=", " />"], ["<", " ...", " body=", " />"])), CustomPopupBody, props, popup.body); }, fromEl: el, pos: pos }, popup);
        default:
            return null;
    }
}
function setGroupState(group) {
    group.hidden = group.length === group.filter(function (info) { return info.hidden; }).length;
}
function groupToolbarItems(toolbarItems, hiddenScrollSync) {
    var toggleScrollSyncState = function (item) {
        item.hidden = item.name === 'scrollSync' && hiddenScrollSync;
        return item;
    };
    return toolbarItems.reduce(function (acc, item) {
        acc.push(item.map(function (type) { return toggleScrollSyncState(createToolbarItemInfo(type)); }));
        var group = acc[(acc.length || 1) - 1];
        if (group) {
            setGroupState(group);
        }
        return acc;
    }, []);
}
function toggleScrollSync(toolbarItems, hiddenScrollSync) {
    toolbarItems.forEach(function (group) {
        group.forEach(function (item) { return (item.hidden = item.name === 'scrollSync' && hiddenScrollSync); });
        setGroupState(group);
    });
}
var templateObject_1$a, templateObject_2$5, templateObject_3$1, templateObject_4, templateObject_5;

var MARGIN_FROM_RIGHT_SIDE = 20;
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMousedown = function (ev) {
            if (!closest(ev.target, "." + cls('popup')) &&
                !closest(ev.target, _this.props.info.fromEl)) {
                _this.props.hidePopup();
            }
        };
        return _this;
    }
    Popup.prototype.mounted = function () {
        document.addEventListener('mousedown', this.handleMousedown);
        this.props.eventEmitter.listen('closePopup', this.props.hidePopup);
    };
    Popup.prototype.beforeDestroy = function () {
        document.removeEventListener('mousedown', this.handleMousedown);
    };
    Popup.prototype.updated = function (prevProps) {
        var _a = this.props, show = _a.show, info = _a.info;
        if (show && info.pos && prevProps.show !== show) {
            var popupPos = __assign({}, info.pos);
            var offsetWidth = this.refs.el.offsetWidth;
            var toolbarEl = closest(this.refs.el, "." + cls('toolbar'));
            var toolbarOffsetWidth = toolbarEl.offsetWidth;
            if (popupPos.left + offsetWidth >= toolbarOffsetWidth) {
                popupPos.left = toolbarOffsetWidth - offsetWidth - MARGIN_FROM_RIGHT_SIDE;
            }
            if (!shallowEqual(this.state.popupPos, popupPos)) {
                this.setState({ popupPos: popupPos });
            }
        }
    };
    Popup.prototype.render = function () {
        var _this = this;
        var _a = this.props, info = _a.info, show = _a.show, hidePopup = _a.hidePopup, eventEmitter = _a.eventEmitter, execCommand = _a.execCommand;
        var _b = info || {}, _c = _b.className, className = _c === void 0 ? '' : _c, style = _b.style, render = _b.render, _d = _b.initialValues, initialValues = _d === void 0 ? {} : _d;
        var popupStyle = __assign(__assign({ display: show ? 'block' : 'none' }, style), this.state.popupPos);
        return html(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n      <div\n        class=\"", " ", "\"\n        style=", "\n        ref=", "\n        aria-role=\"dialog\"\n      >\n        <div class=\"", "\">\n          ", "\n        </div>\n      </div>\n    "], ["\n      <div\n        class=\"", " ", "\"\n        style=", "\n        ref=", "\n        aria-role=\"dialog\"\n      >\n        <div class=\"", "\">\n          ", "\n        </div>\n      </div>\n    "])), cls('popup'), className, popupStyle, function (el) { return (_this.refs.el = el); }, cls('popup-body'), render && render({ eventEmitter: eventEmitter, show: show, hidePopup: hidePopup, execCommand: execCommand, initialValues: initialValues }));
    };
    return Popup;
}(Component));
var templateObject_1$9;

var TOOLTIP_INDENT = 6;
function connectHOC(WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(ButtonHOC, _super);
        function ButtonHOC(props) {
            var _this = _super.call(this, props) || this;
            _this.showTooltip = function (el) {
                var tooltip = _this.props.item.tooltip;
                if (!_this.props.disabled && tooltip) {
                    var bound = _this.getBound(el);
                    var left = bound.left + TOOLTIP_INDENT + "px";
                    var top_1 = bound.top + TOOLTIP_INDENT + "px";
                    css_1(_this.props.tooltipRef.current, { display: 'block', left: left, top: top_1 });
                    _this.props.tooltipRef.current.querySelector('.text').textContent = tooltip;
                }
            };
            _this.hideTooltip = function () {
                css_1(_this.props.tooltipRef.current, 'display', 'none');
            };
            _this.state = { active: false, disabled: props.disabled };
            _this.addEvent();
            return _this;
        }
        ButtonHOC.prototype.addEvent = function () {
            var _this = this;
            var _a = this.props, item = _a.item, eventEmitter = _a.eventEmitter;
            if (item.state) {
                eventEmitter.listen('changeToolbarState', function (_a) {
                    var _b;
                    var toolbarState = _a.toolbarState;
                    var _c = (_b = toolbarState[item.state]) !== null && _b !== void 0 ? _b : {}, active = _c.active, disabled = _c.disabled;
                    _this.setState({ active: !!active, disabled: disabled !== null && disabled !== void 0 ? disabled : _this.props.disabled });
                });
            }
        };
        ButtonHOC.prototype.getBound = function (el) {
            var _a = getTotalOffset(el, closest(el, "." + cls('toolbar'))), offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop;
            return { left: offsetLeft, top: el.offsetHeight + offsetTop };
        };
        ButtonHOC.prototype.render = function () {
            return html(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n        <", "\n          ...", "\n          active=", "\n          showTooltip=", "\n          hideTooltip=", "\n          getBound=", "\n          disabled=", "\n        />\n      "], ["\n        <", "\n          ...", "\n          active=", "\n          showTooltip=", "\n          hideTooltip=", "\n          getBound=", "\n          disabled=", "\n        />\n      "])), WrappedComponent, this.props, this.state.active, this.showTooltip, this.hideTooltip, this.getBound, this.state.disabled || this.props.disabled);
        };
        return ButtonHOC;
    }(Component));
}
var templateObject_1$8;

var DEFAULT_WIDTH = 80;
var ToolbarButtonComp = /** @class */ (function (_super) {
    __extends(ToolbarButtonComp, _super);
    function ToolbarButtonComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showTooltip = function () {
            _this.props.showTooltip(_this.refs.el);
        };
        _this.execCommand = function () {
            var _a = _this.props, item = _a.item, execCommand = _a.execCommand, setPopupInfo = _a.setPopupInfo, getBound = _a.getBound, eventEmitter = _a.eventEmitter;
            var command = item.command, name = item.name, popup = item.popup;
            if (command) {
                execCommand(command);
            }
            else {
                var popupName = popup ? 'customPopupBody' : name;
                var initialValues = eventEmitter.emit('query', 'getPopupInitialValues', { popupName: popupName })[0];
                var info = createPopupInfo(popupName, {
                    el: _this.refs.el,
                    pos: getBound(_this.refs.el),
                    popup: popup,
                    initialValues: initialValues,
                });
                if (info) {
                    setPopupInfo(info);
                }
            }
        };
        return _this;
    }
    ToolbarButtonComp.prototype.mounted = function () {
        this.setItemWidth();
    };
    ToolbarButtonComp.prototype.updated = function (prevProps) {
        if (prevProps.item.name !== this.props.item.name) {
            this.setItemWidth();
        }
    };
    ToolbarButtonComp.prototype.setItemWidth = function () {
        var _a = this.props, setItemWidth = _a.setItemWidth, item = _a.item;
        // set width only if it is not a dropdown toolbar
        if (setItemWidth) {
            setItemWidth(item.name, getOuterWidth(this.refs.el) + (item.hidden ? DEFAULT_WIDTH : 0));
        }
    };
    ToolbarButtonComp.prototype.render = function () {
        var _this = this;
        var _a = this.props, hideTooltip = _a.hideTooltip, disabled = _a.disabled, item = _a.item, active = _a.active;
        var style = __assign({ display: item.hidden ? 'none' : null }, item.style);
        var classNames = "" + (item.className || '') + (active ? ' active' : '');
        return html(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n      <button\n        ref=", "\n        type=\"button\"\n        style=", "\n        class=", "\n        onClick=", "\n        onMouseover=", "\n        onMouseout=", "\n        disabled=", "\n        aria-label=", "\n      >\n        ", "\n      </button>\n    "], ["\n      <button\n        ref=", "\n        type=\"button\"\n        style=", "\n        class=", "\n        onClick=", "\n        onMouseover=", "\n        onMouseout=", "\n        disabled=", "\n        aria-label=", "\n      >\n        ", "\n      </button>\n    "])), function (el) { return (_this.refs.el = el); }, style, classNames, this.execCommand, this.showTooltip, hideTooltip, !!disabled, item.text || item.tooltip || '', item.text || '');
    };
    return ToolbarButtonComp;
}(Component));
var ToolbarButton = connectHOC(ToolbarButtonComp);
var templateObject_1$7;

var CustomToolbarItemComp = /** @class */ (function (_super) {
    __extends(CustomToolbarItemComp, _super);
    function CustomToolbarItemComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showTooltip = function () {
            _this.props.showTooltip(_this.refs.el);
        };
        _this.showPopup = function () {
            var info = createPopupInfo('customPopupBody', {
                el: _this.refs.el,
                pos: _this.props.getBound(_this.refs.el),
                popup: _this.props.item.popup,
            });
            if (info) {
                _this.props.setPopupInfo(info);
            }
        };
        return _this;
    }
    CustomToolbarItemComp.prototype.mounted = function () {
        var _a = this.props, setItemWidth = _a.setItemWidth, item = _a.item;
        // append the custom html element
        this.refs.el.appendChild(item.el);
        // set width only if it is not a dropdown toolbar
        if (setItemWidth) {
            setItemWidth(item.name, getOuterWidth(this.refs.el));
        }
        if (item.onMounted) {
            item.onMounted(this.props.execCommand);
        }
    };
    CustomToolbarItemComp.prototype.updated = function (prevProps) {
        var _a;
        var _b = this.props, item = _b.item, active = _b.active, disabled = _b.disabled;
        if (prevProps.active !== active || prevProps.disabled !== disabled) {
            (_a = item.onUpdated) === null || _a === void 0 ? void 0 : _a.call(item, { active: active, disabled: disabled });
        }
    };
    CustomToolbarItemComp.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, item = _a.item;
        var style = { display: item.hidden ? 'none' : 'inline-block' };
        var getListener = function (listener) { return (disabled ? null : listener); };
        return html(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n      <div\n        ref=", "\n        style=", "\n        class=", "\n        onClick=", "\n        onMouseover=", "\n        onMouseout=", "\n      ></div>\n    "], ["\n      <div\n        ref=", "\n        style=", "\n        class=", "\n        onClick=", "\n        onMouseover=", "\n        onMouseout=", "\n      ></div>\n    "])), function (el) { return (_this.refs.el = el); }, style, cls('toolbar-item-wrapper'), getListener(this.showPopup), getListener(this.showTooltip), getListener(this.props.hideTooltip));
    };
    return CustomToolbarItemComp;
}(Component));
var CustomToolbarItem = connectHOC(CustomToolbarItemComp);
var templateObject_1$6;

var ToolbarGroup = /** @class */ (function (_super) {
    __extends(ToolbarGroup, _super);
    function ToolbarGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, group = _a.group, hiddenDivider = _a.hiddenDivider;
        var groupStyle = group.hidden ? { display: 'none' } : null;
        var dividerStyle = hiddenDivider ? { display: 'none' } : null;
        return html(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n      <div class=\"", "\" style=", ">\n        ", "\n        <div class=\"", "\" style=", "></div>\n      </div>\n    "], ["\n      <div class=\"", "\" style=", ">\n        ",
            "\n        <div class=\"", "\" style=", "></div>\n      </div>\n    "])), cls('toolbar-group'), groupStyle, group.map(function (item) {
            var Comp = item.el ? CustomToolbarItem : ToolbarButton;
            return html(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["<", " key=", " ...", " item=", " />"], ["<", " key=", " ...", " item=", " />"])), Comp, item.name, _this.props, item);
        }), cls('toolbar-divider'), dividerStyle);
    };
    return ToolbarGroup;
}(Component));
var templateObject_1$5, templateObject_2$4;

var POPUP_INDENT = 4;
var DropdownToolbarButtonComp = /** @class */ (function (_super) {
    __extends(DropdownToolbarButtonComp, _super);
    function DropdownToolbarButtonComp(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickDocument = function (_a) {
            var target = _a.target;
            if (!closest(target, "." + cls('dropdown-toolbar')) &&
                !closest(target, '.more')) {
                _this.setState({ showDropdown: false, dropdownPos: null });
            }
        };
        _this.showTooltip = function () {
            _this.props.showTooltip(_this.refs.el);
        };
        _this.state = { showDropdown: false, dropdownPos: null };
        return _this;
    }
    DropdownToolbarButtonComp.prototype.getBound = function () {
        var rect = this.props.getBound(this.refs.el);
        rect.top += POPUP_INDENT;
        return __assign(__assign({}, rect), { left: null, right: 10 });
    };
    DropdownToolbarButtonComp.prototype.mounted = function () {
        document.addEventListener('click', this.handleClickDocument);
    };
    DropdownToolbarButtonComp.prototype.updated = function () {
        if (this.state.showDropdown && !this.state.dropdownPos) {
            this.setState({ dropdownPos: this.getBound() });
        }
    };
    DropdownToolbarButtonComp.prototype.beforeDestroy = function () {
        document.removeEventListener('click', this.handleClickDocument);
    };
    DropdownToolbarButtonComp.prototype.render = function () {
        var _this = this;
        var _a = this.state, showDropdown = _a.showDropdown, dropdownPos = _a.dropdownPos;
        var _b = this.props, disabled = _b.disabled, item = _b.item, items = _b.items, hideTooltip = _b.hideTooltip;
        var visibleItems = items.filter(function (dropdownItem) { return !dropdownItem.hidden; });
        var groupStyle = visibleItems.length ? null : { display: 'none' };
        var dropdownStyle = showDropdown ? null : { display: 'none' };
        return html(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n      <div class=\"", "\" style=", ">\n        <button\n          ref=", "\n          type=\"button\"\n          class=", "\n          onClick=", "\n          onMouseover=", "\n          onMouseout=", "\n          disabled=", "\n        ></button>\n        <div\n          class=\"", "\"\n          style=", "\n          ref=", "\n        >\n          ", "\n        </div>\n      </div>\n    "], ["\n      <div class=\"", "\" style=", ">\n        <button\n          ref=", "\n          type=\"button\"\n          class=", "\n          onClick=", "\n          onMouseover=", "\n          onMouseout=", "\n          disabled=", "\n        ></button>\n        <div\n          class=\"", "\"\n          style=", "\n          ref=", "\n        >\n          ",
            "\n        </div>\n      </div>\n    "])), cls('toolbar-group'), groupStyle, function (el) { return (_this.refs.el = el); }, item.className, function () { return _this.setState({ showDropdown: true }); }, this.showTooltip, hideTooltip, disabled, cls('dropdown-toolbar'), __assign(__assign({}, dropdownStyle), dropdownPos), function (el) { return (_this.refs.dropdownEl = el); }, visibleItems.length
            ? visibleItems.map(function (group, index) {
                var _a;
                return html(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n                  <", "\n                    group=", "\n                    hiddenDivider=", "\n                    ...", "\n                  />\n                "], ["\n                  <", "\n                    group=", "\n                    hiddenDivider=",
                    "\n                    ...", "\n                  />\n                "])), ToolbarGroup, group, index === visibleItems.length - 1 ||
                    ((_a = visibleItems[index + 1]) === null || _a === void 0 ? void 0 : _a.hidden), _this.props);
            })
            : null);
    };
    return DropdownToolbarButtonComp;
}(Component));
var DropdownToolbarButton = connectHOC(DropdownToolbarButtonComp);
var templateObject_1$4, templateObject_2$3;

var INLINE_PADDING = 50;
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleTab = function (_, activeTab) {
            var eventEmitter = _this.props.eventEmitter;
            if (_this.state.activeTab !== activeTab) {
                var event_1 = activeTab === 'write' ? 'changePreviewTabWrite' : 'changePreviewTabPreview';
                eventEmitter.emit(event_1);
                _this.setState({ activeTab: activeTab });
            }
        };
        _this.setItemWidth = function (name, width) {
            _this.itemWidthMap[name] = width;
        };
        _this.setPopupInfo = function (popupInfo) {
            _this.setState({ showPopup: true, popupInfo: popupInfo });
        };
        _this.openPopup = function (popupName, initialValues) {
            if (initialValues === void 0) { initialValues = {}; }
            var el = _this.refs.el.querySelector("." + cls('toolbar-group') + " ." + popupName);
            if (el) {
                var _a = getTotalOffset(el, closest(el, "." + cls('toolbar'))), offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop;
                var info = createPopupInfo(popupName, {
                    el: el,
                    pos: { left: offsetLeft, top: el.offsetHeight + offsetTop },
                    initialValues: initialValues,
                });
                if (info) {
                    _this.setPopupInfo(info);
                }
            }
        };
        _this.hidePopup = function () {
            if (_this.state.showPopup) {
                _this.setState({ showPopup: false });
            }
        };
        _this.execCommand = function (command, payload) {
            var eventEmitter = _this.props.eventEmitter;
            eventEmitter.emit('command', command, payload);
            _this.hidePopup();
        };
        _this.tabs = [
            { name: 'write', text: 'Write' },
            { name: 'preview', text: 'Preview' },
        ];
        _this.itemWidthMap = {};
        _this.initialItems = groupToolbarItems(props.toolbarItems || [], _this.hiddenScrollSync());
        _this.state = {
            items: _this.initialItems,
            dropdownItems: [],
            showPopup: false,
            popupInfo: {},
            activeTab: 'write',
        };
        _this.tooltipRef = { current: null };
        _this.resizeObserver = new index(function () { return _this.handleResize(); });
        _this.addEvent();
        return _this;
    }
    Toolbar.prototype.insertToolbarItem = function (indexList, item) {
        var groupIndex = indexList.groupIndex, itemIndex = indexList.itemIndex;
        var group = this.initialItems[groupIndex];
        item = createToolbarItemInfo(item);
        if (group) {
            group.splice(itemIndex, 0, item);
        }
        else {
            this.initialItems.push([item]);
        }
        this.setState(this.classifyToolbarItems());
    };
    Toolbar.prototype.removeToolbarItem = function (name) {
        var _this = this;
        forEachArray_1(this.initialItems, function (group) {
            var found = false;
            forEachArray_1(group, function (item, index) {
                if (item.name === name) {
                    found = true;
                    group.splice(index, 1);
                    _this.setState(_this.classifyToolbarItems());
                    return false;
                }
                return true;
            });
            return !found;
        });
    };
    Toolbar.prototype.addEvent = function () {
        var _this = this;
        var eventEmitter = this.props.eventEmitter;
        this.handleResize = throttle_1(function () {
            // reset toolbar items to re-layout toolbar items with each clientWidth
            _this.setState({ items: _this.initialItems, dropdownItems: [] });
            _this.setState(_this.classifyToolbarItems());
        }, 200);
        eventEmitter.listen('openPopup', this.openPopup);
    };
    Toolbar.prototype.appendTooltipToRoot = function () {
        var tooltip = "<div class=\"" + cls('tooltip') + "\" style=\"display:none\">\n        <div class=\"arrow\"></div>\n        <span class=\"text\"></span>\n      </div>";
        this.tooltipRef.current = createElementWith(tooltip, this.refs.el);
    };
    Toolbar.prototype.hiddenScrollSync = function () {
        return this.props.editorType === 'wysiwyg' || this.props.previewStyle === 'tab';
    };
    Toolbar.prototype.movePrevItemToDropdownToolbar = function (itemIndex, items, group, dropdownGroup) {
        var moveItem = function (targetGroup) {
            var item = targetGroup.pop();
            if (item) {
                dropdownGroup.push(item);
            }
        };
        if (itemIndex > 1) {
            moveItem(group);
        }
        else {
            var prevGroup = last(items);
            if (prevGroup) {
                moveItem(prevGroup);
            }
        }
    };
    Toolbar.prototype.classifyToolbarItems = function () {
        var _this = this;
        var totalWidth = 0;
        var clientWidth = this.refs.el.clientWidth;
        var divider = this.refs.el.querySelector("." + cls('toolbar-divider'));
        var dividerWidth = divider ? getOuterWidth(divider) : 0;
        var items = [];
        var dropdownItems = [];
        var moved = false;
        this.initialItems.forEach(function (initialGroup, groupIndex) {
            var group = [];
            var dropdownGroup = [];
            initialGroup.forEach(function (item, itemIndex) {
                if (!item.hidden) {
                    totalWidth += _this.itemWidthMap[item.name];
                    if (totalWidth > clientWidth - INLINE_PADDING) {
                        // should move the prev item to dropdown toolbar for placing the more button
                        if (!moved) {
                            _this.movePrevItemToDropdownToolbar(itemIndex, items, group, dropdownGroup);
                            moved = true;
                        }
                        dropdownGroup.push(item);
                    }
                    else {
                        group.push(item);
                    }
                }
            });
            if (group.length) {
                setGroupState(group);
                items.push(group);
            }
            if (dropdownGroup.length) {
                setGroupState(dropdownGroup);
                dropdownItems.push(dropdownGroup);
            }
            // add divider width
            if (groupIndex < _this.state.items.length - 1) {
                totalWidth += dividerWidth;
            }
        });
        return { items: items, dropdownItems: dropdownItems };
    };
    Toolbar.prototype.mounted = function () {
        if (this.props.previewStyle === 'tab') {
            this.props.eventEmitter.emit('changePreviewTabWrite', true);
        }
        // classify toolbar and dropdown toolbar after DOM has been rendered
        this.setState(this.classifyToolbarItems());
        this.appendTooltipToRoot();
        this.resizeObserver.observe(this.refs.el);
    };
    Toolbar.prototype.updated = function (prevProps) {
        var _a = this.props, editorType = _a.editorType, previewStyle = _a.previewStyle, eventEmitter = _a.eventEmitter;
        var changedStyle = previewStyle !== prevProps.previewStyle;
        var changedType = editorType !== prevProps.editorType;
        if (changedStyle || changedType) {
            // show or hide scrollSync button
            toggleScrollSync(this.initialItems, this.hiddenScrollSync());
            var newState = this.classifyToolbarItems();
            if (changedStyle || (previewStyle === 'tab' && editorType === 'markdown')) {
                eventEmitter.emit('changePreviewTabWrite');
                newState.activeTab = 'write';
            }
            this.setState(newState);
        }
    };
    Toolbar.prototype.beforeDestroy = function () {
        window.removeEventListener('resize', this.handleResize);
        this.resizeObserver.disconnect();
        removeNode$1(this.tooltipRef.current);
    };
    Toolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, previewStyle = _a.previewStyle, eventEmitter = _a.eventEmitter, editorType = _a.editorType;
        var _b = this.state, popupInfo = _b.popupInfo, showPopup = _b.showPopup, activeTab = _b.activeTab, items = _b.items, dropdownItems = _b.dropdownItems;
        var props = {
            eventEmitter: eventEmitter,
            tooltipRef: this.tooltipRef,
            disabled: editorType === 'markdown' && previewStyle === 'tab' && activeTab === 'preview',
            execCommand: this.execCommand,
            setPopupInfo: this.setPopupInfo,
        };
        var toolbarStyle = previewStyle === 'tab' ? { borderTopLeftRadius: 0 } : null;
        return html(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n      <div class=\"", "\">\n        <div\n          class=\"", "\"\n          style=\"display: ", "\"\n        >\n          <", " tabs=", " activeTab=", " onClick=", " />\n        </div>\n        <div\n          class=\"", "\"\n          ref=", "\n          style=", "\n        >\n          ", "\n          <", "\n            item=", "\n            items=", "\n            ...", "\n          />\n        </div>\n        <", "\n          info=", "\n          show=", "\n          eventEmitter=", "\n          hidePopup=", "\n          execCommand=", "\n        />\n      </div>\n    "], ["\n      <div class=\"", "\">\n        <div\n          class=\"", "\"\n          style=\"display: ",
            "\"\n        >\n          <", " tabs=", " activeTab=", " onClick=", " />\n        </div>\n        <div\n          class=\"", "\"\n          ref=", "\n          style=", "\n        >\n          ",
            "\n          <", "\n            item=", "\n            items=", "\n            ...", "\n          />\n        </div>\n        <", "\n          info=", "\n          show=", "\n          eventEmitter=", "\n          hidePopup=", "\n          execCommand=", "\n        />\n      </div>\n    "])), cls('toolbar'), cls('md-tab-container'), editorType === 'wysiwyg' || previewStyle === 'vertical'
            ? 'none'
            : 'block', Tabs, this.tabs, activeTab, this.toggleTab, cls('defaultUI-toolbar'), function (el) { return (_this.refs.el = el); }, toolbarStyle, items.map(function (group, index) {
            var _a;
            return html(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n              <", "\n                group=", "\n                hiddenDivider=", "\n                setItemWidth=", "\n                ...", "\n              />\n            "], ["\n              <", "\n                group=", "\n                hiddenDivider=", "\n                setItemWidth=", "\n                ...", "\n              />\n            "])), ToolbarGroup, group, index === items.length - 1 || ((_a = items[index + 1]) === null || _a === void 0 ? void 0 : _a.hidden), _this.setItemWidth, props);
        }), DropdownToolbarButton, createToolbarItemInfo('more'), dropdownItems, props, Popup, popupInfo, showPopup, eventEmitter, this.hidePopup, this.execCommand);
    };
    return Toolbar;
}(Component));
var templateObject_1$3, templateObject_2$2;

var ContextMenu = /** @class */ (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickDocument = function (ev) {
            if (!closest(ev.target, "." + cls('context-menu'))) {
                _this.setState({ pos: null });
            }
        };
        _this.state = {
            pos: null,
            menuGroups: [],
        };
        _this.addEvent();
        return _this;
    }
    ContextMenu.prototype.addEvent = function () {
        var _this = this;
        this.props.eventEmitter.listen('contextmenu', function (_a) {
            var pos = _a.pos, menuGroups = _a.menuGroups;
            _this.setState({ pos: pos, menuGroups: menuGroups });
        });
    };
    ContextMenu.prototype.mounted = function () {
        document.addEventListener('click', this.handleClickDocument);
    };
    ContextMenu.prototype.beforeDestroy = function () {
        document.removeEventListener('click', this.handleClickDocument);
    };
    ContextMenu.prototype.getMenuGroupElements = function () {
        var _this = this;
        var _a = this.state, pos = _a.pos, menuGroups = _a.menuGroups;
        return pos
            ? menuGroups.reduce(function (acc, group) {
                var menuItem = [];
                group.forEach(function (_a) {
                    var label = _a.label, _b = _a.className, className = _b === void 0 ? false : _b, disabled = _a.disabled, onClick = _a.onClick;
                    var handleClick = function () {
                        if (!disabled) {
                            onClick();
                            _this.setState({ pos: null });
                        }
                    };
                    menuItem.push(html(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n                <li\n                  onClick=", "\n                  class=\"menu-item", "\"\n                  aria-role=\"menuitem\"\n                >\n                  <span class=\"", "\">", "</span>\n                </li>\n              "], ["\n                <li\n                  onClick=", "\n                  class=\"menu-item", "\"\n                  aria-role=\"menuitem\"\n                >\n                  <span class=\"", "\">", "</span>\n                </li>\n              "])), handleClick, disabled ? ' disabled' : '', className, label));
                });
                acc.push(html(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["<ul class=\"menu-group\">\n              ", "\n            </ul>"], ["<ul class=\"menu-group\">\n              ", "\n            </ul>"])), menuItem));
                return acc;
            }, [])
            : [];
    };
    ContextMenu.prototype.render = function () {
        var style = __assign({ display: this.state.pos ? 'block' : 'none' }, this.state.pos);
        return html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["<div class=\"", "\" style=", " aria-role=\"menu\">\n      ", "\n    </div>"], ["<div class=\"", "\" style=", " aria-role=\"menu\">\n      ", "\n    </div>"])), cls('context-menu'), style, this.getMenuGroupElements());
    };
    return ContextMenu;
}(Component));
var templateObject_1$2, templateObject_2$1, templateObject_3;

var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(props) {
        var _this = _super.call(this, props) || this;
        _this.changeMode = function (editorType) {
            if (editorType !== _this.state.editorType) {
                _this.setState({ editorType: editorType });
            }
        };
        _this.changePreviewStyle = function (previewStyle) {
            if (previewStyle !== _this.state.previewStyle) {
                _this.setState({ previewStyle: previewStyle });
            }
        };
        _this.hide = function () {
            _this.setState({ hide: true });
        };
        _this.show = function () {
            _this.setState({ hide: false });
        };
        var editorType = props.editorType, previewStyle = props.previewStyle;
        _this.state = {
            editorType: editorType,
            previewStyle: previewStyle,
            hide: false,
        };
        _this.addEvent();
        return _this;
    }
    Layout.prototype.mounted = function () {
        var _a = this.props.slots, wwEditor = _a.wwEditor, mdEditor = _a.mdEditor, mdPreview = _a.mdPreview;
        this.refs.wwContainer.appendChild(wwEditor);
        this.refs.mdContainer.insertAdjacentElement('afterbegin', mdEditor);
        this.refs.mdContainer.appendChild(mdPreview);
    };
    Layout.prototype.insertToolbarItem = function (indexList, item) {
        this.toolbar.insertToolbarItem(indexList, item);
    };
    Layout.prototype.removeToolbarItem = function (name) {
        this.toolbar.removeToolbarItem(name);
    };
    Layout.prototype.render = function () {
        var _this = this;
        var _a = this.props, eventEmitter = _a.eventEmitter, hideModeSwitch = _a.hideModeSwitch, toolbarItems = _a.toolbarItems, theme = _a.theme;
        var _b = this.state, hide = _b.hide, previewStyle = _b.previewStyle, editorType = _b.editorType;
        var displayClassName = hide ? ' hidden' : '';
        var editorTypeClassName = cls(editorType === 'markdown' ? 'md-mode' : 'ww-mode');
        var previewClassName = cls('md') + "-" + previewStyle + "-style";
        var themeClassName = cls([theme !== 'light', theme + " "]);
        return html(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      <div\n        class=\"", "", "", "\"\n        ref=", "\n      >\n        <", "\n          ref=", "\n          eventEmitter=", "\n          previewStyle=", "\n          toolbarItems=", "\n          editorType=", "\n        />\n        <div\n          class=\"", " ", "\"\n          ref=", "\n        >\n          <div class=\"", "\">\n            <div\n              class=\"", " ", "\"\n              ref=", "\n            >\n              <div class=\"", "\"></div>\n            </div>\n            <div\n              class=\"", "\"\n              ref=", "\n            />\n          </div>\n        </div>\n        ", "\n        <", " eventEmitter=", " />\n      </div>\n    "], ["\n      <div\n        class=\"", "", "", "\"\n        ref=", "\n      >\n        <", "\n          ref=", "\n          eventEmitter=", "\n          previewStyle=", "\n          toolbarItems=", "\n          editorType=", "\n        />\n        <div\n          class=\"", " ", "\"\n          ref=", "\n        >\n          <div class=\"", "\">\n            <div\n              class=\"", " ", "\"\n              ref=", "\n            >\n              <div class=\"", "\"></div>\n            </div>\n            <div\n              class=\"", "\"\n              ref=", "\n            />\n          </div>\n        </div>\n        ",
            "\n        <", " eventEmitter=", " />\n      </div>\n    "])), themeClassName, cls('defaultUI'), displayClassName, function (el) { return (_this.refs.el = el); }, Toolbar, function (toolbar) { return (_this.toolbar = toolbar); }, eventEmitter, previewStyle, toolbarItems, editorType, cls('main'), editorTypeClassName, function (el) { return (_this.refs.editorSection = el); }, cls('main-container'), cls('md-container'), previewClassName, function (el) { return (_this.refs.mdContainer = el); }, cls('md-splitter'), cls('ww-container'), function (el) { return (_this.refs.wwContainer = el); }, !hideModeSwitch && html(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["<", " eventEmitter=", " editorType=", " />"], ["<", " eventEmitter=", " editorType=", " />"])), Switch, eventEmitter, editorType), ContextMenu, eventEmitter);
    };
    Layout.prototype.addEvent = function () {
        var eventEmitter = this.props.eventEmitter;
        eventEmitter.listen('hide', this.hide);
        eventEmitter.listen('show', this.show);
        eventEmitter.listen('changeMode', this.changeMode);
        eventEmitter.listen('changePreviewStyle', this.changePreviewStyle);
    };
    return Layout;
}(Component));
var templateObject_1$1, templateObject_2;

/**
 * ToastUI Editor
 * @extends ToastUIEditorCore
 */
var ToastUIEditor = /** @class */ (function (_super) {
    __extends(ToastUIEditor, _super);
    function ToastUIEditor(options) {
        var _a;
        var _this = _super.call(this, options) || this;
        var layoutComp;
        var destroy = render(_this.options.el, html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <", "\n          ref=", "\n          eventEmitter=", "\n          slots=", "\n          hideModeSwitch=", "\n          toolbarItems=", "\n          previewStyle=", "\n          editorType=", "\n          theme=", "\n        />\n      "], ["\n        <", "\n          ref=", "\n          eventEmitter=", "\n          slots=", "\n          hideModeSwitch=", "\n          toolbarItems=", "\n          previewStyle=", "\n          editorType=", "\n          theme=", "\n        />\n      "])), Layout, function (layout) { return (layoutComp = layout); }, _this.eventEmitter, _this.getEditorElements(), _this.options.hideModeSwitch, _this.options.toolbarItems, _this.options.previewStyle, _this.options.initialEditType, _this.options.theme));
        _this.setMinHeight(_this.options.minHeight);
        _this.setHeight(_this.options.height);
        _this.defaultUI = {
            insertToolbarItem: layoutComp.insertToolbarItem.bind(layoutComp),
            removeToolbarItem: layoutComp.removeToolbarItem.bind(layoutComp),
            destroy: destroy,
        };
        (_a = _this.pluginInfo.toolbarItems) === null || _a === void 0 ? void 0 : _a.forEach(function (toolbarItem) {
            var groupIndex = toolbarItem.groupIndex, itemIndex = toolbarItem.itemIndex, item = toolbarItem.item;
            _this.defaultUI.insertToolbarItem({ groupIndex: groupIndex, itemIndex: itemIndex }, item);
        });
        _this.eventEmitter.emit('loadUI', _this);
        return _this;
    }
    /**
     * Factory method for Editor
     * @param {object} options Option for initialize TUIEditor
     * @returns {object} ToastUIEditor or ToastUIEditorViewer
     */
    ToastUIEditor.factory = function (options) {
        return options.viewer ? new ToastUIEditorViewer(options) : new ToastUIEditor(options);
    };
    /**
     * add toolbar item
     * @param {Object} indexInfo group index and item index of the toolbar item
     * @param {string|Object} item toolbar item
     */
    ToastUIEditor.prototype.insertToolbarItem = function (indexInfo, item) {
        this.defaultUI.insertToolbarItem(indexInfo, item);
    };
    /**
     * Remove toolbar item
     * @param {string} itemName toolbar item name
     */
    ToastUIEditor.prototype.removeToolbarItem = function (itemName) {
        this.defaultUI.removeToolbarItem(itemName);
    };
    /**
     * Destroy TUIEditor from document
     */
    ToastUIEditor.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.defaultUI.destroy();
    };
    return ToastUIEditor;
}(ToastUIEditorCore));
var templateObject_1;

/**
 * @fileoverview I18N for English
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 */
ToastUIEditorCore.setLanguage(['en', 'en-US'], {
    Markdown: 'Markdown',
    WYSIWYG: 'WYSIWYG',
    Write: 'Write',
    Preview: 'Preview',
    Headings: 'Headings',
    Paragraph: 'Paragraph',
    Bold: 'Bold',
    Italic: 'Italic',
    Strike: 'Strike',
    Code: 'Inline code',
    Line: 'Line',
    Blockquote: 'Blockquote',
    'Unordered list': 'Unordered list',
    'Ordered list': 'Ordered list',
    Task: 'Task',
    Indent: 'Indent',
    Outdent: 'Outdent',
    'Insert link': 'Insert link',
    'Insert CodeBlock': 'Insert codeBlock',
    'Insert table': 'Insert table',
    'Insert image': 'Insert image',
    Heading: 'Heading',
    'Image URL': 'Image URL',
    'Select image file': 'Select image file',
    'Choose a file': 'Choose a file',
    'No file': 'No file',
    Description: 'Description',
    OK: 'OK',
    More: 'More',
    Cancel: 'Cancel',
    File: 'File',
    URL: 'URL',
    'Link text': 'Link text',
    'Add row to up': 'Add row to up',
    'Add row to down': 'Add row to down',
    'Add column to left': 'Add column to left',
    'Add column to right': 'Add column to right',
    'Remove row': 'Remove row',
    'Remove column': 'Remove column',
    'Align column to left': 'Align column to left',
    'Align column to center': 'Align column to center',
    'Align column to right': 'Align column to right',
    'Remove table': 'Remove table',
    'Would you like to paste as table?': 'Would you like to paste as table?',
    'Text color': 'Text color',
    'Auto scroll enabled': 'Auto scroll enabled',
    'Auto scroll disabled': 'Auto scroll disabled',
    'Choose language': 'Choose language',
});

export { ToastUIEditor as Editor, ToastUIEditorCore as EditorCore, ToastUIEditor as default };
