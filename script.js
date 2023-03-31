const API_KEY = '45a4ec23736a4bca9dc83500232903'


// define elements on page
const getWeatherBtn = document.querySelector('#getWeatherBtn');
const appContent = document.querySelector('.appContent');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const cityName = document.querySelector('#city');
const currentCondition = document.querySelector('#currentCondition');
const temp = document.querySelector('#temp');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');
const uv = document.querySelector('#uv');
const img = document.querySelector('#testimg');
const cityToSearch = document.querySelector('#citySearch');

// blank object to store data
currentObj = {}

function getWeather(city) {
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=45a4ec23736a4bca9dc83500232903&q=${city}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {         
        // define obj
        currentObj['name'] = response.location.name;
        currentObj['currentCondition'] = response.current.condition.text;
        currentObj['temp'] = response.current.feelslike_c;
        currentObj['humidity'] = response.current.humidity;
        currentObj['windSpeed'] = response.current.wind_mph; 
        currentObj['date'] = response.location.localtime.slice(0, 10);
        currentObj['time'] = response.location.localtime.slice(11);
        currentObj['uv'] = response.current.uv;

        // assign values
        date.textContent = currentObj['date'];
        time.textContent = currentObj['time'];
        cityName.textContent = currentObj['name']
        currentCondition.textContent = currentObj['currentCondition'];
        temp.textContent = `${currentObj['temp']}°C`;
        humidity.textContent = `${currentObj['humidity']}%`;
        windSpeed.textContent = `${currentObj['windSpeed']}mph`;
        uv.textContent = currentObj['uv'];   

        // Change background according to weather 
        if (currentObj.currentCondition.toLowerCase().includes('sunny') || (currentObj.currentCondition.toLowerCase().includes('clear'))) {
            img.src = './images/clear-day.svg';
            appContent.style.backgroundColor = '#ebeeaf'
        } else if (currentObj.currentCondition.toLowerCase().includes('rain')) {
            img.src = './images/rain.svg';
            appContent.style.backgroundColor = '#8adeff'
        } else if (currentObj.currentCondition.toLowerCase().includes('cloud') || (currentObj.currentCondition.toLowerCase().includes('overcast'))) {
            img.src = './images/cloudy.svg';
            appContent.style.backgroundColor = '#dfded8'
        }
        })
    .catch(e => {
        alert('Please enter a valid city name...')
        console.log(e);
    })
};

function getWeatherDefault() {
    getWeather('london');
}

// display page default
getWeatherDefault();

// Listeners
getWeatherBtn.addEventListener('click', () => getWeather(cityToSearch.value));

