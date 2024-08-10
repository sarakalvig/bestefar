///Users/saraostdahl/development/country-website/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styles if needed

const Header = () => {
  return (
    <header>
      <h1 className="header-title">Svein og Sidsel verden rundt</h1>
      <nav>
        <ul>
          <li>
            <button className="dropdown-button">RUNDREISER</button>
            <ul className="submenu">
              <li><Link to="/Marokko">Marokko</Link></li>
            </ul>
          </li>
          <li>
            <button className="dropdown-button">CRUISE</button>
            <ul className="submenu">
              <li><Link to="/celebrity-infinity-middelhavet">CelebrityInfinityMiddelhavet</Link></li>
              <li><Link to="/MS-ambience-england">MSAmbienceEngland</Link></li>
            </ul>
          </li>
          <li>
            <button className="dropdown-button">ELVECRUISE</button>
            <ul className="submenu">
              <li><Link to="/Ganga-Vilas-Bangladesh">GangaVilasBangladesh</Link></li>
            </ul>
          </li>
          <li><Link to="/sort-and-filter">SORTER OG FILTRER</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

