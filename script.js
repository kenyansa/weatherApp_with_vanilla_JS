const apiKey = "d73ca1ff266b81160a8f0222ece6da79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=nairobi";

async function checkweather(){
    try {
        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error('Request failed with status ' + response.status);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log('An error occurred:', error);
      }

      document.querySelector(".city").innerHTML = data.name; //adds city name
      document.querySelector(".temp").innerHTML = data.main.temp; //adds temp, which is the api object is inside main object
      document.querySelector(".humidity").innerHTML = data.main.humidity;//adds humidy, which is the api object is inside main object
      document.querySelector(".wind").innerHTML = data.data.wind.speed;//adds humidy, which is the api object is inside main object
}

checkweather();