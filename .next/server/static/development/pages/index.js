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


var Container = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1qewh8d0",
  label: "Container"
})("max-width:", function (props) {
  return props.theme.type.width.maxWidth;
}, ";width:", function (props) {
  return props.theme.type.width.width;
}, ";margin:0 auto;padding:0 1em;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNEIiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9lbGVtZW50cy9sYXlvdXQvY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50eXBlLndpZHRoLm1heFdpZHRofTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHlwZS53aWR0aC53aWR0aH07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDFlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ== */"));

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/elements/layout/display.js":
/*!***********************************************!*\
  !*** ./components/elements/layout/display.js ***!
  \***********************************************/
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(xsShow ? toDisplayCss(false, xsShow) : isHideFirst ? 'display: none;' : null, " ", (smHide || smShow) && "".concat(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["mq"][1], "{ ").concat(toDisplayCss(smHide, smShow), " }"), " ", (mdHide || mdShow) && "".concat(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["mq"][2], "{ ").concat(toDisplayCss(mdHide, mdShow), " }"), " ", (lgHide || lgShow) && "".concat(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["mq"][3], "{ ").concat(toDisplayCss(lgHide, lgShow), " }"), " ", (xlHide || xlShow) && "".concat(_utils_style_utils__WEBPACK_IMPORTED_MODULE_3__["mq"][4], "{ ").concat(toDisplayCss(xlHide, xlShow), " }"), "label:getCss;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2Rpc3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJZIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2Rpc3BsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBtcSwgdG9NZWRpYU9iaiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9zdHlsZS11dGlsc1wiO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IHRvRGlzcGxheUNzcyA9IChoaWRlLCBzaG93KSA9PiB7XG4gIGlmIChoaWRlKSByZXR1cm4gXCJkaXNwbGF5OiBub25lO1wiO1xuICBpZiAodHlwZW9mIHNob3cgPT09IFwiYm9vbGVhblwiIHx8ICFzaG93KSBzaG93ID0gXCJpbmxpbmVcIjtcbiAgcmV0dXJuIGBkaXNwbGF5OiAke3Nob3d9O2A7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGdldENzcyA9ICh7IGhpZGUsIHNob3csIHRoZW1lIH0pID0+IHtcbiAgY29uc3QgeyB4czogeHNIaWRlLCBzbTogc21IaWRlLCBtZDogbWRIaWRlLCBsZzogbGdIaWRlLCB4bDogeGxIaWRlIH0gPSB0b01lZGlhT2JqKGhpZGUgfHwgZmFsc2UpO1xuICBjb25zdCB7IHhzOiB4c1Nob3csIHNtOiBzbVNob3csIG1kOiBtZFNob3csIGxnOiBsZ1Nob3csIHhsOiB4bFNob3cgfSA9IHRvTWVkaWFPYmooc2hvdyB8fCBmYWxzZSk7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gW1tzbUhpZGUsIHNtU2hvd10sIFttZEhpZGUsIG1kU2hvd10sIFtsZ0hpZGUsIGxnU2hvd10sIFt4bEhpZGUsIHhsU2hvd11dO1xuXG4gIGxldCBpc0hpZGVGaXJzdCA9IEJvb2xlYW4oeHNIaWRlKTtcbiAgaWYgKCFpc0hpZGVGaXJzdCkge1xuICAgIGJyZWFrcG9pbnRzLnNvbWUoKFtiSGlkZSwgYlNob3ddKSA9PiB7XG4gICAgICBpZiAoYkhpZGUgfHwgYlNob3cpIHtcbiAgICAgICAgaXNIaWRlRmlyc3QgPSAhIWJTaG93O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgJHt4c1Nob3cgPyB0b0Rpc3BsYXlDc3MoZmFsc2UsIHhzU2hvdykgOiBpc0hpZGVGaXJzdCA/ICdkaXNwbGF5OiBub25lOycgOiBudWxsfVxuICAgICR7KHNtSGlkZSB8fCBzbVNob3cpICYmIGAke21xWzFdfXsgJHt0b0Rpc3BsYXlDc3Moc21IaWRlLCBzbVNob3cpfSB9YH1cbiAgICAkeyhtZEhpZGUgfHwgbWRTaG93KSAmJiBgJHttcVsyXX17ICR7dG9EaXNwbGF5Q3NzKG1kSGlkZSwgbWRTaG93KX0gfWB9XG4gICAgJHsobGdIaWRlIHx8IGxnU2hvdykgJiYgYCR7bXFbM119eyAke3RvRGlzcGxheUNzcyhsZ0hpZGUsIGxnU2hvdyl9IH1gfVxuICAgICR7KHhsSGlkZSB8fCB4bFNob3cpICYmIGAke21xWzRdfXsgJHt0b0Rpc3BsYXlDc3MoeGxIaWRlLCB4bFNob3cpfSB9YH1cbiAgYDtcbn1cblxuY29uc3QgRGlzcGxheSA9IHN0eWxlZC5zcGFuYFxuICAke3Byb3BzID0+IGdldENzcyhwcm9wcyl9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheTtcbiJdfQ== */"))
  );
};

var Display = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("span", {
  target: "easkow0",
  label: "Display"
})(function (props) {
  return getCss(props);
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2Rpc3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUMyQiIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9jb21wb25lbnRzL2VsZW1lbnRzL2xheW91dC9kaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgbXEsIHRvTWVkaWFPYmogfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3R5bGUtdXRpbHNcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b0Rpc3BsYXlDc3MgPSAoaGlkZSwgc2hvdykgPT4ge1xuICBpZiAoaGlkZSkgcmV0dXJuIFwiZGlzcGxheTogbm9uZTtcIjtcbiAgaWYgKHR5cGVvZiBzaG93ID09PSBcImJvb2xlYW5cIiB8fCAhc2hvdykgc2hvdyA9IFwiaW5saW5lXCI7XG4gIHJldHVybiBgZGlzcGxheTogJHtzaG93fTtgO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBnZXRDc3MgPSAoeyBoaWRlLCBzaG93LCB0aGVtZSB9KSA9PiB7XG4gIGNvbnN0IHsgeHM6IHhzSGlkZSwgc206IHNtSGlkZSwgbWQ6IG1kSGlkZSwgbGc6IGxnSGlkZSwgeGw6IHhsSGlkZSB9ID0gdG9NZWRpYU9iaihoaWRlIHx8IGZhbHNlKTtcbiAgY29uc3QgeyB4czogeHNTaG93LCBzbTogc21TaG93LCBtZDogbWRTaG93LCBsZzogbGdTaG93LCB4bDogeGxTaG93IH0gPSB0b01lZGlhT2JqKHNob3cgfHwgZmFsc2UpO1xuICBjb25zdCBicmVha3BvaW50cyA9IFtbc21IaWRlLCBzbVNob3ddLCBbbWRIaWRlLCBtZFNob3ddLCBbbGdIaWRlLCBsZ1Nob3ddLCBbeGxIaWRlLCB4bFNob3ddXTtcblxuICBsZXQgaXNIaWRlRmlyc3QgPSBCb29sZWFuKHhzSGlkZSk7XG4gIGlmICghaXNIaWRlRmlyc3QpIHtcbiAgICBicmVha3BvaW50cy5zb21lKChbYkhpZGUsIGJTaG93XSkgPT4ge1xuICAgICAgaWYgKGJIaWRlIHx8IGJTaG93KSB7XG4gICAgICAgIGlzSGlkZUZpcnN0ID0gISFiU2hvdztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgICR7eHNTaG93ID8gdG9EaXNwbGF5Q3NzKGZhbHNlLCB4c1Nob3cpIDogaXNIaWRlRmlyc3QgPyAnZGlzcGxheTogbm9uZTsnIDogbnVsbH1cbiAgICAkeyhzbUhpZGUgfHwgc21TaG93KSAmJiBgJHttcVsxXX17ICR7dG9EaXNwbGF5Q3NzKHNtSGlkZSwgc21TaG93KX0gfWB9XG4gICAgJHsobWRIaWRlIHx8IG1kU2hvdykgJiYgYCR7bXFbMl19eyAke3RvRGlzcGxheUNzcyhtZEhpZGUsIG1kU2hvdyl9IH1gfVxuICAgICR7KGxnSGlkZSB8fCBsZ1Nob3cpICYmIGAke21xWzNdfXsgJHt0b0Rpc3BsYXlDc3MobGdIaWRlLCBsZ1Nob3cpfSB9YH1cbiAgICAkeyh4bEhpZGUgfHwgeGxTaG93KSAmJiBgJHttcVs0XX17ICR7dG9EaXNwbGF5Q3NzKHhsSGlkZSwgeGxTaG93KX0gfWB9XG4gIGA7XG59XG5cbmNvbnN0IERpc3BsYXkgPSBzdHlsZWQuc3BhbmBcbiAgJHtwcm9wcyA9PiBnZXRDc3MocHJvcHMpfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7XG4iXX0= */"));

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./components/elements/layout/flex.js":
/*!********************************************!*\
  !*** ./components/elements/layout/flex.js ***!
  \********************************************/
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



var _jsxFileName = "/Users/coryp/Desktop/nextjs-test/components/elements/layout/flex.js";





var getCss = function getCss(props) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["css"])("display:", props.inline ? "inline-flex" : "flex", ";flex-direction:", props.flexDirection, ";flex-wrap:", props.flexWrap, ";justify-content:", props.justifyContent, ";align-items:", props.alignItems, ";align-content:", props.alignContent, ";", Object(_utils_style_utils__WEBPACK_IMPORTED_MODULE_6__["withMediaStyles"])(props), "label:getCss;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2ZsZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV1kiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9lbGVtZW50cy9sYXlvdXQvZmxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuaW1wb3J0IHtcbiAgYWRkVGhlbWUsXG4gIG1lZGlhU3R5bGVzUHJvcFR5cGVzLFxuICB3aXRoTWVkaWFTdHlsZXNcbn0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3N0eWxlLXV0aWxzXCI7XG5cbmNvbnN0IGdldENzcyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIGNzc2BcbiAgICBkaXNwbGF5OiAke3Byb3BzLmlubGluZSA/IFwiaW5saW5lLWZsZXhcIiA6IFwiZmxleFwifTtcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcy5mbGV4RGlyZWN0aW9ufTtcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMuZmxleFdyYXB9O1xuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudH07XG4gICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25JdGVtc307XG4gICAgYWxpZ24tY29udGVudDogJHtwcm9wcy5hbGlnbkNvbnRlbnR9O1xuICAgICR7d2l0aE1lZGlhU3R5bGVzKHByb3BzKX1cbiAgYDtcbn07XG5cbmNvbnN0IEZsZXhTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IGdldENzcyhwcm9wcyl9O1xuYDtcblxuY29uc3QgRmxleCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIDxGbGV4U3R5bGVkIHsuLi5wcm9wc30gLz47XG59O1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJyb3dcIixcbiAgICBcInJvdy1yZXZlcnNlXCIsXG4gICAgXCJjb2x1bW5cIixcbiAgICBcImNvbHVtbi1yZXZlcnNlXCJcbiAgXSksXG4gIGZsZXhXcmFwOiBQcm9wVHlwZXMub25lT2YoW1wibm93cmFwXCIsIFwid3JhcFwiLCBcIndyYXAtcmV2ZXJzZVwiXSksXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwiZmxleC1zdGFydFwiLFxuICAgIFwiZmxleC1lbmRcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwic3BhY2UtYXJvdW5kXCJcbiAgXSksXG4gIGFsaWduSXRlbXM6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJzdHJldGNoXCIsXG4gICAgXCJjZW50ZXJcIixcbiAgICBcImZsZXgtc3RhcnRcIixcbiAgICBcImZsZXgtZW5kXCIsXG4gICAgXCJiYXNlbGluZVwiXG4gIF0pLFxuICBhbGlnbkNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJzdHJldGNoXCIsXG4gICAgXCJjZW50ZXJcIixcbiAgICBcImZsZXgtc3RhcnRcIixcbiAgICBcImZsZXgtZW5kXCIsXG4gICAgXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJzcGFjZS1hcm91bmRcIlxuICBdKSxcbiAgLi4ubWVkaWFTdHlsZXNQcm9wVHlwZXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsZXg7XG4iXX0= */"))
  );
};

var FlexStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()("div", {
  target: "elvnr6i0",
  label: "FlexStyled"
})(function (props) {
  return getCss(props);
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0L2ZsZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0I2QiIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9jb21wb25lbnRzL2VsZW1lbnRzL2xheW91dC9mbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5pbXBvcnQge1xuICBhZGRUaGVtZSxcbiAgbWVkaWFTdHlsZXNQcm9wVHlwZXMsXG4gIHdpdGhNZWRpYVN0eWxlc1xufSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3R5bGUtdXRpbHNcIjtcblxuY29uc3QgZ2V0Q3NzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gY3NzYFxuICAgIGRpc3BsYXk6ICR7cHJvcHMuaW5saW5lID8gXCJpbmxpbmUtZmxleFwiIDogXCJmbGV4XCJ9O1xuICAgIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzLmZsZXhEaXJlY3Rpb259O1xuICAgIGZsZXgtd3JhcDogJHtwcm9wcy5mbGV4V3JhcH07XG4gICAganVzdGlmeS1jb250ZW50OiAke3Byb3BzLmp1c3RpZnlDb250ZW50fTtcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbiAgICBhbGlnbi1jb250ZW50OiAke3Byb3BzLmFsaWduQ29udGVudH07XG4gICAgJHt3aXRoTWVkaWFTdHlsZXMocHJvcHMpfVxuICBgO1xufTtcblxuY29uc3QgRmxleFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gZ2V0Q3NzKHByb3BzKX07XG5gO1xuXG5jb25zdCBGbGV4ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICByZXR1cm4gPEZsZXhTdHlsZWQgey4uLnByb3BzfSAvPjtcbn07XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmxleERpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInJvd1wiLFxuICAgIFwicm93LXJldmVyc2VcIixcbiAgICBcImNvbHVtblwiLFxuICAgIFwiY29sdW1uLXJldmVyc2VcIlxuICBdKSxcbiAgZmxleFdyYXA6IFByb3BUeXBlcy5vbmVPZihbXCJub3dyYXBcIiwgXCJ3cmFwXCIsIFwid3JhcC1yZXZlcnNlXCJdKSxcbiAganVzdGlmeUNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJmbGV4LWVuZFwiLFxuICAgIFwiY2VudGVyXCIsXG4gICAgXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJzcGFjZS1hcm91bmRcIlxuICBdKSxcbiAgYWxpZ25JdGVtczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0cmV0Y2hcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiZmxleC1zdGFydFwiLFxuICAgIFwiZmxleC1lbmRcIixcbiAgICBcImJhc2VsaW5lXCJcbiAgXSksXG4gIGFsaWduQ29udGVudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInN0cmV0Y2hcIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiZmxleC1zdGFydFwiLFxuICAgIFwiZmxleC1lbmRcIixcbiAgICBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcInNwYWNlLWFyb3VuZFwiXG4gIF0pLFxuICAuLi5tZWRpYVN0eWxlc1Byb3BUeXBlc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxleDtcbiJdfQ== */"));

var Flex = function Flex(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FlexStyled, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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

/***/ "./components/elements/layout/index.js":
/*!*********************************************!*\
  !*** ./components/elements/layout/index.js ***!
  \*********************************************/
/*! exports provided: Container, Display, Flex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./components/elements/layout/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./components/elements/layout/display.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return _display__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flex */ "./components/elements/layout/flex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _flex__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./components/elements/typography/index.js":
/*!*************************************************!*\
  !*** ./components/elements/typography/index.js ***!
  \*************************************************/
/*! exports provided: Copy, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Copy", function() { return Copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/theme */ "./utils/theme.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);




var defaultSettings = function defaultSettings(props) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("margin:0;font-size:1rem;line-height:calc(1rem * 1.5);@media (min-width:", _utils_theme__WEBPACK_IMPORTED_MODULE_1__["default"].type.breakpoints.lg, "){font-size:1.17rem;line-height:calc(1.17rem * 1.5);}label:defaultSettings;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJb0MiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9lbGVtZW50cy90eXBvZ3JhcGh5L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi91dGlscy90aGVtZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBwcm9wcyA9PiBjc3NgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogY2FsYygxcmVtICogMS41KTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUudHlwZS5icmVha3BvaW50cy5sZ30pIHtcbiAgICBmb250LXNpemU6IDEuMTdyZW07XG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4xN3JlbSAqIDEuNSk7XG4gIH1cbmA7XG5cbmNvbnN0IGR5bmFtaWNTZXR0aW5ncyA9IHByb3BzID0+IGNzc2BcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6ICR7cHJvcHMuc2l6ZSA/IGAke3Byb3BzLnNpemV9cmVtYCA6IGBgfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMuc2l6ZSA/IGBjYWxjKCR7cHJvcHMuc2l6ZX1yZW0gKiAxLjUpYCA6IGBgfTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUudHlwZS5icmVha3BvaW50cy5sZ30pIHtcbiAgICBmb250LXNpemU6ICR7cHJvcHMuc2l6ZURlc2t0b3AgPyBgJHtwcm9wcy5zaXplRGVza3RvcH1yZW1gIDogYGB9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzLnNpemVEZXNrdG9wXG4gICAgICA/IGBjYWxjKCR7cHJvcHMuc2l6ZURlc2t0b3B9cmVtICogMS41KWBcbiAgICAgIDogYGB9O1xuICB9XG5gO1xuXG5jb25zdCBDb3B5ID0gc3R5bGVkLnBgXG4gICR7ZGVmYXVsdFNldHRpbmdzfVxuICBtYXJnaW46IDAgMCAxcmVtIDA7XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgJHtkeW5hbWljU2V0dGluZ3N9XG4gIGNvbG9yOiBob3RwaW5rO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuZXhwb3J0IHsgQ29weSwgVGl0bGUgfTtcbiJdfQ== */"))
  );
};

var dynamicSettings = function dynamicSettings(props) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("margin:0;font-size:", props.size ? "".concat(props.size, "rem") : "", ";line-height:", props.size ? "calc(".concat(props.size, "rem * 1.5)") : "", ";@media (min-width:", _utils_theme__WEBPACK_IMPORTED_MODULE_1__["default"].type.breakpoints.lg, "){font-size:", props.sizeDesktop ? "".concat(props.sizeDesktop, "rem") : "", ";line-height:", props.sizeDesktop ? "calc(".concat(props.sizeDesktop, "rem * 1.5)") : "", ";}label:dynamicSettings;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjb0MiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvY29tcG9uZW50cy9lbGVtZW50cy90eXBvZ3JhcGh5L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi8uLi91dGlscy90aGVtZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBwcm9wcyA9PiBjc3NgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogY2FsYygxcmVtICogMS41KTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUudHlwZS5icmVha3BvaW50cy5sZ30pIHtcbiAgICBmb250LXNpemU6IDEuMTdyZW07XG4gICAgbGluZS1oZWlnaHQ6IGNhbGMoMS4xN3JlbSAqIDEuNSk7XG4gIH1cbmA7XG5cbmNvbnN0IGR5bmFtaWNTZXR0aW5ncyA9IHByb3BzID0+IGNzc2BcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6ICR7cHJvcHMuc2l6ZSA/IGAke3Byb3BzLnNpemV9cmVtYCA6IGBgfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMuc2l6ZSA/IGBjYWxjKCR7cHJvcHMuc2l6ZX1yZW0gKiAxLjUpYCA6IGBgfTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7dGhlbWUudHlwZS5icmVha3BvaW50cy5sZ30pIHtcbiAgICBmb250LXNpemU6ICR7cHJvcHMuc2l6ZURlc2t0b3AgPyBgJHtwcm9wcy5zaXplRGVza3RvcH1yZW1gIDogYGB9O1xuICAgIGxpbmUtaGVpZ2h0OiAke3Byb3BzLnNpemVEZXNrdG9wXG4gICAgICA/IGBjYWxjKCR7cHJvcHMuc2l6ZURlc2t0b3B9cmVtICogMS41KWBcbiAgICAgIDogYGB9O1xuICB9XG5gO1xuXG5jb25zdCBDb3B5ID0gc3R5bGVkLnBgXG4gICR7ZGVmYXVsdFNldHRpbmdzfVxuICBtYXJnaW46IDAgMCAxcmVtIDA7XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgJHtkeW5hbWljU2V0dGluZ3N9XG4gIGNvbG9yOiBob3RwaW5rO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuZXhwb3J0IHsgQ29weSwgVGl0bGUgfTtcbiJdfQ== */"))
  );
};

var Copy = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "e1v120u00",
  label: "Copy"
})(defaultSettings, " margin:0 0 1rem 0;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnFCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGhlbWVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgZGVmYXVsdFNldHRpbmdzID0gcHJvcHMgPT4gY3NzYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMXJlbSAqIDEuNSk7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLnR5cGUuYnJlYWtwb2ludHMubGd9KSB7XG4gICAgZm9udC1zaXplOiAxLjE3cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDEuMTdyZW0gKiAxLjUpO1xuICB9XG5gO1xuXG5jb25zdCBkeW5hbWljU2V0dGluZ3MgPSBwcm9wcyA9PiBjc3NgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAke3Byb3BzLnNpemUgPyBgJHtwcm9wcy5zaXplfXJlbWAgOiBgYH07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzLnNpemUgPyBgY2FsYygke3Byb3BzLnNpemV9cmVtICogMS41KWAgOiBgYH07XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLnR5cGUuYnJlYWtwb2ludHMubGd9KSB7XG4gICAgZm9udC1zaXplOiAke3Byb3BzLnNpemVEZXNrdG9wID8gYCR7cHJvcHMuc2l6ZURlc2t0b3B9cmVtYCA6IGBgfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcy5zaXplRGVza3RvcFxuICAgICAgPyBgY2FsYygke3Byb3BzLnNpemVEZXNrdG9wfXJlbSAqIDEuNSlgXG4gICAgICA6IGBgfTtcbiAgfVxuYDtcblxuY29uc3QgQ29weSA9IHN0eWxlZC5wYFxuICAke2RlZmF1bHRTZXR0aW5nc31cbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICR7ZHluYW1pY1NldHRpbmdzfVxuICBjb2xvcjogaG90cGluaztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmV4cG9ydCB7IENvcHksIFRpdGxlIH07XG4iXX0= */"));

var Title = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h1", {
  target: "e1v120u01",
  label: "Title"
})(dynamicSettings, " color:hotpink;margin-bottom:1rem;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQnVCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbXBvbmVudHMvZWxlbWVudHMvdHlwb2dyYXBoeS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGhlbWVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgZGVmYXVsdFNldHRpbmdzID0gcHJvcHMgPT4gY3NzYFxuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMXJlbSAqIDEuNSk7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLnR5cGUuYnJlYWtwb2ludHMubGd9KSB7XG4gICAgZm9udC1zaXplOiAxLjE3cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDEuMTdyZW0gKiAxLjUpO1xuICB9XG5gO1xuXG5jb25zdCBkeW5hbWljU2V0dGluZ3MgPSBwcm9wcyA9PiBjc3NgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAke3Byb3BzLnNpemUgPyBgJHtwcm9wcy5zaXplfXJlbWAgOiBgYH07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzLnNpemUgPyBgY2FsYygke3Byb3BzLnNpemV9cmVtICogMS41KWAgOiBgYH07XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLnR5cGUuYnJlYWtwb2ludHMubGd9KSB7XG4gICAgZm9udC1zaXplOiAke3Byb3BzLnNpemVEZXNrdG9wID8gYCR7cHJvcHMuc2l6ZURlc2t0b3B9cmVtYCA6IGBgfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcy5zaXplRGVza3RvcFxuICAgICAgPyBgY2FsYygke3Byb3BzLnNpemVEZXNrdG9wfXJlbSAqIDEuNSlgXG4gICAgICA6IGBgfTtcbiAgfVxuYDtcblxuY29uc3QgQ29weSA9IHN0eWxlZC5wYFxuICAke2RlZmF1bHRTZXR0aW5nc31cbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICR7ZHluYW1pY1NldHRpbmdzfVxuICBjb2xvcjogaG90cGluaztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmV4cG9ydCB7IENvcHksIFRpdGxlIH07XG4iXX0= */"));



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
/* harmony import */ var _components_elements_typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/elements/typography */ "./components/elements/typography/index.js");
/* harmony import */ var _components_elements_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/elements/layout */ "./components/elements/layout/index.js");





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
        Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["css"])(emotion_normalize__WEBPACK_IMPORTED_MODULE_11___default.a, " *,*:before,*:after{box-sizing:border-box;}h1{font-size:16px;}label:App;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbnRhaW5lci9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXFCIiwiZmlsZSI6Ii9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L2NvbnRhaW5lci9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3V0aWxzL3RoZW1lXCI7XG5pbXBvcnQgRnVsbFBhZ2UgZnJvbSBcIi4vZnVsbHBhZ2VcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJlbW90aW9uLXRoZW1pbmdcIjtcbmltcG9ydCBlbW90aW9uTm9ybWFsaXplIGZyb20gXCJlbW90aW9uLW5vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgQ29weSwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9lbGVtZW50cy90eXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBGbGV4LCBEaXNwbGF5IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHMvbGF5b3V0XCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEdsb2JhbFxuICAgICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgICAgJHtlbW90aW9uTm9ybWFsaXplfVxuICAgICAgICAgICAgKixcbiAgICAgICAgICAgICo6YmVmb3JlLFxuICAgICAgICAgICAgKjphZnRlciB7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjJlbVwiIH19PlxuICAgICAgICAgIDxUaXRsZSBzaXplPVwiMS42XCIgc2l6ZURlc2t0b3A9XCIzLjJcIj5cbiAgICAgICAgICAgIFNoZXZ5IHdpdGggRW1vdGlvbiBhbmQgUmVhY3QhXG4gICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICB4czogXCJmbGV4LWRpcmVjdGlvbjogY29sdW1uXCIsXG4gICAgICAgICAgICBtZDogXCJmbGV4LWRpcmVjdGlvbjogcm93OyBjb2xvcjogaG90cGlua1wiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEaXNwbGF5IGhpZGU9e3sgc206IHRydWUgfX0gc2hvdz17eyB4czogdHJ1ZSwgbGc6IHRydWUgfX0+XG4gICAgICAgICAgICA8Q29weT5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpXG4gICAgICAgICAgICAgIHNpdCBmdWdpYXQgYXRxdWUgY29uc2VjdGV0dXIgZWl1cyBkb2xvcmlidXMsIGFkLCBhbGlxdWlkIG5paGlsIGN1bVxuICAgICAgICAgICAgICBsYWJvcmlvc2FtIGltcGVkaXQgbWludXMgcmVwcmVoZW5kZXJpdCBkaWN0YSBhIGR1Y2ltdXMgaW52ZW50b3JlXG4gICAgICAgICAgICAgIHF1YW0gcGFyaWF0dXIgcHJvdmlkZW50P1xuICAgICAgICAgICAgPC9Db3B5PlxuICAgICAgICAgIDwvRGlzcGxheT5cblxuICAgICAgICAgIDxDb3B5PlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1YXNpIHNpdFxuICAgICAgICAgICAgZnVnaWF0IGF0cXVlIGNvbnNlY3RldHVyIGVpdXMgZG9sb3JpYnVzLCBhZCwgYWxpcXVpZCBuaWhpbCBjdW1cbiAgICAgICAgICAgIGxhYm9yaW9zYW0gaW1wZWRpdCBtaW51cyByZXByZWhlbmRlcml0IGRpY3RhIGEgZHVjaW11cyBpbnZlbnRvcmVcbiAgICAgICAgICAgIHF1YW0gcGFyaWF0dXIgcHJvdmlkZW50P1xuICAgICAgICAgIDwvQ29weT5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIDxGdWxsUGFnZT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0Z1bGxQYWdlPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */")),
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
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_typography__WEBPACK_IMPORTED_MODULE_12__["Title"], {
        size: "1.6",
        sizeDesktop: "3.2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Shevy with Emotion and React!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_layout__WEBPACK_IMPORTED_MODULE_13__["Flex"], {
        styles: {
          xs: "flex-direction: column",
          md: "flex-direction: row; color: hotpink"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_layout__WEBPACK_IMPORTED_MODULE_13__["Display"], {
        hide: {
          sm: true
        },
        show: {
          xs: true,
          lg: true
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_typography__WEBPACK_IMPORTED_MODULE_12__["Copy"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit fugiat atque consectetur eius doloribus, ad, aliquid nihil cum laboriosam impedit minus reprehenderit dicta a ducimus inventore quam pariatur provident?")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_elements_typography__WEBPACK_IMPORTED_MODULE_12__["Copy"], {
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
/* harmony import */ var _components_elements_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/elements/layout */ "./components/elements/layout/index.js");
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cowsay-browser */ "cowsay-browser");
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cowsay_browser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/coryp/Desktop/nextjs-test/pages/index.js";






var basicStyle =  false ? undefined : {
  name: "18drzhd-basicStyle",
  styles: "padding:2em 0;label:basicStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFzQiIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbnRhaW5lci9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzL2xheW91dFwiO1xuaW1wb3J0IGNvd3NheSBmcm9tIFwiY293c2F5LWJyb3dzZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzLCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IGJhc2ljU3R5bGUgPSBjc3NgXG4gIHBhZGRpbmc6IDJlbSAwO1xuYDtcblxuY29uc3QgQmFzaWMgPSBzdHlsZWQuZGl2YFxuICAke2Jhc2ljU3R5bGV9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnR5cGUuY29sb3JzLnByaW1hcnl9O1xuICBjb2xvcjogYmx1ZTtcbiAgYm9yZGVyOiBibGFjayBkYXNoZWQgMnB4O1xuYDtcblxuY29uc3QgSG9tZSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UaGlzIHBhZ2UgaGFzIGEgdGl0bGUg8J+klDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCYXNpYz5cbiAgICAgICAgPENvbnRhaW5lciB3aWR0aD17eyB0ZXN0OiBcIm9rYXlcIiB9fT5cbiAgICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgICAgICA8aDI+bWVzc2FnZTwvaDI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9CYXNpYz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxwcmU+e2Nvd3NheS5zYXkoeyB0ZXh0OiBcImhpIHRoZXJlIVwiIH0pfTwvcHJlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcHA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */"
};

var Basic = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e16cafwl0",
  label: "Basic"
})(basicStyle, ";background:", function (props) {
  return props.theme.type.colors.primary;
}, ";color:blue;border:black dashed 2px;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl3QiIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL2NvbnRhaW5lci9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzL2xheW91dFwiO1xuaW1wb3J0IGNvd3NheSBmcm9tIFwiY293c2F5LWJyb3dzZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsga2V5ZnJhbWVzLCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IGJhc2ljU3R5bGUgPSBjc3NgXG4gIHBhZGRpbmc6IDJlbSAwO1xuYDtcblxuY29uc3QgQmFzaWMgPSBzdHlsZWQuZGl2YFxuICAke2Jhc2ljU3R5bGV9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnR5cGUuY29sb3JzLnByaW1hcnl9O1xuICBjb2xvcjogYmx1ZTtcbiAgYm9yZGVyOiBibGFjayBkYXNoZWQgMnB4O1xuYDtcblxuY29uc3QgSG9tZSA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UaGlzIHBhZ2UgaGFzIGEgdGl0bGUg8J+klDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCYXNpYz5cbiAgICAgICAgPENvbnRhaW5lciB3aWR0aD17eyB0ZXN0OiBcIm9rYXlcIiB9fT5cbiAgICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgICAgICA8aDI+bWVzc2FnZTwvaDI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9CYXNpYz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxwcmU+e2Nvd3NheS5zYXkoeyB0ZXh0OiBcImhpIHRoZXJlIVwiIH0pfTwvcHJlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcHA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */"));

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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_layout__WEBPACK_IMPORTED_MODULE_4__["Container"], {
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
  }, "message"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_layout__WEBPACK_IMPORTED_MODULE_4__["Container"], {
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
/*! exports provided: mq, addTheme, mediaStylesPropTypes, toMediaObj, withMediaStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mq", function() { return mq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTheme", function() { return addTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaStylesPropTypes", function() { return mediaStylesPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMediaObj", function() { return toMediaObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMediaStyles", function() { return withMediaStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ "./utils/theme.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);







var breakpoints = _theme__WEBPACK_IMPORTED_MODULE_5__["default"].type.breakpoints;

var mq = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(breakpoints).map(function (bp) {
  return "@media (min-width: ".concat(breakpoints[bp], ")");
});

var addTheme = function addTheme(props) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    theme: props.theme ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props.theme) : {}
  });
};
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
 * Helper to ensure that value is a (media) object
 */
// prettier-ignore


var toMediaObj = function toMediaObj(val) {
  if (typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean') return {
    xs: val
  };
  if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(val) === "object" && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(val).length) return val;
  return {};
};

var mediaStylesPropTypes = {
  styles: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object])
};

var withMediaStyles = function withMediaStyles(_ref) {
  var styles = _ref.styles,
      theme = _ref.theme;
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(styles)) return styles;
  if (typeof styles === 'string') return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])(toCssString(styles), "label:withMediaStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3V0aWxzL3N0eWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStENEMiLCJmaWxlIjoiL1VzZXJzL2NvcnlwL0Rlc2t0b3AvbmV4dGpzLXRlc3QvdXRpbHMvc3R5bGUtdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IHsgYnJlYWtwb2ludHMgfSA9IHRoZW1lLnR5cGU7XG5cbmNvbnN0IG1xID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLm1hcChicCA9PiB7XG4gIHJldHVybiBgQG1lZGlhIChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHNbYnBdfSlgO1xufSk7XG5cbmNvbnN0IGFkZFRoZW1lID0gcHJvcHMgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnByb3BzLFxuICAgIHRoZW1lOiBwcm9wcy50aGVtZSA/IHsgLi4ucHJvcHMudGhlbWUgfSA6IHt9XG4gIH07XG59O1xuXG4vKipcbiAqIEFjY2VwdCBzdHJpbmcsIHRyaW0sIHJldHVybiB0ZXJtaW5hdGVkIHdpdGggYSBzZW1pY29sb25cbiAqIElmIGlucHV0IHN0cmluZyBjb250YWlucyBhbGwgc3BhY2VzIG9yIG9ubHkgJzsnLCByZXR1cm4gZW1wdHkgc3RyaW5nXG4gKi9cblxuY29uc3QgZW5zdXJlU2VtaSA9IHZhbCA9PiB7XG4gIHZhbCA9IHZhbC50cmltKCk7XG4gIHJldHVybiB2YWwgJiYgdmFsICE9PSBcIjtcIiA/ICh2YWwuc2xpY2UoLTEpID09PSBcIjtcIiA/IHZhbCA6IGAke3ZhbH07YCkgOiBcIlwiO1xufTtcblxuLyoqXG4gKiBBY2NlcHQgc3RyaW5nIG9yIGEgbGlzdCBvZiBzdHJpbmdzIChmcm9tIFNDKSwgcmV0dXJuIGEgc2luZ2xlIHN0cmluZ1xuICogRmlsdGVyLCB0cmltLCBhbmQgZW5zdXJlIGEgc2VtaWNvbG9uIGRlbGltaXRlclxuICovXG5cbmNvbnN0IHRvQ3NzU3RyaW5nID0gdmFsID0+IHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHJldHVybiBlbnN1cmVTZW1pKHZhbCk7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gXCJcIjtcbiAgcmV0dXJuIHZhbFxuICAgIC5tYXAoZWwgPT4gZW5zdXJlU2VtaShlbCkpXG4gICAgLmpvaW4oXCJcIilcbiAgICAudHJpbSgpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgdG8gZW5zdXJlIHRoYXQgdmFsdWUgaXMgYSAobWVkaWEpIG9iamVjdFxuICovXG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgdG9NZWRpYU9iaiA9IHZhbCA9PiB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpXG4gICAgcmV0dXJuIHsgeHM6IHZhbCB9O1xuICBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiBPYmplY3Qua2V5cyh2YWwpLmxlbmd0aCkgcmV0dXJuIHZhbDtcbiAgcmV0dXJuIHt9O1xufTtcblxuY29uc3QgbWVkaWFTdHlsZXNQcm9wVHlwZXMgPSB7XG4gIHN0eWxlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pXG59O1xuXG5jb25zdCB3aXRoTWVkaWFTdHlsZXMgPSAoeyBzdHlsZXMsIHRoZW1lIH0pID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkgcmV0dXJuIHN0eWxlcztcbiAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSByZXR1cm4gY3NzYCR7dG9Dc3NTdHJpbmcoc3R5bGVzKX1gOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgaWYgKHR5cGVvZiBzdHlsZXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICByZXR1cm4gY3NzYFxuICAgICR7c3R5bGVzLnhzICYmIHRvQ3NzU3RyaW5nKHN0eWxlcy54cyl9XG4gICAgJHtzdHlsZXMuc20gJiYgYCR7bXFbMV19eyR7dG9Dc3NTdHJpbmcoc3R5bGVzLnNtKX19YH1cbiAgICAke3N0eWxlcy5tZCAmJiBgJHttcVsyXX17ICR7dG9Dc3NTdHJpbmcoc3R5bGVzLm1kKX0gfWB9XG4gICAgJHtzdHlsZXMubGcgJiYgYCR7bXFbM119eyAke3RvQ3NzU3RyaW5nKHN0eWxlcy5sZyl9IH1gfVxuICAgICR7c3R5bGVzLnhsICYmIGAke21xWzRdfXsgJHt0b0Nzc1N0cmluZyhzdHlsZXMueGwpfSB9YH1cbiAgYDtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn07XG5cbmV4cG9ydCB7IG1xLCBhZGRUaGVtZSwgbWVkaWFTdHlsZXNQcm9wVHlwZXMsIHRvTWVkaWFPYmosIHdpdGhNZWRpYVN0eWxlcyB9O1xuIl19 */"))
  ); // prettier-ignore

  if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) === "object") {
    // prettier-ignore
    return (
      /*#__PURE__*/
      Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])(styles.xs && toCssString(styles.xs), " ", styles.sm && "".concat(mq[1], "{").concat(toCssString(styles.sm), "}"), " ", styles.md && "".concat(mq[2], "{ ").concat(toCssString(styles.md), " }"), " ", styles.lg && "".concat(mq[3], "{ ").concat(toCssString(styles.lg), " }"), " ", styles.xl && "".concat(mq[4], "{ ").concat(toCssString(styles.xl), " }"), "label:withMediaStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3J5cC9EZXNrdG9wL25leHRqcy10ZXN0L3V0aWxzL3N0eWxlLXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFYyIsImZpbGUiOiIvVXNlcnMvY29yeXAvRGVza3RvcC9uZXh0anMtdGVzdC91dGlscy9zdHlsZS11dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgeyBicmVha3BvaW50cyB9ID0gdGhlbWUudHlwZTtcblxuY29uc3QgbXEgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKGJwID0+IHtcbiAgcmV0dXJuIGBAbWVkaWEgKG1pbi13aWR0aDogJHticmVha3BvaW50c1ticF19KWA7XG59KTtcblxuY29uc3QgYWRkVGhlbWUgPSBwcm9wcyA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJvcHMsXG4gICAgdGhlbWU6IHByb3BzLnRoZW1lID8geyAuLi5wcm9wcy50aGVtZSB9IDoge31cbiAgfTtcbn07XG5cbi8qKlxuICogQWNjZXB0IHN0cmluZywgdHJpbSwgcmV0dXJuIHRlcm1pbmF0ZWQgd2l0aCBhIHNlbWljb2xvblxuICogSWYgaW5wdXQgc3RyaW5nIGNvbnRhaW5zIGFsbCBzcGFjZXMgb3Igb25seSAnOycsIHJldHVybiBlbXB0eSBzdHJpbmdcbiAqL1xuXG5jb25zdCBlbnN1cmVTZW1pID0gdmFsID0+IHtcbiAgdmFsID0gdmFsLnRyaW0oKTtcbiAgcmV0dXJuIHZhbCAmJiB2YWwgIT09IFwiO1wiID8gKHZhbC5zbGljZSgtMSkgPT09IFwiO1wiID8gdmFsIDogYCR7dmFsfTtgKSA6IFwiXCI7XG59O1xuXG4vKipcbiAqIEFjY2VwdCBzdHJpbmcgb3IgYSBsaXN0IG9mIHN0cmluZ3MgKGZyb20gU0MpLCByZXR1cm4gYSBzaW5nbGUgc3RyaW5nXG4gKiBGaWx0ZXIsIHRyaW0sIGFuZCBlbnN1cmUgYSBzZW1pY29sb24gZGVsaW1pdGVyXG4gKi9cblxuY29uc3QgdG9Dc3NTdHJpbmcgPSB2YWwgPT4ge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGVuc3VyZVNlbWkodmFsKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiBcIlwiO1xuICByZXR1cm4gdmFsXG4gICAgLm1hcChlbCA9PiBlbnN1cmVTZW1pKGVsKSlcbiAgICAuam9pbihcIlwiKVxuICAgIC50cmltKCk7XG59O1xuXG4vKipcbiAqIEhlbHBlciB0byBlbnN1cmUgdGhhdCB2YWx1ZSBpcyBhIChtZWRpYSkgb2JqZWN0XG4gKi9cblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b01lZGlhT2JqID0gdmFsID0+IHtcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWwgPT09ICdib29sZWFuJylcbiAgICByZXR1cm4geyB4czogdmFsIH07XG4gIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoKSByZXR1cm4gdmFsO1xuICByZXR1cm4ge307XG59O1xuXG5jb25zdCBtZWRpYVN0eWxlc1Byb3BUeXBlcyA9IHtcbiAgc3R5bGVzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIFByb3BUeXBlcy5vYmplY3RcbiAgXSlcbn07XG5cbmNvbnN0IHdpdGhNZWRpYVN0eWxlcyA9ICh7IHN0eWxlcywgdGhlbWUgfSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSByZXR1cm4gc3R5bGVzO1xuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHJldHVybiBjc3NgJHt0b0Nzc1N0cmluZyhzdHlsZXMpfWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHJldHVybiBjc3NgXG4gICAgJHtzdHlsZXMueHMgJiYgdG9Dc3NTdHJpbmcoc3R5bGVzLnhzKX1cbiAgICAke3N0eWxlcy5zbSAmJiBgJHttcVsxXX17JHt0b0Nzc1N0cmluZyhzdHlsZXMuc20pfX1gfVxuICAgICR7c3R5bGVzLm1kICYmIGAke21xWzJdfXsgJHt0b0Nzc1N0cmluZyhzdHlsZXMubWQpfSB9YH1cbiAgICAke3N0eWxlcy5sZyAmJiBgJHttcVszXX17ICR7dG9Dc3NTdHJpbmcoc3R5bGVzLmxnKX0gfWB9XG4gICAgJHtzdHlsZXMueGwgJiYgYCR7bXFbNF19eyAke3RvQ3NzU3RyaW5nKHN0eWxlcy54bCl9IH1gfVxuICBgO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IHsgbXEsIGFkZFRoZW1lLCBtZWRpYVN0eWxlc1Byb3BUeXBlcywgdG9NZWRpYU9iaiwgd2l0aE1lZGlhU3R5bGVzIH07XG4iXX0= */"))
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
      xs: "320px",
      sm: "375px",
      md: "414px",
      lg: "768px",
      xlg: "1024px"
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