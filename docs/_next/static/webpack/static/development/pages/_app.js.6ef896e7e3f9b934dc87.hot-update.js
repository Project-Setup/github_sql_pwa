webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/utils/redux/withRedux.tsx":
/*!***************************************!*\
  !*** ./src/utils/redux/withRedux.tsx ***!
  \***************************************/
/*! exports provided: defaultConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return defaultConfig; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");




var _jsxFileName = "/home/clfhhc/src/nextjs_redux/src/utils/redux/withRedux.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var defaultConfig = {
  storeKey: '__NEXT_REDUX_STORE__',
  serializeState: function serializeState(state) {
    return state;
  },
  deserializeState: function deserializeState(state) {
    return state;
  },
  isServerSideRendering: true
};

function getIsServer() {
  return false;
}

function serveStore(_ref) {
  var seriralizedState = _ref.seriralizedState,
      config = _ref.config,
      ctx = _ref.ctx,
      makeStore = _ref.makeStore;

  var _defaultConfig$config = _objectSpread({}, defaultConfig, {}, config),
      deserializeState = _defaultConfig$config.deserializeState,
      storeKey = _defaultConfig$config.storeKey;

  var createStore = function createStore() {
    return makeStore(_objectSpread({
      preloadedState: deserializeState(seriralizedState)
    }, ctx, {}, config));
  }; // always create store if server


  if (getIsServer()) return createStore(); // reuse store if client

  window[storeKey] = window[storeKey] || createStore();
  return window[storeKey];
}

function withRedux(_ref2) {
  var _this = this;

  var makeStore = _ref2.makeStore,
      _ref2$config = _ref2.config,
      opitonalConfig = _ref2$config === void 0 ? {} : _ref2$config;

  var config = _objectSpread({}, defaultConfig, {}, opitonalConfig);

  return function (App) {
    var WrappedApp = function WrappedApp(_ref3) {
      var initialProps = _ref3.initialProps,
          initialState = _ref3.initialState,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, ["initialProps", "initialState"]);

      var store = serveStore({
        seriralizedState: initialState,
        config: config,
        makeStore: makeStore
      }); // eslint-disable-next-line react/jsx-props-no-spreading

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, initialProps, {
        store: store,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 14
        }
      }));
    };

    if (config.isServerSideRendering || App.getInitialProps) {
      WrappedApp.getInitialProps = function _callee(appCtx) {
        var store, initialProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = serveStore({
                  ctx: appCtx.ctx,
                  makeStore: makeStore
                }); // eslint-disable-next-line no-param-reassign

                appCtx.ctx.store = store;

                if (!(typeof App.getInitialProps === 'function')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(App.getInitialProps.call(App, appCtx));

              case 5:
                _context.t0 = _context.sent;
                _context.next = 9;
                break;

              case 8:
                _context.t0 = {};

              case 9:
                initialProps = _context.t0;
                return _context.abrupt("return", {
                  initialProps: initialProps,
                  initialState: config.serializeState(store.getState())
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, null, Promise);
      };
    }

    return WrappedApp;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withRedux);

/***/ })

})
//# sourceMappingURL=_app.js.6ef896e7e3f9b934dc87.hot-update.js.map