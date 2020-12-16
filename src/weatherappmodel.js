const api = {
  async load(location) {
    const key = '7408c907ee2383a4a8b85544374aab3d';
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

    try {
        const response = await fetch(endpoint, {mode: 'cors'});
        return response.json();
    } catch (error) {
        console.log(error);
    }
  },

  parseData(data) {
    const result = Object.create(null);

    result['location'] = data['name'];
    result['temperature'] = data['main']['temp'];
    result['weatherClass'] = data['weather'][0]['main'];
    result['windDirection'] = data['wind']['deg'];
    result['windSpeed'] = data['wind']['speed']
    result['pressure'] = data['main']['pressure'];
    result['humidity'] = data['main']['humidity'];
    result['sunRise'] = data['sys']['sunrise'];
    result['sunSet'] = data['sys']['sunset'];
    result['countryCode'] = data['sys']['country'];

    return result;
  },

  weatherDataUnits() {
    const measuremetUnit = {
      'windDirection': 'degrees',
      'pressure': 'hpa',
      'humidity': '%',
      'windSpeed': 'm/s'
    };
    return measuremetUnit;
  }
};

export default api;
