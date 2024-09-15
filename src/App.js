import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hellas from './pages/Hellas';
import India from './pages/India';
import SortAndFilter from './pages/SortAndFilter';
import CelebrityInfinityMiddelhavet from './pages/CelebrityInfinityMiddelhavet';
import MSAmbienceEngland from './pages/MSAmbienceEngland';
import './pages/page.css';
import GangaVilasBangladesh from './pages/GangaVilasBangladesh';
import Marokko from './pages/Marokko';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sort-and-filter" element={<SortAndFilter />} />
        <Route path="/celebrity-infinity-middelhavet" element={<CelebrityInfinityMiddelhavet />} />
        <Route path="/MS-ambience-england" element={<MSAmbienceEngland />} />
        <Route path="/Ganga-Vilas-Bangladesh" element={<GangaVilasBangladesh />} />
        <Route path="/Marokko" element={<Marokko />} />
      </Routes>
    </Router>
  );
};

export default App;

