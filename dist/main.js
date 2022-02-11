/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
async function getJsonWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2538e9ad7488cc7c4c9748d1aaa0987b`, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSwwRkFBMEYsS0FBSztBQUMvRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSx5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldEpzb25XZWF0aGVyKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPTI1MzhlOWFkNzQ4OGNjN2M0Yzk3NDhkMWFhYTA5ODdiYCwge1xuICAgICAgICAgICAgbW9kZTogJ2NvcnMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjaXR5V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coY2l0eVdlYXRoZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxufVxuXG5nZXRKc29uV2VhdGhlcignTG9uZG9uJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9