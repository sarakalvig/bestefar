import React from 'react';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';
import './page.css';

const MSAmbienceEngland = () => {
  const MSAmbienceEnglandEntries = entries.filter(entry => entry.category === 'MSAmbienceEngland');

  return (
    <div className="page">
      <div className="entries">
        {MSAmbienceEnglandEntries.map((entry, index) => (
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

export default MSAmbienceEngland;