// import { Dispatch, SetStateAction } from "react";
import { useFavoriteContext } from "../../components/FavoriteContext/FavoriteContext";
import WeatherDisplay from "../../components/Weather/Weather";
import "./Favorites.css";
const Favorites = () => {
  const { favorites, setFavorites } = useFavoriteContext();
  const removeFromFavorites = (id: number) => {
    setFavorites((item) => item.filter((favCity) => favCity.id !== id));
  };

  return (
    <div className="page">
      <h2 className="favorite">Favorite</h2>
      <div className="item-weather">
        {favorites.map((favCity) => (
          <div key={favCity.id} className="fav">
            <button
              onClick={() => removeFromFavorites(favCity.id)}
              className="button-fav"
            >
              Remove
            </button>
            <WeatherDisplay weatherData={favCity.weatherData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
