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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n  \\r\\nli {\\r\\n  padding: 0.7rem 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  border: 1px solid black;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 1rem;\\r\\n}\\r\\n\\r\\nform {\\r\\n  border-radius: 5px;\\r\\n  display: flex;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nnav input {\\r\\n  padding: 0.3rem 0.5rem;\\r\\n  border: 1px solid #777;\\r\\n}\\r\\n\\r\\nnav button {\\r\\n  border: none;\\r\\n  color: #fff;\\r\\n  background-color: #0275d8;\\r\\n}\\r\\n\\r\\nnav input:focus,\\r\\nnav button:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#weather-report-card {\\r\\n  background-color: #fff;\\r\\n  width: 50%;\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.weather-report-header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.weather-summary {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem 0;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.weather-summary-class {\\r\\n  font-style: italic;\\r\\n  display: block;\\r\\n  margin: 0.3rem 0;\\r\\n}\\r\\n\\r\\n.location-icon-wrapper {\\r\\n  display: block;\\r\\n  margin-left: 1.5rem;\\r\\n}\\r\\n\\r\\n.location-icon-wrapper i {\\r\\n  color: #0275d8;\\r\\n}\\r\\n\\r\\n.weather-data {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/weatherappmodel */ \"./src/models/weatherappmodel.js\");\n/* harmony import */ var _views_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/navigation */ \"./src/views/navigation.js\");\n/* harmony import */ var _views_weather_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/weather_report */ \"./src/views/weather_report.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    const root = document.querySelector('div#content');\r\n\r\n    root.innerHTML = (0,_views_navigation__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\r\n    _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.load('london').then(result => {\r\n        const parseResult = _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.parseData(result);\r\n        root.insertAdjacentHTML('beforeend', (0,_views_weather_report__WEBPACK_IMPORTED_MODULE_2__.default)(parseResult));\r\n    });\r\n\r\n    const searchLocationForm = document.searchLocationForm;\r\n\r\n    searchLocationForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        const weatherContainer = document.querySelector('div#weather-report-card');\r\n        weatherContainer.remove();\r\n        let searchTerm = e.target.elements['search-location'].value;\r\n        _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.load(searchTerm)\r\n          .then( result => {\r\n            const parseResult = _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.parseData(result);\r\n            \r\n            root.insertAdjacentHTML('beforeend', (0,_views_weather_report__WEBPACK_IMPORTED_MODULE_2__.default)(parseResult));\r\n          });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\nconsole.log((0,_app__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/models/weatherappmodel.js":
/*!***************************************!*\
  !*** ./src/models/weatherappmodel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst api = {\r\n  async load(location) {\r\n    const key = '7408c907ee2383a4a8b85544374aab3d';\r\n    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;\r\n\r\n    try {\r\n        const response = await fetch(endpoint, {mode: 'cors'});\r\n        return response.json();\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n  },\r\n\r\n  parseData(data) {\r\n    const result = Object.create(null);\r\n\r\n    result['searchLocation'] = data['name'];\r\n    result['temperature'] = this.convertKelvinToCelcius(data['main']['temp']);\r\n    result['weatherClass'] = data['weather'][0]['main'];\r\n    result['windDirection'] = data['wind']['deg'];\r\n    result['windSpeed'] = data['wind']['speed']\r\n    result['pressure'] = data['main']['pressure'];\r\n    result['humidity'] = data['main']['humidity'];\r\n    result['sunRise'] = this.convertunixTime(data['sys']['sunrise']);\r\n    result['sunSet'] = this.convertunixTime(data['sys']['sunset']);\r\n    result['countryCode'] = data['sys']['country'];\r\n\r\n    return result;\r\n  },\r\n\r\n  convertunixTime(count) {\r\n    const time = new Date(count * 1000);\r\n    return time.toLocaleTimeString();\r\n  },\r\n\r\n  convertKelvinToCelcius(kelvinUnit) {\r\n    return (kelvinUnit - 273.15).toFixed(1);\r\n  },\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\r\n\n\n//# sourceURL=webpack://weather-app/./src/models/weatherappmodel.js?");

/***/ }),

/***/ "./src/views/navigation.js":
/*!*********************************!*\
  !*** ./src/views/navigation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\r\n<header>\r\n<nav>\r\n    <h3>Weather App</h3>\r\n    <div>\r\n        <form action=\"\" name=\"searchLocationForm\">\r\n            <input type=\"search\" name=\"search-location\" id=\"search-location\" placeholder=\"Search City\" size=\"30\" required >\r\n            <button type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>\r\n</header>\r\n`);\n\n//# sourceURL=webpack://weather-app/./src/views/navigation.js?");

/***/ }),

/***/ "./src/views/weather_report.js":
/*!*************************************!*\
  !*** ./src/views/weather_report.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((data) => {\r\n    const { countryCode, temperature, weatherClass, \r\n        pressure, windSpeed, windDirection, humidity, \r\n        sunRise, sunSet, searchLocation } = data;\r\n        \r\n    let template = `<div id=\"weather-report-card\">\r\n    <div class=\"weather-report-header\">\r\n        <h1>${searchLocation}, ${countryCode}</h1>\r\n        <span class=\"location-icon-wrapper\"><i class='fas fa-map-marker-alt'></i></span>\r\n    </div>\r\n    <div class=\"weather-summary\">\r\n        <div>\r\n            <span class=\"weather-summary-temperature\">\r\n                <span id=\"temperature-value\">${temperature}</span> &#8451; <input type=\"checkbox\" name=\"\" id=\"temperature-unit-toggler\">\r\n            </span><br>\r\n            <span class=\"weather-summary-class\">${weatherClass}</span>\r\n        </div>\r\n        <span class=\"weather-class-icon\"><i class=\"fas fa-cloud\"></i></span>\r\n    </div>\r\n    <ul>\r\n        <li class=\"weather-data\">\r\n            <span class=\"measuring-tool-icon\">Pressure <i class=\"fas fa-thermometer-quarter\"></i></span>\r\n            <span class=\"weather-data-value\">${pressure} hpa</span>\r\n        </li>\r\n        <li class=\"weather-data\">\r\n            <span class=\"measuring-tool-icon\">Wind speed <i class='fas fa-wind'></i></span>\r\n            <span class=\"weather-data-value\">${windSpeed} m/s</span>\r\n        </li>\r\n        <li class=\"weather-data\">\r\n            <span class=\"measuring-tool-icon\">Wind direction <i class=\"far fa-compass\"></i></span>\r\n            <span class=\"weather-data-value\">${windDirection} degrees</span>\r\n        </li>\r\n        <li class=\"weather-data\">\r\n            <span class=\"measuring-tool-icon\">Humidity <i class=\"fas fa-water\"></i></span>\r\n            <span class=\"weather-data-value\">${humidity} %</span>\r\n        </li>\r\n        <li class=\"weather-data\">\r\n            <span class=\"measuring-tool-icon\">Sunrise <i class='far fa-clock'></i></span>\r\n            <span class=\"weather-data-value\">${sunRise}</span>\r\n        </li>\r\n        <li class=\"weather-data\">\r\n            <span class=\"measuring-tool-icon\">Sunset <i class='far fa-clock'></i></span>\r\n            <span class=\"weather-data-value\">${sunSet}</span>\r\n        </li>\r\n    </ul>\r\n    </div>`;\r\n\r\n    return template;\r\n});\n\n//# sourceURL=webpack://weather-app/./src/views/weather_report.js?");

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