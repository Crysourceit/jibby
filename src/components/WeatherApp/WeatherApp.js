import React, { useState } from 'react';

const axios = require('axios').default;


function makeFirstUpper(text) {
  return text[0].toUpperCase() + String(text).substring(1, text.length) + "."
}


function WeatherApp(props) {


  const [temp, setTemp] = useState();
  const city = useState(props.city);
  const [weatherDescription, setWeatherDescription] = useState();


  //With promise
  const getTemp = () => {
    axios.get("/weather/" + city).then(response => {
      // console.log(response.data.temp_c);
      setTemp(response.data.temp_c);
      setWeatherDescription(makeFirstUpper(response.data.weatherDescription));
    })
  };

  //With await/async ... later

  getTemp();

  return (
    <div>
      <p style={{ color: '#3C8DAD' }}>Current temperature in {city} is {temp}. {weatherDescription}   <i class="fas fa-sync" onClick={getTemp} style={{ cursor: 'pointer', color: 'green' }}></i> [react/express proxy + weather api fetch]</p>
    </div>
  )
}

export default WeatherApp
