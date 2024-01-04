import { useState, useEffect } from "react";
import DateTime from "../../components/DateTime/DateTime";
import WeatherDisplay from "../../components/Weather/Weather";
import { useFavoriteContext } from "../../components/FavoriteContext/FavoriteContext";
import "./Home.css";

interface HomePage {
  temperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  name: string;
}

const Home = () => {
  const { favorites, setFavorites } = useFavoriteContext();
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState<HomePage | null>({
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    pressure: 0,
    name: "Name City",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "ff098672e579ab4516cc9b49afdd1b8c";
  const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    const fetchFavoriteCitiesData = async () => {
      try {
        setLoading(true);

        const promises = favorites.map(async (favCity) => {
          try {
            const response = await fetch(
              `${API_BASE_URL}?q=${favCity.name}&appid=${API_KEY}&units=metric`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            const updatedCityData: HomePage = {
              temperature: data.main.temp,
              humidity: data.main.humidity,
              windSpeed: data.wind.speed,
              pressure: data.main.pressure,
              name: data.name,
            };
            setFavorites((prev) =>
              prev.map((city) =>
                city.id === favCity.id
                  ? { ...city, weatherData: updatedCityData }
                  : city
              )
            );
          } catch (error) {
            console.error(
              `Error fetching weather data for ${favCity.name}:`,
              error
            );
            setError(`Error fetching weather data for ${favCity.name}`);
          }
        });

        await Promise.all(promises);
      } catch (error) {
        console.error("Error fetching favorite cities data:", error);
        setError("Error fetching favorite cities data");
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteCitiesData();
  }, [favorites, API_KEY, setFavorites]);

  const fetchData = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await fetch(
        `${API_BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`
      );

      if (response.status === 429) {
        throw new Error("Too Many Requests. Please try again later.");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      const updatedWeatherData: HomePage = {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        name: data.name,
      };

      setWeatherData(updatedWeatherData);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (location) {
      fetchData();
    }
  };

  const addToFavorites = () => {
    const fav = { id: Date.now(), name: location, weatherData: null };
    if (location && !favorites.find((favCity) => favCity.name === location)) {
      setFavorites((item) => [...item, fav]);
      setLocation("");
    }
  };

  return (
    <div className="page">
      <div className="weather">
        <DateTime />
        <input
          type="text"
          placeholder="Enter city name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <button onClick={addToFavorites} className="fav-button">
          Add to Favorites
        </button>

        {loading && (
          <div className="loading">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}

        {error && (
          <div className="loading">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="weather-home">
            <WeatherDisplay weatherData={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
