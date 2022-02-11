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