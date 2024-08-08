import React from 'react';
import './Hellas.css';
import DiaryEntry from '../components/DiaryEntry';
import entries from '../entries';

const Hellas = () => {
  const hellasEntries = entries.filter(entry => entry.country === 'Hellas');

  return (
    <div className="hellas-page">
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
