/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* harmony export (immutable) */ __webpack_exports__["c"] = __spread;
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
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
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter_ = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(1);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root_ = root;
        this.initialize.apply(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __spread */](args));
        // Note that we initialize foundation here and not within the constructor's default param so that
        // this.root_ is defined and can be used within the foundation class.
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* MDCFoundation */]({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler) {
        this.root_.addEventListener(evtType, handler);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler) {
        this.root_.removeEventListener(evtType, handler);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    };
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["b"] = getNormalizedEventCoords;
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
/**
 * Stores result from applyPassive to avoid redundant processing to detect
 * passive event listener support.
 */
var supportsPassive_;
function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    document.body.appendChild(node);
    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    node.remove();
    return hasPseudoVarBug;
}
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
    }
    else {
        supportsCssVars = false;
    }
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj, forceRefresh) {
    if (globalObj === void 0) { globalObj = window; }
    if (forceRefresh === void 0) { forceRefresh = false; }
    if (supportsPassive_ === undefined || forceRefresh) {
        var isSupported_1 = false;
        try {
            globalObj.document.addEventListener('test', function () { return undefined; }, {
                get passive() {
                    isSupported_1 = true;
                    return isSupported_1;
                },
            });
        }
        catch (e) {
        } // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
        supportsPassive_ = isSupported_1;
    }
    return supportsPassive_ ? { passive: true } : false;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}
//# sourceMappingURL=util.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRippleFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(3);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT_1);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT_2);
                _this.adapter_.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
        }
        else {
            this.adapter_.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter_.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter_.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) { return _this.adapter_.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* getNormalizedEventCoords */])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter_.removeClass(FG_DEACTIVATION);
            }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFloatingLabelFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(44);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter_.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter_.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter_.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter_.removeClass(LABEL_SHAKE);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter_.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCFloatingLabelFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(3);
/* unused harmony reexport util */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




//# sourceMappingURL=index.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dom_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(3);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCRipple = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCRipple, _super);
    function MDCRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    MDCRipple.attachTo = function (root, opts) {
        if (opts === void 0) { opts = { isUnbounded: undefined }; }
        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (opts.isUnbounded !== undefined) {
            ripple.unbounded = opts.isUnbounded;
        }
        return ripple;
    };
    MDCRipple.createAdapter = function (instance) {
        return {
            addClass: function (className) { return instance.root_.classList.add(className); },
            browserSupportsCssVars: function () { return __WEBPACK_IMPORTED_MODULE_4__util__["c" /* supportsCssVariables */](window); },
            computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
            containsEventTarget: function (target) { return instance.root_.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* applyPassive */]());
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* applyPassive */]());
            },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            isSurfaceActive: function () { return __WEBPACK_IMPORTED_MODULE_2__material_dom_index__["a" /* ponyfill */].matches(instance.root_, ':active'); },
            isSurfaceDisabled: function () { return Boolean(instance.disabled); },
            isUnbounded: function () { return Boolean(instance.unbounded); },
            registerDocumentInteractionHandler: function (evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* applyPassive */]());
            },
            registerInteractionHandler: function (evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_4__util__["a" /* applyPassive */]());
            },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            removeClass: function (className) { return instance.root_.classList.remove(className); },
            updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
        };
    };
    Object.defineProperty(MDCRipple.prototype, "unbounded", {
        get: function () {
            return Boolean(this.unbounded_);
        },
        set: function (unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
        },
        enumerable: true,
        configurable: true
    });
    MDCRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    MDCRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    MDCRipple.prototype.layout = function () {
        this.foundation_.layout();
    };
    MDCRipple.prototype.getDefaultFoundation = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* MDCRippleFoundation */](MDCRipple.createAdapter(this));
    };
    MDCRipple.prototype.initialSyncWithDOM = function () {
        var root = this.root_;
        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
    };
    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     */
    MDCRipple.prototype.setUnbounded_ = function () {
        this.foundation_.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill__ = __webpack_require__(10);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ponyfill__; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["closest"] = closest;
/* harmony export (immutable) */ __webpack_exports__["matches"] = matches;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
//# sourceMappingURL=ponyfill.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
    ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
    INTERACTION_EVENT: 'MDCChip:interaction',
    LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
    REMOVAL_EVENT: 'MDCChip:removal',
    SELECTION_EVENT: 'MDCChip:selection',
    TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
    TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing',
};
var cssClasses = {
    CHECKMARK: 'mdc-chip__checkmark',
    CHIP_EXIT: 'mdc-chip--exit',
    HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
    LEADING_ICON: 'mdc-chip__icon--leading',
    SELECTED: 'mdc-chip--selected',
    TRAILING_ICON: 'mdc-chip__icon--trailing',
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCChipFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(11);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var emptyClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
var MDCChipFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCChipFoundation, _super);
    function MDCChipFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCChipFoundation.defaultAdapter, adapter)) || this;
        /**
         * Whether a trailing icon click should immediately trigger exit/removal of the chip.
         */
        _this.shouldRemoveOnTrailingIconClick_ = true;
        return _this;
    }
    Object.defineProperty(MDCChipFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassToLeadingIcon: function () { return undefined; },
                eventTargetHasClass: function () { return false; },
                getCheckmarkBoundingClientRect: function () { return emptyClientRect; },
                getComputedStyleValue: function () { return ''; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
                hasClass: function () { return false; },
                hasLeadingIcon: function () { return false; },
                notifyInteraction: function () { return undefined; },
                notifyRemoval: function () { return undefined; },
                notifySelection: function () { return undefined; },
                notifyTrailingIconInteraction: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassFromLeadingIcon: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCChipFoundation.prototype.isSelected = function () {
        return this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED);
    };
    MDCChipFoundation.prototype.setSelected = function (selected) {
        if (selected) {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED);
        }
        else {
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED);
        }
        this.adapter_.notifySelection(selected);
    };
    MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
        return this.shouldRemoveOnTrailingIconClick_;
    };
    MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
        this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
    };
    MDCChipFoundation.prototype.getDimensions = function () {
        var _this = this;
        var getRootRect = function () { return _this.adapter_.getRootBoundingClientRect(); };
        var getCheckmarkRect = function () { return _this.adapter_.getCheckmarkBoundingClientRect(); };
        // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
        // size of the checkmark.
        if (!this.adapter_.hasLeadingIcon()) {
            var checkmarkRect = getCheckmarkRect();
            if (checkmarkRect) {
                var rootRect = getRootRect();
                var height = rootRect.height;
                // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
                // However, the checkbox is initially hidden by setting the width to 0.
                // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
                // when adding it to the root client rect's width.
                var checkmarkWidth = checkmarkRect.height;
                var width = rootRect.width + checkmarkWidth;
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, rootRect, { width: width, height: height });
            }
        }
        return getRootRect();
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChipFoundation.prototype.beginExit = function () {
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CHIP_EXIT);
    };
    /**
     * Handles an interaction event on the root element.
     */
    MDCChipFoundation.prototype.handleInteraction = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnter) {
            this.adapter_.notifyInteraction();
        }
    };
    /**
     * Handles a transition end event on the root element.
     */
    MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
        var _this = this;
        // Handle transition end event on the chip when it is about to be removed.
        if (this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CHIP_EXIT)) {
            if (evt.propertyName === 'width') {
                this.adapter_.notifyRemoval();
            }
            else if (evt.propertyName === 'opacity') {
                // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
                var chipWidth_1 = this.adapter_.getComputedStyleValue('width');
                // On the next frame (once we get the computed width), explicitly set the chip's width
                // to its current pixel width, so we aren't transitioning out of 'auto'.
                requestAnimationFrame(function () {
                    _this.adapter_.setStyleProperty('width', chipWidth_1);
                    // To mitigate jitter, start transitioning padding and margin before width.
                    _this.adapter_.setStyleProperty('padding', '0');
                    _this.adapter_.setStyleProperty('margin', '0');
                    // On the next frame (once width is explicitly set), transition width to 0.
                    requestAnimationFrame(function () {
                        _this.adapter_.setStyleProperty('width', '0');
                    });
                });
            }
            return;
        }
        // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
        if (evt.propertyName !== 'opacity') {
            return;
        }
        if (this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LEADING_ICON) &&
            this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED)) {
            this.adapter_.addClassToLeadingIcon(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HIDDEN_LEADING_ICON);
        }
        else if (this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CHECKMARK) &&
            !this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].SELECTED)) {
            this.adapter_.removeClassFromLeadingIcon(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HIDDEN_LEADING_ICON);
        }
    };
    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     */
    MDCChipFoundation.prototype.handleTrailingIconInteraction = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        evt.stopPropagation();
        if (evt.type === 'click' || isEnter) {
            this.adapter_.notifyTrailingIconInteraction();
            if (this.shouldRemoveOnTrailingIconClick_) {
                this.beginExit();
            }
        }
    };
    return MDCChipFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCChipFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCChipSetFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(37);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCChipSetFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCChipSetFoundation, _super);
    function MDCChipSetFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCChipSetFoundation.defaultAdapter, adapter)) || this;
        /**
         * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
         */
        _this.selectedChipIds_ = [];
        return _this;
    }
    Object.defineProperty(MDCChipSetFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function () {
            return {
                hasClass: function () { return false; },
                removeChip: function () { return undefined; },
                setSelected: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns an array of the IDs of all selected chips.
     */
    MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
        return this.selectedChipIds_.slice();
    };
    /**
     * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
     */
    MDCChipSetFoundation.prototype.select = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            return;
        }
        if (this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CHOICE) && this.selectedChipIds_.length > 0) {
            var previouslySelectedChip = this.selectedChipIds_[0];
            this.selectedChipIds_.length = 0;
            this.adapter_.setSelected(previouslySelectedChip, false);
        }
        this.selectedChipIds_.push(chipId);
        this.adapter_.setSelected(chipId, true);
    };
    /**
     * Handles a chip interaction event
     */
    MDCChipSetFoundation.prototype.handleChipInteraction = function (chipId) {
        if (this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CHOICE) || this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].FILTER)) {
            this.toggleSelect_(chipId);
        }
    };
    /**
     * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
     */
    MDCChipSetFoundation.prototype.handleChipSelection = function (chipId, selected) {
        var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;
        if (selected && !chipIsSelected) {
            this.select(chipId);
        }
        else if (!selected && chipIsSelected) {
            this.deselect_(chipId);
        }
    };
    /**
     * Handles the event when a chip is removed.
     */
    MDCChipSetFoundation.prototype.handleChipRemoval = function (chipId) {
        this.deselect_(chipId);
        this.adapter_.removeChip(chipId);
    };
    /**
     * Deselects the chip with the given id.
     */
    MDCChipSetFoundation.prototype.deselect_ = function (chipId) {
        var index = this.selectedChipIds_.indexOf(chipId);
        if (index >= 0) {
            this.selectedChipIds_.splice(index, 1);
            this.adapter_.setSelected(chipId, false);
        }
    };
    /**
     * Toggles selection of the chip with the given id.
     */
    MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            this.deselect_(chipId);
        }
        else {
            this.select(chipId);
        }
    };
    return MDCChipSetFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCChipSetFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    ROOT: 'mdc-list',
};
var strings = {
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
    ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
};

//# sourceMappingURL=constants.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCListFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(15);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];
function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
}
var MDCListFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCListFoundation, _super);
    function MDCListFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCListFoundation.defaultAdapter, adapter)) || this;
        _this.wrapFocus_ = false;
        _this.isVertical_ = true;
        _this.isSingleSelectionList_ = false;
        _this.selectedIndex_ = -1;
        _this.focusedItemIndex_ = -1;
        _this.useActivatedClass_ = false;
        _this.isCheckboxList_ = false;
        _this.isRadioList_ = false;
        return _this;
    }
    Object.defineProperty(MDCListFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCListFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClassForElementIndex: function () { return undefined; },
                focusItemAtIndex: function () { return undefined; },
                getFocusedElementIndex: function () { return 0; },
                getListItemCount: function () { return 0; },
                hasCheckboxAtIndex: function () { return false; },
                hasRadioAtIndex: function () { return false; },
                isCheckboxCheckedAtIndex: function () { return false; },
                isFocusInsideList: function () { return false; },
                notifyAction: function () { return undefined; },
                removeClassForElementIndex: function () { return undefined; },
                setAttributeForElementIndex: function () { return undefined; },
                setCheckedCheckboxOrRadioAtIndex: function () { return undefined; },
                setTabIndexForListItemChildren: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCListFoundation.prototype.layout = function () {
        if (this.adapter_.getListItemCount() === 0) {
            return;
        }
        if (this.adapter_.hasCheckboxAtIndex(0)) {
            this.isCheckboxList_ = true;
        }
        else if (this.adapter_.hasRadioAtIndex(0)) {
            this.isRadioList_ = true;
        }
    };
    /**
     * Sets the private wrapFocus_ variable.
     */
    MDCListFoundation.prototype.setWrapFocus = function (value) {
        this.wrapFocus_ = value;
    };
    /**
     * Sets the isVertical_ private variable.
     */
    MDCListFoundation.prototype.setVerticalOrientation = function (value) {
        this.isVertical_ = value;
    };
    /**
     * Sets the isSingleSelectionList_ private variable.
     */
    MDCListFoundation.prototype.setSingleSelection = function (value) {
        this.isSingleSelectionList_ = value;
    };
    /**
     * Sets the useActivatedClass_ private variable.
     */
    MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
        this.useActivatedClass_ = useActivated;
    };
    MDCListFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex_;
    };
    MDCListFoundation.prototype.setSelectedIndex = function (index) {
        if (!this.isIndexValid_(index)) {
            return;
        }
        if (this.isCheckboxList_) {
            this.setCheckboxAtIndex_(index);
        }
        else if (this.isRadioList_) {
            this.setRadioAtIndex_(index);
        }
        else {
            this.setSingleSelectionAtIndex_(index);
        }
    };
    /**
     * Focus in handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
        }
    };
    /**
     * Focus out handler for the list items.
     */
    MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
        var _this = this;
        if (listItemIndex >= 0) {
            this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
        }
        /**
         * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
         * is moved to next element.
         */
        setTimeout(function () {
            if (!_this.adapter_.isFocusInsideList()) {
                _this.setTabindexToFirstSelectedItem_();
            }
        }, 0);
    };
    /**
     * Key handler for the list.
     */
    MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
        var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
        var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
        var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
        var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
        var isHome = evt.key === 'Home' || evt.keyCode === 36;
        var isEnd = evt.key === 'End' || evt.keyCode === 35;
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        var isSpace = evt.key === 'Space' || evt.keyCode === 32;
        var currentIndex = this.adapter_.getFocusedElementIndex();
        var nextIndex = -1;
        if (currentIndex === -1) {
            currentIndex = listItemIndex;
            if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
            }
        }
        if ((this.isVertical_ && arrowDown) || (!this.isVertical_ && arrowRight)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusNextElement(currentIndex);
        }
        else if ((this.isVertical_ && arrowUp) || (!this.isVertical_ && arrowLeft)) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusPrevElement(currentIndex);
        }
        else if (isHome) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusFirstElement();
        }
        else if (isEnd) {
            this.preventDefaultEvent_(evt);
            nextIndex = this.focusLastElement();
        }
        else if (isEnter || isSpace) {
            if (isRootListItem) {
                // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
                var target = evt.target;
                if (target && target.tagName === 'A' && isEnter) {
                    return;
                }
                this.preventDefaultEvent_(evt);
                if (this.isSelectableList_()) {
                    this.setSelectedIndexOnAction_(currentIndex);
                }
                this.adapter_.notifyAction(currentIndex);
            }
        }
        this.focusedItemIndex_ = currentIndex;
        if (nextIndex >= 0) {
            this.setTabindexAtIndex_(nextIndex);
            this.focusedItemIndex_ = nextIndex;
        }
    };
    /**
     * Click handler for the list.
     */
    MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
        if (index === -1) {
            return;
        }
        if (this.isSelectableList_()) {
            this.setSelectedIndexOnAction_(index, toggleCheckbox);
        }
        this.adapter_.notifyAction(index);
        this.setTabindexAtIndex_(index);
        this.focusedItemIndex_ = index;
    };
    /**
     * Focuses the next element on the list.
     */
    MDCListFoundation.prototype.focusNextElement = function (index) {
        var count = this.adapter_.getListItemCount();
        var nextIndex = index + 1;
        if (nextIndex >= count) {
            if (this.wrapFocus_) {
                nextIndex = 0;
            }
            else {
                // Return early because last item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(nextIndex);
        return nextIndex;
    };
    /**
     * Focuses the previous element on the list.
     */
    MDCListFoundation.prototype.focusPrevElement = function (index) {
        var prevIndex = index - 1;
        if (prevIndex < 0) {
            if (this.wrapFocus_) {
                prevIndex = this.adapter_.getListItemCount() - 1;
            }
            else {
                // Return early because first item is already focused.
                return index;
            }
        }
        this.adapter_.focusItemAtIndex(prevIndex);
        return prevIndex;
    };
    MDCListFoundation.prototype.focusFirstElement = function () {
        this.adapter_.focusItemAtIndex(0);
        return 0;
    };
    MDCListFoundation.prototype.focusLastElement = function () {
        var lastIndex = this.adapter_.getListItemCount() - 1;
        this.adapter_.focusItemAtIndex(lastIndex);
        return lastIndex;
    };
    /**
     * Ensures that preventDefault is only called if the containing element doesn't
     * consume the event, and it will cause an unintended scroll.
     */
    MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
        var target = evt.target;
        var tagName = ("" + target.tagName).toLowerCase();
        if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
            evt.preventDefault();
        }
    };
    MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
        var selectedClassName = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS;
        if (this.useActivatedClass_) {
            selectedClassName = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS;
        }
        if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
            this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'false');
        }
        this.adapter_.addClassForElementIndex(index, selectedClassName);
        this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'true');
        this.selectedIndex_ = index;
    };
    /**
     * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
     */
    MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);
        if (this.selectedIndex_ >= 0) {
            this.adapter_.setAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, 'false');
        }
        this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, 'true');
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
        for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
            var isChecked = false;
            if (index.indexOf(i) >= 0) {
                isChecked = true;
            }
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
            this.adapter_.setAttributeForElementIndex(i, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, isChecked ? 'true' : 'false');
        }
        this.selectedIndex_ = index;
    };
    MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
        if (this.focusedItemIndex_ === -1 && index !== 0) {
            // If no list item was selected set first list item's tabindex to -1.
            // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
            this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
        }
        else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
            this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
        }
        this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
    };
    /**
     * @return Return true if it is single selectin list, checkbox list or radio list.
     */
    MDCListFoundation.prototype.isSelectableList_ = function () {
        return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
    };
    MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
        var targetIndex = 0;
        if (this.isSelectableList_()) {
            if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== -1) {
                targetIndex = this.selectedIndex_;
            }
            else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
                targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) { return Math.min(currentIndex, minIndex); });
            }
        }
        this.setTabindexAtIndex_(targetIndex);
    };
    MDCListFoundation.prototype.isIndexValid_ = function (index) {
        var _this = this;
        if (index instanceof Array) {
            if (!this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
            }
            if (index.length === 0) {
                return true;
            }
            else {
                return index.some(function (i) { return _this.isIndexInRange_(i); });
            }
        }
        else if (typeof index === 'number') {
            if (this.isCheckboxList_) {
                throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
            }
            return this.isIndexInRange_(index);
        }
        else {
            return false;
        }
    };
    MDCListFoundation.prototype.isIndexInRange_ = function (index) {
        var listSize = this.adapter_.getListItemCount();
        return index >= 0 && index < listSize;
    };
    MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
        if (toggleCheckbox === void 0) { toggleCheckbox = true; }
        if (this.isCheckboxList_) {
            this.toggleCheckboxAtIndex_(index, toggleCheckbox);
        }
        else {
            this.setSelectedIndex(index);
        }
    };
    MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
        var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);
        if (toggleCheckbox) {
            isChecked = !isChecked;
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
        }
        this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, isChecked ? 'true' : 'false');
        // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.
        var selectedIndexes = this.selectedIndex_ === -1 ? [] : this.selectedIndex_.slice();
        if (isChecked) {
            selectedIndexes.push(index);
        }
        else {
            selectedIndexes = selectedIndexes.filter(function (i) { return i !== index; });
        }
        this.selectedIndex_ = selectedIndexes;
    };
    return MDCListFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCListFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCLineRippleFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(47);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRippleFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;
        _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCLineRippleFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

//# sourceMappingURL=constants.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCNotchedOutlineFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(18);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter_.setNotchWidthProperty(notchWidth);
        this.adapter_.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter_.removeClass(OUTLINE_NOTCHED);
        this.adapter_.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCNotchedOutlineFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldCharacterCounterFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(51);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCTextFieldCharacterCounterFoundation, _super);
    function MDCTextFieldCharacterCounterFoundation(adapter) {
        return _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */
        get: function () {
            return {
                setContent: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter_.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCTextFieldCharacterCounterFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VALIDATION_ATTR_WHITELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALWAYS_FLOAT_TYPES; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ICON_SELECTOR: '.mdc-text-field__icon',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
};
var cssClasses = {
    DENSE: 'mdc-text-field--dense',
    DISABLED: 'mdc-text-field--disabled',
    FOCUSED: 'mdc-text-field--focused',
    HELPER_LINE: 'mdc-text-field-helper-line',
    INVALID: 'mdc-text-field--invalid',
    OUTLINED: 'mdc-text-field--outlined',
    ROOT: 'mdc-text-field',
    TEXTAREA: 'mdc-text-field--textarea',
    WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
};
var numbers = {
    DENSE_LABEL_SCALE: 0.923,
    LABEL_SCALE: 0.75,
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */
var VALIDATION_ATTR_WHITELIST = [
    'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */
var ALWAYS_FLOAT_TYPES = [
    'color', 'date', 'datetime-local', 'month', 'range', 'time', 'week',
];

//# sourceMappingURL=constants.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(22);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCTextFieldFoundation, _super);
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCTextFieldFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;
        _this.isFocused_ = false;
        _this.receivedUserInput_ = false;
        _this.isValid_ = true;
        _this.useNativeValidation_ = true;
        _this.helperText_ = foundationMap.helperText;
        _this.characterCounter_ = foundationMap.characterCounter;
        _this.leadingIcon_ = foundationMap.leadingIcon;
        _this.trailingIcon_ = foundationMap.trailingIcon;
        _this.inputFocusHandler_ = function () { return _this.activateFocus(); };
        _this.inputBlurHandler_ = function () { return _this.deactivateFocus(); };
        _this.inputInputHandler_ = function () { return _this.handleInput(); };
        _this.setPointerXOffset_ = function (evt) { return _this.setTransformOrigin(evt); };
        _this.textFieldInteractionHandler_ = function () { return _this.handleTextFieldInteraction(); };
        _this.validationAttributeChangeHandler_ = function (attributesList) { return _this.handleValidationAttributeChange(attributesList); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "numbers", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
        get: function () {
            var type = this.getNativeInput_().type;
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* ALWAYS_FLOAT_TYPES */].indexOf(type) >= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
        get: function () {
            return this.shouldAlwaysFloat_ || this.isFocused_ || Boolean(this.getValue()) || this.isBadInput_();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
        get: function () {
            return !this.isFocused_ && !this.isValid() && Boolean(this.getValue());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return true; },
                registerTextFieldInteractionHandler: function () { return undefined; },
                deregisterTextFieldInteractionHandler: function () { return undefined; },
                registerInputInteractionHandler: function () { return undefined; },
                deregisterInputInteractionHandler: function () { return undefined; },
                registerValidationAttributeChangeHandler: function () { return new MutationObserver(function () { return undefined; }); },
                deregisterValidationAttributeChangeHandler: function () { return undefined; },
                getNativeInput: function () { return null; },
                isFocused: function () { return false; },
                activateLineRipple: function () { return undefined; },
                deactivateLineRipple: function () { return undefined; },
                setLineRippleTransformOrigin: function () { return undefined; },
                shakeLabel: function () { return undefined; },
                floatLabel: function () { return undefined; },
                hasLabel: function () { return false; },
                getLabelWidth: function () { return 0; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldFoundation.prototype.init = function () {
        var _this = this;
        if (this.adapter_.isFocused()) {
            this.inputFocusHandler_();
        }
        else if (this.adapter_.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter_.floatLabel(true);
        }
        this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.validationObserver_ =
            this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
        this.setCharacterCounter_(this.getValue().length);
    };
    MDCTextFieldFoundation.prototype.destroy = function () {
        var _this = this;
        this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
        POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
        });
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
        });
        this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    };
    /**
     * Handles user interactions with the Text Field.
     */
    MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
        var nativeInput = this.adapter_.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
            return;
        }
        this.receivedUserInput_ = true;
    };
    /**
     * Handles validation attribute changes
     */
    MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
        var _this = this;
        attributesList.some(function (attributeName) {
            if (__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* VALIDATION_ATTR_WHITELIST */].indexOf(attributeName) > -1) {
                _this.styleValidity_(true);
                return true;
            }
            return false;
        });
        if (attributesList.indexOf('maxlength') > -1) {
            this.setCharacterCounter_(this.getValue().length);
        }
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter_.hasOutline()) {
            return;
        }
        if (openNotch) {
            var isDense = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["c" /* cssClasses */].DENSE);
            var labelScale = isDense ? __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].DENSE_LABEL_SCALE : __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
        }
        else {
            this.adapter_.closeOutline();
        }
    };
    /**
     * Activates the text field focus state.
     */
    MDCTextFieldFoundation.prototype.activateFocus = function () {
        this.isFocused_ = true;
        this.styleFocused_(this.isFocused_);
        this.adapter_.activateLineRipple();
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
        if (this.helperText_) {
            this.helperText_.showToScreenReader();
        }
    };
    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     */
    MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter_.setLineRippleTransformOrigin(normalizedX);
    };
    /**
     * Handles input change of text input and text area.
     */
    MDCTextFieldFoundation.prototype.handleInput = function () {
        this.autoCompleteFocus();
        this.setCharacterCounter_(this.getValue().length);
    };
    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programmatically).
     */
    MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
        if (!this.receivedUserInput_) {
            this.activateFocus();
        }
    };
    /**
     * Deactivates the Text Field's focus state.
     */
    MDCTextFieldFoundation.prototype.deactivateFocus = function () {
        this.isFocused_ = false;
        this.adapter_.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        this.styleFocused_(this.isFocused_);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
            this.receivedUserInput_ = false;
        }
    };
    MDCTextFieldFoundation.prototype.getValue = function () {
        return this.getNativeInput_().value;
    };
    /**
     * @param value The value to set on the input Element.
     */
    MDCTextFieldFoundation.prototype.setValue = function (value) {
        // Prevent Safari from moving the caret to the end of the input when the value has not changed.
        if (this.getValue() !== value) {
            this.getNativeInput_().value = value;
        }
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
        }
    };
    /**
     * @return The custom validity state, if set; otherwise, the result of a native validity check.
     */
    MDCTextFieldFoundation.prototype.isValid = function () {
        return this.useNativeValidation_
            ? this.isNativeInputValid_() : this.isValid_;
    };
    /**
     * @param isValid Sets the custom validity state of the Text Field.
     */
    MDCTextFieldFoundation.prototype.setValid = function (isValid) {
        this.isValid_ = isValid;
        this.styleValidity_(isValid);
        var shouldShake = !isValid && !this.isFocused_;
        if (this.adapter_.hasLabel()) {
            this.adapter_.shakeLabel(shouldShake);
        }
    };
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
        this.useNativeValidation_ = useNativeValidation;
    };
    MDCTextFieldFoundation.prototype.isDisabled = function () {
        return this.getNativeInput_().disabled;
    };
    /**
     * @param disabled Sets the text-field disabled or enabled.
     */
    MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
        this.getNativeInput_().disabled = disabled;
        this.styleDisabled_(disabled);
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText_) {
            this.helperText_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon_) {
            this.leadingIcon_.setContent(content);
        }
    };
    /**
     * Sets the aria label of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the trailing icon.
     */
    MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
        if (this.trailingIcon_) {
            this.trailingIcon_.setContent(content);
        }
    };
    /**
     * Sets character counter values that shows characters used and the total character limit.
     */
    MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
        if (!this.characterCounter_) {
            return;
        }
        var maxLength = this.getNativeInput_().maxLength;
        if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
        }
        this.characterCounter_.setCounterValue(currentLength, maxLength);
    };
    /**
     * @return True if the Text Field input fails in converting the user-supplied value.
     */
    MDCTextFieldFoundation.prototype.isBadInput_ = function () {
        // The badInput property is not supported in IE 11 💩.
        return this.getNativeInput_().validity.badInput || false;
    };
    /**
     * @return The result of native validity checking (ValidityState.valid).
     */
    MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
        return this.getNativeInput_().validity.valid;
    };
    /**
     * Styles the component based on the validity state.
     */
    MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
        if (isValid) {
            this.adapter_.removeClass(INVALID);
        }
        else {
            this.adapter_.addClass(INVALID);
        }
        if (this.helperText_) {
            this.helperText_.setValidity(isValid);
        }
    };
    /**
     * Styles the component based on the focused state.
     */
    MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
        if (isFocused) {
            this.adapter_.addClass(FOCUSED);
        }
        else {
            this.adapter_.removeClass(FOCUSED);
        }
    };
    /**
     * Styles the component based on the disabled state.
     */
    MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
        var _a = MDCTextFieldFoundation.cssClasses, DISABLED = _a.DISABLED, INVALID = _a.INVALID;
        if (isDisabled) {
            this.adapter_.addClass(DISABLED);
            this.adapter_.removeClass(INVALID);
        }
        else {
            this.adapter_.removeClass(DISABLED);
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.setDisabled(isDisabled);
        }
        if (this.trailingIcon_) {
            this.trailingIcon_.setDisabled(isDisabled);
        }
    };
    /**
     * @return The native text input element from the host environment, or an object with the same shape for unit tests.
     */
    MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
        // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
        // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
        // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
        var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
        return nativeInput || {
            disabled: false,
            maxLength: -1,
            type: 'input',
            validity: {
                badInput: false,
                valid: true,
            },
            value: '',
        };
    };
    return MDCTextFieldFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCTextFieldFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(52);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldHelperTextFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(53);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCTextFieldHelperTextFoundation, _super);
    function MDCTextFieldHelperTextFoundation(adapter) {
        return _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the content of the helper text field.
     */
    MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */
    MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
        }
        else {
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to the screen reader.
     */
    MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE, 'alert');
        }
        else {
            this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide_();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
        this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN, 'true');
    };
    return MDCTextFieldHelperTextFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCTextFieldHelperTextFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldIconFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(55);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldIconFoundation = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCTextFieldIconFoundation, _super);
    function MDCTextFieldIconFoundation(adapter) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.destroy = function () {
        var _this = this;
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter_.setAttr('tabindex', '-1');
            this.adapter_.removeAttr('role');
        }
        else {
            this.adapter_.setAttr('tabindex', this.savedTabIndex_);
            this.adapter_.setAttr('role', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter_.setAttr('aria-label', label);
    };
    MDCTextFieldIconFoundation.prototype.setContent = function (content) {
        this.adapter_.setContent(content);
    };
    MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter_.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_foundation__["a" /* MDCFoundation */]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* unused harmony default export */ var _unused_webpack_default_export = (MDCTextFieldIconFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
module.exports = __webpack_require__(31);


/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/bundle.css";

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_chips__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_list__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_textfield__ = __webpack_require__(40);








var globChipId = null

const closeFilter = () => {
  document.querySelector('#fab-search').style.display = 'block'
  document.querySelector('#search-box').style.display = 'none'
  document.querySelector('#box-black').style.display = 'none'
}

const showMap = (url) => {
  document.getElementById('map').setAttribute('src', url)
  closeFilter()
}

const updateList = (listAlamat = [], listUrl = [], category = 'sekolah') => {
  const createItem = (text, url) => {
    if(!url) {
      return `<li class="mdc-list-item"><span class="mdc-list-item__graphic material-icons" aria-hidden="true">close</span>${ text }</li>`
    }
    return `<li class="mdc-list-item" onclick="document.querySelector('#fab-search').style.display = 'block';document.querySelector('#search-box').style.display = 'none';document.querySelector('#box-black').style.display = 'none';document.getElementById('map').setAttribute('src', '${ url }')"><span class="mdc-list-item__graphic material-icons" aria-hidden="true">place</span>${ text }</li>`
  }
  const seluruhPbg = createItem('Seluruh Purbalingga', __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */].seluruhPurbalingga[category])
  var maps = []
  if(category != 'kecamatan') {
    maps.push(seluruhPbg)
  }

  var counter = 0
  for(let alamat of listAlamat) {
    maps.push(createItem(alamat, listUrl[counter]))
    counter++
  }

  const listDesa = new __WEBPACK_IMPORTED_MODULE_1__material_list__["a" /* MDCList */](document.querySelector('#search-result'));
  const listItemRipples = listDesa.listElements.map((listItemEl) => new __WEBPACK_IMPORTED_MODULE_2__material_ripple__["a" /* MDCRipple */](listItemEl));
  listItemRipples.listElements = []

  document.querySelector('#search-result').innerHTML = maps.join('')
}

const searchDesa = (e) => {
  if(e.target.value.length < 3) return updateList([])

  const category = __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */].getCategory[globChipId]
  const valLower = e.target.value.toLowerCase()

  const getKeysContain = () => {
    var keysContain = []
    for(let alamat of __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */].alamatKeys) {
      const alamatLower = alamat.toLowerCase()
      if(alamatLower.includes(valLower)) {
        keysContain.push(alamat)
      }
    }
    return keysContain
  }

  const keysContain = getKeysContain()
  if(!keysContain.length) return updateList([])

  const getMapsByAlamat = (keysContain) => {
    return __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */].maps.filter((map) => keysContain.includes(map.alamat))
  }

  const mapsByAlamat = getMapsByAlamat(keysContain).map(map => map.mapByCategories)
  const mapsByAlamatAndCategory = mapsByAlamat.map(map => map[category])
  updateList(keysContain, mapsByAlamatAndCategory, category)
}

const goToStep1 = () => {
  globChipId = null
  document.querySelector('#desa-input-text').value = ''
  updateList([])

  document.querySelector('#fab-search').style.display = 'none'
  document.querySelector('#search-box').style.display = 'block'
  document.querySelector('#box-black').style.display = 'block'
  document.querySelector('#step-1').style.display = 'block'
  document.querySelector('#step-2').style.display = 'none'
  document.querySelector('#search-box').classList.remove('tall')

  document.querySelector('#search-context').innerHTML = ''
}

const startApp = () => {
  const setupListener = () => {
    document.querySelector('#desa-input-text').addEventListener('focus', searchDesa)
    document.querySelector('#desa-input-text').addEventListener('input', searchDesa)
    document.querySelector('#show-more-box').addEventListener('click', goToStep1)
    document.querySelector('#fab-search').addEventListener('click', goToStep1)
    document.querySelector('#close').addEventListener('click', closeFilter)
  }

  const listDesa = new __WEBPACK_IMPORTED_MODULE_1__material_list__["a" /* MDCList */](document.querySelector('#search-result'));
  const listItemRipples = listDesa.listElements.map((listItemEl) => new __WEBPACK_IMPORTED_MODULE_2__material_ripple__["a" /* MDCRipple */](listItemEl));

  setupListener()
}

const textField = new __WEBPACK_IMPORTED_MODULE_4__material_textfield__["a" /* MDCTextField */](document.querySelector('.mdc-text-field'));

const writeSearchContext = (currChipId) => {
  document.getElementById('search-context').innerHTML = __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */].chipIds[currChipId]
}

const gotToStep2Building = () => {
  const hideChipSet = () => {
    document.querySelector('#step-1').style.display = 'none'
    document.querySelector('#step-2').style.display = 'block'
    document.querySelector('#desa-input-text').focus()
  }

  const setHeight = () => {
    document.querySelector('#search-box').classList.add('tall')
  }

  hideChipSet()
  setHeight()
  document.querySelector('#search-text').style.display = 'inline-flex'
}

const gotToStep2Kecamatan = () => {
  const hideChipSet = () => {
    document.querySelector('#step-1').style.display = 'none'
    document.querySelector('#step-2').style.display = 'block'
  }

  const setHeight = () => {
    document.querySelector('#search-box').classList.add('tall')
  }

  hideChipSet()
  setHeight()
  document.querySelector('#search-text').style.display = 'none'

  const kecamatansName = __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */].mapsByKecamatans.map(doc => 'Kecamatan ' + doc.name)
  const kecamatansUrl  = __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */].mapsByKecamatans.map(doc => doc.url)
  updateList(kecamatansName, kecamatansUrl, 'kecamatan')
}

const chipSetEl = document.querySelector('.mdc-chip-set');
const chipSet = new __WEBPACK_IMPORTED_MODULE_0__material_chips__["a" /* MDCChipSet */](chipSetEl);
chipSet.listen('MDCChip:interaction', function(event) {
  const currChipId = event.detail.chipId
  globChipId = currChipId
  writeSearchContext(currChipId)

  const currChipIdInt = parseInt(currChipId.replace('mdc-chip-', ''))
  const isChipBuilding = (currChipIdInt > 1)
  const isChipKecamatan = (currChipIdInt == 1)

  if(isChipBuilding) {
    setTimeout(gotToStep2Building, 400)
  }
  if(isChipKecamatan) {
    setTimeout(gotToStep2Kecamatan, 400)
  }
});

startApp()


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chip_index__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chip_set_index__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__chip_set_index__["a"]; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCChip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(12);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCChip = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCChip, _super);
    function MDCChip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCChip.prototype, "selected", {
        /**
         * @return Whether the chip is selected.
         */
        get: function () {
            return this.foundation_.isSelected();
        },
        /**
         * Sets selected state on the chip.
         */
        set: function (selected) {
            this.foundation_.setSelected(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "shouldRemoveOnTrailingIconClick", {
        /**
         * @return Whether a trailing icon click should trigger exit/removal of the chip.
         */
        get: function () {
            return this.foundation_.getShouldRemoveOnTrailingIconClick();
        },
        /**
         * Sets whether a trailing icon click should trigger exit/removal of the chip.
         */
        set: function (shouldRemove) {
            this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "ripple", {
        get: function () {
            return this.ripple_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChip.prototype, "id", {
        get: function () {
            return this.root_.id;
        },
        enumerable: true,
        configurable: true
    });
    MDCChip.attachTo = function (root) {
        return new MDCChip(root);
    };
    MDCChip.prototype.initialize = function (rippleFactory) {
        var _this = this;
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["a" /* MDCRipple */](el, foundation); }; }
        this.leadingIcon_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].LEADING_ICON_SELECTOR);
        this.trailingIcon_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRAILING_ICON_SELECTOR);
        this.checkmark_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].CHECKMARK_SELECTOR);
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var rippleAdapter = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["a" /* MDCRipple */].createAdapter(this), { computeBoundingRect: function () { return _this.foundation_.getDimensions(); } });
        this.ripple_ = rippleFactory(this.root_, new __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["b" /* MDCRippleFoundation */](rippleAdapter));
    };
    MDCChip.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleInteraction_ = function (evt) { return _this.foundation_.handleInteraction(evt); };
        this.handleTransitionEnd_ = function (evt) { return _this.foundation_.handleTransitionEnd(evt); };
        this.handleTrailingIconInteraction_ = function (evt) {
            return _this.foundation_.handleTrailingIconInteraction(evt);
        };
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.listen(evtType, _this.handleInteraction_);
        });
        this.listen('transitionend', this.handleTransitionEnd_);
        if (this.trailingIcon_) {
            INTERACTION_EVENTS.forEach(function (evtType) {
                _this.trailingIcon_.addEventListener(evtType, _this.handleTrailingIconInteraction_);
            });
        }
    };
    MDCChip.prototype.destroy = function () {
        var _this = this;
        this.ripple_.destroy();
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.unlisten(evtType, _this.handleInteraction_);
        });
        this.unlisten('transitionend', this.handleTransitionEnd_);
        if (this.trailingIcon_) {
            INTERACTION_EVENTS.forEach(function (evtType) {
                _this.trailingIcon_.removeEventListener(evtType, _this.handleTrailingIconInteraction_);
            });
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChip.prototype.beginExit = function () {
        this.foundation_.beginExit();
    };
    MDCChip.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            addClassToLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.add(className);
                }
            },
            eventTargetHasClass: function (target, className) { return target ? target.classList.contains(className) : false; },
            getCheckmarkBoundingClientRect: function () { return _this.checkmark_ ? _this.checkmark_.getBoundingClientRect() : null; },
            getComputedStyleValue: function (propertyName) { return window.getComputedStyle(_this.root_).getPropertyValue(propertyName); },
            getRootBoundingClientRect: function () { return _this.root_.getBoundingClientRect(); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            hasLeadingIcon: function () { return !!_this.leadingIcon_; },
            notifyInteraction: function () { return _this.emit(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].INTERACTION_EVENT, { chipId: _this.id }, true /* shouldBubble */); },
            notifyRemoval: function () { return _this.emit(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].REMOVAL_EVENT, { chipId: _this.id, root: _this.root_ }, true /* shouldBubble */); },
            notifySelection: function (selected) { return _this.emit(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].SELECTION_EVENT, { chipId: _this.id, selected: selected }, true /* shouldBubble */); },
            notifyTrailingIconInteraction: function () { return _this.emit(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRAILING_ICON_INTERACTION_EVENT, { chipId: _this.id }, true /* shouldBubble */); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            removeClassFromLeadingIcon: function (className) {
                if (_this.leadingIcon_) {
                    _this.leadingIcon_.classList.remove(className);
                }
            },
            setStyleProperty: function (propertyName, value) { return _this.root_.style.setProperty(propertyName, value); },
        };
        return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* MDCChipFoundation */](adapter);
    };
    return MDCChip;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCChipSet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chip_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(13);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var _a = __WEBPACK_IMPORTED_MODULE_2__chip_index__["b" /* MDCChipFoundation */].strings, INTERACTION_EVENT = _a.INTERACTION_EVENT, SELECTION_EVENT = _a.SELECTION_EVENT, REMOVAL_EVENT = _a.REMOVAL_EVENT;
var CHIP_SELECTOR = __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* MDCChipSetFoundation */].strings.CHIP_SELECTOR;
var idCounter = 0;
var MDCChipSet = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCChipSet, _super);
    function MDCChipSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipSet.attachTo = function (root) {
        return new MDCChipSet(root);
    };
    Object.defineProperty(MDCChipSet.prototype, "chips", {
        get: function () {
            return this.chips_.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCChipSet.prototype, "selectedChipIds", {
        /**
         * @return An array of the IDs of all selected chips.
         */
        get: function () {
            return this.foundation_.getSelectedChipIds();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param chipFactory A function which creates a new MDCChip.
     */
    MDCChipSet.prototype.initialize = function (chipFactory) {
        if (chipFactory === void 0) { chipFactory = function (el) { return new __WEBPACK_IMPORTED_MODULE_2__chip_index__["a" /* MDCChip */](el); }; }
        this.chipFactory_ = chipFactory;
        this.chips_ = this.instantiateChips_(this.chipFactory_);
    };
    MDCChipSet.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.chips_.forEach(function (chip) {
            if (chip.id && chip.selected) {
                _this.foundation_.select(chip.id);
            }
        });
        this.handleChipInteraction_ = function (evt) { return _this.foundation_.handleChipInteraction(evt.detail.chipId); };
        this.handleChipSelection_ = function (evt) { return _this.foundation_.handleChipSelection(evt.detail.chipId, evt.detail.selected); };
        this.handleChipRemoval_ = function (evt) { return _this.foundation_.handleChipRemoval(evt.detail.chipId); };
        this.listen(INTERACTION_EVENT, this.handleChipInteraction_);
        this.listen(SELECTION_EVENT, this.handleChipSelection_);
        this.listen(REMOVAL_EVENT, this.handleChipRemoval_);
    };
    MDCChipSet.prototype.destroy = function () {
        this.chips_.forEach(function (chip) {
            chip.destroy();
        });
        this.unlisten(INTERACTION_EVENT, this.handleChipInteraction_);
        this.unlisten(SELECTION_EVENT, this.handleChipSelection_);
        this.unlisten(REMOVAL_EVENT, this.handleChipRemoval_);
        _super.prototype.destroy.call(this);
    };
    /**
     * Adds a new chip object to the chip set from the given chip element.
     */
    MDCChipSet.prototype.addChip = function (chipEl) {
        chipEl.id = chipEl.id || "mdc-chip-" + ++idCounter;
        this.chips_.push(this.chipFactory_(chipEl));
    };
    MDCChipSet.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            removeChip: function (chipId) {
                var index = _this.findChipIndex_(chipId);
                if (index >= 0) {
                    _this.chips_[index].destroy();
                    _this.chips_.splice(index, 1);
                }
            },
            setSelected: function (chipId, selected) {
                var index = _this.findChipIndex_(chipId);
                if (index >= 0) {
                    _this.chips_[index].selected = selected;
                }
            },
        };
        return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* MDCChipSetFoundation */](adapter);
    };
    /**
     * Instantiates chip components on all of the chip set's child chip elements.
     */
    MDCChipSet.prototype.instantiateChips_ = function (chipFactory) {
        var chipElements = [].slice.call(this.root_.querySelectorAll(CHIP_SELECTOR));
        return chipElements.map(function (el) {
            el.id = el.id || "mdc-chip-" + ++idCounter;
            return chipFactory(el);
        });
    };
    /**
     * Returns the index of the chip with the given id, or -1 if the chip does not exist.
     */
    MDCChipSet.prototype.findChipIndex_ = function (chipId) {
        for (var i = 0; i < this.chips_.length; i++) {
            if (this.chips_[i].id === chipId) {
                return i;
            }
        }
        return -1;
    };
    return MDCChipSet;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    CHIP_SELECTOR: '.mdc-chip',
};
var cssClasses = {
    CHOICE: 'mdc-chip-set--choice',
    FILTER: 'mdc-chip-set--filter',
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dom_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(16);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCList = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCList, _super);
    function MDCList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList.prototype, "vertical", {
        set: function (value) {
            this.foundation_.setVerticalOrientation(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "listElements", {
        get: function () {
            return [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].ENABLED_ITEMS_SELECTOR));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "wrapFocus", {
        set: function (value) {
            this.foundation_.setWrapFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "singleSelection", {
        set: function (isSingleSelectionList) {
            this.foundation_.setSingleSelection(isSingleSelectionList);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCList.prototype, "selectedIndex", {
        get: function () {
            return this.foundation_.getSelectedIndex();
        },
        set: function (index) {
            this.foundation_.setSelectedIndex(index);
        },
        enumerable: true,
        configurable: true
    });
    MDCList.attachTo = function (root) {
        return new MDCList(root);
    };
    MDCList.prototype.initialSyncWithDOM = function () {
        this.handleClick_ = this.handleClickEvent_.bind(this);
        this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
        this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
        this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
        this.listen('keydown', this.handleKeydown_);
        this.listen('click', this.handleClick_);
        this.listen('focusin', this.focusInEventListener_);
        this.listen('focusout', this.focusOutEventListener_);
        this.layout();
        this.initializeListType();
    };
    MDCList.prototype.destroy = function () {
        this.unlisten('keydown', this.handleKeydown_);
        this.unlisten('click', this.handleClick_);
        this.unlisten('focusin', this.focusInEventListener_);
        this.unlisten('focusout', this.focusOutEventListener_);
    };
    MDCList.prototype.layout = function () {
        var direction = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].ARIA_ORIENTATION);
        this.vertical = direction !== __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].ARIA_ORIENTATION_HORIZONTAL;
        // List items need to have at least tabindex=-1 to be focusable.
        [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])'))
            .forEach(function (el) {
            el.setAttribute('tabindex', '-1');
        });
        // Child button/a elements are not tabbable until the list item is focused.
        [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].FOCUSABLE_CHILD_ELEMENTS))
            .forEach(function (el) { return el.setAttribute('tabindex', '-1'); });
        this.foundation_.layout();
    };
    /**
     * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
     */
    MDCList.prototype.initializeListType = function () {
        var _this = this;
        var checkboxListItems = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].ARIA_ROLE_CHECKBOX_SELECTOR);
        var singleSelectedListItem = this.root_.querySelector("\n      ." + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS + "\n    ");
        var radioSelectedListItem = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex =
                [].map.call(preselectedItems, function (listItem) { return _this.listElements.indexOf(listItem); });
        }
        else if (singleSelectedListItem) {
            if (singleSelectedListItem.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS)) {
                this.foundation_.setUseActivatedClass(true);
            }
            this.singleSelection = true;
            this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
        }
        else if (radioSelectedListItem) {
            this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
    };
    MDCList.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.add(className);
                }
            },
            focusItemAtIndex: function (index) {
                var element = _this.listElements[index];
                if (element) {
                    element.focus();
                }
            },
            getFocusedElementIndex: function () { return _this.listElements.indexOf(document.activeElement); },
            getListItemCount: function () { return _this.listElements.length; },
            hasCheckboxAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function (index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function () {
                return _this.root_.contains(document.activeElement);
            },
            notifyAction: function (index) {
                _this.emit(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].ACTION_EVENT, { index: index }, /** shouldBubble */ true);
            },
            removeClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.remove(className);
                }
            },
            setAttributeForElementIndex: function (index, attr, value) {
                var element = _this.listElements[index];
                if (element) {
                    element.setAttribute(attr, value);
                }
            },
            setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var listItemChildren = [].slice.call(element.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                listItemChildren.forEach(function (el) { return el.setAttribute('tabindex', tabIndexValue); });
            },
        };
        return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* MDCListFoundation */](adapter);
    };
    /**
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     */
    MDCList.prototype.getListItemIndex_ = function (evt) {
        var eventTarget = evt.target;
        var nearestParent = __WEBPACK_IMPORTED_MODULE_2__material_dom_index__["a" /* ponyfill */].closest(eventTarget, "." + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].LIST_ITEM_CLASS + ", ." + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].ROOT);
        // Get the index of the element if it is a list item.
        if (nearestParent && __WEBPACK_IMPORTED_MODULE_2__material_dom_index__["a" /* ponyfill */].matches(nearestParent, "." + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].LIST_ITEM_CLASS)) {
            return this.listElements.indexOf(nearestParent);
        }
        return -1;
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleFocusInEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusIn(evt, index);
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleFocusOutEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        this.foundation_.handleFocusOut(evt, index);
    };
    /**
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     */
    MDCList.prototype.handleKeydownEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        if (index >= 0) {
            this.foundation_.handleKeydown(evt, target.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].LIST_ITEM_CLASS), index);
        }
    };
    /**
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MDCList.prototype.handleClickEvent_ = function (evt) {
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
        var toggleCheckbox = !__WEBPACK_IMPORTED_MODULE_2__material_dom_index__["a" /* ponyfill */].matches(target, __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(index, toggleCheckbox);
    };
    return MDCList;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var data = {
  alamatKeys: [],
  chipIds: {
    'mdc-chip-1': 'Kecamatan',
    'mdc-chip-2': 'Sekolah',
    'mdc-chip-3': 'Kantor Pemerintahan',
    'mdc-chip-4': 'Lapangan',
    'mdc-chip-5': 'Makam',
    'mdc-chip-6': 'Bendungan',
    'mdc-chip-7': 'Perumahan',
    'mdc-chip-8': 'Tempat Ibadah',
    'mdc-chip-9': 'Pasar',
    'mdc-chip-10': 'Objek Wisata',
    'mdc-chip-11': 'Bandara',
    'mdc-chip-12': 'Tugu',
  },
  getCategory: {
    'mdc-chip-1': 'kecamatan',
    'mdc-chip-2': 'sekolah',
    'mdc-chip-3': 'kantor_pemerintahan',
    'mdc-chip-4': 'lapangan',
    'mdc-chip-5': 'makam',
    'mdc-chip-6': 'bendungan',
    'mdc-chip-7': 'perumahan',
    'mdc-chip-8': 'tempat_ibadah',
    'mdc-chip-9': 'pasar',
    'mdc-chip-10': 'objek_wisata',
    'mdc-chip-11': 'bandara',
    'mdc-chip-12': 'tugu',
  },
  mapsByKecamatans: [
    {
      name: 'Bobotsari',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Bojongsari',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Bukateja',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Kaligondang',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Kalimanah',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Karanganyar',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Karangjambu',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Karangreja',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Karangmoncol',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Kejobong',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Kemangkon',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Kertanegara',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Kutasari',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Mrebet',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Padamara',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Pengadegan',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Purbalingga',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
    {
      name: 'Rembang',
      url: 'https://www.google.com/maps/d/embed?mid=1tH-Hh0DPWkcVSP_c7h3GsRXaLaFSTlEj'
    },
  ],
  seluruhPurbalingga: {
    sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
    tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
  },
  maps: [
    {
      alamat: 'Seluruh kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Karangreja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Karangmoncol',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Purbalingga',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Seluruh kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Banjarsari kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bobotsari kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Dagan kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Gunungkarang kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalapacung kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangduren kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangmalang kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangtalun kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Limbasari kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Majapura kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pakuncen kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Palumbungan Kulon kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Palumbungan Wetan kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Talagening kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tlagayasa kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Gandasuli kec. Bobotsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Banjaran kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Beji kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bojongsari kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Brobot kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bumisari kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Galuh kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Gembong kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kajongan kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangbanjar kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Petenggeng kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pagedangan kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Patemon kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pekalongan kec. Bojongsari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bajong kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bukateja kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Cipawon kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangcengis kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karanggedang kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangnangka kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kebutuh kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kedungjati kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kembangas kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kutawis kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Majasari kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Penaruban kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tidu kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Wirasaba kec. Bukateja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Arenan kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Brecek kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Cilapar kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kaligondang kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalikajar kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kembaran Wetan kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Lamongan kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1G56ccZ75mhc4uoB35szMYwWubjBhe24b',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pagerandong kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Penaruban kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Penolih kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Selakambang kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Selanegara kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sempor Lor kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sidanegara kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sidareja kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sinduraja kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Slinga kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tejasari kec. Kaligondang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Babakan kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Blater kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Grecol kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Jompo kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalikabong kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalimanah Kulon kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalimanah Wetan kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangmanyar kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangpetir kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangsari kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kedungwuluh kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Klapasawit kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Manduraga kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Mewek kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Rabak kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Selabaya kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sidakangen kec. Kalimanah',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Banjarkerta kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Brakas kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Buara kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bungkanel kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Jambudesa kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kabunderan kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalijaran kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kaliori kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karanganyar kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karanggedang kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Lumpang kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Maribaya kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Ponjen kec. Karanganyar',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Danasari kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Jingkang kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangjambu kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Purbasari kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sanguwatang kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sirandu kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Baleraksa kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Grantung kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangsari kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kramat kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pekiringan kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pepedan kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Rajawana kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sirau kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tajug kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tamansari kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tunjungmuli kec. Karangjambu',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Gondang kec. Karangreja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangreja kec. Karangreja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kutabawa kec. Karangreja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Serang kec. Karangreja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Siwarak kec. Karangreja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tlahab Kidul kec. Karangreja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tlahablor kec. Karangreja',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Timbang kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bandingan kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Gumiwang kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kedarpan kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kejobong kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Krenceng kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Lamuk kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Langgar kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Nangkasawit kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Nangkod kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pandansari kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pangempon kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sokanegara kec. Kejobong',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bakulan kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bokol kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Gambarsari kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Jetis kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangkemiri kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangtengah kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kedungbenda kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalialang kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kedunglegok kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kemangkon kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Majasem kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Majatengah kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sumilir kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Muntang kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pelumutan kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Toyareka kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangkemiri kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Panican kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pegandekan kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Senon kec. Kemangkon',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Adiarsa kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Condong kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Darma kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangtengah kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'karangasem kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'karangpucung kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'kasih kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kertanegara kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Krangean kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Langkap kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Mergasana kec. Kertanegara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Candinata kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        lapangan: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        makam: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        bendungan: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        perumahan: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        pasar: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        bandara: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
        tugu: 'https://www.google.com/maps/d/embed?mid=16FPtD1C2wTrVHILxYwVIwdgwF1UIjlkR',
      }
    },
    {
      alamat: 'Candiwulan kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Cendana kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangaren kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangcegak kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangjengkol kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangklesem kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karanglewas kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangreja kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kutasari kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Limbangan kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Meri kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Munjul kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sumingkir kec. Kutasari',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Binangun kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bojong kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Campakoah kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Cipaku kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karang Nangka kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangturi kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kradenan kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Lambur kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Mangunegara kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Mrebet kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Onje kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pagerandong kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pengalusan kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sangkanayu kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Selanganggeng kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Serayu Karanganyar kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Serayu Larangan kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sindang kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tangkisan kec. Mrebet',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bojanegara kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Dawuhan kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Gemuruh kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalitinggar kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Kalitinggar Kidul kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangjambe kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karanggambas kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangpule kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangsentul kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Mipiran kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Padamara kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Prigi kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Purbayasa kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sokawera kec. Padamara',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bedagas kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangjoho kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Larangan kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pangadegan kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Panunggalan kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Pasunggingan kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tegalpingen kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tetel kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tumanggal kec. Pengadegan',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Jatisaba kec. Purbalingga',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Toyareja kec. Purbalingga',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bantarbarang kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Bodaskarangjati kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Gunungwuled kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Karangbawang kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Losari kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Panusupan kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Makam kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Sumampir kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Tanalum kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Wanogara Kulon kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Wanogara Wetan kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    },
    {
      alamat: 'Wlahar kec. Rembang',
      mapByCategories: {
        sekolah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        kantor_pemerintahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        lapangan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        makam: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bendungan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        perumahan: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tempat_ibadah: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        pasar: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        objek_wisata: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        bandara: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
        tugu: 'https://www.google.com/maps/d/embed?mid=1BHmdJ212iNlydBKs_YCKrmtUhpUrcEDb',
      }
    }
  ]
}

for(let map of data.maps) {
  data.alamatKeys.push(map.alamat)
}

/* harmony default export */ __webpack_exports__["a"] = (data);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_counter_index__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_text_index__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_index__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





//# sourceMappingURL=index.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dom_ponyfill__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_floating_label_index__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_line_ripple_index__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_notched_outline_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ripple_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ripple_foundation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__character_counter_index__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__foundation__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helper_text_index__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icon_index__ = __webpack_require__(26);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */













var MDCTextField = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCTextField, _super);
    function MDCTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextField.attachTo = function (root) {
        return new MDCTextField(root);
    };
    MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) { return new __WEBPACK_IMPORTED_MODULE_6__material_ripple_component__["a" /* MDCRipple */](el, foundation); }; }
        if (lineRippleFactory === void 0) { lineRippleFactory = function (el) { return new __WEBPACK_IMPORTED_MODULE_4__material_line_ripple_index__["a" /* MDCLineRipple */](el); }; }
        if (helperTextFactory === void 0) { helperTextFactory = function (el) { return new __WEBPACK_IMPORTED_MODULE_11__helper_text_index__["a" /* MDCTextFieldHelperText */](el); }; }
        if (characterCounterFactory === void 0) { characterCounterFactory = function (el) { return new __WEBPACK_IMPORTED_MODULE_8__character_counter_index__["a" /* MDCTextFieldCharacterCounter */](el); }; }
        if (iconFactory === void 0) { iconFactory = function (el) { return new __WEBPACK_IMPORTED_MODULE_12__icon_index__["a" /* MDCTextFieldIcon */](el); }; }
        if (labelFactory === void 0) { labelFactory = function (el) { return new __WEBPACK_IMPORTED_MODULE_3__material_floating_label_index__["a" /* MDCFloatingLabel */](el); }; }
        if (outlineFactory === void 0) { outlineFactory = function (el) { return new __WEBPACK_IMPORTED_MODULE_5__material_notched_outline_index__["a" /* MDCNotchedOutline */](el); }; }
        this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_9__constants__["e" /* strings */].INPUT_SELECTOR);
        var labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_9__constants__["e" /* strings */].LABEL_SELECTOR);
        this.label_ = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_9__constants__["e" /* strings */].LINE_RIPPLE_SELECTOR);
        this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_9__constants__["e" /* strings */].OUTLINE_SELECTOR);
        this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
        // Helper text
        var helperTextStrings = __WEBPACK_IMPORTED_MODULE_11__helper_text_index__["b" /* MDCTextFieldHelperTextFoundation */].strings;
        var nextElementSibling = this.root_.nextElementSibling;
        var hasHelperLine = (nextElementSibling && nextElementSibling.classList.contains(__WEBPACK_IMPORTED_MODULE_9__constants__["c" /* cssClasses */].HELPER_LINE));
        var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
        this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null;
        // Character counter
        var characterCounterStrings = __WEBPACK_IMPORTED_MODULE_8__character_counter_index__["b" /* MDCTextFieldCharacterCounterFoundation */].strings;
        var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR);
        // If character counter is not found in root element search in sibling element.
        if (!characterCounterEl && hasHelperLine && nextElementSibling) {
            characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
        }
        this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null;
        this.leadingIcon_ = null;
        this.trailingIcon_ = null;
        var iconElements = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_9__constants__["e" /* strings */].ICON_SELECTOR);
        if (iconElements.length > 0) {
            if (iconElements.length > 1) { // Has both icons.
                this.leadingIcon_ = iconFactory(iconElements[0]);
                this.trailingIcon_ = iconFactory(iconElements[1]);
            }
            else {
                if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_9__constants__["c" /* cssClasses */].WITH_LEADING_ICON)) {
                    this.leadingIcon_ = iconFactory(iconElements[0]);
                }
                else {
                    this.trailingIcon_ = iconFactory(iconElements[0]);
                }
            }
        }
        this.ripple = this.createRipple_(rippleFactory);
    };
    MDCTextField.prototype.destroy = function () {
        if (this.ripple) {
            this.ripple.destroy();
        }
        if (this.lineRipple_) {
            this.lineRipple_.destroy();
        }
        if (this.helperText_) {
            this.helperText_.destroy();
        }
        if (this.characterCounter_) {
            this.characterCounter_.destroy();
        }
        if (this.leadingIcon_) {
            this.leadingIcon_.destroy();
        }
        if (this.trailingIcon_) {
            this.trailingIcon_.destroy();
        }
        if (this.label_) {
            this.label_.destroy();
        }
        if (this.outline_) {
            this.outline_.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    /**
     * Initializes the Text Field's internal state based on the environment's
     * state.
     */
    MDCTextField.prototype.initialSyncWithDOM = function () {
        this.disabled = this.input_.disabled;
    };
    Object.defineProperty(MDCTextField.prototype, "value", {
        get: function () {
            return this.foundation_.getValue();
        },
        /**
         * @param value The value to set on the input.
         */
        set: function (value) {
            this.foundation_.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "disabled", {
        get: function () {
            return this.foundation_.isDisabled();
        },
        /**
         * @param disabled Sets the Text Field disabled or enabled.
         */
        set: function (disabled) {
            this.foundation_.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "valid", {
        get: function () {
            return this.foundation_.isValid();
        },
        /**
         * @param valid Sets the Text Field valid or invalid.
         */
        set: function (valid) {
            this.foundation_.setValid(valid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "required", {
        get: function () {
            return this.input_.required;
        },
        /**
         * @param required Sets the Text Field to required.
         */
        set: function (required) {
            this.input_.required = required;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "pattern", {
        get: function () {
            return this.input_.pattern;
        },
        /**
         * @param pattern Sets the input element's validation pattern.
         */
        set: function (pattern) {
            this.input_.pattern = pattern;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "minLength", {
        get: function () {
            return this.input_.minLength;
        },
        /**
         * @param minLength Sets the input element's minLength.
         */
        set: function (minLength) {
            this.input_.minLength = minLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "maxLength", {
        get: function () {
            return this.input_.maxLength;
        },
        /**
         * @param maxLength Sets the input element's maxLength.
         */
        set: function (maxLength) {
            // Chrome throws exception if maxLength is set to a value less than zero
            if (maxLength < 0) {
                this.input_.removeAttribute('maxLength');
            }
            else {
                this.input_.maxLength = maxLength;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "min", {
        get: function () {
            return this.input_.min;
        },
        /**
         * @param min Sets the input element's min.
         */
        set: function (min) {
            this.input_.min = min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "max", {
        get: function () {
            return this.input_.max;
        },
        /**
         * @param max Sets the input element's max.
         */
        set: function (max) {
            this.input_.max = max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "step", {
        get: function () {
            return this.input_.step;
        },
        /**
         * @param step Sets the input element's step.
         */
        set: function (step) {
            this.input_.step = step;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
        /**
         * Sets the helper text element content.
         */
        set: function (content) {
            this.foundation_.setHelperTextContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
        /**
         * Sets the aria label of the leading icon.
         */
        set: function (label) {
            this.foundation_.setLeadingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function (content) {
            this.foundation_.setLeadingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
        /**
         * Sets the aria label of the trailing icon.
         */
        set: function (label) {
            this.foundation_.setTrailingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
        /**
         * Sets the text content of the trailing icon.
         */
        set: function (content) {
            this.foundation_.setTrailingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
        /**
         * Enables or disables the use of native validation. Use this for custom validation.
         * @param useNativeValidation Set this to false to ignore native input validation.
         */
        set: function (useNativeValidation) {
            this.foundation_.setUseNativeValidation(useNativeValidation);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Focuses the input element.
     */
    MDCTextField.prototype.focus = function () {
        this.input_.focus();
    };
    /**
     * Recomputes the outline SVG path for the outline element.
     */
    MDCTextField.prototype.layout = function () {
        var openNotch = this.foundation_.shouldFloat;
        this.foundation_.notchOutline(openNotch);
    };
    MDCTextField.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_());
        // tslint:enable:object-literal-sort-keys
        return new __WEBPACK_IMPORTED_MODULE_10__foundation__["a" /* MDCTextFieldFoundation */](adapter, this.getFoundationMap_());
    };
    MDCTextField.prototype.getRootAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            registerTextFieldInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterTextFieldInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            registerValidationAttributeChangeHandler: function (handler) {
                var getAttributesList = function (mutationsList) {
                    return mutationsList
                        .map(function (mutation) { return mutation.attributeName; })
                        .filter(function (attributeName) { return attributeName; });
                };
                var observer = new MutationObserver(function (mutationsList) { return handler(getAttributesList(mutationsList)); });
                var config = { attributes: true };
                observer.observe(_this.input_, config);
                return observer;
            },
            deregisterValidationAttributeChangeHandler: function (observer) { return observer.disconnect(); },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getInputAdapterMethods_ = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getNativeInput: function () { return _this.input_; },
            isFocused: function () { return document.activeElement === _this.input_; },
            registerInputInteractionHandler: function (evtType, handler) { return _this.input_.addEventListener(evtType, handler); },
            deregisterInputInteractionHandler: function (evtType, handler) { return _this.input_.removeEventListener(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCTextField.prototype.getLabelAdapterMethods_ = function () {
        var _this = this;
        return {
            floatLabel: function (shouldFloat) { return _this.label_ && _this.label_.float(shouldFloat); },
            getLabelWidth: function () { return _this.label_ ? _this.label_.getWidth() : 0; },
            hasLabel: function () { return Boolean(_this.label_); },
            shakeLabel: function (shouldShake) { return _this.label_ && _this.label_.shake(shouldShake); },
        };
    };
    MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
        var _this = this;
        return {
            activateLineRipple: function () {
                if (_this.lineRipple_) {
                    _this.lineRipple_.activate();
                }
            },
            deactivateLineRipple: function () {
                if (_this.lineRipple_) {
                    _this.lineRipple_.deactivate();
                }
            },
            setLineRippleTransformOrigin: function (normalizedX) {
                if (_this.lineRipple_) {
                    _this.lineRipple_.setRippleCenter(normalizedX);
                }
            },
        };
    };
    MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
        var _this = this;
        return {
            closeOutline: function () { return _this.outline_ && _this.outline_.closeNotch(); },
            hasOutline: function () { return Boolean(_this.outline_); },
            notchOutline: function (labelWidth) { return _this.outline_ && _this.outline_.notch(labelWidth); },
        };
    };
    /**
     * @return A map of all subcomponents to subfoundations.
     */
    MDCTextField.prototype.getFoundationMap_ = function () {
        return {
            characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
            helperText: this.helperText_ ? this.helperText_.foundation : undefined,
            leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
            trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined,
        };
    };
    MDCTextField.prototype.createRipple_ = function (rippleFactory) {
        var _this = this;
        var isTextArea = this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_9__constants__["c" /* cssClasses */].TEXTAREA);
        var isOutlined = this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_9__constants__["c" /* cssClasses */].OUTLINED);
        if (isTextArea || isOutlined) {
            return null;
        }
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_6__material_ripple_component__["a" /* MDCRipple */].createAdapter(this), { isSurfaceActive: function () { return __WEBPACK_IMPORTED_MODULE_2__material_dom_ponyfill__["matches"](_this.input_, ':active'); }, registerInteractionHandler: function (evtType, handler) { return _this.input_.addEventListener(evtType, handler); }, deregisterInteractionHandler: function (evtType, handler) { return _this.input_.removeEventListener(evtType, handler); } });
        // tslint:enable:object-literal-sort-keys
        return rippleFactory(this.root_, new __WEBPACK_IMPORTED_MODULE_7__material_ripple_foundation__["a" /* MDCRippleFoundation */](adapter));
    };
    return MDCTextField;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFloatingLabel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCFloatingLabel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCFloatingLabel, _super);
    function MDCFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel.attachTo = function (root) {
        return new MDCFloatingLabel(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */
    MDCFloatingLabel.prototype.shake = function (shouldShake) {
        this.foundation_.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MDCFloatingLabel.prototype.float = function (shouldFloat) {
        this.foundation_.float(shouldFloat);
    };
    MDCFloatingLabel.prototype.getWidth = function () {
        return this.foundation_.getWidth();
    };
    MDCFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            getWidth: function () { return _this.root_.scrollWidth; },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCFloatingLabelFoundation */](adapter);
    };
    return MDCFloatingLabel;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCLineRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(17);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCLineRipple = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCLineRipple, _super);
    function MDCLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple.attachTo = function (root) {
        return new MDCLineRipple(root);
    };
    /**
     * Activates the line ripple
     */
    MDCLineRipple.prototype.activate = function () {
        this.foundation_.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MDCLineRipple.prototype.deactivate = function () {
        this.foundation_.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        this.foundation_.setRippleCenter(xCoordinate);
    };
    MDCLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setStyle: function (propertyName, value) { return _this.root_.style.setProperty(propertyName, value); },
            registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCLineRippleFoundation */](adapter);
    };
    return MDCLineRipple;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

//# sourceMappingURL=constants.js.map

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


//# sourceMappingURL=index.js.map

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCNotchedOutline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_floating_label_foundation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(19);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCNotchedOutline = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCNotchedOutline, _super);
    function MDCNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline.attachTo = function (root) {
        return new MDCNotchedOutline(root);
    };
    MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
        this.notchElement_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strings */].NOTCH_ELEMENT_SELECTOR);
        var label = this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_2__material_floating_label_foundation__["a" /* MDCFloatingLabelFoundation */].cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label.style.transitionDuration = '';
            });
        }
        else {
            this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].NO_LABEL);
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MDCNotchedOutline.prototype.notch = function (notchWidth) {
        this.foundation_.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MDCNotchedOutline.prototype.closeNotch = function () {
        this.foundation_.closeNotch();
    };
    MDCNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            setNotchWidthProperty: function (width) { return _this.notchElement_.style.setProperty('width', width + 'px'); },
            removeNotchWidthProperty: function () { return _this.notchElement_.style.removeProperty('width'); },
        };
        // tslint:enable:object-literal-sort-keys
        return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* MDCNotchedOutlineFoundation */](adapter);
    };
    return MDCNotchedOutline;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldCharacterCounter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(21);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldCharacterCounter = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCTextFieldCharacterCounter, _super);
    function MDCTextFieldCharacterCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldCharacterCounter.attachTo = function (root) {
        return new MDCTextFieldCharacterCounter(root);
    };
    Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCTextFieldCharacterCounterFoundation */](adapter);
    };
    return MDCTextFieldCharacterCounter;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ROOT: 'mdc-text-field-character-counter',
};
var strings = {
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldHelperText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(25);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldHelperText = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCTextFieldHelperText, _super);
    function MDCTextFieldHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldHelperText.attachTo = function (root) {
        return new MDCTextFieldHelperText(root);
    };
    Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root_.classList.add(className); },
            removeClass: function (className) { return _this.root_.classList.remove(className); },
            hasClass: function (className) { return _this.root_.classList.contains(className); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCTextFieldHelperTextFoundation */](adapter);
    };
    return MDCTextFieldHelperText;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
    ROOT: 'mdc-text-field-helper-text',
};
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
    ROOT_SELECTOR: "." + cssClasses.ROOT,
};

//# sourceMappingURL=constants.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextFieldIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(27);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCTextFieldIcon = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MDCTextFieldIcon, _super);
    function MDCTextFieldIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTextFieldIcon.attachTo = function (root) {
        return new MDCTextFieldIcon(root);
    };
    Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
        get: function () {
            return this.foundation_;
        },
        enumerable: true,
        configurable: true
    });
    MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root_.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root_.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root_.removeAttribute(attr); },
            setContent: function (content) {
                _this.root_.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCTextFieldIconFoundation */].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* MDCTextFieldIconFoundation */](adapter);
    };
    return MDCTextFieldIcon;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* MDCComponent */]));

//# sourceMappingURL=component.js.map

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button',
};

//# sourceMappingURL=constants.js.map

/***/ })
/******/ ]);