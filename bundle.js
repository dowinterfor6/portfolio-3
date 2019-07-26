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
/* harmony import */ var _threeTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./threeTest */ "./assets/scripts/threeTest.js");




const projects = __webpack_require__(/*! ../data/projects.json */ "./assets/data/projects.json");

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  const skyCanvas = document.getElementById('skyCanvas');
  skyCanvas.style.height = "100vh";
  skyCanvas.style.width = "100%";
  new _sky__WEBPACK_IMPORTED_MODULE_0__["default"](skyCanvas);

  const coolerElement = document.getElementById('cooler');
  Object(_cooler__WEBPACK_IMPORTED_MODULE_1__["default"])(coolerElement, projects);

  Object(_threeTest__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

/***/ }),

/***/ "./assets/scripts/threeTest.js":
/*!*************************************!*\
  !*** ./assets/scripts/threeTest.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var camera, scene, renderer;
var geometry, material, mesh;

const test = () => {
  init();
  animate();
}

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render( scene, camera );

}

/* harmony default export */ __webpack_exports__["default"] = (test);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvYmVlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jb29sZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2t5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3RocmVlVGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlO0FBQ2YscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUEwQjs7QUFFMUI7O0FBRUE7QUFDQSxtQkFBbUIsNkNBQUk7O0FBRXZCO0FBQ0EsR0FBRztBQUNIOztBQUVlLHlFQUFVLEU7Ozs7Ozs7Ozs7OztBQ1h6QjtBQUFBO0FBQUE7QUFBQTtBQUF3QjtBQUNVO0FBQ0g7O0FBRS9CLGlCQUFpQixtQkFBTyxDQUFDLDBEQUF1Qjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNENBQUc7O0FBRVQ7QUFDQSxFQUFFLHVEQUFVOztBQUVaLEVBQUUsMERBQUk7QUFDTixDQUFDLEM7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsZ0RBQWdELFFBQVE7QUFDeEY7QUFDQTtBQUNBLGdDQUFnQyxLQUFLLEdBQUc7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVUsSUFBSSxVQUFVLElBQUksVUFBVTtBQUN2RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0Msa0JBQWtCO0FBQ3hEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFZSxtRUFBSSxFIiwiZmlsZSI6Ii4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvc2NyaXB0cy9lbnRyeS5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlZXIge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHsgZGVzY3JpcHRpb24sIHRlY2hub2xvZ2llcyB9KSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy50ZWNobm9sb2dpZXMgPSB0ZWNobm9sb2dpZXM7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVOb2RlKGNvb2xlck5vZGUpIHtcclxuICAgIGxldCBiZWVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBiZWVyTm9kZS5jbGFzc0xpc3QuYWRkKHRoaXMubmFtZSk7XHJcbiAgICBiZWVyTm9kZS5jbGFzc0xpc3QuYWRkKCdiZWVyJyk7XHJcblxyXG4gICAgbGV0IG5hbWVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSDInKTtcclxuICAgIGxldCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubmFtZSk7XHJcbiAgICBuYW1lTm9kZS5hcHBlbmRDaGlsZChuYW1lVGV4dCk7XHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRlc2NyaXB0aW9uKTtcclxuICAgIGRlc2NyaXB0aW9uTm9kZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xyXG5cclxuICAgIGxldCB0ZWNobm9sb2dpZXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHRoaXMudGVjaG5vbG9naWVzLmZvckVhY2goKHRlY2hub2xvZ3kpID0+IHtcclxuICAgICAgbGV0IHRlY2hub2xvZ3lOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGV0IHRlY2hub2xvZ3lUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGVjaG5vbG9neSk7XHJcbiAgICAgIHRlY2hub2xvZ3lOb2RlLmFwcGVuZENoaWxkKHRlY2hub2xvZ3lUZXh0KTtcclxuICAgICAgdGVjaG5vbG9naWVzTm9kZS5hcHBlbmRDaGlsZCh0ZWNobm9sb2d5Tm9kZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGJlZXJOb2RlLmFwcGVuZENoaWxkKG5hbWVOb2RlKTtcclxuICAgIGJlZXJOb2RlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTm9kZSk7XHJcbiAgICBiZWVyTm9kZS5hcHBlbmRDaGlsZCh0ZWNobm9sb2dpZXNOb2RlKTtcclxuXHJcbiAgICBjb29sZXJOb2RlLmFwcGVuZENoaWxkKGJlZXJOb2RlKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgQmVlciBmcm9tIFwiLi9iZWVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVCZWVyID0gKGNvb2xlciwgZmlsZSkgPT4ge1xyXG5cclxuICBPYmplY3Qua2V5cyhmaWxlKS5mb3JFYWNoKChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgbGV0IGJlZXIgPSBuZXcgQmVlcihwcm9qZWN0TmFtZSwgZmlsZVtwcm9qZWN0TmFtZV0pO1xyXG5cclxuICAgIGJlZXIuY3JlYXRlTm9kZShjb29sZXIpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJlZXI7IiwiaW1wb3J0IFNreSBmcm9tICcuL3NreSc7XHJcbmltcG9ydCBjcmVhdGVCZWVyIGZyb20gJy4vY29vbGVyJztcclxuaW1wb3J0IHRlc3QgZnJvbSAnLi90aHJlZVRlc3QnO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSByZXF1aXJlKCcuLi9kYXRhL3Byb2plY3RzLmpzb24nKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0RPTSBDb250ZW50IExvYWRlZCcpO1xyXG4gIGNvbnN0IHNreUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza3lDYW52YXMnKTtcclxuICBza3lDYW52YXMuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xyXG4gIHNreUNhbnZhcy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gIG5ldyBTa3koc2t5Q2FudmFzKTtcclxuXHJcbiAgY29uc3QgY29vbGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29sZXInKTtcclxuICBjcmVhdGVCZWVyKGNvb2xlckVsZW1lbnQsIHByb2plY3RzKTtcclxuXHJcbiAgdGVzdCgpO1xyXG59KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNreSB7XHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcclxuXHJcbiAgICB0aGlzLmN1cnJUaW1lID0gMDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKCkge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgIGxldCB0aW1lID0gaG91cnMgKyBtaW51dGVzIC8gNjA7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VyclRpbWUgPT0gdGltZSkgeyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpOyByZXR1cm47IH07XHJcbiAgICAvLyBUaW1lIGZyb20gMCAtIDIzICgyNCBob3VycylcclxuICAgIC8vIDAgaXMgZGFya2VzdCwgMjMgYW5kIDEgc2Vjb25kIGRhcmtlc3RcclxuICAgIC8vIHlcXCA9XFwgMjU1XFxzaW5cXGxlZnQoXFxmcmFje1xccGl9ezI0fXhcXHJpZ2h0KVxyXG4gICAgLy8geSA9IDI1NSAqIHNpbiggKHBpLzI0KSB4IClcclxuICAgIGxldCB0ZW1wQ29sb3IgPSAyNTUgKiBNYXRoLnNpbigoTWF0aC5QSSAvIDI0KSAqIHRpbWUpO1xyXG4gICAgY29uc29sZS5sb2codGVtcENvbG9yKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dGVtcENvbG9yfSwgJHt0ZW1wQ29sb3J9LCAke3RlbXBDb2xvcn0sIDEpYDtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5jdXJyVGltZSA9IHRpbWU7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn0iLCJ2YXIgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXI7XHJcbnZhciBnZW9tZXRyeSwgbWF0ZXJpYWwsIG1lc2g7XHJcblxyXG5jb25zdCB0ZXN0ID0gKCkgPT4ge1xyXG4gIGluaXQoKTtcclxuICBhbmltYXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjAxLCAxMCApO1xyXG5cdGNhbWVyYS5wb3NpdGlvbi56ID0gMTtcclxuXHJcblx0c2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDAuMiwgMC4yLCAwLjIgKTtcclxuXHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoKTtcclxuXHJcblx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHRzY2VuZS5hZGQoIG1lc2ggKTtcclxuXHJcblx0cmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlciggeyBhbnRpYWxpYXM6IHRydWUgfSApO1xyXG5cdHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlKCkge1xyXG5cclxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuXHJcblx0bWVzaC5yb3RhdGlvbi54ICs9IDAuMDE7XHJcblx0bWVzaC5yb3RhdGlvbi55ICs9IDAuMDI7XHJcblxyXG5cdHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVzdDsiXSwic291cmNlUm9vdCI6IiJ9