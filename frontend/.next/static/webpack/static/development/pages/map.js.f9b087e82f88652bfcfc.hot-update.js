webpackHotUpdate("static/development/pages/map.js",{

/***/ "./components/Wings/Awing.js":
/*!***********************************!*\
  !*** ./components/Wings/Awing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Awing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Floors_A1Floor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Floors/A1Floor */ "./components/Wings/Floors/A1Floor.js");
/* harmony import */ var _Floors_A2Floor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Floors/A2Floor */ "./components/Wings/Floors/A2Floor.js");
var _jsxFileName = "/Users/mbp/Documents/NSCC/Winter2019/Capstone/nscc360/frontend/components/Wings/Awing.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Awing =
/*#__PURE__*/
function (_Component) {
  _inherits(Awing, _Component);

  function Awing(props) {
    var _this;

    _classCallCheck(this, Awing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Awing).call(this, props));
    _this.FLOORS = {
      1: _Floors_A1Floor__WEBPACK_IMPORTED_MODULE_2__["default"],
      2: _Floors_A2Floor__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    return _this;
  }

  _createClass(Awing, [{
    key: "render",
    value: function render() {
      var Floor = this.FLOORS[this.props.floor];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Floor, _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return Awing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Awing, "propTypes", {
  floor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  handleClickScene: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});



/***/ })

})
//# sourceMappingURL=map.js.f9b087e82f88652bfcfc.hot-update.js.map