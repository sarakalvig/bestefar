import React from 'react';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';
import './page.css';

const Marokko = () => {
    const MarokkoEntries = entries.filter(entry => entry.countries.includes('Marokko'));
  return (
    <div className="page">
      <div className="entries">
        {MarokkoEntries.map((entry, index) => (
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

export default Marokko;