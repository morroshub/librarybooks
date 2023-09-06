/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/styles/app.css":
/*!*********************************!*\
  !*** ./frontend/styles/app.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jsfulls/./frontend/styles/app.css?");

/***/ }),

/***/ "./frontend/app.cjs":
/*!**************************!*\
  !*** ./frontend/app.cjs ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./styles/app.css */ \"./frontend/styles/app.css\");\n\nconst Bookservice = __webpack_require__(/*! ./services/Booksservices.cjs */ \"./frontend/services/Booksservices.cjs\");\n\ndocument.getElementById('book-form') //capturamos el evento \n    .addEventListener('submit', e => {\n        const title = document.getElementById('title').value;\n        const author = document.getElementById('author').value;\n        const isbn = document.getElementById('isbn').value;\n        const image = document.getElementById('image').files;\n\n        const formData = new FormData();\n        formData.append('image', image[0]);\n        formData.append('title', title);\n        formData.append('author', author);\n        formData.append('isbn', isbn);\n\n\n        const bookService = new Bookservice()\n        bookService.postBook(formData )\n\n        e.preventDefault();\n    });\n\n//# sourceURL=webpack://jsfulls/./frontend/app.cjs?");

/***/ }),

/***/ "./frontend/services/Booksservices.cjs":
/*!*********************************************!*\
  !*** ./frontend/services/Booksservices.cjs ***!
  \*********************************************/
/***/ ((module) => {

eval("class Bookservices{\n\n    constructor(){\n        this.URI = 'http://localhost:3000/api/books'\n    }\n\n\n\n    async getBooks(){ //Peticion get al backend\n        const response = await fetch(this.URI);\n        const books = await response.json(); //transformamos el string a json\n        return books;\n    }\n\n    async postBook(book){  //Peticion post al backend\n        const response = await fetch(this.URI, {\n            method: 'POST',\n            body: book\n        });\n        const data = await response.json();\n        console.log(data)\n\n    }\n\n    async deleteBook(bookId){\n        const response = await fetch(`${this.URI}/${bookId}`, {\n            headers: {\n                'Content-Type': 'application/json'  // Esto nos habilita recibir strings como tambien la imagen de portada de libro.\n            },\n            method: 'DELETE'\n\n        })\n        const data = await response.json();\n        console.log(data)\n    } \n    \n\n\n}\n\nmodule.exports = Bookservices;\n\n//# sourceURL=webpack://jsfulls/./frontend/services/Booksservices.cjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/app.cjs");
/******/ 	
/******/ })()
;