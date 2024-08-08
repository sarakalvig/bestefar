import React from 'react';
import './India.css';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';

const india = () => {
  const indiaEntries = entries.filter(entry => entry.country === 'India');

  return (
    <div className="india-page">
      <div className="entries">
        {indiaEntries.map((entry, index) => (
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

export default india;
