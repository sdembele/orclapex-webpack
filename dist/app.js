/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

eval("var app = {};\n\n(function (app) {\n  app.username = apex.item('P9999_USERNAME').getValue();\n\n  app.sayHello = function () {\n    apex.message.showPageSuccess(\"Thanks \".concat(app.username));\n  };\n\n  app.nestedNS = {\n    xyz: function xyz(a) {\n      alert('Hello ' + a);\n    }\n  };\n})(window.app = window.app || {});\n\n//# sourceURL=webpack://www/./js/app.js?");

/***/ }),

/***/ "./js/page0001.js":
/*!************************!*\
  !*** ./js/page0001.js ***!
  \************************/
/***/ (() => {

eval("var page0001 = {};\n\n(function (page0001) {\n  page0001.name = 'Souleman';\n\n  page0001.sayHello = function () {\n    apex.message.showPageSuccess(\"hello \".concat(page0001.name));\n  };\n\n  page0001.nestedNS = {\n    xyz: function xyz() {\n      alert('Good Bye ' + page0001.name);\n    }\n  };\n})(window.page0001 = window.page0001 || {});\n\n//# sourceURL=webpack://www/./js/page0001.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./js/page0001.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/app.js"]();
/******/ 	
/******/ })()
;