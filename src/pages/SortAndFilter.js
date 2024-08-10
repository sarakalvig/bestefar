import React, { useState } from 'react';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';
import './SortAndFilter.css';

const SortAndFilter = () => {
  const [sortOrder, setSortOrder] = useState('ascending');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const uniqueCountries = [...new Set(entries.flatMap(entry => entry.countries))];
  const uniqueCities = [...new Set(entries.flatMap(entry => entry.cities))];
  const uniqueCategories = [...new Set(entries.map(entry => entry.category).filter(Boolean))];

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

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories(prev =>
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
    const countryMatch = selectedCountries.length === 0 || selectedCountries.some(country => entry.countries.includes(country));
    const cityMatch = selectedCities.length === 0 || selectedCities.some(city => entry.cities.includes(city));
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(entry.category);
    return countryMatch && cityMatch && categoryMatch;
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
          <label htmlFor="country">Filter by country:</label>
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

          <label htmlFor="city">Filter by city:</label>
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

          <label htmlFor="category">Filter by category:</label>
          {uniqueCategories.map(category => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                onChange={handleCategoryChange}
                checked={selectedCategories.includes(category)}
              />
              {category}
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
            category={entry.category}
          />
        ))}
      </div>
    </div>
  );
};

export default SortAndFilter;
