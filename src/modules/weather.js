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

export default weather;