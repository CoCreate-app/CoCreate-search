(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreateSearch"] = factory();
	else
		root["CoCreateSearch"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CoCreate-search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CoCreate-search.js":
/*!********************************!*\
  !*** ./src/CoCreate-search.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CoCreateSearch = {\n  init: function init(container) {\n    var mainContainer = container || document;\n\n    if (!mainContainer.querySelectorAll) {\n      return;\n    }\n\n    var search_elements = mainContainer.querySelectorAll('.search-options');\n    var self = this;\n    search_elements.forEach(function (element) {\n      self.searchEvent(element);\n    });\n  },\n  searchEvent: function searchEvent(element) {\n    var self = this;\n    element.addEventListener('input', function () {\n      self.runSearchOfElement(element, this.value);\n    });\n  },\n  runSearchOfElement: function runSearchOfElement(searchElement, value) {\n    var search_id = searchElement.getAttribute('data-search_id');\n    var item_selector = searchElement.getAttribute('data-item_selector');\n\n    if (!search_id || !item_selector) {\n      return;\n    }\n\n    var items = document.querySelectorAll(\"[data-search_id='\".concat(search_id, \"'] \").concat(item_selector));\n    items.forEach(function (item) {\n      var textContent = item.innerText;\n\n      if (textContent.includes(value)) {\n        item.classList.remove('hidden');\n      } else {\n        item.classList.add('hidden');\n      }\n    });\n  }\n};\nCoCreateSearch.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateSearch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZVNlYXJjaC8uL3NyYy9Db0NyZWF0ZS1zZWFyY2guanM/YTJjMSJdLCJuYW1lcyI6WyJDb0NyZWF0ZVNlYXJjaCIsImluaXQiLCJjb250YWluZXIiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VhcmNoX2VsZW1lbnRzIiwic2VsZiIsImZvckVhY2giLCJlbGVtZW50Iiwic2VhcmNoRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicnVuU2VhcmNoT2ZFbGVtZW50IiwidmFsdWUiLCJzZWFyY2hFbGVtZW50Iiwic2VhcmNoX2lkIiwiZ2V0QXR0cmlidXRlIiwiaXRlbV9zZWxlY3RvciIsIml0ZW1zIiwiaXRlbSIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUEsSUFBTUEsY0FBYyxHQUFHO0FBQ3RCQyxNQUFJLEVBQUUsY0FBU0MsU0FBVCxFQUFvQjtBQUN6QixRQUFNQyxhQUFhLEdBQUdELFNBQVMsSUFBSUUsUUFBbkM7O0FBRUEsUUFBSSxDQUFDRCxhQUFhLENBQUNFLGdCQUFuQixFQUFxQztBQUNwQztBQUNBOztBQUVELFFBQUlDLGVBQWUsR0FBR0gsYUFBYSxDQUFDRSxnQkFBZCxDQUErQixpQkFBL0IsQ0FBdEI7QUFDQSxRQUFNRSxJQUFJLEdBQUcsSUFBYjtBQUNBRCxtQkFBZSxDQUFDRSxPQUFoQixDQUF3QixVQUFBQyxPQUFPLEVBQUk7QUFDbENGLFVBQUksQ0FBQ0csV0FBTCxDQUFpQkQsT0FBakI7QUFDQSxLQUZEO0FBR0EsR0FicUI7QUFldEJDLGFBQVcsRUFBRSxxQkFBU0QsT0FBVCxFQUFrQjtBQUM5QixRQUFNRixJQUFJLEdBQUcsSUFBYjtBQUNBRSxXQUFPLENBQUNFLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVc7QUFDNUNKLFVBQUksQ0FBQ0ssa0JBQUwsQ0FBd0JILE9BQXhCLEVBQWlDLEtBQUtJLEtBQXRDO0FBQ0EsS0FGRDtBQUdBLEdBcEJxQjtBQXNCdEJELG9CQUFrQixFQUFFLDRCQUFTRSxhQUFULEVBQXdCRCxLQUF4QixFQUErQjtBQUNsRCxRQUFNRSxTQUFTLEdBQUdELGFBQWEsQ0FBQ0UsWUFBZCxDQUEyQixnQkFBM0IsQ0FBbEI7QUFDQSxRQUFNQyxhQUFhLEdBQUdILGFBQWEsQ0FBQ0UsWUFBZCxDQUEyQixvQkFBM0IsQ0FBdEI7O0FBRUEsUUFBSSxDQUFDRCxTQUFELElBQWMsQ0FBQ0UsYUFBbkIsRUFBa0M7QUFDakM7QUFDQTs7QUFFRCxRQUFNQyxLQUFLLEdBQUdkLFFBQVEsQ0FBQ0MsZ0JBQVQsNEJBQThDVSxTQUE5QyxnQkFBNkRFLGFBQTdELEVBQWQ7QUFFQUMsU0FBSyxDQUFDVixPQUFOLENBQWMsVUFBQ1csSUFBRCxFQUFVO0FBQ3ZCLFVBQU1DLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxTQUF6Qjs7QUFDQSxVQUFJRCxXQUFXLENBQUNFLFFBQVosQ0FBcUJULEtBQXJCLENBQUosRUFBaUM7QUFDaENNLFlBQUksQ0FBQ0ksU0FBTCxDQUFlQyxNQUFmLENBQXNCLFFBQXRCO0FBQ0EsT0FGRCxNQUVPO0FBQ05MLFlBQUksQ0FBQ0ksU0FBTCxDQUFlRSxHQUFmLENBQW1CLFFBQW5CO0FBQ0E7QUFDRCxLQVBEO0FBUUE7QUF4Q3FCLENBQXZCO0FBMkNBekIsY0FBYyxDQUFDQyxJQUFmO0FBRWVELDZFQUFmIiwiZmlsZSI6Ii4vc3JjL0NvQ3JlYXRlLXNlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgQ29DcmVhdGVTZWFyY2ggPSB7XG5cdGluaXQ6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuXHRcdGNvbnN0IG1haW5Db250YWluZXIgPSBjb250YWluZXIgfHwgZG9jdW1lbnQ7XG5cdFx0XG5cdFx0aWYgKCFtYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgc2VhcmNoX2VsZW1lbnRzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLW9wdGlvbnMnKVxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHNlYXJjaF9lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0c2VsZi5zZWFyY2hFdmVudChlbGVtZW50KVxuXHRcdH0pXG5cdH0sXG5cdFxuXHRzZWFyY2hFdmVudDogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYucnVuU2VhcmNoT2ZFbGVtZW50KGVsZW1lbnQsIHRoaXMudmFsdWUpXG5cdFx0fSlcblx0fSxcblx0XG5cdHJ1blNlYXJjaE9mRWxlbWVudDogZnVuY3Rpb24oc2VhcmNoRWxlbWVudCwgdmFsdWUpIHtcblx0XHRjb25zdCBzZWFyY2hfaWQgPSBzZWFyY2hFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zZWFyY2hfaWQnKVxuXHRcdGNvbnN0IGl0ZW1fc2VsZWN0b3IgPSBzZWFyY2hFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pdGVtX3NlbGVjdG9yJylcblx0XHRcblx0XHRpZiAoIXNlYXJjaF9pZCB8fCAhaXRlbV9zZWxlY3Rvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXNlYXJjaF9pZD0nJHtzZWFyY2hfaWR9J10gJHtpdGVtX3NlbGVjdG9yfWApXG5cblx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRjb25zdCB0ZXh0Q29udGVudCA9IGl0ZW0uaW5uZXJUZXh0XG5cdFx0XHRpZiAodGV4dENvbnRlbnQuaW5jbHVkZXModmFsdWUpKSB7XG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxufVxuXG5Db0NyZWF0ZVNlYXJjaC5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/CoCreate-search.js\n");

/***/ })

/******/ })["default"];
});