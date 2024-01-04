import { FormEvent} from "react";

interface WeatherSearchProps {
  onSearch: () => void;
  onAddToFavorites: () => void;
  city: string;
  onCityChange: (event: FormEvent<HTMLInputElement>) => void;
}

const WeatherSearch = ({
  onSearch,
  onAddToFavorites,
  city,
  onCityChange,
}: WeatherSearchProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={onCityChange}
      />
      <button onClick={onSearch}>Search</button>
      <button onClick={onAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default WeatherSearch;
