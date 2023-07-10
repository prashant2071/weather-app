const  getCity = async () =>{
    // e.preventDefault();
    const cityName = document.getElementById("cityName").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=0cd375c47bba01e4e3b9e18a78a8b958&units=metric`);
    const data = await response.json();
    console.log("the data is ",data.main)
    document.getElementById("img-id").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.getElementById("weather-summary").innerText=data.weather[0].main
    document.getElementById("city-name").innerText=data.name
    document.getElementById("temperature").innerText=data.main.temp + "°C"
    document.getElementById("wind").innerText=data.wind.speed + "km/hr"
    document.getElementById("humidity").innerText=data.main.humidity + "%"
    document.getElementById("preassure").innerText=data.main.pressure
  }


// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=London&APPID=0cd375c47bba01e4e3b9e18a78a8b958