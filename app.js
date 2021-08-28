// Init weather object
const ui = new UI();

const storage = new Storage();
// get stored location data
let weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;
	weather.changeLocation(city, state);
	storage.setLocationData(city, state);
	getWeather();

	// Close the modal
	$('#locModal').modal('hide');
});

function getWeather() {
	weather
		.getWeather()
		.then((results) => {
			ui.paint(results);
		})
		.catch((err) => {
			console.log(err);
		});
}
