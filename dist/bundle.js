/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  padding: 0.7rem 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  border: 1px solid black;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\nform {\\r\\n  border-radius: 5px;\\r\\n  display: flex;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nnav input {\\r\\n  padding: 0.3rem 0.5rem;\\r\\n  border: 1px solid #777;\\r\\n}\\r\\n\\r\\nnav button {\\r\\n  border: none;\\r\\n  color: #fff;\\r\\n  background-color: #0275d8;\\r\\n}\\r\\n\\r\\nnav input:focus,\\r\\nnav button:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#weather-report-card {\\r\\n  background-color: #fff;\\r\\n  width: 50%;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n#temperature-value {\\r\\n  font-size: 2rem;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  vertical-align: bottom;\\r\\n}\\r\\n\\r\\n.weather-report-header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.weather-summary {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem 0;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.weather-summary-class {\\r\\n  font-style: italic;\\r\\n  display: block;\\r\\n  margin: 0.3rem 0;\\r\\n}\\r\\n\\r\\n.location-icon-wrapper {\\r\\n  display: block;\\r\\n  margin-left: 1.5rem;\\r\\n}\\r\\n\\r\\n.location-icon-wrapper i {\\r\\n  color: #0275d8;\\r\\n}\\r\\n\\r\\n.weather-data {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.not-found {\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  position: absolute;\\r\\n  text-align: center;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n/* == Misc */\\r\\n.loader {\\r\\n  position: absolute;\\r\\n  top: 35%;\\r\\n  left: 45%;\\r\\n  border: 16px solid #f3f3f3;\\r\\n  border-radius: 50%;\\r\\n  border-top: 16px solid #3498db;\\r\\n  width: 120px;\\r\\n  height: 120px;\\r\\n  -webkit-animation: spin 2s linear infinite; /* Safari */\\r\\n  animation: spin 2s linear infinite;\\r\\n}\\r\\n\\r\\n/* Safari */\\r\\n@-webkit-keyframes spin {\\r\\n  0% { -webkit-transform: rotate(0deg); }\\r\\n  100% { -webkit-transform: rotate(360deg); }\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  0% { transform: rotate(0deg); }\\r\\n  100% { transform: rotate(360deg); }\\r\\n}\\r\\n\\r\\n/* == Toggler == */\\r\\n.switch {\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n  width: 50px;\\r\\n  height: 28px;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\nlabel.switch input {\\r\\n  opacity: 0;\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n}\\r\\n\\r\\n.slider {\\r\\n  position: absolute;\\r\\n  cursor: pointer;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background-color: #ccc;\\r\\n  -webkit-transition: 0.4s;\\r\\n  transition: 0.4s;\\r\\n}\\r\\n\\r\\n.slider::before {\\r\\n  position: absolute;\\r\\n  content: \\\"\\\";\\r\\n  height: 22px;\\r\\n  width: 22px;\\r\\n  left: 2px;\\r\\n  bottom: 2px;\\r\\n  background-color: white;\\r\\n  -webkit-transition: 0.4s;\\r\\n  transition: 0.4s;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\ninput:checked + .slider {\\r\\n  background-color: #2196f3;\\r\\n}\\r\\n\\r\\ninput:focus + .slider {\\r\\n  box-shadow: 0 0 1px #2196f3;\\r\\n}\\r\\n\\r\\ninput:checked + .slider::before {\\r\\n  -webkit-transform: translateX(22px);\\r\\n  -ms-transform: translateX(22px);\\r\\n  transform: translateX(22px);\\r\\n}\\r\\n\\r\\n.slider.round {\\r\\n  border-radius: 30px;\\r\\n}\\r\\n\\r\\n.slider.round::before {\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.to-celcius,\\r\\n.to-fahrenheit {\\r\\n  display: inline-block;\\r\\n  position: absolute;\\r\\n  top: 20%;\\r\\n}\\r\\n\\r\\n.to-celcius {\\r\\n  left: 10%;\\r\\n}\\r\\n\\r\\n.to-fahrenheit {\\r\\n  right: 10%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/weatherappmodel */ \"./src/models/weatherappmodel.js\");\n/* harmony import */ var _views_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/navigation */ \"./src/views/navigation.js\");\n/* harmony import */ var _views_weather_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/weather_report */ \"./src/views/weather_report.js\");\n/* harmony import */ var _views_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/spinner */ \"./src/views/spinner.js\");\n/* harmony import */ var _views_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/not_found */ \"./src/views/not_found.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nconst togglerFunctionHandler = (event) => {\n  const { toggleState } = event.target.dataset;\n  const temperatureValueElement = document.querySelector('span#temperature-value');\n  const temperatureValue = Number(temperatureValueElement.textContent);\n\n  if (toggleState === '1') {\n    temperatureValueElement.textContent = _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.celciusToFahrenheit(temperatureValue);\n    event.target.dataset.toggleState = '0';\n  } else {\n    temperatureValueElement.textContent = _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.fahrenheitToCelcius(temperatureValue);\n    event.target.dataset.toggleState = '1';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const root = document.querySelector('div#content');\n\n  root.innerHTML = (0,_views_navigation__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n  _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.load('london').then(result => {\n    const parseResult = _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.parseData(result);\n    root.insertAdjacentHTML('beforeend', (0,_views_weather_report__WEBPACK_IMPORTED_MODULE_2__.default)(parseResult));\n\n    const toggleCelciusToFahrenheitBtn = document.querySelector('input[type=\"checkbox\"]');\n    toggleCelciusToFahrenheitBtn.addEventListener('click', togglerFunctionHandler);\n  });\n\n  const { searchLocationForm } = document;\n  searchLocationForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const weatherContainer = document.querySelector('div#weather-report-card');\n    if (weatherContainer) weatherContainer.remove();\n    root.insertAdjacentHTML('beforeend', (0,_views_spinner__WEBPACK_IMPORTED_MODULE_3__.default)());\n    const searchTerm = e.target.elements['search-location'].value;\n    _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.load(searchTerm)\n      .then(result => {\n        const parseResult = _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.parseData(result);\n        const spinnerElement = document.querySelector('div.loader');\n        spinnerElement.remove();\n        root.insertAdjacentHTML('beforeend', (0,_views_weather_report__WEBPACK_IMPORTED_MODULE_2__.default)(parseResult));\n        const toggleCelciusToFahrenheitBtn = document.querySelector('input[type=\"checkbox\"]');\n        toggleCelciusToFahrenheitBtn.addEventListener('click', togglerFunctionHandler);\n      })\n      .catch(() => {\n        const spinnerElement = document.querySelector('div.loader');\n        const notFoundElement = document.querySelector('div.not-found');\n        if (notFoundElement) notFoundElement.remove();\n        spinnerElement.remove();\n        root.insertAdjacentHTML('beforeend', (0,_views_not_found__WEBPACK_IMPORTED_MODULE_4__.default)(searchTerm));\n      });\n  });\n});\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n(0,_app__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/models/weatherappmodel.js":
/*!***************************************!*\
  !*** ./src/models/weatherappmodel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst api = {\n  weatherConditions: {\n    clouds: 'fas fa-cloud',\n    rain: 'fas fa-cloud-showers-heavy',\n    haze: 'fas fa-smog',\n    clear: 'far fa-sun',\n    snow: 'far fa-snowflake',\n    dust: 'fas fa-bolt',\n  },\n\n  getWeatherIcon(condition) {\n    return this.weatherConditions[condition.toLowerCase()];\n  },\n\n  async load(location) {\n    const key = '7408c907ee2383a4a8b85544374aab3d';\n    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;\n\n    const response = await fetch(endpoint, { mode: 'cors' });\n    return response.json();\n  },\n\n  parseData(data) {\n    const result = Object.create(null);\n\n    result.searchLocation = data.name;\n    result.temperature = this.convertKelvinToCelcius(data.main.temp);\n    result.weatherClass = data.weather[0].main;\n    result.windDirection = data.wind.deg;\n    result.windSpeed = data.wind.speed;\n    result.pressure = data.main.pressure;\n    result.humidity = data.main.humidity;\n    result.sunRise = this.convertunixTime(data.sys.sunrise);\n    result.sunSet = this.convertunixTime(data.sys.sunset);\n    result.countryCode = data.sys.country;\n    result.weatherClassIcon = this.getWeatherIcon(result.weatherClass);\n\n    return result;\n  },\n\n  convertunixTime(count) {\n    const time = new Date(count * 1000);\n    return time.toLocaleTimeString();\n  },\n\n  convertKelvinToCelcius(kelvinUnit) {\n    return (kelvinUnit - 273.15).toFixed(1);\n  },\n\n  celciusToFahrenheit(celciusValue) {\n    const result = celciusValue * 1.8 + 32;\n    return result.toFixed(1);\n  },\n\n  fahrenheitToCelcius(fahrenheitValue) {\n    const result = (fahrenheitValue - 32) / 1.8;\n    return result.toFixed(1);\n  },\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n\n//# sourceURL=webpack://weather-app/./src/models/weatherappmodel.js?");

/***/ }),

/***/ "./src/views/navigation.js":
/*!*********************************!*\
  !*** ./src/views/navigation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\n<header>\n<nav>\n    <h3>Weather App</h3>\n    <div>\n        <form action=\"\" name=\"searchLocationForm\">\n            <input type=\"search\" name=\"search-location\" id=\"search-location\" placeholder=\"Search City\" size=\"30\" required >\n            <button type=\"submit\">Search</button>\n        </form>\n    </div>\n</nav>\n</header>\n`);\n\n//# sourceURL=webpack://weather-app/./src/views/navigation.js?");

/***/ }),

/***/ "./src/views/not_found.js":
/*!********************************!*\
  !*** ./src/views/not_found.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((item) => `\n<div class=\"not-found\">\n  <h3>${item} Not Found</h3>\n</div>\n`);\n\n//# sourceURL=webpack://weather-app/./src/views/not_found.js?");

/***/ }),

/***/ "./src/views/spinner.js":
/*!******************************!*\
  !*** ./src/views/spinner.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => '<div class=\"loader\"></div>');\n\n//# sourceURL=webpack://weather-app/./src/views/spinner.js?");

/***/ }),

/***/ "./src/views/weather_report.js":
/*!*************************************!*\
  !*** ./src/views/weather_report.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({\n  countryCode, temperature, weatherClass,\n  pressure, windSpeed, windDirection, humidity,\n  sunRise, sunSet, searchLocation, weatherClassIcon,\n}) => {\n  const template = `<div id=\"weather-report-card\">\n    <div class=\"weather-report-header\">\n        <h1>${searchLocation}, ${countryCode}</h1>\n        <span class=\"location-icon-wrapper\"><i class='fas fa-map-marker-alt'></i></span>\n    </div>\n    <div class=\"weather-summary\">\n        <div>\n            <span class=\"weather-summary-temperature\">\n                <span id=\"temperature-value\">\n                  ${temperature}\n                </span>\n                <label class=\"switch\">\n                    <input type=\"checkbox\" name=\"temperature-unit\" id=\"temperature-unit-toggler\" data-toggle-state=\"1\" >\n                    <span class=\"slider round\">\n                        <span class=\"to-celcius\">&#8451</span>\n                        <span class=\"to-fahrenheit\">&#8457</span>\n                    </span>\n                </label> \n            </span>\n        </div>\n        <div>\n            <span class=\"weather-class-icon\"><i class=\"${weatherClassIcon}\"></i></span><br>\n            <span class=\"weather-summary-class\">${weatherClass}</span>\n        </div>\n        \n    </div>\n    <ul>\n        <li class=\"weather-data\">\n            <span class=\"measuring-tool-icon\">Pressure <i class=\"fas fa-thermometer-quarter\"></i></span>\n            <span class=\"weather-data-value\">${pressure} hpa</span>\n        </li>\n        <li class=\"weather-data\">\n            <span class=\"measuring-tool-icon\">Wind speed <i class='fas fa-wind'></i></span>\n            <span class=\"weather-data-value\">${windSpeed} m/s</span>\n        </li>\n        <li class=\"weather-data\">\n            <span class=\"measuring-tool-icon\">Wind direction <i class=\"far fa-compass\"></i></span>\n            <span class=\"weather-data-value\">${windDirection} degrees</span>\n        </li>\n        <li class=\"weather-data\">\n            <span class=\"measuring-tool-icon\">Humidity <i class=\"fas fa-water\"></i></span>\n            <span class=\"weather-data-value\">${humidity} %</span>\n        </li>\n        <li class=\"weather-data\">\n            <span class=\"measuring-tool-icon\">Sunrise <i class='far fa-clock'></i></span>\n            <span class=\"weather-data-value\">${sunRise}</span>\n        </li>\n        <li class=\"weather-data\">\n            <span class=\"measuring-tool-icon\">Sunset <i class='far fa-clock'></i></span>\n            <span class=\"weather-data-value\">${sunSet}</span>\n        </li>\n    </ul>\n    </div>`;\n\n  return template;\n});\n\n//# sourceURL=webpack://weather-app/./src/views/weather_report.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;