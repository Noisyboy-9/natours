/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/NavigationShowAnimation.js":
/*!***********************************************!*\
  !*** ./src/js/lib/NavigationShowAnimation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navigationShowAnimation; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar navigationShowAnimation =\n/*#__PURE__*/\nfunction () {\n  function navigationShowAnimation(nav, background, button, icon) {\n    _classCallCheck(this, navigationShowAnimation);\n\n    nav = document.querySelector(nav);\n    background = document.querySelector(background);\n    button = document.querySelector(button);\n    icon = document.querySelector(icon);\n    this._nav = nav;\n    this._background = background;\n    this._button = button;\n    this._icon = icon;\n    this._show = false; //Boolean showing the navigation or not\n\n    this.setButtonClickListener();\n  }\n\n  _createClass(navigationShowAnimation, [{\n    key: \"setButtonClickListener\",\n    value: function setButtonClickListener() {\n      var _this = this;\n\n      this._button.addEventListener('click', function (e) {\n        e.preventDefault();\n        _this._show = !_this._show;\n\n        _this.toggleBackground();\n\n        _this.showNavigation();\n\n        _this.toggleIconStatus();\n      });\n    }\n  }, {\n    key: \"toggleBackground\",\n    value: function toggleBackground() {\n      if (this._show) {\n        this._background.style.transform = 'scale(80)';\n      } else {\n        this._background.style.transform = 'scale(1)';\n      }\n    }\n  }, {\n    key: \"showNavigation\",\n    value: function showNavigation() {\n      if (this._show) {\n        this._nav.style.width = '100%';\n        this._nav.style.opacity = '1';\n      } else {\n        this._nav.style.width = '0%';\n        this._nav.style.opacity = '0';\n      }\n    }\n  }, {\n    key: \"toggleIconStatus\",\n    value: function toggleIconStatus() {\n      if (this._show) {\n        this._icon.classList.add('navigation__icon--for-animation');\n      } else {\n        this._icon.classList.remove('navigation__icon--for-animation');\n      }\n    }\n  }]);\n\n  return navigationShowAnimation;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/lib/NavigationShowAnimation.js?");

/***/ }),

/***/ "./src/js/lib/Popup.js":
/*!*****************************!*\
  !*** ./src/js/lib/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popup; });\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Popup =\n/*#__PURE__*/\nfunction () {\n  function Popup(popup, popupContent, openButtons, closeButton) {\n    _classCallCheck(this, Popup);\n\n    this._popup = document.querySelector(popup);\n    this._popupContent = document.querySelector(popupContent);\n    this._OpenButtons = document.querySelectorAll(openButtons);\n    this._closeButton = document.querySelector(closeButton);\n    this.buttonClickListener();\n  }\n\n  _createClass(Popup, [{\n    key: \"buttonClickListener\",\n    value: function buttonClickListener() {\n      var _this = this;\n\n      this._OpenButtons.forEach(function (openButton) {\n        openButton.addEventListener('click', function (event) {\n          event.preventDefault();\n\n          _this.showPopupBackground();\n\n          _this.showPopContent();\n        });\n      });\n    }\n  }, {\n    key: \"showPopupBackground\",\n    value: function showPopupBackground() {\n      this._popup.style.opacity = 1;\n      this._popup.style.visibility = 'visible';\n    }\n  }, {\n    key: \"showPopContent\",\n    value: function showPopContent() {\n      this._popupContent.style.transform = 'translate(-50%, -50%) scale(1)';\n      this._popupContent.style.opacity = 1;\n      this.setCloseListener();\n    }\n  }, {\n    key: \"setCloseListener\",\n    value: function setCloseListener() {\n      var _this2 = this;\n\n      this._closeButton.addEventListener('click', function (event) {\n        event.preventDefault();\n\n        _this2.closePopup();\n      });\n    }\n  }, {\n    key: \"closePopup\",\n    value: function closePopup() {\n      this._popupContent.style.transform = 'translate(-50%, -50%) scale(.25)';\n      this._popupContent.style.opacity = 0;\n      this._popup.style.opacity = 0;\n      this._popup.style.visibility = 'hidden';\n    }\n  }]);\n\n  return Popup;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/lib/Popup.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_NavigationShowAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/NavigationShowAnimation */ \"./src/js/lib/NavigationShowAnimation.js\");\n/* harmony import */ var _lib_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/Popup */ \"./src/js/lib/Popup.js\");\n\n\n\n\nnew _lib_NavigationShowAnimation__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#navigation-nav', '#navigation-background', '#navigation-button', '#navigation-icon');\nnew _lib_Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('#popup', '#popup-content', '#showPopupBtn', '#popup-close');\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });