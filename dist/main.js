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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _weatherappmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherappmodel */ \"./src/weatherappmodel.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    _weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.load('jos').then(result => {\r\n        const parseResult = _weatherappmodel__WEBPACK_IMPORTED_MODULE_0__.default.parseData(result);\r\n        console.log(parseResult);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\nconsole.log((0,_app__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherappmodel.js":
/*!********************************!*\
  !*** ./src/weatherappmodel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst api = {\r\n  async load(location) {\r\n    const key = '7408c907ee2383a4a8b85544374aab3d';\r\n    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;\r\n\r\n    try {\r\n        const response = await fetch(endpoint, {mode: 'cors'});\r\n        return response.json();\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n  },\r\n\r\n  parseData(data) {\r\n    const result = Object.create(null);\r\n\r\n    result['location'] = data['name'];\r\n    result['temperature'] = data['main']['temp'];\r\n    result['weatherClass'] = data['weather'][0]['main'];\r\n    result['windDirection'] = data['wind']['deg'];\r\n    result['windSpeed'] = data['wind']['speed']\r\n    result['pressure'] = data['main']['pressure'];\r\n    result['humidity'] = data['main']['humidity'];\r\n    result['sunRise'] = data['sys']['sunrise'];\r\n    result['sunSet'] = data['sys']['sunset'];\r\n    result['countryCode'] = data['sys']['country'];\r\n\r\n    return result;\r\n  },\r\n\r\n  weatherDataUnits() {\r\n    const measuremetUnit = {\r\n      'windDirection': 'degrees',\r\n      'pressure': 'hpa',\r\n      'humidity': '%',\r\n      'windSpeed': 'm/s'\r\n    };\r\n    return measuremetUnit;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\r\n\n\n//# sourceURL=webpack://weather-app/./src/weatherappmodel.js?");

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