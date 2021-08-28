class Weather {
	constructor(city, state) {
		this.apiKey = '8df823920f36ba22626056af6289fa23';
		this.city = city;
		this.state = state;
	}

	// Fetch weather from API

	async getWeather() {
		const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);

		const responseData = await respone.json();
		return responseData;
	}

	// change location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;
	}
}
