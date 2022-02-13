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
    const app = document.getElementById("app");
    if (!app.classList.contains("warm")) {
      if (temperature > 16) {
        app.classList.add("warm");
      }
    } else if (temperature <= 16) {
      app.classList.remove("warm");
    }
  }

  function setCityWeather(data) {
    const location = document.getElementById("location");
    const weatherIcon = document.getElementById("weatherIcon");
    const currentWeather = document.getElementById("currentWeather");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const temperature = document.getElementById("temperature");

    location.textContent = `${data.cityName}, ${data.countryName}`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.iconCode}@2x.png`;
    currentWeather.textContent = data.currentWeather;
    humidity.textContent = `${data.humidityValue}%`;
    wind.textContent = `${data.windSpeed} km/h`;
    temperature.textContent = `${Math.round(data.temperature)}°c`;

    changeBackground(Math.round(data.temperature));
  }

  return { setCityWeather };
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
      main: { temp: temperature, humidity: humidityValue },
      wind: { speed: windSpeed },
      weather: [{ main: currentWeather, icon: iconCode }],
    } = data;

    return {
      cityName,
      countryName,
      temperature,
      humidityValue,
      windSpeed,
      currentWeather,
      iconCode,
    };
  }

  async function getData(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2538e9ad7488cc7c4c9748d1aaa0987b`,
        {
          mode: "cors",
        }
      );
      if (!response.ok) throw new Error(`city ${city} not found`);
      const cityWeather = convertData(await response.json());
      return cityWeather;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { getData };
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



const searchForm = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");

async function displaySearch(city) {
  const data = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(city);

  if (!data) {
    searchForm.reset();
    return;
  }

  _modules_view__WEBPACK_IMPORTED_MODULE_1__["default"].setCityWeather(data);
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  displaySearch(searchBar.value);

  searchForm.reset();
});

displaySearch("London");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsY0FBYyxJQUFJLGlCQUFpQjtBQUNqRSwwREFBMEQsY0FBYztBQUN4RTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQsMEJBQTBCLGdCQUFnQjtBQUMxQyxpQ0FBaUMsNkJBQTZCOztBQUU5RDtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGNBQWMsNENBQTRDO0FBQzFELGNBQWMsa0JBQWtCO0FBQ2hDLGtCQUFrQixzQ0FBc0M7QUFDeEQsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxNQUFNO0FBQ3REO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7VUN4Q3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ047O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0VBQWU7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsb0VBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy92aWV3LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpZXcgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBjaGFuZ2VCYWNrZ3JvdW5kKHRlbXBlcmF0dXJlKSB7XG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gICAgaWYgKCFhcHAuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2FybVwiKSkge1xuICAgICAgaWYgKHRlbXBlcmF0dXJlID4gMTYpIHtcbiAgICAgICAgYXBwLmNsYXNzTGlzdC5hZGQoXCJ3YXJtXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGVtcGVyYXR1cmUgPD0gMTYpIHtcbiAgICAgIGFwcC5jbGFzc0xpc3QucmVtb3ZlKFwid2FybVwiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDaXR5V2VhdGhlcihkYXRhKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVySWNvblwiKTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFdlYXRoZXJcIik7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlXCIpO1xuXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHlOYW1lfSwgJHtkYXRhLmNvdW50cnlOYW1lfWA7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5pY29uQ29kZX1AMngucG5nYDtcbiAgICBjdXJyZW50V2VhdGhlci50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudFdlYXRoZXI7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmh1bWlkaXR5VmFsdWV9JWA7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZFNwZWVkfSBrbS9oYDtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS50ZW1wZXJhdHVyZSl9wrBjYDtcblxuICAgIGNoYW5nZUJhY2tncm91bmQoTWF0aC5yb3VuZChkYXRhLnRlbXBlcmF0dXJlKSk7XG4gIH1cblxuICByZXR1cm4geyBzZXRDaXR5V2VhdGhlciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdmlldztcbiIsImNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBjb252ZXJ0RGF0YShkYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZTogY2l0eU5hbWUsXG4gICAgICBzeXM6IHsgY291bnRyeTogY291bnRyeU5hbWUgfSxcbiAgICAgIG1haW46IHsgdGVtcDogdGVtcGVyYXR1cmUsIGh1bWlkaXR5OiBodW1pZGl0eVZhbHVlIH0sXG4gICAgICB3aW5kOiB7IHNwZWVkOiB3aW5kU3BlZWQgfSxcbiAgICAgIHdlYXRoZXI6IFt7IG1haW46IGN1cnJlbnRXZWF0aGVyLCBpY29uOiBpY29uQ29kZSB9XSxcbiAgICB9ID0gZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICBjaXR5TmFtZSxcbiAgICAgIGNvdW50cnlOYW1lLFxuICAgICAgdGVtcGVyYXR1cmUsXG4gICAgICBodW1pZGl0eVZhbHVlLFxuICAgICAgd2luZFNwZWVkLFxuICAgICAgY3VycmVudFdlYXRoZXIsXG4gICAgICBpY29uQ29kZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPTI1MzhlOWFkNzQ4OGNjN2M0Yzk3NDhkMWFhYTA5ODdiYCxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBjaXR5ICR7Y2l0eX0gbm90IGZvdW5kYCk7XG4gICAgICBjb25zdCBjaXR5V2VhdGhlciA9IGNvbnZlcnREYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICByZXR1cm4gY2l0eVdlYXRoZXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBnZXREYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJcIjtcbmltcG9ydCB2aWV3IGZyb20gXCIuL21vZHVsZXMvdmlld1wiO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtZm9ybVwiKTtcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJhclwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVNlYXJjaChjaXR5KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldERhdGEoY2l0eSk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgc2VhcmNoRm9ybS5yZXNldCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZpZXcuc2V0Q2l0eVdlYXRoZXIoZGF0YSk7XG59XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgZGlzcGxheVNlYXJjaChzZWFyY2hCYXIudmFsdWUpO1xuXG4gIHNlYXJjaEZvcm0ucmVzZXQoKTtcbn0pO1xuXG5kaXNwbGF5U2VhcmNoKFwiTG9uZG9uXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9