/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getJsonWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2538e9ad7488cc7c4c9748d1aaa0987b`, {
            mode: 'cors'
        });
        const cityWeather = await response.json();
        console.log(cityWeather);
    } catch (error) {
        console.error(error)
    }
}

getJsonWeather('London');
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSwwRkFBMEYsS0FBSztBQUMvRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSx5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldEpzb25XZWF0aGVyKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9MjUzOGU5YWQ3NDg4Y2M3YzRjOTc0OGQxYWFhMDk4N2JgLCB7XG4gICAgICAgICAgICBtb2RlOiAnY29ycydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNpdHlXZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhjaXR5V2VhdGhlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG59XG5cbmdldEpzb25XZWF0aGVyKCdMb25kb24nKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=