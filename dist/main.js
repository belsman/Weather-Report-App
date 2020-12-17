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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/weatherappmodel */ \"./src/models/weatherappmodel.js\");\n/* harmony import */ var _views_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/navigation */ \"./src/views/navigation.js\");\n/* harmony import */ var _views_weather_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/weather_report */ \"./src/views/weather_report.js\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    const root = document.querySelector('div#content');\r\n    root.innerHTML = (0,_views_navigation__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\r\n    _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.load('london').then(result => {\r\n        const parseResult = _models_weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.parseData(result);\r\n        root.insertAdjacentHTML('beforeend', (0,_views_weather_report__WEBPACK_IMPORTED_MODULE_2__.default)(parseResult));\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst api = {\r\n  async load(location) {\r\n    const key = '7408c907ee2383a4a8b85544374aab3d';\r\n    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;\r\n\r\n    try {\r\n        const response = await fetch(endpoint, {mode: 'cors'});\r\n        return response.json();\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n  },\r\n\r\n  parseData(data) {\r\n    const result = Object.create(null);\r\n\r\n    result['searchLocation'] = data['name'];\r\n    result['temperature'] = data['main']['temp'];\r\n    result['weatherClass'] = data['weather'][0]['main'];\r\n    result['windDirection'] = data['wind']['deg'];\r\n    result['windSpeed'] = data['wind']['speed']\r\n    result['pressure'] = data['main']['pressure'];\r\n    result['humidity'] = data['main']['humidity'];\r\n    result['sunRise'] = this.convertunixTime(data['sys']['sunrise']);\r\n    result['sunSet'] = this.convertunixTime(data['sys']['sunset']);\r\n    result['countryCode'] = data['sys']['country'];\r\n\r\n    return result;\r\n  },\r\n\r\n  convertunixTime(count) {\r\n    const time = new Date(count * 1000);\r\n    return time.toLocaleTimeString();\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\r\n\n\n//# sourceURL=webpack://weather-app/./src/models/weatherappmodel.js?");

/***/ }),

/***/ "./src/views/navigation.js":
/*!*********************************!*\
  !*** ./src/views/navigation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\r\n<header>\r\n<nav>\r\n    <h3>Weather App</h3>\r\n    <div>\r\n        <form action=\"\" name=\"searchLocation\">\r\n            <input type=\"search\" name=\"search-location\" id=\"search-location\" placeholder=\"Search City\" size=\"30\" required >\r\n            <button type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>\r\n</header>\r\n`);\n\n//# sourceURL=webpack://weather-app/./src/views/navigation.js?");

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