import React, { useContext } from "react";
import { HiSun } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <nav>
      {theme === "dark" ? (
        <div>
          <label htmlFor="input-light">
            <HiSun className="icono-sol" />
          </label>
          <input
            type="radio"
            onClick={handleTheme}
            value="light"
            id="input-light"
          />
        </div>
      ) : (
        <div>
          <label htmlFor="input-dark">
            <MdDarkMode />
          </label>
          <input
            type="radio"
            onClick={handleTheme}
            value="dark"
            id="input-dark"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
