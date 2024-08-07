import React, { useState } from 'react';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';
import './SortAndFilter.css';

const SortAndFilter = () => {
  const [sortOrder, setSortOrder] = useState('ascending');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCruisePrograms, setSelectedCruisePrograms] = useState([]);

  const uniqueCountries = [...new Set(entries.map(entry => entry.country))];
  const uniqueCities = [...new Set(entries.map(entry => entry.city))];
  const uniqueCruisePrograms = [...new Set(entries.map(entry => entry.cruiseProgram).filter(Boolean))]; // Filter out empty values

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    setSelectedCountries(prev =>
      prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
    );
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCities(prev =>
      prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
    );
  };

  const handleCruiseProgramChange = (e) => {
    const value = e.target.value;
    setSelectedCruisePrograms(prev =>
      prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
    );
  };

  const sortedEntries = [...entries].sort((a, b) => {
    if (sortOrder === 'ascending') {
      return new Date(a.date) - new Date(b.date);
    }
    return new Date(b.date) - new Date(a.date);
  });

  const filteredEntries = sortedEntries.filter(entry => {
    const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(entry.country);
    const cityMatch = selectedCities.length === 0 || selectedCities.includes(entry.city);
    const cruiseProgramMatch = selectedCruisePrograms.length === 0 || selectedCruisePrograms.includes(entry.cruiseProgram);
    return countryMatch && cityMatch && cruiseProgramMatch;
  });

  return (
    <div className="sort-and-filter-page">
      <div className="controls">
        <div className="sort-controls">
          <label>Sort by date:</label>
          <select onChange={handleSortChange} value={sortOrder}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>

        <div className="filter-controls">
          <label>Filter by country:</label>
          {uniqueCountries.map(country => (
            <label key={country}>
              <input
                type="checkbox"
                value={country}
                onChange={handleCountryChange}
                checked={selectedCountries.includes(country)}
              />
              {country}
            </label>
          ))}

          <label>Filter by city:</label>
          {uniqueCities.map(city => (
            <label key={city}>
              <input
                type="checkbox"
                value={city}
                onChange={handleCityChange}
                checked={selectedCities.includes(city)}
              />
              {city}
            </label>
          ))}

          <label>Filter by cruise program:</label>
          {uniqueCruisePrograms.map(program => (
            <label key={program}>
              <input
                type="checkbox"
                value={program}
                onChange={handleCruiseProgramChange}
                checked={selectedCruisePrograms.includes(program)}
              />
              {program}
            </label>
          ))}
        </div>
      </div>

      <div className="entries">
        {filteredEntries.map((entry, index) => (
          <DiaryEntry
            key={index}
            title={entry.title}
            date={entry.date}
            text={entry.text}
            images={entry.images}
            cruiseProgram={entry.cruiseProgram}
          />
        ))}
      </div>
    </div>
  );
};

export default SortAndFilter;
