class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.details = document.getElementById('w-details');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.pressure = document.getElementById('w-pressure');
		this.wind = document.getElementById('w-wind');
	}

	paint(weatherObj) {
		this.location.textContent = weatherObj.name;
		this.desc.textContent = weatherObj.weather[0].main;
		this.string.textContent = weatherObj.main.temp + " C";
		let url = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}.png`;
		this.icon.setAttribute('src', url);
		this.humidity.textContent = `Relative Humidity: ${weatherObj.main.humidity}`;
		this.feelsLike.textContent = `Feels Like: ${weatherObj.main.feels_like}`;
		this.pressure.textContent = `Pressure: ${weatherObj.main.pressure}`;
		this.wind.textContent = `Wind Speed: ${weatherObj.wind.speed}`;
	}
}
