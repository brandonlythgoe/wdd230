  
// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const currentTemp2 = document.querySelector("#current-temp2");
const currentTemp3 = document.querySelector("#current-temp3");
const date1 = document.querySelector("#date1")
const date2 = document.querySelector("#date2")
const date3 = document.querySelector("#date3")
humidity = document.querySelector("#humidity")
const weatherIcon = document.querySelector("#weather1");
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
  currentTemp2.innerHTML = `<strong>${weatherData.list[1].main.temp.toFixed(0)}</strong>`;
  currentTemp3.innerHTML = `<strong>${weatherData.list[2].main.temp.toFixed(0)}</strong>`;
//   Date function

    let daysLetters = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  let firstDay = new Date(weatherData.list[0].dt_txt)
  let secondDay = new Date(weatherData.list[1].dt_txt)
  let thirdDay = new Date(weatherData.list[2].dt_txt)
  date1.innerHTML = `<strong>${daysLetters[firstDay.getDay()]}</strong>`;
  date2.innerHTML = `<strong>${daysLetters[secondDay.getDay()]}</strong>`;
  date3.innerHTML = `<strong>${daysLetters[thirdDay.getDay()]}</strong>`;

// 
 humidity.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@4x.png`
  console.log(weatherData.list[0].weather[0].icon)
  const desc = weatherData.list[0].weather.description;
    const wind_value = weatherData.list[0].wind.speed;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;  
  windspeed.textContent = wind_value;










     
    // Get the DOM objects that are dynamic


    const windChillSpan = document.querySelector("#windchill");
    
    // Set up the wind chill content
    let windchill = 'N/A';
    if (wind_value >= 3.0 && weatherData.main.temp.toFixed(0) <= 50){
        let chill = Math.round((35.74 + (0.6215 * weatherData.main.temp.toFixed(0)))-(35.75 * Math.pow(wind_value,0.16)) + (0.4275*weatherData.main.temp.toFixed(0)*Math.pow(wind_value,0.16)));
        windchill = `${chill}`;
    }

    // Write out the dynamic content

    windChillSpan.innerHTML = windchill;
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