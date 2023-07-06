const apiKey = "d73ca1ff266b81160a8f0222ece6da79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

async function checkweather(city){
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log('An error occurred:', error);
      }

      document.querySelector(".city").innerHTML = data.name; //adds city name
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degC"; //adds temp, which is the api object is inside main object
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";//adds humidy, which is the api object is inside main object
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";//adds humidy, which is the api object is inside main object
}

searchBtn.addEventListener('click', ()=>{
    checkweather();
} )
