import React from 'react';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';
import './page.css';

const Hellas = () => {
  const hellasEntries = entries.filter(entry => entry.country === 'Hellas');

  return (
    <div className="page">
      <div className="entries">
        {hellasEntries.map((entry, index) => (
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

export default Hellas;
