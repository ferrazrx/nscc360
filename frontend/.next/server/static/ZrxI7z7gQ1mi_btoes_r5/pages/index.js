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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Logo; });
/* unused harmony export Nav */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "style__Logo",
  componentId: "sc-1ihft4o-0"
})(["width:120px;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Container",
  componentId: "sc-1ihft4o-1"
})(["position:absolute;top:0;right:50%;transform:translateX(50%);z-index:1;"]);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);






next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__[/* Logo */ "b"], {
    src: "/static/logo.svg",
    alt: "NSCC 360 logo"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#nav",
    "aria-controls": "navbarTogglerDemo02",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav ml-auto mt-2 mt-lg-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link px-3 border-right",
    href: "#"
  }, "Home", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link px-3 border-right",
    href: "#"
  }, "Campus")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link px-3 border-right",
    href: "#"
  }, "Tour")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/map"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link px-3 border-right"
  }, "Map"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link px-3",
    href: "#"
  }, "Contact")))));
}

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Navbar/index.js
var Navbar = __webpack_require__(7);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Banner/style.js

var BannerContainer = external_styled_components_default.a.div.withConfig({
  displayName: "style__BannerContainer",
  componentId: "chklh3-0"
})([".content{color:#fff;padding:70px 0;h1{font-family:\"Oswald\",sans-serif;text-align:center;font-weight:900;font-size:4em;}h2:nth-of-type(1){text-align:center;font-weight:100;font-family:\"Open Sans\",sans-serif;font-size:3.2em;}h2:nth-of-type(2){text-align:center;font-weight:500;font-family:\"Open Sans\",sans-serif;}.line{background:#fff;width:60px;height:2px;display:inline-block;margin:10px 30px;}.button{display:block;margin:0 auto;width:150px;transition:0.4s all;}.button:hover{cursor:pointer;transform:scale(1.2,1.2);}}"]);

// CONCATENATED MODULE: ./components/Video/style.js

var VideoContainer = external_styled_components_default.a.video.withConfig({
  displayName: "style__VideoContainer",
  componentId: "sc-50wkk6-0"
})(["position:fixed;right:0;top:0;min-width:100%;min-height:100%;filter:brightness(50%);z-index:-1;"]);

// CONCATENATED MODULE: ./components/Video/index.js


function Video() {
  return external_react_default.a.createElement(VideoContainer, {
    autoPlay: true,
    muted: true,
    loop: true
  }, external_react_default.a.createElement("source", {
    src: "/static/bg.mp4",
    type: "video/mp4"
  }));
}
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Banner/index.js





function Banner(props) {
  console.log(props);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Video, null), external_react_default.a.createElement(BannerContainer, {
    className: "container"
  }, external_react_default.a.createElement(Navbar["a" /* default */], null), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("h2", null, "EXPLORE NSCC"), external_react_default.a.createElement("h1", null, "INSTITUTE OF", external_react_default.a.createElement("br", null), "TECHNOLOGY"), external_react_default.a.createElement("h2", null, external_react_default.a.createElement("span", {
    className: "line"
  }), "IN 360\xB0", external_react_default.a.createElement("span", {
    className: "line"
  })), external_react_default.a.createElement("div", {
    className: "button"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/map"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
    src: "/static/button.svg",
    alt: "look inside"
  })))))));
}
// CONCATENATED MODULE: ./pages/index.js



/* harmony default export */ var pages = __webpack_exports__["default"] = (function (props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Banner, props), external_react_default.a.createElement("div", {
    className: "container-fluid bg-white"
  }, external_react_default.a.createElement("div", {
    className: "container py-5"
  }, external_react_default.a.createElement("h1", null, "What is NSCC 360\xB0?"), external_react_default.a.createElement("hr", {
    className: "w-75"
  }), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-7 py-5"
  }, external_react_default.a.createElement("p", null, "The Institute of Technology Campus is located in the north end of Halifax and enjoys incredible views of the Bedford Basin. The campus has undergone a major transformation with a new library, learning commons and fresh, updated street presence. Students enjoy a full-service cafeteria, an exercise room and a vibrant Student Association. The campus is easily accessible by bus and is within walking distance of caf\xE9s, bakeries, restaurants, shops and banks.")), external_react_default.a.createElement("div", {
    className: "col-md-5"
  }, external_react_default.a.createElement("img", {
    className: "w-100",
    src: "/static/vr-headset.png",
    alt: "vr-headset"
  }))), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-6"
  }, external_react_default.a.createElement("iframe", {
    className: "d-block mx-auto w-100 border-0 shadow",
    height: "400",
    src: "/vr/index.html" //src="http://localhost:8081/index.html"

  })), external_react_default.a.createElement("div", {
    className: "col-md-6 d-flex justify-content-center align-items-center"
  }, external_react_default.a.createElement("p", null, "NSCC 360\xB0 was created to give you a little taste of all the benefits the campus provides. It also gives you an idea of what the facilities look like. If you have a VR-headset you can use it to make a virtual tour through the campus. If you don't have one, don't worry! Use you favorite browser to navigate through the pages. We hope you have a fun and a great time at NSCC 360\xB0!"))), external_react_default.a.createElement("h4", {
    className: "pt-5 text-center"
  }, "How is the IT Campus layout?"), external_react_default.a.createElement("hr", {
    className: "w-75"
  }), external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-md-4"
  }, external_react_default.a.createElement("img", {
    className: "w-100",
    src: "/static/campus.svg",
    alt: "NSCC campus map"
  })), external_react_default.a.createElement("div", {
    className: "col-md-8 py-5"
  }, external_react_default.a.createElement("p", null, "The IT campus is divided into 4 wings; A wing, B wings, C wing and D wing, as shown in the picture aside. You start you experience entering in the campus by the front entrance of A wing. You can find the library and Student service in this wing. You can then move forward to the other wings using the VR. Enjoy your experience!"))), external_react_default.a.createElement("footer", null, external_react_default.a.createElement("hr", null), external_react_default.a.createElement("p", {
    className: "text-center"
  }, "NSCC 2019 \xA9 All Rights Reserved")))));
});

/***/ })
/******/ ]);