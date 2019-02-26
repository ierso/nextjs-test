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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/styled-elements/layout/container.js":
/*!********************************************************!*\
  !*** ./components/styled-elements/layout/container.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);


var Container = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1t6urqk0",
  label: "Container"
})("max-width:", function (props) {
  return props.theme.type.width.maxWidth;
}, ";width:", function (props) {
  return props.theme.type.width.width;
}, ";margin:0 auto;padding:0 1em;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL2xheW91dC9jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRTRCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL2xheW91dC9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnR5cGUud2lkdGgubWF4V2lkdGh9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50eXBlLndpZHRoLndpZHRofTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMWVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIl19 */"));

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/styled-elements/layout/display.js":
/*!******************************************************!*\
  !*** ./components/styled-elements/layout/display.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_style_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/style-utils */ "./utils/style-utils.js");



 // prettier-ignore

var toDisplayCss = function toDisplayCss(hide, show) {
  if (hide) return "display: none;";
  if (typeof show === "boolean" || !show) show = "inline";
  return "display: ".concat(show, ";");
}; // prettier-ignore


var getCss = function getCss(_ref) {
  var hide = _ref.hide,
      show = _ref.show,
      theme = _ref.theme;

  var _toMediaObj = Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["toMediaObj"])(hide || false),
      xsHide = _toMediaObj.xs,
      smHide = _toMediaObj.sm,
      mdHide = _toMediaObj.md,
      lgHide = _toMediaObj.lg,
      xlHide = _toMediaObj.xl;

  var _toMediaObj2 = Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["toMediaObj"])(show || false),
      xsShow = _toMediaObj2.xs,
      smShow = _toMediaObj2.sm,
      mdShow = _toMediaObj2.md,
      lgShow = _toMediaObj2.lg,
      xlShow = _toMediaObj2.xl;

  var breakpoints = [[smHide, smShow], [mdHide, mdShow], [lgHide, lgShow], [xlHide, xlShow]];
  var isHideFirst = Boolean(xsHide);

  if (!isHideFirst) {
    breakpoints.some(function (_ref2) {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          bHide = _ref3[0],
          bShow = _ref3[1];

      if (bHide || bShow) {
        isHideFirst = !!bShow;
        return true;
      }

      return false;
    });
  }

  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(xsShow ? toDisplayCss(false, xsShow) : isHideFirst ? 'display: none;' : null, " ", (smHide || smShow) && "".concat(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["mq"][1], "{ ").concat(toDisplayCss(smHide, smShow), " }"), " ", (mdHide || mdShow) && "".concat(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["mq"][2], "{ ").concat(toDisplayCss(mdHide, mdShow), " }"), " ", (lgHide || lgShow) && "".concat(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["mq"][3], "{ ").concat(toDisplayCss(lgHide, lgShow), " }"), " ", (xlHide || xlShow) && "".concat(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["mq"][4], "{ ").concat(toDisplayCss(xlHide, xlShow), " }"), "label:getCss;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL2xheW91dC9kaXNwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCWSIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9jb21wb25lbnRzL3N0eWxlZC1lbGVtZW50cy9sYXlvdXQvZGlzcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IG1xLCB0b01lZGlhT2JqIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3N0eWxlLXV0aWxzXCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgdG9EaXNwbGF5Q3NzID0gKGhpZGUsIHNob3cpID0+IHtcbiAgaWYgKGhpZGUpIHJldHVybiBcImRpc3BsYXk6IG5vbmU7XCI7XG4gIGlmICh0eXBlb2Ygc2hvdyA9PT0gXCJib29sZWFuXCIgfHwgIXNob3cpIHNob3cgPSBcImlubGluZVwiO1xuICByZXR1cm4gYGRpc3BsYXk6ICR7c2hvd307YDtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgZ2V0Q3NzID0gKHsgaGlkZSwgc2hvdywgdGhlbWUgfSkgPT4ge1xuICBjb25zdCB7IHhzOiB4c0hpZGUsIHNtOiBzbUhpZGUsIG1kOiBtZEhpZGUsIGxnOiBsZ0hpZGUsIHhsOiB4bEhpZGUgfSA9IHRvTWVkaWFPYmooaGlkZSB8fCBmYWxzZSk7XG4gIGNvbnN0IHsgeHM6IHhzU2hvdywgc206IHNtU2hvdywgbWQ6IG1kU2hvdywgbGc6IGxnU2hvdywgeGw6IHhsU2hvdyB9ID0gdG9NZWRpYU9iaihzaG93IHx8IGZhbHNlKTtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBbW3NtSGlkZSwgc21TaG93XSwgW21kSGlkZSwgbWRTaG93XSwgW2xnSGlkZSwgbGdTaG93XSwgW3hsSGlkZSwgeGxTaG93XV07XG5cbiAgbGV0IGlzSGlkZUZpcnN0ID0gQm9vbGVhbih4c0hpZGUpO1xuICBpZiAoIWlzSGlkZUZpcnN0KSB7XG4gICAgYnJlYWtwb2ludHMuc29tZSgoW2JIaWRlLCBiU2hvd10pID0+IHtcbiAgICAgIGlmIChiSGlkZSB8fCBiU2hvdykge1xuICAgICAgICBpc0hpZGVGaXJzdCA9ICEhYlNob3c7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICAke3hzU2hvdyA/IHRvRGlzcGxheUNzcyhmYWxzZSwgeHNTaG93KSA6IGlzSGlkZUZpcnN0ID8gJ2Rpc3BsYXk6IG5vbmU7JyA6IG51bGx9XG4gICAgJHsoc21IaWRlIHx8IHNtU2hvdykgJiYgYCR7bXFbMV19eyAke3RvRGlzcGxheUNzcyhzbUhpZGUsIHNtU2hvdyl9IH1gfVxuICAgICR7KG1kSGlkZSB8fCBtZFNob3cpICYmIGAke21xWzJdfXsgJHt0b0Rpc3BsYXlDc3MobWRIaWRlLCBtZFNob3cpfSB9YH1cbiAgICAkeyhsZ0hpZGUgfHwgbGdTaG93KSAmJiBgJHttcVszXX17ICR7dG9EaXNwbGF5Q3NzKGxnSGlkZSwgbGdTaG93KX0gfWB9XG4gICAgJHsoeGxIaWRlIHx8IHhsU2hvdykgJiYgYCR7bXFbNF19eyAke3RvRGlzcGxheUNzcyh4bEhpZGUsIHhsU2hvdyl9IH1gfVxuICBgO1xufVxuXG5jb25zdCBEaXNwbGF5ID0gc3R5bGVkLnNwYW5gXG4gICR7cHJvcHMgPT4gZ2V0Q3NzKHByb3BzKX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5O1xuIl19 */"))
  );
};

var Display = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("span", {
  target: "e6cahi00",
  label: "Display"
})(function (props) {
  return getCss(props);
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL2xheW91dC9kaXNwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDMkIiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9zdHlsZWQtZWxlbWVudHMvbGF5b3V0L2Rpc3BsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBtcSwgdG9NZWRpYU9iaiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9zdHlsZS11dGlsc1wiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IHRvRGlzcGxheUNzcyA9IChoaWRlLCBzaG93KSA9PiB7XG4gIGlmIChoaWRlKSByZXR1cm4gXCJkaXNwbGF5OiBub25lO1wiO1xuICBpZiAodHlwZW9mIHNob3cgPT09IFwiYm9vbGVhblwiIHx8ICFzaG93KSBzaG93ID0gXCJpbmxpbmVcIjtcbiAgcmV0dXJuIGBkaXNwbGF5OiAke3Nob3d9O2A7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGdldENzcyA9ICh7IGhpZGUsIHNob3csIHRoZW1lIH0pID0+IHtcbiAgY29uc3QgeyB4czogeHNIaWRlLCBzbTogc21IaWRlLCBtZDogbWRIaWRlLCBsZzogbGdIaWRlLCB4bDogeGxIaWRlIH0gPSB0b01lZGlhT2JqKGhpZGUgfHwgZmFsc2UpO1xuICBjb25zdCB7IHhzOiB4c1Nob3csIHNtOiBzbVNob3csIG1kOiBtZFNob3csIGxnOiBsZ1Nob3csIHhsOiB4bFNob3cgfSA9IHRvTWVkaWFPYmooc2hvdyB8fCBmYWxzZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gW1tzbUhpZGUsIHNtU2hvd10sIFttZEhpZGUsIG1kU2hvd10sIFtsZ0hpZGUsIGxnU2hvd10sIFt4bEhpZGUsIHhsU2hvd11dO1xuXG4gIGxldCBpc0hpZGVGaXJzdCA9IEJvb2xlYW4oeHNIaWRlKTtcbiAgaWYgKCFpc0hpZGVGaXJzdCkge1xuICAgIGJyZWFrcG9pbnRzLnNvbWUoKFtiSGlkZSwgYlNob3ddKSA9PiB7XG4gICAgICBpZiAoYkhpZGUgfHwgYlNob3cpIHtcbiAgICAgICAgaXNIaWRlRmlyc3QgPSAhIWJTaG93O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgJHt4c1Nob3cgPyB0b0Rpc3BsYXlDc3MoZmFsc2UsIHhzU2hvdykgOiBpc0hpZGVGaXJzdCA/ICdkaXNwbGF5OiBub25lOycgOiBudWxsfVxuICAgICR7KHNtSGlkZSB8fCBzbVNob3cpICYmIGAke21xWzFdfXsgJHt0b0Rpc3BsYXlDc3Moc21IaWRlLCBzbVNob3cpfSB9YH1cbiAgICAkeyhtZEhpZGUgfHwgbWRTaG93KSAmJiBgJHttcVsyXX17ICR7dG9EaXNwbGF5Q3NzKG1kSGlkZSwgbWRTaG93KX0gfWB9XG4gICAgJHsobGdIaWRlIHx8IGxnU2hvdykgJiYgYCR7bXFbM119eyAke3RvRGlzcGxheUNzcyhsZ0hpZGUsIGxnU2hvdyl9IH1gfVxuICAgICR7KHhsSGlkZSB8fCB4bFNob3cpICYmIGAke21xWzRdfXsgJHt0b0Rpc3BsYXlDc3MoeGxIaWRlLCB4bFNob3cpfSB9YH1cbiAgYDtcbn1cblxuY29uc3QgRGlzcGxheSA9IHN0eWxlZC5zcGFuYFxuICAke3Byb3BzID0+IGdldENzcyhwcm9wcyl9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheTtcbiJdfQ== */"));

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./components/styled-elements/layout/flex.js":
/*!***************************************************!*\
  !*** ./components/styled-elements/layout/flex.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_style_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/style-utils */ "./utils/style-utils.js");



var _jsxFileName = "/Users/coryp/Desktop/nextjs-test/components/styled-elements/layout/flex.js";





var getCss = function getCss(props) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])("display:", props.inline ? "inline-flex" : "flex", ";flex-direction:", props.flexDirection, ";flex-wrap:", props.flexWrap, ";justify-content:", props.justifyContent, ";align-items:", props.alignItems, ";align-content:", props.alignContent, ";", Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_6__["withMediaStyles"])(props), "label:getCss;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL2xheW91dC9mbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVZIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL2xheW91dC9mbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5pbXBvcnQge1xuICBtZWRpYVN0eWxlc1Byb3BUeXBlcyxcbiAgd2l0aE1lZGlhU3R5bGVzXG59IGZyb20gXCIuLi8uLi8uLi91dGlscy9zdHlsZS11dGlsc1wiO1xuXG5jb25zdCBnZXRDc3MgPSBwcm9wcyA9PiB7XG4gIHJldHVybiBjc3NgXG4gICAgZGlzcGxheTogJHtwcm9wcy5pbmxpbmUgPyBcImlubGluZS1mbGV4XCIgOiBcImZsZXhcIn07XG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduSXRlbXN9O1xuICAgIGFsaWduLWNvbnRlbnQ6ICR7cHJvcHMuYWxpZ25Db250ZW50fTtcbiAgICAke3dpdGhNZWRpYVN0eWxlcyhwcm9wcyl9XG4gIGA7XG59O1xuXG5jb25zdCBGbGV4U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBnZXRDc3MocHJvcHMpfTtcbmA7XG5cbmNvbnN0IEZsZXggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIHJldHVybiA8RmxleFN0eWxlZCB7Li4ucHJvcHN9IC8+O1xufTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICBmbGV4RGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicm93XCIsXG4gICAgXCJyb3ctcmV2ZXJzZVwiLFxuICAgIFwiY29sdW1uXCIsXG4gICAgXCJjb2x1bW4tcmV2ZXJzZVwiXG4gIF0pLFxuICBmbGV4V3JhcDogUHJvcFR5cGVzLm9uZU9mKFtcIm5vd3JhcFwiLCBcIndyYXBcIiwgXCJ3cmFwLXJldmVyc2VcIl0pLFxuICBqdXN0aWZ5Q29udGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcImZsZXgtc3RhcnRcIixcbiAgICBcImZsZXgtZW5kXCIsXG4gICAgXCJjZW50ZXJcIixcbiAgICBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcInNwYWNlLWFyb3VuZFwiXG4gIF0pLFxuICBhbGlnbkl0ZW1zOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RyZXRjaFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJmbGV4LWVuZFwiLFxuICAgIFwiYmFzZWxpbmVcIlxuICBdKSxcbiAgYWxpZ25Db250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwic3RyZXRjaFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJmbGV4LWVuZFwiLFxuICAgIFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwic3BhY2UtYXJvdW5kXCJcbiAgXSksXG4gIC4uLm1lZGlhU3R5bGVzUHJvcFR5cGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbGV4O1xuIl19 */"))
  );
};

var FlexStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()("div", {
  target: "eyu8ugl0",
  label: "FlexStyled"
})(function (props) {
  return getCss(props);
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL2xheW91dC9mbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCNkIiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9zdHlsZWQtZWxlbWVudHMvbGF5b3V0L2ZsZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmltcG9ydCB7XG4gIG1lZGlhU3R5bGVzUHJvcFR5cGVzLFxuICB3aXRoTWVkaWFTdHlsZXNcbn0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3N0eWxlLXV0aWxzXCI7XG5cbmNvbnN0IGdldENzcyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIGNzc2BcbiAgICBkaXNwbGF5OiAke3Byb3BzLmlubGluZSA/IFwiaW5saW5lLWZsZXhcIiA6IFwiZmxleFwifTtcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcy5mbGV4RGlyZWN0aW9ufTtcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMuZmxleFdyYXB9O1xuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudH07XG4gICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25JdGVtc307XG4gICAgYWxpZ24tY29udGVudDogJHtwcm9wcy5hbGlnbkNvbnRlbnR9O1xuICAgICR7d2l0aE1lZGlhU3R5bGVzKHByb3BzKX1cbiAgYDtcbn07XG5cbmNvbnN0IEZsZXhTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IGdldENzcyhwcm9wcyl9O1xuYDtcblxuY29uc3QgRmxleCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIDxGbGV4U3R5bGVkIHsuLi5wcm9wc30gLz47XG59O1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJyb3dcIixcbiAgICBcInJvdy1yZXZlcnNlXCIsXG4gICAgXCJjb2x1bW5cIixcbiAgICBcImNvbHVtbi1yZXZlcnNlXCJcbiAgXSksXG4gIGZsZXhXcmFwOiBQcm9wVHlwZXMub25lT2YoW1wibm93cmFwXCIsIFwid3JhcFwiLCBcIndyYXAtcmV2ZXJzZVwiXSksXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwiZmxleC1zdGFydFwiLFxuICAgIFwiZmxleC1lbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwic3BhY2UtYXJvdW5kXCJcbiAgXSksXG4gIGFsaWduSXRlbXM6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJzdHJldGNoXCIsXG4gICAgXCJjZW50ZXJcIixcbiAgICBcImZsZXgtc3RhcnRcIixcbiAgICBcImZsZXgtZW5kXCIsXG4gICAgXCJiYXNlbGluZVwiXG4gIF0pLFxuICBhbGlnbkNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJzdHJldGNoXCIsXG4gICAgXCJjZW50ZXJcIixcbiAgICBcImZsZXgtc3RhcnRcIixcbiAgICBcImZsZXgtZW5kXCIsXG4gICAgXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJzcGFjZS1hcm91bmRcIlxuICBdKSxcbiAgLi4ubWVkaWFTdHlsZXNQcm9wVHlwZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsZXg7XG4iXX0= */"));

var Flex = function Flex(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FlexStyled, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

var propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  inline: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["row", "row-reverse", "column", "column-reverse"]),
  flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["flex-start", "flex-end", "center", "space-between", "space-around"]),
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["stretch", "center", "flex-start", "flex-end", "baseline"]),
  alignContent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["stretch", "center", "flex-start", "flex-end", "space-between", "space-around"])
}, _utils_style_utils__WEBPACK_IMPORTED_MODULE_6__["mediaStylesPropTypes"]);

/* harmony default export */ __webpack_exports__["default"] = (Flex);

/***/ }),

/***/ "./components/styled-elements/layout/index.js":
/*!****************************************************!*\
  !*** ./components/styled-elements/layout/index.js ***!
  \****************************************************/
/*! exports provided: Container, Display, Flex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./components/styled-elements/layout/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./components/styled-elements/layout/display.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return _display__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flex */ "./components/styled-elements/layout/flex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _flex__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./components/styled-elements/typography/heading.js":
/*!**********************************************************!*\
  !*** ./components/styled-elements/typography/heading.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_style_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/style-utils */ "./utils/style-utils.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../header */ "./components/header.js");





 // prettier-ignore

var getCss = function getCss(props) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("color:", props.color, ";line-height:", props.lineHeight, ";", props.margin !== undefined && Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_4__["cssSpacing"])('margin', props.margin), "  ", Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_4__["withFont"])(props, 'heading'), " ", Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_4__["withMediaStyles"])(props), "label:getCss;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL3R5cG9ncmFwaHkvaGVhZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhMkIiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9zdHlsZWQtZWxlbWVudHMvdHlwb2dyYXBoeS9oZWFkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5pbXBvcnQge1xuICBmb250UHJvcFR5cGVzLFxuICBjc3NTcGFjaW5nLFxuICB3aXRoRm9udCxcbiAgd2l0aE1lZGlhU3R5bGVzXG59IGZyb20gXCIuLi8uLi8uLi91dGlscy9zdHlsZS11dGlsc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vaGVhZGVyXCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgZ2V0Q3NzID0gcHJvcHMgPT4gY3NzYFxuICBjb2xvcjogJHtwcm9wcy5jb2xvcn07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzLmxpbmVIZWlnaHR9O1xuICAke3Byb3BzLm1hcmdpbiAhPT0gdW5kZWZpbmVkICYmIGNzc1NwYWNpbmcoJ21hcmdpbicsIHByb3BzLm1hcmdpbil9IFxuICAke3dpdGhGb250KHByb3BzLCAnaGVhZGluZycpfVxuICAke3dpdGhNZWRpYVN0eWxlcyhwcm9wcyl9XG5gXG5cbmNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuaDFgXG4gICR7cHJvcHMgPT4gZ2V0Q3NzKHByb3BzKX07XG5gO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsaW5lSGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAuLi5mb250UHJvcFR5cGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIl19 */"))
  );
};

var Heading = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("h1", {
  target: "eueh0ri0",
  label: "Heading"
})(function (props) {
  return getCss(props);
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL3R5cG9ncmFwaHkvaGVhZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL3R5cG9ncmFwaHkvaGVhZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuaW1wb3J0IHtcbiAgZm9udFByb3BUeXBlcyxcbiAgY3NzU3BhY2luZyxcbiAgd2l0aEZvbnQsXG4gIHdpdGhNZWRpYVN0eWxlc1xufSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3R5bGUtdXRpbHNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2hlYWRlclwiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGdldENzcyA9IHByb3BzID0+IGNzc2BcbiAgY29sb3I6ICR7cHJvcHMuY29sb3J9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcy5saW5lSGVpZ2h0fTtcbiAgJHtwcm9wcy5tYXJnaW4gIT09IHVuZGVmaW5lZCAmJiBjc3NTcGFjaW5nKCdtYXJnaW4nLCBwcm9wcy5tYXJnaW4pfSBcbiAgJHt3aXRoRm9udChwcm9wcywgJ2hlYWRpbmcnKX1cbiAgJHt3aXRoTWVkaWFTdHlsZXMocHJvcHMpfVxuYFxuXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkLmgxYFxuICAke3Byb3BzID0+IGdldENzcyhwcm9wcyl9O1xuYDtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLi4uZm9udFByb3BUeXBlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiJdfQ== */"));

var propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
}, _utils_style_utils__WEBPACK_IMPORTED_MODULE_4__["fontPropTypes"]);

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/styled-elements/typography/index.js":
/*!********************************************************!*\
  !*** ./components/styled-elements/typography/index.js ***!
  \********************************************************/
/*! exports provided: Heading, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading */ "./components/styled-elements/typography/heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _heading__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./components/styled-elements/typography/text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/styled-elements/typography/text.js":
/*!*******************************************************!*\
  !*** ./components/styled-elements/typography/text.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_style_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/style-utils */ "./utils/style-utils.js");




 // prettier-ignore

var getCss = function getCss(props) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("color:", props.color, ";line-height:", props.lineHeight, ";", props.margin !== undefined && Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_4__["cssSpacing"])('margin', props.margin), "  ", Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_4__["withFont"])(props, 'text'), " ", Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_4__["withMediaStyles"])(props), "label:getCss;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL3R5cG9ncmFwaHkvdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZMkIiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9zdHlsZWQtZWxlbWVudHMvdHlwb2dyYXBoeS90ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5pbXBvcnQge1xuICBmb250UHJvcFR5cGVzLFxuICBjc3NTcGFjaW5nLFxuICB3aXRoRm9udCxcbiAgd2l0aE1lZGlhU3R5bGVzXG59IGZyb20gXCIuLi8uLi8uLi91dGlscy9zdHlsZS11dGlsc1wiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGdldENzcyA9IHByb3BzID0+IGNzc2BcbiAgY29sb3I6ICR7cHJvcHMuY29sb3J9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcy5saW5lSGVpZ2h0fTtcbiAgJHtwcm9wcy5tYXJnaW4gIT09IHVuZGVmaW5lZCAmJiBjc3NTcGFjaW5nKCdtYXJnaW4nLCBwcm9wcy5tYXJnaW4pfSBcbiAgJHt3aXRoRm9udChwcm9wcywgJ3RleHQnKX1cbiAgJHt3aXRoTWVkaWFTdHlsZXMocHJvcHMpfVxuYFxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxuICAke3Byb3BzID0+IGdldENzcyhwcm9wcyl9O1xuYDtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgLi4uZm9udFByb3BUeXBlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ== */"))
  );
};

var Text = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("p", {
  target: "ede3tmy0",
  label: "Text"
})(function (props) {
  return getCss(props);
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL3R5cG9ncmFwaHkvdGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQnFCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvc3R5bGVkLWVsZW1lbnRzL3R5cG9ncmFwaHkvdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuaW1wb3J0IHtcbiAgZm9udFByb3BUeXBlcyxcbiAgY3NzU3BhY2luZyxcbiAgd2l0aEZvbnQsXG4gIHdpdGhNZWRpYVN0eWxlc1xufSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3R5bGUtdXRpbHNcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBnZXRDc3MgPSBwcm9wcyA9PiBjc3NgXG4gIGNvbG9yOiAke3Byb3BzLmNvbG9yfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMubGluZUhlaWdodH07XG4gICR7cHJvcHMubWFyZ2luICE9PSB1bmRlZmluZWQgJiYgY3NzU3BhY2luZygnbWFyZ2luJywgcHJvcHMubWFyZ2luKX0gXG4gICR7d2l0aEZvbnQocHJvcHMsICd0ZXh0Jyl9XG4gICR7d2l0aE1lZGlhU3R5bGVzKHByb3BzKX1cbmBcbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgJHtwcm9wcyA9PiBnZXRDc3MocHJvcHMpfTtcbmA7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxpbmVIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIC4uLmZvbnRQcm9wVHlwZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */"));

var propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
}, _utils_style_utils__WEBPACK_IMPORTED_MODULE_4__["fontPropTypes"]);

/* harmony default export */ __webpack_exports__["default"] = (Text);

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
/* harmony import */ var _components_styled_elements_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/styled-elements/layout */ "./components/styled-elements/layout/index.js");
/* harmony import */ var _components_styled_elements_typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/styled-elements/typography */ "./components/styled-elements/typography/index.js");





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
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["Global"], {
        styles:
        /*#__PURE__*/
        Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(emotion_normalize__WEBPACK_IMPORTED_MODULE_11___default.a, " *,*:before,*:after{box-sizing:border-box;}html{font-size:", _utils_theme__WEBPACK_IMPORTED_MODULE_6__["default"].type.baseFontSize.htmlSize, ";}body{font-size:1.4rem;}label:App;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbnRhaW5lci9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXFCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbnRhaW5lci9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3V0aWxzL3RoZW1lXCI7XG5pbXBvcnQgRnVsbFBhZ2UgZnJvbSBcIi4vZnVsbHBhZ2VcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJlbW90aW9uLXRoZW1pbmdcIjtcbmltcG9ydCBlbW90aW9uTm9ybWFsaXplIGZyb20gXCJlbW90aW9uLW5vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgRmxleCwgRGlzcGxheSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlZC1lbGVtZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IEhlYWRpbmcsIFRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZWQtZWxlbWVudHMvdHlwb2dyYXBoeVwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICR7ZW1vdGlvbk5vcm1hbGl6ZX1cbiAgICAgICAgICAgICosXG4gICAgICAgICAgICAqOmJlZm9yZSxcbiAgICAgICAgICAgICo6YWZ0ZXIge1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBlLmJhc2VGb250U2l6ZS5odG1sU2l6ZX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIyZW1cIiB9fSAvPlxuICAgICAgICA8RmxleFxuICAgICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgICAgeHM6IFwiZmxleC1kaXJlY3Rpb246IGNvbHVtblwiLFxuICAgICAgICAgICAgbWQ6IFwiZmxleC1kaXJlY3Rpb246IHJvdzsgY29sb3I6IGhvdHBpbmtcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RGlzcGxheSBoaWRlPXt7IHNtOiB0cnVlIH19IHNob3c9e3sgeHM6IHRydWUsIGxnOiB0cnVlIH19PlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNVwiIGg1IGxhc3Qgc3R5bGVzPXt7IHhsOiBcImNvbG9yOiBibHVlO1wiIH19PlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVhc2lcbiAgICAgICAgICAgICAgc2l0IGZ1Z2lhdCBhdHF1ZSBjb25zZWN0ZXR1clxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDwvRGlzcGxheT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgaDIgbGFzdD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBzaXRcbiAgICAgICAgICAgIGZ1Z2lhdCBhdHF1ZSBjb25zZWN0ZXR1clxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBsYXN0IG1lZGl1bT5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWFzaSBzaXRcbiAgICAgICAgICAgIGZ1Z2lhdCBhdHF1ZSBjb25zZWN0ZXR1ciBlaXVzIGRvbG9yaWJ1cywgYWQsIGFsaXF1aWQgbmloaWwgY3VtXG4gICAgICAgICAgICBsYWJvcmlvc2FtIGltcGVkaXQgbWludXMgcmVwcmVoZW5kZXJpdCBkaWN0YSBhIGR1Y2ltdXMgaW52ZW50b3JlXG4gICAgICAgICAgICBxdWFtIHBhcmlhdHVyIHByb3ZpZGVudD9cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvRmxleD5cblxuICAgICAgICA8RnVsbFBhZ2U+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9GdWxsUGFnZT5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          fontSize: "2em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_styled_elements_layout__WEBPACK_IMPORTED_MODULE_12__["Flex"], {
        styles: {
          xs: "flex-direction: column",
          md: "flex-direction: row; color: hotpink"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_styled_elements_layout__WEBPACK_IMPORTED_MODULE_12__["Display"], {
        hide: {
          sm: true
        },
        show: {
          xs: true,
          lg: true
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_styled_elements_typography__WEBPACK_IMPORTED_MODULE_13__["Heading"], {
        as: "h5",
        h5: true,
        last: true,
        styles: {
          xl: "color: blue;"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit fugiat atque consectetur")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_styled_elements_typography__WEBPACK_IMPORTED_MODULE_13__["Heading"], {
        as: "h2",
        h2: true,
        last: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit fugiat atque consectetur"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_styled_elements_typography__WEBPACK_IMPORTED_MODULE_13__["Text"], {
        last: true,
        medium: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit fugiat atque consectetur eius doloribus, ad, aliquid nihil cum laboriosam impedit minus reprehenderit dicta a ducimus inventore quam pariatur provident?")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fullpage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
/* harmony import */ var _components_styled_elements_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styled-elements/layout */ "./components/styled-elements/layout/index.js");
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cowsay-browser */ "cowsay-browser");
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cowsay_browser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/coryp/Desktop/nextjs-test/pages/index.js";






var basicStyle =  false ? undefined : {
  name: "18drzhd-basicStyle",
  styles: "padding:2em 0;label:basicStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFzQiIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbnRhaW5lci9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlZC1lbGVtZW50cy9sYXlvdXRcIjtcbmltcG9ydCBjb3dzYXkgZnJvbSBcImNvd3NheS1icm93c2VyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IGtleWZyYW1lcywgY3NzLCBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5jb25zdCBiYXNpY1N0eWxlID0gY3NzYFxuICBwYWRkaW5nOiAyZW0gMDtcbmA7XG5cbmNvbnN0IEJhc2ljID0gc3R5bGVkLmRpdmBcbiAgJHtiYXNpY1N0eWxlfTtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50eXBlLmNvbG9ycy5wcmltYXJ5fTtcbiAgY29sb3I6IGJsdWU7XG4gIGJvcmRlcjogYmxhY2sgZGFzaGVkIDJweDtcbmA7XG5cbmNvbnN0IEhvbWUgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFwcD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGhpcyBwYWdlIGhhcyBhIHRpdGxlIPCfpJQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QmFzaWM+XG4gICAgICAgIDxDb250YWluZXIgd2lkdGg9e3sgdGVzdDogXCJva2F5XCIgfX0+XG4gICAgICAgICAgPGgxPkhvbWUgUGFnZTwvaDE+XG4gICAgICAgICAgPGgyPm1lc3NhZ2U8L2gyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQmFzaWM+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8cHJlPntjb3dzYXkuc2F5KHsgdGV4dDogXCJoaSB0aGVyZSFcIiB9KX08L3ByZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQXBwPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */"
};

var Basic = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e16cafwl0",
  label: "Basic"
})(basicStyle, ";background:", function (props) {
  return props.theme.type.colors.primary;
}, ";color:blue;border:black dashed 2px;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QiIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbnRhaW5lci9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlZC1lbGVtZW50cy9sYXlvdXRcIjtcbmltcG9ydCBjb3dzYXkgZnJvbSBcImNvd3NheS1icm93c2VyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IGtleWZyYW1lcywgY3NzLCBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5jb25zdCBiYXNpY1N0eWxlID0gY3NzYFxuICBwYWRkaW5nOiAyZW0gMDtcbmA7XG5cbmNvbnN0IEJhc2ljID0gc3R5bGVkLmRpdmBcbiAgJHtiYXNpY1N0eWxlfTtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50eXBlLmNvbG9ycy5wcmltYXJ5fTtcbiAgY29sb3I6IGJsdWU7XG4gIGJvcmRlcjogYmxhY2sgZGFzaGVkIDJweDtcbmA7XG5cbmNvbnN0IEhvbWUgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFwcD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGhpcyBwYWdlIGhhcyBhIHRpdGxlIPCfpJQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QmFzaWM+XG4gICAgICAgIDxDb250YWluZXIgd2lkdGg9e3sgdGVzdDogXCJva2F5XCIgfX0+XG4gICAgICAgICAgPGgxPkhvbWUgUGFnZTwvaDE+XG4gICAgICAgICAgPGgyPm1lc3NhZ2U8L2gyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQmFzaWM+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8cHJlPntjb3dzYXkuc2F5KHsgdGV4dDogXCJoaSB0aGVyZSFcIiB9KX08L3ByZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQXBwPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */"));

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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_elements_layout__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    width: {
      test: "okay"
    },
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
  }, "message"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_elements_layout__WEBPACK_IMPORTED_MODULE_4__["Container"], {
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

/***/ "./utils/style-utils.js":
/*!******************************!*\
  !*** ./utils/style-utils.js ***!
  \******************************/
/*! exports provided: fontPropTypes, withFont, cssSpacing, mediaStylesPropTypes, mq, toMediaObj, withMediaStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontPropTypes", function() { return fontPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFont", function() { return withFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssSpacing", function() { return cssSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaStylesPropTypes", function() { return mediaStylesPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mq", function() { return mq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMediaObj", function() { return toMediaObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMediaStyles", function() { return withMediaStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ "./utils/theme.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);






var _theme$type = _theme__WEBPACK_IMPORTED_MODULE_4__["default"].type,
    breakpoints = _theme$type.breakpoints,
    fontSizes = _theme$type.fontSizes,
    headerSizes = _theme$type.headerSizes;

var mq = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(breakpoints).map(function (bp) {
  return "@media (min-width: ".concat(breakpoints[bp], ")");
});
/**
 * Accept string, trim, return terminated with a semicolon
 * If input string contains all spaces or only ';', return empty string
 */


var ensureSemi = function ensureSemi(val) {
  val = val.trim();
  return val && val !== ";" ? val.slice(-1) === ";" ? val : "".concat(val, ";") : "";
};
/**
 * Accept string or a list of strings (from SC), return a single string
 * Filter, trim, and ensure a semicolon delimiter
 */


var toCssString = function toCssString(val) {
  if (typeof val === "string") return ensureSemi(val);
  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(val)) return "";
  return val.map(function (el) {
    return ensureSemi(el);
  }).join("").trim();
};
/**
 * Return strings as-is, coerce numbers to 'rem' (default '0rem')
 */
// prettier-ignore


var toCssUnits = function toCssUnits(val) {
  var units = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rem';
  return typeof val === 'string' ? val : typeof val === 'number' ? "".concat(val).concat(units) : '0rem';
};
/**
 * Helper to ensure that value is a (media) object
 */
// prettier-ignore


var toMediaObj = function toMediaObj(val) {
  if (typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean') return {
    xs: val
  };
  if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(val) === "object" && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(val).length) return val;
  return {};
};
/**
 * Deliver CSS 'padding' or 'margin' rules derived from passed in prop
 * Numbers are assumed to be 'rem'
 */


var cssSpacing = function cssSpacing(rule, value) {
  console.log(value);
  console.log(Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value));
  if (typeof value === "number") value += "rem";
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])(rule, ":", value, ";label:cssSpacing;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3V0aWxzL3N0eWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEWSIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC91dGlscy9zdHlsZS11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgeyBicmVha3BvaW50cywgZm9udFNpemVzLCBoZWFkZXJTaXplcyB9ID0gdGhlbWUudHlwZTtcblxuY29uc3QgbXEgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKGJwID0+IHtcbiAgcmV0dXJuIGBAbWVkaWEgKG1pbi13aWR0aDogJHticmVha3BvaW50c1ticF19KWA7XG59KTtcblxuLyoqXG4gKiBBY2NlcHQgc3RyaW5nLCB0cmltLCByZXR1cm4gdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uXG4gKiBJZiBpbnB1dCBzdHJpbmcgY29udGFpbnMgYWxsIHNwYWNlcyBvciBvbmx5ICc7JywgcmV0dXJuIGVtcHR5IHN0cmluZ1xuICovXG5cbmNvbnN0IGVuc3VyZVNlbWkgPSB2YWwgPT4ge1xuICB2YWwgPSB2YWwudHJpbSgpO1xuICByZXR1cm4gdmFsICYmIHZhbCAhPT0gXCI7XCIgPyAodmFsLnNsaWNlKC0xKSA9PT0gXCI7XCIgPyB2YWwgOiBgJHt2YWx9O2ApIDogXCJcIjtcbn07XG5cbi8qKlxuICogQWNjZXB0IHN0cmluZyBvciBhIGxpc3Qgb2Ygc3RyaW5ncyAoZnJvbSBTQyksIHJldHVybiBhIHNpbmdsZSBzdHJpbmdcbiAqIEZpbHRlciwgdHJpbSwgYW5kIGVuc3VyZSBhIHNlbWljb2xvbiBkZWxpbWl0ZXJcbiAqL1xuXG5jb25zdCB0b0Nzc1N0cmluZyA9IHZhbCA9PiB7XG4gIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSByZXR1cm4gZW5zdXJlU2VtaSh2YWwpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIFwiXCI7XG4gIHJldHVybiB2YWxcbiAgICAubWFwKGVsID0+IGVuc3VyZVNlbWkoZWwpKVxuICAgIC5qb2luKFwiXCIpXG4gICAgLnRyaW0oKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHN0cmluZ3MgYXMtaXMsIGNvZXJjZSBudW1iZXJzIHRvICdyZW0nIChkZWZhdWx0ICcwcmVtJylcbiAqL1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b0Nzc1VuaXRzID0gKHZhbCwgdW5pdHMgPSAncmVtJykgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwgOiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGAke3ZhbH0ke3VuaXRzfWAgOiAnMHJlbSc7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIGVuc3VyZSB0aGF0IHZhbHVlIGlzIGEgKG1lZGlhKSBvYmplY3RcbiAqL1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IHRvTWVkaWFPYmogPSB2YWwgPT4ge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKVxuICAgIHJldHVybiB7IHhzOiB2YWwgfTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModmFsKS5sZW5ndGgpIHJldHVybiB2YWw7XG4gIHJldHVybiB7fTtcbn07XG5cbi8qKlxuICogRGVsaXZlciBDU1MgJ3BhZGRpbmcnIG9yICdtYXJnaW4nIHJ1bGVzIGRlcml2ZWQgZnJvbSBwYXNzZWQgaW4gcHJvcFxuICogTnVtYmVycyBhcmUgYXNzdW1lZCB0byBiZSAncmVtJ1xuICovXG5jb25zdCBjc3NTcGFjaW5nID0gKHJ1bGUsIHZhbHVlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikgdmFsdWUgKz0gXCJyZW1cIjtcbiAgcmV0dXJuIGNzc2BcbiAgICAke3J1bGV9OiAke3ZhbHVlfTtcbiAgYDtcbn07XG5cbmNvbnN0IG1lZGlhU3R5bGVzUHJvcFR5cGVzID0ge1xuICBzdHlsZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKVxufTtcblxuY29uc3QgZm9udFByb3BUeXBlcyA9IHtcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICByb21hbjogUHJvcFR5cGVzLmJvb2wsXG4gIGl0YWxpYzogUHJvcFR5cGVzLmJvb2wsXG4gIG9ibGlxdWU6IFByb3BUeXBlcy5ib29sLFxuXG4gIHh4U21hbGw6IFByb3BUeXBlcy5ib29sLFxuICB4U21hbGw6IFByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG4gIG1lZGl1bTogUHJvcFR5cGVzLmJvb2wsXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgeExhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgeHhMYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxhcmdlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNtYWxsZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIGgxOiBQcm9wVHlwZXMuYm9vbCxcbiAgaDI6IFByb3BUeXBlcy5ib29sLFxuICBoMzogUHJvcFR5cGVzLmJvb2wsXG4gIGg0OiBQcm9wVHlwZXMuYm9vbCxcbiAgaDU6IFByb3BUeXBlcy5ib29sLFxuICBoNjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG59O1xuZXhwb3J0IHsgZm9udFByb3BUeXBlcyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEZvbnQocHJvcHMsIHR5cGUpIHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGxldCBmb250U3R5bGUgPSBbJ3JvbWFuJywgJ2l0YWxpYycsICdvYmxpcXVlJ10uZmluZChzdHlsZSA9PiBzdHlsZSBpbiBwcm9wcykgfHwgJyc7XG4gIGlmIChmb250U3R5bGUgPT09IFwicm9tYW5cIikgZm9udFN0eWxlID0gXCJub3JtYWxcIjtcblxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgY29uc3QgZm9udFdlaWdodCA9XG4gICAgWydsaWdodCcsICdsaWdodGVyJywgJ25vcm1hbCcsICdib2xkJywgJ2JvbGRlciddLmZpbmQod2VpZ2h0ID0+IHdlaWdodCBpbiBwcm9wcykgfHwgJyc7XG5cbiAgbGV0IHRoZW1lU2l6ZXMgPSB7fTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiaGVhZGluZ1wiOlxuICAgICAgdGhlbWVTaXplcyA9IGhlYWRlclNpemVzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRleHRcIjpcbiAgICAgIHRoZW1lU2l6ZXMgPSBmb250U2l6ZXM7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgZm9udFNpemUgPSBwcm9wcy5zaXplXG4gICAgPyB0b0Nzc1VuaXRzKHByb3BzLnNpemUpXG4gICAgOiB0aGVtZVNpemVzW09iamVjdC5rZXlzKHRoZW1lU2l6ZXMpLmZpbmQoc2l6ZSA9PiBzaXplIGluIHByb3BzKV0gfHwgXCIxcmVtXCI7XG5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIHJldHVybiBjc3NgXG4gICAgJHtwcm9wcy5pbmxpbmUgJiYgYGRpc3BsYXk6IGlubGluZTtgfVxuICAgICR7cHJvcHMudW5kZXJsaW5lICYmICd0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsnfVxuICAgICR7cHJvcHMubGFzdCAmJiAnbWFyZ2luOiAwOyd9XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplfTsgXG4gICAgZm9udC1zdHlsZTogJHtmb250U3R5bGV9OyBcbiAgICBmb250LXdlaWdodDogJHtmb250V2VpZ2h0fTtcbiAgICBsaW5lLWhlaWdodDogY2FsYygke2ZvbnRTaXplfSAqIDEuNSk7XG4gIGBcbn1cblxuY29uc3Qgd2l0aE1lZGlhU3R5bGVzID0gKHsgc3R5bGVzLCB0aGVtZSB9KSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHJldHVybiBzdHlsZXM7XG4gIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykgcmV0dXJuIGNzc2Ake3RvQ3NzU3RyaW5nKHN0eWxlcyl9YDsgLy8gcHJldHRpZXItaWdub3JlXG4gIGlmICh0eXBlb2Ygc3R5bGVzID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgcmV0dXJuIGNzc2BcbiAgICAke3N0eWxlcy54cyAmJiB0b0Nzc1N0cmluZyhzdHlsZXMueHMpfVxuICAgICR7c3R5bGVzLnNtICYmIGAke21xWzFdfXske3RvQ3NzU3RyaW5nKHN0eWxlcy5zbSl9fWB9XG4gICAgJHtzdHlsZXMubWQgJiYgYCR7bXFbMl19eyAke3RvQ3NzU3RyaW5nKHN0eWxlcy5tZCl9IH1gfVxuICAgICR7c3R5bGVzLmxnICYmIGAke21xWzNdfXsgJHt0b0Nzc1N0cmluZyhzdHlsZXMubGcpfSB9YH1cbiAgICAke3N0eWxlcy54bCAmJiBgJHttcVs0XX17ICR7dG9Dc3NTdHJpbmcoc3R5bGVzLnhsKX0gfWB9XG4gIGA7XG4gIH1cblxuICByZXR1cm4gW107XG59O1xuXG5leHBvcnQgeyBjc3NTcGFjaW5nLCBtZWRpYVN0eWxlc1Byb3BUeXBlcywgbXEsIHRvTWVkaWFPYmosIHdpdGhNZWRpYVN0eWxlcyB9O1xuIl19 */"))
  );
};

var mediaStylesPropTypes = {
  styles: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object])
};
var fontPropTypes = {
  inline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  roman: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  italic: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  oblique: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  xxSmall: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  xSmall: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  small: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  medium: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  large: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  xLarge: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  xxLarge: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  larger: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  smaller: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  h1: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  h2: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  h3: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  h4: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  h5: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  h6: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
};

function withFont(props, type) {
  // prettier-ignore
  var fontStyle = ['roman', 'italic', 'oblique'].find(function (style) {
    return style in props;
  }) || '';
  if (fontStyle === "roman") fontStyle = "normal"; // prettier-ignore

  var fontWeight = ['light', 'lighter', 'normal', 'bold', 'bolder'].find(function (weight) {
    return weight in props;
  }) || '';
  var themeSizes = {};

  switch (type) {
    case "heading":
      themeSizes = headerSizes;
      break;

    case "text":
      themeSizes = fontSizes;

    default:
      break;
  }

  var fontSize = props.size ? toCssUnits(props.size) : themeSizes[_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(themeSizes).find(function (size) {
    return size in props;
  })] || "1rem"; // prettier-ignore

  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])(props.inline && "display: inline;", " ", props.underline && 'text-decoration: underline;', " ", props.last && 'margin: 0;', " font-size:", fontSize, ";font-style:", fontStyle, ";font-weight:", fontWeight, ";line-height:calc(", fontSize, " * 1.5);" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3V0aWxzL3N0eWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJWSIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC91dGlscy9zdHlsZS11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgeyBicmVha3BvaW50cywgZm9udFNpemVzLCBoZWFkZXJTaXplcyB9ID0gdGhlbWUudHlwZTtcblxuY29uc3QgbXEgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKGJwID0+IHtcbiAgcmV0dXJuIGBAbWVkaWEgKG1pbi13aWR0aDogJHticmVha3BvaW50c1ticF19KWA7XG59KTtcblxuLyoqXG4gKiBBY2NlcHQgc3RyaW5nLCB0cmltLCByZXR1cm4gdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uXG4gKiBJZiBpbnB1dCBzdHJpbmcgY29udGFpbnMgYWxsIHNwYWNlcyBvciBvbmx5ICc7JywgcmV0dXJuIGVtcHR5IHN0cmluZ1xuICovXG5cbmNvbnN0IGVuc3VyZVNlbWkgPSB2YWwgPT4ge1xuICB2YWwgPSB2YWwudHJpbSgpO1xuICByZXR1cm4gdmFsICYmIHZhbCAhPT0gXCI7XCIgPyAodmFsLnNsaWNlKC0xKSA9PT0gXCI7XCIgPyB2YWwgOiBgJHt2YWx9O2ApIDogXCJcIjtcbn07XG5cbi8qKlxuICogQWNjZXB0IHN0cmluZyBvciBhIGxpc3Qgb2Ygc3RyaW5ncyAoZnJvbSBTQyksIHJldHVybiBhIHNpbmdsZSBzdHJpbmdcbiAqIEZpbHRlciwgdHJpbSwgYW5kIGVuc3VyZSBhIHNlbWljb2xvbiBkZWxpbWl0ZXJcbiAqL1xuXG5jb25zdCB0b0Nzc1N0cmluZyA9IHZhbCA9PiB7XG4gIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSByZXR1cm4gZW5zdXJlU2VtaSh2YWwpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIFwiXCI7XG4gIHJldHVybiB2YWxcbiAgICAubWFwKGVsID0+IGVuc3VyZVNlbWkoZWwpKVxuICAgIC5qb2luKFwiXCIpXG4gICAgLnRyaW0oKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHN0cmluZ3MgYXMtaXMsIGNvZXJjZSBudW1iZXJzIHRvICdyZW0nIChkZWZhdWx0ICcwcmVtJylcbiAqL1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b0Nzc1VuaXRzID0gKHZhbCwgdW5pdHMgPSAncmVtJykgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwgOiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGAke3ZhbH0ke3VuaXRzfWAgOiAnMHJlbSc7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIGVuc3VyZSB0aGF0IHZhbHVlIGlzIGEgKG1lZGlhKSBvYmplY3RcbiAqL1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IHRvTWVkaWFPYmogPSB2YWwgPT4ge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKVxuICAgIHJldHVybiB7IHhzOiB2YWwgfTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModmFsKS5sZW5ndGgpIHJldHVybiB2YWw7XG4gIHJldHVybiB7fTtcbn07XG5cbi8qKlxuICogRGVsaXZlciBDU1MgJ3BhZGRpbmcnIG9yICdtYXJnaW4nIHJ1bGVzIGRlcml2ZWQgZnJvbSBwYXNzZWQgaW4gcHJvcFxuICogTnVtYmVycyBhcmUgYXNzdW1lZCB0byBiZSAncmVtJ1xuICovXG5jb25zdCBjc3NTcGFjaW5nID0gKHJ1bGUsIHZhbHVlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikgdmFsdWUgKz0gXCJyZW1cIjtcbiAgcmV0dXJuIGNzc2BcbiAgICAke3J1bGV9OiAke3ZhbHVlfTtcbiAgYDtcbn07XG5cbmNvbnN0IG1lZGlhU3R5bGVzUHJvcFR5cGVzID0ge1xuICBzdHlsZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKVxufTtcblxuY29uc3QgZm9udFByb3BUeXBlcyA9IHtcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICByb21hbjogUHJvcFR5cGVzLmJvb2wsXG4gIGl0YWxpYzogUHJvcFR5cGVzLmJvb2wsXG4gIG9ibGlxdWU6IFByb3BUeXBlcy5ib29sLFxuXG4gIHh4U21hbGw6IFByb3BUeXBlcy5ib29sLFxuICB4U21hbGw6IFByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG4gIG1lZGl1bTogUHJvcFR5cGVzLmJvb2wsXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgeExhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgeHhMYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxhcmdlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNtYWxsZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIGgxOiBQcm9wVHlwZXMuYm9vbCxcbiAgaDI6IFByb3BUeXBlcy5ib29sLFxuICBoMzogUHJvcFR5cGVzLmJvb2wsXG4gIGg0OiBQcm9wVHlwZXMuYm9vbCxcbiAgaDU6IFByb3BUeXBlcy5ib29sLFxuICBoNjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG59O1xuZXhwb3J0IHsgZm9udFByb3BUeXBlcyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEZvbnQocHJvcHMsIHR5cGUpIHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGxldCBmb250U3R5bGUgPSBbJ3JvbWFuJywgJ2l0YWxpYycsICdvYmxpcXVlJ10uZmluZChzdHlsZSA9PiBzdHlsZSBpbiBwcm9wcykgfHwgJyc7XG4gIGlmIChmb250U3R5bGUgPT09IFwicm9tYW5cIikgZm9udFN0eWxlID0gXCJub3JtYWxcIjtcblxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgY29uc3QgZm9udFdlaWdodCA9XG4gICAgWydsaWdodCcsICdsaWdodGVyJywgJ25vcm1hbCcsICdib2xkJywgJ2JvbGRlciddLmZpbmQod2VpZ2h0ID0+IHdlaWdodCBpbiBwcm9wcykgfHwgJyc7XG5cbiAgbGV0IHRoZW1lU2l6ZXMgPSB7fTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiaGVhZGluZ1wiOlxuICAgICAgdGhlbWVTaXplcyA9IGhlYWRlclNpemVzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRleHRcIjpcbiAgICAgIHRoZW1lU2l6ZXMgPSBmb250U2l6ZXM7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgZm9udFNpemUgPSBwcm9wcy5zaXplXG4gICAgPyB0b0Nzc1VuaXRzKHByb3BzLnNpemUpXG4gICAgOiB0aGVtZVNpemVzW09iamVjdC5rZXlzKHRoZW1lU2l6ZXMpLmZpbmQoc2l6ZSA9PiBzaXplIGluIHByb3BzKV0gfHwgXCIxcmVtXCI7XG5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIHJldHVybiBjc3NgXG4gICAgJHtwcm9wcy5pbmxpbmUgJiYgYGRpc3BsYXk6IGlubGluZTtgfVxuICAgICR7cHJvcHMudW5kZXJsaW5lICYmICd0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsnfVxuICAgICR7cHJvcHMubGFzdCAmJiAnbWFyZ2luOiAwOyd9XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplfTsgXG4gICAgZm9udC1zdHlsZTogJHtmb250U3R5bGV9OyBcbiAgICBmb250LXdlaWdodDogJHtmb250V2VpZ2h0fTtcbiAgICBsaW5lLWhlaWdodDogY2FsYygke2ZvbnRTaXplfSAqIDEuNSk7XG4gIGBcbn1cblxuY29uc3Qgd2l0aE1lZGlhU3R5bGVzID0gKHsgc3R5bGVzLCB0aGVtZSB9KSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHJldHVybiBzdHlsZXM7XG4gIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykgcmV0dXJuIGNzc2Ake3RvQ3NzU3RyaW5nKHN0eWxlcyl9YDsgLy8gcHJldHRpZXItaWdub3JlXG4gIGlmICh0eXBlb2Ygc3R5bGVzID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgcmV0dXJuIGNzc2BcbiAgICAke3N0eWxlcy54cyAmJiB0b0Nzc1N0cmluZyhzdHlsZXMueHMpfVxuICAgICR7c3R5bGVzLnNtICYmIGAke21xWzFdfXske3RvQ3NzU3RyaW5nKHN0eWxlcy5zbSl9fWB9XG4gICAgJHtzdHlsZXMubWQgJiYgYCR7bXFbMl19eyAke3RvQ3NzU3RyaW5nKHN0eWxlcy5tZCl9IH1gfVxuICAgICR7c3R5bGVzLmxnICYmIGAke21xWzNdfXsgJHt0b0Nzc1N0cmluZyhzdHlsZXMubGcpfSB9YH1cbiAgICAke3N0eWxlcy54bCAmJiBgJHttcVs0XX17ICR7dG9Dc3NTdHJpbmcoc3R5bGVzLnhsKX0gfWB9XG4gIGA7XG4gIH1cblxuICByZXR1cm4gW107XG59O1xuXG5leHBvcnQgeyBjc3NTcGFjaW5nLCBtZWRpYVN0eWxlc1Byb3BUeXBlcywgbXEsIHRvTWVkaWFPYmosIHdpdGhNZWRpYVN0eWxlcyB9O1xuIl19 */"))
  );
}

var withMediaStyles = function withMediaStyles(_ref) {
  var styles = _ref.styles,
      theme = _ref.theme;
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(styles)) return styles;
  if (typeof styles === 'string') return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])(toCssString(styles), "label:withMediaStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3V0aWxzL3N0eWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJNEMiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvdXRpbHMvc3R5bGUtdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IHsgYnJlYWtwb2ludHMsIGZvbnRTaXplcywgaGVhZGVyU2l6ZXMgfSA9IHRoZW1lLnR5cGU7XG5cbmNvbnN0IG1xID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLm1hcChicCA9PiB7XG4gIHJldHVybiBgQG1lZGlhIChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHNbYnBdfSlgO1xufSk7XG5cbi8qKlxuICogQWNjZXB0IHN0cmluZywgdHJpbSwgcmV0dXJuIHRlcm1pbmF0ZWQgd2l0aCBhIHNlbWljb2xvblxuICogSWYgaW5wdXQgc3RyaW5nIGNvbnRhaW5zIGFsbCBzcGFjZXMgb3Igb25seSAnOycsIHJldHVybiBlbXB0eSBzdHJpbmdcbiAqL1xuXG5jb25zdCBlbnN1cmVTZW1pID0gdmFsID0+IHtcbiAgdmFsID0gdmFsLnRyaW0oKTtcbiAgcmV0dXJuIHZhbCAmJiB2YWwgIT09IFwiO1wiID8gKHZhbC5zbGljZSgtMSkgPT09IFwiO1wiID8gdmFsIDogYCR7dmFsfTtgKSA6IFwiXCI7XG59O1xuXG4vKipcbiAqIEFjY2VwdCBzdHJpbmcgb3IgYSBsaXN0IG9mIHN0cmluZ3MgKGZyb20gU0MpLCByZXR1cm4gYSBzaW5nbGUgc3RyaW5nXG4gKiBGaWx0ZXIsIHRyaW0sIGFuZCBlbnN1cmUgYSBzZW1pY29sb24gZGVsaW1pdGVyXG4gKi9cblxuY29uc3QgdG9Dc3NTdHJpbmcgPSB2YWwgPT4ge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGVuc3VyZVNlbWkodmFsKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiBcIlwiO1xuICByZXR1cm4gdmFsXG4gICAgLm1hcChlbCA9PiBlbnN1cmVTZW1pKGVsKSlcbiAgICAuam9pbihcIlwiKVxuICAgIC50cmltKCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBzdHJpbmdzIGFzLWlzLCBjb2VyY2UgbnVtYmVycyB0byAncmVtJyAoZGVmYXVsdCAnMHJlbScpXG4gKi9cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgdG9Dc3NVbml0cyA9ICh2YWwsIHVuaXRzID0gJ3JlbScpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsIDogdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBgJHt2YWx9JHt1bml0c31gIDogJzByZW0nO1xufVxuXG4vKipcbiAqIEhlbHBlciB0byBlbnN1cmUgdGhhdCB2YWx1ZSBpcyBhIChtZWRpYSkgb2JqZWN0XG4gKi9cblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b01lZGlhT2JqID0gdmFsID0+IHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJylcbiAgICByZXR1cm4geyB4czogdmFsIH07XG4gIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoKSByZXR1cm4gdmFsO1xuICByZXR1cm4ge307XG59O1xuXG4vKipcbiAqIERlbGl2ZXIgQ1NTICdwYWRkaW5nJyBvciAnbWFyZ2luJyBydWxlcyBkZXJpdmVkIGZyb20gcGFzc2VkIGluIHByb3BcbiAqIE51bWJlcnMgYXJlIGFzc3VtZWQgdG8gYmUgJ3JlbSdcbiAqL1xuY29uc3QgY3NzU3BhY2luZyA9IChydWxlLCB2YWx1ZSkgPT4ge1xuICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZSk7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHZhbHVlICs9IFwicmVtXCI7XG4gIHJldHVybiBjc3NgXG4gICAgJHtydWxlfTogJHt2YWx1ZX07XG4gIGA7XG59O1xuXG5jb25zdCBtZWRpYVN0eWxlc1Byb3BUeXBlcyA9IHtcbiAgc3R5bGVzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSlcbn07XG5cbmNvbnN0IGZvbnRQcm9wVHlwZXMgPSB7XG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgcm9tYW46IFByb3BUeXBlcy5ib29sLFxuICBpdGFsaWM6IFByb3BUeXBlcy5ib29sLFxuICBvYmxpcXVlOiBQcm9wVHlwZXMuYm9vbCxcblxuICB4eFNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgeFNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgc21hbGw6IFByb3BUeXBlcy5ib29sLFxuICBtZWRpdW06IFByb3BUeXBlcy5ib29sLFxuICBsYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIHhMYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIHh4TGFyZ2U6IFByb3BUeXBlcy5ib29sLFxuICBsYXJnZXI6IFByb3BUeXBlcy5ib29sLFxuICBzbWFsbGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICBoMTogUHJvcFR5cGVzLmJvb2wsXG4gIGgyOiBQcm9wVHlwZXMuYm9vbCxcbiAgaDM6IFByb3BUeXBlcy5ib29sLFxuICBoNDogUHJvcFR5cGVzLmJvb2wsXG4gIGg1OiBQcm9wVHlwZXMuYm9vbCxcbiAgaDY6IFByb3BUeXBlcy5ib29sLFxuXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxufTtcbmV4cG9ydCB7IGZvbnRQcm9wVHlwZXMgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhGb250KHByb3BzLCB0eXBlKSB7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBsZXQgZm9udFN0eWxlID0gWydyb21hbicsICdpdGFsaWMnLCAnb2JsaXF1ZSddLmZpbmQoc3R5bGUgPT4gc3R5bGUgaW4gcHJvcHMpIHx8ICcnO1xuICBpZiAoZm9udFN0eWxlID09PSBcInJvbWFuXCIpIGZvbnRTdHlsZSA9IFwibm9ybWFsXCI7XG5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IGZvbnRXZWlnaHQgPVxuICAgIFsnbGlnaHQnLCAnbGlnaHRlcicsICdub3JtYWwnLCAnYm9sZCcsICdib2xkZXInXS5maW5kKHdlaWdodCA9PiB3ZWlnaHQgaW4gcHJvcHMpIHx8ICcnO1xuXG4gIGxldCB0aGVtZVNpemVzID0ge307XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcImhlYWRpbmdcIjpcbiAgICAgIHRoZW1lU2l6ZXMgPSBoZWFkZXJTaXplcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICB0aGVtZVNpemVzID0gZm9udFNpemVzO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGZvbnRTaXplID0gcHJvcHMuc2l6ZVxuICAgID8gdG9Dc3NVbml0cyhwcm9wcy5zaXplKVxuICAgIDogdGhlbWVTaXplc1tPYmplY3Qua2V5cyh0aGVtZVNpemVzKS5maW5kKHNpemUgPT4gc2l6ZSBpbiBwcm9wcyldIHx8IFwiMXJlbVwiO1xuXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICByZXR1cm4gY3NzYFxuICAgICR7cHJvcHMuaW5saW5lICYmIGBkaXNwbGF5OiBpbmxpbmU7YH1cbiAgICAke3Byb3BzLnVuZGVybGluZSAmJiAndGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7J31cbiAgICAke3Byb3BzLmxhc3QgJiYgJ21hcmdpbjogMDsnfVxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZX07IFxuICAgIGZvbnQtc3R5bGU6ICR7Zm9udFN0eWxlfTsgXG4gICAgZm9udC13ZWlnaHQ6ICR7Zm9udFdlaWdodH07XG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoJHtmb250U2l6ZX0gKiAxLjUpO1xuICBgXG59XG5cbmNvbnN0IHdpdGhNZWRpYVN0eWxlcyA9ICh7IHN0eWxlcywgdGhlbWUgfSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSByZXR1cm4gc3R5bGVzO1xuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHJldHVybiBjc3NgJHt0b0Nzc1N0cmluZyhzdHlsZXMpfWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHJldHVybiBjc3NgXG4gICAgJHtzdHlsZXMueHMgJiYgdG9Dc3NTdHJpbmcoc3R5bGVzLnhzKX1cbiAgICAke3N0eWxlcy5zbSAmJiBgJHttcVsxXX17JHt0b0Nzc1N0cmluZyhzdHlsZXMuc20pfX1gfVxuICAgICR7c3R5bGVzLm1kICYmIGAke21xWzJdfXsgJHt0b0Nzc1N0cmluZyhzdHlsZXMubWQpfSB9YH1cbiAgICAke3N0eWxlcy5sZyAmJiBgJHttcVszXX17ICR7dG9Dc3NTdHJpbmcoc3R5bGVzLmxnKX0gfWB9XG4gICAgJHtzdHlsZXMueGwgJiYgYCR7bXFbNF19eyAke3RvQ3NzU3RyaW5nKHN0eWxlcy54bCl9IH1gfVxuICBgO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IHsgY3NzU3BhY2luZywgbWVkaWFTdHlsZXNQcm9wVHlwZXMsIG1xLCB0b01lZGlhT2JqLCB3aXRoTWVkaWFTdHlsZXMgfTtcbiJdfQ== */"))
  ); // prettier-ignore

  if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) === "object") {
    // prettier-ignore
    return (
      /*#__PURE__*/
      Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])(styles.xs && toCssString(styles.xs), " ", styles.sm && "".concat(mq[1], "{").concat(toCssString(styles.sm), "}"), " ", styles.md && "".concat(mq[2], "{ ").concat(toCssString(styles.md), " }"), " ", styles.lg && "".concat(mq[3], "{ ").concat(toCssString(styles.lg), " }"), " ", styles.xl && "".concat(mq[4], "{ ").concat(toCssString(styles.xl), " }"), "label:withMediaStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3V0aWxzL3N0eWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKYyIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC91dGlscy9zdHlsZS11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgeyBicmVha3BvaW50cywgZm9udFNpemVzLCBoZWFkZXJTaXplcyB9ID0gdGhlbWUudHlwZTtcblxuY29uc3QgbXEgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKGJwID0+IHtcbiAgcmV0dXJuIGBAbWVkaWEgKG1pbi13aWR0aDogJHticmVha3BvaW50c1ticF19KWA7XG59KTtcblxuLyoqXG4gKiBBY2NlcHQgc3RyaW5nLCB0cmltLCByZXR1cm4gdGVybWluYXRlZCB3aXRoIGEgc2VtaWNvbG9uXG4gKiBJZiBpbnB1dCBzdHJpbmcgY29udGFpbnMgYWxsIHNwYWNlcyBvciBvbmx5ICc7JywgcmV0dXJuIGVtcHR5IHN0cmluZ1xuICovXG5cbmNvbnN0IGVuc3VyZVNlbWkgPSB2YWwgPT4ge1xuICB2YWwgPSB2YWwudHJpbSgpO1xuICByZXR1cm4gdmFsICYmIHZhbCAhPT0gXCI7XCIgPyAodmFsLnNsaWNlKC0xKSA9PT0gXCI7XCIgPyB2YWwgOiBgJHt2YWx9O2ApIDogXCJcIjtcbn07XG5cbi8qKlxuICogQWNjZXB0IHN0cmluZyBvciBhIGxpc3Qgb2Ygc3RyaW5ncyAoZnJvbSBTQyksIHJldHVybiBhIHNpbmdsZSBzdHJpbmdcbiAqIEZpbHRlciwgdHJpbSwgYW5kIGVuc3VyZSBhIHNlbWljb2xvbiBkZWxpbWl0ZXJcbiAqL1xuXG5jb25zdCB0b0Nzc1N0cmluZyA9IHZhbCA9PiB7XG4gIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSByZXR1cm4gZW5zdXJlU2VtaSh2YWwpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIFwiXCI7XG4gIHJldHVybiB2YWxcbiAgICAubWFwKGVsID0+IGVuc3VyZVNlbWkoZWwpKVxuICAgIC5qb2luKFwiXCIpXG4gICAgLnRyaW0oKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHN0cmluZ3MgYXMtaXMsIGNvZXJjZSBudW1iZXJzIHRvICdyZW0nIChkZWZhdWx0ICcwcmVtJylcbiAqL1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b0Nzc1VuaXRzID0gKHZhbCwgdW5pdHMgPSAncmVtJykgPT4ge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwgOiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyA/IGAke3ZhbH0ke3VuaXRzfWAgOiAnMHJlbSc7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIGVuc3VyZSB0aGF0IHZhbHVlIGlzIGEgKG1lZGlhKSBvYmplY3RcbiAqL1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IHRvTWVkaWFPYmogPSB2YWwgPT4ge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKVxuICAgIHJldHVybiB7IHhzOiB2YWwgfTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModmFsKS5sZW5ndGgpIHJldHVybiB2YWw7XG4gIHJldHVybiB7fTtcbn07XG5cbi8qKlxuICogRGVsaXZlciBDU1MgJ3BhZGRpbmcnIG9yICdtYXJnaW4nIHJ1bGVzIGRlcml2ZWQgZnJvbSBwYXNzZWQgaW4gcHJvcFxuICogTnVtYmVycyBhcmUgYXNzdW1lZCB0byBiZSAncmVtJ1xuICovXG5jb25zdCBjc3NTcGFjaW5nID0gKHJ1bGUsIHZhbHVlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikgdmFsdWUgKz0gXCJyZW1cIjtcbiAgcmV0dXJuIGNzc2BcbiAgICAke3J1bGV9OiAke3ZhbHVlfTtcbiAgYDtcbn07XG5cbmNvbnN0IG1lZGlhU3R5bGVzUHJvcFR5cGVzID0ge1xuICBzdHlsZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKVxufTtcblxuY29uc3QgZm9udFByb3BUeXBlcyA9IHtcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICByb21hbjogUHJvcFR5cGVzLmJvb2wsXG4gIGl0YWxpYzogUHJvcFR5cGVzLmJvb2wsXG4gIG9ibGlxdWU6IFByb3BUeXBlcy5ib29sLFxuXG4gIHh4U21hbGw6IFByb3BUeXBlcy5ib29sLFxuICB4U21hbGw6IFByb3BUeXBlcy5ib29sLFxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXG4gIG1lZGl1bTogUHJvcFR5cGVzLmJvb2wsXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgeExhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgeHhMYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxhcmdlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNtYWxsZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIGgxOiBQcm9wVHlwZXMuYm9vbCxcbiAgaDI6IFByb3BUeXBlcy5ib29sLFxuICBoMzogUHJvcFR5cGVzLmJvb2wsXG4gIGg0OiBQcm9wVHlwZXMuYm9vbCxcbiAgaDU6IFByb3BUeXBlcy5ib29sLFxuICBoNjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG59O1xuZXhwb3J0IHsgZm9udFByb3BUeXBlcyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEZvbnQocHJvcHMsIHR5cGUpIHtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGxldCBmb250U3R5bGUgPSBbJ3JvbWFuJywgJ2l0YWxpYycsICdvYmxpcXVlJ10uZmluZChzdHlsZSA9PiBzdHlsZSBpbiBwcm9wcykgfHwgJyc7XG4gIGlmIChmb250U3R5bGUgPT09IFwicm9tYW5cIikgZm9udFN0eWxlID0gXCJub3JtYWxcIjtcblxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgY29uc3QgZm9udFdlaWdodCA9XG4gICAgWydsaWdodCcsICdsaWdodGVyJywgJ25vcm1hbCcsICdib2xkJywgJ2JvbGRlciddLmZpbmQod2VpZ2h0ID0+IHdlaWdodCBpbiBwcm9wcykgfHwgJyc7XG5cbiAgbGV0IHRoZW1lU2l6ZXMgPSB7fTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFwiaGVhZGluZ1wiOlxuICAgICAgdGhlbWVTaXplcyA9IGhlYWRlclNpemVzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInRleHRcIjpcbiAgICAgIHRoZW1lU2l6ZXMgPSBmb250U2l6ZXM7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3QgZm9udFNpemUgPSBwcm9wcy5zaXplXG4gICAgPyB0b0Nzc1VuaXRzKHByb3BzLnNpemUpXG4gICAgOiB0aGVtZVNpemVzW09iamVjdC5rZXlzKHRoZW1lU2l6ZXMpLmZpbmQoc2l6ZSA9PiBzaXplIGluIHByb3BzKV0gfHwgXCIxcmVtXCI7XG5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIHJldHVybiBjc3NgXG4gICAgJHtwcm9wcy5pbmxpbmUgJiYgYGRpc3BsYXk6IGlubGluZTtgfVxuICAgICR7cHJvcHMudW5kZXJsaW5lICYmICd0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsnfVxuICAgICR7cHJvcHMubGFzdCAmJiAnbWFyZ2luOiAwOyd9XG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplfTsgXG4gICAgZm9udC1zdHlsZTogJHtmb250U3R5bGV9OyBcbiAgICBmb250LXdlaWdodDogJHtmb250V2VpZ2h0fTtcbiAgICBsaW5lLWhlaWdodDogY2FsYygke2ZvbnRTaXplfSAqIDEuNSk7XG4gIGBcbn1cblxuY29uc3Qgd2l0aE1lZGlhU3R5bGVzID0gKHsgc3R5bGVzLCB0aGVtZSB9KSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHJldHVybiBzdHlsZXM7XG4gIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykgcmV0dXJuIGNzc2Ake3RvQ3NzU3RyaW5nKHN0eWxlcyl9YDsgLy8gcHJldHRpZXItaWdub3JlXG4gIGlmICh0eXBlb2Ygc3R5bGVzID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgcmV0dXJuIGNzc2BcbiAgICAke3N0eWxlcy54cyAmJiB0b0Nzc1N0cmluZyhzdHlsZXMueHMpfVxuICAgICR7c3R5bGVzLnNtICYmIGAke21xWzFdfXske3RvQ3NzU3RyaW5nKHN0eWxlcy5zbSl9fWB9XG4gICAgJHtzdHlsZXMubWQgJiYgYCR7bXFbMl19eyAke3RvQ3NzU3RyaW5nKHN0eWxlcy5tZCl9IH1gfVxuICAgICR7c3R5bGVzLmxnICYmIGAke21xWzNdfXsgJHt0b0Nzc1N0cmluZyhzdHlsZXMubGcpfSB9YH1cbiAgICAke3N0eWxlcy54bCAmJiBgJHttcVs0XX17ICR7dG9Dc3NTdHJpbmcoc3R5bGVzLnhsKX0gfWB9XG4gIGA7XG4gIH1cblxuICByZXR1cm4gW107XG59O1xuXG5leHBvcnQgeyBjc3NTcGFjaW5nLCBtZWRpYVN0eWxlc1Byb3BUeXBlcywgbXEsIHRvTWVkaWFPYmosIHdpdGhNZWRpYVN0eWxlcyB9O1xuIl19 */"))
    );
  }

  return [];
};



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
    baseFontSize: {
      htmlSize: "62.5%",
      bodySize: "1.6rem"
    },
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
    fontSizes: {
      xxSmall: "0.9rem",
      xSmall: "1rem",
      small: "1.3rem",
      medium: "1.6rem",
      large: "1.8rem",
      xLarge: "2.4rem",
      xxLarge: "3.2rem",
      larger: "1.7rem",
      smaller: "1.2rem"
    },
    headerSizes: {
      h1: "4.209rem",
      h2: "3.157rem",
      h3: "2.369rem",
      h4: "1.777rem",
      h5: "1.333rem",
      h6: "1rem"
    },
    width: {
      maxWidth: "1200px",
      width: "100%"
    },
    breakpoints: {
      xs: "320px",
      sm: "375px",
      md: "414px",
      lg: "768px",
      xl: "1024px"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 4:
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

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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