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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cooler; });
/* harmony import */ var _beer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beer */ "./assets/scripts/beer.js");


class Cooler {
  constructor(coolerElement) {
    this.coolerElement = coolerElement;
    this.coolerWidth = 400;
    this.coolerHeight = 200;

    // this.file = projects (TODO: Project information json)
    this.createCoolerCanvas();
    this.animate = this.animate.bind(this);
  }

  createBeer(file) {
    Object.keys(file).forEach((projectName) => {
      let beer = new _beer__WEBPACK_IMPORTED_MODULE_0__["default"](projectName, file[projectName]);

      beer.createNode(this.coolerElement);
    })
  }

  createCoolerCanvas() {    
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.coolerWidth / this.coolerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.coolerWidth, this.coolerHeight);

    this.coolerElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;

    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.rotation.x += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}

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
  coolerElement.style.height = "200px";
  coolerElement.style.width = "400px";
  const coolerCanvas = new _cooler__WEBPACK_IMPORTED_MODULE_1__["default"](coolerElement);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvYmVlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jb29sZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2t5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZixxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUFJOztBQUV6QjtBQUNBLEtBQUs7QUFDTDs7QUFFQSx3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtEQUFrRCxrQkFBa0I7QUFDcEU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQXdCO0FBQ007O0FBRTlCLGlCQUFpQixtQkFBTyxDQUFDLDBEQUF1Qjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNENBQUc7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtDQUFNO0FBQ2pDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxnREFBZ0QsUUFBUTtBQUN4RjtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUssR0FBRztBQUN4QztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxJQUFJLFVBQVUsSUFBSSxVQUFVO0FBQ3ZFOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Ii4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvc2NyaXB0cy9lbnRyeS5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHsgZGVzY3JpcHRpb24sIHRlY2hub2xvZ2llcyB9KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy50ZWNobm9sb2dpZXMgPSB0ZWNobm9sb2dpZXM7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVOb2RlKGNvb2xlck5vZGUpIHtcclxuICAgIGxldCBiZWVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBiZWVyTm9kZS5jbGFzc0xpc3QuYWRkKHRoaXMubmFtZSk7XHJcbiAgICBiZWVyTm9kZS5jbGFzc0xpc3QuYWRkKCdiZWVyJyk7XHJcblxyXG4gICAgbGV0IG5hbWVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSDInKTtcclxuICAgIGxldCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubmFtZSk7XHJcbiAgICBuYW1lTm9kZS5hcHBlbmRDaGlsZChuYW1lVGV4dCk7XHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRlc2NyaXB0aW9uKTtcclxuICAgIGRlc2NyaXB0aW9uTm9kZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xyXG5cclxuICAgIGxldCB0ZWNobm9sb2dpZXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHRoaXMudGVjaG5vbG9naWVzLmZvckVhY2goKHRlY2hub2xvZ3kpID0+IHtcclxuICAgICAgbGV0IHRlY2hub2xvZ3lOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGV0IHRlY2hub2xvZ3lUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGVjaG5vbG9neSk7XHJcbiAgICAgIHRlY2hub2xvZ3lOb2RlLmFwcGVuZENoaWxkKHRlY2hub2xvZ3lUZXh0KTtcclxuICAgICAgdGVjaG5vbG9naWVzTm9kZS5hcHBlbmRDaGlsZCh0ZWNobm9sb2d5Tm9kZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGJlZXJOb2RlLmFwcGVuZENoaWxkKG5hbWVOb2RlKTtcclxuICAgIGJlZXJOb2RlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTm9kZSk7XHJcbiAgICBiZWVyTm9kZS5hcHBlbmRDaGlsZCh0ZWNobm9sb2dpZXNOb2RlKTtcclxuXHJcbiAgICBjb29sZXJOb2RlLmFwcGVuZENoaWxkKGJlZXJOb2RlKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgQmVlciBmcm9tIFwiLi9iZWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29sZXIge1xyXG4gIGNvbnN0cnVjdG9yKGNvb2xlckVsZW1lbnQpIHtcclxuICAgIHRoaXMuY29vbGVyRWxlbWVudCA9IGNvb2xlckVsZW1lbnQ7XHJcbiAgICB0aGlzLmNvb2xlcldpZHRoID0gNDAwO1xyXG4gICAgdGhpcy5jb29sZXJIZWlnaHQgPSAyMDA7XHJcblxyXG4gICAgLy8gdGhpcy5maWxlID0gcHJvamVjdHMgKFRPRE86IFByb2plY3QgaW5mb3JtYXRpb24ganNvbilcclxuICAgIHRoaXMuY3JlYXRlQ29vbGVyQ2FudmFzKCk7XHJcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJlZXIoZmlsZSkge1xyXG4gICAgT2JqZWN0LmtleXMoZmlsZSkuZm9yRWFjaCgocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgbGV0IGJlZXIgPSBuZXcgQmVlcihwcm9qZWN0TmFtZSwgZmlsZVtwcm9qZWN0TmFtZV0pO1xyXG5cclxuICAgICAgYmVlci5jcmVhdGVOb2RlKHRoaXMuY29vbGVyRWxlbWVudCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29vbGVyQ2FudmFzKCkgeyAgICBcclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB0aGlzLmNvb2xlcldpZHRoIC8gdGhpcy5jb29sZXJIZWlnaHQsIDAuMSwgMTAwMCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5jb29sZXJXaWR0aCwgdGhpcy5jb29sZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY29vbGVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSk7XHJcbiAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGUoKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGUoKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5jdWJlLnJvdGF0aW9uLnggKz0gMC4wMTtcclxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgU2t5IGZyb20gJy4vc2t5JztcclxuaW1wb3J0IENvb2xlciBmcm9tICcuL2Nvb2xlcic7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IHJlcXVpcmUoJy4uL2RhdGEvcHJvamVjdHMuanNvbicpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnRE9NIENvbnRlbnQgTG9hZGVkJyk7XHJcbiAgY29uc3Qgc2t5Q2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NreUNhbnZhcycpO1xyXG4gIHNreUNhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XHJcbiAgc2t5Q2FudmFzLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgbmV3IFNreShza3lDYW52YXMpO1xyXG5cclxuICBjb25zdCBjb29sZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2xlcicpO1xyXG4gIGNvb2xlckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xyXG4gIGNvb2xlckVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjQwMHB4XCI7XHJcbiAgY29uc3QgY29vbGVyQ2FudmFzID0gbmV3IENvb2xlcihjb29sZXJFbGVtZW50KTtcclxufSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTa3kge1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XHJcblxyXG4gICAgdGhpcy5jdXJyVGltZSA9IDA7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICBsZXQgdGltZSA9IGhvdXJzICsgbWludXRlcyAvIDYwO1xyXG5cclxuICAgIGlmICh0aGlzLmN1cnJUaW1lID09IHRpbWUpIHsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTsgcmV0dXJuOyB9O1xyXG4gICAgLy8gVGltZSBmcm9tIDAgLSAyMyAoMjQgaG91cnMpXHJcbiAgICAvLyAwIGlzIGRhcmtlc3QsIDIzIGFuZCAxIHNlY29uZCBkYXJrZXN0XHJcbiAgICAvLyB5XFwgPVxcIDI1NVxcc2luXFxsZWZ0KFxcZnJhY3tcXHBpfXsyNH14XFxyaWdodClcclxuICAgIC8vIHkgPSAyNTUgKiBzaW4oIChwaS8yNCkgeCApXHJcbiAgICBsZXQgdGVtcENvbG9yID0gMjU1ICogTWF0aC5zaW4oKE1hdGguUEkgLyAyNCkgKiB0aW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHRlbXBDb2xvcik7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3RlbXBDb2xvcn0sICR7dGVtcENvbG9yfSwgJHt0ZW1wQ29sb3J9LCAxKWA7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3VyclRpbWUgPSB0aW1lO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==