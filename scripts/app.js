const loc = document.querySelector('form');
const weatherCard = document.querySelector('.weather-card');
const weatherdet = document.querySelector('.weather-details');
const img = document.querySelector('.don')
const icon = document.querySelector('.weather-icon > img')

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets,
        weather
    }
};

const updateUI = data => {
    console.log(data);
    const { cityDets, weather } = data;
    weatherdet.innerHTML=`            
        <div class="weather-details">
            <p class="city-name">${cityDets.EnglishName}</p>
            <p class="weather-condition">${weather.WeatherText}</p>
            <span class="temp">${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`;
    let imgSrc = null;
    if(weather.IsDayTime == true)
        imgSrc = 'img/day.svg';
    else
        imgSrc = 'img/night.svg';
    img.setAttribute('src',imgSrc);

    let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    // console.log()
    icon.setAttribute('src',iconSrc);

    if(weatherCard.classList.contains('display'))
        weatherCard.classList.remove('display');
}

loc.addEventListener('submit', e => {
    e.preventDefault();
    const city = loc.city.value.trim();

    
    updateCity(city)
        .then(data => {
            updateUI(data);
        })
        .catch(err => console.log(err));
    

});