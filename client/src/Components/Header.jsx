import React from 'react';
import { useDark } from "../Hooks/useDark";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';

library.add(faFutbol);

const Header = () => {
  const [darkMode, setDarkMode] = useDark(false);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <header className={darkMode ? 'dark-header' : ''}>
      <nav>
        <div>
          <FontAwesomeIcon data-testid="logo" icon={faFutbol} className={darkMode ? 'App-logo dark-mode-logo' : 'App-logo'} alt="logo" />
        </div>
        <div className="heading">
          <h1 data-testid="title" className="title">Women's World Cup players</h1>
          <h2 data-testid="subtitle" className="subtitle">Ranked by search interest</h2>
          <h3 data-testid="description" className="description">from Google Trends, June-July 2019, worldwide</h3>
        </div>
        <div>
          <div
            data-testid="darkMode"
            className={darkMode ? "dark-mode__toggle dark-mode__toggle-dark" : "dark-mode__toggle"}
            onClick={toggleMode}
            >
            <div
              className={darkMode ? 'toggle toggle-dark toggled' : 'toggle'}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;