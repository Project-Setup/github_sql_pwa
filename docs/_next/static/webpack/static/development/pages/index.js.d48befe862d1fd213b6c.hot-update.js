webpackHotUpdate("static/development/pages/index.js",{

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







var numDivStyles = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("display:flex;align-items:center;& > input{max-width:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_5__["default"])(10), ";width:100%;height:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_5__["default"])(20), ";margin-top:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_5__["default"])(10), ";};label:numDivStyles;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NsZmhoYy9zcmMvbmV4dGpzX3JlZHV4L3NyYy9mZWF0dXJlcy9jb3VudC9Db3VudERpdi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXdCIiwiZmlsZSI6Ii9ob21lL2NsZmhoYy9zcmMvbmV4dGpzX3JlZHV4L3NyYy9mZWF0dXJlcy9jb3VudC9Db3VudERpdi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBpbmNyZW1lbnRGaXJzdCwgaW5jcmVtZW50U2Vjb25kIH0gZnJvbSAnLi9jb3VudFNsaWNlJztcbmltcG9ydCB7IEFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3RvcmVzJztcbmltcG9ydCB7IHNlbGVjdEZpcnN0Q291bnQsIHNlbGVjdFNlY29uZENvdW50IH0gZnJvbSAnLi9jb3VudFNlbGVjdG9ycyc7XG5pbXBvcnQgcmVtIGZyb20gJy4uLy4uL3V0aWxzL3N0eWxlL3JlbSc7XG5cbmNvbnN0IG51bURpdlN0eWxlcyA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiA+IGlucHV0IHtcbiAgICBtYXgtd2lkdGg6ICR7cmVtKDEwKX07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAke3JlbSgyMCl9O1xuICAgIG1hcmdpbi10b3A6ICR7cmVtKDEwKX07XG4gIH1cbmA7XG5cbmNvbnN0IENvdW50RGl2OiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW2FkZDEsIGNoYW5nZUFkZDFdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthZGQyLCBjaGFuZ2VBZGQyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuICBjb25zdCBudW0xID0gdXNlU2VsZWN0b3Ioc2VsZWN0Rmlyc3RDb3VudCk7XG4gIGNvbnN0IG51bTIgPSB1c2VTZWxlY3RvcihzZWxlY3RTZWNvbmRDb3VudCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjc3M9e251bURpdlN0eWxlc30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQWRkMShwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXthZGQxfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnRGaXJzdChhZGQxKSl9PlxuICAgICAgICAgIGluY3JlbWVudDFcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwPntudW0xfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjc3M9e251bURpdlN0eWxlc30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQWRkMihwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXthZGQyfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnRTZWNvbmQoYWRkMSkpfT5cbiAgICAgICAgICBpbmNyZW1lbnQyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8cD57bnVtMn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50RGl2O1xuIl19 */"));

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
      lineNumber: 28,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: numDivStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
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
      lineNumber: 37,
      columnNumber: 9
    }
  }, "increment1"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, num1)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: numDivStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return dispatch(Object(_countSlice__WEBPACK_IMPORTED_MODULE_3__["incrementSecond"])(add1));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "increment2"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, num2)));
};

/* harmony default export */ __webpack_exports__["default"] = (CountDiv);

/***/ })

})
//# sourceMappingURL=index.js.d48befe862d1fd213b6c.hot-update.js.map