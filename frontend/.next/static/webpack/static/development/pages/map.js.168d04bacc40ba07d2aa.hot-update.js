webpackHotUpdate("static/development/pages/map.js",{

/***/ "./components/Tour/style.js":
/*!**********************************!*\
  !*** ./components/Tour/style.js ***!
  \**********************************/
/*! exports provided: DropdownContainer, FloorNav, TourContainer, MapContainer, MapButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownContainer", function() { return DropdownContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorNav", function() { return FloorNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourContainer", function() { return TourContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapButton", function() { return MapButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var DropdownContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__DropdownContainer",
  componentId: "cqxi18-0"
})(["height:100%;display:flex;flex-direction:column;justify-content:space-around;font-size:2em;font-weight:800;font-family:\"Oswald\",sans-serif;.dropdown{cursor:pointer;flex:1;text-align:center;}.dropdown-menu{width:100%;text-align:center;}.dropdown-item:hover{color:#fff;}"]);
var FloorNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "style__FloorNav",
  componentId: "cqxi18-1"
})(["position:absolute;z-index:9999;background:#fff;padding:5px;height:50vh;top:50%;left:0;transform:translateY(-50%) translateX(-100%);"]);
var TourContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "style__TourContainer",
  componentId: "cqxi18-2"
})(["position:relative;"]);
var MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__MapContainer",
  componentId: "cqxi18-3"
})(["width:750px;position:absolute;z-index:1;padding:1%;bottom:0;right:0;transform:translateX(100%);transition:all 1s;opacity:0;", ""], function (_ref) {
  var opened = _ref.opened;
  return opened && "transform: translateX(0%); opacity: 1;";
});
var MapButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__MapButton",
  componentId: "cqxi18-4"
})(["color:#fff;position:absolute;z-index:1;bottom:40px;right:40px;cursor:pointer;transition:all 0.5s;z-index:2;font-size:", ";&:hover{transform:scale(1.5,1.5);}"], function (_ref2) {
  var size = _ref2.size;
  return size ? "2em" : "33m";
});


/***/ })

})
//# sourceMappingURL=map.js.168d04bacc40ba07d2aa.hot-update.js.map