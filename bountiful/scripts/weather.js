  
// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const currentTemp2 = document.querySelector("#current-temp2");
const currentTemp3 = document.querySelector("#current-temp3");
const date1 = document.querySelector("#date1")
const date2 = document.querySelector("#date2")
const date3 = document.querySelector("#date3")
const humidity = document.querySelector("#humidity")
const humidity2 = document.querySelector("#humidity2")
const humidity3 = document.querySelector("#humidity3")
const weatherIcon = document.querySelector("#weather1");
const weatherIcon2 = document.querySelector("#weather2");
const weatherIcon3 = document.querySelector("#weather3");
const captionDesc = document.querySelector("#description");
const windspeed = document.querySelector("#windspeed")
// This is the lat/lon for Fairbanks, AK. You will want to change this to your chamber city when using this in your project
const LAT = "33.158092";
const LON = "-117.350594";
const APIKEY = "aeac4c8af619ecc4c6319897ce68d202";

// const apiURL = `api.openweathermap.org/data/2.5/forecast/daily?lat=${LAT}&lon=${LON}&cnt=${cnt}&appid=${APIKEY}`;
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`
function displayResults(weatherData) {
  // toFixed(0) rounds the temperature to the nearest whole number
  currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
  humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity.toFixed(0)}</strong>`;
  currentTemp2.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(0)}</strong>`;
  humidity2.innerHTML = `<strong>${weatherData.list[1].main.humidity.toFixed(0)}</strong>`;
  currentTemp3.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(0)}</strong>`;
  humidity3.innerHTML = `<strong>${weatherData.list[2].main.humidity.toFixed(0)}</strong>`;
//   Date function

    let daysLetters = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  let firstDay = new Date(weatherData.list[0].dt_txt)
  let secondDay = new Date(weatherData.list[7].dt_txt)
  let thirdDay = new Date(weatherData.list[15].dt_txt)
  date1.innerHTML = `<strong>${daysLetters[firstDay.getDay()]}</strong>`;
  date2.innerHTML = `<strong>${daysLetters[secondDay.getDay()]}</strong>`;
  date3.innerHTML = `<strong>${daysLetters[thirdDay.getDay()]}</strong>`;

// 

  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png`
  const iconsrc2 = `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}@4x.png`
  const iconsrc3 = `https://openweathermap.org/img/wn/${weatherData.list[2].weather[0].icon}@4x.png`
  console.log(weatherData.list[0].weather[0].icon)
  const desc = weatherData.list[0].weather.description;
    const wind_value = weatherData.list[0].wind.speed;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherIcon2.setAttribute('src', iconsrc2);
  weatherIcon2.setAttribute('alt', desc);
  weatherIcon3.setAttribute('src', iconsrc3);
  weatherIcon3.setAttribute('alt', desc);
  captionDesc.textContent = desc;  











     
    // Get the DOM objects that are dynamic


}



async function apiFetch() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call uncomment the following line when ready
       displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
``
apiFetch();