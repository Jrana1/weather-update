let inputField = document.getElementById("input-field");
function getApi() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&units=metric&appid=e2baf0e407b523dfeb68b094cded715f`)
        .then(res => res.json())
        .then(data => displayWeather(data));
    document.getElementById("input-field").value = "";
};
function displayWeather(data) {
    console.log(data);
    document.getElementById("name").innerText = data.name;
    document.getElementById("temp").innerText = `${data.main.temp}°C`;

}