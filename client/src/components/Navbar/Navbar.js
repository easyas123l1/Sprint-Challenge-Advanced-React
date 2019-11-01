import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

const initialValue = {
  dark: false
}

const Navbar = () => {

  const [darkMode, setDarkMode] = useDarkMode('darkMode', initialValue);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }
  return (
    <div className="dark-mode__toggle">
      <div
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
      ></div>
    </div>
  );
};

export default Navbar;