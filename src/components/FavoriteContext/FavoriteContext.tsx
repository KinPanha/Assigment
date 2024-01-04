/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface HomePage {
  temperature: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  name: string;
}

interface Favorite {
  id: number;
  name: string;
  weatherData: HomePage | null;
}

interface FavoriteContextProps {
  favorites: Favorite[];
  setFavorites: Dispatch<SetStateAction<Favorite[]>>;
}
const FavoriteContext = createContext<FavoriteContextProps | undefined>(undefined);

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavoriteContext must be used within a FavoriteProvider');
  }
  return context;
};
