import React from "react";
import useLocalStorage from "./LocalStorage";
import './app.css';

const LightAndDarkTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`${theme} theme-container`}>
      <div className="content-wrapper">
        <h1>Light and Dark Theme Changer</h1>
        <button className="theme-toggle-btn" onClick={handleChangeTheme}>
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default LightAndDarkTheme;
