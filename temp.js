const temperature = document.querySelector('[class="temperature"]');

function getUserPosition() {
  let url;
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=95b11822eb429c84c1143a19251b1881`;
    fetchApi(url);
  });
}

function fetchApi(url) {
  fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(0);
    temperature.innerText = `${tempInCelsius}°C`;
  })
  .catch((err) => {
    console.log(`Impossível acessar o OpenWeather. Verifique a sua conexão.`);
    console.warn(err);
  })
}

setInterval(getUserPosition, 60000);

getUserPosition();