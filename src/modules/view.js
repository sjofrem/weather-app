const view = (() => {
  function changeBackground(temperature) {
    const app = document.getElementById("app");
    if (!app.classList.contains("cold")) {
      if (temperature < 16) {
        app.classList.add("cold");
      }
    } else if (temperature >= 16) {
      app.classList.remove("cold");
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

export default view;