const apiKey = "d73ca1ff266b81160a8f0222ece6da79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    console.log("Fetching weather for", city);
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name; //adds city name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degC"; //adds temp, which is the api object is inside main object
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";//adds humidy, which is the api object is inside main object
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";//adds humidy, which is the api object is inside main object

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
          } else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
          }
            else if(data.weather[0].main == "Rain"){  
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
        
        } catch (error) {
        console.log('An error occurred:', error);
      }   
}

searchBtn.addEventListener('click', ()=>{
    checkweather(searchBox.value); //to give data written in the input field
});
