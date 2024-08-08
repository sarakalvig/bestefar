import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hellas from './pages/Hellas';
import India from './pages/India';
import TravelDiary from './pages/TravelDiary';
import SortAndFilter from './pages/SortAndFilter';
import MiddelhavetCelebrityInfinity from './pages/MiddelhavetCelebrityInfinity';
import './pages/page.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/hellas" element={<Hellas />} />
        <Route path="/india" element={<India />} />
        <Route path="/travel-diary" element={<TravelDiary />} />
        <Route path="/sort-and-filter" element={<SortAndFilter />} />
        <Route path="/middelhavet-celebrity-infinity" element={<MiddelhavetCelebrityInfinity />} />
      </Routes>
    </Router>
  );
};

export default App;

