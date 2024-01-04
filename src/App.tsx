import "./App.css";
import Home from "./page/HomePage/Home";
import Favorites from "./page/Favorites/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu";
import { FavoriteProvider } from "./components/FavoriteContext/FavoriteContext";
function App() {
  return (
    <>
      <FavoriteProvider>
        <BrowserRouter>
          <div className="firstContent">
          <SideMenu/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="FavoritePage" element={<Favorites />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FavoriteProvider>
    </>
  );
}

export default App;
