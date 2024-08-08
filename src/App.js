import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hellas from './pages/Hellas';
import India from './pages/India';
import TravelDiary from './pages/TravelDiary';
import SortAndFilter from './pages/SortAndFilter';
import CelebrityInfinityMiddelhavet from './pages/CelebrityInfinityMiddelhavet';
import MSAmbienceEngland from './pages/MSAmbienceEngland';
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
        <Route path="/celebrity-infinity-middelhavet" element={<CelebrityInfinityMiddelhavet />} />
        <Route path="/MS-ambience-england" element={<MSAmbienceEngland />} />

      </Routes>
    </Router>
  );
};

export default App;

