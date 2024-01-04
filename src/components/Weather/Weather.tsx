import './Weather.css'
interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  name : string
}

interface WeatherDisplayProps {
  weatherData: WeatherData | null
}

const WeatherDisplay= ({ weatherData } : WeatherDisplayProps) => {
  return (
    <div>
      {weatherData && (
        <div className="card-weather">
          <h1 className='weather-text'> {weatherData.name}</h1>
          <p className='weather-text'>Temperature: {weatherData.temperature}°C</p>
          <p className='weather-text'>Humidity: {weatherData.humidity}%</p>
          <p className='weather-text'>Wind Speed: {weatherData.windSpeed} m/s</p>
          <p className='weather-text'>Pressure: {weatherData.pressure} hPa</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
