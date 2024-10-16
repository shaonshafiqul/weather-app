function getWeather() {
    const city = document
        .getElementById('city');
    if (city.value== '') {
        alert('Please enter a city');
        return;
    }
    checkWeather(city.value);
        city.value= "";
}
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey = 'c3e5729bc67a745666fdaa8dc7fd7197';
const icon = document.querySelector('.weather-icon');
const condition = document.querySelector('.weather-condition');
function checkWeather(city) {
    fetch(apiUrl + city + `&APPID=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            const iconUrl = `https://openweathermap.org/img/wn/${data
                .weather[0]
                .icon}@4x.png`;
            document
                .querySelector(".city-name")
                .innerText = data.name;
            document
                .querySelector(".temp")
                .innerText = Math.round(data.main.temp) + '°c';
            document
                .querySelector(".humidity")
                .innerText = Math.round(data.main.humidity) + '%';
            document
                .querySelector(".wind")
                .innerText = Math.round(data.wind.speed) + 'km/h';
            switch (data.weather[0].main) {
                case 'Clouds':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Clear':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Rain':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Mist':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Snow':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Haze':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Thunderstorm':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Smoke':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Dust':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Fog':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Sand':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Ash':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Squall':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
                case 'Tornado':
                    icon.src = iconUrl;
                    condition.innerText = data
                        .weather[0]
                        .main;
                    break;
            }
            document
                .querySelector('.error')
                .style
                .display = 'none';
            document
                .querySelector('.weather')
                .style
                .display = 'block';
            console.log(data)
        })
        .catch(error => {
            document
                .querySelector('.error')
                .style
                .display = 'block';
            document
                .querySelector('.weather')
                .style
                .display = 'none';
        })
    };
document
    .querySelector('.btn')
    .addEventListener('click', () => {
        getWeather()
    });
