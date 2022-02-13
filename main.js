/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const view = (() => {
    function changeBackground(temperature) {
        const app = document.getElementById('app');
        if(!app.classList.contains('cold')) {
            if(temperature < 16) {
                app.classList.add('cold');
            }
        }
        else if(temperature >= 16) {
            app.classList.remove('cold');
        }
    }

    function setCityWeather(data) {

        const location = document.getElementById('location');
        const weatherIcon = document.getElementById('weatherIcon');
        const currentWeather = document.getElementById('currentWeather');
        const humidity = document.getElementById('humidity');
        const wind = document.getElementById('wind');
        const temperature = document.getElementById('temperature');

        location.textContent = `${data.cityName}, ${data.countryName}`;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.iconCode}@2x.png`;
        currentWeather.textContent = data.currentWeather;
        humidity.textContent = `${data.humidityValue}%`;
        wind.textContent = `${data.windSpeed} km/h`;
        temperature.textContent = `${Math.round(data.temperature)}°c`;

        changeBackground(Math.round(data.temperature));
    }

    return { setCityWeather }
})(); 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            sys: { country: countryName },
            main: { temp: temperature, humidity: humidityValue},
            wind: { speed: windSpeed },
            weather: [{ main: currentWeather, icon:iconCode }]
        } = data;

        return { cityName, countryName, temperature, humidityValue, windSpeed, currentWeather, iconCode }
    }

    async function getData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2538e9ad7488cc7c4c9748d1aaa0987b`, {
                mode: 'cors'
            });
            if (!response.ok) throw new Error(`city ${city} not found`);
            const cityWeather = convertData(await response.json());
            return cityWeather;
        } catch (error) {
            alert(error);
            return null;
        }
    }
    return { getData }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ "./src/modules/weather.js");
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");



const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

async function displaySearch(city) {

    const data = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(city);
    
    if(!data) {
        searchForm.reset();
        return 
    }

    _modules_view__WEBPACK_IMPORTED_MODULE_1__["default"].setCityWeather(data);

}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    displaySearch(searchBar.value);

    searchForm.reset();

})

displaySearch('London');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLGNBQWMsSUFBSSxpQkFBaUI7QUFDckUsOERBQThELGNBQWM7QUFDNUU7QUFDQSxrQ0FBa0MsbUJBQW1CO0FBQ3JELDhCQUE4QixnQkFBZ0I7QUFDOUMscUNBQXFDLDZCQUE2Qjs7QUFFbEU7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ25DbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDLG9CQUFvQiwyQ0FBMkM7QUFDL0Qsb0JBQW9CLGtCQUFrQjtBQUN0Qyx3QkFBd0IscUNBQXFDO0FBQzdELFVBQVU7O0FBRVYsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsS0FBSztBQUNuRztBQUNBLGFBQWE7QUFDYixzREFBc0QsTUFBTTtBQUM1RDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWUsT0FBTzs7Ozs7O1VDN0J0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ051QztBQUNOOztBQUVqQztBQUNBOztBQUVBOztBQUVBLHVCQUF1QixnRUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksb0VBQW1COztBQUV2Qjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmlldyA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZCh0ZW1wZXJhdHVyZSkge1xuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgICAgIGlmKCFhcHAuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xkJykpIHtcbiAgICAgICAgICAgIGlmKHRlbXBlcmF0dXJlIDwgMTYpIHtcbiAgICAgICAgICAgICAgICBhcHAuY2xhc3NMaXN0LmFkZCgnY29sZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGVtcGVyYXR1cmUgPj0gMTYpIHtcbiAgICAgICAgICAgIGFwcC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDaXR5V2VhdGhlcihkYXRhKSB7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckljb24nKTtcbiAgICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFdlYXRoZXInKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbiAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJyk7XG5cbiAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHlOYW1lfSwgJHtkYXRhLmNvdW50cnlOYW1lfWA7XG4gICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuaWNvbkNvZGV9QDJ4LnBuZ2A7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50V2VhdGhlcjtcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5VmFsdWV9JWA7XG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmRTcGVlZH0ga20vaGA7XG4gICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLnRlbXBlcmF0dXJlKX3CsGNgO1xuXG4gICAgICAgIGNoYW5nZUJhY2tncm91bmQoTWF0aC5yb3VuZChkYXRhLnRlbXBlcmF0dXJlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2V0Q2l0eVdlYXRoZXIgfVxufSkoKTsgXG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7IiwiY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY29udmVydERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lOiBjaXR5TmFtZSxcbiAgICAgICAgICAgIHN5czogeyBjb3VudHJ5OiBjb3VudHJ5TmFtZSB9LFxuICAgICAgICAgICAgbWFpbjogeyB0ZW1wOiB0ZW1wZXJhdHVyZSwgaHVtaWRpdHk6IGh1bWlkaXR5VmFsdWV9LFxuICAgICAgICAgICAgd2luZDogeyBzcGVlZDogd2luZFNwZWVkIH0sXG4gICAgICAgICAgICB3ZWF0aGVyOiBbeyBtYWluOiBjdXJyZW50V2VhdGhlciwgaWNvbjppY29uQ29kZSB9XVxuICAgICAgICB9ID0gZGF0YTtcblxuICAgICAgICByZXR1cm4geyBjaXR5TmFtZSwgY291bnRyeU5hbWUsIHRlbXBlcmF0dXJlLCBodW1pZGl0eVZhbHVlLCB3aW5kU3BlZWQsIGN1cnJlbnRXZWF0aGVyLCBpY29uQ29kZSB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPTI1MzhlOWFkNzQ4OGNjN2M0Yzk3NDhkMWFhYTA5ODdiYCwge1xuICAgICAgICAgICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYGNpdHkgJHtjaXR5fSBub3QgZm91bmRgKTtcbiAgICAgICAgICAgIGNvbnN0IGNpdHlXZWF0aGVyID0gY29udmVydERhdGEoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgICAgIHJldHVybiBjaXR5V2VhdGhlcjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGdldERhdGEgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyIGZyb20gJy4vbW9kdWxlcy93ZWF0aGVyJ1xuaW1wb3J0IHZpZXcgZnJvbSAnLi9tb2R1bGVzL3ZpZXcnXG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlTZWFyY2goY2l0eSkge1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXIuZ2V0RGF0YShjaXR5KTtcbiAgICBcbiAgICBpZighZGF0YSkge1xuICAgICAgICBzZWFyY2hGb3JtLnJlc2V0KCk7XG4gICAgICAgIHJldHVybiBcbiAgICB9XG5cbiAgICB2aWV3LnNldENpdHlXZWF0aGVyKGRhdGEpO1xuXG59XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkaXNwbGF5U2VhcmNoKHNlYXJjaEJhci52YWx1ZSk7XG5cbiAgICBzZWFyY2hGb3JtLnJlc2V0KCk7XG5cbn0pXG5cbmRpc3BsYXlTZWFyY2goJ0xvbmRvbicpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9