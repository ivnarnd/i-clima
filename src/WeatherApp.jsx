import './WeatherApp.css';

export const WeatherApp = () => {
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = '52c2459ced2560b6e7eda9c2896de873';
  const kelvDif = 273.15;

  return (
    <div>
      <h1>Iclima</h1>
      <form action="">
          <input type="text" placeholder='Ingrese una Ciudad' />
          <button type="submit">Buscar</button>
      </form>
    </div>
  )
}
