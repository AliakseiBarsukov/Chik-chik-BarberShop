/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL)
/* harmony export */ });
var API_URL = 'https://bald-maple-stay.glitch.me/';

/*
GET /api - получить список услуг
GET /api?service={n} - получить список барберов
GET /api?spec={n} - получить список месяца работы барбера
GET /api?spec={n}&month={n} - получить список дней работы барбера
GET /api?spec={n}&month={n}&day={n} - получить список свободных часов барбера
POST /api/order - оформить заказ
*/

/***/ }),

/***/ "./src/modules/disabled.js":
/*!*********************************!*\
  !*** ./src/modules/disabled.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDisabled": () => (/* binding */ addDisabled),
/* harmony export */   "removeDisabled": () => (/* binding */ removeDisabled)
/* harmony export */ });
var addDisabled = function addDisabled(arr) {
  arr.forEach(function (elem) {
    elem.disabled = true;
  });
};
var removeDisabled = function removeDisabled(elem) {
  arr.forEach(function (elem) {
    elem.disabled = false;
  });
};

/***/ }),

/***/ "./src/modules/initReserve.js":
/*!************************************!*\
  !*** ./src/modules/initReserve.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initReserve": () => (/* binding */ initReserve)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _disabled_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disabled.js */ "./src/modules/disabled.js");
/* harmony import */ var _renderSpec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderSpec.js */ "./src/modules/renderSpec.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var initReserve = function initReserve() {
  var reserveForm = document.querySelector('.reserve__form');
  var fieldspec = reserveForm.fieldspec,
    fielddata = reserveForm.fielddata,
    fieldmonth = reserveForm.fieldmonth,
    fieldday = reserveForm.fieldday,
    fieldtime = reserveForm.fieldtime,
    btn = reserveForm.btn;
  (0,_disabled_js__WEBPACK_IMPORTED_MODULE_1__.addDisabled)([fieldspec, fielddata, fieldmonth, fieldday, fieldtime, btn]);
  reserveForm.addEventListener('change', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var target, response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            target = event.target;
            if (!(target.name === 'service')) {
              _context.next = 10;
              break;
            }
            _context.next = 4;
            return fetch("".concat(_api_js__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/api?service=").concat(target.value));
          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();
          case 7:
            data = _context.sent;
            // console.log('data: ', data);

            fieldspec.innerHTML = '<legend class="reserve__legend">Специалист</legend>';
            (0,_renderSpec_js__WEBPACK_IMPORTED_MODULE_2__.renderSpec)(fieldspec, data);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

/***/ }),

/***/ "./src/modules/initService.js":
/*!************************************!*\
  !*** ./src/modules/initService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initService": () => (/* binding */ initService)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _preload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preload.js */ "./src/modules/preload.js");
/* harmony import */ var _renderPrice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderPrice.js */ "./src/modules/renderPrice.js");
/* harmony import */ var _renderService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderService.js */ "./src/modules/renderService.js");




var initService = function initService() {
  var priceList = document.querySelector('.price__list');
  var reserveFieldsetService = document.querySelector('.reserve__fieldset_service');
  priceList.textContent = '';
  (0,_preload_js__WEBPACK_IMPORTED_MODULE_1__.addPreload)(priceList);
  reserveFieldsetService.textContent = '';
  (0,_preload_js__WEBPACK_IMPORTED_MODULE_1__.addPreload)(reserveFieldsetService);
  reserveFieldsetService.innerHTML = '<legend class="reserve__legend">Услуга</legend>';
  fetch("".concat(_api_js__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/api")).then(function (response) {
    return response.json();
  }).then(function (data) {
    (0,_renderPrice_js__WEBPACK_IMPORTED_MODULE_2__.renderPrice)(priceList, data);
    (0,_preload_js__WEBPACK_IMPORTED_MODULE_1__.removePreload)(priceList);
    return data;
  }).then(function (data) {
    (0,_renderService_js__WEBPACK_IMPORTED_MODULE_3__.renderService)(reserveFieldsetService, data);
    (0,_preload_js__WEBPACK_IMPORTED_MODULE_1__.removePreload)(reserveFieldsetService);
  });
};

/***/ }),

/***/ "./src/modules/preload.js":
/*!********************************!*\
  !*** ./src/modules/preload.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPreload": () => (/* binding */ addPreload),
/* harmony export */   "removePreload": () => (/* binding */ removePreload)
/* harmony export */ });
var addPreload = function addPreload(elem) {
  elem.classList.add('preload');
};
var removePreload = function removePreload(elem) {
  elem.classList.remove('preload');
};

/***/ }),

/***/ "./src/modules/renderPrice.js":
/*!************************************!*\
  !*** ./src/modules/renderPrice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPrice": () => (/* binding */ renderPrice)
/* harmony export */ });
var renderPrice = function renderPrice(wrapper, data) {
  data.forEach(function (item) {
    var priceItem = document.createElement('li');
    priceItem.classList.add('price__item');
    priceItem.innerHTML = "\n      <span class=\"price__item-title\">".concat(item.name, "</span>\n      <span class=\"price__item-count\">").concat(item.price, " \u0440\u0443\u0431</span>\n    ");
    wrapper.append(priceItem);
  });
};

/***/ }),

/***/ "./src/modules/renderService.js":
/*!**************************************!*\
  !*** ./src/modules/renderService.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderService": () => (/* binding */ renderService)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var renderService = function renderService(wrapper, data) {
  var labels = data.map(function (item) {
    var label = document.createElement('label');
    label.classList.add('radio');
    label.innerHTML = "\n      <input class=\"radio__input\" type=\"radio\" name=\"service\" value=\"".concat(item.id, "\">\n      <span class=\"radio__label\">").concat(item.name, "</span>\n    ");
    return label;
  });
  wrapper.append.apply(wrapper, _toConsumableArray(labels));
};

/***/ }),

/***/ "./src/modules/renderSpec.js":
/*!***********************************!*\
  !*** ./src/modules/renderSpec.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSpec": () => (/* binding */ renderSpec)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var renderSpec = function renderSpec(wrapper, data) {
  var labels = data.map(function (item) {
    console.log('item: ', item);
    var label = document.createElement('label');
    label.classList.add('radio');
    label.innerHTML = "\n    <input class=\"radio__input\" type=\"radio\" name=\"spec\" value=\"".concat(item.id, "\">\n    <span class=\"radio__label radio__label_spec\" style=\"--bg-image: url(img/spec-1.png)\">\u0418\u0433\u043E\u0440\u044C</span>\n\n    ");
    return label;
  });
  wrapper.append.apply(wrapper, _toConsumableArray(labels));
};

//    <span class="radio__label radio__label_spec" style="--bg-image: url(${API_URL}${item.img})>${item.name}</span>

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
/* harmony import */ var _preload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preload.js */ "./src/modules/preload.js");

var slider = function slider() {
  var addPreload = function addPreload(elem) {
    elem.classList.add('preload');
  };
  var removePreload = function removePreload(elem) {
    elem.classList.remove('preload');
  };
  var startSlider = function startSlider() {
    var sliderItems = document.querySelectorAll('.slider__item');
    var sliderList = document.querySelector('.slider__list');
    var btnPrevSlide = document.querySelector('.slider__arrow_left');
    var btnNextSlide = document.querySelector('.slider__arrow_right');
    var activeSlide = 1;
    var position = 0;
    var checkSlider = function checkSlider() {
      if (activeSlide + 2 === sliderItems.length && document.documentElement.offsetWidth > 560 || activeSlide === sliderItems.length) {
        btnNextSlide.style.display = 'none';
      } else {
        btnNextSlide.style.display = '';
      }
      if (activeSlide === 1) {
        btnPrevSlide.style.display = 'none';
      } else {
        btnPrevSlide.style.display = '';
      }
    };
    checkSlider();
    var nextSlide = function nextSlide() {
      var _sliderItems$activeSl, _sliderItems$activeSl2;
      (_sliderItems$activeSl = sliderItems[activeSlide]) === null || _sliderItems$activeSl === void 0 ? void 0 : _sliderItems$activeSl.classList.remove('slider__item_active');
      position = -sliderItems[0].clientWidth * activeSlide;
      sliderList.style.transform = "translateX(".concat(position, "px)");
      activeSlide += 1;
      (_sliderItems$activeSl2 = sliderItems[activeSlide]) === null || _sliderItems$activeSl2 === void 0 ? void 0 : _sliderItems$activeSl2.classList.add('slider__item_active');
      checkSlider();
    };
    var prevSlide = function prevSlide() {
      var _sliderItems$activeSl3, _sliderItems$activeSl4;
      (_sliderItems$activeSl3 = sliderItems[activeSlide]) === null || _sliderItems$activeSl3 === void 0 ? void 0 : _sliderItems$activeSl3.classList.remove('slider__item_active');
      position = -sliderItems[0].clientWidth * (activeSlide - 2);
      sliderList.style.transform = "translateX(".concat(position, "px)");
      activeSlide -= 1;
      (_sliderItems$activeSl4 = sliderItems[activeSlide]) === null || _sliderItems$activeSl4 === void 0 ? void 0 : _sliderItems$activeSl4.classList.add('slider__item_active');
      checkSlider();
    };
    btnPrevSlide.addEventListener('click', prevSlide);
    btnNextSlide.addEventListener('click', nextSlide);
    window.addEventListener('resize', function () {
      if (activeSlide + 2 > sliderItems.length && document.documentElement.offsetWidth > 560) {
        var _sliderItems$activeSl5;
        activeSlide = sliderItems.length - 2;
        (_sliderItems$activeSl5 = sliderItems[activeSlide]) === null || _sliderItems$activeSl5 === void 0 ? void 0 : _sliderItems$activeSl5.classList.add('.slider__item_active');
      }
      position = -sliderItems[0].clientWidth * (activeSlide - 1);
      sliderList.style.transform = "translateX(".concat(position, "px)");
      checkSlider();
    });
  };
  var initSlider = function initSlider() {
    var slider = document.querySelector('.slider');
    var sliderContainer = document.querySelector('.slider__container');
    sliderContainer.style.display = 'none';
    addPreload(slider);
    window.addEventListener('load', function () {
      sliderContainer.style.display = '';
      removePreload(slider);
      startSlider();
    });
  };
  initSlider();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/raleway-v28-latin-regular.woff2 */ "./src/fonts/raleway-v28-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/raleway-v28-latin-regular.woff */ "./src/fonts/raleway-v28-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM65 3.5L1 3.5V4.5L65 4.5V3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM65 3.5L1 3.5V4.5L65 4.5V3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M64.3536 3.64645C64.5488 3.84171 64.5488 4.15829 64.3536 4.35355L61.1716 7.53553C60.9763 7.7308 60.6597 7.7308 60.4645 7.53553C60.2692 7.34027 60.2692 7.02369 60.4645 6.82843L63.2929 4L60.4645 1.17157C60.2692 0.976311 60.2692 0.659728 60.4645 0.464466C60.6597 0.269204 60.9763 0.269204 61.1716 0.464466L64.3536 3.64645ZM0 3.5L64 3.5V4.5L0 4.5L0 3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A */ "data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M64.3536 3.64645C64.5488 3.84171 64.5488 4.15829 64.3536 4.35355L61.1716 7.53553C60.9763 7.7308 60.6597 7.7308 60.4645 7.53553C60.2692 7.34027 60.2692 7.02369 60.4645 6.82843L63.2929 4L60.4645 1.17157C60.2692 0.976311 60.2692 0.659728 60.4645 0.464466C60.6597 0.269204 60.9763 0.269204 61.1716 0.464466L64.3536 3.64645ZM0 3.5L64 3.5V4.5L0 4.5L0 3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/price_bg.jpeg */ "./src/img/price_bg.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/top.svg */ "./src/img/top.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/master.svg */ "./src/img/master.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/guarantee.svg */ "./src/img/guarantee.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-display: swap;\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: Raleway, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.2;\n  background-color: #241D1C;\n  color: #F6F3E3;\n  min-width: 320px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na {\n  color: inherit;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, p {\n  font-weight: 400;\n  margin: 0;\n}\n\nul, li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nol > li {\n  list-style-type: decimal;\n}\n\n.container {\n  max-width: 1312px;\n  padding: 0 48px;\n  margin: 0 auto;\n}\n\nbutton {\n  cursor: pointer;\n  padding: 0;\n}\n\n.visualy-hidden {\n  position: fixed;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.main-link {\n  display: inline-block;\n  padding: 13px 46px;\n  border-radius: 4px;\n  background-color: #F6F3E3;\n  color: #241D1C;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 100%;\n  text-transform: uppercase;\n  transition: background-color 0.3s ease-in-out;\n  border: none;\n}\n.main-link:hover:not(:disabled) {\n  background-color: #EFE7BE;\n}\n.main-link:disabled {\n  opacity: 0.4;\n}\n.main-link:focus-visible {\n  outline: 1px solid #FFF;\n  border-radius: 6px;\n}\n\n.preload {\n  position: relative;\n  min-height: 100px;\n}\n.preload::after {\n  content: \"\";\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  top: calc(50% - 28px);\n  left: calc(50% - 28px);\n  border: 11px double #F6F3E3;\n  border-radius: 50px;\n  border-left-style: solid;\n  -webkit-animation: rotate 0.5s infinite linear;\n          animation: rotate 0.5s infinite linear;\n}\n\n@-webkit-keyframes rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.header__container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 54px;\n  padding-top: 16px;\n  padding-bottom: 17px;\n  border-bottom: 1px solid #BFBDB2;\n}\n.header__navigation {\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.nav__list {\n  display: flex;\n  gap: 33px;\n  font-size: 14px;\n  line-height: 100%;\n  text-transform: uppercase;\n  transition: color 0.3s ease-in-out;\n}\n.nav__list:hover {\n  color: #EFE7BE;\n}\n.nav__item {\n  position: relative;\n}\n.nav__item:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  bottom: -3px;\n  right: 0;\n  width: 0%;\n  height: 1px;\n  background-color: #EFE7BE;\n  transition: width 0.3s ease-in-out;\n}\n.nav__item:hover:after {\n  width: 100%;\n  left: 0;\n}\n\n.hero {\n  padding: 62px 0;\n}\n.hero__slider {\n  min-height: 372px;\n}\n.hero__title {\n  max-width: 917px;\n  font-size: 54px;\n  text-transform: uppercase;\n  color: #F6F3E3;\n  margin-bottom: 36px;\n}\n\n.slider {\n  overflow: hidden;\n  position: relative;\n}\n.slider__list {\n  display: flex;\n  padding: 0;\n  margin: 0 -16px;\n}\n.slider__item {\n  padding: 0 16px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  max-width: 25%;\n}\n.slider__item_active {\n  max-width: 50%;\n}\n.slider__arrow {\n  position: absolute;\n  border: none;\n  bottom: 25%;\n  width: 66px;\n  height: 8px;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: opacity 0.3s linear;\n}\n.slider__arrow:hover {\n  opacity: 0.8;\n}\n.slider__arrow:active {\n  opacity: 0.6;\n}\n.slider__arrow_left {\n  left: 8%;\n  background-position: left;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.slider__arrow_right {\n  right: 8%;\n  background-position: right;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.price {\n  padding: 62px 0;\n}\n.price__title {\n  font-size: 40px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n.price__tegline {\n  margin-bottom: 40px;\n}\n.price__wrapper-content {\n  display: flex;\n  gap: 32px;\n}\n.price__wrapper-content::before {\n  content: \"\";\n  flex-basis: 50%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.price__content {\n  flex-basis: 50%;\n}\n.price__list {\n  margin-bottom: 62px;\n}\n.price__item {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid #BFBDB2;\n  margin-bottom: 24px;\n}\n.price__item:last-child {\n  margin-bottom: 0;\n}\n.price__item-count {\n  white-space: nowrap;\n}\n.price__item-title {\n  text-transform: uppercase;\n}\n\n.about {\n  padding: 62px 0;\n}\n.about__title {\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 120%;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n  max-width: 693px;\n}\n.about__description {\n  color: #BFBDB2 !important;\n}\n.about__description {\n  line-height: 150%;\n  margin-bottom: 72px;\n  max-width: 693px;\n}\n.about__list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));\n  grid-gap: 24px;\n  gap: 24px;\n}\n.about__item {\n  padding: 6px 0 6px 96px;\n  background-repeat: no-repeat;\n  background-position: left;\n  background-size: 80px;\n  min-height: 80px;\n}\n.about__item_top {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.about__item_master {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.about__item_guarantee {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.about__item-title {\n  font-size: 22px;\n  line-height: 120%;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n.about__item-descripyion {\n  font-size: 16px;\n  line-height: 130%;\n  color: #BFBDB2;\n}\n\n.reserve {\n  padding-top: 62px 0 124px;\n}\n.reserve__title {\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 120%;\n  text-transform: uppercase;\n  margin-bottom: 24px;\n}\n.reserve__list {\n  margin-bottom: 72px;\n  padding-left: 24px;\n}\n.reserve__item {\n  font-weight: 400;\n  line-height: 150%;\n  color: #BFBDB2;\n  margin-bottom: 8px;\n}\n.reserve__item:last-child {\n  margin-bottom: 0;\n}\n.reserve__form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 72px;\n}\n.reserve__fieldset {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  border: none;\n  gap: 8px;\n}\n.reserve__fieldset_last {\n  flex-direction: column;\n  gap: 24px;\n}\n.reserve__legend {\n  font-weight: 400;\n  font-size: 22px;\n  line-height: 100%;\n  text-transform: uppercase;\n  margin-bottom: 24px;\n}\n.reserve__btn {\n  margin-top: 40px;\n}\n\n.radio__input {\n  position: absolute;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.radio__input:focus + .radio__label, .radio__input:checked + .radio__label {\n  color: #241D1C;\n  background-color: #F6F3E3;\n}\n.radio__input:disabled + .radio__label {\n  opacity: 0.3;\n}\n.radio__label {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 100%;\n  text-transform: uppercase;\n  border: 1px solid #BFBDB2;\n  border-radius: 36px;\n  padding: 16px 24px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.radio__label:hover:not(:disabled) {\n  color: #EFE7BE;\n}\n.radio__label_spec {\n  padding-left: 52px;\n  background-image: --bg-image;\n  background-repeat: no-repeat;\n  background-size: 36px;\n  background-position: 8px;\n}\n\n.footer {\n  margin-top: 32px;\n}\n.footer_copiright {\n  font-size: 12px;\n  line-height: 100%;\n  padding-bottom: 24px;\n}\n.footer__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #BFBDB2;\n  padding-top: 16px;\n  padding-bottom: 40px;\n}\n.footer__list {\n  font-size: 12px;\n  line-height: 100%;\n}\n.footer__item {\n  margin-bottom: 7px;\n}\n.footer__item:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 1024px){\n  .container {\n    padding: 0 45px;\n  }\n  .slider__item {\n    max-width: 30%;\n  }\n  .slider__item_active {\n    max-width: 40%;\n  }\n  .slider__arrow {\n    bottom: 12%;\n  }\n  .about__description {\n    margin-bottom: 46px;\n  }\n  .about__list {\n    grid-template-columns: repeat(auto-fill, minmax(287px, 1fr));\n  }\n  .about__item {\n    padding-top: 96px;\n    background-position: top left;\n    padding-left: 0;\n  }\n}\n@media (max-width: 768px){\n  .container {\n    padding: 0 24px;\n  }\n  .header__navigation {\n    display: none;\n  }\n  .hero {\n    padding: 40px 0;\n  }\n  .hero__title {\n    font-size: 40px;\n    margin-bottom: 24px;\n  }\n  .slider__item {\n    max-width: 25%;\n  }\n  .slider__item_active {\n    max-width: 50%;\n  }\n  .slider__arrow {\n    width: 40px;\n    bottom: 25%;\n  }\n  .price {\n    padding: 40px 0;\n  }\n  .price__title {\n    font-size: 32px;\n  }\n  .price__wrapper-content::before {\n    content: none;\n  }\n  .price__content {\n    flex-basis: 100%;\n  }\n  .price__list {\n    margin-bottom: 40px;\n  }\n  .about {\n    padding: 40px 0;\n  }\n  .about__title {\n    font-size: 32px;\n  }\n  .about__description {\n    margin-bottom: 32px;\n    font-size: 16px;\n  }\n  .about__list {\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  }\n  .about__item {\n    padding-left: 96px;\n    padding-top: 0;\n    background-position: left;\n  }\n  .about__item-title {\n    font-size: 16px;\n  }\n  .reserve {\n    padding: 40px 0 80px;\n  }\n  .reserve__title {\n    font-size: 32px;\n  }\n  .reserve__form-container {\n    gap: 40px;\n  }\n  .reserve__legend {\n    font-size: 16px;\n  }\n  .radio__label {\n    font-size: 12px;\n    padding: 12px 16px;\n  }\n  .radio__label_spec {\n    background-size: 24px;\n    padding-left: 42px;\n  }\n}\n@media (max-width: 560px){\n  .main-link {\n    padding: 10px 24px;\n    font-size: 12px;\n  }\n  .header__container {\n    padding-top: 12px;\n    padding-bottom: 13px;\n  }\n  .hero {\n    padding: 32px 0;\n  }\n  .hero__title {\n    font-size: 24px;\n    margin-bottom: 16px;\n    max-width: 420px;\n  }\n  .slider {\n    padding-bottom: 20px;\n  }\n  .slider__item {\n    max-width: 100%;\n  }\n  .slider__arrow {\n    bottom: 0;\n  }\n  .slider__arrow_left {\n    left: 0;\n  }\n  .slider__arrow_right {\n    right: 0;\n  }\n  .price {\n    padding: 32px 0;\n  }\n  .price__title {\n    font-size: 20px;\n    margin-bottom: 8px;\n  }\n  .price__tegline {\n    font-size: 12px;\n  }\n  .price__list {\n    margin-bottom: 24px;\n  }\n  .price__item {\n    font-size: 12px;\n    padding-bottom: 6px;\n    margin-bottom: 16px;\n    line-height: 1.2;\n  }\n  .about {\n    padding: 32px 0;\n  }\n  .about__title {\n    font-size: 20px;\n    margin-bottom: 16px;\n  }\n  .about__description {\n    font-size: 12px;\n  }\n  .about__list {\n    grid-template-columns: minmax(272px, 1fr);\n  }\n  .about__item {\n    background-size: 64px;\n    min-height: 64px;\n    padding-left: 72px;\n  }\n  .about__item-descripyion {\n    font-size: 12px;\n  }\n  .reserve {\n    padding: 32px 0 34px;\n  }\n  .reserve__form-container {\n    gap: 32px;\n  }\n  .reserve__fieldset {\n    gap: 4px;\n  }\n  .reserve__fieldset_last {\n    gap: 20px;\n  }\n  .footer__wrapper {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .footer__list {\n    font-size: 10px;\n  }\n  .footer__nav_list {\n    flex-direction: column;\n    gap: 16px;\n    margin: 32px 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/_fonts.scss","webpack://./../../VScode%20/Chik-chik-BarberShop/src/index.scss","webpack://./src/style/default.scss","webpack://./src/style/_var.scss","webpack://./src/style/preload.scss","webpack://./src/style/header.scss","webpack://./src/style/nav.scss","webpack://./src/style/hero.scss","webpack://./src/style/slider.scss","webpack://./src/style/price.scss","webpack://./src/style/about.scss","webpack://./src/style/reserve.scss","webpack://./src/style/radio.scss","webpack://./src/style/footer.scss","webpack://./<no source>","webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oHAAA;ACEF;ACPA;EACE,sBAAA;EACA,uBAAA;ADSF;;ACNA;EACE,mBAAA;ADSF;;ACLA;EACE,gCAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,yBCXG;EDYH,cCfK;EDgBL,gBAAA;ADQF;;ACLA;EACA,eAAA;EACA,YAAA;ADQA;;ACLA;EACE,cAAA;EACA,6BAAA;EAAA,qBAAA;ADQF;;ACLA;EACE,gBAAA;EACA,SAAA;ADQF;;ACLA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;ADQF;;ACLA;EACE,wBAAA;ADQF;;ACLA;EACE,iBAAA;EACA,eAAA;EACA,cAAA;ADQF;;ACEA;EACE,eAAA;EACA,UAAA;ADWF;;ACRA;EACE,eAAA;EACA,2BAAA;UAAA,mBAAA;ADWF;;ACRA;EACE,qBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,6CAAA;EACA,YAAA;ADWF;ACTE;EACE,yBAAA;ADWJ;ACTE;EACE,YAAA;ADWJ;ACRE;EACE,uBAAA;EACA,kBAAA;ADUJ;;AGpGA;EACE,kBAAA;EACA,iBAAA;AH6GF;AG3GE;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,wBAAA;EACA,8CAAA;UAAA,sCAAA;AH6GJ;;AGzGA;EACE;IACE,iCAAA;YAAA,yBAAA;EH4GF;AACF;;AG/GA;EACE;IACE,iCAAA;YAAA,yBAAA;EH4GF;AACF;AI/HE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;EACA,oBAAA;EACA,gCAAA;AJiIJ;AIzHE;EACE,YAAA;EACA,aAAA;EACA,yBAAA;AJiIJ;;AKnJE;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,kCAAA;AL2JJ;AKzJI;EACE,cAAA;AL2JN;AKvJE;EACE,kBAAA;ALyJJ;AKvJI;EACE,kBAAA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,yBAAA;EACA,kCAAA;ALyJN;AKtJI;EACE,WAAA;EACA,OAAA;ALwJN;;AMxLA;EACE,eAAA;AN2LF;AMjLE;EACE,iBAAA;AN6LJ;AM1LE;EACE,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;AN4LJ;;AOhNA;EACA,gBAAA;EACA,kBAAA;APgOA;AOtNE;EACE,aAAA;EACA,UAAA;EACA,eAAA;AP6NJ;AO1NE;EACE,eAAA;EACA,YAAA;EACA,cAAA;EACA,cAAA;AP4NJ;AO7ME;EACE,cAAA;AP8NJ;AOpNE;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,6BAAA;EACA,4BAAA;EACA,eAAA;EACA,+BAAA;APgOJ;AOnNI;EACE,YAAA;APqON;AOnOI;EACE,YAAA;APqON;AOlOI;EACE,QAAA;EACA,yBAAA;EACA,yDAAA;APoON;AO7NI;EACE,SAAA;EACA,0BAAA;EACA,yDAAA;APoON;;AQ9TA;EACE,eAAA;ARsUF;AQ3TE;EACE,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,mBAAA;ARuUJ;AQ1TE;EACE,mBAAA;ARuUJ;AQ9TE;EACE,aAAA;EACA,SAAA;ARqUJ;AQnUI;EACE,WAAA;EACA,eAAA;EACA,yDAAA;EACA,wBAAA;EACA,4BAAA;EACA,sBAAA;ARqUN;AQ3TE;EACE,eAAA;ARkUJ;AQzTE;EACE,mBAAA;ARgUJ;AQpTE;EACE,aAAA;EACA,8BAAA;EACA,eAAA;EACA,mBAAA;EACA,gCAAA;EACA,mBAAA;ARgUJ;AQ9TI;EACE,gBAAA;ARgUN;AQnTE;EACE,mBAAA;AR6TJ;AQxTE;EACE,yBAAA;AR0TJ;;ASzaA;EACE,eAAA;AT4aF;ASjaE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;AT6aJ;AS/ZE;EAEE,yBAAA;AT8aJ;AShbE;EACE,iBAAA;EAEA,mBAAA;EACA,gBAAA;AT4aJ;AS5ZE;EACE,aAAA;EACA,4DAAA;EACA,cAAA;EAAA,SAAA;AT8aJ;AS/ZE;EACE,uBAAA;EACA,4BAAA;EACA,yBAAA;EACA,qBAAA;EACA,gBAAA;ATgbJ;AS7aI;EACE,yDAAA;AT+aN;AS3aI;EACE,yDAAA;AT6aN;ASxaI;EACE,yDAAA;AT0aN;ASlZE;EACE,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;ATyaJ;AShaE;EACE,eAAA;EACA,iBAAA;EACA,cPhIQ;AFuiBZ;;AUziBA;EACE,yBAAA;AVijBF;AUtiBE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;AVkjBJ;AUziBE;EACE,mBAAA;EACA,kBAAA;AVgjBJ;AU3iBE;EACE,gBAAA;EACA,iBAAA;EACA,cRlCQ;EQmCR,kBAAA;AV6iBJ;AU3iBI;EACE,gBAAA;AV6iBN;AUviBE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AVyiBJ;AU7hBE;EACE,aAAA;EACA,eAAA;EACA,UAAA;EACA,YAAA;EACA,QAAA;AVyiBJ;AUniBI;EACE,sBAAA;EACA,SAAA;AV0iBN;AUhiBE;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;AVuiBJ;AU7hBE;EACE,gBAAA;AVoiBJ;;AWpoBE;EACE,kBAAA;EACA,wBAAA;UAAA,gBAAA;AXuoBJ;AWroBI;EAEE,cAAA;EACA,yBAAA;AXsoBN;AWpoBI;EACE,YAAA;AXsoBN;AW/nBE;EACE,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;AXioBJ;AWxnBI;EACE,cAAA;AXgoBN;AW5nBI;EACE,kBAAA;EACA,4BAAA;EACA,4BAAA;EACA,qBAAA;EACA,wBAAA;AX8nBN;;AY/qBA;EACE,gBAAA;AZwrBF;AYprBE;EACE,eAAA;EACA,iBAAA;EACA,oBAAA;AZsrBJ;AYjrBE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,6BAAA;EACA,iBAAA;EACA,oBAAA;AZmrBJ;AY7pBE;EACE,eAAA;EACA,iBAAA;AZqqBJ;AY/oBE;EACE,kBAAA;AZ6pBJ;AY3pBI;EACE,gBAAA;AZ6pBN;AaluBA;EZ6CA;IAMI,eAAA;EDSF;EO1CA;IAOI,cAAA;EP6NJ;EOjNA;IAII,cAAA;EP+NJ;EOxNA;IAYI,WAAA;EPiOJ;ES7PA;IAOI,mBAAA;ET6aJ;EShaA;IAMI,4DAAA;ET+aJ;ESnaA;IAwBI,iBAAA;IACA,6BAAA;IACA,eAAA;ET0aJ;AcxEF;ADlcA;EZ6CA;IASI,eAAA;EDWF;EIhDA;IAMI,aAAA;EJkIJ;EMzJF;IAII,eAAA;EN4LF;EMjLA;IASI,eAAA;IACA,mBAAA;EN4LJ;EOnMA;IAWI,cAAA;EP8NJ;EOtNA;IAOI,cAAA;EPiOJ;EO7NA;IAeI,WAAA;IACA,WAAA;EPmOJ;EQnSF;IAII,eAAA;ERuUF;EQ/TA;IAOI,eAAA;ERwUJ;EQhTE;IASI,aAAA;ERsUN;EQ/TA;IAII,gBAAA;ERmUJ;EQ7TA;IAII,mBAAA;ERiUJ;ES1YF;IAII,eAAA;ET6aF;ESraA;IASI,eAAA;ET8aJ;ESnaA;IAUI,mBAAA;IACA,eAAA;ET+aJ;EStaA;IASI,4DAAA;ETibJ;ESxaA;IA6BI,kBAAA;IACA,cAAA;IACA,yBAAA;ET4aJ;ES/ZA;IAOI,eAAA;ET0aJ;EUniBF;IAII,oBAAA;EVkjBF;EU1iBA;IAQI,eAAA;EVmjBJ;EUzhBA;IAMI,SAAA;EV0iBJ;EU1gBA;IAQI,eAAA;EVwiBJ;EW/mBA;IAYI,eAAA;IACA,kBAAA;EXkoBJ;EWxnBE;IAQI,qBAAA;IACA,kBAAA;EX+nBN;AcjKF;ADnhBA;EZoEA;IA0BI,kBAAA;IACA,eAAA;EDUF;EIvGA;IAUI,iBAAA;IACA,oBAAA;EJkIJ;EM/IF;IAQI,eAAA;EN6LF;EMtLA;IAcI,eAAA;IACA,mBAAA;IACA,gBAAA;EN6LJ;EO5NF;IASI,oBAAA;EP6NF;EOpNA;IAeI,eAAA;EP+NJ;EOhNA;IAmBI,SAAA;EPqOJ;EO3NE;IAMI,OAAA;EPqON;EOjOE;IAMI,QAAA;EPqON;EQlUF;IAOI,eAAA;ERyUF;EQpUA;IAUI,eAAA;IACA,kBAAA;ER0UJ;EQpUA;IAII,eAAA;ERwUJ;EQpSA;IAOI,mBAAA;ERmUJ;EQ7TA;IAaI,eAAA;IACA,mBAAA;IACA,mBAAA;IACA,gBAAA;ERgUJ;ESlaF;IAOI,eAAA;ET+aF;ES1aA;IAaI,eAAA;IACA,mBAAA;ET+aJ;ESzaA;IAcI,eAAA;ETibJ;ES3aA;IAYI,yCAAA;ETmbJ;ES7aA;IAkCI,qBAAA;IACA,gBAAA;IACA,kBAAA;ET8aJ;ESzZA;IAMI,eAAA;ETwaJ;EU7iBF;IAOI,oBAAA;EVojBF;EU7gBA;IASI,SAAA;EV4iBJ;EUtiBA;IAQI,QAAA;EV0iBJ;EUviBE;IAKI,SAAA;EV2iBN;EY3mBA;IASI,sBAAA;IACA,uBAAA;EZorBJ;EYlqBA;IAKI,eAAA;EZsqBJ;EY9pBA;IAGI,sBAAA;IACA,SAAA;IACA,cAAA;EZgqBJ;AcvGF","sourcesContent":["@font-face {\n  font-display: swap;\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: url('./../fonts/raleway-v28-latin-regular.woff2') format('woff2'),\n      url('./../fonts/raleway-v28-latin-regular.woff') format('woff');\n}","@import '~normalize.css';\n@font-face {\n  font-display: swap;\n  font-family: \"Raleway\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./../fonts/raleway-v28-latin-regular.woff2\") format(\"woff2\"), url(\"./../fonts/raleway-v28-latin-regular.woff\") format(\"woff\");\n}\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: Raleway, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.2;\n  background-color: #241D1C;\n  color: #F6F3E3;\n  min-width: 320px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, p {\n  font-weight: 400;\n  margin: 0;\n}\n\nul, li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nol > li {\n  list-style-type: decimal;\n}\n\n.container {\n  max-width: 1312px;\n  padding: 0 48px;\n  margin: 0 auto;\n}\n@media (max-width: 1024px) {\n  .container {\n    padding: 0 45px;\n  }\n}\n@media (max-width: 768px) {\n  .container {\n    padding: 0 24px;\n  }\n}\n\nbutton {\n  cursor: pointer;\n  padding: 0;\n}\n\n.visualy-hidden {\n  position: fixed;\n  transform: scale(0);\n}\n\n.main-link {\n  display: inline-block;\n  padding: 13px 46px;\n  border-radius: 4px;\n  background-color: #F6F3E3;\n  color: #241D1C;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 100%;\n  text-transform: uppercase;\n  transition: background-color 0.3s ease-in-out;\n  border: none;\n}\n.main-link:hover:not(:disabled) {\n  background-color: #EFE7BE;\n}\n.main-link:disabled {\n  opacity: 0.4;\n}\n.main-link:focus-visible {\n  outline: 1px solid #FFF;\n  border-radius: 6px;\n}\n@media (max-width: 560px) {\n  .main-link {\n    padding: 10px 24px;\n    font-size: 12px;\n  }\n}\n\n.preload {\n  position: relative;\n  min-height: 100px;\n}\n.preload::after {\n  content: \"\";\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  top: calc(50% - 28px);\n  left: calc(50% - 28px);\n  border: 11px double #F6F3E3;\n  border-radius: 50px;\n  border-left-style: solid;\n  animation: rotate 0.5s infinite linear;\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.header__container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 54px;\n  padding-top: 16px;\n  padding-bottom: 17px;\n  border-bottom: 1px solid #BFBDB2;\n}\n@media (max-width: 560px) {\n  .header__container {\n    padding-top: 12px;\n    padding-bottom: 13px;\n  }\n}\n.header__navigation {\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .header__navigation {\n    display: none;\n  }\n}\n\n.nav__list {\n  display: flex;\n  gap: 33px;\n  font-size: 14px;\n  line-height: 100%;\n  text-transform: uppercase;\n  transition: color 0.3s ease-in-out;\n}\n.nav__list:hover {\n  color: #EFE7BE;\n}\n.nav__item {\n  position: relative;\n}\n.nav__item:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  bottom: -3px;\n  right: 0;\n  width: 0%;\n  height: 1px;\n  background-color: #EFE7BE;\n  transition: width 0.3s ease-in-out;\n}\n.nav__item:hover:after {\n  width: 100%;\n  left: 0;\n}\n\n.hero {\n  padding: 62px 0;\n}\n@media (max-width: 768px) {\n  .hero {\n    padding: 40px 0;\n  }\n}\n@media (max-width: 560px) {\n  .hero {\n    padding: 32px 0;\n  }\n}\n.hero__slider {\n  min-height: 372px;\n}\n.hero__title {\n  max-width: 917px;\n  font-size: 54px;\n  text-transform: uppercase;\n  color: #F6F3E3;\n  margin-bottom: 36px;\n}\n@media (max-width: 768px) {\n  .hero__title {\n    font-size: 40px;\n    margin-bottom: 24px;\n  }\n}\n@media (max-width: 560px) {\n  .hero__title {\n    font-size: 24px;\n    margin-bottom: 16px;\n    max-width: 420px;\n  }\n}\n\n.slider {\n  overflow: hidden;\n  position: relative;\n}\n@media (max-width: 560px) {\n  .slider {\n    padding-bottom: 20px;\n  }\n}\n.slider__list {\n  display: flex;\n  padding: 0;\n  margin: 0 -16px;\n}\n.slider__item {\n  padding: 0 16px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  max-width: 25%;\n}\n@media (max-width: 1024px) {\n  .slider__item {\n    max-width: 30%;\n  }\n}\n@media (max-width: 768px) {\n  .slider__item {\n    max-width: 25%;\n  }\n}\n@media (max-width: 560px) {\n  .slider__item {\n    max-width: 100%;\n  }\n}\n.slider__item_active {\n  max-width: 50%;\n}\n@media (max-width: 1024px) {\n  .slider__item_active {\n    max-width: 40%;\n  }\n}\n@media (max-width: 768px) {\n  .slider__item_active {\n    max-width: 50%;\n  }\n}\n.slider__arrow {\n  position: absolute;\n  border: none;\n  bottom: 25%;\n  width: 66px;\n  height: 8px;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: opacity 0.3s linear;\n}\n@media (max-width: 1024px) {\n  .slider__arrow {\n    bottom: 12%;\n  }\n}\n@media (max-width: 768px) {\n  .slider__arrow {\n    width: 40px;\n    bottom: 25%;\n  }\n}\n@media (max-width: 560px) {\n  .slider__arrow {\n    bottom: 0;\n  }\n}\n.slider__arrow:hover {\n  opacity: 0.8;\n}\n.slider__arrow:active {\n  opacity: 0.6;\n}\n.slider__arrow_left {\n  left: 8%;\n  background-position: left;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='65' height='8' viewBox='0 0 65 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM65 3.5L1 3.5V4.5L65 4.5V3.5Z' fill='%23F6F3E3'/%3E%3C/svg%3E%0A\");\n}\n@media (max-width: 560px) {\n  .slider__arrow_left {\n    left: 0;\n  }\n}\n.slider__arrow_right {\n  right: 8%;\n  background-position: right;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='65' height='8' viewBox='0 0 65 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M64.3536 3.64645C64.5488 3.84171 64.5488 4.15829 64.3536 4.35355L61.1716 7.53553C60.9763 7.7308 60.6597 7.7308 60.4645 7.53553C60.2692 7.34027 60.2692 7.02369 60.4645 6.82843L63.2929 4L60.4645 1.17157C60.2692 0.976311 60.2692 0.659728 60.4645 0.464466C60.6597 0.269204 60.9763 0.269204 61.1716 0.464466L64.3536 3.64645ZM0 3.5L64 3.5V4.5L0 4.5L0 3.5Z' fill='%23F6F3E3'/%3E%3C/svg%3E%0A\");\n}\n@media (max-width: 560px) {\n  .slider__arrow_right {\n    right: 0;\n  }\n}\n\n.price {\n  padding: 62px 0;\n}\n@media (max-width: 768px) {\n  .price {\n    padding: 40px 0;\n  }\n}\n@media (max-width: 560px) {\n  .price {\n    padding: 32px 0;\n  }\n}\n.price__title {\n  font-size: 40px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n@media (max-width: 768px) {\n  .price__title {\n    font-size: 32px;\n  }\n}\n@media (max-width: 560px) {\n  .price__title {\n    font-size: 20px;\n    margin-bottom: 8px;\n  }\n}\n.price__tegline {\n  margin-bottom: 40px;\n}\n@media (max-width: 560px) {\n  .price__tegline {\n    font-size: 12px;\n  }\n}\n.price__wrapper-content {\n  display: flex;\n  gap: 32px;\n}\n.price__wrapper-content::before {\n  content: \"\";\n  flex-basis: 50%;\n  background-image: url(\"./../img/price_bg.jpeg\");\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n@media (max-width: 768px) {\n  .price__wrapper-content::before {\n    content: none;\n  }\n}\n.price__content {\n  flex-basis: 50%;\n}\n@media (max-width: 768px) {\n  .price__content {\n    flex-basis: 100%;\n  }\n}\n.price__list {\n  margin-bottom: 62px;\n}\n@media (max-width: 768px) {\n  .price__list {\n    margin-bottom: 40px;\n  }\n}\n@media (max-width: 560px) {\n  .price__list {\n    margin-bottom: 24px;\n  }\n}\n.price__item {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid #BFBDB2;\n  margin-bottom: 24px;\n}\n.price__item:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 560px) {\n  .price__item {\n    font-size: 12px;\n    padding-bottom: 6px;\n    margin-bottom: 16px;\n    line-height: 1.2;\n  }\n}\n.price__item-count {\n  white-space: nowrap;\n}\n.price__item-title {\n  text-transform: uppercase;\n}\n\n.about {\n  padding: 62px 0;\n}\n@media (max-width: 768px) {\n  .about {\n    padding: 40px 0;\n  }\n}\n@media (max-width: 560px) {\n  .about {\n    padding: 32px 0;\n  }\n}\n.about__title {\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 120%;\n  margin-bottom: 24px;\n  text-transform: uppercase;\n  max-width: 693px;\n}\n@media (max-width: 768px) {\n  .about__title {\n    font-size: 32px;\n  }\n}\n@media (max-width: 560px) {\n  .about__title {\n    font-size: 20px;\n    margin-bottom: 16px;\n  }\n}\n.about__description {\n  line-height: 150%;\n  color: #BFBDB2 !important;\n  margin-bottom: 72px;\n  max-width: 693px;\n}\n@media (max-width: 1024px) {\n  .about__description {\n    margin-bottom: 46px;\n  }\n}\n@media (max-width: 768px) {\n  .about__description {\n    margin-bottom: 32px;\n    font-size: 16px;\n  }\n}\n@media (max-width: 560px) {\n  .about__description {\n    font-size: 12px;\n  }\n}\n.about__list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));\n  gap: 24px;\n}\n@media (max-width: 1024px) {\n  .about__list {\n    grid-template-columns: repeat(auto-fill, minmax(287px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .about__list {\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .about__list {\n    grid-template-columns: minmax(272px, 1fr);\n  }\n}\n.about__item {\n  padding: 6px 0 6px 96px;\n  background-repeat: no-repeat;\n  background-position: left;\n  background-size: 80px;\n  min-height: 80px;\n}\n.about__item_top {\n  background-image: url(\"./../img/top.svg\");\n}\n.about__item_master {\n  background-image: url(\"./../img/master.svg\");\n}\n.about__item_guarantee {\n  background-image: url(\"./../img/guarantee.svg\");\n}\n@media (max-width: 1024px) {\n  .about__item {\n    padding-top: 96px;\n    background-position: top left;\n    padding-left: 0;\n  }\n}\n@media (max-width: 768px) {\n  .about__item {\n    padding-left: 96px;\n    padding-top: 0;\n    background-position: left;\n  }\n}\n@media (max-width: 560px) {\n  .about__item {\n    background-size: 64px;\n    min-height: 64px;\n    padding-left: 72px;\n  }\n}\n.about__item-title {\n  font-size: 22px;\n  line-height: 120%;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n}\n@media (max-width: 768px) {\n  .about__item-title {\n    font-size: 16px;\n  }\n}\n.about__item-descripyion {\n  font-size: 16px;\n  line-height: 130%;\n  color: #BFBDB2;\n}\n@media (max-width: 560px) {\n  .about__item-descripyion {\n    font-size: 12px;\n  }\n}\n\n.reserve {\n  padding-top: 62px 0 124px;\n}\n@media (max-width: 768px) {\n  .reserve {\n    padding: 40px 0 80px;\n  }\n}\n@media (max-width: 560px) {\n  .reserve {\n    padding: 32px 0 34px;\n  }\n}\n.reserve__title {\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 120%;\n  text-transform: uppercase;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .reserve__title {\n    font-size: 32px;\n  }\n}\n.reserve__list {\n  margin-bottom: 72px;\n  padding-left: 24px;\n}\n.reserve__item {\n  font-weight: 400;\n  line-height: 150%;\n  color: #BFBDB2;\n  margin-bottom: 8px;\n}\n.reserve__item:last-child {\n  margin-bottom: 0;\n}\n.reserve__form-container {\n  display: flex;\n  flex-direction: column;\n  gap: 72px;\n}\n@media (max-width: 768px) {\n  .reserve__form-container {\n    gap: 40px;\n  }\n}\n@media (max-width: 560px) {\n  .reserve__form-container {\n    gap: 32px;\n  }\n}\n.reserve__fieldset {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  border: none;\n  gap: 8px;\n}\n@media (max-width: 560px) {\n  .reserve__fieldset {\n    gap: 4px;\n  }\n}\n.reserve__fieldset_last {\n  flex-direction: column;\n  gap: 24px;\n}\n@media (max-width: 560px) {\n  .reserve__fieldset_last {\n    gap: 20px;\n  }\n}\n.reserve__legend {\n  font-weight: 400;\n  font-size: 22px;\n  line-height: 100%;\n  text-transform: uppercase;\n  margin-bottom: 24px;\n}\n@media (max-width: 768px) {\n  .reserve__legend {\n    font-size: 16px;\n  }\n}\n.reserve__btn {\n  margin-top: 40px;\n}\n\n.radio__input {\n  position: absolute;\n  appearance: none;\n}\n.radio__input:focus + .radio__label, .radio__input:checked + .radio__label {\n  color: #241D1C;\n  background-color: #F6F3E3;\n}\n.radio__input:disabled + .radio__label {\n  opacity: 0.3;\n}\n.radio__label {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 100%;\n  text-transform: uppercase;\n  border: 1px solid #BFBDB2;\n  border-radius: 36px;\n  padding: 16px 24px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n@media (max-width: 768px) {\n  .radio__label {\n    font-size: 12px;\n    padding: 12px 16px;\n  }\n}\n.radio__label:hover:not(:disabled) {\n  color: #EFE7BE;\n}\n.radio__label_spec {\n  padding-left: 52px;\n  background-image: --bg-image;\n  background-repeat: no-repeat;\n  background-size: 36px;\n  background-position: 8px;\n}\n@media (max-width: 768px) {\n  .radio__label_spec {\n    background-size: 24px;\n    padding-left: 42px;\n  }\n}\n\n.footer {\n  margin-top: 32px;\n}\n.footer_copiright {\n  font-size: 12px;\n  line-height: 100%;\n  padding-bottom: 24px;\n}\n.footer__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid #BFBDB2;\n  padding-top: 16px;\n  padding-bottom: 40px;\n}\n@media (max-width: 560px) {\n  .footer__wrapper {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.footer__list {\n  font-size: 12px;\n  line-height: 100%;\n}\n@media (max-width: 560px) {\n  .footer__list {\n    font-size: 10px;\n  }\n}\n@media (max-width: 560px) {\n  .footer__nav_list {\n    flex-direction: column;\n    gap: 16px;\n    margin: 32px 0;\n  }\n}\n.footer__item {\n  margin-bottom: 7px;\n}\n.footer__item:last-child {\n  margin-bottom: 0;\n}","html {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n}\n\n\nbody {\n  font-family: Raleway, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.2;\n  background-color: $bg;\n  color: $text;\n  min-width: 320px;\n}\n\nimg {\nmax-width: 100%;\nheight: auto;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, p {\n  font-weight: 400;\n  margin: 0;\n}\n\nul, li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nol > li {\n  list-style-type: decimal;\n}\n\n.container {\n  max-width: 1312px;\n  padding: 0 48px;\n  margin: 0 auto;\n\n  @include laptop {\n    padding: 0 45px;\n  }\n  @include tablet {\n    padding: 0 24px;\n  }\n}\n\nbutton {\n  cursor: pointer;\n  padding: 0;\n}\n\n.visualy-hidden {\n  position: fixed;\n  transform: scale(0 );\n}\n\n.main-link {\n  display: inline-block;\n  padding: 13px 46px;\n  border-radius: 4px;\n  background-color: #F6F3E3;\n  color: #241D1C;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 100%;\n  text-transform: uppercase;\n  transition: background-color .3s ease-in-out;\n  border: none;\n\n  &:hover:not(:disabled) {\n    background-color: #EFE7BE;\n  }\n  &:disabled {\n    opacity: 0.4;\n  }\n\n  &:focus-visible {\n    outline: 1px solid #FFF;\n    border-radius: 6px;\n  }\n\n  @include mobile {\n    padding: 10px 24px;\n    font-size: 12px;\n  }\n}\n\n\n","$back: #241D1C;\n$text: #F6F3E3;\n$grey-text: #BFBDB2;\n$grey: #BFBDB2;\n$bg: #241D1C;\n\n\n@mixin laptop {\n  @media (max-width: 1024px) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (max-width: 768px) {\n    @content;\n  }\n}\n\n@mixin mobile {\n  @media (max-width: 560px) {\n    @content;\n  }\n}\n\n\n\n",".preload {\n  position: relative;\n  min-height: 100px;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 56px;\n    height: 56px;\n    top: calc(50% - 28px);\n    left: calc(50% - 28px);\n    border: 11px double $text;\n    border-radius: 50px;\n    border-left-style: solid;\n    animation: rotate 0.5s infinite linear;\n  }\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}",".header {\n\n  &__container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 54px;\n    padding-top: 16px;\n    padding-bottom: 17px;\n    border-bottom: 1px solid #BFBDB2;\n\n    @include mobile {\n      padding-top: 12px;\n      padding-bottom: 13px;\n    }\n  }\n\n  &__navigation {\n    flex-grow: 1;\n    display: flex;\n    justify-content: flex-end;\n\n    @include tablet {\n      display: none;\n    }\n  }\n}\n\n",".nav {\n\n  &__list {\n    display: flex;\n    gap: 33px;\n    font-size: 14px;\n    line-height: 100%;\n    text-transform: uppercase;\n    transition: color .3s ease-in-out;\n\n    &:hover {\n      color: #EFE7BE;\n    }\n  }\n\n  &__item {\n    position: relative;\n\n    &:after {\n      position: absolute;\n      content: '';\n      display: block;\n      bottom: -3px;\n      right: 0;\n      width: 0%;\n      height: 1px;\n      background-color: #EFE7BE;\n      transition: width .3s ease-in-out;\n    }\n\n    &:hover:after {\n      width: 100%;\n      left: 0;\n    }\n  }\n}\n\n\n",".hero {\n  padding: 62px 0;\n\n  @include tablet {\n    padding: 40px 0;\n  }\n\n  @include mobile {\n    padding: 32px 0;\n  }\n\n  &__slider {\n    min-height: 372px;\n  }\n\n  &__title {\n    max-width: 917px;\n    font-size: 54px;\n    text-transform: uppercase;\n    color: #F6F3E3;\n    margin-bottom: 36px;\n\n\n    @include tablet {\n      font-size: 40px;\n      margin-bottom: 24px;\n    }\n\n    @include mobile {\n      font-size: 24px;\n      margin-bottom: 16px;\n      max-width: 420px;\n    }\n  }\n}\n",".slider {\noverflow: hidden;\nposition: relative;\n\n  // &__container {\n  //   display: none;\n  // }\n\n  @include mobile {\n    padding-bottom: 20px;\n  }\n\n  &__list {\n    display: flex;\n    padding: 0;\n    margin: 0 -16px;\n  }\n\n  &__item {\n    padding: 0 16px;\n    flex-grow: 0;\n    flex-shrink: 0;\n    max-width: 25%;\n\n    @include laptop {\n      max-width: 30%;\n    }\n\n    @include tablet {\n      max-width: 25%;\n    }\n\n    @include mobile {\n      max-width: 100%;\n    }\n  }\n\n  &__item_active {\n    max-width: 50%;\n\n    @include laptop {\n      max-width: 40%;\n    }\n    @include tablet {\n      max-width: 50%;\n    }\n  }\n\n  &__arrow {\n    position: absolute;\n    border: none;\n    bottom: 25%;\n    width: 66px;\n    height: 8px;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    transition: opacity 0.3s linear;\n\n    @include laptop {\n      bottom: 12%;\n    }\n    @include tablet {\n      width: 40px;\n      bottom: 25%;\n    }\n    @include mobile {\n      bottom: 0;\n    }\n\n    &:hover {\n      opacity: 0.8;\n    }\n    &:active {\n      opacity: 0.6;\n    }\n\n    &_left {\n      left: 8%;\n      background-position: left;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='65' height='8' viewBox='0 0 65 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM65 3.5L1 3.5V4.5L65 4.5V3.5Z' fill='%23F6F3E3'/%3E%3C/svg%3E%0A\");\n\n      @include mobile {\n        left: 0;\n      }\n    }\n\n    &_right {\n      right: 8%;\n      background-position: right;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='65' height='8' viewBox='0 0 65 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M64.3536 3.64645C64.5488 3.84171 64.5488 4.15829 64.3536 4.35355L61.1716 7.53553C60.9763 7.7308 60.6597 7.7308 60.4645 7.53553C60.2692 7.34027 60.2692 7.02369 60.4645 6.82843L63.2929 4L60.4645 1.17157C60.2692 0.976311 60.2692 0.659728 60.4645 0.464466C60.6597 0.269204 60.9763 0.269204 61.1716 0.464466L64.3536 3.64645ZM0 3.5L64 3.5V4.5L0 4.5L0 3.5Z' fill='%23F6F3E3'/%3E%3C/svg%3E%0A\");\n\n      @include mobile {\n        right: 0;\n      }\n    }\n  }\n}\n",".price {\n  padding: 62px 0;\n\n  @include tablet {\n    padding: 40px 0;\n  }\n  @include mobile {\n    padding: 32px 0;\n  }\n\n  // .price__title\n\n  &__title {\n    font-size: 40px;\n    line-height: 1.2;\n    text-transform: uppercase;\n    margin-bottom: 16px;\n\n    @include tablet {\n      font-size: 32px;\n    }\n    @include mobile {\n      font-size: 20px;\n      margin-bottom: 8px;\n    }\n  }\n\n  // .price__tegline\n\n  &__tegline {\n    margin-bottom: 40px;\n\n    @include mobile {\n      font-size: 12px;\n    }\n  }\n\n  // .price__wrapper-content\n\n  &__wrapper-content {\n    display: flex;\n    gap: 32px;\n\n    &::before {\n      content: '';\n      flex-basis: 50%;\n      background-image: url('./../img/price_bg.jpeg');\n      background-position: top;\n      background-repeat: no-repeat;\n      background-size: cover;\n\n      @include tablet {\n        content: none;\n      }\n    }\n  }\n\n  // .price__content\n\n  &__content {\n    flex-basis: 50%;\n\n    @include tablet {\n      flex-basis: 100%;\n    }\n  }\n\n  // .price__list\n\n  &__list {\n    margin-bottom: 62px;\n\n    @include tablet {\n      margin-bottom: 40px;\n    }\n    @include mobile {\n      margin-bottom: 24px;\n    }\n  }\n\n  // .price__item\n\n  &__item {\n    display: flex;\n    justify-content: space-between;\n    font-size: 14px;\n    padding-bottom: 7px;\n    border-bottom: 1px solid #BFBDB2;\n    margin-bottom: 24px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    @include mobile {\n      font-size: 12px;\n      padding-bottom: 6px;\n      margin-bottom: 16px;\n      line-height: 1.2;\n    }\n  }\n\n  // price__item-count\n\n  &__item-count {\n    white-space: nowrap;\n  }\n\n  // .price__item-title\n\n  &__item-title {\n    text-transform: uppercase;\n  }\n}\n\n",".about {\n  padding: 62px 0;\n\n  @include tablet {\n    padding: 40px 0;\n  }\n  @include mobile {\n    padding: 32px 0;\n  }\n\n  // .abaut__title\n\n  &__title {\n    font-weight: 400;\n    font-size: 40px;\n    line-height: 120%;\n    margin-bottom: 24px;\n    text-transform: uppercase;\n    max-width: 693px;\n\n    @include tablet {\n      font-size: 32px;\n    }\n\n    @include mobile {\n      font-size: 20px;\n      margin-bottom: 16px;\n    }\n  }\n\n  // .abaut__description\n\n  &__description {\n    line-height: 150%;\n    color: $grey-text  !important;\n    margin-bottom: 72px;\n    max-width: 693px;\n\n    @include laptop {\n      margin-bottom: 46px;\n    }\n    @include tablet {\n      margin-bottom: 32px;\n      font-size: 16px;\n    }\n    @include mobile {\n      font-size: 12px;\n    }\n  }\n\n  // .about__list\n\n  &__list {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));\n    gap: 24px;\n\n    @include laptop {\n      grid-template-columns: repeat(auto-fill, minmax(287px, 1fr));\n    }\n    @include tablet {\n      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    }\n    @include mobile {\n      grid-template-columns: minmax(272px, 1fr);\n    }\n  }\n\n  // .aboute__item\n\n  &__item {\n    padding: 6px 0 6px 96px;\n    background-repeat: no-repeat;\n    background-position: left;\n    background-size: 80px;\n    min-height: 80px;\n\n    // .aboute__item_top\n    &_top {\n      background-image: url(\"./../img/top.svg\");\n    }\n\n    // .aboute__item_master\n    &_master {\n      background-image: url(\"./../img/master.svg\");\n    }\n    \n    // .aboute__item_guarantee\n\n    &_guarantee {\n      background-image: url(\"./../img/guarantee.svg\");\n    }\n\n    @include laptop {\n      padding-top: 96px;\n      background-position: top left;\n      padding-left: 0;\n    }\n    @include tablet {\n      padding-left: 96px;\n      padding-top: 0;\n      background-position: left;\n    }\n    @include mobile {\n      background-size: 64px;\n      min-height: 64px;\n      padding-left: 72px;\n    }\n  }\n\n\n\n  // .about__item-title\n\n  &__item-title {\n    font-size: 22px;\n    line-height: 120%;\n    text-transform: uppercase;\n    margin-bottom: 8px;\n\n    @include tablet {\n      font-size: 16px;\n    }\n  }\n\n  // .about__item-descripyion\n\n  &__item-descripyion {\n    font-size: 16px;\n    line-height: 130%;\n    color: $grey-text;\n\n    @include mobile {\n      font-size: 12px;\n    }\n  }\n\n\n}",".reserve {\n  padding-top: 62px 0 124px;\n\n  @include tablet {\n    padding: 40px 0 80px;\n  }\n  @include mobile {\n    padding: 32px 0 34px;\n  }\n\n  // .reserve__title\n\n  &__title {\n    font-weight: 400;\n    font-size: 40px;\n    line-height: 120%;\n    text-transform: uppercase;\n    margin-bottom: 24px;\n\n    @include tablet {\n      font-size: 32px;\n    }\n  }\n\n  // .reserve__list\n\n  &__list {\n    margin-bottom: 72px;\n    padding-left: 24px;\n  }\n\n  // .reserve__item\n\n  &__item {\n    font-weight: 400;\n    line-height: 150%;\n    color: $grey-text;\n    margin-bottom: 8px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  // .reserve__form-container\n\n  &__form-container {\n    display: flex;\n    flex-direction: column;\n    gap: 72px;\n\n    @include tablet {\n      gap: 40px;\n    }\n    @include mobile {\n      gap: 32px;\n    }\n  }\n\n  // .reserve__fieldset\n\n  &__fieldset {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0;\n    border: none;\n    gap: 8px;\n\n    @include mobile {\n      gap: 4px;\n    }\n\n    &_last {\n      flex-direction: column;\n      gap: 24px;\n\n      @include mobile {\n        gap: 20px;\n      }\n    }\n  }\n\n  // .reserve__legend\n\n  &__legend {\n    font-weight: 400;\n    font-size: 22px;\n    line-height: 100%;\n    text-transform: uppercase;\n    margin-bottom: 24px;\n\n    @include tablet {\n      font-size: 16px;\n    }\n  }\n\n\n  // .reserve__btn\n\n  &__btn {\n    margin-top: 40px;\n  }\n}\n\n",".radio {\n\n  // .radio__input\n\n  &__input {\n    position: absolute;\n    appearance: none;\n\n    &:focus + .radio__label,\n    &:checked + .radio__label {\n      color: #241D1C;\n      background-color: #F6F3E3;\n    }\n    &:disabled + .radio__label {\n      opacity: 0.3;\n    }\n  }\n\n\n  // .radio__label\n\n  &__label {\n    display: inline-block;\n    font-size: 14px;\n    line-height: 100%;\n    text-transform: uppercase;\n    border: 1px solid #BFBDB2;\n    border-radius: 36px;\n    padding: 16px 24px;\n    cursor: pointer;\n    transition: all .3s ease-in-out;\n\n    @include tablet {\n      font-size: 12px;\n      padding: 12px 16px;\n    }\n\n\n\n    &:hover:not(:disabled) {\n      color: #EFE7BE;\n    }\n\n    // .radio__label_spec\n    &_spec {\n      padding-left: 52px;\n      background-image: (--bg-image);\n      background-repeat: no-repeat;\n      background-size: 36px;\n      background-position: 8px;\n\n      @include tablet {\n        background-size: 24px;\n        padding-left: 42px;\n      }\n    }\n  }\n}\n\n\n",".footer {\n  margin-top: 32px;\n\n  // .footer_copiright\n\n  &_copiright {\n    font-size: 12px;\n    line-height: 100%;\n    padding-bottom: 24px;\n  }\n\n  // .footer__wrapper\n\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 1px solid #BFBDB2;\n    padding-top: 16px;\n    padding-bottom: 40px;\n\n    @include mobile {\n      flex-direction: column;\n      align-items: flex-start;\n    }\n  }\n\n  // .footer__logo\n\n  &__logo {\n  }\n\n  // .footer__navigation\n\n  &__navigation {\n\n\n  }\n\n  // .footer__list\n\n  &__list {\n    font-size: 12px;\n    line-height: 100%;\n\n    @include mobile {\n      font-size: 10px;\n    }\n\n\n  }\n\n  // .foter__nav_list\n\n  &__nav_list {\n\n    @include mobile {\n      flex-direction: column;\n      gap: 16px;\n      margin: 32px 0;\n    }\n  }\n\n  // .footer__item\n\n  &__item {\n    margin-bottom: 7px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n}\n\n",null,"@import '~normalize.css';\n@import 'style/fonts';\n@import 'style/var';\n@import 'style/default';\n@import 'style/preload';\n@import 'style/header';\n@import 'style/nav';\n@import 'style/hero';\n@import 'style/slider';\n@import 'style/price';\n@import 'style/about';\n@import 'style/reserve';\n@import 'style/radio';\n@import 'style/footer';\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./src/img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo01.jpg */ "./src/img/photo01.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo02.jpg */ "./src/img/photo02.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo03.jpg */ "./src/img/photo03.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo04.jpg */ "./src/img/photo04.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo05.jpg */ "./src/img/photo05.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo06.jpg */ "./src/img/photo06.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo07.jpg */ "./src/img/photo07.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo08.jpg */ "./src/img/photo08.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n  <title>Chik-chik - BarberShop</title>\n</head>\n\n<body>\n  <header class=\"header\">\n    <div class=\"container\">\n      <div class=\"header__container\">\n        <img class=\"header__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип барбершоп Chik-chik\">\n        <nav class=\"header__navigation nav\">\n          <ul class=\"nav__list\">\n            <li class=\"nav__item\">\n              <a href=\"#price\" class=\"nav__link\">Стоимость услуг</a>\n            </li>\n            <li class=\"nav__item\">\n              <a href=\"#about\" class=\"nav__link\">О нас</a>\n            </li>\n          </ul>\n        </nav>\n        <a href=\"#reserve\" class=\"header__link main-link\">Записаться</a>\n      </div>\n    </div>\n  </header>\n\n  <main>\n    <section class=\"hero\">\n      <div class=\"container\">\n        <h1 class=\"hero__title\">\n          <span class=\"visualy-hidden\">барбершоп Chik-chik</span>\n          <span>Мы создаём искусство, которое не стыдно показать</span>\n        </h1>\n\n        <div class=\"hero__slider slider\">\n          <div class=\"slider__container\">\n            <ul class=\"slider__list\">\n              <li class=\"slider__item\">\n                <img class=\"slider__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"картинка слайдера\">\n              </li>\n              <li class=\"slider__item slider__item_active\">\n                <img class=\"slider__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"картинка слайдера\">\n              </li>\n              <li class=\"slider__item\">\n                <img class=\"slider__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"картинка слайдера\">\n              </li>\n              <li class=\"slider__item\">\n                <img class=\"slider__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"картинка слайдера\">\n              </li>\n              <li class=\"slider__item\">\n                <img class=\"slider__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"картинка слайдера\">\n              </li>\n              <li class=\"slider__item\">\n                <img class=\"slider__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"картинка слайдера\">\n              </li>\n              <li class=\"slider__item\">\n                <img class=\"slider__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"картинка слайдера\">\n              </li>\n              <li class=\"slider__item\">\n                <img class=\"slider__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"картинка слайдера\">\n              </li>\n            </ul>\n\n            <button class=\"slider__arrow slider__arrow_left\" aria-label=\"предыдущий слайд\"></button>\n            <button class=\"slider__arrow slider__arrow_right\" aria-label=\"следующий слайд\"></button>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"price\" class=\"price\">\n      <div class=\"container\">\n        <h2 class=\"price__title\">Стоимость наших услуг</h2>\n        <p class=\"price__tegline\">...бесценна, но всё же</p>\n\n        <div class=\"price__wrapper-content\">\n          <div class=\"price__content\">\n            <ul class=\"price__list\">\n              <li class=\"price__item\">\n                <span class=\"price__item-title\">Стрижка ножницами</span>\n                <span class=\"price__item-count\">2500 руб</span>\n              </li>\n              <li class=\"price__item\">\n                <span class=\"price__item-title\">Стрижка машинкой</span>\n                <span class=\"price__item-count\">2000 руб</span>\n              </li>\n              <li class=\"price__item\">\n                <span class=\"price__item-title\">Стрижка + стрижка бороды</span>\n                <span class=\"price__item-count\">3000 руб</span>\n              </li>\n              <li class=\"price__item\">\n                <span class=\"price__item-title\">Стрижка + моделирование бороды</span>\n                <span class=\"price__item-count\">4000 руб</span>\n              </li>\n              <li class=\"price__item\">\n                <span class=\"price__item-title\">Бритье головы</span>\n                <span class=\"price__item-count\">1500 руб</span>\n              </li>\n              <li class=\"price__item\">\n                <span class=\"price__item-title\">Укладка</span>\n                <span class=\"price__item-count\">1500 руб</span>\n              </li>\n              <li class=\"price__item\">\n                <span class=\"price__item-title\">Оформление бровей</span>\n                <span class=\"price__item-count\">1000 руб</span>\n              </li>\n            </ul>\n\n            <a href=\"#reserve\" class=\"price__link main-link\">Записаться</a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"about\" class=\"about\">\n      <div class=\"container\">\n        <h2 class=\"about__title\">Мы помогаем всем мужчинам выглядеть уверенно</h2>\n\n        <p class=\"about__description\">Сhik chik — это намного больше, чем просто барберная. Это место, где вам помогут\n          найти свой собственный, неповторимый стиль. Стоит довериться нашим мастерам один раз, и, поверьте, новый образ\n          не оставит Вас равнодушным. Мужские стрижки и опасное бритье — это наш профиль, и мы уверены, что наши барберы\n          делают это лучше всех.</p>\n\n        <ul class=\"about__list\">\n          <li class=\"about__item about__item_top\">\n            <h3 class=\"about__item-title\">Топ специалисты</h3>\n            <p class=\"about__item-descripyion\">Мы подстрижем вас на высшем уровне</p>\n          </li>\n\n          <li class=\"about__item about__item_master\">\n            <h3 class=\"about__item-title\">Мастера бород и усов</h3>\n            <p class=\"about__item-descripyion\">Мы заботливо уложим вашу бороду и&nbsp усы</p>\n          </li>\n\n          <li class=\"about__item about__item_guarantee\">\n            <h3 class=\"about__item-title\">Гарантия качества</h3>\n            <p class=\"about__item-descripyion\">Мы используем только профессиональные средства</p>\n          </li>\n        </ul>\n      </div>\n    </section>\n\n    <section id=\"reserve\" class=\"reserve\">\n      <div class=\"container\">\n        <h2 class=\"reserve__title\">Как записаться к нам</h2>\n\n        <ol class=\"reserve__list\">\n          <li class=\"reserve__item\">Выберите услугу, можно выбрать сразу несколько</li>\n          <li class=\"reserve__item\">Выберите специалиста</li>\n          <li class=\"reserve__item\">Выберите удобный день и время</li>\n        </ol>\n\n        <form class=\"reserve__form\">\n          <div class=\"reserve__form-container\">\n            <fieldset class=\"reserve__fieldset reserve__fieldset_service\">\n              <legend class=\"reserve__legend\">Услуга</legend>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"service\">\n                <span class=\"radio__label\">Стрижка ножницами</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"service\">\n                <span class=\"radio__label\">Стрижка машинкой</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"service\">\n                <span class=\"radio__label\">Стрижка + стрижка бороды</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"service\">\n                <span class=\"radio__label\">Стрижка + моделирование бороды</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"service\">\n                <span class=\"radio__label\">Бритье головы</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"service\">\n                <span class=\"radio__label\">Укладка</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"service\">\n                <span class=\"radio__label\">Оформление бровей</span>\n              </label>\n            </fieldset>\n  \n            <fieldset class=\"reserve__fieldset\" name=\"fieldspec\">\n              <legend class=\"reserve__legend\">Специалист</legend>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"spec\">\n                <span class=\"radio__label radio__label_spec radio__label_spec-1\" style=\"--bg-image: url(img/spec-1.png)\">Игорь</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"spec\">\n                <span class=\"radio__label radio__label_spec radio__label_spec-2\">Анатолий</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"spec\">\n                <span class=\"radio__label radio__label_spec radio__label_spec-3\">Руслан</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"spec\">\n                <span class=\"radio__label radio__label_spec radio__label_spec-4\">Михаил</span>\n              </label>\n  \n              <label class=\"radio\">\n                <input class=\"radio__input\" type=\"radio\" name=\"spec\">\n                <span class=\"radio__label radio__label_spec radio__label_spec-5\">Евгений</span>\n              </label>\n            </fieldset>\n  \n            <fieldset class=\"reserve__fieldset reserve__fieldset_last\" name=\"fielddata\">\n              <legend class=\"reserve__legend\">Дата и время</legend>\n  \n              <fieldset class=\"reserve__fieldset reserve__fieldset_sab\" name=\"fieldmonth\">\n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"month\">\n                  <span class=\"radio__label\">Январь</span>\n                </label>\n  \n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"month\">\n                  <span class=\"radio__label\">февраль</span>\n                </label>\n  \n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"month\">\n                  <span class=\"radio__label\">Март</span>\n                </label>\n              </fieldset>\n  \n              <fieldset class=\"reserve__fieldset reserve__fieldset_sab\" name=\"fieldday\">\n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"day\">\n                  <span class=\"radio__label\">18 января</span>\n                </label>\n  \n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"day\">\n                  <span class=\"radio__label\">19 января</span>\n                </label>\n  \n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"day\">\n                  <span class=\"radio__label\">20 января</span>\n                </label>\n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"day\">\n                  <span class=\"radio__label\">21 января</span>\n                </label>\n              </fieldset>\n  \n              <fieldset class=\"reserve__fieldset reserve__fieldset_sab\" name=\"fieldtime\">\n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"time\">\n                  <span class=\"radio__label\">10:00-11:30</span>\n                </label>\n  \n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"time\">\n                  <span class=\"radio__label\">11:30-13:00</span>\n                </label>\n  \n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"time\">\n                  <span class=\"radio__label\">13:00-14:30</span>\n                </label>\n  \n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"time\">\n                  <span class=\"radio__label\">14:30-16:00</span>\n                </label>\n  \n                <label class=\"radio\">\n                  <input class=\"radio__input\" type=\"radio\" name=\"time\">\n                  <span class=\"radio__label\">16:00-17:30</span>\n                </label>\n              </fieldset>\n            </fieldset>\n          </div>\n  \n          <button class=\"reserve__btn main-link\" disabled id=\"btn\">Записаться</button>\n        </form>\n      </div>\n    </section>\n  </main>\n\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"footer__wrapper\">\n        <img class=\"footer__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип барбершоп Chik-chik\">\n\n        <div class=\"footer__navigation nav\">\n          <ul class=\"footer__nav_list nav__list\">\n            <li class=\"nav__item\">\n              <a href=\"#price\" class=\"nav__link\">Стоимость услуг</a>\n            </li>\n            <li class=\"nav__item\">\n              <a href=\"#about\" class=\"nav__link\">О нас</a>\n            </li>\n          </ul>\n        </div>\n\n        <ul class=\"footer__list\">\n          <li class=\"footer__item\">Designer: Anastasia Ilina</li>\n          <li class=\"footer__item\">Developer: Aliaksei Barsukov</li>\n        </ul>\n      </div>\n      <p class=\"footer_copiright\">© chik chik, 2023</p>\n    </div>\n  </footer>\n</body>\n\n</html>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM65 3.5L1 3.5V4.5L65 4.5V3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM65 3.5L1 3.5V4.5L65 4.5V3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM65 3.5L1 3.5V4.5L65 4.5V3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M64.3536 3.64645C64.5488 3.84171 64.5488 4.15829 64.3536 4.35355L61.1716 7.53553C60.9763 7.7308 60.6597 7.7308 60.4645 7.53553C60.2692 7.34027 60.2692 7.02369 60.4645 6.82843L63.2929 4L60.4645 1.17157C60.2692 0.976311 60.2692 0.659728 60.4645 0.464466C60.6597 0.269204 60.9763 0.269204 61.1716 0.464466L64.3536 3.64645ZM0 3.5L64 3.5V4.5L0 4.5L0 3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M64.3536 3.64645C64.5488 3.84171 64.5488 4.15829 64.3536 4.35355L61.1716 7.53553C60.9763 7.7308 60.6597 7.7308 60.4645 7.53553C60.2692 7.34027 60.2692 7.02369 60.4645 6.82843L63.2929 4L60.4645 1.17157C60.2692 0.976311 60.2692 0.659728 60.4645 0.464466C60.6597 0.269204 60.9763 0.269204 61.1716 0.464466L64.3536 3.64645ZM0 3.5L64 3.5V4.5L0 4.5L0 3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg width=%2765%27 height=%278%27 viewBox=%270 0 65 8%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M64.3536 3.64645C64.5488 3.84171 64.5488 4.15829 64.3536 4.35355L61.1716 7.53553C60.9763 7.7308 60.6597 7.7308 60.4645 7.53553C60.2692 7.34027 60.2692 7.02369 60.4645 6.82843L63.2929 4L60.4645 1.17157C60.2692 0.976311 60.2692 0.659728 60.4645 0.464466C60.6597 0.269204 60.9763 0.269204 61.1716 0.464466L64.3536 3.64645ZM0 3.5L64 3.5V4.5L0 4.5L0 3.5Z%27 fill=%27%23F6F3E3%27/%3E%3C/svg%3E%0A";

/***/ }),

/***/ "./src/fonts/raleway-v28-latin-regular.woff":
/*!**************************************************!*\
  !*** ./src/fonts/raleway-v28-latin-regular.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/raleway-v28-latin-regular.woff";

/***/ }),

/***/ "./src/fonts/raleway-v28-latin-regular.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/raleway-v28-latin-regular.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/raleway-v28-latin-regular.woff2";

/***/ }),

/***/ "./src/img/guarantee.svg":
/*!*******************************!*\
  !*** ./src/img/guarantee.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/guarantee.svg";

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo.svg";

/***/ }),

/***/ "./src/img/master.svg":
/*!****************************!*\
  !*** ./src/img/master.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/master.svg";

/***/ }),

/***/ "./src/img/photo01.jpg":
/*!*****************************!*\
  !*** ./src/img/photo01.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/photo01.jpg";

/***/ }),

/***/ "./src/img/photo02.jpg":
/*!*****************************!*\
  !*** ./src/img/photo02.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/photo02.jpg";

/***/ }),

/***/ "./src/img/photo03.jpg":
/*!*****************************!*\
  !*** ./src/img/photo03.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/photo03.jpg";

/***/ }),

/***/ "./src/img/photo04.jpg":
/*!*****************************!*\
  !*** ./src/img/photo04.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/photo04.jpg";

/***/ }),

/***/ "./src/img/photo05.jpg":
/*!*****************************!*\
  !*** ./src/img/photo05.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/photo05.jpg";

/***/ }),

/***/ "./src/img/photo06.jpg":
/*!*****************************!*\
  !*** ./src/img/photo06.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/photo06.jpg";

/***/ }),

/***/ "./src/img/photo07.jpg":
/*!*****************************!*\
  !*** ./src/img/photo07.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/photo07.jpg";

/***/ }),

/***/ "./src/img/photo08.jpg":
/*!*****************************!*\
  !*** ./src/img/photo08.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/photo08.jpg";

/***/ }),

/***/ "./src/img/price_bg.jpeg":
/*!*******************************!*\
  !*** ./src/img/price_bg.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/price_bg.jpeg";

/***/ }),

/***/ "./src/img/top.svg":
/*!*************************!*\
  !*** ./src/img/top.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/top.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider.js */ "./src/modules/slider.js");
/* harmony import */ var _modules_initService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/initService.js */ "./src/modules/initService.js");
/* harmony import */ var _modules_initReserve_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/initReserve.js */ "./src/modules/initReserve.js");





var init = function init() {
  (0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_2__.slider)();
  (0,_modules_initService_js__WEBPACK_IMPORTED_MODULE_3__.initService)();
  (0,_modules_initReserve_js__WEBPACK_IMPORTED_MODULE_4__.initReserve)();
};
init();
window.addEventListener('DOMContentLoaded', init);
})();

/******/ })()
;
//# sourceMappingURL=main.4ec3c93d876774192532.js.map