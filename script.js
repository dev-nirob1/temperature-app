//api keys 
const apiKeys = `560b4b23c7bf0c147de0c6b34f6c4088`;

const loadWeather = (city) => {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys}&units=metric`;
    fetch(url).then(res => res.json()).then(data => displayTemp(data))
}
loadWeather('dhaka')

const displayTemp = temp => {
    console.log(temp)
    setInnerTextById('temp', temp.main.temp)
    setInnerTextById('clouds', temp.weather[0].main)    
};

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
};

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-input');
    const city = searchField.value;
    searchField.value = '';

    setInnerTextById('city-name', city);
    loadWeather(city);
});

