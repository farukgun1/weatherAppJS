const apiKey = "fda507f82322ecb0ee7a555b71cc70fa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

async function checkWeather(city) {
    
    try {
        const response = await fetch(apiUrl + "&q=" + city);
        
        if (!response.ok) {
            throw new Error('Weather API request failed');
        }

        const data = await response.json();
        console.log(data);

        // Verilere erişim sadece response.json() başarılı olduktan sonra yapılmalı
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/css/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "/css/images/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "/css/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/css/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "/css/images/mist.png";
        }

    




    } catch (error) {
        console.error('Hata oluştu:', error.message);
    }
}
