export default (data) => {
    const { countryCode, temperature, weatherClass, 
        pressure, windSpeed, windDirection, humidity, 
        sunRise, sunSet, searchLocation } = data;
        
    let template = `<div id="weather-report-card">
    <div class="weather-report-header">
        <h1>${searchLocation}, ${countryCode}</h1>
        <span class="location-icon-wrapper"><i class='fas fa-map-marker-alt'></i></span>
    </div>
    <div class="weather-summary">
        <div>
            <span class="weather-summary-temperature">
                <span id="temperature-value">${temperature}</span> &#8451; <input type="checkbox" name="" id="temperature-unit-toggler">
            </span><br>
            <span class="weather-summary-class">${weatherClass}</span>
        </div>
        <span class="weather-class-icon"><i class="fas fa-cloud"></i></span>
    </div>
    <ul>
        <li class="weather-data">
            <span class="measuring-tool-icon">Pressure <i class="fas fa-thermometer-quarter"></i></span>
            <span class="weather-data-value">${pressure} hpa</span>
        </li>
        <li class="weather-data">
            <span class="measuring-tool-icon">Wind speed <i class='fas fa-wind'></i></span>
            <span class="weather-data-value">${windSpeed} m/s</span>
        </li>
        <li class="weather-data">
            <span class="measuring-tool-icon">Wind direction <i class="far fa-compass"></i></span>
            <span class="weather-data-value">${windDirection} degrees</span>
        </li>
        <li class="weather-data">
            <span class="measuring-tool-icon">Humidity <i class="fas fa-water"></i></span>
            <span class="weather-data-value">${humidity} %</span>
        </li>
        <li class="weather-data">
            <span class="measuring-tool-icon">Sunrise <i class='far fa-clock'></i></span>
            <span class="weather-data-value">${sunRise}</span>
        </li>
        <li class="weather-data">
            <span class="measuring-tool-icon">Sunset <i class='far fa-clock'></i></span>
            <span class="weather-data-value">${sunSet}</span>
        </li>
    </ul>
    </div>`;

    return template;
};