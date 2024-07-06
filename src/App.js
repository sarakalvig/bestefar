// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hellas from './pages/Hellas';
import TravelDiary from './pages/TravelDiary';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Hellas" element={<Hellas />} />
        <Route path="/travel-diary" element={<TravelDiary />} />
      </Routes>
    </Router>
  );
};

export default App;
