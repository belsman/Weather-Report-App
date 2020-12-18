const api = {
  weatherConditions: {
    clouds: 'fas fa-cloud',
    rain: 'fas fa-cloud-showers-heavy',
    haze: 'fas fa-smog',
    clear: 'far fa-sun',
    snow: 'far fa-snowflake',
    dust: 'fas fa-bolt',
  },

  getWeatherIcon(condition) {
    return this.weatherConditions[condition.toLowerCase()];
  },

  async load(location) {
    const key = '7408c907ee2383a4a8b85544374aab3d';
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

    const response = await fetch(endpoint, { mode: 'cors' });
    return response.json();
  },

  parseData(data) {
    const result = Object.create(null);

    result.searchLocation = data.name;
    result.temperature = this.convertKelvinToCelcius(data.main.temp);
    result.weatherClass = data.weather[0].main;
    result.windDirection = data.wind.deg;
    result.windSpeed = data.wind.speed;
    result.pressure = data.main.pressure;
    result.humidity = data.main.humidity;
    result.sunRise = this.convertunixTime(data.sys.sunrise);
    result.sunSet = this.convertunixTime(data.sys.sunset);
    result.countryCode = data.sys.country;
    result.weatherClassIcon = this.getWeatherIcon(result.weatherClass);

    return result;
  },

  convertunixTime(count) {
    const time = new Date(count * 1000);
    return time.toLocaleTimeString();
  },

  convertKelvinToCelcius(kelvinUnit) {
    return (kelvinUnit - 273.15).toFixed(1);
  },

  celciusToFahrenheit(celciusValue) {
    const result = celciusValue * 1.8 + 32;
    return result.toFixed(1);
  },

  fahrenheitToCelcius(fahrenheitValue) {
    const result = (fahrenheitValue - 32) / 1.8;
    return result.toFixed(1);
  },

};

export default api;
