const latitude = 48.21;
const longitude = 16.37;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

const result = document.querySelector('#js-results');

fetch(url)
.then(response => response.json())
.then(data => {
    const weatherCode = data.current_weather.weathercode;
    let message = '';

    if (weatherCode >= 61 && weatherCode <= 67) { // Rain
        message = 'It\'s raining. Frodo suggests we make camp. Sam is already cooking.';
    } else if (weatherCode >= 71 && weatherCode <= 77) { // Snow
        message = 'Snow blocks the path. Boromir complains. The Fellowship camps.';
    } else if (weatherCode === 0) { // Clear sky
        message = 'Clear skies! Aragorn leads the Fellowship onward.';
    } else { // Everything else
        message = 'The weather is uncertain. Gandalf says: "We go on, but cautiously."';
    }

    result.textContent = message;
})
.catch(error => {
    console.error(error);
    result.textContent = 'The palantír is clouded. Cannot read the weather.';
});