module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/elements/layout/container.js":
/*!*************************************************!*\
  !*** ./components/elements/layout/container.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Container = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1qewh8d0",
  label: "Container"
})("border:blue solid 4px;max-width:", function (props) {
  return props.theme.type.width.maxWidth;
}, ";width:", function (props) {
  return props.theme.type.width.width;
}, ";margin:0 auto;padding:0 1em;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHNEIiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogYmx1ZSBzb2xpZCA0cHg7XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50eXBlLndpZHRoLm1heFdpZHRofTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHlwZS53aWR0aC53aWR0aH07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDFlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ== */"));

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/elements/typography/title.js":
/*!*************************************************!*\
  !*** ./components/elements/typography/title.js ***!
  \*************************************************/
/*! exports provided: Copy, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Copy", function() { return Copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/theme */ "./utils/theme.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);





var defaultSettings = function defaultSettings(props) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("margin:0;font-size:1rem;line-height:calc(1rem * 1.5);@media (min-width:", _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].type.breakpoints.desktop, "){font-size:1.17rem;line-height:calc(1.17rem * 1.5);}label:defaultSettings;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS90aXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLb0MiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9lbGVtZW50cy90eXBvZ3JhcGh5L3RpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi91dGlscy90aGVtZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBwcm9wcyA9PiBjc3NgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogY2FsYygxcmVtICogMS41KTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUudHlwZS5icmVha3BvaW50cy5kZXNrdG9wfSkge1xuICAgIGZvbnQtc2l6ZTogMS4xN3JlbTtcbiAgICBsaW5lLWhlaWdodDogY2FsYygxLjE3cmVtICogMS41KTtcbiAgfVxuYDtcblxuY29uc3QgZHluYW1pY1NldHRpbmdzID0gcHJvcHMgPT4gY3NzYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcy5zaXplID8gYCR7cHJvcHMuc2l6ZX1yZW1gIDogYGB9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcy5zaXplID8gYGNhbGMoJHtwcm9wcy5zaXplfXJlbSAqIDEuNSlgIDogYGB9O1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS50eXBlLmJyZWFrcG9pbnRzLmRlc2t0b3B9KSB7XG4gICAgZm9udC1zaXplOiAke3Byb3BzLnNpemVEZXNrdG9wID8gYCR7cHJvcHMuc2l6ZURlc2t0b3B9cmVtYCA6IGBgfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcy5zaXplRGVza3RvcFxuICAgICAgPyBgY2FsYygke3Byb3BzLnNpemVEZXNrdG9wfXJlbSAqIDEuNSlgXG4gICAgICA6IGBgfTtcbiAgfVxuYDtcblxuY29uc3QgQ29weSA9IHN0eWxlZC5wYFxuICAke2RlZmF1bHRTZXR0aW5nc31cbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICR7ZHluYW1pY1NldHRpbmdzfVxuICBjb2xvcjogaG90cGluaztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmV4cG9ydCB7IENvcHksIFRpdGxlIH07XG4iXX0= */"))
  );
};

var dynamicSettings = function dynamicSettings(props) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("margin:0;font-size:", props.size ? "".concat(props.size, "rem") : "", ";line-height:", props.size ? "calc(".concat(props.size, "rem * 1.5)") : "", ";@media (min-width:", _utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].type.breakpoints.desktop, "){font-size:", props.sizeDesktop ? "".concat(props.sizeDesktop, "rem") : "", ";line-height:", props.sizeDesktop ? "calc(".concat(props.sizeDesktop, "rem * 1.5)") : "", ";}label:dynamicSettings;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS90aXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlb0MiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9lbGVtZW50cy90eXBvZ3JhcGh5L3RpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi91dGlscy90aGVtZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBwcm9wcyA9PiBjc3NgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogY2FsYygxcmVtICogMS41KTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUudHlwZS5icmVha3BvaW50cy5kZXNrdG9wfSkge1xuICAgIGZvbnQtc2l6ZTogMS4xN3JlbTtcbiAgICBsaW5lLWhlaWdodDogY2FsYygxLjE3cmVtICogMS41KTtcbiAgfVxuYDtcblxuY29uc3QgZHluYW1pY1NldHRpbmdzID0gcHJvcHMgPT4gY3NzYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcy5zaXplID8gYCR7cHJvcHMuc2l6ZX1yZW1gIDogYGB9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcy5zaXplID8gYGNhbGMoJHtwcm9wcy5zaXplfXJlbSAqIDEuNSlgIDogYGB9O1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS50eXBlLmJyZWFrcG9pbnRzLmRlc2t0b3B9KSB7XG4gICAgZm9udC1zaXplOiAke3Byb3BzLnNpemVEZXNrdG9wID8gYCR7cHJvcHMuc2l6ZURlc2t0b3B9cmVtYCA6IGBgfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcy5zaXplRGVza3RvcFxuICAgICAgPyBgY2FsYygke3Byb3BzLnNpemVEZXNrdG9wfXJlbSAqIDEuNSlgXG4gICAgICA6IGBgfTtcbiAgfVxuYDtcblxuY29uc3QgQ29weSA9IHN0eWxlZC5wYFxuICAke2RlZmF1bHRTZXR0aW5nc31cbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICR7ZHluYW1pY1NldHRpbmdzfVxuICBjb2xvcjogaG90cGluaztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmV4cG9ydCB7IENvcHksIFRpdGxlIH07XG4iXX0= */"))
  );
};

var Copy = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "e1ygf6pl0",
  label: "Copy"
})(defaultSettings, " margin:0 0 1rem 0;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS90aXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnFCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS90aXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGhlbWVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgZGVmYXVsdFNldHRpbmdzID0gcHJvcHMgPT4gY3NzYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMXJlbSAqIDEuNSk7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLnR5cGUuYnJlYWtwb2ludHMuZGVza3RvcH0pIHtcbiAgICBmb250LXNpemU6IDEuMTdyZW07XG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4xN3JlbSAqIDEuNSk7XG4gIH1cbmA7XG5cbmNvbnN0IGR5bmFtaWNTZXR0aW5ncyA9IHByb3BzID0+IGNzc2BcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6ICR7cHJvcHMuc2l6ZSA/IGAke3Byb3BzLnNpemV9cmVtYCA6IGBgfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMuc2l6ZSA/IGBjYWxjKCR7cHJvcHMuc2l6ZX1yZW0gKiAxLjUpYCA6IGBgfTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUudHlwZS5icmVha3BvaW50cy5kZXNrdG9wfSkge1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcy5zaXplRGVza3RvcCA/IGAke3Byb3BzLnNpemVEZXNrdG9wfXJlbWAgOiBgYH07XG4gICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMuc2l6ZURlc2t0b3BcbiAgICAgID8gYGNhbGMoJHtwcm9wcy5zaXplRGVza3RvcH1yZW0gKiAxLjUpYFxuICAgICAgOiBgYH07XG4gIH1cbmA7XG5cbmNvbnN0IENvcHkgPSBzdHlsZWQucGBcbiAgJHtkZWZhdWx0U2V0dGluZ3N9XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICAke2R5bmFtaWNTZXR0aW5nc31cbiAgY29sb3I6IGhvdHBpbms7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5leHBvcnQgeyBDb3B5LCBUaXRsZSB9O1xuIl19 */"));

var Title = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h1", {
  target: "e1ygf6pl1",
  label: "Title"
})(dynamicSettings, " color:hotpink;margin-bottom:1rem;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS90aXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3VCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS90aXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGhlbWVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgZGVmYXVsdFNldHRpbmdzID0gcHJvcHMgPT4gY3NzYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMXJlbSAqIDEuNSk7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLnR5cGUuYnJlYWtwb2ludHMuZGVza3RvcH0pIHtcbiAgICBmb250LXNpemU6IDEuMTdyZW07XG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4xN3JlbSAqIDEuNSk7XG4gIH1cbmA7XG5cbmNvbnN0IGR5bmFtaWNTZXR0aW5ncyA9IHByb3BzID0+IGNzc2BcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6ICR7cHJvcHMuc2l6ZSA/IGAke3Byb3BzLnNpemV9cmVtYCA6IGBgfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMuc2l6ZSA/IGBjYWxjKCR7cHJvcHMuc2l6ZX1yZW0gKiAxLjUpYCA6IGBgfTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUudHlwZS5icmVha3BvaW50cy5kZXNrdG9wfSkge1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcy5zaXplRGVza3RvcCA/IGAke3Byb3BzLnNpemVEZXNrdG9wfXJlbWAgOiBgYH07XG4gICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMuc2l6ZURlc2t0b3BcbiAgICAgID8gYGNhbGMoJHtwcm9wcy5zaXplRGVza3RvcH1yZW0gKiAxLjUpYFxuICAgICAgOiBgYH07XG4gIH1cbmA7XG5cbmNvbnN0IENvcHkgPSBzdHlsZWQucGBcbiAgJHtkZWZhdWx0U2V0dGluZ3N9XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICAke2R5bmFtaWNTZXR0aW5nc31cbiAgY29sb3I6IGhvdHBpbms7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5leHBvcnQgeyBDb3B5LCBUaXRsZSB9O1xuIl19 */"));



/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/coryp/Desktop/nextjs-test/components/header.js";


var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "navigation");
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./container/app.js":
/*!**************************!*\
  !*** ./container/app.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/theme */ "./utils/theme.js");
/* harmony import */ var _fullpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fullpage */ "./container/fullpage.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var emotion_normalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! emotion-normalize */ "emotion-normalize");
/* harmony import */ var emotion_normalize__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(emotion_normalize__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_elements_typography_title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/elements/typography/title */ "./components/elements/typography/title.js");





var _jsxFileName = "/Users/coryp/Desktop/nextjs-test/container/app.js";









var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(emotion_theming__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
        theme: _utils_theme__WEBPACK_IMPORTED_MODULE_6__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["Global"], {
        styles:
        /*#__PURE__*/
        Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(emotion_normalize__WEBPACK_IMPORTED_MODULE_11___default.a, " *,*:before,*:after{box-sizing:border-box;}h1{font-size:16px;}label:App;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbnRhaW5lci9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3FCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbnRhaW5lci9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3V0aWxzL3RoZW1lXCI7XG5pbXBvcnQgRnVsbFBhZ2UgZnJvbSBcIi4vZnVsbHBhZ2VcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJlbW90aW9uLXRoZW1pbmdcIjtcbmltcG9ydCBlbW90aW9uTm9ybWFsaXplIGZyb20gXCJlbW90aW9uLW5vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgQ29weSwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9lbGVtZW50cy90eXBvZ3JhcGh5L3RpdGxlXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEdsb2JhbFxuICAgICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgICAgJHtlbW90aW9uTm9ybWFsaXplfVxuICAgICAgICAgICAgKixcbiAgICAgICAgICAgICo6YmVmb3JlLFxuICAgICAgICAgICAgKjphZnRlciB7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjJlbVwiIH19PlxuICAgICAgICAgIDxUaXRsZSBzaXplPVwiMS42XCIgc2l6ZURlc2t0b3A9XCIzLjJcIj5cbiAgICAgICAgICAgIFNoZXZ5IHdpdGggRW1vdGlvbiBhbmQgUmVhY3QhXG4gICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPENvcHk+XG4gICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIHNpdFxuICAgICAgICAgIGZ1Z2lhdCBhdHF1ZSBjb25zZWN0ZXR1ciBlaXVzIGRvbG9yaWJ1cywgYWQsIGFsaXF1aWQgbmloaWwgY3VtXG4gICAgICAgICAgbGFib3Jpb3NhbSBpbXBlZGl0IG1pbnVzIHJlcHJlaGVuZGVyaXQgZGljdGEgYSBkdWNpbXVzIGludmVudG9yZSBxdWFtXG4gICAgICAgICAgcGFyaWF0dXIgcHJvdmlkZW50P1xuICAgICAgICA8L0NvcHk+XG4gICAgICAgIDxDb3B5PlxuICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBzaXRcbiAgICAgICAgICBmdWdpYXQgYXRxdWUgY29uc2VjdGV0dXIgZWl1cyBkb2xvcmlidXMsIGFkLCBhbGlxdWlkIG5paGlsIGN1bVxuICAgICAgICAgIGxhYm9yaW9zYW0gaW1wZWRpdCBtaW51cyByZXByZWhlbmRlcml0IGRpY3RhIGEgZHVjaW11cyBpbnZlbnRvcmUgcXVhbVxuICAgICAgICAgIHBhcmlhdHVyIHByb3ZpZGVudD9cbiAgICAgICAgPC9Db3B5PlxuICAgICAgICA8RnVsbFBhZ2U+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9GdWxsUGFnZT5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          fontSize: "2em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_typography_title__WEBPACK_IMPORTED_MODULE_12__["Title"], {
        size: "1.6",
        sizeDesktop: "3.2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Shevy with Emotion and React!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_typography_title__WEBPACK_IMPORTED_MODULE_12__["Copy"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit fugiat atque consectetur eius doloribus, ad, aliquid nihil cum laboriosam impedit minus reprehenderit dicta a ducimus inventore quam pariatur provident?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_typography_title__WEBPACK_IMPORTED_MODULE_12__["Copy"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit fugiat atque consectetur eius doloribus, ad, aliquid nihil cum laboriosam impedit minus reprehenderit dicta a ducimus inventore quam pariatur provident?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fullpage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./container/fullpage.js":
/*!*******************************!*\
  !*** ./container/fullpage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./components/header.js");





var _jsxFileName = "/Users/coryp/Desktop/nextjs-test/container/fullpage.js";



var FullPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FullPage, _Component);

  function FullPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FullPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FullPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("mounted");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), this.props.children);
    }
  }]);

  return FullPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FullPage);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/app */ "./container/app.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_elements_layout_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/elements/layout/container */ "./components/elements/layout/container.js");
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cowsay-browser */ "cowsay-browser");
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cowsay_browser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/coryp/Desktop/nextjs-test/pages/index.js";






var basicStyle =  false ? undefined : {
  name: "18drzhd-basicStyle",
  styles: "padding:2em 0;label:basicStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFzQiIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbnRhaW5lci9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lclwiO1xuaW1wb3J0IGNvd3NheSBmcm9tIFwiY293c2F5LWJyb3dzZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzLCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IGJhc2ljU3R5bGUgPSBjc3NgXG4gIHBhZGRpbmc6IDJlbSAwO1xuYDtcblxuY29uc3QgQmFzaWMgPSBzdHlsZWQuZGl2YFxuICAke2Jhc2ljU3R5bGV9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnR5cGUuY29sb3JzLnByaW1hcnl9O1xuICBjb2xvcjogYmx1ZTtcbiAgYm9yZGVyOiBibGFjayBkYXNoZWQgMnB4O1xuYDtcblxuY29uc3QgSG9tZSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UaGlzIHBhZ2UgaGFzIGEgdGl0bGUg8J+klDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCYXNpYz5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgICAgICA8aDI+bWVzc2FnZTwvaDI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9CYXNpYz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxwcmU+e2Nvd3NheS5zYXkoeyB0ZXh0OiBcImhpIHRoZXJlIVwiIH0pfTwvcHJlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcHA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */"
};

var Basic = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e16cafwl0",
  label: "Basic"
})(basicStyle, ";background:", function (props) {
  return props.theme.type.colors.primary;
}, ";color:blue;border:black dashed 2px;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QiIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbnRhaW5lci9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lclwiO1xuaW1wb3J0IGNvd3NheSBmcm9tIFwiY293c2F5LWJyb3dzZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzLCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IGJhc2ljU3R5bGUgPSBjc3NgXG4gIHBhZGRpbmc6IDJlbSAwO1xuYDtcblxuY29uc3QgQmFzaWMgPSBzdHlsZWQuZGl2YFxuICAke2Jhc2ljU3R5bGV9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnR5cGUuY29sb3JzLnByaW1hcnl9O1xuICBjb2xvcjogYmx1ZTtcbiAgYm9yZGVyOiBibGFjayBkYXNoZWQgMnB4O1xuYDtcblxuY29uc3QgSG9tZSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UaGlzIHBhZ2UgaGFzIGEgdGl0bGUg8J+klDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCYXNpYz5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgICAgICA8aDI+bWVzc2FnZTwvaDI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9CYXNpYz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxwcmU+e2Nvd3NheS5zYXkoeyB0ZXh0OiBcImhpIHRoZXJlIVwiIH0pfTwvcHJlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcHA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */"));

var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container_app__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "This page has a title \uD83E\uDD14"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Basic, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_layout_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Home Page"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "message"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_layout_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, cowsay_browser__WEBPACK_IMPORTED_MODULE_5___default.a.say({
    text: "hi there!"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./utils/theme.js":
/*!************************!*\
  !*** ./utils/theme.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme = {
  type: {
    colors: {
      primary: "hotpink"
    },
    fontFamily: {
      sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, "Courier New", monospace'
    },
    fontWeight: {
      normal: 300,
      bold: "bold",
      headings: "bold"
    },
    width: {
      maxWidth: "1200px",
      width: "100%"
    },
    breakpoints: {
      mobileSm: "320px",
      mobile: "375px",
      mobileLg: "414px",
      tablet: "768px",
      desktop: "1024px"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coryp/Desktop/nextjs-test/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "cowsay-browser":
/*!*********************************!*\
  !*** external "cowsay-browser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cowsay-browser");

/***/ }),

/***/ "emotion-normalize":
/*!************************************!*\
  !*** external "emotion-normalize" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-normalize");

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map