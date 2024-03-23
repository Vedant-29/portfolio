const cityName = document.querySelector('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');

const apiKey= 'cc79ba911d8397113508a517fbdee676';

btn.addEventListener('click', () => {
    let city = cityName.value;
    getWeather(city);
});

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  ).then((response) => {
    return response.json();
  }).then (data => {
    console.log(data);
    const iconCode = data.weather[0].icon;
    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="icon">`;

    const weatherCity = data.name;
    weather.innerHTML = weatherCity;

    const temperature = data.main.temp;
    temp.innerHTML = `${Math.round(temperature - 273.15)}°C`;

    const description = data.weather[0].description;
    desc.innerHTML = description;

  });
}

// 