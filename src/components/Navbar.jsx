import React, { useContext } from "react";
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <label htmlFor="input-light">
        <BsSun />
      </label>
      <button
        type="radio"
        onClick={handleTheme}
        value="light"
        id="input-light"
      />
      <label htmlFor="input-dark">
        <MdDarkMode />
      </label>
      <input type="radio" onClick={handleTheme} value="dark" id="input-dark" />
    </nav>
  );
};

export default Navbar;
