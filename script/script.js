const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e0f2b7102amshaa1596575ea8f03p17ea7fjsnf3f5f9109382',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })

    .catch((err) => console.error(err));
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather('Delhi');

// const commonCities = {
//   cloud_pct,
//   temp,
//   feels_like,
//   humidity,
//   min_temp,
//   max_temp,
//   wind_speed,
//   wind_degrees,
//   sunrise,
//   sunset,
// };
