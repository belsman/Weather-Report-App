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
};

export default api;
