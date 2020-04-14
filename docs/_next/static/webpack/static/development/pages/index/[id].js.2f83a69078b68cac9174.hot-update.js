webpackHotUpdate("static/development/pages/index/[id].js",{

/***/ "./src/features/count/CountDiv.tsx":
/*!*****************************************!*\
  !*** ./src/features/count/CountDiv.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _countSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countSlice */ "./src/features/count/countSlice.ts");
/* harmony import */ var _countSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countSelectors */ "./src/features/count/countSelectors.ts");
/* harmony import */ var _utils_style_rem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/style/rem */ "./src/utils/style/rem.ts");
var _this = undefined,
    _jsxFileName = "/home/clfhhc/src/nextjs_redux/src/features/count/CountDiv.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var numDivStyles = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("display:flex;align-items:center;& > *{margin:0 ", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_5__["default"])(5), ";}& > input{max-width:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_5__["default"])(50), ";width:100%;height:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_5__["default"])(15), ";};label:numDivStyles;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZmhoYy9zcmMvbmV4dGpzX3JlZHV4L3NyYy9mZWF0dXJlcy9jb3VudC9Db3VudERpdi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXdCIiwiZmlsZSI6Ii9ob21lL2NsZmhoYy9zcmMvbmV4dGpzX3JlZHV4L3NyYy9mZWF0dXJlcy9jb3VudC9Db3VudERpdi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBpbmNyZW1lbnRGaXJzdCwgaW5jcmVtZW50U2Vjb25kIH0gZnJvbSAnLi9jb3VudFNsaWNlJztcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3RvcmVzJztcbmltcG9ydCB7IHNlbGVjdEZpcnN0Q291bnQsIHNlbGVjdFNlY29uZENvdW50IH0gZnJvbSAnLi9jb3VudFNlbGVjdG9ycyc7XG5pbXBvcnQgcmVtIGZyb20gJy4uLy4uL3V0aWxzL3N0eWxlL3JlbSc7XG5cbmNvbnN0IG51bURpdlN0eWxlcyA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMCAke3JlbSg1KX07XG4gIH1cbiAgJiA+IGlucHV0IHtcbiAgICBtYXgtd2lkdGg6ICR7cmVtKDUwKX07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAke3JlbSgxNSl9O1xuICB9XG5gO1xuXG5jb25zdCBDb3VudERpdjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFthZGQxLCBjaGFuZ2VBZGQxXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWRkMiwgY2hhbmdlQWRkMl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcbiAgY29uc3QgbnVtMSA9IHVzZVNlbGVjdG9yKHNlbGVjdEZpcnN0Q291bnQpO1xuICBjb25zdCBudW0yID0gdXNlU2VsZWN0b3Ioc2VsZWN0U2Vjb25kQ291bnQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY3NzPXtudW1EaXZTdHlsZXN9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUFkZDEocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17YWRkMX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50Rmlyc3QoYWRkMSkpfT5cbiAgICAgICAgICBhZGQgZmlyc3QgbnVtYmVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8cD57bnVtMX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY3NzPXtudW1EaXZTdHlsZXN9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUFkZDIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17YWRkMn1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50U2Vjb25kKGFkZDIpKX0+XG4gICAgICAgICAgYWRkIHNlY29uZCBudW1iZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwPntudW0yfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnREaXY7XG4iXX0= */"));

var CountDiv = function CountDiv() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      add1 = _useState[0],
      changeAdd1 = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      add2 = _useState2[0],
      changeAdd2 = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var num1 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_countSelectors__WEBPACK_IMPORTED_MODULE_4__["selectFirstCount"]);
  var num2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_countSelectors__WEBPACK_IMPORTED_MODULE_4__["selectSecondCount"]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: numDivStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", {
    type: "number",
    onChange: function onChange(e) {
      changeAdd1(parseInt(e.target.value, 10));
    },
    value: add1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return dispatch(Object(_countSlice__WEBPACK_IMPORTED_MODULE_3__["incrementFirst"])(add1));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "add first number"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, num1)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: numDivStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("input", {
    type: "number",
    onChange: function onChange(e) {
      changeAdd2(parseInt(e.target.value, 10));
    },
    value: add2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return dispatch(Object(_countSlice__WEBPACK_IMPORTED_MODULE_3__["incrementSecond"])(add2));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "add second number"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, num2)));
};

/* harmony default export */ __webpack_exports__["default"] = (CountDiv);

/***/ })

})
//# sourceMappingURL=[id].js.2f83a69078b68cac9174.hot-update.js.map