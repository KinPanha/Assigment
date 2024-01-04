import { NavLink } from "react-router-dom";
import "./SideMenu.css";
const Menu = () => {
  return (
    <>
      <div className="side-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "unActive")}
        >
          HomePage
        </NavLink>
        <NavLink
          to="FavoritePage"
          className={({ isActive }) => (isActive ? "active" : "unActive")}
        >
          Favorites
        </NavLink>
      </div>
      <div className="vertical-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "unActive")}
        >
          HomePage
        </NavLink>
        <NavLink
          to="FavoritePage"
          className={({ isActive }) => (isActive ? "active" : "unActive")}
        >
          Favorites
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
