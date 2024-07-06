// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add styles if needed

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/Hellas">Hellas</Link></li>
          <li><Link to="/france">France</Link></li>
          <li><Link to="/japan">Japan</Link></li>
          <li><Link to="/india">India</Link></li>
          <li><Link to="/travel-diary">Travel Diary</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
