import React, { useState } from 'react';

const axios = require('axios').default;


function WeatherApp(props) {


  const [temp, setTemp] = useState();

  const getBKKTemp = () => {
    axios.get("/bkkweather").then(response => {
      console.log(response.data.temp_c);
      setTemp(response.data.temp_c);
    })
  };

  getBKKTemp();

  return (
    <div>
      <p style={{ color: '#3C8DAD' }}>Current temperature in Bangkok is {temp}. <i class="fas fa-sync" onClick={getBKKTemp} style={{ cursor: 'pointer', color: 'green' }}></i> [react/express proxy + weather api fetch]</p>
    </div>
  )
}

export default WeatherApp
