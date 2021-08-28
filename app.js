
function getApi() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Frankfurt&units=metric&appid=e2baf0e407b523dfeb68b094cded715f")


        .then(res => res.json())
        .then(data => displayWeather(data));
};

function displayWeather(data) {
    console.log(`${data.main.temp}°C`);
}