webpackHotUpdate("static/development/pages/map.js",{

/***/ "./components/Wings/Cwing.js":
/*!***********************************!*\
  !*** ./components/Wings/Cwing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cwing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Floors_C1Floor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Floors/C1Floor */ "./components/Wings/Floors/C1Floor.js");
/* harmony import */ var _Floors_C2Floor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Floors/C2Floor */ "./components/Wings/Floors/C2Floor.js");
/* harmony import */ var _Floors_C3Floor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Floors/C3Floor */ "./components/Wings/Floors/C3Floor.js");
var _jsxFileName = "/Users/mbp/Documents/NSCC/Winter2019/Capstone/nscc360/frontend/components/Wings/Cwing.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Cwing =
/*#__PURE__*/
function (_Component) {
  _inherits(Cwing, _Component);

  function Cwing(props) {
    var _this;

    _classCallCheck(this, Cwing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cwing).call(this, props));
    _this.FLOORS = {
      1: _Floors_C1Floor__WEBPACK_IMPORTED_MODULE_2__["default"],
      2: _Floors_C2Floor__WEBPACK_IMPORTED_MODULE_3__["default"],
      3: _Floors_C3Floor__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    return _this;
  }

  _createClass(Cwing, [{
    key: "render",
    value: function render() {
      var Floor = this.FLOORS[this.props.floor];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Floor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    }
  }]);

  return Cwing;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Cwing, "propTypes", {
  floor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});



/***/ })

})
//# sourceMappingURL=map.js.2e55cb0a2b9ebdc9cd0e.hot-update.js.map