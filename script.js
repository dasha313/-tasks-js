fetch('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=df068345397ee8c206cc4d1be611ff1c')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.degree').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
      //https://openweathermap.org/img/wn/13d@2x.png
      document.querySelector('.feature').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      document.querySelector('.weather').innerHTML = data.weather[0]['description'];
      document.querySelector('.gust li').innerHTML = data.wind.gust;
      document.querySelector('.speed li').innerHTML = data.wind.speed;
   })
   .catch(function () {

   });