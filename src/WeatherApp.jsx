import './WeatherApp.css';
import 'dotenv';
import { useState } from 'react';
export const WeatherApp = () => {
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '52c2459ced2560b6e7eda9c2896de873';
  const kelvDif = 273.15;
  const [weatherData, setweatherData] = useState(null);
  const fetchWeather = async()=>{
    try {
      const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`);
      const data = await response.json();
      setweatherData(data);
    } catch (error) {
      console.error('Ha habido un error ',error)
    }
  };
  const [city, setCity] = useState('');
  const handleSubmit = (event)=>{
      event.preventDefault();
      fetchWeather();
  };
  const handleOnChange = (event)=>{
      setCity(event.target.value);
  };
  return (
    <div>
      <h1>Iclima</h1>
      <form onSubmit={handleSubmit}>
          <input
             type="text"
             placeholder='Ingrese una Ciudad'
             value={city}
             onChange={handleOnChange}
          />
          <button type="submit">Buscar</button>
      </form>
      
      {weatherData && (

<div>
    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
    <p>La temperatura actual es {Math.floor(weatherData.main.temp - kelvDif)}ºC</p>
    <p>La condición meteorológica actual: {weatherData.weather[0].description}</p>
    <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
    />
</div>


)}
    </div>
  )
}
