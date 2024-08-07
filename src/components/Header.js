import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styles if needed

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button className="dropdown-button">Countries</button>
            <ul className="submenu">
              <li><Link to="/hellas">Hellas</Link></li>
              <li><Link to="/france">France</Link></li>
              <li><Link to="/japan">Japan</Link></li>
              <li><Link to="/india">India</Link></li>
            </ul>
          </li>
          <li><Link to="/travel-diary">Travel Diary</Link></li>
          <li><Link to="/sort-and-filter">Sort and Filter</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
