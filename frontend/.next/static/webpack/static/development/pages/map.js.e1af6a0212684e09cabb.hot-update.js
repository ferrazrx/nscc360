webpackHotUpdate("static/development/pages/map.js",{

/***/ "./components/Map/index.js":
/*!*********************************!*\
  !*** ./components/Map/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Wings_Awing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Wings/Awing */ "./components/Wings/Awing.js");
/* harmony import */ var _Wings_Bwing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Wings/Bwing */ "./components/Wings/Bwing.js");
/* harmony import */ var _Wings_Cwing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Wings/Cwing */ "./components/Wings/Cwing.js");
/* harmony import */ var _Wings_Dwing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Wings/Dwing */ "./components/Wings/Dwing.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/Map/style.js");
var _jsxFileName = "/Users/mbp/Documents/NSCC/Winter2019/Capstone/nscc360/frontend/components/Map/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Map =
/*#__PURE__*/
function (_Component) {
  _inherits(Map, _Component);

  function Map(props) {
    var _this;

    _classCallCheck(this, Map);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickScene", function (e) {
      console.log(e.target.dataset);
    });

    _this.WINGS = {
      A: _Wings_Awing__WEBPACK_IMPORTED_MODULE_2__["default"],
      B: _Wings_Bwing__WEBPACK_IMPORTED_MODULE_3__["default"],
      C: _Wings_Cwing__WEBPACK_IMPORTED_MODULE_4__["default"],
      D: _Wings_Dwing__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
    return _this;
  }

  _createClass(Map, [{
    key: "render",
    value: function render() {
      var _this$props$scene = this.props.scene,
          wing = _this$props$scene.wing,
          floor = _this$props$scene.floor;
      var Wing = this.WINGS[wing];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_6__["WingContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wing, {
        floor: floor,
        handleClickScene: this.handleClickScene,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-center text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "You are on ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, wing), " wing - ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, floor), " ", "floor."));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Map, "propTypes", {
  scene: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    wing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    floor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    sceneID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired,
  handleSceneChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});



/***/ })

})
//# sourceMappingURL=map.js.e1af6a0212684e09cabb.hot-update.js.map