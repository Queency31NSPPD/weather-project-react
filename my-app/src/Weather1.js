import React, {useState} from 'react';
import './Weather.css';
import axios from 'axios';


export default function Weather(){

const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response){
    console.log(response.data);
    setWeatherData({
    ready: true,
    temperature:response.data.temperature.current,
    city: response.data.city,
    date: 'last updated: Mon, 22 May 2023, time: 5:34',
    wind: response.data.wind.speed,   
    humidity: response.data.temperature.humidity,
    description:response.data.condition.description,
    icon_url:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png`,
});
   
}

if(weatherData.ready){
    return(
         <div className="Weather">
            <form>
                <div className='row'>
                    <div className='col-9'>
                        <input
                        type='search' placeholder='Enter a city name...'
                        className='form-control' 
                        autoFocus='on'
                        />
                    </div>
                    <div className='col-3'>
                        <input type='submit' value='search'
                        className='btn btn-primary w-100' />
                    </div>
                </div>
            </form>
    <h1>{weatherData.city}</h1>
    <ul>
        <li className='text-capitalize'>
             {weatherData.date} 
            
        </li>
        <li className='text-capitalize'>
            {weatherData.description}
        </li>
    </ul>
    <div className='row mt-3'>
        <div className='col-6'>
<div className='clearfix'>
         <img src={weatherData.icon_url}
         alt={weatherData.description}
         className='float-left'
         />  
     
         <span className='temperature'>{Math.round(weatherData.temperature)}</span>
         <span className='unit'>°C</span>
        </div>
        </div> 


        <div className='col-6'>
            <ul>
                <li>
                    Humidity:{weatherData.humidity}%
                </li>
                <li>
                    Wind:{Math.round(weatherData.wind)}km/h
                </li>
            </ul>
        </div>
    </div>
   </div>
    );
}else{
     const apiKey = '0b8bet4102f106df6eef01d97o5b3bab';
    let city = 'New York';
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=New York&key=0b8bet4102f106df6eef01d97o5b3bab&units=metric';
    axios.get(apiUrl).then(handleResponse);

return 'loading...';

}
}