webpackHotUpdate("static/development/pages/map.js",{

/***/ "./components/Tour/index.js":
/*!**********************************!*\
  !*** ./components/Tour/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tour; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Map */ "./components/Map/index.js");
/* harmony import */ var _VR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VR */ "./components/VR/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/Tour/style.js");
var _jsxFileName = "/Users/mbp/Documents/NSCC/Winter2019/Capstone/nscc360/frontend/components/Tour/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Tour =
/*#__PURE__*/
function (_Component) {
  _inherits(Tour, _Component);

  function Tour() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tour);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tour)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currentScene: {
        sceneID: "A_WING_2_FRONT_ENTRANCE",
        wing: "A",
        floor: "2"
      },
      mapOpened: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSceneChange", function (newSceneID) {
      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          currentScene: _objectSpread({}, prevState.currentScene, {
            sceneID: newSceneID
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWingChange", function (e) {
      var _e$target$dataset = e.target.dataset,
          wing = _e$target$dataset.wing,
          floor = _e$target$dataset.floor;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          currentScene: _objectSpread({}, prevState.currentScene, {
            wing: wing,
            floor: floor
          })
        });
      });
    });

    return _this;
  }

  _createClass(Tour, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["TourContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["MapButton"], {
        onClick: function onClick() {
          return _this2.setState({
            mapOpened: !_this2.state.mapOpened
          });
        },
        size: this.state.mapOpened ? "true" : undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.state.mapOpened ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-map-marked-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["MapContainer"], {
        opened: this.state.mapOpened,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["FloorNav"], {
        opened: this.state.floorOpened,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Select a wing and a floor:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["DropdownContainer"], {
        className: "wings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-toggle",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "A Wing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "A",
        "data-floor": "1",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "1st Floor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "A",
        "data-floor": "2",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "2st Floor"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-toggle",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "B Wing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "B",
        "data-floor": "1",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "1st Floor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "B",
        "data-floor": "2",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "2st Floor"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-toggle",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "C Wing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "C",
        "data-floor": "1",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "1st Floor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "C",
        "data-floor": "2",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "2st Floor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "C",
        "data-floor": "3",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "3st Floor"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-toggle",
        id: "dropdownMenuButton",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "D Wing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu",
        "aria-labelledby": "dropdownMenuButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "D",
        "data-floor": "1",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "1st Floor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "D",
        "data-floor": "2",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "2st Floor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "dropdown-item",
        "data-wing": "D",
        "data-floor": "3",
        onClick: this.handleWingChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "3st Floor"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
        scene: this.state.currentScene // Pass the state to map so map component can render the proper scene
        ,
        handleSceneChange: this.handleSceneChange //Pass the function handleSceneChange to map so when scene is selected the state is updated
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VR__WEBPACK_IMPORTED_MODULE_2__["default"], {
        scene: this.state.currentScene.sceneID // Pass the state to VR so the component can render the proper scene
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }));
    }
  }]);

  return Tour;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=map.js.4eddfd93905b239e9ffe.hot-update.js.map