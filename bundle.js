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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/data/projects.json":
/*!***********************************!*\
  !*** ./assets/data/projects.json ***!
  \***********************************/
/*! exports provided: Flappybara, Go-chella, Discourse, Shadow-fight, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Flappybara\":{\"description\":\"Inspired by the popular Flappy Bird game, Flappybara recreates the charm and follows the flying adventures of a capybara.\",\"technologies\":[\"C#\",\"Unity3D\",\"Firebase\",\"Android App Bundle\"]},\"Go-chella\":{\"description\":\"An event planning web app to help organizers plan out a day of acts for their group. Formerly \\\"Brochella\\\".\",\"technologies\":[\"JavaScript ES6\",\"MongoDB\",\"Express\",\"React.js\",\"Redux\",\"Node.js\"]},\"Discourse\":{\"description\":\"A platform for live text chat in private, invite-only servers via URL invite links, inspired by Discord.\",\"technologies\":[\"React.js\",\"Redux\",\"Ruby\",\"Ruby on Rails\",\"Action Cable (websockets)\",\"PostgreSQL\",\"AJAX\",\"Moment.js\"]},\"Shadow-fight\":{\"description\":\"A fighting game inspired by Tekken and Street Fighter, with a backdrop of falling sakura petals or snow\",\"technologies\":[\"JavaScript ES6\",\"HTML5 Canvas\"]}}");

/***/ }),

/***/ "./assets/scripts/beer.js":
/*!********************************!*\
  !*** ./assets/scripts/beer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Beer; });
class Beer {
  constructor(name, { description, technologies }) {
    this.name = name;
    this.description = description;
    this.technologies = technologies;
  }

  createNode(coolerNode) {
    let beerNode = document.createElement("div");
    beerNode.classList.add(this.name);
    beerNode.classList.add('beer');

    let nameNode = document.createElement('H2');
    let nameText = document.createTextNode(this.name);
    nameNode.appendChild(nameText);

    let descriptionNode = document.createElement('p');
    let descriptionText = document.createTextNode(this.description);
    descriptionNode.appendChild(descriptionText);

    let technologiesNode = document.createElement('ul');
    this.technologies.forEach((technology) => {
      let technologyNode = document.createElement('li');
      let technologyText = document.createTextNode(technology);
      technologyNode.appendChild(technologyText);
      technologiesNode.appendChild(technologyNode);
    })

    beerNode.appendChild(nameNode);
    beerNode.appendChild(descriptionNode);
    beerNode.appendChild(technologiesNode);

    coolerNode.appendChild(beerNode);
  }
}

/***/ }),

/***/ "./assets/scripts/cooler.js":
/*!**********************************!*\
  !*** ./assets/scripts/cooler.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _beer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beer */ "./assets/scripts/beer.js");


const createBeer = (cooler, file) => {

  Object.keys(file).forEach((projectName) => {
    let beer = new _beer__WEBPACK_IMPORTED_MODULE_0__["default"](projectName, file[projectName]);

    beer.createNode(cooler);
  })
}

/* harmony default export */ __webpack_exports__["default"] = (createBeer);

/***/ }),

/***/ "./assets/scripts/entry.js":
/*!*********************************!*\
  !*** ./assets/scripts/entry.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sky */ "./assets/scripts/sky.js");
/* harmony import */ var _cooler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cooler */ "./assets/scripts/cooler.js");



const projects = __webpack_require__(/*! ../data/projects.json */ "./assets/data/projects.json");

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  const skyCanvas = document.getElementById('skyCanvas');
  skyCanvas.style.height = "100vh";
  skyCanvas.style.width = "100%";
  new _sky__WEBPACK_IMPORTED_MODULE_0__["default"](skyCanvas);

  const coolerElement = document.getElementById('cooler');
  Object(_cooler__WEBPACK_IMPORTED_MODULE_1__["default"])(coolerElement, projects);
})

/***/ }),

/***/ "./assets/scripts/sky.js":
/*!*******************************!*\
  !*** ./assets/scripts/sky.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sky; });
class Sky {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };

    this.currTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = hours + minutes / 60;

    if (this.currTime == time) { requestAnimationFrame(this.animate.bind(this)); return; };
    // Time from 0 - 23 (24 hours)
    // 0 is darkest, 23 and 1 second darkest
    // y\ =\ 255\sin\left(\frac{\pi}{24}x\right)
    // y = 255 * sin( (pi/24) x )
    let tempColor = 255 * Math.sin((Math.PI / 24) * time);
    console.log(tempColor);
    this.ctx.fillStyle = `rgba(${tempColor}, ${tempColor}, ${tempColor}, 1)`;
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

    this.currTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvYmVlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jb29sZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2t5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZixxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQTBCOztBQUUxQjs7QUFFQTtBQUNBLG1CQUFtQiw2Q0FBSTs7QUFFdkI7QUFDQSxHQUFHO0FBQ0g7O0FBRWUseUVBQVUsRTs7Ozs7Ozs7Ozs7O0FDWHpCO0FBQUE7QUFBQTtBQUF3QjtBQUNVOztBQUVsQyxpQkFBaUIsbUJBQU8sQ0FBQywwREFBdUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDRDQUFHOztBQUVUO0FBQ0EsRUFBRSx1REFBVTtBQUNaLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGdEQUFnRCxRQUFRO0FBQ3hGO0FBQ0E7QUFDQSxnQ0FBZ0MsS0FBSyxHQUFHO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVLElBQUksVUFBVSxJQUFJLFVBQVU7QUFDdkU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9zY3JpcHRzL2VudHJ5LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVlciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgeyBkZXNjcmlwdGlvbiwgdGVjaG5vbG9naWVzIH0pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnRlY2hub2xvZ2llcyA9IHRlY2hub2xvZ2llcztcclxuICB9XHJcblxyXG4gIGNyZWF0ZU5vZGUoY29vbGVyTm9kZSkge1xyXG4gICAgbGV0IGJlZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJlZXJOb2RlLmNsYXNzTGlzdC5hZGQodGhpcy5uYW1lKTtcclxuICAgIGJlZXJOb2RlLmNsYXNzTGlzdC5hZGQoJ2JlZXInKTtcclxuXHJcbiAgICBsZXQgbmFtZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdIMicpO1xyXG4gICAgbGV0IG5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5uYW1lKTtcclxuICAgIG5hbWVOb2RlLmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcclxuXHJcbiAgICBsZXQgZGVzY3JpcHRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuZGVzY3JpcHRpb24pO1xyXG4gICAgZGVzY3JpcHRpb25Ob2RlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XHJcblxyXG4gICAgbGV0IHRlY2hub2xvZ2llc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdGhpcy50ZWNobm9sb2dpZXMuZm9yRWFjaCgodGVjaG5vbG9neSkgPT4ge1xyXG4gICAgICBsZXQgdGVjaG5vbG9neU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsZXQgdGVjaG5vbG9neVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZWNobm9sb2d5KTtcclxuICAgICAgdGVjaG5vbG9neU5vZGUuYXBwZW5kQ2hpbGQodGVjaG5vbG9neVRleHQpO1xyXG4gICAgICB0ZWNobm9sb2dpZXNOb2RlLmFwcGVuZENoaWxkKHRlY2hub2xvZ3lOb2RlKTtcclxuICAgIH0pXHJcblxyXG4gICAgYmVlck5vZGUuYXBwZW5kQ2hpbGQobmFtZU5vZGUpO1xyXG4gICAgYmVlck5vZGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ob2RlKTtcclxuICAgIGJlZXJOb2RlLmFwcGVuZENoaWxkKHRlY2hub2xvZ2llc05vZGUpO1xyXG5cclxuICAgIGNvb2xlck5vZGUuYXBwZW5kQ2hpbGQoYmVlck5vZGUpO1xyXG4gIH1cclxufSIsImltcG9ydCBCZWVyIGZyb20gXCIuL2JlZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUJlZXIgPSAoY29vbGVyLCBmaWxlKSA9PiB7XHJcblxyXG4gIE9iamVjdC5rZXlzKGZpbGUpLmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICBsZXQgYmVlciA9IG5ldyBCZWVyKHByb2plY3ROYW1lLCBmaWxlW3Byb2plY3ROYW1lXSk7XHJcblxyXG4gICAgYmVlci5jcmVhdGVOb2RlKGNvb2xlcik7XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmVlcjsiLCJpbXBvcnQgU2t5IGZyb20gJy4vc2t5JztcclxuaW1wb3J0IGNyZWF0ZUJlZXIgZnJvbSAnLi9jb29sZXInO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSByZXF1aXJlKCcuLi9kYXRhL3Byb2plY3RzLmpzb24nKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0RPTSBDb250ZW50IExvYWRlZCcpO1xyXG4gIGNvbnN0IHNreUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza3lDYW52YXMnKTtcclxuICBza3lDYW52YXMuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xyXG4gIHNreUNhbnZhcy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gIG5ldyBTa3koc2t5Q2FudmFzKTtcclxuXHJcbiAgY29uc3QgY29vbGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29sZXInKTtcclxuICBjcmVhdGVCZWVyKGNvb2xlckVsZW1lbnQsIHByb2plY3RzKTtcclxufSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTa3kge1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XHJcblxyXG4gICAgdGhpcy5jdXJyVGltZSA9IDA7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICBsZXQgdGltZSA9IGhvdXJzICsgbWludXRlcyAvIDYwO1xyXG5cclxuICAgIGlmICh0aGlzLmN1cnJUaW1lID09IHRpbWUpIHsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTsgcmV0dXJuOyB9O1xyXG4gICAgLy8gVGltZSBmcm9tIDAgLSAyMyAoMjQgaG91cnMpXHJcbiAgICAvLyAwIGlzIGRhcmtlc3QsIDIzIGFuZCAxIHNlY29uZCBkYXJrZXN0XHJcbiAgICAvLyB5XFwgPVxcIDI1NVxcc2luXFxsZWZ0KFxcZnJhY3tcXHBpfXsyNH14XFxyaWdodClcclxuICAgIC8vIHkgPSAyNTUgKiBzaW4oIChwaS8yNCkgeCApXHJcbiAgICBsZXQgdGVtcENvbG9yID0gMjU1ICogTWF0aC5zaW4oKE1hdGguUEkgLyAyNCkgKiB0aW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHRlbXBDb2xvcik7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3RlbXBDb2xvcn0sICR7dGVtcENvbG9yfSwgJHt0ZW1wQ29sb3J9LCAxKWA7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3VyclRpbWUgPSB0aW1lO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==