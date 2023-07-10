const  getCity = async () =>{
    const div=document.getElementById("img-div");
    const img = new Image();
    img.className="img-class";
    const cityName = document.getElementById("cityName").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=0cd375c47bba01e4e3b9e18a78a8b958&units=metric`);
    const data = await response.json();
    if(data.cod===200){
        
    img.src="https://www.pngmart.com/files/15/Happy-Emoji-PNG.png"
    div.append(img);
    document.getElementById("img-id").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.getElementById("weather-summary").innerText=data.weather[0].main
    document.getElementById("city-name").innerText=data.name
    document.getElementById("temperature").innerText=data.main.temp + "°C"
    document.getElementById("wind").innerText=data.wind.speed + "km/hr"
    document.getElementById("humidity").innerText=data.main.humidity + "%"
    document.getElementById("preassure").innerText=data.main.pressure;
    document.getElementById("result").innerText="data fetched successfully";

    }else{
        document.getElementById("result").innerText=data.message;
        img.src="https://www.pngmart.com/files/1/Sad-Emoji-PNG-Image.png"
        div.appendChild(img);
    }
  }
